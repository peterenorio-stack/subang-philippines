import { notFound } from "next/navigation";
import Link from "next/link";
import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
} from "lucide-react";
import { Header, Footer } from "../../components";
import { stories, sortedStories } from "../../content";

const sdgDetails: Record<
  number,
  {
    title: string;
    image: string;
  }
> = {
  1: {
    title: "No Poverty",
    image: "/assets/framework/sdgs/sdg-01.jpg",
  },
  2: {
    title: "Zero Hunger",
    image: "/assets/framework/sdgs/sdg-02.jpg",
  },
  3: {
    title: "Good Health and Well-Being",
    image: "/assets/framework/sdgs/sdg-03.jpg",
  },
  4: {
    title: "Quality Education",
    image: "/assets/framework/sdgs/sdg-04.jpg",
  },
  5: {
    title: "Gender Equality",
    image: "/assets/framework/sdgs/sdg-05.jpg",
  },
  6: {
    title: "Clean Water and Sanitation",
    image: "/assets/framework/sdgs/sdg-06.jpg",
  },
  7: {
    title: "Affordable and Clean Energy",
    image: "/assets/framework/sdgs/sdg-07.jpg",
  },
  8: {
    title: "Decent Work and Economic Growth",
    image: "/assets/framework/sdgs/sdg-08.jpg",
  },
  9: {
    title: "Industry, Innovation and Infrastructure",
    image: "/assets/framework/sdgs/sdg-09.jpg",
  },
  10: {
    title: "Reduced Inequalities",
    image: "/assets/framework/sdgs/sdg-10.jpg",
  },
  11: {
    title: "Sustainable Cities and Communities",
    image: "/assets/framework/sdgs/sdg-11.jpg",
  },
  12: {
    title: "Responsible Consumption and Production",
    image: "/assets/framework/sdgs/sdg-12.jpg",
  },
  13: {
    title: "Climate Action",
    image: "/assets/framework/sdgs/sdg-13.jpg",
  },
  14: {
    title: "Life Below Water",
    image: "/assets/framework/sdgs/sdg-14.jpg",
  },
  15: {
    title: "Life on Land",
    image: "/assets/framework/sdgs/sdg-15.jpg",
  },
  16: {
    title: "Peace, Justice and Strong Institutions",
    image: "/assets/framework/sdgs/sdg-16.jpg",
  },
  17: {
    title: "Partnerships for the Goals",
    image: "/assets/framework/sdgs/sdg-17.jpg",
  },
};

const categorySdgs: Record<string, number[]> = {
  "Environmental Sustainability": [13, 15],
  "Food Security & Sustainable Agriculture": [2, 4, 12],
  "Waste Management & Circularity": [11, 12],
  "Coastal & Marine Action": [13, 14, 15],
  "Youth Leadership & Participation": [4, 16, 17],
  "Education & Capacity Building": [4, 16, 17],
  "Partnerships & Community Mobilization": [16, 17],
  "Climate & Disaster Resilience": [11, 13, 17],
  "Social Inclusion & Equity": [5, 10, 16],
  "Volunteerism": [4, 11, 17],
  "Recognition": [16, 17],
};

export function generateStaticParams() {
  return stories.map((s) => ({
    slug: s.slug,
  }));
}

export default async function StoryPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const storyIndex = sortedStories.findIndex(
    (story) => story.slug === slug
  );

  const s = sortedStories[storyIndex];

  if (!s) notFound();

  const previousStory =
    storyIndex < sortedStories.length - 1
      ? sortedStories[storyIndex + 1]
      : null;

  const nextStory =
    storyIndex > 0
      ? sortedStories[storyIndex - 1]
      : null;

  const relatedStories = sortedStories
    .filter(
      (story) =>
        story.slug !== s.slug &&
        story.category === s.category
    )
    .slice(0, 3);

  const sdgs = categorySdgs[s.category] || [];

  return (
    <main>
      <Header />

      <article>
        {/* Story Header */}
        <div className="container-wide py-16 md:py-24">
          <Link
            href="/stories"
            className="inline-flex items-center gap-2 text-sm font-bold text-blue"
          >
            <ArrowLeft size={16} />
            Back to Stories & Press
          </Link>

          <div className="mt-12 max-w-5xl">
            <div className="flex flex-wrap items-center gap-x-3 gap-y-2">
              <p className="eyebrow text-green">
                {s.type}
              </p>

              <span className="text-xs text-ink/25">
                •
              </span>

              <p className="eyebrow text-ink/45">
                {s.date}
              </p>
            </div>

            <h1 className="display mt-5 text-5xl leading-tight text-maroon md:text-7xl">
              {s.title}
            </h1>

            <p className="mt-7 max-w-3xl text-xl leading-8 text-ink/65 md:text-2xl">
              {s.excerpt}
            </p>
          </div>
        </div>

        {/* Hero Image */}
        <div className="container-wide aspect-[16/7] overflow-hidden bg-cream">
          <img
            src={s.image}
            alt={s.title}
            className="h-full w-full object-cover"
          />
        </div>

        {/* Story Body + Details */}
        <div className="container-wide grid gap-12 py-16 md:grid-cols-[1fr_300px] md:py-24">
          <div className="max-w-3xl space-y-6 text-lg leading-8 text-ink/75">
            {s.body.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>

          <aside className="h-fit bg-cream p-7 md:sticky md:top-8">
            <p className="eyebrow text-green">
              Story details
            </p>

            <div className="mt-5 border-t border-maroon/10 pt-5">
              <p className="text-xs font-extrabold uppercase tracking-[0.14em] text-ink/40">
                Category
              </p>

              <p className="mt-2 font-extrabold leading-6 text-maroon">
                {s.category}
              </p>
            </div>

            {s.partner && (
              <div className="mt-6 border-t border-maroon/10 pt-5">
                <p className="text-xs font-extrabold uppercase tracking-[0.14em] text-ink/40">
                  Partner
                </p>

                <p className="mt-2 font-extrabold leading-6 text-maroon">
                  {s.partner}
                </p>
              </div>
            )}

            <div className="mt-6 border-t border-maroon/10 pt-5">
              <p className="text-xs font-extrabold uppercase tracking-[0.14em] text-ink/40">
                Published
              </p>

              <p className="mt-2 font-extrabold text-maroon">
                {s.date}
              </p>
            </div>

            {/* SDG Connections */}
            {sdgs.length > 0 && (
              <div className="mt-6 border-t border-maroon/10 pt-6">
                <p className="eyebrow text-green">
                  SDG connections
                </p>

                <div className="mt-4 space-y-3">
                  {sdgs.map((sdg) => {
                    const detail = sdgDetails[sdg];

                    return (
                      <Link
                        key={sdg}
                        href="/framework"
                        className="group flex items-center gap-3 border border-maroon/10 bg-white p-2 transition hover:border-maroon/30"
                      >
                        <img
                          src={detail.image}
                          alt={`SDG ${sdg}: ${detail.title}`}
                          className="h-12 w-12 shrink-0 object-cover"
                        />

                        <div className="min-w-0">
                          <p className="text-xs font-extrabold uppercase tracking-[0.12em] text-ink/40">
                            SDG {sdg}
                          </p>

                          <p className="mt-0.5 text-sm font-extrabold leading-5 text-maroon transition group-hover:text-blue">
                            {detail.title}
                          </p>
                        </div>
                      </Link>
                    );
                  })}
                </div>

                <Link
                  href="/framework"
                  className="mt-4 inline-flex items-center gap-2 text-sm font-extrabold text-blue"
                >
                  Explore the framework
                  <ArrowUpRight size={15} />
                </Link>
              </div>
            )}
          </aside>
        </div>

        {/* Previous / Next Stories */}
        <div className="container-wide border-y border-maroon/10">
          <div className="grid md:grid-cols-2">
            {previousStory ? (
              <Link
                href={`/stories/${previousStory.slug}`}
                className="group border-b border-maroon/10 py-8 md:border-b-0 md:border-r md:pr-10"
              >
                <p className="eyebrow text-green">
                  Previous story
                </p>

                <div className="mt-3 flex items-start justify-between gap-6">
                  <h2 className="display text-2xl text-maroon md:text-3xl">
                    {previousStory.title}
                  </h2>

                  <ArrowLeft
                    size={20}
                    className="mt-1 shrink-0 text-blue transition-transform group-hover:-translate-x-1"
                  />
                </div>
              </Link>
            ) : (
              <div className="hidden md:block" />
            )}

            {nextStory ? (
              <Link
                href={`/stories/${nextStory.slug}`}
                className="group py-8 md:pl-10"
              >
                <p className="eyebrow text-green">
                  Next story
                </p>

                <div className="mt-3 flex items-start justify-between gap-6">
                  <h2 className="display text-right text-2xl text-maroon md:text-3xl">
                    {nextStory.title}
                  </h2>

                  <ArrowRight
                    size={20}
                    className="mt-1 shrink-0 text-blue transition-transform group-hover:translate-x-1"
                  />
                </div>
              </Link>
            ) : (
              <div className="hidden md:block" />
            )}
          </div>
        </div>

        {/* Related Stories */}
        {relatedStories.length > 0 && (
          <section className="container-wide py-20 md:py-24">
            <div className="flex items-end justify-between gap-6">
              <div>
                <p className="eyebrow text-green">
                  Keep exploring
                </p>

                <h2 className="display mt-3 text-3xl text-maroon md:text-4xl">
                  More from this area of work.
                </h2>
              </div>

              <Link
                href="/stories"
                className="hidden items-center gap-2 font-extrabold text-blue sm:inline-flex"
              >
                View all stories
                <ArrowUpRight size={16} />
              </Link>
            </div>

            <div className="mt-10 grid gap-8 md:grid-cols-3">
              {relatedStories.map((story) => (
                <Link
                  key={story.slug}
                  href={`/stories/${story.slug}`}
                  className="group overflow-hidden border border-maroon/10 bg-white"
                >
                  <div className="aspect-[16/10] overflow-hidden bg-cream">
                    <img
                      src={story.image}
                      alt={story.title}
                      className="h-full w-full object-cover transition duration-500 group-hover:scale-[1.03]"
                    />
                  </div>

                  <div className="p-6">
                    <p className="eyebrow text-green">
                      {story.type} · {story.date}
                    </p>

                    <h3 className="display mt-3 text-2xl text-maroon">
                      {story.title}
                    </h3>

                    <p className="mt-3 line-clamp-3 leading-7 text-ink/60">
                      {story.excerpt}
                    </p>

                    <span className="mt-5 inline-flex items-center gap-2 font-extrabold text-blue">
                      Read story
                      <ArrowUpRight size={15} />
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </section>
        )}
      </article>

      <Footer />
    </main>
  );
}
