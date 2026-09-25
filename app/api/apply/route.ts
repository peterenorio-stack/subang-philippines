import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const body = await request.json();

    // Basic anti-spam honeypot.
    // The application form will contain a hidden "website" field.
    if (body.website) {
      return NextResponse.json(
        { error: "Invalid submission." },
        { status: 400 }
      );
    }

    // Required fields for the initial submission.
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

      return value === undefined || value === null || String(value).trim() === "";
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

    const applicationReference = `SUBANG-${new Date()
      .getFullYear()}-${Math.random().toString(36).substring(2, 8).toUpperCase()}`;

    /*
     * Stage 2A:
     * The API endpoint is now functional and validates the submission.
     *
     * PDF generation and the final email attachment will be added next.
     */

    console.log("Application received:", {
      applicationReference,
      fullName: body.fullName,
      emailAddress: body.emailAddress,
    });

    return NextResponse.json({
      success: true,
      applicationReference,
      message: "Application received successfully.",
    });
  } catch (error) {
    console.error("Application submission error:", error);

    return NextResponse.json(
      { error: "Unable to process the application at this time." },
      { status: 500 }
    );
  }
}
