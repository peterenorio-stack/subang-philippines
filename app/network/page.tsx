import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { Header, Footer } from "../components";

export const metadata: Metadata = {
  title: "Our Network",
  description:
    "Explore the Subang Philippines network of national, provincial, municipal, city, and university chapters working together for community development and volunteer action.",
  alternates: {
    canonical: "/network",
  },
  openGraph: {
    title: "Our Network | Subang Philippines",
    description:
      "A growing network of Subang Philippines chapters connecting volunteers, communities, institutions, and local action.",
    url: "/network",
    type: "website",
  },
};

type Chapter = {
  name: string;
  type: string;
  slug: string;
};

type ProvincialChapter = {
  name: string;
  slug: string;
  municipalities: Chapter[];
};

const provincialChapters: ProvincialChapter[] = [
  {
    name: "Province of Siquijor",
    slug: "province-of-siquijor",
    municipalities: [
      {
        name: "Municipality of Lazi",
        type: "Municipal Chapter",
        slug: "municipality-of-lazi",
      },
      {
        name: "Municipality of Maria",
        type: "Municipal Chapter",
        slug: "municipality-of-maria",
      },
      {
        name: "Municipality of Enrique Villanueva",
        type: "Municipal Chapter",
        slug: "municipality-of-enrique-villanueva",
      },
      {
        name: "Municipality of San Juan",
        type: "Municipal Chapter",
        slug: "municipality-of-san-juan",
      },
      {
        name: "Municipality of Siquijor",
        type: "Municipal Chapter",
        slug: "municipality-of-siquijor",
      },
    ],
  },
  {
    name: "Province of Cebu",
    slug: "province-of-cebu",
    municipalities: [
      {
        name: "Municipality of Barili",
        type: "Municipal Chapter",
        slug: "municipality-of-barili",
      },
      {
        name: "Municipality of Alegria",
        type: "Municipal Chapter",
        slug: "municipality-of-alegria",
      },
      {
        name: "Municipality of Balamban",
        type: "Municipal Chapter",
        slug: "municipality-of-balamban",
      },
    ],
  },
  {
    name: "Province of Negros Oriental",
    slug: "province-of-negros-oriental",
    municipalities: [],
  },
  {
    name: "Province of Negros Occidental",
    slug: "province-of-negros-occidental",
    municipalities: [],
  },
  {
    name: "Province of Bohol",
    slug: "province-of-bohol",
    municipalities: [],
  },
  {
    name: "Province of Leyte",
    slug: "province-of-leyte",
    municipalities: [
      {
        name: "Baybay City",
        type: "Component City Chapter",
        slug: "baybay-city",
      },
    ],
  },
];

const cityChapters: Chapter[] = [
  {
    name: "Cebu City",
    type: "Highly Urbanized City Chapter",
    slug: "cebu-city",
  },
];

const universityChapters: Chapter[] = [
  {
    name: "Cebu Technological University",
    type: "University/College Chapter",
    slug: "cebu-technological-university",
  },
  {
    name: "University of San Carlos",
    type: "University/College Chapter",
    slug: "university-of-san-carlos",
  },
  {
    name: "Cebu Normal University",
    type: "University/College Chapter",
    slug: "cebu-normal-university",
  },
  {
    name: "Silliman University",
    type: "University/College Chapter",
    slug: "silliman-university",
  },
  {
    name: "Negros Oriental State University",
    type: "University/College Chapter",
    slug: "negros-oriental-state-university",
  },
  {
    name: "Siquijor State College",
    type: "University/College Chapter",
    slug: "siquijor-state-college",
  },
  {
    name: "Visayas State University",
    type: "University/College Chapter",
    slug: "visayas-state-university",
  },
];

export default function NetworkPage() {
  return (
    <>
      <Header />

      <main className="bg-[#f7f3ea] text-[#171717]">
        {/* Hero */}
        <section className="relative overflow-hidden bg-[#470112] text-white">
          <div className="absolute inset-0 opacity-20">
            <div className="absolute -right-24 -top-24 h-80 w-80 rounded-full border border-[#ffb401]" />
            <div className="absolute -bottom-32 -left-20 h-96 w-96 rounded-full border border-white/30" />
          </div>

          <div className="relative mx-auto max-w-7xl px-6 py-24 sm:px-8 lg:px-12 lg:py-32">
            <p className="mb-5 text-sm font-bold uppercase tracking-[0.25em] text-[#ffb401]">
              04 / Our network
            </p>

            <div className="max-w-4xl">
              <h1 className="text-5xl font-bold leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl">
                A growing network
                <br />
                of local action.
              </h1>

              <p className="mt-8 max-w-2xl text-lg leading-8 text-white/80 sm:text-xl">
                Subang connects young people, communities, schools, and local
                partners through chapters that turn shared values into
                community action.
              </p>
            </div>
          </div>
        </section>

        {/* Overview */}
        <section className="border-b border-black/10 bg-white">
          <div className="mx-auto grid max-w-7xl gap-12 px-6 py-20 sm:px-8 lg:grid-cols-[1fr_1.3fr] lg:px-12 lg:py-24">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.22em] text-[#470112]">
                The network
              </p>
              <h2 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl">
                Local chapters.
                <br />
                Shared mission.
              </h2>
            </div>

            <div className="space-y-6 text-lg leading-8 text-black/70">
              <p>
                Subang Philippines works through a growing network of chapters
                across communities and educational institutions in the
                Philippines.
              </p>

              <p>
                Each chapter provides a local space for volunteers to organize,
                collaborate, and respond to community needs while remaining
                connected to the organization&apos;s wider mission and
                framework.
              </p>

              <p>
                Chapters may be organized at the provincial, municipal, city,
                or university and college level, depending on their geographic
                or institutional scope.
              </p>
            </div>
          </div>
        </section>

        {/* Network structure */}
        <section className="bg-[#f7f3ea]">
          <div className="mx-auto max-w-7xl px-6 py-20 sm:px-8 lg:px-12 lg:py-24">
            <div className="max-w-3xl">
              <p className="text-sm font-bold uppercase tracking-[0.22em] text-[#470112]">
                How we are organized
              </p>
              <h2 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl">
                Different places,
                <br />
                one movement.
              </h2>
              <p className="mt-6 text-lg leading-8 text-black/65">
                Geographic chapters create a structure for local action, while
                university and college chapters provide institutional spaces
                for youth participation and volunteerism.
              </p>
            </div>

            <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {[
                {
                  number: "01",
                  title: "National Team",
                  text: "Provides organization-wide direction, coordination, and support.",
                },
                {
                  number: "02",
                  title: "Provincial Chapters",
                  text: "Coordinate Subang activities across provinces and their local units.",
                },
                {
                  number: "03",
                  title: "City Chapters",
                  text: "Serve communities within cities with their own chapter scope.",
                },
                {
                  number: "04",
                  title: "University & College",
                  text: "Connect students and institutions to volunteer action.",
                },
              ].map((item) => (
                <div
                  key={item.number}
                  className="rounded-3xl border border-black/10 bg-white p-7"
                >
                  <span className="text-sm font-bold tracking-[0.2em] text-[#ffb401]">
                    {item.number}
                  </span>
                  <h3 className="mt-8 text-xl font-bold">{item.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-black/60">
                    {item.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* National Team */}
        <section className="bg-white">
          <div className="mx-auto max-w-7xl px-6 py-20 sm:px-8 lg:px-12 lg:py-24">
            <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
              <div>
                <p className="text-sm font-bold uppercase tracking-[0.22em] text-[#470112]">
                  01 / National
                </p>
                <h2 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl">
                  National Team
                </h2>
              </div>

              <p className="max-w-xl text-base leading-7 text-black/60">
                The National Team provides organization-wide leadership and
                helps connect chapters, departments, programs, and volunteers
                across the Subang network.
              </p>
            </div>

            <div className="mt-12 rounded-3xl bg-[#470112] p-8 text-white sm:p-10">
              <div className="flex flex-col gap-8 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#ffb401]">
                    Organization-wide
                  </p>
                  <h3 className="mt-3 text-3xl font-bold">
                    Subang Philippines
                  </h3>
                  <p className="mt-3 max-w-2xl leading-7 text-white/70">
                    Coordinating the organization&apos;s shared direction,
                    systems, partnerships, programs, and volunteer network.
                  </p>
                </div>

                <Link
                  href="/leadership"
                  className="inline-flex shrink-0 items-center gap-2 text-sm font-bold text-[#ffb401] transition-transform hover:translate-x-1"
                >
                  Meet the leadership
                  <ArrowRight size={17} />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Provincial Chapters */}
        <section className="bg-[#f7f3ea]">
          <div className="mx-auto max-w-7xl px-6 py-20 sm:px-8 lg:px-12 lg:py-24">
            <div className="max-w-3xl">
              <p className="text-sm font-bold uppercase tracking-[0.22em] text-[#470112]">
                02 / Geographic
              </p>
              <h2 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl">
                Provincial Chapters
              </h2>
              <p className="mt-6 text-lg leading-8 text-black/65">
                Provincial chapters provide a geographic structure for
                coordinating community action. Municipal and component city
                chapters may operate within the jurisdiction of their
                respective provincial chapter.
              </p>
            </div>

            <div className="mt-14 space-y-6">
              {provincialChapters.map((province, index) => (
                <div
                  key={province.slug}
                  className="overflow-hidden rounded-3xl border border-black/10 bg-white"
                >
                  <div className="flex flex-col gap-5 p-7 sm:flex-row sm:items-center sm:justify-between sm:p-9">
                    <div className="flex items-start gap-5">
                      <span className="pt-1 text-sm font-bold tracking-[0.18em] text-[#ffb401]">
                        {String(index + 1).padStart(2, "0")}
                      </span>

                      <div>
                        <p className="text-xs font-bold uppercase tracking-[0.16em] text-black/40">
                          Provincial Chapter
                        </p>
                        <h3 className="mt-2 text-2xl font-bold sm:text-3xl">
                          {province.name}
                        </h3>
                      </div>
                    </div>
                  </div>

                  {province.municipalities.length > 0 && (
                    <div className="border-t border-black/10 bg-[#faf8f3] px-7 py-7 sm:px-9">
                      <p className="mb-5 text-xs font-bold uppercase tracking-[0.18em] text-black/40">
                        Local chapters
                      </p>

                      <div className="grid gap-3 md:grid-cols-2">
                        {province.municipalities.map((chapter) => (
                          <Link
                            key={chapter.slug}
                            href={`/network/${chapter.slug}`}
                            className="group flex items-center justify-between rounded-2xl border border-black/10 bg-white px-5 py-4 transition hover:border-[#470112]/30 hover:shadow-sm"
                          >
                            <div>
                              <p className="text-xs font-semibold uppercase tracking-[0.12em] text-black/40">
                                {chapter.type}
                              </p>
                              <p className="mt-1 font-bold">{chapter.name}</p>
                            </div>

                            <ArrowUpRight
                              size={18}
                              className="text-black/30 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-[#470112]"
                            />
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* City Chapters */}
        <section className="bg-white">
          <div className="mx-auto max-w-7xl px-6 py-20 sm:px-8 lg:px-12 lg:py-24">
            <div className="max-w-3xl">
              <p className="text-sm font-bold uppercase tracking-[0.22em] text-[#470112]">
                03 / Cities
              </p>
              <h2 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl">
                City Chapters
              </h2>
              <p className="mt-6 text-lg leading-8 text-black/65">
                City chapters are maintained separately when their geographic
                jurisdiction is independent of the surrounding provincial
                structure.
              </p>
            </div>

            <div className="mt-12 grid gap-5 sm:grid-cols-2">
              {cityChapters.map((chapter) => (
                <Link
                  key={chapter.slug}
                  href={`/network/${chapter.slug}`}
                  className="group rounded-3xl border border-black/10 bg-[#f7f3ea] p-8 transition hover:-translate-y-0.5 hover:shadow-lg"
                >
                  <div className="flex items-start justify-between gap-6">
                    <div>
                      <p className="text-xs font-bold uppercase tracking-[0.16em] text-[#470112]">
                        {chapter.type}
                      </p>
                      <h3 className="mt-4 text-3xl font-bold">
                        {chapter.name}
                      </h3>
                    </div>

                    <ArrowUpRight
                      size={21}
                      className="mt-1 shrink-0 text-black/30 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-[#470112]"
                    />
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* University Chapters */}
        <section className="bg-[#f7f3ea]">
          <div className="mx-auto max-w-7xl px-6 py-20 sm:px-8 lg:px-12 lg:py-24">
            <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr]">
              <div>
                <p className="text-sm font-bold uppercase tracking-[0.22em] text-[#470112]">
                  04 / Institutional
                </p>
                <h2 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl">
                  University &amp; College Chapters
                </h2>
                <p className="mt-6 text-lg leading-8 text-black/65">
                  Institutional chapters provide students and young people
                  with spaces to organize volunteer action, develop leadership,
                  and connect academic communities with real-world needs.
                </p>
              </div>

              <div className="grid gap-3">
                {universityChapters.map((chapter, index) => (
                  <Link
                    key={chapter.slug}
                    href={`/network/${chapter.slug}`}
                    className="group flex items-center justify-between rounded-2xl border border-black/10 bg-white px-6 py-5 transition hover:border-[#470112]/30 hover:shadow-sm"
                  >
                    <div className="flex items-center gap-5">
                      <span className="text-sm font-bold text-[#ffb401]">
                        {String(index + 1).padStart(2, "0")}
                      </span>

                      <div>
                        <p className="text-xs font-bold uppercase tracking-[0.13em] text-black/35">
                          University/College Chapter
                        </p>
                        <p className="mt-1 font-bold">{chapter.name}</p>
                      </div>
                    </div>

                    <ArrowUpRight
                      size={18}
                      className="shrink-0 text-black/25 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-[#470112]"
                    />
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Growing Network */}
        <section className="bg-[#470112] text-white">
          <div className="mx-auto max-w-7xl px-6 py-20 sm:px-8 lg:px-12 lg:py-24">
            <div className="grid gap-12 lg:grid-cols-[1fr_0.8fr] lg:items-end">
              <div>
                <p className="text-sm font-bold uppercase tracking-[0.22em] text-[#ffb401]">
                  Growing the network
                </p>

                <h2 className="mt-5 text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
                  Start where you are.
                  <br />
                  Build where you can.
                </h2>

                <p className="mt-7 max-w-2xl text-lg leading-8 text-white/70">
                  Subang chapters grow through volunteers and communities who
                  are ready to organize, collaborate, and create meaningful
                  local action.
                </p>
              </div>

              <div className="rounded-3xl border border-white/15 bg-white/5 p-7 sm:p-8">
                <p className="text-sm font-bold uppercase tracking-[0.15em] text-[#ffb401]">
                  Interested in joining?
                </p>

                <p className="mt-4 leading-7 text-white/70">
                  Learn more about becoming part of the Subang volunteer
                  network or connect with the organization about local
                  collaboration.
                </p>

                <div className="mt-7 flex flex-col gap-3 sm:flex-row">
                  <Link
                    href="/volunteer"
                    className="inline-flex items-center justify-center gap-2 rounded-full bg-[#ffb401] px-6 py-3 text-sm font-bold text-[#470112] transition hover:opacity-90"
                  >
                    Become a volunteer
                    <ArrowRight size={17} />
                  </Link>

                  <Link
                    href="/connect"
                    className="inline-flex items-center justify-center gap-2 rounded-full border border-white/25 px-6 py-3 text-sm font-bold text-white transition hover:bg-white/10"
                  >
                    Connect with us
                    <ArrowRight size={17} />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="bg-[#f7f3ea]">
          <div className="mx-auto max-w-7xl px-6 py-20 text-center sm:px-8 lg:px-12 lg:py-24">
            <p className="text-sm font-bold uppercase tracking-[0.22em] text-[#470112]">
              Live. Create. Inspire.
            </p>

            <h2 className="mx-auto mt-5 max-w-3xl text-4xl font-bold tracking-tight sm:text-5xl">
              Communities become stronger when people choose to act together.
            </h2>

            <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-black/60">
              Our network is built on that simple idea: local people, local
              action, and a shared commitment to creating better communities.
            </p>

            <div className="mt-9">
              <Link
                href="/volunteer"
                className="inline-flex items-center gap-2 rounded-full bg-[#470112] px-7 py-3.5 text-sm font-bold text-white transition hover:bg-[#5b061b]"
              >
                Join the movement
                <ArrowRight size={17} />
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
