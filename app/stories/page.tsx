import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Header, Footer, PageIntro } from "../components";
import { sortedStories } from "../content";

export default function Stories() {
  return (
    <main>
      <Header />

      <PageIntro
        eyebrow="Stories & Press"
        title="The people, projects, and moments behind the movement."
        text="Official announcements, project stories, and volunteer voices from Subang Philippines."
      />

      <section className="container-wide py-24">
        <div className="grid gap-8 md:grid-cols-2">
          {sortedStories.map((s) => (
            <article
              key={s.slug}
              className="overflow-hidden border border-maroon/10 bg-white"
            >
              <div className="aspect-[16/9] bg-cream">
                <img
                  src={s.image}
                  alt=""
                  className="h-full w-full object-cover"
                />
              </div>

              <div className="p-8">
                <p className="eyebrow text-green">
                  {s.type} · {s.date}
                </p>

                <h2 className="display mt-4 text-3xl text-maroon">
                  {s.title}
                </h2>

                <p className="mt-4 leading-7 text-ink/65">
                  {s.excerpt}
                </p>

                <Link
                  href={`/stories/${s.slug}`}
                  className="mt-6 inline-flex items-center gap-2 font-extrabold text-blue"
                >
                  Read more
                  <ArrowUpRight size={16} />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>

      <Footer />
    </main>
  );
}
