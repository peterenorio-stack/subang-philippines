"use client";

import { FormEvent, useState } from "react";
import {
  ArrowRight,
  CheckCircle2,
  ClipboardList,
  FileCheck,
  HandHeart,
  MessageCircle,
  ShieldCheck,
  Users,
  Award,
} from "lucide-react";
import { Header, Footer, PageIntro } from "../components";

const pathway = [
  {
    number: "01",
    title: "Application Form",
    description:
      "Submit the official Subang Membership Application Form and the required consent information.",
    icon: ClipboardList,
  },
  {
    number: "02",
    title: "Preliminary Interview",
    description:
      "Discuss your background, interests, motivation, and readiness to participate in Subang's volunteer work.",
    icon: MessageCircle,
  },
  {
    number: "03",
    title: "Internship Examination",
    description:
      "Complete the Advocacy Assessment as part of the qualification process for the internship phase.",
    icon: FileCheck,
  },
  {
    number: "04",
    title: "Internship Proper",
    description:
      "Complete 240 hours of combined volunteer service through approved Subang activities and initiatives.",
    icon: HandHeart,
  },
  {
    number: "05",
    title: "Membership Interview",
    description:
      "Participate in a membership-focused interview after successfully completing the internship requirement.",
    icon: Users,
  },
  {
    number: "06",
    title: "Membership Examination",
    description:
      "Complete the final membership examination and qualification stage.",
    icon: Award,
  },
];

const civilStatuses = ["Single", "Married", "Divorced", "Widowed"];

const genders = [
  "Male",
  "Female",
  "Non-Binary",
  "Prefer not to say",
];

const identificationTypes = [
  "National ID",
  "Passport",
  "Driver's License",
  "Other",
];

const educationalAttainment = [
  "Elementary Level",
  "Elementary Graduate",
  "High School Level",
  "High School Graduate",
  "College Level",
  "College Graduate",
  "Graduate Level",
  "Master's Degree Holder",
  "Postgraduate Level",
  "Doctorate Degree Holder",
];

const inputClass =
  "mt-2 w-full border border-slate-300 bg-white px-4 py-3 text-sm text-ink outline-none transition focus:border-maroon focus:ring-2 focus:ring-maroon/10";

const labelClass =
  "text-sm font-bold text-ink";

function SectionHeading({
  number,
  title,
  text,
}: {
  number: string;
  title: string;
  text?: string;
}) {
  return (
    <div className="mb-8 border-b border-slate-200 pb-5">
      <div className="flex items-start gap-4">
        <span className="flex h-9 w-9 shrink-0 items-center justify-center bg-maroon text-sm font-extrabold text-white">
          {number}
        </span>
        <div>
          <h2 className="text-2xl font-extrabold tracking-tight text-ink md:text-3xl">
            {title}
          </h2>
          {text && (
            <p className="mt-2 max-w-3xl leading-7 text-slate-600">
              {text}
            </p>
          )}
        </div>
      </div>
    </div>
  );
}

function Field({
  label,
  name,
  type = "text",
  required = false,
  placeholder,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  placeholder?: string;
}) {
  return (
    <div>
      <label htmlFor={name} className={labelClass}>
        {label} {required && <span className="text-maroon">*</span>}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        placeholder={placeholder}
        className={inputClass}
      />
    </div>
  );
}

export default function ApplyPage() {
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState("");

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    setError("");
    setSubmitting(true);

    /*
     * Stage 1 only:
     * The actual server-side submission endpoint, PDF generation,
     * and email delivery will be connected in the next stage.
     */
    window.setTimeout(() => {
      setSubmitting(false);
      setSubmitted(true);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }, 700);
  }

  if (submitted) {
    return (
      <>
        <Header />

        <main className="bg-cream">
          <section className="container-wide flex min-h-[70vh] items-center py-20 md:py-28">
            <div className="mx-auto max-w-2xl bg-white p-8 text-center shadow-sm ring-1 ring-slate-200 md:p-12">
              <div className="mx-auto flex h-16 w-16 items-center justify-center bg-green-50 text-green-700">
                <CheckCircle2 size={34} />
              </div>

              <p className="mt-7 text-sm font-bold uppercase tracking-[0.18em] text-maroon">
                Application received
              </p>

              <h1 className="mt-3 text-3xl font-extrabold tracking-tight text-ink md:text-5xl">
                Thank you for applying.
              </h1>

              <p className="mt-6 text-lg leading-8 text-slate-600">
                Your Subang Membership Application has been submitted
                successfully. The Human Resources team will review your
                application and contact you regarding the next stage.
              </p>

              <p className="mt-5 text-sm leading-6 text-slate-500">
                Please keep an eye on the email address and phone number you
                provided in your application.
              </p>

              <div className="mt-8">
                <a
                  href="/"
                  className="inline-flex items-center gap-2 bg-maroon px-6 py-3 font-extrabold text-white transition hover:opacity-90"
                >
                  Return to Subang Philippines
                  <ArrowRight size={18} />
                </a>
              </div>
            </div>
          </section>
        </main>

        <Footer />
      </>
    );
  }

  return (
    <>
      <Header />

      <PageIntro
        eyebrow="Join Subang Philippines"
        title="Start your journey from volunteer to member."
        text="Subang welcomes people who are willing to learn, contribute, and work with communities toward meaningful development."
      />

      <main>
        <section className="bg-white py-16 md:py-24">
          <div className="container-wide grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-start">
            <div>
              <p className="mb-4 text-sm font-bold uppercase tracking-[0.18em] text-maroon">
                Membership application
              </p>

              <h2 className="max-w-3xl text-3xl font-extrabold tracking-tight text-ink md:text-5xl">
                Your willingness to serve can become meaningful community
                action.
              </h2>

              <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">
                Subang Philippines is built around volunteerism. Members and
                volunteers contribute their time, skills, ideas, and energy to
                initiatives that support safer, equitable, sustainable, and
                resilient communities.
              </p>

              <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-600">
                Complete the application below with accurate and complete
                information. Your application will be subject to the Subang
                membership process.
              </p>
            </div>

            <div className="bg-cream p-7 md:p-9">
              <p className="text-sm font-bold uppercase tracking-[0.16em] text-maroon">
                The pathway
              </p>

              <p className="mt-4 text-2xl font-extrabold leading-tight text-ink md:text-3xl">
                Volunteer → Internship → Membership
              </p>

              <p className="mt-4 leading-7 text-slate-600">
                The process gives applicants opportunities to learn about
                Subang, demonstrate their readiness, contribute through actual
                volunteer work, and complete the requirements for membership.
              </p>

              <div className="mt-7 border-l-4 border-gold pl-5">
                <p className="text-sm font-bold uppercase tracking-[0.12em] text-maroon">
                  Internship requirement
                </p>

                <p className="mt-1 text-2xl font-extrabold text-ink">
                  240 hours
                </p>

                <p className="mt-1 text-sm leading-6 text-slate-600">
                  Combined volunteer service through approved activities and
                  initiatives.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-slate-50 py-12 md:py-20">
          <div className="container-wide">
            <div className="mx-auto max-w-4xl bg-white p-7 shadow-sm ring-1 ring-slate-200 md:p-10">
              <div className="flex gap-4">
                <ShieldCheck
                  className="mt-1 shrink-0 text-maroon"
                  size={26}
                />

                <div>
                  <h2 className="text-xl font-extrabold text-ink">
                    Before you begin
                  </h2>

                  <p className="mt-2 leading-7 text-slate-600">
                    Please prepare accurate information about your identity,
                    contact details, identification document, educational or
                    employment background, relevant experiences, and reason
                    for joining Subang.
                  </p>

                  <p className="mt-3 leading-7 text-slate-600">
                    This application collects personal information for
                    membership processing. Please read the consent and data
                    privacy provisions carefully before submitting.
                  </p>

                  <p className="mt-3 text-sm text-slate-500">
                    Fields marked with <span className="font-bold text-maroon">*</span>{" "}
                    are required.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <form onSubmit={handleSubmit}>
          <section className="bg-white py-16 md:py-24">
            <div className="container-wide max-w-5xl">
              <SectionHeading
                number="I"
                title="Personal Information"
              />

              <div className="grid gap-6 md:grid-cols-2">
                <div className="md:col-span-2">
                  <Field
                    label="Full Name"
                    name="fullName"
                    required
                    placeholder="Enter your full name"
                  />
                </div>

                <Field
                  label="Date of Birth"
                  name="dateOfBirth"
                  type="date"
                  required
                />

                <Field
                  label="Place of Birth"
                  name="placeOfBirth"
                  required
                />

                <Field
                  label="Nationality"
                  name="nationality"
                  required
                />

                <Field
                  label="Religion"
                  name="religion"
                />

                <div>
                  <p className={labelClass}>
                    Civil Status <span className="text-maroon">*</span>
                  </p>

                  <div className="mt-3 grid grid-cols-2 gap-3">
                    {civilStatuses.map((status) => (
                      <label
                        key={status}
                        className="flex items-center gap-3 border border-slate-200 px-4 py-3 text-sm text-slate-700"
                      >
                        <input
                          type="radio"
                          name="civilStatus"
                          value={status}
                          required
                        />
                        {status}
                      </label>
                    ))}
                  </div>
                </div>

                <div>
                  <p className={labelClass}>
                    Gender <span className="text-maroon">*</span>
                  </p>

                  <div className="mt-3 grid grid-cols-2 gap-3">
                    {genders.map((gender) => (
                      <label
                        key={gender}
                        className="flex items-center gap-3 border border-slate-200 px-4 py-3 text-sm text-slate-700"
                      >
                        <input
                          type="radio"
                          name="gender"
                          value={gender}
                          required
                        />
                        {gender}
                      </label>
                    ))}
                  </div>
                </div>

                <Field
                  label="Preferred Pronouns"
                  name="preferredPronouns"
                  placeholder="e.g. he/him, she/her, they/them"
                />
              </div>
            </div>
          </section>

          <section className="bg-slate-50 py-16 md:py-24">
            <div className="container-wide max-w-5xl">
              <SectionHeading
                number="II"
                title="Contact Information"
              />

              <div className="grid gap-6 md:grid-cols-2">
                <div className="md:col-span-2">
                  <label htmlFor="residentialAddress" className={labelClass}>
                    Residential Address <span className="text-maroon">*</span>
                  </label>

                  <textarea
                    id="residentialAddress"
                    name="residentialAddress"
                    rows={3}
                    required
                    className={inputClass}
                  />
                </div>

                <div className="md:col-span-2">
                  <label htmlFor="permanentAddress" className={labelClass}>
                    Permanent Address <span className="text-maroon">*</span>
                  </label>

                  <textarea
                    id="permanentAddress"
                    name="permanentAddress"
                    rows={3}
                    required
                    className={inputClass}
                  />
                </div>

                <Field label="Barangay" name="barangay" required />
                <Field
                  label="City/Municipality"
                  name="cityMunicipality"
                  required
                />

                <Field label="Postal Code" name="postalCode" required />
                <Field label="Province" name="province" required />

                <Field
                  label="Phone Number"
                  name="phoneNumber"
                  type="tel"
                  required
                />

                <Field
                  label="Email Address"
                  name="emailAddress"
                  type="email"
                  required
                />

                <Field
                  label="Emergency Contact Name"
                  name="emergencyContactName"
                  required
                />

                <Field
                  label="Emergency Contact Phone Number"
                  name="emergencyContactPhone"
                  type="tel"
                  required
                />

                <Field
                  label="Relationship to Emergency Contact"
                  name="emergencyContactRelationship"
                  required
                />
              </div>
            </div>
          </section>

          <section className="bg-white py-16 md:py-24">
            <div className="container-wide max-w-5xl">
              <SectionHeading
                number="III"
                title="Identification Details"
              />

              <div className="grid gap-6 md:grid-cols-2">
                <div className="md:col-span-2">
                  <p className={labelClass}>
                    Type of Identification Document{" "}
                    <span className="text-maroon">*</span>
                  </p>

                  <div className="mt-3 grid gap-3 sm:grid-cols-2">
                    {identificationTypes.map((type) => (
                      <label
                        key={type}
                        className="flex items-center gap-3 border border-slate-200 px-4 py-3 text-sm text-slate-700"
                      >
                        <input
                          type="radio"
                          name="identificationType"
                          value={type}
                          required
                        />
                        {type}
                      </label>
                    ))}
                  </div>
                </div>

                <div>
                  <Field
                    label="Other Identification Document"
                    name="otherIdentification"
                    placeholder="Specify if applicable"
                  />
                </div>

                <Field
                  label="ID Number"
                  name="idNumber"
                  required
                />

                <Field
                  label="Issuing Country/Authority"
                  name="issuingAuthority"
                  required
                />

                <Field
                  label="Date Issued"
                  name="dateIssued"
                  type="date"
                  required
                />

                <Field
                  label="Date of Expiry"
                  name="dateExpiry"
                  type="date"
                  required
                />
              </div>
            </div>
          </section>

          <section className="bg-slate-50 py-16 md:py-24">
            <div className="container-wide max-w-5xl">
              <SectionHeading
                number="IV"
                title="Employment / Educational Background"
              />

              <div className="grid gap-6 md:grid-cols-2">
                <Field
                  label="Current Occupation"
                  name="currentOccupation"
                  required
                />

                <div>
                  <p className={labelClass}>
                    Highest Educational Attainment{" "}
                    <span className="text-maroon">*</span>
                  </p>

                  <div className="mt-3 grid gap-3">
                    {educationalAttainment.map((level) => (
                      <label
                        key={level}
                        className="flex items-center gap-3 border border-slate-200 bg-white px-4 py-3 text-sm text-slate-700"
                      >
                        <input
                          type="radio"
                          name="educationalAttainment"
                          value={level}
                          required
                        />
                        {level}
                      </label>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="bg-white py-16 md:py-24">
            <div className="container-wide max-w-5xl">
              <SectionHeading
                number="V"
                title="Relevant Experiences"
                text="Please list any relevant experiences, skills, or qualifications that you believe would be beneficial for your membership in Subang. This may include volunteer work, professional certifications, leadership roles, specialized training, and relevant hobbies or interests."
              />

              <div className="space-y-5">
                {[1, 2, 3, 4, 5].map((number) => (
                  <div key={number}>
                    <label
                      htmlFor={`experience${number}`}
                      className={labelClass}
                    >
                      {number}.
                    </label>

                    <textarea
                      id={`experience${number}`}
                      name={`experience${number}`}
                      rows={3}
                      className={inputClass}
                      placeholder="Describe an experience, skill, qualification, or relevant interest."
                    />
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section className="bg-slate-50 py-16 md:py-24">
            <div className="container-wide max-w-5xl">
              <SectionHeading
                number="VI"
                title="Written Assessment"
              />

              <div>
                <label
                  htmlFor="reasonForJoining"
                  className="text-base font-extrabold text-ink"
                >
                  Reason for Joining Subang{" "}
                  <span className="text-maroon">*</span>
                </label>

                <p className="mt-2 leading-7 text-slate-600">
                  Please provide a detailed explanation of your reason for
                  joining Subang Philippines.
                </p>

                <textarea
                  id="reasonForJoining"
                  name="reasonForJoining"
                  rows={10}
                  required
                  className={`${inputClass} mt-4`}
                  placeholder="Explain why you want to join Subang and how you hope to contribute."
                />
              </div>
            </div>
          </section>

          <section className="bg-white py-16 md:py-24">
            <div className="container-wide max-w-5xl">
              <SectionHeading
                number="VII"
                title="Declaration"
                text="Please read the following declaration carefully before submitting your application."
              />

              <div className="space-y-5 leading-8 text-slate-700">
                <p>
                  I hereby declare that all information provided in this
                  application form is true, accurate, and complete to the best
                  of my knowledge. I understand that any false, misleading, or
                  incomplete information may result in the rejection of my
                  membership application or termination of membership if
                  discovered at a later date.
                </p>

                <p>
                  I consent to Subang verifying the information provided in
                  this application form through appropriate means, including
                  but not limited to contacting references, employers,
                  educational institutions, and government authorities.
                </p>

                <p>
                  I understand and agree that submission of this application
                  does not guarantee membership in Subang, and membership
                  acceptance is subject to review and approval by Subang's
                  membership committee.
                </p>
              </div>

              <div className="mt-8 grid gap-6 md:grid-cols-2">
                <Field
                  label="Applicant's Signature Over Printed Name"
                  name="declarationSignature"
                  required
                  placeholder="Type your full name as your electronic signature"
                />

                <Field
                  label="Date"
                  name="declarationDate"
                  type="date"
                  required
                />
              </div>

              <label className="mt-8 flex items-start gap-3 border border-slate-200 bg-slate-50 p-5">
                <input
                  type="checkbox"
                  name="declarationAgreement"
                  required
                  className="mt-1 h-4 w-4"
                />

                <span className="text-sm leading-6 text-slate-700">
                  I confirm that I have read and understood the Declaration and
                  agree to its terms.
                </span>
              </label>
            </div>
          </section>

          <section className="bg-slate-50 py-16 md:py-24">
            <div className="container-wide max-w-5xl">
              <SectionHeading
                number="VIII"
                title="Consent for Collection and Processing of Personal Information"
                text="Please read the following consent provisions carefully before providing your consent."
              />

              <div className="space-y-7 text-sm leading-7 text-slate-700 md:text-base">
                <div>
                  <p>
                    I, ________________________________, hereby consent to the
                    collection, processing, and storage of my personal
                    information by Subang in accordance with the provisions of
                    the Data Privacy Act of 2012 of the Philippines (Republic
                    Act No. 10173). I understand that the information provided
                    by me will be used solely for the purpose of processing my
                    membership application.
                  </p>
                </div>

                <div>
                  <h3 className="font-extrabold text-ink">
                    I. Collection of Personal Information and Purpose of
                    Collection
                  </h3>

                  <p className="mt-3">
                    I understand that the personal information collected may
                    include but is not limited to full name, date of birth,
                    contact information (address, email, phone number),
                    identification documents (e.g., ID card, passport),
                    employment or educational background, and other relevant
                    information necessary for the membership application
                    process.
                  </p>

                  <p className="mt-3">
                    The personal information provided will be used for the
                    following purposes: verifying identity and eligibility for
                    membership, contacting applicants regarding their
                    application status, internal record keeping, and complying
                    with legal obligations and regulatory requirements.
                  </p>
                </div>

                <div>
                  <h3 className="font-extrabold text-ink">
                    II. Confidentiality and Security
                  </h3>

                  <p className="mt-3">
                    I acknowledge that Subang is committed to ensuring the
                    confidentiality, integrity, and security of my personal
                    information. Appropriate technical and organizational
                    measures will be implemented to prevent unauthorized
                    access, use, or disclosure of my personal information.
                  </p>
                </div>

                <div>
                  <h3 className="font-extrabold text-ink">
                    III. Data Retention
                  </h3>

                  <p className="mt-3">
                    I understand that my personal information will be retained
                    only for as long as necessary to fulfill the purposes
                    outlined in this consent form or as required by law. Upon
                    the completion of the membership application process, my
                    personal information will be securely disposed of in
                    accordance with Subang's data retention policies.
                  </p>
                </div>

                <div>
                  <h3 className="font-extrabold text-ink">
                    IV. Consent Withdrawal
                  </h3>

                  <p className="mt-3">
                    I understand that I have the right to withdraw my consent
                    at any time by notifying Subang in writing. However, I
                    acknowledge that withdrawing my consent may affect the
                    processing of my membership application.
                  </p>
                </div>

                <div>
                  <h3 className="font-extrabold text-ink">
                    V. Rights of Data Subjects
                  </h3>

                  <p className="mt-3">
                    I acknowledge that as a data subject, I have the following
                    rights under the Data Privacy Act of 2012: the right to be
                    informed, the right to access, the right to object, and the
                    right to erasure or blocking.
                  </p>
                </div>

                <div className="border-l-4 border-gold bg-white p-6">
                  <p>
                    By submitting this application, I confirm that I have read
                    and understood the terms of this consent form and
                    voluntarily agree to the collection, processing, and
                    storage of my personal information by Subang in accordance
                    with the Data Privacy Act of 2012.
                  </p>
                </div>
              </div>

              <div className="mt-8 grid gap-6 md:grid-cols-2">
                <Field
                  label="Applicant's Signature Over Printed Name"
                  name="consentSignature"
                  required
                  placeholder="Type your full name as your electronic signature"
                />

                <Field
                  label="Date"
                  name="consentDate"
                  type="date"
                  required
                />
              </div>

              <label className="mt-8 flex items-start gap-3 border border-maroon/20 bg-white p-5">
                <input
                  type="checkbox"
                  name="privacyConsent"
                  required
                  className="mt-1 h-4 w-4"
                />

                <span className="text-sm leading-6 text-slate-700">
                  I have read and understood the Consent for Collection and
                  Processing of Personal Information and voluntarily consent
                  to the collection, processing, and storage of my personal
                  information for the purposes stated above.
                </span>
              </label>
            </div>
          </section>

          <section className="bg-maroon py-16 text-white md:py-24">
            <div className="container-wide max-w-5xl">
              <div className="max-w-3xl">
                <p className="text-sm font-bold uppercase tracking-[0.18em] text-gold">
                  Submit your application
                </p>

                <h2 className="mt-4 text-3xl font-extrabold tracking-tight md:text-5xl">
                  Ready to contribute?
                </h2>

                <p className="mt-5 text-lg leading-8 text-white/75">
                  Review your information carefully before submitting your
                  membership application.
                </p>
              </div>

              {error && (
                <div className="mt-8 border border-red-200 bg-white p-5 text-sm text-red-700">
                  {error}
                </div>
              )}

              <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center">
                <button
                  type="submit"
                  disabled={submitting}
                  className="inline-flex items-center justify-center gap-2 bg-gold px-7 py-4 font-extrabold text-ink transition hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-60"
                >
                  {submitting ? "Submitting..." : "Submit Membership Application"}
                  {!submitting && <ArrowRight size={18} />}
                </button>

                <p className="text-sm leading-6 text-white/65">
                  By submitting, you confirm that the information provided is
                  accurate and that you have read the declaration and consent
                  provisions.
                </p>
              </div>
            </div>
          </section>
        </form>

        <section className="bg-white py-16 md:py-24">
          <div className="container-wide">
            <div className="max-w-3xl">
              <p className="mb-4 text-sm font-bold uppercase tracking-[0.18em] text-maroon">
                What happens next
              </p>

              <h2 className="text-3xl font-extrabold tracking-tight text-ink md:text-5xl">
                Six stages from application to membership.
              </h2>

              <p className="mt-5 text-lg leading-8 text-slate-600">
                Submission of this form begins the membership pathway. It does
                not by itself constitute acceptance into Subang Philippines.
              </p>
            </div>

            <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
              {pathway.map((step) => {
                const Icon = step.icon;

                return (
                  <article
                    key={step.number}
                    className="bg-slate-50 p-7 ring-1 ring-slate-200"
                  >
                    <div className="flex items-start justify-between gap-4">
                      <span className="text-sm font-extrabold tracking-[0.15em] text-maroon">
                        {step.number}
                      </span>

                      <div className="flex h-11 w-11 items-center justify-center bg-maroon text-white">
                        <Icon size={20} />
                      </div>
                    </div>

                    <h3 className="mt-7 text-xl font-extrabold text-ink">
                      {step.title}
                    </h3>

                    <p className="mt-3 leading-7 text-slate-600">
                      {step.description}
                    </p>
                  </article>
                );
              })}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
