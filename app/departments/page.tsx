import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { Header, Footer } from "../components";

export const metadata: Metadata = {
  title: "Our Departments",
  description:
    "Explore the five departments of Subang Philippines: Community Affairs, Environmental Affairs, Science and Technology, Agriculture and Food Systems, and Education.",
  alternates: {
    canonical: "/departments",
  },
  openGraph: {
    title: "Our Departments | Subang Philippines",
    description:
      "Meet the five departments organizing Subang Philippines' work across community development, environmental sustainability, science and technology, food systems, and education.",
    url: "/departments",
    type: "website",
  },
};

const departments = [
  {
    number: "01",
    name: "Community Affairs",
    image: "/assets/logo/department-community-affairs.png",
    description:
      "Works with communities and volunteers to support inclusive community development, civic participation, local action, and initiatives that respond to community needs.",
    focus: [
      "Community development",
      "Volunteer mobilization",
      "Civic participation",
      "Community partnerships",
    ],
  },
  {
    number: "02",
    name: "Environmental Affairs",
    image: "/assets/logo/department-environmental-affairs.png",
    description:
      "Leads environmental initiatives that promote ecosystem restoration, biodiversity protection, environmental awareness, and community-based sustainability.",
    focus: [
      "Environmental sustainability",
      "Ecosystem restoration",
      "Biodiversity",
      "Climate action",
    ],
  },
  {
    number: "03",
    name: "Science and Technology",
    image: "/assets/logo/department-science-and-technology.png",
    description:
      "Connects science, technology, innovation, and practical solutions with community development and volunteer action.",
    focus: [
      "Science and technology",
      "Innovation",
      "Applied solutions",
      "Technology for communities",
    ],
  },
  {
    number: "04",
    name: "Agriculture and Food Systems",
    image: "/assets/logo/department-agriculture-and-food-systems.png",
    description:
      "Advances practical approaches to agriculture, food production, sustainable food systems, and community-based solutions for food security.",
    focus: [
      "Food security",
      "Sustainable agriculture",
      "Food systems",
      "Community production",
    ],
  },
  {
    number: "05",
    name: "Education",
    image: "/assets/logo/department-education.png",
    description:
      "Creates learning opportunities that build knowledge, leadership, skills, and capacity among young people, volunteers, and communities.",
    focus: [
      "Education",
      "Capacity building",
      "Leadership development",
      "Community learning",
    ],
  },
];

export default function DepartmentsPage() {
  return (
    <>
      <Header />

      <main>
        {/* HERO */}
        <section className="bg-maroon py-24 text-white md:py-32">
          <div className="container-wide">
            <p className="eyebrow text-gold">03 / Our departments</p>

            <div className="mt-6 max-w-5xl">
              <h1 className="display text-5xl leading-[0.95] md:text-7xl lg:text-8xl">
                Five departments.
                <br />
                One shared mission.
              </h1>
            </div>

            <div className="mt-10 max-w-2xl">
              <p className="text-lg leading-8 text-white/75 md:text-xl">
                Subang Philippines organizes its work through five departments
                that bring together people, expertise, and volunteer action
                across key areas of community development.
              </p>
            </div>
          </div>
        </section>

        {/* INTRO */}
        <section className="bg-cream py-20 md:py-24">
          <div className="container-wide">
            <div className="grid gap-10 md:grid-cols-[0.8fr_1.2fr] md:items-start">
              <div>
                <p className="eyebrow text-green">How we are organized</p>
                <h2 className="display mt-5 text-4xl leading-tight text-maroon md:text-5xl">
                  Different areas of work, connected by one purpose.
                </h2>
              </div>

              <div className="max-w-2xl text-lg leading-8 text-ink/70">
                <p>
                  Each department contributes a distinct area of expertise to
                  Subang&apos;s broader work in sustainable and resilient
                  communities.
                </p>

                <p className="mt-6">
                  Together, they help translate volunteerism, knowledge, and
                  community participation into practical initiatives that
                  respond to local and emerging challenges.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* DEPARTMENTS */}
        <section className="bg-white py-20 md:py-28">
          <div className="container-wide">
            <div className="grid gap-6 md:grid-cols-2">
              {departments.map((department, index) => (
                <article
                  key={department.name}
                  className={`group border border-maroon/10 bg-cream/40 p-6 transition duration-300 hover:border-maroon/20 hover:shadow-sm md:p-8 ${
                    index === departments.length - 1
                      ? "md:col-span-2 md:mx-auto md:max-w-2xl"
                      : ""
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span className="eyebrow text-green">
                      {department.number}
                    </span>

                    <ArrowUpRight
                      size={20}
                      strokeWidth={1.5}
                      className="text-maroon/40 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                    />
                  </div>

                  <div className="mt-6 overflow-hidden bg-white">
                    <div className="aspect-[8/5] w-full">
                      <img
                        src={department.image}
                        alt={`Subang Philippines ${department.name} department`}
                        className="h-full w-full object-contain"
                        loading={index === 0 ? "eager" : "lazy"}
                      />
                    </div>
                  </div>

                  <div className="mt-7">
                    <h2 className="display text-3xl leading-tight text-maroon md:text-4xl">
                      {department.name}
                    </h2>

                    <p className="mt-4 text-base leading-7 text-ink/70">
                      {department.description}
                    </p>
                  </div>

                  <div className="mt-7 border-t border-maroon/10 pt-6">
                    <p className="eyebrow text-green">Areas of focus</p>

                    <ul className="mt-4 grid gap-3 sm:grid-cols-2">
                      {department.focus.map((item) => (
                        <li
                          key={item}
                          className="flex items-start gap-3 text-sm leading-6 text-ink/70"
                        >
                          <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-gold" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* CONNECTION TO SUBANG */}
        <section className="bg-blue py-20 text-white md:py-24">
          <div className="container-wide">
            <div className="grid gap-10 md:grid-cols-[1fr_1fr] md:items-end">
              <div>
                <p className="eyebrow text-gold">Working across boundaries</p>

                <h2 className="display mt-5 text-4xl leading-tight md:text-5xl">
                  Departments do not work in isolation.
                </h2>
              </div>

              <div>
                <p className="text-lg leading-8 text-white/75">
                  Many of Subang&apos;s initiatives require collaboration
                  across departments, bringing together different skills,
                  perspectives, and forms of volunteer action.
                </p>

                <p className="mt-6 text-lg leading-8 text-white/75">
                  This allows environmental, agricultural, technological,
                  educational, and community approaches to work together where
                  they overlap.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-cream py-20 md:py-28">
          <div className="container-wide">
            <div className="border-t border-maroon/15 pt-10 md:flex md:items-end md:justify-between md:gap-10">
              <div className="max-w-3xl">
                <p className="eyebrow text-green">Be part of the work</p>

                <h2 className="display mt-5 text-4xl leading-tight text-maroon md:text-6xl">
                  There is a place for your skills, ideas, and time.
                </h2>

                <p className="mt-6 max-w-2xl text-lg leading-8 text-ink/65">
                  Join Subang Philippines as a volunteer and contribute to
                  initiatives that create practical value for communities.
                </p>
              </div>

              <Link
                href="/volunteer"
                className="mt-8 inline-flex shrink-0 items-center gap-3 bg-maroon px-6 py-4 text-sm font-semibold text-white transition hover:bg-maroon/90 md:mt-0"
              >
                Become a volunteer
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
