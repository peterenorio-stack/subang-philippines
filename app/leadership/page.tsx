import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Header, Footer, PageIntro } from "../components";
import { officers } from "../content";

const sections = [
  "Executive Leadership",
  "Advisers",
  "National Vice Presidents",
  "National Directors",
  "Provincial Chapter Directors",
  "University & College Chapter Executive Presidents",
] as const;

function OfficerCard({
  officer,
  featured = false,
}: {
  officer: (typeof officers)[number];
  featured?: boolean;
}) {
  return (
    <article
      className={`group overflow-hidden bg-white shadow-sm ring-1 ring-maroon/5 transition duration-300 hover:-translate-y-1 hover:shadow-md ${
        featured ? "md:grid md:grid-cols-[280px_1fr]" : ""
      }`}
    >
      {officer.image ? (
        <div
          className={`overflow-hidden bg-cream ${
            featured
              ? "aspect-[4/3] md:aspect-auto"
              : "aspect-square"
          }`}
        >
          <img
            src={officer.image}
            alt={officer.name}
            className="h-full w-full object-cover transition duration-500 group-hover:scale-[1.02]"
          />
        </div>
      ) : (
        <div
          className={`flex items-center justify-center bg-cream p-8 text-center ${
            featured ? "aspect-[4/3] md:aspect-auto" : "aspect-square"
          }`}
        >
          <span className="eyebrow text-maroon">
            Position
            <br />
            Vacant
          </span>
        </div>
      )}

      <div className={featured ? "p-7 md:p-9" : "p-6"}>
        {officer.location && (
          <p className="mb-2 text-xs font-bold uppercase tracking-[0.12em] text-green">
            {officer.location}
          </p>
        )}

        <h2
          className={`font-extrabold text-maroon ${
            featured ? "text-2xl md:text-3xl" : "text-lg"
          }`}
        >
          {officer.name}
        </h2>

        <p
          className={`mt-2 leading-6 text-ink/60 ${
            featured ? "text-base" : "text-sm"
          }`}
        >
          {officer.role}
        </p>

        {!officer.image && (
          <p className="mt-4 text-xs leading-5 text-ink/45">
            This leadership position is currently vacant.
          </p>
        )}
      </div>
    </article>
  );
}

export default function Leadership() {
  return (
    <main>
      <Header />

      <PageIntro
        eyebrow="Leadership & Network"
        title="People carrying the work forward."
        text="Subang's developing network brings together national leadership, advisers, chapter leaders, provincial leaders, volunteers, and institutional partners."
      />

      {/* LEADERSHIP PRINCIPLE */}
      <section className="container-wide py-16 md:py-24">
        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <p className="eyebrow text-green">
              Leadership & Service
            </p>

            <h2 className="display mt-4 text-4xl text-maroon md:text-5xl">
              Leadership is a responsibility to the mission.
            </h2>
          </div>

          <div className="max-w-3xl">
            <p className="text-lg leading-8 text-ink/70">
              Subang is built around volunteer leadership. Officers and chapter
              leaders help translate the organization's mission into programs,
              partnerships, community action, and opportunities for young
              people to participate.
            </p>

            <p className="mt-6 text-lg leading-8 text-ink/70">
              Its developing leadership network connects national direction
              with regional, provincial, university, and community-level
              action.
            </p>
          </div>
        </div>
      </section>

      {/* LEADERSHIP DIRECTORY */}
      <section className="bg-cream py-20 md:py-28">
        <div className="container-wide">
          {sections.map((section, sectionIndex) => {
            const people = officers.filter(
              (officer) => officer.section === section
            );

            if (!people.length) return null;

            const isExecutive = section === "Executive Leadership";
            const isAdvisers = section === "Advisers";

            return (
              <div
                key={section}
                className={
                  sectionIndex !== 0
                    ? "mt-20 border-t border-maroon/10 pt-20 md:mt-28 md:pt-28"
                    : ""
                }
              >
                {/* SECTION HEADER */}
                <div className="mb-10 max-w-3xl">
                  <p className="eyebrow text-green">
                    {section}
                  </p>

                  {isExecutive && (
                    <p className="mt-5 text-lg leading-8 text-ink/65">
                      The national executive leadership provides organizational
                      direction and helps coordinate Subang's programs,
                      partnerships, chapters, and volunteer network.
                    </p>
                  )}

                  {isAdvisers && (
                    <p className="mt-5 text-lg leading-8 text-ink/65">
                      National advisers provide guidance, institutional
                      perspective, and support as Subang continues to develop
                      its programs and organizational systems.
                    </p>
                  )}
                </div>

                {/* OFFICERS */}
                <div
                  className={
                    isExecutive
                      ? "grid gap-8 md:grid-cols-2"
                      : isAdvisers
                      ? "grid gap-6 md:grid-cols-2"
                      : "grid gap-7 sm:grid-cols-2 lg:grid-cols-3"
                  }
                >
                  {people.map((officer) => (
                    <OfficerCard
                      key={`${officer.section}-${officer.name}-${officer.location ?? ""}`}
                      officer={officer}
                      featured={isExecutive}
                    />
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* ORGANIZATIONAL MODEL */}
      <section className="container-wide py-20 md:py-28">
        <div className="grid gap-12 lg:grid-cols-[0.75fr_1.25fr] lg:items-center">
          <div>
            <p className="eyebrow text-green">
              Organizational Model
            </p>

            <h2 className="display mt-4 text-4xl text-maroon md:text-5xl">
              One mission, different levels of action.
            </h2>

            <p className="mt-6 leading-7 text-ink/65">
              Subang connects national leadership with regional coordination,
              provincial chapters, university and college chapters, volunteers,
              and partner communities.
            </p>
          </div>

          <div className="grid gap-3 sm:grid-cols-2">
            {[
              "National Leadership",
              "Regional Coordination",
              "Provincial Chapters",
              "University & College Chapters",
              "Community Volunteers",
              "Partner Institutions",
            ].map((item, index) => (
              <div
                key={item}
                className="border border-maroon/10 bg-cream p-6"
              >
                <p className="text-xs font-extrabold tracking-[0.14em] text-gold">
                  0{index + 1}
                </p>

                <p className="mt-3 font-extrabold text-maroon">
                  {item}
                </p>
              </div>
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
                A growing presence across universities, provinces, and
                communities.
              </h2>
            </div>

            <div>
              <p className="text-lg leading-8 text-white/70">
                The network includes academic communities and local or
                provincial chapters across Eastern and Central Visayas, the
                Negros Island Region, Northern Mindanao, and other partner
                communities.
              </p>

              <div className="mt-8 grid gap-3 sm:grid-cols-2">
                {[
                  "Eastern Visayas",
                  "Central Visayas",
                  "Negros Island Region",
                  "Northern Mindanao",
                ].map((area) => (
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

      {/* TRANSPARENCY */}
      <section className="container-wide py-16 md:py-20">
        <div className="border border-dashed border-maroon/15 bg-cream p-7 md:p-9">
          <p className="eyebrow text-green">
            Organizational Transparency
          </p>

          <h2 className="display mt-4 text-3xl text-maroon md:text-4xl">
            A leadership network that continues to grow.
          </h2>

          <p className="mt-5 max-w-3xl leading-7 text-ink/65">
            Subang's leadership structure continues to develop alongside its
            expanding network of chapters, volunteers, and partners. Vacant
            positions are intentionally shown where applicable rather than
            being filled with placeholder names.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-cream">
        <div className="container-wide py-20 md:py-24">
          <div className="flex flex-col gap-8 border-t border-maroon/15 pt-12 md:flex-row md:items-end md:justify-between">
            <div className="max-w-3xl">
              <p className="eyebrow text-green">
                Get Involved
              </p>

              <h2 className="display mt-4 text-4xl text-maroon md:text-5xl">
                Leadership starts with showing up.
              </h2>

              <p className="mt-5 text-lg leading-8 text-ink/65">
                Whether through volunteering, partnerships, chapter
                participation, or community action, there is a place for people
                who want to contribute to meaningful development work.
              </p>
            </div>

            <Link
              href="/connect"
              className="inline-flex shrink-0 items-center gap-2 font-extrabold text-blue"
            >
              Connect with Subang
              <ArrowUpRight size={17} />
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
