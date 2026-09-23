import { Header, Footer, PageIntro } from "../components";
import { officers } from "../content";

const sections = [
  "Executive Leadership",
  "Advisers",
  "National Vice Presidents",
  "National Directors",
  "Provincial Chapter Directors",
  "University & College Chapter Executive Presidents"
] as const;

export default function Leadership() {
  return (
    <main>
      <Header />

      <PageIntro
        eyebrow="Leadership & Network"
        title="People carrying the work forward."
        text="Subang's developing network brings together national leadership, advisers, chapter leaders, provincial leaders, volunteers, and institutional partners."
      />

      <section className="container-wide py-24">
        {sections.map((section) => {
          const people = officers.filter((officer) => officer.section === section);

          if (!people.length) return null;

          const isExecutive = section === "Executive Leadership";
          const isAdvisers = section === "Advisers";

          return (
            <div key={section} className="mb-24 last:mb-0">
              <div className="mb-10">
                <p className="eyebrow text-green">{section}</p>
              </div>

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
                  <article
                    key={`${officer.section}-${officer.name}-${officer.location ?? ""}`}
                    className={`overflow-hidden bg-white ${
                      isExecutive ? "md:flex md:min-h-[360px] md:flex-col" : ""
                    }`}
                  >
                    {officer.image ? (
                      <div
                        className={
                          isExecutive
                            ? "aspect-[4/3] bg-cream md:aspect-[16/9]"
                            : "aspect-square bg-cream"
                        }
                      >
                        <img
                          src={officer.image}
                          alt={officer.name}
                          className="h-full w-full object-cover"
                        />
                      </div>
                    ) : (
                      <div className="flex aspect-square items-center justify-center bg-cream p-8 text-center">
                        <span className="eyebrow text-maroon">
                          Position
                          <br />
                          Vacant
                        </span>
                      </div>
                    )}

                    <div className="p-6">
                      {officer.location && (
                        <p className="mb-2 text-xs font-bold uppercase tracking-[0.12em] text-green">
                          {officer.location}
                        </p>
                      )}

                      <h2 className="font-extrabold text-maroon">
                        {officer.name}
                      </h2>

                      <p className="mt-2 text-sm leading-6 text-ink/60">
                        {officer.role}
                      </p>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          );
        })}
      </section>

      <section className="bg-cream py-24">
        <div className="container-wide">
          <p className="eyebrow text-green">Network</p>

          <h2 className="display mt-5 text-5xl text-maroon">
            A developing presence across universities, provinces, and
            communities.
          </h2>

          <p className="mt-6 max-w-3xl text-lg leading-8 text-ink/70">
            The network includes academic communities and local or provincial
            chapters across Eastern and Central Visayas, the Negros Island
            Region, Northern Mindanao, and other partner communities.
          </p>
        </div>
      </section>

      <Footer />
    </main>
  );
}
