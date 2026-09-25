import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Header, Footer, PageIntro } from "../components";

const executiveLeadership = [
  {
    name: "Peter John C. Enorio",
    role: "Founder & National Executive President",
    image: "/assets/team/peter-john-enorio.jpg",
  },
  {
    name: "Dyn Michael M. Lozana",
    role: "National Executive Vice President",
    image: "/assets/team/dyn-michael-lozana.jpg",
  },
];

const nationalAdvisers = [
  {
    name: "Dr. Pet Roey L. Pascual",
    role: "National Adviser",
    image: "/assets/team/pet-roey-pascual.jpg",
  },
  {
    name: "Dr. Danny E. Carabio",
    role: "National Adviser",
    image: "/assets/team/danny-e-carabio.jpg",
  },
];

const nationalVicePresidents = [
  {
    name: "Alrose Mae Malinao",
    role: "Vice President for Environmental Affairs",
  },
  {
    name: "John Blair More J. Omandam",
    role: "Vice President for Community Affairs",
  },
  {
    name: "Andreev Mattheus Sumile",
    role: "Vice President for Agriculture and Food Systems",
  },
  {
    name: "Shaina Faith D. Visorro",
    role: "Vice President for Science and Technology",
  },
  {
    name: "Vacant",
    role: "Vice President for Education",
    vacant: true,
  },
];

const regionalVicePresidents = [
  {
    name: "Angelo M. Asas",
    role: "Vice President for Luzon",
  },
  {
    name: "Erll Vincent Villadares",
    role: "Vice President for Visayas",
  },
  {
    name: "Vacant",
    role: "Vice President for Mindanao",
    vacant: true,
  },
];

const nationalDirectors = [
  {
    name: "Andrewkyle E. Oroc",
    role: "Director for Administration and Finance",
  },
  {
    name: "Ron Janbert P. Ofquila",
    role: "Director for Resource Generation",
  },
  {
    name: "Rod Santiago Jr. Lebumfacil",
    role: "Director for Communications",
  },
  {
    name: "Dennis B. Bendulo",
    role: "Director for Human Resources",
  },
];

const provincialChapters = [
  {
    name: "Rachel Gulahab",
    role: "Provincial Chapter Director",
    chapter: "Subang - Province of Siquijor",
  },
  {
    name: "Krista Marie Frances C. Bicada",
    role: "Provincial Chapter Director",
    chapter: "Subang - Province of Cebu",
  },
  {
    name: "Jerecho Jose P. Sumalpong",
    role: "Provincial Chapter Director",
    chapter: "Subang - Province of Leyte",
  },
  {
    name: "Vacant",
    role: "Provincial Chapter Director",
    chapter: "Subang - Province of Bohol",
    vacant: true,
  },
  {
    name: "Vacant",
    role: "Provincial Chapter Director",
    chapter: "Subang - Province of Negros Oriental",
    vacant: true,
  },
  {
    name: "Vacant",
    role: "Provincial Chapter Director",
    chapter: "Subang - Province of Negros Occidental",
    vacant: true,
  },
];

const universityChapters = [
  {
    name: "Shaina Faith D. Visorro",
    role: "University & College Chapter Executive President",
    chapter: "Subang - Cebu Technological University",
  },
  {
    name: "Raf B. Jimenez",
    role: "University & College Chapter Executive President",
    chapter: "Subang - University of San Carlos",
  },
  {
    name: "Jerecho Jose P. Sumalpong",
    role: "University & College Chapter Executive President",
    chapter: "Subang - Visayas State University",
  },
  {
    name: "Vacant",
    role: "University & College Chapter Executive President",
    chapter: "Subang - Cebu Normal University",
    vacant: true,
  },
  {
    name: "Vacant",
    role: "University & College Chapter Executive President",
    chapter: "Subang - Siquijor State College",
    vacant: true,
  },
  {
    name: "Vacant",
    role: "University & College Chapter Executive President",
    chapter: "Subang - Negros Oriental State University",
    vacant: true,
  },
  {
    name: "Vacant",
    role: "University & College Chapter Executive President",
    chapter: "Subang - Silliman University",
    vacant: true,
  },
];

function PersonCard({
  name,
  role,
  image,
  large = false,
}: {
  name: string;
  role: string;
  image?: string;
  large?: boolean;
}) {
  const isVacant = name === "Vacant";

  return (
    <article
      className={`overflow-hidden border border-maroon/10 bg-white ${
        large ? "md:grid md:grid-cols-[240px_1fr]" : ""
      }`}
    >
      {image ? (
        <div className="aspect-square bg-cream md:aspect-auto">
          <img
            src={image}
            alt={name}
            className="h-full w-full object-cover"
          />
        </div>
      ) : (
        <div className="flex aspect-[4/3] items-center justify-center bg-cream md:aspect-[4/3]">
          <span className="text-xs font-extrabold uppercase tracking-[0.16em] text-ink/35">
            {isVacant ? "Position Open" : "Subang Philippines"}
          </span>
        </div>
      )}

      <div className="p-6">
        <p
          className={`text-xs font-extrabold uppercase tracking-[0.14em] ${
            isVacant ? "text-ink/40" : "text-green"
          }`}
        >
          {role}
        </p>

        <h3
          className={`display mt-3 text-2xl ${
            isVacant ? "text-ink/45" : "text-maroon"
          }`}
        >
          {name}
        </h3>
      </div>
    </article>
  );
}

function LeadershipList({
  items,
}: {
  items: {
    name: string;
    role: string;
    chapter?: string;
    vacant?: boolean;
  }[];
}) {
  return (
    <div className="grid gap-4 md:grid-cols-2">
      {items.map((person) => (
        <article
          key={`${person.name}-${person.role}-${person.chapter || ""}`}
          className={`border p-6 ${
            person.vacant
              ? "border-dashed border-ink/15 bg-ink/[0.02]"
              : "border-maroon/10 bg-white"
          }`}
        >
          {person.chapter && (
            <p className="text-xs font-extrabold uppercase tracking-[0.12em] text-gold">
              {person.chapter}
            </p>
          )}

          <h3
            className={`display mt-2 text-2xl ${
              person.vacant ? "text-ink/45" : "text-maroon"
            }`}
          >
            {person.name}
          </h3>

          <p
            className={`mt-2 text-sm font-semibold ${
              person.vacant ? "text-ink/40" : "text-ink/65"
            }`}
          >
            {person.role}
          </p>

          {person.vacant && (
            <p className="mt-4 text-xs leading-5 text-ink/45">
              This leadership position is currently vacant.
            </p>
          )}
        </article>
      ))}
    </div>
  );
}

export default function Leadership() {
  return (
    <main>
      <Header />

      <PageIntro
        eyebrow="Leadership"
        title="People who organize, guide, and carry the work forward."
        text="Subang's leadership structure brings together national officers, advisers, regional leaders, chapter directors, and university-based youth leaders."
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
              The structure is designed to connect national direction with
              regional, provincial, university, and community-level action.
            </p>
          </div>
        </div>
      </section>

      {/* EXECUTIVE LEADERSHIP */}
      <section className="bg-cream py-20 md:py-28">
        <div className="container-wide">
          <div className="max-w-3xl">
            <p className="eyebrow text-green">
              Executive Leadership
            </p>

            <h2 className="display mt-4 text-4xl text-maroon md:text-5xl">
              National Executive Leadership
            </h2>

            <p className="mt-6 leading-7 text-ink/65">
              The national executive leadership provides organizational
              direction, coordinates major initiatives, and helps connect
              Subang's different chapters and partners.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {executiveLeadership.map((person) => (
              <PersonCard
                key={person.name}
                name={person.name}
                role={person.role}
                image={person.image}
                large
              />
            ))}
          </div>
        </div>
      </section>

      {/* ADVISERS */}
      <section className="container-wide py-20 md:py-28">
        <div className="max-w-3xl">
          <p className="eyebrow text-green">
            Guidance
          </p>

          <h2 className="display mt-4 text-4xl text-maroon md:text-5xl">
            National Advisers
          </h2>

          <p className="mt-6 leading-7 text-ink/65">
            Advisers provide institutional perspective, guidance, and support
            as Subang develops its programs, partnerships, and organizational
            systems.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {nationalAdvisers.map((person) => (
            <PersonCard
              key={person.name}
              name={person.name}
              role={person.role}
              image={person.image}
            />
          ))}
        </div>
      </section>

      {/* NATIONAL OFFICERS */}
      <section className="bg-cream py-20 md:py-28">
        <div className="container-wide">
          <div className="max-w-3xl">
            <p className="eyebrow text-green">
              National Officers
            </p>

            <h2 className="display mt-4 text-4xl text-maroon md:text-5xl">
              Functional Leadership
            </h2>

            <p className="mt-6 leading-7 text-ink/65">
              National vice presidents and directors lead specific functional
              areas that support Subang's programs, volunteers, resources,
              communications, and organizational development.
            </p>
          </div>

          <div className="mt-12">
            <h3 className="display text-2xl text-maroon">
              Vice Presidents
            </h3>

            <div className="mt-6">
              <LeadershipList items={nationalVicePresidents} />
            </div>
          </div>

          <div className="mt-14">
            <h3 className="display text-2xl text-maroon">
              Regional Vice Presidents
            </h3>

            <div className="mt-6">
              <LeadershipList items={regionalVicePresidents} />
            </div>
          </div>

          <div className="mt-14">
            <h3 className="display text-2xl text-maroon">
              National Directors
            </h3>

            <div className="mt-6">
              <LeadershipList items={nationalDirectors} />
            </div>
          </div>
        </div>
      </section>

      {/* CHAPTER LEADERSHIP */}
      <section className="container-wide py-20 md:py-28">
        <div className="grid gap-12 lg:grid-cols-[0.75fr_1.25fr]">
          <div>
            <p className="eyebrow text-green">
              Chapter Leadership
            </p>

            <h2 className="display mt-4 text-4xl text-maroon md:text-5xl">
              Leadership closer to the community.
            </h2>

            <p className="mt-6 leading-7 text-ink/65">
              Chapter leaders help bring Subang's mission into specific
              provinces, universities, colleges, and local communities.
            </p>

            <p className="mt-5 leading-7 text-ink/65">
              Chapters provide a structure for volunteers to organize locally
              while remaining connected to the organization's broader mission
              and framework.
            </p>
          </div>

          <div>
            <h3 className="display text-2xl text-maroon">
              Provincial Chapters
            </h3>

            <div className="mt-6">
              <LeadershipList items={provincialChapters} />
            </div>

            <h3 className="display mt-14 text-2xl text-maroon">
              University & College Chapters
            </h3>

            <div className="mt-6">
              <LeadershipList items={universityChapters} />
            </div>
          </div>
        </div>
      </section>

      {/* ORGANIZATIONAL MODEL */}
      <section className="bg-maroon text-white">
        <div className="container-wide py-20 md:py-28">
          <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
            <div>
              <p className="eyebrow text-gold">
                Organizational Model
              </p>

              <h2 className="display mt-4 text-4xl md:text-5xl">
                One mission, different levels of action.
              </h2>
            </div>

            <div>
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
                    className="border border-white/15 bg-white/5 px-5 py-5"
                  >
                    <p className="text-xs font-extrabold tracking-[0.14em] text-gold">
                      0{index + 1}
                    </p>

                    <p className="mt-2 font-extrabold">
                      {item}
                    </p>
                  </div>
                ))}
              </div>

              <p className="mt-8 text-lg leading-8 text-white/65">
                This structure allows Subang to maintain a shared direction
                while giving local leaders and volunteers space to respond to
                the needs and opportunities of their own communities.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* VACANCIES NOTE */}
      <section className="container-wide py-16 md:py-20">
        <div className="border border-dashed border-maroon/15 bg-cream p-7 md:p-9">
          <p className="eyebrow text-green">
            Organizational Transparency
          </p>

          <h2 className="display mt-4 text-3xl text-maroon md:text-4xl">
            Growing organizations have room to grow.
          </h2>

          <p className="mt-5 max-w-3xl leading-7 text-ink/65">
            Some leadership positions are currently vacant as Subang continues
            to develop its chapter network and organizational capacity.
            Vacancies are intentionally shown rather than filled with
            placeholder names.
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
