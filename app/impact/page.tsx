import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Header, Footer, PageIntro } from "../components";

const impactFigures = [
  {
    number: "10,000+",
    label: "Direct beneficiaries reached",
    note: "Across documented Subang programs and initiatives",
  },
  {
    number: "50,000+",
    label: "Indirect community reach",
    note: "Across communities influenced by Subang's broader work",
  },
  {
    number: "300+",
    label: "SDG-aligned initiatives",
    note: "Documented across Subang's broader body of work",
  },
  {
    number: "3+",
    label: "Years since Subang was founded",
    note: "Founded March 20, 2023",
  },
];

const milestones = [
  {
    year: "2023",
    title: "Subang Philippines founded",
    text: "Subang was established on March 20, 2023 as a youth-led volunteer initiative focused on meaningful community action.",
  },
  {
    year: "2024",
    title: "Volunteer network and programs expand",
    text: "Subang developed environmental, agricultural, educational, volunteer, and community initiatives while strengthening its partnerships and chapter network.",
  },
  {
    year: "2024",
    title: "Regional youth volunteer recognition",
    text: "Subang's broader volunteer work was represented in the 2024 Search for Outstanding Volunteers, where its founder was recognized as an Outstanding Youth Volunteer of Central Visayas.",
  },
  {
    year: "2025",
    title: "Environmental initiatives gain wider recognition",
    text: "Subang Environmental Initiatives received recognition through the Philippine Resilience Awards 2025, highlighting work connected to environmental action and community resilience.",
  },
  {
    year: "2026",
    title: "Environmental and resilience work continues",
    text: "Subang continued initiatives in bamboo propagation, climate and disaster resilience, youth participation, agriculture, food security, and education.",
  },
];

const impactAreas = [
  {
    number: "01",
    title: "Environmental Action",
    text: "Bamboo propagation, native tree growing, riparian rehabilitation, coastal action, biodiversity work, and environmental education form a continuing part of Subang's community initiatives.",
  },
  {
    number: "02",
    title: "Food Security",
    text: "Agricultural initiatives such as Paglaum Farm, food production, composting, aquaculture preparation, and agricultural learning connect volunteerism with practical food-system solutions.",
  },
  {
    number: "03",
    title: "Youth Participation",
    text: "Young people participate as volunteers, project leaders, trainers, organizers, communicators, and community partners across different areas of development.",
  },
  {
    number: "04",
    title: "Education & Skills",
    text: "Workshops, training activities, environmental education, journalism, filmmaking, leadership development, and knowledge-sharing create opportunities for practical learning.",
  },
  {
    number: "05",
    title: "Community Resilience",
    text: "Climate action, disaster preparedness, environmental restoration, and community-based resilience initiatives connect local volunteer action with longer-term risk reduction.",
  },
  {
    number: "06",
    title: "Partnerships",
    text: "Subang works with schools, universities, government offices, local communities, civil society organizations, and other partners to expand the reach and capacity of its initiatives.",
  },
];

const networkAreas = [
  "Eastern Visayas",
  "Central Visayas",
  "Negros Island Region",
  "Northern Mindanao",
];

export default function Impact() {
  return (
    <main>
      <Header />

      <PageIntro
        eyebrow="Impact"
        title="Document the work. Respect the evidence. Keep improving."
        text="Subang's impact story combines measurable program records with milestones, partnerships, and the lived contribution of volunteers."
      />

      {/* IMPACT FIGURES */}
      <section className="bg-gold py-16 md:py-20">
        <div className="container-wide">
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {impactFigures.map((figure) => (
              <div
                key={figure.label}
                className="border-l-2 border-maroon/20 pl-5"
              >
                <p className="display text-5xl text-maroon md:text-6xl">
                  {figure.number}
                </p>

                <p className="mt-3 font-extrabold leading-6 text-maroon">
                  {figure.label}
                </p>

                <p className="mt-2 text-sm leading-6 text-maroon/65">
                  {figure.note}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SCALE OF IMPACT */}
      <section className="container-wide py-16 md:py-24">
        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <p className="eyebrow text-green">
              Understanding Impact
            </p>

            <h2 className="display mt-4 text-4xl text-maroon md:text-5xl">
              More than 60,000 people reached through direct and indirect
              impact.
            </h2>
          </div>

          <div className="max-w-3xl">
            <p className="text-lg leading-8 text-ink/70">
              Through more than 300 SDG-aligned initiatives, Subang's work has
              reached more than 10,000 direct beneficiaries and influenced more
              than 50,000 people indirectly across communities connected to its
              programs, partnerships, and volunteer initiatives.
            </p>

            <p className="mt-6 text-lg leading-8 text-ink/70">
              These figures represent Subang's organizational and program
              records accumulated across its developing body of work. They are
              presented as impact estimates based on available program
              documentation rather than independently audited national
              statistics.
            </p>
          </div>
        </div>
      </section>

      {/* IMPACT AREAS */}
      <section className="bg-cream py-20 md:py-28">
        <div className="container-wide">
          <div className="max-w-3xl">
            <p className="eyebrow text-green">
              Where Change Happens
            </p>

            <h2 className="display mt-4 text-4xl text-maroon md:text-5xl">
              From volunteer action to community outcomes.
            </h2>

            <p className="mt-6 text-lg leading-8 text-ink/65">
              Subang's initiatives operate across interconnected areas of
              development. The work is documented through project records,
              stories, partnerships, recognitions, and continuing community
              activities.
            </p>
          </div>

          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {impactAreas.map((area) => (
              <article
                key={area.number}
                className="border border-maroon/10 bg-white p-7 transition hover:-translate-y-1 hover:shadow-md md:p-8"
              >
                <p className="text-sm font-extrabold tracking-[0.16em] text-gold">
                  {area.number}
                </p>

                <h3 className="display mt-4 text-2xl text-maroon">
                  {area.title}
                </h3>

                <p className="mt-4 leading-7 text-ink/65">
                  {area.text}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* MILESTONES */}
      <section className="container-wide py-20 md:py-28">
        <div className="grid gap-12 lg:grid-cols-[0.75fr_1.25fr]">
          <div>
            <p className="eyebrow text-green">
              Documented Milestones
            </p>

            <h2 className="display mt-4 text-4xl text-maroon md:text-5xl">
              A growing body of work.
            </h2>

            <p className="mt-6 max-w-xl leading-7 text-ink/65">
              Milestones provide context for how Subang has developed its
              programs, partnerships, volunteer network, and community presence
              since 2023.
            </p>
          </div>

          <div className="space-y-0">
            {milestones.map((milestone, index) => (
              <article
                key={`${milestone.year}-${milestone.title}`}
                className={`grid gap-5 py-7 md:grid-cols-[100px_1fr] ${
                  index !== 0 ? "border-t border-maroon/10" : ""
                }`}
              >
                <p className="text-sm font-extrabold uppercase tracking-[0.14em] text-green">
                  {milestone.year}
                </p>

                <div>
                  <h3 className="display text-2xl text-maroon">
                    {milestone.title}
                  </h3>

                  <p className="mt-3 leading-7 text-ink/65">
                    {milestone.text}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* NETWORK */}
      <section className="bg-maroon text-white">
        <div className="container-wide py-20 md:py-28">
          <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
            <div>
              <p className="eyebrow text-gold">
                Developing Network
              </p>

              <h2 className="display mt-4 text-4xl md:text-5xl">
                From local action to a growing network.
              </h2>
            </div>

            <div>
              <p className="text-lg leading-8 text-white/70">
                Subang's developing network connects university communities,
                local and provincial chapters, volunteers, and partner
                institutions across different parts of the Philippines.
              </p>

              <div className="mt-8 grid gap-3 sm:grid-cols-2">
                {networkAreas.map((area) => (
                  <div
                    key={area}
                    className="border border-white/15 bg-white/5 px-5 py-4 font-extrabold"
                  >
                    {area}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* EVIDENCE */}
      <section className="container-wide py-20 md:py-28">
        <div className="grid gap-10 lg:grid-cols-[1fr_1fr]">
          <div>
            <p className="eyebrow text-green">
              Evidence Through Stories
            </p>

            <h2 className="display mt-4 text-4xl text-maroon md:text-5xl">
              The archive is part of the impact record.
            </h2>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-ink/65">
              Every documented story adds context to the numbers. Project
              records show what happened, who participated, which partners were
              involved, and how initiatives connect with Subang's development
              framework.
            </p>

            <Link
              href="/stories"
              className="mt-8 inline-flex items-center gap-2 font-extrabold text-blue"
            >
              Explore Stories & Press
              <ArrowUpRight size={17} />
            </Link>
          </div>

          <div className="bg-cream p-8 md:p-10">
            <p className="eyebrow text-green">
              Documentation Note
            </p>

            <h3 className="display mt-4 text-3xl text-maroon">
              Transparency matters.
            </h3>

            <p className="mt-5 leading-7 text-ink/70">
              The figures presented on this page are based on Subang's
              organizational and program records, including documented
              beneficiaries, participants, communities reached, and broader
              program influence. Direct and indirect reach may include
              individuals reached through activities, partner institutions,
              community engagements, educational activities, campaigns, and
              other documented initiatives.
            </p>

            <p className="mt-5 text-sm leading-6 text-ink/55">
              Figures are periodically updated as program records are
              consolidated and are not presented as independently audited
              national statistics.
            </p>
          </div>
        </div>
      </section>

      {/* FRAMEWORK CTA */}
      <section className="bg-cream">
        <div className="container-wide py-20 md:py-24">
          <div className="flex flex-col gap-8 border-t border-maroon/15 pt-12 md:flex-row md:items-end md:justify-between">
            <div className="max-w-3xl">
              <p className="eyebrow text-green">
                Impact + Framework
              </p>

              <h2 className="display mt-4 text-4xl text-maroon md:text-5xl">
                See how Subang's work connects to global and national
                development frameworks.
              </h2>
            </div>

            <Link
              href="/framework"
              className="inline-flex shrink-0 items-center gap-2 font-extrabold text-blue"
            >
              Explore the framework
              <ArrowUpRight size={17} />
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
