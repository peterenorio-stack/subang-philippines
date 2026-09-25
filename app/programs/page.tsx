import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Header, Footer, PageIntro } from "../components";
import { programPillars } from "../content";

const pillarConnections: Record<
  string,
  {
    focus: string;
    sdgs: string[];
  }
> = {
  "Environmental Sustainability": {
    focus:
      "Restoring ecosystems, protecting biodiversity, and helping communities respond to environmental change.",
    sdgs: ["SDG 13", "SDG 14", "SDG 15"],
  },
  "Food Security & Sustainable Agriculture": {
    focus:
      "Building practical food systems that connect sustainable production, agricultural learning, and community food security.",
    sdgs: ["SDG 2", "SDG 4", "SDG 12"],
  },
  "Waste Management & Circularity": {
    focus:
      "Turning waste into resources through composting, recovery, responsible consumption, and community-based circular practices.",
    sdgs: ["SDG 11", "SDG 12", "SDG 13"],
  },
  "Coastal & Marine Action": {
    focus:
      "Supporting healthier coastal ecosystems through cleanup activities, conservation, restoration, and environmental education.",
    sdgs: ["SDG 13", "SDG 14", "SDG 15"],
  },
  "Youth Leadership & Participation": {
    focus:
      "Creating meaningful opportunities for young people to lead projects, contribute ideas, develop skills, and participate in community life.",
    sdgs: ["SDG 4", "SDG 16", "SDG 17"],
  },
  "Education & Capacity Building": {
    focus:
      "Sharing knowledge and building practical skills through workshops, training, mentoring, awareness activities, and learning experiences.",
    sdgs: ["SDG 4", "SDG 10", "SDG 17"],
  },
  "Partnerships & Community Mobilization": {
    focus:
      "Bringing together institutions, communities, government, civil society, schools, and volunteers around shared development goals.",
    sdgs: ["SDG 16", "SDG 17"],
  },
};

export default function Programs() {
  return (
    <main>
      <Header />

      <PageIntro
        eyebrow="Programs & Initiatives"
        title="Seven connected areas of action."
        text="Community challenges rarely exist in isolation. Subang's program pillars connect environmental, social, educational, economic, and youth-development action."
      />

      {/* INTRODUCTION */}
      <section className="container-wide py-16 md:py-24">
        <div className="grid gap-10 lg:grid-cols-[1fr_1.25fr] lg:items-end">
          <div>
            <p className="eyebrow text-green">How Subang Works</p>

            <h2 className="display mt-4 text-4xl text-maroon md:text-5xl">
              Programs designed around real community needs.
            </h2>
          </div>

          <div className="max-w-2xl">
            <p className="text-lg leading-8 text-ink/65">
              Subang does not treat development challenges as separate
              problems. Environmental action can strengthen food security.
              Education can strengthen youth participation. Volunteerism can
              connect institutions and communities. Each program area creates
              opportunities for the others to reinforce one another.
            </p>
          </div>
        </div>
      </section>

      {/* PROGRAM PILLARS */}
      <section className="container-wide pb-20 md:pb-28">
        <div className="space-y-6">
          {programPillars.map((pillar) => {
            const connection = pillarConnections[pillar.title];

            return (
              <article
                key={pillar.number}
                className="group overflow-hidden border border-maroon/10 bg-white transition duration-300 hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="grid lg:grid-cols-[100px_1fr_1fr]">
                  {/* NUMBER */}
                  <div className="flex items-start bg-maroon p-7 lg:justify-center lg:p-8">
                    <p className="display text-5xl text-gold">
                      {pillar.number}
                    </p>
                  </div>

                  {/* MAIN CONTENT */}
                  <div className="p-7 md:p-9">
                    <p className="eyebrow text-green">
                      Program Pillar {pillar.number}
                    </p>

                    <h2 className="display mt-3 text-3xl text-maroon md:text-4xl">
                      {pillar.title}
                    </h2>

                    <p className="mt-5 max-w-2xl leading-7 text-ink/65">
                      {pillar.short}
                    </p>

                    {connection && (
                      <>
                        <p className="mt-5 max-w-2xl text-sm leading-6 text-ink/55">
                          {connection.focus}
                        </p>

                        <div className="mt-6 flex flex-wrap gap-2">
                          {connection.sdgs.map((sdg) => {
                            const number = sdg.replace("SDG ", "");

                            return (
                              <Link
                                key={sdg}
                                href={`/framework#sdg-${number.padStart(2, "0")}`}
                                className="border border-maroon/10 bg-cream px-3 py-2 text-xs font-extrabold text-maroon transition hover:border-maroon/30 hover:text-blue"
                              >
                                {sdg}
                              </Link>
                            );
                          })}
                        </div>
                      </>
                    )}
                  </div>

                  {/* ACTIONS */}
                  <div className="border-t border-maroon/10 bg-cream/50 p-7 md:p-9 lg:border-l lg:border-t-0">
                    <p className="eyebrow text-green">
                      Areas of Work
                    </p>

                    <ul className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-1">
                      {pillar.items.map((item) => (
                        <li
                          key={item}
                          className="flex gap-3 text-sm leading-6 text-ink/70"
                        >
                          <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-gold" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </section>

      {/* HOW THE PROGRAMS CONNECT */}
      <section className="bg-maroon text-white">
        <div className="container-wide py-20 md:py-28">
          <div className="max-w-3xl">
            <p className="eyebrow text-gold">An Integrated Approach</p>

            <h2 className="display mt-4 text-4xl md:text-6xl">
              One community challenge can require many kinds of action.
            </h2>

            <p className="mt-7 max-w-2xl text-lg leading-8 text-white/70">
              A food-security initiative can involve agriculture, education,
              environmental sustainability, technology, volunteerism, and
              partnerships. A climate initiative can involve ecosystem
              restoration, disaster resilience, youth leadership, and
              community mobilization. Subang's program pillars are designed to
              work across these connections.
            </p>
          </div>

          <div className="mt-14 grid gap-4 md:grid-cols-3">
            <div className="border border-white/15 bg-white/5 p-7">
              <p className="text-sm font-extrabold uppercase tracking-[0.16em] text-gold">
                01
              </p>

              <h3 className="display mt-4 text-2xl">
                Identify
              </h3>

              <p className="mt-3 leading-7 text-white/65">
                Understand community needs, local conditions, available
                resources, and opportunities for action.
              </p>
            </div>

            <div className="border border-white/15 bg-white/5 p-7">
              <p className="text-sm font-extrabold uppercase tracking-[0.16em] text-gold">
                02
              </p>

              <h3 className="display mt-4 text-2xl">
                Mobilize
              </h3>

              <p className="mt-3 leading-7 text-white/65">
                Bring together young people, volunteers, institutions,
                communities, and partners around a shared purpose.
              </p>
            </div>

            <div className="border border-white/15 bg-white/5 p-7">
              <p className="text-sm font-extrabold uppercase tracking-[0.16em] text-gold">
                03
              </p>

              <h3 className="display mt-4 text-2xl">
                Act
              </h3>

              <p className="mt-3 leading-7 text-white/65">
                Turn knowledge, skills, resources, and collective effort into
                practical community action.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* COLLABORATION MODEL */}
      <section className="bg-cream py-20 md:py-28">
        <div className="container-wide">
          <div className="max-w-4xl">
            <p className="eyebrow text-green">A Practical Model</p>

            <h2 className="display mt-5 text-4xl leading-tight text-maroon md:text-6xl">
              Academe → Government → Community → Youth → Civil Society →
              Volunteers
            </h2>

            <p className="mt-7 max-w-3xl text-lg leading-8 text-ink/65">
              Subang works through collaboration. Different institutions and
              communities bring different knowledge, resources, relationships,
              and capacities. Volunteers help connect these strengths and turn
              shared priorities into action.
            </p>
          </div>

          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "Academe",
                text: "Knowledge, research, education, facilities, and student participation.",
              },
              {
                title: "Government",
                text: "Public programs, local leadership, policy, services, and institutional support.",
              },
              {
                title: "Community",
                text: "Local knowledge, lived experience, priorities, and participation.",
              },
              {
                title: "Youth",
                text: "Ideas, leadership, creativity, energy, and meaningful participation.",
              },
              {
                title: "Civil Society",
                text: "Advocacy, expertise, networks, and community-based approaches.",
              },
              {
                title: "Volunteers",
                text: "Time, skills, initiative, and collective action contributed for community development.",
              },
            ].map((group) => (
              <div
                key={group.title}
                className="border border-maroon/10 bg-white p-7"
              >
                <h3 className="display text-2xl text-maroon">
                  {group.title}
                </h3>

                <p className="mt-3 leading-7 text-ink/65">
                  {group.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FRAMEWORK CTA */}
      <section className="container-wide py-20 md:py-28">
        <div className="grid gap-8 border-t border-maroon/15 pt-12 md:grid-cols-[1fr_auto] md:items-end">
          <div className="max-w-3xl">
            <p className="eyebrow text-green">
              Programs + Framework
            </p>

            <h2 className="display mt-4 text-4xl text-maroon md:text-5xl">
              See how Subang's programs connect to the SDGs and youth
              participation.
            </h2>
          </div>

          <Link
            href="/framework"
            className="inline-flex items-center gap-2 font-extrabold text-blue"
          >
            Explore the framework
            <ArrowUpRight size={17} />
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  );
}
