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

      <main>
        {/* Hero */}
        <section className="border-b border-black/10 bg-[#f7f3ea]">
          <div className="mx-auto max-w-7xl px-6 py-20 md:px-10 md:py-28">
            <div className="max-w-4xl">
              <p className="mb-5 text-sm font-bold uppercase tracking-[0.2em] text-[#470112]">
                01 / Our network
              </p>

              <h1 className="text-5xl font-semibold tracking-tight text-[#1d1d1b] md:text-7xl">
                A network built for local action.
              </h1>

              <p className="mt-8 max-w-2xl text-lg leading-8 text-black/65 md:text-xl">
                Subang connects volunteers through national, provincial,
                municipal, city, and university chapters, creating a structure
                for communities and institutions to turn shared aspirations
                into meaningful action.
              </p>
            </div>
          </div>
        </section>

        {/* Network overview */}
        <section className="border-b border-black/10 bg-white">
          <div className="mx-auto max-w-7xl px-6 py-20 md:px-10 md:py-24">
            <div className="grid gap-12 md:grid-cols-[0.8fr_1.2fr] md:gap-20">
              <div>
                <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#470112]">
                  02 / How we are organized
                </p>
                <h2 className="mt-5 text-3xl font-semibold tracking-tight text-[#1d1d1b] md:text-4xl">
                  One organization. Multiple points of action.
                </h2>
              </div>

              <div className="space-y-6 text-base leading-8 text-black/65 md:text-lg">
                <p>
                  The Subang network is designed to bring national coordination
                  closer to the communities and institutions where volunteer
                  action happens.
                </p>

                <p>
                  Provincial chapters may have municipal or component city
                  chapters within their jurisdiction. Highly urbanized cities
                  and independent component cities may operate as separate city
                  chapters rather than being placed under a provincial
                  chapter.
                </p>

                <p>
                  University and college chapters form a separate institutional
                  network, connecting students, educators, and volunteers
                  through their respective schools.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* National Team */}
        <section className="border-b border-black/10 bg-[#470112] text-white">
          <div className="mx-auto max-w-7xl px-6 py-20 md:px-10 md:py-24">
            <div className="grid gap-10 md:grid-cols-[0.7fr_1.3fr] md:items-end">
              <div>
                <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#ffb401]">
                  03 / National Team
                </p>

                <h2 className="mt-5 text-4xl font-semibold tracking-tight md:text-5xl">
                  National Team
                </h2>
              </div>

              <div>
                <p className="max-w-2xl text-lg leading-8 text-white/75">
                  The National Team provides organization-wide leadership,
                  coordination, partnerships, and support for Subang chapters
                  and initiatives across the network.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Provincial Chapters */}
        <section className="border-b border-black/10 bg-white">
          <div className="mx-auto max-w-7xl px-6 py-20 md:px-10 md:py-24">
            <div className="mb-14 max-w-3xl">
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#470112]">
                04 / Provincial chapters
              </p>

              <h2 className="mt-5 text-4xl font-semibold tracking-tight text-[#1d1d1b] md:text-5xl">
                Provincial Chapters
              </h2>

              <p className="mt-6 text-lg leading-8 text-black/65">
                Provincial chapters coordinate Subang's local presence within
                their respective provinces and may serve as the organizational
                home of municipal and component city chapters in the area.
              </p>
            </div>

            <div className="space-y-5">
              {provincialChapters.map((province, index) => (
                <div
                  key={province.slug}
                  className="overflow-hidden rounded-2xl border border-black/10 bg-[#f7f3ea]"
                >
                  <div className="flex flex-col gap-5 p-7 md:flex-row md:items-center md:justify-between md:px-9 md:py-8">
                    <div className="flex items-start gap-5">
                      <span className="pt-1 text-sm font-bold text-[#470112]">
                        {String(index + 1).padStart(2, "0")}
                      </span>

                      <div>
                        <p className="text-xs font-bold uppercase tracking-[0.18em] text-black/40">
                          Provincial Chapter
                        </p>

                        <h3 className="mt-2 text-2xl font-semibold tracking-tight text-[#1d1d1b]">
                          {province.name}
                        </h3>
                      </div>
                    </div>

                    {province.municipalities.length > 0 && (
                      <span className="text-sm font-semibold text-black/45">
                        {province.municipalities.length} local{" "}
                        {province.municipalities.length === 1
                          ? "chapter"
                          : "chapters"}
                      </span>
                    )}
                  </div>

                  {province.municipalities.length > 0 && (
                    <div className="border-t border-black/10 bg-white px-7 py-6 md:px-9">
                      <p className="mb-5 text-xs font-bold uppercase tracking-[0.18em] text-black/40">
                        Municipal / City Chapters
                      </p>

                      <div className="grid gap-3 md:grid-cols-2">
                        {province.municipalities.map((chapter) => (
                          <div
                            key={chapter.slug}
                            className="rounded-xl border border-black/10 bg-[#f7f3ea] px-5 py-4"
                          >
                            <p className="text-xs font-bold uppercase tracking-[0.15em] text-[#470112]">
                              {chapter.type}
                            </p>

                            <p className="mt-2 font-semibold text-[#1d1d1b]">
                              {chapter.name}
                            </p>
                          </div>
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
        <section className="border-b border-black/10 bg-[#f7f3ea]">
          <div className="mx-auto max-w-7xl px-6 py-20 md:px-10 md:py-24">
            <div className="mb-12 max-w-3xl">
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#470112]">
                05 / City chapters
              </p>

              <h2 className="mt-5 text-4xl font-semibold tracking-tight text-[#1d1d1b] md:text-5xl">
                Independent City Chapters
              </h2>

              <p className="mt-6 text-lg leading-8 text-black/65">
                Subang maintains separate city chapters for highly urbanized
                cities and independent component cities that are not under the
                jurisdiction of a provincial government.
              </p>
            </div>

            <div className="grid gap-5 md:grid-cols-2">
              {cityChapters.map((chapter) => (
                <div
                  key={chapter.slug}
                  className="rounded-2xl border border-black/10 bg-white p-7 md:p-8"
                >
                  <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#470112]">
                    {chapter.type}
                  </p>

                  <h3 className="mt-3 text-2xl font-semibold tracking-tight text-[#1d1d1b]">
                    {chapter.name}
                  </h3>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* University Chapters */}
        <section className="border-b border-black/10 bg-white">
          <div className="mx-auto max-w-7xl px-6 py-20 md:px-10 md:py-24">
            <div className="grid gap-12 md:grid-cols-[0.8fr_1.2fr] md:gap-20">
              <div>
                <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#470112]">
                  06 / University chapters
                </p>

                <h2 className="mt-5 text-4xl font-semibold tracking-tight text-[#1d1d1b] md:text-5xl">
                  University & College Chapters
                </h2>
              </div>

              <div>
                <p className="mb-8 max-w-2xl text-lg leading-8 text-black/65">
                  Institutional chapters connect Subang's volunteer movement
                  with students, educators, researchers, and communities
                  through higher education institutions.
                </p>

                <div className="grid gap-3 sm:grid-cols-2">
                  {universityChapters.map((chapter, index) => (
                    <div
                      key={chapter.slug}
                      className="group rounded-xl border border-black/10 p-5 transition-colors hover:bg-[#f7f3ea]"
                    >
                      <div className="flex items-start justify-between gap-4">
                        <span className="text-xs font-bold text-[#470112]">
                          {String(index + 1).padStart(2, "0")}
                        </span>

                        <ArrowUpRight
                          size={18}
                          strokeWidth={1.7}
                          className="text-black/30 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                        />
                      </div>

                      <p className="mt-8 font-semibold leading-6 text-[#1d1d1b]">
                        {chapter.name}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Network growth */}
        <section className="border-b border-black/10 bg-[#f7f3ea]">
          <div className="mx-auto max-w-7xl px-6 py-20 md:px-10 md:py-24">
            <div className="grid gap-12 md:grid-cols-[0.8fr_1.2fr] md:items-start">
              <div>
                <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#470112]">
                  07 / Growing the network
                </p>

                <h2 className="mt-5 text-4xl font-semibold tracking-tight text-[#1d1d1b] md:text-5xl">
                  Local chapters, shared direction.
                </h2>
              </div>

              <div className="space-y-6">
                <p className="text-lg leading-8 text-black/65">
                  Every chapter contributes to the same broader mission while
                  responding to the realities of its own community, province,
                  city, municipality, or institution.
                </p>

                <p className="text-lg leading-8 text-black/65">
                  As Subang grows, the network can provide a stronger structure
                  for volunteers to organize locally, collaborate across
                  locations, and bring community experience into national
                  conversations.
                </p>

                <Link
                  href="/connect"
                  className="inline-flex items-center gap-2 font-semibold text-[#470112] transition-colors hover:text-[#ffb401]"
                >
                  Connect with Subang
                  <ArrowRight size={18} />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-[#470112] text-white">
          <div className="mx-auto max-w-7xl px-6 py-20 md:px-10 md:py-24">
            <div className="flex flex-col gap-10 md:flex-row md:items-end md:justify-between">
              <div className="max-w-3xl">
                <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#ffb401]">
                  08 / Be part of the network
                </p>

                <h2 className="mt-5 text-4xl font-semibold tracking-tight md:text-6xl">
                  Live. Create. Inspire.
                </h2>

                <p className="mt-6 max-w-2xl text-lg leading-8 text-white/70">
                  Whether through a chapter, a community initiative, a school,
                  or individual volunteer service, there is a place for people
                  who want to turn shared purpose into action.
                </p>
              </div>

              <Link
                href="/volunteer"
                className="inline-flex shrink-0 items-center justify-center gap-2 rounded-full bg-[#ffb401] px-7 py-4 font-bold text-[#470112] transition-transform hover:-translate-y-0.5"
              >
                Become a Volunteer
                <ArrowRight size={18} />
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
