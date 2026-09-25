import { NextResponse } from "next/server";
import { Resend } from "resend";
import { generateApplicationPdf } from "@/lib/generateApplicationPdf";

export const runtime = "nodejs";

export async function POST(request: Request) {
  try {
    const body = await request.json();

    // Basic anti-spam honeypot.
    if (body.website) {
      return NextResponse.json(
        { error: "Invalid submission." },
        { status: 400 }
      );
    }

    const requiredFields = [
      "fullName",
      "dateOfBirth",
      "placeOfBirth",
      "nationality",
      "civilStatus",
      "gender",
      "residentialAddress",
      "barangay",
      "cityMunicipality",
      "province",
      "phoneNumber",
      "emailAddress",
      "emergencyContactName",
      "emergencyContactPhone",
      "emergencyContactRelationship",
      "idType",
      "idNumber",
      "currentOccupation",
      "highestEducationalAttainment",
      "reasonForJoining",
      "declaration",
      "privacyConsent",
    ];

    const missingFields = requiredFields.filter((field) => {
      const value = body[field];

      if (Array.isArray(value)) {
        return value.length === 0;
      }

      return (
        value === undefined ||
        value === null ||
        String(value).trim() === ""
      );
    });

    if (missingFields.length > 0) {
      return NextResponse.json(
        {
          error: "Please complete all required fields.",
          fields: missingFields,
        },
        { status: 400 }
      );
    }

    if (!process.env.RESEND_API_KEY) {
      console.error("RESEND_API_KEY is not configured.");

      return NextResponse.json(
        { error: "Email service is not configured." },
        { status: 500 }
      );
    }

    if (!process.env.SUBANG_HR_EMAIL) {
      console.error("SUBANG_HR_EMAIL is not configured.");

      return NextResponse.json(
        { error: "HR email is not configured." },
        { status: 500 }
      );
    }

    const resend = new Resend(process.env.RESEND_API_KEY);

    const now = new Date();

    const applicationReference = `SUBANG-${now.getFullYear()}-${Math.random()
      .toString(36)
      .substring(2, 8)
      .toUpperCase()}`;

    const submissionDate = now.toLocaleDateString("en-PH", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });

    const applicationData = {
      ...body,
      applicationReference,
      submissionDate,
      electronicSignature: body.electronicSignature || body.fullName,
      signatureDate: body.signatureDate || submissionDate,
      issuingAuthority:
        body.issuingAuthority || body.issuingCountryAuthority || "",
    };

    // Generate the PDF.
    const pdfBytes = await generateApplicationPdf(applicationData);

    const safeName = String(body.fullName)
      .replace(/[^a-zA-Z0-9\s_-]/g, "")
      .trim()
      .replace(/\s+/g, "-")
      .substring(0, 80);

    const filename = `SUBANG-Membership-Application-${safeName || "Applicant"}.pdf`;

    // Send the application to Subang Human Resources.
    const { data, error } = await resend.emails.send({
      from: "Subang Philippines <onboarding@resend.dev>",
      to: [process.env.SUBANG_HR_EMAIL],
      subject: `New Membership Application | ${applicationReference}`,
      text: [
        "A new Subang Philippines membership application has been submitted.",
        "",
        `Application Reference: ${applicationReference}`,
        `Applicant: ${body.fullName}`,
        `Applicant Email: ${body.emailAddress}`,
        `Submission Date: ${submissionDate}`,
        "",
        "The completed membership application form is attached as a PDF.",
      ].join("\n"),
      attachments: [
        {
          filename,
          content: Buffer.from(pdfBytes),
        },
      ],
    });

    if (error) {
      console.error("Resend email error:", error);

      return NextResponse.json(
        {
          error:
            "The application was processed, but the email could not be sent. Please try again later.",
        },
        { status: 502 }
      );
    }

    console.log("Application emailed successfully:", {
      applicationReference,
      emailId: data?.id,
      applicant: body.fullName,
    });

    return NextResponse.json({
      success: true,
      applicationReference,
      submissionDate,
      pdfGenerated: true,
      emailSent: true,
      message: "Application submitted successfully.",
    });
  } catch (error) {
    console.error("Application submission error:", error);

    return NextResponse.json(
      {
        error:
          "Unable to process the application at this time. Please try again later.",
      },
      { status: 500 }
    );
  }
}
