import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  ClipboardList,
  MessageCircle,
  FileCheck,
  HandHeart,
  Users,
  Award,
} from "lucide-react";
import { Header, Footer, PageIntro } from "../components";

const pathway = [
  {
    number: "01",
    title: "Application Form",
    description:
      "Begin by submitting the official Subang Membership Application Form and the required consent information.",
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

const expectations = [
  "Be willing to learn and work with others.",
  "Participate responsibly in approved Subang activities.",
  "Respect communities, fellow volunteers, partners, and organizational policies.",
  "Contribute your time, skills, ideas, or expertise where appropriate.",
  "Complete the requirements of the volunteer and membership pathway.",
];

export default function ApplyPage() {
  return (
    <>
      <Header />

      <PageIntro
        eyebrow="Join Subang Philippines"
        title="Start your journey from volunteer to member."
        text="Subang welcomes people who are willing to learn, contribute, and work with communities toward meaningful development."
      />

      <main>
        {/* Opening */}
        <section className="bg-white py-20 md:py-28">
          <div className="container-wide grid gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
            <div>
              <p className="mb-4 text-sm font-bold uppercase tracking-[0.18em] text-maroon">
                Begin here
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
                If you are ready to participate and grow through service, the
                application pathway is your first step.
              </p>

              <div className="mt-8">
                <Link
                  href="/connect"
                  className="inline-flex items-center gap-2 bg-maroon px-6 py-3 font-extrabold text-white transition hover:opacity-90"
                >
                  Open Application
                  <ArrowRight size={18} />
                </Link>
              </div>
            </div>

            <div className="bg-cream p-8 md:p-10">
              <p className="text-sm font-bold uppercase tracking-[0.16em] text-maroon">
                The pathway
              </p>

              <p className="mt-5 text-2xl font-extrabold leading-tight text-ink md:text-3xl">
                Volunteer → Internship → Membership
              </p>

              <p className="mt-5 leading-7 text-slate-600">
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

        {/* Application pathway */}
        <section className="bg-slate-50 py-20 md:py-28">
          <div className="container-wide">
            <div className="max-w-3xl">
              <p className="mb-4 text-sm font-bold uppercase tracking-[0.18em] text-maroon">
                Application pathway
              </p>

              <h2 className="text-3xl font-extrabold tracking-tight text-ink md:text-5xl">
                Six stages from application to membership.
              </h2>

              <p className="mt-5 text-lg leading-8 text-slate-600">
                Each stage is designed to help applicants understand the
                organization, contribute meaningfully, and demonstrate their
                readiness for membership.
              </p>
            </div>

            <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
              {pathway.map((step) => {
                const Icon = step.icon;

                return (
                  <article
                    key={step.number}
                    className="bg-white p-7 shadow-sm ring-1 ring-slate-200 transition hover:-translate-y-1 hover:shadow-md"
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

        {/* What applicants should expect */}
        <section className="bg-white py-20 md:py-28">
          <div className="container-wide grid gap-12 lg:grid-cols-2">
            <div>
              <p className="mb-4 text-sm font-bold uppercase tracking-[0.18em] text-maroon">
                What we expect
              </p>

              <h2 className="text-3xl font-extrabold tracking-tight text-ink md:text-5xl">
                Come ready to participate.
              </h2>

              <p className="mt-5 text-lg leading-8 text-slate-600">
                Subang does not expect applicants to know everything before
                they begin. What matters is the willingness to learn,
                contribute responsibly, and work with others.
              </p>
            </div>

            <div className="space-y-4">
              {expectations.map((item, index) => (
                <div
                  key={item}
                  className="flex gap-5 border-b border-slate-200 pb-5"
                >
                  <span className="shrink-0 text-sm font-extrabold text-maroon">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <p className="leading-7 text-slate-700">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Important note */}
        <section className="bg-cream py-16 md:py-20">
          <div className="container-wide">
            <div className="border-l-4 border-maroon bg-white px-6 py-7 shadow-sm md:px-8">
              <p className="font-extrabold text-ink">
                Before submitting your application
              </p>

              <p className="mt-3 max-w-4xl leading-7 text-slate-600">
                Please review the application form carefully and provide
                complete and accurate information. The application includes
                consent and data-processing provisions that applicants should
                read before submitting their information.
              </p>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-maroon py-20 text-white md:py-28">
          <div className="container-wide">
            <div className="max-w-3xl">
              <p className="text-sm font-bold uppercase tracking-[0.18em] text-gold">
                Take the first step
              </p>

              <h2 className="mt-4 text-3xl font-extrabold tracking-tight md:text-5xl">
                Ready to contribute?
              </h2>

              <p className="mt-5 text-lg leading-8 text-white/75">
                Begin your application and take the first step toward becoming
                part of Subang Philippines.
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Link
                  href="/connect"
                  className="inline-flex items-center justify-center gap-2 bg-gold px-6 py-3 font-extrabold text-ink transition hover:opacity-90"
                >
                  Open Application
                  <ArrowRight size={18} />
                </Link>

                <Link
                  href="/volunteer"
                  className="inline-flex items-center justify-center gap-2 border border-white/30 px-6 py-3 font-extrabold text-white transition hover:bg-white/10"
                >
                  Learn About Volunteering
                  <ArrowUpRight size={18} />
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
