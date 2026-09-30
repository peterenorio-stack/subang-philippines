import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Header, Footer, PageIntro } from "../components";

export const metadata: Metadata = {
  title: "Departments",
  description:
    "Explore the five departments of Subang Philippines and the areas of expertise that support its youth-led volunteer work.",
  alternates: {
    canonical: "/departments",
  },
  openGraph: {
    title: "Departments | Subang Philippines",
    description:
      "Explore the five departments of Subang Philippines and the areas of expertise that support its youth-led volunteer work.",
    url: "/departments",
    type: "website",
  },
};

const departments = [
  {
    name: "Community Affairs",
    image: "/assets/logo/department-community-affairs.png",
    text: "Connecting Subang with communities, volunteers, institutions, and partners to turn shared needs and ideas into meaningful community action.",
  },
  {
    name: "Environmental Affairs",
    image: "/assets/logo/department-environmental-affairs.png",
    text: "Advancing environmental sustainability through restoration, biodiversity protection, climate action, environmental awareness, and community stewardship.",
  },
  {
    name: "Science and Technology",
    image: "/assets/logo/department-science-and-technology.png",
    text: "Bringing science, technology, innovation, and practical knowledge into community development and volunteer-led solutions.",
  },
  {
    name: "Agriculture and Food Systems",
    image: "/assets/logo/department-agriculture-and-food-systems.png",
    text: "Strengthening food security and sustainable agriculture through practical food-production, farming, composting, and community-based approaches.",
  },
  {
    name: "Education",
    image: "/assets/logo/department-education.png",
    text: "Building people and communities through education, leadership development, training, workshops, capacity building, and shared learning.",
  },
];

export default function DepartmentsPage() {
  return (
    <main>
      <Header />

      <PageIntro
        eyebrow="Team / Departments"
        title="Five departments. One movement."
        text="Subang's work is organized through five departments that bring together different areas of expertise, action, and community engagement toward a shared mission."
      />

      <section className="bg-white py-20 md:py-28">
        <div className="container-wide">
          <div className="grid gap-px bg-maroon/10 md:grid-cols-2">
            {departments.map((department, index) => (
              <article
                key={department.name}
                className={`group bg-white p-7 transition-colors hover:bg-cream md:p-10 ${
                  index === departments.length - 1
                    ? "md:col-span-2 md:mx-auto md:w-1/2"
                    : ""
                }`}
              >
                <div className="flex min-h-[180px] items-center justify-center overflow-hidden">
                  <img
                    src={department.image}
                    alt={`${department.name} department logo`}
                    className="h-auto w-full max-w-[560px] object-contain transition duration-500 group-hover:scale-[1.02]"
                  />
                </div>

                <div className="mt-8 border-t border-maroon/10 pt-6">
                  <p className="eyebrow text-green">
                    Department {String(index + 1).padStart(2, "0")}
                  </p>

                  <h2 className="display mt-3 text-3xl text-maroon md:text-4xl">
                    {department.name}
                  </h2>

                  <p className="mt-4 max-w-2xl leading-7 text-ink/65">
                    {department.text}
                  </p>

                  <Link
                    href="/connect"
                    className="mt-6 inline-flex items-center gap-2 font-extrabold text-blue"
                  >
                    Connect with Subang
                    <ArrowUpRight size={16} />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-maroon py-20 text-white md:py-24">
        <div className="container-wide grid gap-10 md:grid-cols-2 md:items-end">
          <div>
            <p className="eyebrow text-gold">How the pieces come together</p>

            <h2 className="display mt-5 text-5xl md:text-6xl">
              Different expertise.
              <br />
              Shared purpose.
            </h2>
          </div>

          <div>
            <p className="text-lg leading-8 text-white/70">
              The departments provide an organizational structure for
              Subang's work. They work alongside volunteers, chapters,
              communities, institutions, and partners across different
              initiatives and areas of community action.
            </p>

            <Link
              href="/leadership"
              className="mt-8 inline-flex items-center gap-2 font-extrabold text-gold"
            >
              Meet the leadership
              <ArrowUpRight size={17} />
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
