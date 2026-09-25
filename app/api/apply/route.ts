import { NextResponse } from "next/server";
import { generateApplicationPdf } from "@/lib/generateApplicationPdf";

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

    console.log("Application PDF generated:", {
      applicationReference,
      pages: "generated",
      applicant: body.fullName,
    });

    /*
     * Email delivery will be connected in the next step.
     *
     * For now, the API successfully:
     * 1. Receives the application
     * 2. Validates required fields
     * 3. Generates the application PDF
     */

    return NextResponse.json({
      success: true,
      applicationReference,
      submissionDate,
      pdfGenerated: true,
      message: "Application processed successfully.",
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
