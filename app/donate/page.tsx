import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, ArrowUpRight, Heart } from "lucide-react";
import { Header, Footer, PageIntro } from "../components";

export const metadata: Metadata = {
  title: "Support Subang",
  description:
    "Support Subang Philippines through a contribution that helps provide the resources, materials, learning opportunities, and community support needed to turn volunteer effort into action.",
  alternates: {
    canonical: "/donate",
  },
  openGraph: {
    title: "Support Subang | Subang Philippines",
    description:
      "Support Subang Philippines and help turn volunteer effort into meaningful community action.",
    url: "/donate",
    type: "website",
  },
};

const contributionAreas = [
  {
    number: "01",
    title: "Environmental Sustainability",
    text: "Support ecosystem restoration, tree and bamboo propagation, biodiversity initiatives, environmental education, and community environmental action.",
  },
  {
    number: "02",
    title: "Food Security & Sustainable Agriculture",
    text: "Help strengthen food production, sustainable agriculture, composting, community food systems, and agricultural learning.",
  },
  {
    number: "03",
    title: "Waste Management & Circularity",
    text: "Contribute to waste reduction, resource recovery, composting, and practical circular community practices.",
  },
  {
    number: "04",
    title: "Coastal & Marine Action",
    text: "Support coastal cleanup, conservation, restoration, environmental education, and community-based marine action.",
  },
  {
    number: "05",
    title: "Youth Leadership & Participation",
    text: "Help create opportunities for young people to lead projects, develop skills, mobilize volunteers, and participate meaningfully in their communities.",
  },
  {
    number: "06",
    title: "Education & Capacity Building",
    text: "Support workshops, training, mentoring, learning materials, leadership development, and community capacity building.",
  },
  {
    number: "07",
    title: "Partnerships & Community Mobilization",
    text: "Help bring together communities, institutions, schools, government, civil society, and volunteers around shared development goals.",
  },
];

const donationMethods = [
  {
    name: "GoTyme",
    image: "/assets/donate/gotyme-qr.png",
    accountName: "PETER JOHN ENORIO",
    accountNumber: "015382179854",
    label: "Account Number",
  },
  {
    name: "GCash",
    image: "/assets/donate/gcash-qr.png",
    accountName: "PETER JOHN ENORIO",
    accountNumber: "09205487676",
    label: "GCash Number",
  },
  {
    name: "LandBank",
    image: "/assets/donate/landbank-qr.png",
    accountName: "PETER JOHN C ENORIO",
    accountNumber: "4768444410060023",
    label: "Account Number",
    branch: "Barili, Cebu, Philippines",
  },
];

export default function Donate() {
  return (
    <main>
      <Header />

      <PageIntro
        eyebrow="Support Subang"
        title="Help turn volunteer effort into community action."
        text="Subang volunteers contribute their time, skills, and initiative. Financial contributions help provide the materials, resources, learning opportunities, and field support that allow community action to happen."
      />

      {/* WHY SUPPORT SUBANG */}
      <section className="container-wide py-16 md:py-24">
        <div className="grid gap-10 lg:grid-cols-[1fr_1.25fr] lg:items-end">
          <div>
            <p className="eyebrow text-green">Why Give</p>

            <h2 className="display mt-4 text-4xl text-maroon md:text-5xl">
              Support the work behind the volunteer work.
            </h2>
          </div>

          <div className="max-w-2xl">
            <p className="text-lg leading-8 text-ink/65">
              Subang is a youth-led volunteer organization committed to
              transforming communities into safer, equitable, sustainable, and
              resilient communities. Volunteers give their time and skills.
              Contributions help provide the practical resources that allow
              those efforts to reach communities.
            </p>

            <p className="mt-5 text-lg leading-8 text-ink/65">
              Your support can help make community activities, environmental
              initiatives, agricultural projects, educational programs,
              leadership development, and other forms of community action
              possible.
            </p>
          </div>
        </div>
      </section>

      {/* CONTRIBUTION AREAS */}
      <section className="bg-cream py-20 md:py-28">
        <div className="container-wide">
          <div className="max-w-3xl">
            <p className="eyebrow text-green">Where Your Support Can Help</p>

            <h2 className="display mt-5 text-4xl text-maroon md:text-6xl">
              One contribution can help strengthen many kinds of action.
            </h2>

            <p className="mt-7 max-w-2xl text-lg leading-8 text-ink/65">
              Subang's work is interconnected. Contributions may help support
              activities across the organization's program areas, depending on
              current priorities, project needs, and available resources.
            </p>
          </div>

          <div className="mt-14 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {contributionAreas.map((area) => (
              <article
                key={area.number}
                className="border border-maroon/10 bg-white p-7 md:p-8"
              >
                <p className="display text-4xl text-maroon">{area.number}</p>

                <h3 className="display mt-5 text-2xl text-maroon">
                  {area.title}
                </h3>

                <p className="mt-4 leading-7 text-ink/65">{area.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* DONATION METHODS */}
      <section className="container-wide py-20 md:py-28">
        <div className="max-w-3xl">
          <p className="eyebrow text-green">Make a Contribution</p>

          <h2 className="display mt-5 text-4xl text-maroon md:text-6xl">
            Choose the giving method that works for you.
          </h2>

          <p className="mt-7 max-w-2xl text-lg leading-8 text-ink/65">
            You may contribute through GoTyme, GCash, or LandBank. For mobile
            giving, scan the QR code using your preferred banking or payment
            application.
          </p>
        </div>

        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {donationMethods.map((method) => (
            <article
              key={method.name}
              className="overflow-hidden border border-maroon/10 bg-white"
            >
              <div className="border-b border-maroon/10 bg-cream p-7">
                <p className="eyebrow text-green">Give through</p>

                <h3 className="display mt-3 text-3xl text-maroon">
                  {method.name}
                </h3>
              </div>

              <div className="p-7 md:p-8">
                <div className="mx-auto flex aspect-square max-w-[280px] items-center justify-center border border-maroon/10 bg-white p-5">
                  <img
                    src={method.image}
                    alt={`${method.name} donation QR code`}
                    className="h-full w-full object-contain"
                  />
                </div>

                <p className="mt-7 text-center text-sm font-bold text-ink/55">
                  Scan to contribute
                </p>

                <div className="mt-7 space-y-5 border-t border-maroon/10 pt-6">
                  <div>
                    <p className="text-xs font-extrabold uppercase tracking-[0.14em] text-green">
                      Account Name
                    </p>

                    <p className="mt-2 break-words font-extrabold text-maroon">
                      {method.accountName}
                    </p>
                  </div>

                  <div>
                    <p className="text-xs font-extrabold uppercase tracking-[0.14em] text-green">
                      {method.label}
                    </p>

                    <p className="mt-2 break-all font-extrabold tracking-wide text-maroon">
                      {method.accountNumber}
                    </p>
                  </div>

                  {method.branch && (
                    <div>
                      <p className="text-xs font-extrabold uppercase tracking-[0.14em] text-green">
                        Branch
                      </p>

                      <p className="mt-2 font-extrabold text-maroon">
                        {method.branch}
                      </p>
                    </div>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* BEFORE YOU GIVE */}
      <section className="bg-maroon text-white">
        <div className="container-wide py-20 md:py-28">
          <div className="grid gap-12 lg:grid-cols-[1fr_1fr] lg:items-start">
            <div>
              <p className="eyebrow text-gold">Before You Give</p>

              <h2 className="display mt-5 text-4xl md:text-6xl">
                A few things to keep in mind.
              </h2>
            </div>

            <div className="space-y-7">
              <div className="border-t border-white/15 pt-6">
                <h3 className="display text-2xl">
                  Verify the recipient details.
                </h3>

                <p className="mt-3 leading-7 text-white/65">
                  Before completing a transfer, carefully check the account
                  name and account number shown on this page and in your
                  selected payment application.
                </p>
              </div>

              <div className="border-t border-white/15 pt-6">
                <h3 className="display text-2xl">
                  Contributions support Subang's work.
                </h3>

                <p className="mt-3 leading-7 text-white/65">
                  Contributions may support program activities, materials,
                  transportation and field logistics, training and learning
                  activities, communications and documentation, and other
                  legitimate needs connected to Subang's mission.
                </p>
              </div>

              <div className="border-t border-white/15 pt-6">
                <h3 className="display text-2xl">
                  Keep your transaction record.
                </h3>

                <p className="mt-3 leading-7 text-white/65">
                  Please retain your payment confirmation or transaction
                  reference for your records.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* STEWARDSHIP */}
      <section className="bg-cream py-20 md:py-28">
        <div className="container-wide">
          <div className="grid gap-10 lg:grid-cols-[1fr_1.25fr]">
            <div>
              <p className="eyebrow text-green">Responsible Stewardship</p>

              <h2 className="display mt-5 text-4xl text-maroon md:text-5xl">
                Contributions should strengthen the work, not define it.
              </h2>
            </div>

            <div className="max-w-3xl">
              <p className="text-lg leading-8 text-ink/65">
                Subang's work is rooted in volunteerism, community
                participation, and partnerships. Financial contributions are
                one of several ways people can support that work.
              </p>

              <p className="mt-5 text-lg leading-8 text-ink/65">
                Subang is committed to responsible stewardship of resources
                received in support of its mission and to maintaining
                appropriate organizational records of contributions and their
                use.
              </p>

              <p className="mt-5 text-sm leading-7 text-ink/50">
                Unless specifically stated otherwise, contributions are not
                represented as restricted to a particular program or activity.
                Their use may depend on current organizational priorities,
                project requirements, and available resources.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* AFTER GIVING */}
      <section className="container-wide py-20 md:py-28">
        <div className="border-t border-maroon/15 pt-12">
          <div className="grid gap-8 md:grid-cols-[1fr_auto] md:items-end">
            <div className="max-w-3xl">
              <p className="eyebrow text-green">Already Contributed?</p>

              <h2 className="display mt-4 text-4xl text-maroon md:text-5xl">
                Thank you for supporting community action.
              </h2>

              <p className="mt-6 max-w-2xl text-lg leading-8 text-ink/65">
                If you would like to let Subang know about your contribution,
                you can get in touch with us. This helps us maintain a clearer
                record of support received.
              </p>
            </div>

            <Link
              href="/connect"
              className="inline-flex items-center gap-2 font-extrabold text-blue"
            >
              Contact Subang
              <ArrowUpRight size={17} />
            </Link>
          </div>
        </div>
      </section>

      {/* VOLUNTEER + DONATE */}
      <section className="bg-maroon text-white">
        <div className="container-wide py-20 md:py-28">
          <div className="mx-auto max-w-4xl text-center">
            <Heart className="mx-auto text-gold" size={28} />

            <p className="eyebrow mt-6 text-gold">Give Time. Give Support.</p>

            <h2 className="display mt-4 text-4xl md:text-6xl">
              There is more than one way to be part of the movement.
            </h2>

            <p className="mx-auto mt-7 max-w-2xl text-lg leading-8 text-white/70">
              Whether you contribute your time, skills, resources, ideas, or
              partnerships, every meaningful contribution can help strengthen
              community action.
            </p>

            <div className="mt-9 flex flex-col justify-center gap-4 sm:flex-row">
              <Link
                href="/volunteer"
                className="inline-flex items-center justify-center gap-2 bg-gold px-6 py-3 font-extrabold text-maroon transition hover:opacity-90"
              >
                Become a volunteer
                <ArrowRight size={17} />
              </Link>

              <Link
                href="/connect"
                className="inline-flex items-center justify-center gap-2 border border-white/20 px-6 py-3 font-extrabold text-white transition hover:border-white/40"
              >
                Connect with Subang
                <ArrowUpRight size={17} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
