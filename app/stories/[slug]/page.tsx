import { notFound } from "next/navigation";
import Link from "next/link";
import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
} from "lucide-react";
import { Header, Footer } from "../../components";
import { stories, sortedStories } from "../../content";

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
