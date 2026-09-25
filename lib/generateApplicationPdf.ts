import { PDFDocument, PDFPage, PDFFont, rgb, StandardFonts } from "pdf-lib";

type ApplicationData = {
  applicationReference: string;
  submissionDate: string;

  fullName: string;
  dateOfBirth: string;
  placeOfBirth: string;
  nationality: string;
  religion: string;
  civilStatus: string;
  gender: string;
  preferredPronouns: string;

  residentialAddress: string;
  permanentAddress: string;
  barangay: string;
  cityMunicipality: string;
  postalCode: string;
  province: string;
  phoneNumber: string;
  emailAddress: string;
  emergencyContactName: string;
  emergencyContactPhone: string;
  emergencyContactRelationship: string;

  idType: string;
  idNumber: string;
  issuingAuthority: string;
  dateIssued: string;
  dateOfExpiry: string;

  currentOccupation: string;
  highestEducationalAttainment: string;

  experience1: string;
  experience2: string;
  experience3: string;
  experience4: string;
  experience5: string;

  reasonForJoining: string;

  declaration: string;
  privacyConsent: string;

  electronicSignature: string;
  signatureDate: string;
};

const PAGE_WIDTH = 595.28;
const PAGE_HEIGHT = 841.89;

const MARGIN_LEFT = 54;
const MARGIN_RIGHT = 54;
const TOP_MARGIN = 54;
const BOTTOM_MARGIN = 54;

const TEXT_COLOR = rgb(0.09, 0.13, 0.11);
const MUTED_COLOR = rgb(0.35, 0.38, 0.36);
const MAROON = rgb(0.278, 0.004, 0.071);
const GOLD = rgb(1, 0.706, 0.004);
const LIGHT_BG = rgb(0.965, 0.95, 0.91);

function clean(value: unknown): string {
  if (value === undefined || value === null) return "";
  return String(value).trim();
}

function wrapText(
  text: string,
  font: PDFFont,
  fontSize: number,
  maxWidth: number
): string[] {
  const normalized = clean(text);

  if (!normalized) {
    return [""];
  }

  const paragraphs = normalized.split(/\r?\n/);
  const lines: string[] = [];

  for (const paragraph of paragraphs) {
    if (!paragraph.trim()) {
      lines.push("");
      continue;
    }

    const words = paragraph.trim().split(/\s+/);
    let currentLine = "";

    for (const word of words) {
      const testLine = currentLine ? `${currentLine} ${word}` : word;

      if (font.widthOfTextAtSize(testLine, fontSize) <= maxWidth) {
        currentLine = testLine;
      } else {
        if (currentLine) {
          lines.push(currentLine);
        }

        // Handle a single unusually long word.
        if (font.widthOfTextAtSize(word, fontSize) > maxWidth) {
          let chunk = "";

          for (const character of word) {
            const testChunk = chunk + character;

            if (
              font.widthOfTextAtSize(testChunk, fontSize) <= maxWidth
            ) {
              chunk = testChunk;
            } else {
              if (chunk) {
                lines.push(chunk);
              }
              chunk = character;
            }
          }

          currentLine = chunk;
        } else {
          currentLine = word;
        }
      }
    }

    if (currentLine) {
      lines.push(currentLine);
    }
  }

  return lines;
}

class PdfWriter {
  private pdf: PDFDocument;
  private page: PDFPage;
  private regular: PDFFont;
  private bold: PDFFont;
  private italic: PDFFont;
  private y: number;

  constructor(
    pdf: PDFDocument,
    regular: PDFFont,
    bold: PDFFont,
    italic: PDFFont
  ) {
    this.pdf = pdf;
    this.regular = regular;
    this.bold = bold;
    this.italic = italic;

    this.page = this.pdf.addPage([PAGE_WIDTH, PAGE_HEIGHT]);
    this.y = PAGE_HEIGHT - TOP_MARGIN;
  }

  private contentWidth() {
    return PAGE_WIDTH - MARGIN_LEFT - MARGIN_RIGHT;
  }

  private ensureSpace(requiredHeight: number) {
    if (this.y - requiredHeight < BOTTOM_MARGIN) {
      this.addPage();
    }
  }

  private addPage() {
    this.page = this.pdf.addPage([PAGE_WIDTH, PAGE_HEIGHT]);
    this.y = PAGE_HEIGHT - TOP_MARGIN;
  }

  private drawText(
    text: string,
    options?: {
      font?: PDFFont;
      size?: number;
      color?: ReturnType<typeof rgb>;
      x?: number;
      width?: number;
      lineHeight?: number;
    }
  ) {
    const font = options?.font ?? this.regular;
    const size = options?.size ?? 10;
    const color = options?.color ?? TEXT_COLOR;
    const x = options?.x ?? MARGIN_LEFT;
    const width = options?.width ?? this.contentWidth();
    const lineHeight = options?.lineHeight ?? size * 1.45;

    const lines = wrapText(text, font, size, width);

    for (const line of lines) {
      this.ensureSpace(lineHeight);

      if (line) {
        this.page.drawText(line, {
          x,
          y: this.y,
          size,
          font,
          color,
        });
      }

      this.y -= lineHeight;
    }

    return lines.length * lineHeight;
  }

  heading(text: string) {
    this.ensureSpace(40);

    this.page.drawText(text, {
      x: MARGIN_LEFT,
      y: this.y,
      size: 13,
      font: this.bold,
      color: MAROON,
    });

    this.y -= 8;

    this.page.drawRectangle({
      x: MARGIN_LEFT,
      y: this.y,
      width: 34,
      height: 3,
      color: GOLD,
    });

    this.y -= 20;
  }

  labelValue(label: string, value: string) {
    const labelWidth = 150;
    const valueWidth = this.contentWidth() - labelWidth;

    this.ensureSpace(22);

    this.page.drawText(label, {
      x: MARGIN_LEFT,
      y: this.y,
      size: 8.5,
      font: this.bold,
      color: MUTED_COLOR,
    });

    const lines = wrapText(
      clean(value) || "Not provided",
      this.regular,
      9.5,
      valueWidth
    );

    for (let index = 0; index < lines.length; index++) {
      if (index > 0) {
        this.y -= 14;
      }

      this.page.drawText(lines[index], {
        x: MARGIN_LEFT + labelWidth,
        y: this.y,
        size: 9.5,
        font: this.regular,
        color: TEXT_COLOR,
      });
    }

    this.y -= 16;
  }

  paragraph(text: string, size = 9.5) {
    this.drawText(text, {
      size,
      lineHeight: size * 1.5,
    });

    this.y -= 6;
  }

  smallParagraph(text: string) {
    this.drawText(text, {
      size: 8.5,
      color: MUTED_COLOR,
      lineHeight: 12,
    });

    this.y -= 5;
  }

  bullet(text: string) {
    const bulletX = MARGIN_LEFT;
    const textX = MARGIN_LEFT + 14;
    const width = this.contentWidth() - 14;

    const lines = wrapText(text, this.regular, 9.5, width);

    this.ensureSpace(lines.length * 14);

    this.page.drawText("•", {
      x: bulletX,
      y: this.y,
      size: 10,
      font: this.bold,
      color: MAROON,
    });

    lines.forEach((line, index) => {
      this.page.drawText(line, {
        x: textX,
        y: this.y - index * 14,
        size: 9.5,
        font: this.regular,
        color: TEXT_COLOR,
      });
    });

    this.y -= Math.max(1, lines.length) * 14 + 4;
  }

  textBox(text: string, minHeight = 90) {
    const padding = 10;
    const width = this.contentWidth();
    const innerWidth = width - padding * 2;

    const lines = wrapText(text || "No response provided.", this.regular, 9.5, innerWidth);

    const lineHeight = 14;
    const calculatedHeight = lines.length * lineHeight + padding * 2;
    const boxHeight = Math.max(minHeight, calculatedHeight);

    this.ensureSpace(boxHeight + 10);

    this.page.drawRectangle({
      x: MARGIN_LEFT,
      y: this.y - boxHeight,
      width,
      height: boxHeight,
      borderColor: rgb(0.78, 0.78, 0.76),
      borderWidth: 0.7,
      color: rgb(1, 1, 1),
    });

    let textY = this.y - padding - 8;

    for (const line of lines) {
      this.page.drawText(line, {
        x: MARGIN_LEFT + padding,
        y: textY,
        size: 9.5,
        font: this.regular,
        color: TEXT_COLOR,
      });

      textY -= lineHeight;
    }

    this.y -= boxHeight + 12;
  }

  signatureBlock(name: string, date: string) {
    this.ensureSpace(100);

    this.page.drawText("Applicant's Electronic Signature", {
      x: MARGIN_LEFT,
      y: this.y,
      size: 8.5,
      font: this.bold,
      color: MUTED_COLOR,
    });

    this.y -= 28;

    this.page.drawLine({
      start: {
        x: MARGIN_LEFT,
        y: this.y,
      },
      end: {
        x: MARGIN_LEFT + 230,
        y: this.y,
      },
      thickness: 0.7,
      color: rgb(0.45, 0.45, 0.43),
    });

    this.page.drawText(name || "Not provided", {
      x: MARGIN_LEFT,
      y: this.y + 7,
      size: 9.5,
      font: this.italic,
      color: TEXT_COLOR,
    });

    this.page.drawText("Date", {
      x: MARGIN_LEFT + 300,
      y: this.y + 18,
      size: 8.5,
      font: this.bold,
      color: MUTED_COLOR,
    });

    this.page.drawLine({
      start: {
        x: MARGIN_LEFT + 300,
        y: this.y,
      },
      end: {
        x: MARGIN_LEFT + 485,
        y: this.y,
      },
      thickness: 0.7,
      color: rgb(0.45, 0.45, 0.43),
    });

    this.page.drawText(date || "Not provided", {
      x: MARGIN_LEFT + 300,
      y: this.y + 7,
      size: 9.5,
      font: this.italic,
      color: TEXT_COLOR,
    });

    this.y -= 45;
  }

  footer() {
    const pages = this.pdf.getPages();

    pages.forEach((page, index) => {
      page.drawLine({
        start: {
          x: MARGIN_LEFT,
          y: 34,
        },
        end: {
          x: PAGE_WIDTH - MARGIN_RIGHT,
          y: 34,
        },
        thickness: 0.5,
        color: rgb(0.78, 0.78, 0.76),
      });

      page.drawText("SUBANG PHILIPPINES  •  LIVE. CREATE. INSPIRE.", {
        x: MARGIN_LEFT,
        y: 21,
        size: 7,
        font: this.regular,
        color: MUTED_COLOR,
      });

      const pageText = `Page ${index + 1} of ${pages.length}`;

      page.drawText(pageText, {
        x: PAGE_WIDTH - MARGIN_RIGHT - this.regular.widthOfTextAtSize(pageText, 7),
        y: 21,
        size: 7,
        font: this.regular,
        color: MUTED_COLOR,
      });
    });
  }

  getPageCount() {
    return this.pdf.getPages().length;
  }
}

export async function generateApplicationPdf(
  data: ApplicationData
): Promise<Uint8Array> {
  const pdf = await PDFDocument.create();

  const regular = await pdf.embedFont(StandardFonts.Helvetica);
  const bold = await pdf.embedFont(StandardFonts.HelveticaBold);
  const italic = await pdf.embedFont(StandardFonts.HelveticaOblique);

  const writer = new PdfWriter(pdf, regular, bold, italic);

  // Document header
  writer["page"].drawRectangle({
    x: 0,
    y: PAGE_HEIGHT - 88,
    width: PAGE_WIDTH,
    height: 88,
    color: MAROON,
  });

  writer["page"].drawText("SUBANG", {
    x: MARGIN_LEFT,
    y: PAGE_HEIGHT - 39,
    size: 21,
    font: bold,
    color: rgb(1, 1, 1),
  });

  writer["page"].drawText("PHILIPPINES", {
    x: MARGIN_LEFT + 92,
    y: PAGE_HEIGHT - 39,
    size: 21,
    font: bold,
    color: GOLD,
  });

  writer["page"].drawText("MEMBERSHIP APPLICATION FORM", {
    x: MARGIN_LEFT,
    y: PAGE_HEIGHT - 65,
    size: 9,
    font: bold,
    color: rgb(1, 1, 1),
  });

  writer["y"] = PAGE_HEIGHT - 116;

  writer.labelValue("Application Reference", data.applicationReference);
  writer.labelValue("Submission Date", data.submissionDate);

  writer.heading("I. PERSONAL INFORMATION");

  writer.labelValue("Full Name", data.fullName);
  writer.labelValue("Date of Birth", data.dateOfBirth);
  writer.labelValue("Place of Birth", data.placeOfBirth);
  writer.labelValue("Nationality", data.nationality);
  writer.labelValue("Religion", data.religion);
  writer.labelValue("Civil Status", data.civilStatus);
  writer.labelValue("Gender", data.gender);
  writer.labelValue("Preferred Pronouns", data.preferredPronouns);

  writer.heading("II. CONTACT INFORMATION");

  writer.labelValue("Residential Address", data.residentialAddress);
  writer.labelValue("Permanent Address", data.permanentAddress);
  writer.labelValue("Barangay", data.barangay);
  writer.labelValue("City / Municipality", data.cityMunicipality);
  writer.labelValue("Postal Code", data.postalCode);
  writer.labelValue("Province", data.province);
  writer.labelValue("Phone Number", data.phoneNumber);
  writer.labelValue("Email Address", data.emailAddress);
  writer.labelValue("Emergency Contact", data.emergencyContactName);
  writer.labelValue("Emergency Phone", data.emergencyContactPhone);
  writer.labelValue(
    "Relationship",
    data.emergencyContactRelationship
  );

  writer.heading("III. IDENTIFICATION DETAILS");

  writer.labelValue("Identification Type", data.idType);
  writer.labelValue("ID Number", data.idNumber);
  writer.labelValue("Issuing Authority", data.issuingAuthority);
  writer.labelValue("Date Issued", data.dateIssued);
  writer.labelValue("Date of Expiry", data.dateOfExpiry);

  writer.heading("IV. EMPLOYMENT / EDUCATIONAL BACKGROUND");

  writer.labelValue("Current Occupation", data.currentOccupation);
  writer.labelValue(
    "Highest Educational Attainment",
    data.highestEducationalAttainment
  );

  writer.heading("V. RELEVANT EXPERIENCES");

  const experiences = [
    data.experience1,
    data.experience2,
    data.experience3,
    data.experience4,
    data.experience5,
  ];

  experiences.forEach((experience, index) => {
    if (clean(experience)) {
      writer.bullet(`${index + 1}. ${experience}`);
    }
  });

  if (!experiences.some((experience) => clean(experience))) {
    writer.paragraph("No relevant experiences were provided.");
  }

  writer.heading("VI. WRITTEN ASSESSMENT");

  writer.smallParagraph(
    "Reason for Joining Subang"
  );

  writer.textBox(data.reasonForJoining, 130);

  writer.heading("DECLARATION");

  writer.paragraph(
    data.declaration ||
      "I hereby declare that all information provided in this application form is true, accurate, and complete to the best of my knowledge."
  );

  writer.smallParagraph(
    "Applicant's Electronic Signature"
  );

  writer.signatureBlock(
    data.electronicSignature || data.fullName,
    data.signatureDate || data.submissionDate
  );

  writer.heading(
    "VIII. CONSENT FOR COLLECTION AND PROCESSING OF PERSONAL INFORMATION"
  );

  writer.paragraph(
    data.privacyConsent ||
      "The applicant has provided consent for the collection, processing, and storage of personal information in connection with the membership application."
  );

  writer.smallParagraph(
    "The complete consent wording submitted by the applicant is represented in the application record."
  );

  writer.signatureBlock(
    data.electronicSignature || data.fullName,
    data.signatureDate || data.submissionDate
  );

  writer.footer();

  return pdf.save();
}
