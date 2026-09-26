import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  Users,
  Leaf,
  GraduationCap,
  Camera,
  Lightbulb,
  HeartHandshake,
} from "lucide-react";
import { Header, Footer, PageIntro } from "../components";
import { sortedStories } from "../content";

const volunteerAreas = [
  {
    title: "Community Action",
    description:
      "Help organize and implement initiatives that respond to real community needs.",
    icon: Users,
  },
  {
    title: "Environmental Action",
    description:
      "Contribute to bamboo propagation, restoration, biodiversity, waste management, and environmental education.",
    icon: Leaf,
  },
  {
    title: "Agriculture & Food Security",
    description:
      "Support sustainable food production, community agriculture, composting, and food systems.",
    icon: HeartHandshake,
  },
  {
    title: "Education & Training",
    description:
      "Share knowledge, facilitate workshops, mentor young people, and help communities learn.",
    icon: GraduationCap,
  },
  {
    title: "Media & Communications",
    description:
      "Use photography, filmmaking, writing, design, documentation, and communications to tell community stories.",
    icon: Camera,
  },
  {
    title: "Science & Technology",
    description:
      "Apply technical knowledge, innovation, and problem-solving to community challenges.",
    icon: Lightbulb,
  },
];

const volunteerSteps = [
  {
    number: "01",
    title: "Join",
    description:
      "Become part of the Subang volunteer network and discover where your contribution can make a difference.",
  },
  {
    number: "02",
    title: "Discover",
    description:
      "Explore programs, activities, and opportunities that match your interests, skills, and community.",
  },
  {
    number: "03",
    title: "Contribute",
    description:
      "Work alongside fellow volunteers, communities, schools, local governments, and partner institutions.",
  },
  {
    number: "04",
    title: "Grow",
    description:
      "Build experience, leadership, relationships, and a deeper understanding of community development.",
  },
];

const membershipPathway = [
  {
    number: "01",
    title: "Application Form",
    description:
      "Submit the Membership Application Form together with the required consent and application information.",
  },
  {
    number: "02",
    title: "Preliminary Interview",
    description:
      "Participate in an initial interview to discuss your background, interests, motivations, and readiness to volunteer.",
  },
  {
    number: "03",
    title: "Internship Examination",
    description:
      "Complete the Advocacy Assessment as part of the qualification process for the internship phase.",
  },
  {
    number: "04",
    title: "Internship Proper",
    description:
      "Complete 240 hours of combined volunteer service through approved Subang activities and initiatives.",
    highlight: "240 hours of combined volunteer service",
  },
  {
    number: "05",
    title: "Membership Interview",
    description:
      "Participate in a membership-focused interview following successful completion of the internship requirement.",
  },
  {
    number: "06",
    title: "Membership Examination",
    description:
      "Complete the membership examination as the final qualification stage of the application process.",
  },
];

const volunteerStories = sortedStories
  .filter((story) => story.type === "Volunteer Story")
  .slice(0, 3);

export default function VolunteerPage() {
  return (
    <>
      <Header />

      <PageIntro
        eyebrow="Volunteer with Subang"
        title="Your time can become community action."
        text="Subang Philippines brings young people and volunteers together to turn ideas into meaningful work for communities."
      />

      <main>
        {/* Membership pathway */}
        <section className="bg-cream py-20 md:py-28">
          <div className="container-wide">
            <div className="grid gap-10 lg:grid-cols-[1fr_auto] lg:items-end">
              <div className="max-w-3xl">
                <p className="mb-4 text-sm font-bold uppercase tracking-[0.18em] text-maroon">
                  From volunteer to member
                </p>

                <h2 className="text-3xl font-extrabold tracking-tight text-ink md:text-5xl">
                  A pathway built around service, learning, and commitment.
                </h2>

                <p className="mt-5 text-lg leading-8 text-slate-600">
                  Becoming a Subang member is a structured process. Applicants
                  progress through assessment, volunteer service, and membership
                  qualification before becoming part of the organization.
                </p>
              </div>

              <Link
                href="/apply"
                className="inline-flex w-fit items-center gap-2 bg-maroon px-6 py-4 font-extrabold text-white transition hover:bg-maroon/90"
              >
                Start Your Application
                <ArrowRight size={18} />
              </Link>
            </div>

            <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
              {membershipPathway.map((step) => (
                <article
                  key={step.number}
                  className="relative bg-white p-7 shadow-sm ring-1 ring-slate-200"
                >
                  <div className="flex items-start justify-between gap-4">
                    <span className="text-sm font-extrabold tracking-[0.15em] text-maroon">
                      {step.number}
                    </span>

                    {step.number === "04" && (
                      <span className="bg-gold px-3 py-1 text-xs font-extrabold text-ink">
                        240 HOURS
                      </span>
                    )}
                  </div>

                  <h3 className="mt-6 text-xl font-extrabold text-ink">
                    {step.title}
                  </h3>

                  <p className="mt-3 leading-7 text-slate-600">
                    {step.description}
                  </p>

                  {step.highlight && (
                    <p className="mt-5 border-l-2 border-gold pl-4 text-sm font-bold leading-6 text-maroon">
                      {step.highlight}
                    </p>
                  )}
                </article>
              ))}
            </div>

            <div className="mt-10 border-l-4 border-maroon bg-white px-6 py-5 shadow-sm">
              <p className="font-bold text-ink">The pathway in brief</p>

              <p className="mt-2 text-slate-600">
                Apply → Interview → Assess → Serve → Interview → Qualify
              </p>
            </div>
          </div>
        </section>

        {/* Why volunteer */}
        <section className="bg-white py-20 md:py-28">
          <div className="container-wide grid gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
            <div>
              <p className="mb-4 text-sm font-bold uppercase tracking-[0.18em] text-maroon">
                Why volunteer?
              </p>

              <h2 className="max-w-3xl text-3xl font-extrabold tracking-tight text-ink md:text-5xl">
                Volunteering is more than showing up.
              </h2>

              <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">
                It is a way to contribute your time, skills, ideas, and energy
                to work that matters. At Subang, volunteers help turn
                community challenges into practical action.
              </p>

              <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-600">
                Whether you are working in the field, organizing a program,
                documenting a story, teaching a skill, or helping build a
                partnership, your contribution becomes part of something
                larger.
              </p>
            </div>

            <div className="bg-cream p-8 md:p-10">
              <p className="text-2xl font-extrabold leading-tight text-ink md:text-3xl">
                You do not need to have everything figured out before you
                start.
              </p>

              <div className="mt-8 space-y-5">
                {[
                  "Contribute to meaningful community initiatives.",
                  "Develop leadership and practical skills.",
                  "Work alongside young people and community partners.",
                  "Use your own skills and interests for public good.",
                ].map((item) => (
                  <div key={item} className="flex gap-3">
                    <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-gold" />
                    <p className="text-slate-700">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Contribution areas */}
        <section className="bg-slate-50 py-20 md:py-28">
          <div className="container-wide">
            <div className="max-w-3xl">
              <p className="mb-4 text-sm font-bold uppercase tracking-[0.18em] text-maroon">
                Find your place
              </p>

              <h2 className="text-3xl font-extrabold tracking-tight text-ink md:text-5xl">
                There are many ways to contribute.
              </h2>

              <p className="mt-5 text-lg leading-8 text-slate-600">
                Subang welcomes different skills, backgrounds, interests, and
                ways of serving communities.
              </p>
            </div>

            <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {volunteerAreas.map((area) => {
                const Icon = area.icon;

                return (
                  <article
                    key={area.title}
                    className="bg-white p-7 shadow-sm ring-1 ring-slate-200 transition hover:-translate-y-1 hover:shadow-md"
                  >
                    <div className="flex h-12 w-12 items-center justify-center bg-maroon text-white">
                      <Icon size={22} />
                    </div>

                    <h3 className="mt-6 text-xl font-extrabold text-ink">
                      {area.title}
                    </h3>

                    <p className="mt-3 leading-7 text-slate-600">
                      {area.description}
                    </p>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        {/* How it works */}
        <section className="bg-maroon py-20 text-white md:py-28">
          <div className="container-wide">
            <div className="max-w-3xl">
              <p className="mb-4 text-sm font-bold uppercase tracking-[0.18em] text-gold">
                How volunteering works
              </p>

              <h2 className="text-3xl font-extrabold tracking-tight md:text-5xl">
                From willingness to action.
              </h2>

              <p className="mt-5 text-lg leading-8 text-white/75">
                Volunteering with Subang is about finding a meaningful way to
                participate, contribute, and grow.
              </p>
            </div>

            <div className="mt-14 grid gap-8 md:grid-cols-4">
              {volunteerSteps.map((step) => (
                <div
                  key={step.number}
                  className="border-t border-white/20 pt-6"
                >
                  <span className="text-sm font-extrabold tracking-[0.15em] text-gold">
                    {step.number}
                  </span>

                  <h3 className="mt-4 text-2xl font-extrabold">
                    {step.title}
                  </h3>

                  <p className="mt-3 leading-7 text-white/70">
                    {step.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Who can volunteer */}
        <section className="bg-white py-20 md:py-28">
          <div className="container-wide grid gap-12 lg:grid-cols-2 lg:items-center">
            <div>
              <p className="mb-4 text-sm font-bold uppercase tracking-[0.18em] text-maroon">
                Who can volunteer?
              </p>

              <h2 className="text-3xl font-extrabold tracking-tight text-ink md:text-5xl">
                Community action needs different kinds of people.
              </h2>
            </div>

            <div>
              <p className="text-lg leading-8 text-slate-600">
                Students, young professionals, community members, creatives,
                educators, technical practitioners, advocates, and people
                simply willing to help can all contribute to meaningful work.
              </p>

              <p className="mt-5 text-lg leading-8 text-slate-600">
                What matters is the willingness to participate, learn, work
                with others, and contribute responsibly to the communities
                Subang serves.
              </p>
            </div>
          </div>
        </section>

        {/* Volunteer stories */}
        {volunteerStories.length > 0 && (
          <section className="bg-cream py-20 md:py-28">
            <div className="container-wide">
              <div className="flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
                <div className="max-w-3xl">
                  <p className="mb-4 text-sm font-bold uppercase tracking-[0.18em] text-maroon">
                    Volunteer stories
                  </p>

                  <h2 className="text-3xl font-extrabold tracking-tight text-ink md:text-5xl">
                    Meet the people behind the work.
                  </h2>

                  <p className="mt-5 text-lg leading-8 text-slate-600">
                    Volunteers are at the heart of Subang&apos;s community
                    action.
                  </p>
                </div>

                <Link
                  href="/stories"
                  className="inline-flex items-center gap-2 text-sm font-extrabold text-maroon"
                >
                  View all stories
                  <ArrowUpRight size={17} />
                </Link>
              </div>

              <div className="mt-12 grid gap-6 md:grid-cols-3">
                {volunteerStories.map((story) => (
                  <Link
                    key={story.slug}
                    href={`/stories/${story.slug}`}
                    className="group overflow-hidden bg-white shadow-sm ring-1 ring-slate-200"
                  >
                    <div className="aspect-[16/10] overflow-hidden">
                      <img
                        src={story.image}
                        alt={story.title}
                        className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                      />
                    </div>

                    <div className="p-6">
                      <p className="text-xs font-bold uppercase tracking-[0.14em] text-maroon">
                        {story.date}
                      </p>

                      <h3 className="mt-3 text-xl font-extrabold leading-tight text-ink">
                        {story.title}
                      </h3>

                      <p className="mt-3 line-clamp-3 leading-7 text-slate-600">
                        {story.excerpt}
                      </p>

                      <span className="mt-5 inline-flex items-center gap-2 text-sm font-extrabold text-maroon">
                        Read story
                        <ArrowRight
                          size={16}
                          className="transition-transform group-hover:translate-x-1"
                        />
                      </span>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* CTA */}
        <section className="bg-white py-20 md:py-28">
          <div className="container-wide">
            <div className="overflow-hidden bg-maroon px-7 py-12 text-white md:px-12 md:py-16">
              <div className="max-w-3xl">
                <p className="text-sm font-bold uppercase tracking-[0.18em] text-gold">
                  Get involved
                </p>

                <h2 className="mt-4 text-3xl font-extrabold tracking-tight md:text-5xl">
                  There is always something worth doing.
                </h2>

                <p className="mt-5 text-lg leading-8 text-white/75">
                  Whether you have time, a skill, an idea, or simply the
                  willingness to help, there is a place for you in community
                  action.
                </p>

                <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                  <Link
                    href="/apply"
                    className="inline-flex items-center justify-center gap-2 bg-gold px-6 py-3 font-extrabold text-ink transition hover:opacity-90"
                  >
                    Start Your Application
                    <ArrowRight size={18} />
                  </Link>

                  <Link
                    href="/programs"
                    className="inline-flex items-center justify-center gap-2 border border-white/30 px-6 py-3 font-extrabold text-white transition hover:bg-white/10"
                  >
                    Explore Programs
                    <ArrowUpRight size={18} />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
