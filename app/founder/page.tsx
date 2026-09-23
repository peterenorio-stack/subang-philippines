import { Header, Footer, PageIntro } from "../components";

export default function Founder() {
  return (
    <main>
      <Header />

      <PageIntro
        eyebrow="Founder’s Corner"
        title="The person behind the movement."
        text="A personal space reflecting on the journey, principles, and continuing work behind Subang Philippines."
      />

      <section className="container-wide py-24">
        <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
          <div className="overflow-hidden bg-cream">
            <img
              src="/assets/team/peter-john-enorio.jpg"
              alt="Peter John C. Enorio"
              className="h-full w-full object-cover"
            />
          </div>

          <div>
            <p className="eyebrow text-green">Peter John C. Enorio</p>

            <h2 className="display mt-5 text-4xl text-maroon md:text-5xl">
              Founder & National Executive President
            </h2>

            <p className="mt-5 text-lg font-semibold text-ink/70">
              Community Development Specialist • Volunteer Leader • Youth
              Advocate
            </p>

            <div className="mt-8 space-y-5 text-base leading-8 text-ink/70">
              <p>
                Peter John C. Enorio is a community development specialist,
                award-winning volunteer leader, and youth advocate. He earned
                his Bachelor of Science in Agricultural and Biosystems
                Engineering degree from Cebu Technological University – Barili
                Campus, where he also served as President of the Supreme
                Student Government.
              </p>

              <p>
                He is the Founding President of Subang Philippines, a youth-led
                movement advancing environmental protection, community
                innovation, and sustainable development through volunteerism
                and meaningful youth participation.
              </p>

              <p>
                With over 10 years of service in grassroots leadership and
                public service, he has spearheaded more than 300 SDG-aligned
                initiatives, including ecosystem restoration, food security
                initiatives, and climate education programs.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-cream py-24">
        <div className="container-wide">
          <p className="eyebrow text-green">A Journey of Service</p>

          <h2 className="display mt-5 text-4xl text-maroon md:text-5xl">
            A decade of learning, leading, and serving.
          </h2>

          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-5">
            <article className="bg-white p-6">
              <p className="text-3xl font-extrabold text-gold">2013</p>
              <h3 className="mt-4 text-xl font-extrabold text-maroon">
                Where It Began
              </h3>
              <p className="mt-3 text-sm leading-7 text-ink/65">
                A journey of volunteerism and grassroots service began,
                growing through years of youth leadership and community work.
              </p>
            </article>

            <article className="bg-white p-6">
              <p className="text-3xl font-extrabold text-gold">2023</p>
              <h3 className="mt-4 text-xl font-extrabold text-maroon">
                Subang Philippines
              </h3>
              <p className="mt-3 text-sm leading-7 text-ink/65">
                Subang Philippines was founded as a youth-led volunteer
                movement focused on turning ideas, skills, and volunteer energy
                into community action.
              </p>
            </article>

            <article className="bg-white p-6">
              <p className="text-3xl font-extrabold text-gold">2024</p>
              <h3 className="mt-4 text-xl font-extrabold text-maroon">
                Outstanding Youth Volunteer
              </h3>
              <p className="mt-3 text-sm leading-7 text-ink/65">
                Named the 2024 Outstanding Youth Volunteer of Central Visayas
                in the Search for Outstanding Volunteers.
              </p>
            </article>

            <article className="bg-white p-6">
              <p className="text-3xl font-extrabold text-gold">2025</p>
              <h3 className="mt-4 text-xl font-extrabold text-maroon">
                Philippine Resilience Awards
              </h3>
              <p className="mt-3 text-sm leading-7 text-ink/65">
                Recognized as a Climate and Disaster Resilience Champion
                through the Philippine Resilience Awards 2025.
              </p>
            </article>

            <article className="bg-white p-6">
              <p className="text-3xl font-extrabold text-gold">2026</p>
              <h3 className="mt-4 text-xl font-extrabold text-maroon">
                BAGANI Fellowship
              </h3>
              <p className="mt-3 text-sm leading-7 text-ink/65">
                Selected among the Top 50 fellows of the Development Academy of
                the Philippines BAGANI Fellowship Program under the SIBOL
                Cohort.
              </p>
            </article>
          </div>
        </div>
      </section>

      <section className="container-wide py-24">
        <div className="grid gap-12 lg:grid-cols-[1fr_0.8fr]">
          <div>
            <p className="eyebrow text-green">Why I Started Subang</p>

            <h2 className="display mt-5 text-4xl text-maroon md:text-5xl">
              From individual service to collective action.
            </h2>

            <div className="mt-8 space-y-6 text-lg leading-8 text-ink/70">
              <p>
                Subang grew from a simple idea: people who want to help their
                communities should have a space where they can contribute,
                collaborate, learn, and create something meaningful together.
              </p>

              <p>
                Young people have energy, creativity, technical skills, lived
                experience, and a strong desire to participate. The challenge
                is creating meaningful pathways for those strengths to become
                practical community action.
              </p>

              <p>
                Subang was created to help build those pathways. Its work
                continues to connect volunteerism with environmental
                sustainability, food security, resilience, education, youth
                participation, and community development.
              </p>
            </div>
          </div>

          <div className="bg-maroon p-8 text-white md:p-10">
            <p className="eyebrow text-gold">A Founder’s Reflection</p>

            <blockquote className="mt-6 text-2xl font-extrabold leading-9">
              “People give their time because they believe their communities
              can become better. Subang gives those people a platform to turn
              that belief into action.”
            </blockquote>
          </div>
        </div>
      </section>

      <section className="bg-cream py-24">
        <div className="container-wide">
          <p className="eyebrow text-green">Beyond the Title</p>

          <h2 className="display mt-5 max-w-4xl text-4xl text-maroon md:text-5xl">
            Leadership is ultimately about the people you help bring forward.
          </h2>

          <div className="mt-10 grid gap-8 md:grid-cols-3">
            <article className="bg-white p-8">
              <p className="text-sm font-bold uppercase tracking-[0.12em] text-green">
                Science
              </p>
              <h3 className="mt-4 text-2xl font-extrabold text-maroon">
                Evidence matters.
              </h3>
              <p className="mt-4 leading-7 text-ink/65">
                Community development becomes stronger when ideas are informed
                by evidence, technical knowledge, local realities, and a
                willingness to learn.
              </p>
            </article>

            <article className="bg-white p-8">
              <p className="text-sm font-bold uppercase tracking-[0.12em] text-green">
                Service
              </p>
              <h3 className="mt-4 text-2xl font-extrabold text-maroon">
                People matter.
              </h3>
              <p className="mt-4 leading-7 text-ink/65">
                Sustainable development is ultimately about people. Listening
                to communities and creating space for participation is as
                important as designing the project itself.
              </p>
            </article>

            <article className="bg-white p-8">
              <p className="text-sm font-bold uppercase tracking-[0.12em] text-green">
                Action
              </p>
              <h3 className="mt-4 text-2xl font-extrabold text-maroon">
                Action matters.
              </h3>
              <p className="mt-4 leading-7 text-ink/65">
                Good ideas become meaningful when people work together to
                implement them, evaluate them, improve them, and continue
                showing up.
              </p>
            </article>
          </div>
        </div>
      </section>

      <section className="bg-maroon py-24 text-white">
        <div className="container-wide">
          <p className="eyebrow text-gold">A Message to the Subang Community</p>

          <h2 className="display mt-5 max-w-4xl text-4xl md:text-6xl">
            The work belongs to all of us.
          </h2>

          <div className="mt-8 max-w-3xl space-y-6 text-lg leading-8 text-white/75">
            <p>
              Subang may have started with an idea, but it continues because
              people choose to give their time, skills, creativity, and
              courage to something larger than themselves.
            </p>

            <p>
              To every volunteer, chapter leader, partner, mentor, community
              member, and young person who has contributed to this journey:
              thank you for helping turn a vision into something people can
              experience on the ground.
            </p>

            <p>
              There is still much to learn, much to build, and much to do. And
              the work continues, one community and one volunteer at a time.
            </p>
          </div>

          <p className="mt-10 text-2xl font-extrabold text-gold">
            Live. Create. Inspire.
          </p>
        </div>
      </section>

      <Footer />
    </main>
  );
}
