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

const contributionAreas = [
  "Environmental sustainability",
  "Food security and sustainable agriculture",
  "Waste management and circularity",
  "Coastal and marine action",
  "Youth leadership and participation",
  "Education and capacity building",
  "Partnerships and community mobilization",
];

export default function DonatePage() {
  return (
    <>
      <Header />

      <main>
        <PageIntro
          eyebrow="Support Subang"
          title="Help turn volunteer effort into community action."
          text="Subang is a youth-led volunteer organization committed to transforming communities into safer, equitable, sustainable, and resilient communities. Volunteers give their time and skills. Contributions help provide the practical resources that allow those efforts to reach communities."
        />

        <section className="border-t border-black/10">
          <div className="mx-auto max-w-6xl px-6 py-20 md:px-8 md:py-28">
            <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr]">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#470112]">
                  Why give
                </p>
                <h2 className="mt-4 text-3xl font-semibold tracking-tight text-[#470112] md:text-4xl">
                  Support the work behind the work.
                </h2>
              </div>

              <div className="space-y-6 text-base leading-8 text-black/70">
                <p>
                  Volunteer action requires more than time and commitment. It
                  also requires transportation, materials, learning resources,
                  communication, community coordination, and other practical
                  support.
                </p>

                <p>
                  Your contribution can help Subang create the conditions for
                  volunteers and communities to turn ideas into sustained
                  action.
                </p>

                <div className="rounded-2xl bg-[#f7f2e8] p-6">
                  <div className="flex gap-4">
                    <div className="mt-1 shrink-0 text-[#470112]">
                      <Heart size={22} strokeWidth={1.8} />
                    </div>
                    <p className="text-sm leading-7 text-black/70">
                      Every contribution is meaningful to a volunteer
                      organization whose work depends on people giving their
                      time, skills, resources, and support.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="border-t border-black/10 bg-[#f7f2e8]">
          <div className="mx-auto max-w-6xl px-6 py-20 md:px-8 md:py-28">
            <div className="max-w-3xl">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#470112]">
                Where your support can help
              </p>
              <h2 className="mt-4 text-3xl font-semibold tracking-tight text-[#470112] md:text-4xl">
                Contributions can strengthen different areas of Subang&apos;s
                work.
              </h2>
              <p className="mt-5 text-base leading-8 text-black/70">
                Depending on current organizational priorities and project
                requirements, resources may support activities across these
                connected areas of action.
              </p>
            </div>

            <div className="mt-12 grid gap-px overflow-hidden rounded-2xl border border-black/10 bg-black/10 md:grid-cols-2">
              {contributionAreas.map((area, index) => (
                <div
                  key={area}
                  className="bg-white p-6 md:p-7"
                >
                  <div className="text-sm font-semibold text-[#470112]">
                    {String(index + 1).padStart(2, "0")}
                  </div>
                  <h3 className="mt-3 text-lg font-semibold text-[#470112]">
                    {area}
                  </h3>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="border-t border-black/10">
          <div className="mx-auto max-w-6xl px-6 py-20 md:px-8 md:py-28">
            <div className="max-w-3xl">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#470112]">
                Make a contribution
              </p>
              <h2 className="mt-4 text-3xl font-semibold tracking-tight text-[#470112] md:text-4xl">
                Choose a convenient way to support Subang.
              </h2>
              <p className="mt-5 text-base leading-8 text-black/70">
                You may use any of the payment channels below. Please verify
                the account details before completing your transaction.
              </p>
            </div>

            <div className="mt-12 grid gap-6 lg:grid-cols-3">
              {donationMethods.map((method) => (
                <article
                  key={method.name}
                  className="overflow-hidden rounded-2xl border border-black/10 bg-white"
                >
                  <div className="flex items-center justify-center border-b border-black/10 bg-[#f7f2e8] p-8">
                    <img
                      src={method.image}
                      alt={`${method.name} QR code for supporting Subang Philippines`}
                      className="h-auto w-full max-w-[260px] object-contain"
                    />
                  </div>

                  <div className="p-7">
                    <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[#470112]">
                      {method.name}
                    </p>

                    <h3 className="mt-4 text-xl font-semibold text-[#470112]">
                      {method.accountName}
                    </h3>

                    <div className="mt-5 space-y-3 text-sm">
                      <div>
                        <p className="text-black/50">{method.label}</p>
                        <p className="mt-1 font-medium text-black/80">
                          {method.accountNumber}
                        </p>
                      </div>

                      {method.branch && (
                        <div>
                          <p className="text-black/50">Branch</p>
                          <p className="mt-1 font-medium text-black/80">
                            {method.branch}
                          </p>
                        </div>
                      )}
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="border-t border-black/10 bg-[#470112] text-white">
          <div className="mx-auto max-w-6xl px-6 py-20 md:px-8 md:py-24">
            <div className="grid gap-12 lg:grid-cols-2">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#ffb401]">
                  Before you give
                </p>
                <h2 className="mt-4 text-3xl font-semibold tracking-tight md:text-4xl">
                  A few simple steps help keep contributions secure.
                </h2>
              </div>

              <div className="space-y-6">
                {[
                  "Verify the recipient name and account details before sending your contribution.",
                  "Keep your transaction receipt or reference number for your records.",
                  "Contributions support Subang's work and may be used according to current organizational priorities and project requirements.",
                ].map((item, index) => (
                  <div
                    key={item}
                    className="flex gap-5 border-b border-white/15 pb-6 last:border-0"
                  >
                    <span className="shrink-0 text-sm font-semibold text-[#ffb401]">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <p className="text-sm leading-7 text-white/75">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="border-t border-black/10">
          <div className="mx-auto max-w-6xl px-6 py-20 md:px-8 md:py-28">
            <div className="grid gap-12 lg:grid-cols-2">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#470112]">
                  Responsible stewardship
                </p>
                <h2 className="mt-4 text-3xl font-semibold tracking-tight text-[#470112] md:text-4xl">
                  Contributions should be handled with accountability.
                </h2>
              </div>

              <div className="space-y-6 text-base leading-8 text-black/70">
                <p>
                  Subang is committed to responsible stewardship of resources
                  received in support of its mission and to maintaining
                  appropriate organizational records of contributions and their
                  use.
                </p>

                <p>
                  Unless specifically stated otherwise, contributions are not
                  represented as restricted to a particular program or
                  activity. Their use may depend on current organizational
                  priorities, project requirements, and available resources.
                </p>

                <p>
                  If you have questions about contributing or would like to
                  discuss a partnership or in-kind support, please get in
                  touch with the Subang team.
                </p>

                <Link
                  href="/connect"
                  className="inline-flex items-center gap-2 font-semibold text-[#470112] transition-opacity hover:opacity-70"
                >
                  Contact Subang
                  <ArrowUpRight size={17} />
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section className="border-t border-black/10 bg-[#f7f2e8]">
          <div className="mx-auto max-w-6xl px-6 py-20 md:px-8 md:py-24">
            <div className="rounded-3xl bg-white p-8 shadow-sm md:p-12">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#470112]">
                Already contributed?
              </p>

              <div className="mt-5 flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
                <div className="max-w-2xl">
                  <h2 className="text-2xl font-semibold tracking-tight text-[#470112] md:text-3xl">
                    We appreciate your support.
                  </h2>
                  <p className="mt-4 text-base leading-8 text-black/70">
                    If you have already made a contribution and would like to
                    get in touch with the Subang team, we would be glad to hear
                    from you.
                  </p>
                </div>

                <Link
                  href="/connect"
                  className="inline-flex shrink-0 items-center gap-2 font-semibold text-[#470112]"
                >
                  Get in touch
                  <ArrowRight size={18} />
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section className="border-t border-black/10">
          <div className="mx-auto max-w-6xl px-6 py-20 md:px-8 md:py-28">
            <div className="rounded-3xl bg-[#470112] px-8 py-12 text-white md:px-12 md:py-16">
              <div className="max-w-3xl">
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#ffb401]">
                  Give time. Give support.
                </p>

                <h2 className="mt-4 text-3xl font-semibold tracking-tight md:text-5xl">
                  There is more than one way to be part of the movement.
                </h2>

                <p className="mt-6 max-w-2xl text-base leading-8 text-white/75">
                  Whether through volunteer service, financial support,
                  partnerships, or shared expertise, every contribution can
                  help strengthen community action.
                </p>

                <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                  <Link
                    href="/volunteer"
                    className="inline-flex items-center justify-center gap-2 rounded-full bg-[#ffb401] px-6 py-3 font-semibold text-[#470112] transition-transform hover:-translate-y-0.5"
                  >
                    Volunteer
                    <ArrowRight size={17} />
                  </Link>

                  <Link
                    href="/connect"
                    className="inline-flex items-center justify-center gap-2 rounded-full border border-white/30 px-6 py-3 font-semibold text-white transition-colors hover:bg-white/10"
                  >
                    Connect with us
                    <ArrowUpRight size={17} />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
