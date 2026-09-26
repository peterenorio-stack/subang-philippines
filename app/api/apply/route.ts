import { NextResponse } from "next/server";
import { Resend } from "resend";
import { generateApplicationPdf } from "@/lib/generateApplicationPdf";

export const runtime = "nodejs";

const DECLARATION_TEXT = `
I hereby declare that all information provided in this application form is true, accurate, and complete to the best of my knowledge. I understand that any false, misleading, or incomplete information may result in the rejection of my membership application or termination of membership if discovered at a later date.

I consent to Subang verifying the information provided in this application form through appropriate means, including but not limited to contacting references, employers, educational institutions, and government authorities.

I understand and agree that submission of this application does not guarantee membership in Subang, and membership acceptance is subject to review and approval by Subang's membership committee.
`.trim();

const PRIVACY_CONSENT_TEXT = `
I, ________________________________, hereby consent to the collection, processing, and storage of my personal information by Subang in accordance with the provisions of the Data Privacy Act of 2012 of the Philippines (Republic Act No. 10173). I understand that the information provided by me will be used solely for the purpose of processing my membership application.

I. Collection of Personal Information and Purpose of Collection

I understand that the personal information collected may include but is not limited to full name, date of birth, contact information (address, email, phone number), identification documents (e.g., ID card, passport), employment or educational background, and other relevant information necessary for the membership application process.

The personal information provided will be used for the following purposes: verifying identity and eligibility for membership, contacting applicants regarding their application status, internal record keeping, and complying with legal obligations and regulatory requirements.

II. Confidentiality and Security

I acknowledge that Subang is committed to ensuring the confidentiality, integrity, and security of my personal information. Appropriate technical and organizational measures will be implemented to prevent unauthorized access, use, or disclosure of my personal information.

III. Data Retention

I understand that my personal information will be retained only for as long as necessary to fulfill the purposes outlined in this consent form or as required by law. Upon the completion of the membership application process, my personal information will be securely disposed of in accordance with Subang's data retention policies.

IV. Consent Withdrawal

I understand that I have the right to withdraw my consent at any time by notifying Subang in writing. However, I acknowledge that withdrawing my consent may affect the processing of my membership application.

V. Rights of Data Subjects

I acknowledge that as a data subject, I have the following rights under the Data Privacy Act of 2012: the right to be informed, the right to access, the right to object, and the right to erasure or blocking.

By signing below, I confirm that I have read and understood the terms of this consent form and voluntarily agree to the collection, processing, and storage of my personal information by Subang in accordance with the Data Privacy Act of 2012.
`.trim();

export async function POST(request: Request) {
  const diagnosticId = `APP-${Date.now()}`;

  try {
    console.log(`[${diagnosticId}] Application submission started.`);

    const body = await request.json();

    console.log(`[${diagnosticId}] Request body received.`, {
      hasFullName: Boolean(body.fullName),
      hasEmailAddress: Boolean(body.emailAddress),
      hasPrivacyConsent: Boolean(body.privacyConsent),
      hasDeclarationAgreement: Boolean(body.declarationAgreement),
      hasHoneypotValue: Boolean(body.website),
    });

    // Basic anti-spam honeypot.
    if (body.website) {
      console.warn(`[${diagnosticId}] Honeypot triggered.`);

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
      "permanentAddress",
      "barangay",
      "cityMunicipality",
      "postalCode",
      "province",
      "phoneNumber",
      "emailAddress",
      "emergencyContactName",
      "emergencyContactPhone",
      "emergencyContactRelationship",
      "idType",
      "idNumber",
      "issuingAuthority",
      "dateIssued",
      "dateOfExpiry",
      "currentOccupation",
      "highestEducationalAttainment",
      "reasonForJoining",
      "declarationSignature",
      "declarationDate",
      "declarationAgreement",
      "consentSignature",
      "consentDate",
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
      console.warn(`[${diagnosticId}] Required fields missing:`, missingFields);

      return NextResponse.json(
        {
          error: "Please complete all required fields.",
          fields: missingFields,
          diagnosticId,
        },
        { status: 400 }
      );
    }

    console.log(`[${diagnosticId}] Required field validation passed.`);

    // Check environment configuration without exposing secrets.
    const hasResendApiKey = Boolean(process.env.RESEND_API_KEY);
    const hrEmail = process.env.SUBANG_HR_EMAIL;

    console.log(`[${diagnosticId}] Environment check:`, {
      hasResendApiKey,
      hasHrEmail: Boolean(hrEmail),
      hrEmailDomain: hrEmail
        ? hrEmail.split("@")[1] || "invalid"
        : null,
    });

    if (!hasResendApiKey) {
      console.error(`[${diagnosticId}] RESEND_API_KEY is missing.`);

      return NextResponse.json(
        {
          error: "Email service is not configured.",
          diagnosticId,
        },
        { status: 500 }
      );
    }

    if (!hrEmail) {
      console.error(`[${diagnosticId}] SUBANG_HR_EMAIL is missing.`);

      return NextResponse.json(
        {
          error: "HR email is not configured.",
          diagnosticId,
        },
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

    console.log(`[${diagnosticId}] Application reference created:`, {
      applicationReference,
      submissionDate,
    });

    const applicationData = {
      ...body,
      applicationReference,
      submissionDate,
      declaration: DECLARATION_TEXT,
      privacyConsent: PRIVACY_CONSENT_TEXT,
      electronicSignature:
        body.consentSignature ||
        body.declarationSignature ||
        body.fullName,
      signatureDate:
        body.consentDate ||
        body.declarationDate ||
        submissionDate,
      issuingAuthority:
        body.issuingAuthority ||
        body.issuingCountryAuthority ||
        "",
    };

    console.log(`[${diagnosticId}] Starting PDF generation.`);

    let pdfBytes: Uint8Array;

    try {
      pdfBytes = await generateApplicationPdf(applicationData);

      console.log(`[${diagnosticId}] PDF generated successfully.`, {
        pdfSizeBytes: pdfBytes.length,
      });
    } catch (pdfError) {
      console.error(`[${diagnosticId}] PDF generation failed:`, pdfError);

      return NextResponse.json(
        {
          error:
            "The application was received, but the PDF could not be generated.",
          diagnosticId,
        },
        { status: 500 }
      );
    }

    const safeName = String(body.fullName)
      .replace(/[^a-zA-Z0-9\s_-]/g, "")
      .trim()
      .replace(/\s+/g, "-")
      .substring(0, 80);

    const filename = `SUBANG-Membership-Application-${
      safeName || "Applicant"
    }.pdf`;

    console.log(`[${diagnosticId}] Preparing Resend email.`, {
      from: "onboarding@resend.dev",
      toDomain: hrEmail.split("@")[1] || "invalid",
      subject: `New Membership Application | ${applicationReference}`,
      attachmentFilename: filename,
      attachmentSizeBytes: pdfBytes.length,
    });

    let resendData;
    let resendError;

    try {
      const result = await resend.emails.send({
        from: "Subang Philippines <onboarding@resend.dev>",
        to: [hrEmail],
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

      resendData = result.data;
      resendError = result.error;

      console.log(`[${diagnosticId}] Resend response received:`, {
        data: resendData,
        error: resendError,
      });
    } catch (resendException) {
      console.error(
        `[${diagnosticId}] Resend SDK threw an exception:`,
        resendException
      );

      return NextResponse.json(
        {
          error:
            "The application was processed, but the email service could not be reached.",
          diagnosticId,
        },
        { status: 502 }
      );
    }

    if (resendError) {
      console.error(`[${diagnosticId}] Resend rejected the email:`, {
        name: resendError.name,
        message: resendError.message,
        statusCode: resendError.statusCode,
        error: resendError,
      });

      return NextResponse.json(
        {
          error:
            "The application was processed, but the email service rejected the message.",
          diagnosticId,
          resendError: {
            name: resendError.name,
            message: resendError.message,
            statusCode: resendError.statusCode,
          },
        },
        { status: 502 }
      );
    }

    console.log(`[${diagnosticId}] EMAIL SENT SUCCESSFULLY.`, {
      applicationReference,
      resendEmailId: resendData?.id,
    });

    return NextResponse.json({
      success: true,
      applicationReference,
      submissionDate,
      pdfGenerated: true,
      emailSent: true,
      resendEmailId: resendData?.id || null,
      diagnosticId,
      message: "Application submitted successfully.",
    });
  } catch (error) {
    console.error(`[${diagnosticId}] Application submission failed:`, error);

    return NextResponse.json(
      {
        error:
          "Unable to process the application at this time. Please try again later.",
        diagnosticId,
      },
      { status: 500 }
    );
  }
}
