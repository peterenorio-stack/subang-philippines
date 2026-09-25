import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { Header, Footer } from "./components";
import { stories } from "./content";

const featuredStories = stories.slice(0, 3);

const focusAreas = [
  {
    number: "01",
    title: "Environmental Sustainability",
    text: "Restoring ecosystems, growing trees, propagating bamboo, protecting biodiversity, and strengthening environmental awareness.",
  },
  {
    number: "02",
    title: "Food Security & Sustainable Agriculture",
    text: "Connecting food production, agriculture, composting, and community-based initiatives with practical food-system solutions.",
  },
  {
    number: "03",
    title: "Youth Leadership & Participation",
    text: "Creating opportunities for young people to lead projects, mobilize volunteers, develop skills, and participate in communities.",
  },
  {
    number: "04",
    title: "Education & Capacity Building",
    text: "Turning knowledge into action through leadership development, environmental education, training, workshops, and community learning.",
  },
  {
    number: "05",
    title: "Climate & Disaster Resilience",
    text: "Supporting communities through climate action, environmental restoration, preparedness, and resilience-building initiatives.",
  },
  {
    number: "06",
    title: "Partnerships & Community Action",
    text: "Bringing together schools, universities, governments, communities, civil society, and volunteers around shared development goals.",
  },
];

const frameworks = [
  {
    number: "01",
    title: "Sustainable Development Goals",
    text: "Global goals that provide a shared direction for sustainable and inclusive development.",
  },
  {
    number: "02",
    title: "Ambisyon Natin 2040",
    text: "The Philippines' long-term vision of a Matatag, Maginhawa at Panatag na Buhay.",
  },
  {
    number: "03",
    title: "10 Centers of Youth Participation",
    text: "A youth participation framework connecting young people with national and community development.",
  },
];

const networkAreas = [
  "Eastern Visayas",
  "Central Visayas",
  "Negros Island Region",
  "Northern Mindanao",
];

export default function Home() {
  return (
    <main>
      <Header />

      {/* HERO + RECENT STORIES */}
      <section className="grid-lines bg-maroon text-white">
        <div className="container-wide grid gap-12 py-16 md:min-h-[700px] md:grid-cols-[1.05fr_.95fr] md:items-center md:py-20">
          <div>
            <p className="eyebrow mb-7 text-gold">
              Youth. Volunteerism. Community Action.
            </p>

            <h1 className="display max-w-4xl text-6xl leading-[0.98] md:text-8xl">
              Live.
              <br />
              <span className="text-gold">Create.</span>
              <br />
              Inspire.
            </h1>

            <p className="mt-8 max-w-xl text-lg leading-8 text-white/75">
              Subang Philippines is a youth-led volunteer organization
              committed to transforming communities into safer, equitable,
              sustainable, and resilient communities.
            </p>

            <div className="mt-10 flex flex-wrap gap-3">
              <Link
                href="/about"
                className="bg-gold px-6 py-4 font-extrabold text-maroon transition hover:bg-white"
              >
                Discover Subang{" "}
                <ArrowUpRight className="inline" size={17} />
              </Link>

              <Link
                href="/programs"
                className="border border-white/35 px-6 py-4 font-extrabold transition hover:border-white hover:bg-white/10"
              >
                Explore our work
              </Link>
            </div>
          </div>

          <div className="relative">
            <div className="relative overflow-hidden bg-blue p-7 md:p-8">
              <div className="absolute -right-20 -top-20 h-80 w-80 rounded-full border-[55px] border-gold/80" />

              <div className="relative">
                <div className="flex items-end justify-between border-b border-white/15 pb-5">
                  <div>
                    <p className="eyebrow text-gold">
                      Recent Stories
                    </p>

                    <p className="mt-2 text-sm text-white/55">
                      What Subang is doing now
                    </p>
                  </div>

                  <Link
                    href="/stories"
                    className="text-sm font-extrabold text-gold"
                  >
                    View all ↗
                  </Link>
                </div>

                <div className="divide-y divide-white/15">
                  {featuredStories.map((story, index) => (
                    <Link
                      key={story.slug}
                      href={`/stories/${story.slug}`}
                      className="group grid gap-4 py-6 sm:grid-cols-[76px_1fr]"
                    >
                      <div className="aspect-square overflow-hidden bg-white/10">
                        {story.image ? (
                          <img
                            src={story.image}
                            alt=""
                            className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                          />
                        ) : (
                          <div className="flex h-full items-center justify-center text-xs font-bold text-white/40">
                            {String(index + 1).padStart(2, "0")}
                          </div>
                        )}
                      </div>

                      <div>
                        <p className="text-[11px] font-bold uppercase tracking-[0.12em] text-gold">
                          {story.type} · {story.date}
                        </p>

                        <h2 className="mt-2 text-lg font-extrabold leading-6 text-white transition group-hover:text-gold">
                          {story.title}
                        </h2>

                        <p className="mt-2 line-clamp-2 text-sm leading-5 text-white/55">
                          {story.excerpt}
                        </p>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WHO WE ARE */}
      <section className="container-wide grid gap-12 py-24 md:grid-cols-2 md:py-32">
        <div>
          <p className="eyebrow text-green">
            01 / Who we are
          </p>

          <h2 className="display mt-5 text-5xl leading-tight text-maroon md:text-6xl">
            People who care enough to show up.
          </h2>
        </div>

        <div className="self-end text-lg leading-8 text-ink/70">
          <p>
            Subang brings together young people, volunteers, communities,
            schools, local governments, and partner institutions to turn ideas
            into practical community action.
          </p>

          <p className="mt-5">
            Our work spans environmental sustainability, climate and disaster
            resilience, youth participation, education, food security,
            community development, and volunteerism.
          </p>

          <Link
            href="/about"
            className="mt-7 inline-flex items-center gap-2 font-extrabold text-blue"
          >
            Learn our story
            <ArrowUpRight size={16} />
          </Link>
        </div>
      </section>

      {/* WHAT WE DO */}
      <section className="bg-white py-24">
        <div className="container-wide">
          <p className="eyebrow text-green">
            02 / What we do
          </p>

          <div className="mt-5 flex flex-col justify-between gap-5 md:flex-row md:items-end">
            <h2 className="display text-5xl text-maroon md:text-6xl">
              From intention
              <br />
              to community action.
            </h2>

            <Link
              href="/programs"
              className="font-extrabold text-blue"
            >
              View all programs ↗
            </Link>
          </div>

          <div className="mt-14 grid gap-px bg-maroon/15 md:grid-cols-2 lg:grid-cols-3">
            {focusAreas.map((area) => (
              <Link
                key={area.number}
                href="/programs"
                className="group bg-white p-8 transition hover:bg-cream md:p-9"
              >
                <span className="eyebrow text-green">
                  {area.number}
                </span>

                <h3 className="display mt-12 text-2xl text-maroon md:text-3xl">
                  {area.title}
                </h3>

                <p className="mt-4 leading-7 text-ink/65">
                  {area.text}
                </p>

                <span className="mt-6 inline-flex items-center gap-2 text-sm font-extrabold text-blue opacity-0 transition group-hover:opacity-100">
                  Explore
                  <ArrowUpRight size={15} />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* IMPACT */}
      <section className="bg-gold py-24">
        <div className="container-wide">
          <p className="eyebrow text-maroon/70">
            03 / Documented impact
          </p>

          <h2 className="display mt-5 max-w-4xl text-5xl text-maroon md:text-7xl">
            A movement measured by action, not just intention.
          </h2>

          <div className="mt-16 grid gap-8 border-t border-maroon/25 pt-8 sm:grid-cols-2 lg:grid-cols-4">
            <div>
              <p className="display text-5xl text-maroon">
                2023
              </p>
              <p className="mt-2 font-bold">
                Subang founded
              </p>
            </div>

            <div>
              <p className="display text-5xl text-maroon">
                300+
              </p>
              <p className="mt-2 font-bold">
                SDG-aligned initiatives
              </p>
            </div>

            <div>
              <p className="display text-5xl text-maroon">
                10,000+
              </p>
              <p className="mt-2 font-bold">
                Direct beneficiaries reached
              </p>
            </div>

            <div>
              <p className="display text-5xl text-maroon">
                50,000+
              </p>
              <p className="mt-2 font-bold">
                Indirect community reach
              </p>
            </div>
          </div>

          <div className="mt-8 flex flex-col justify-between gap-5 border-t border-maroon/15 pt-6 md:flex-row md:items-center">
            <p className="max-w-3xl text-xs leading-6 text-maroon/65">
              Figures are based on Subang's organizational and program records,
              including documented beneficiaries, participants, communities
              reached, and broader program influence. They are periodically
              updated and are not presented as independently audited national
              statistics.
            </p>

            <Link
              href="/impact"
              className="shrink-0 font-extrabold text-maroon"
            >
              Explore the impact ↗
            </Link>
          </div>
        </div>
      </section>

      {/* FRAMEWORK */}
      <section className="bg-maroon py-24 text-white">
        <div className="container-wide">
          <div className="grid gap-12 lg:grid-cols-[0.75fr_1.25fr] lg:items-end">
            <div>
              <p className="eyebrow text-gold">
                04 / Our framework
              </p>

              <h2 className="display mt-5 text-5xl md:text-6xl">
                Global goals.
                <br />
                National aspirations.
                <br />
                Youth participation.
              </h2>

              <p className="mt-6 max-w-xl text-lg leading-8 text-white/65">
                Subang connects local volunteer action with global development
                goals, the Philippines' long-term national vision, and youth
                participation priorities.
              </p>

              <Link
                href="/framework"
                className="mt-8 inline-flex items-center gap-2 font-extrabold text-gold"
              >
                Explore the framework
                <ArrowUpRight size={17} />
              </Link>
            </div>

            <div className="grid gap-3">
              {frameworks.map((framework) => (
                <div
                  key={framework.number}
                  className="grid gap-5 border border-white/15 bg-white/5 p-6 sm:grid-cols-[70px_1fr]"
                >
                  <p className="text-sm font-extrabold tracking-[0.16em] text-gold">
                    {framework.number}
                  </p>

                  <div>
                    <h3 className="display text-2xl">
                      {framework.title}
                    </h3>

                    <p className="mt-3 leading-7 text-white/60">
                      {framework.text}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FEATURED STORY */}
      {featuredStories[0] && (
        <section className="container-wide py-24 md:py-32">
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div>
              <p className="eyebrow text-green">
                05 / From the field
              </p>

              <h2 className="display mt-5 text-5xl text-maroon md:text-6xl">
                The work behind the work.
              </h2>
            </div>

            <Link
              href="/stories"
              className="font-extrabold text-blue"
            >
              See all stories ↗
            </Link>
          </div>

          <div className="mt-12 grid overflow-hidden bg-cream lg:grid-cols-[1.15fr_0.85fr]">
            <div className="aspect-[16/10] bg-maroon lg:aspect-auto">
              {featuredStories[0].image ? (
                <img
                  src={featuredStories[0].image}
                  alt={featuredStories[0].title}
                  className="h-full w-full object-cover"
                />
              ) : (
                <div className="flex min-h-[360px] items-center justify-center p-10 text-center">
                  <p className="display max-w-md text-4xl text-white">
                    Subang Stories & Press
                  </p>
                </div>
              )}
            </div>

            <div className="flex flex-col justify-center p-8 md:p-12 lg:p-14">
              <p className="eyebrow text-green">
                {featuredStories[0].type}
              </p>

              <p className="mt-5 text-xs font-bold uppercase tracking-[0.12em] text-green">
                {featuredStories[0].date}
              </p>

              <h3 className="display mt-4 text-3xl text-maroon md:text-4xl">
                {featuredStories[0].title}
              </h3>

              <p className="mt-5 leading-7 text-ink/65">
                {featuredStories[0].excerpt}
              </p>

              <Link
                href={`/stories/${featuredStories[0].slug}`}
                className="mt-8 inline-flex items-center gap-2 font-extrabold text-blue"
              >
                Read the story
                <ArrowUpRight size={17} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* NETWORK */}
      <section className="bg-cream py-24">
        <div className="container-wide">
          <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
            <div>
              <p className="eyebrow text-green">
                06 / Growing network
              </p>

              <h2 className="display mt-5 text-5xl text-maroon md:text-6xl">
                From local action to a growing network.
              </h2>
            </div>

            <div>
              <p className="text-lg leading-8 text-ink/65">
                Subang connects university communities, local and provincial
                chapters, volunteers, and partner institutions across different
                parts of the Philippines.
              </p>

              <div className="mt-8 grid gap-3 sm:grid-cols-2">
                {networkAreas.map((area) => (
                  <div
                    key={area}
                    className="border border-maroon/10 bg-white px-5 py-4 font-extrabold text-maroon"
                  >
                    {area}
                  </div>
                ))}
              </div>

              <Link
                href="/leadership"
                className="mt-8 inline-flex items-center gap-2 font-extrabold text-blue"
              >
                Explore the leadership network
                <ArrowUpRight size={17} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* VOLUNTEERISM */}
      <section className="container-wide py-24 md:py-32">
        <div className="max-w-5xl">
          <p className="eyebrow text-green">
            07 / Volunteerism
          </p>

          <h2 className="display mt-5 text-5xl text-maroon md:text-7xl">
            Development does not happen only through institutions.
          </h2>

          <p className="mt-8 max-w-3xl text-xl leading-9 text-ink/65">
            It also happens when people choose to show up, contribute what they
            know, work with others, and keep building even when there is no
            promise of payment or recognition.
          </p>

          <div className="mt-10 flex flex-wrap gap-3">
            <Link
              href="/connect"
              className="inline-flex items-center gap-2 bg-maroon px-6 py-4 font-extrabold text-white transition hover:bg-maroon/90"
            >
              Join the work
              <ArrowRight size={18} />
            </Link>

            <Link
              href="/impact"
              className="inline-flex items-center gap-2 border border-maroon/15 px-6 py-4 font-extrabold text-maroon transition hover:bg-cream"
            >
              See the impact
              <ArrowUpRight size={17} />
            </Link>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="bg-blue py-24 text-white">
        <div className="container-wide grid gap-10 md:grid-cols-2">
          <div>
            <p className="eyebrow text-gold">
              08 / Join the movement
            </p>

            <h2 className="display mt-5 text-5xl md:text-7xl">
              There is work to do. Let's do it together.
            </h2>
          </div>

          <div className="self-end">
            <p className="text-lg leading-8 text-white/75">
              Whether you are a young leader, volunteer, institution, local
              government, community, or potential partner, there is a place for
              meaningful collaboration.
            </p>

            <Link
              href="/connect"
              className="mt-8 inline-flex items-center gap-3 bg-gold px-6 py-4 font-extrabold text-maroon transition hover:bg-white"
            >
              Connect with Subang
              <ArrowUpRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
