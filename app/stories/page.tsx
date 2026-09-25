"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { ArrowUpRight, Search } from "lucide-react";
import { Header, Footer, PageIntro } from "../components";
import { sortedStories } from "../content";

const categories = [
  "All",
  "Press Release",
  "Project Story",
  "Volunteer Story",
];

const years = ["All", "2026", "2025", "2024"];

const programAreas = [
  "All",
  "Environmental Sustainability",
  "Food Security & Sustainable Agriculture",
  "Waste Management & Circularity",
  "Coastal & Marine Action",
  "Youth Leadership & Participation",
  "Education & Capacity Building",
  "Partnerships & Community Mobilization",
  "Climate & Disaster Resilience",
  "Social Inclusion & Equity",
  "Volunteerism",
  "Recognition",
];

export default function Stories() {
  const [category, setCategory] = useState("All");
  const [year, setYear] = useState("All");
  const [programArea, setProgramArea] = useState("All");
  const [search, setSearch] = useState("");

  const filteredStories = useMemo(() => {
    const query = search.trim().toLowerCase();

    return sortedStories.filter((story) => {
      const matchesCategory =
        category === "All" || story.type === category;

      const storyYear = new Date(
        story.dateValue || "1900-01-01"
      ).getFullYear();

      const matchesYear =
        year === "All" || storyYear.toString() === year;

      const matchesProgramArea =
        programArea === "All" ||
        story.category === programArea;

      const matchesSearch =
        !query ||
        story.title.toLowerCase().includes(query) ||
        story.excerpt.toLowerCase().includes(query) ||
        story.category.toLowerCase().includes(query) ||
        story.partner?.toLowerCase().includes(query);

      return (
        matchesCategory &&
        matchesYear &&
        matchesProgramArea &&
        matchesSearch
      );
    });
  }, [category, year, programArea, search]);

  const featuredStory = sortedStories[0];

  const clearFilters = () => {
    setCategory("All");
    setYear("All");
    setProgramArea("All");
    setSearch("");
  };

  return (
    <main>
      <Header />

      <PageIntro
        eyebrow="Stories & Press"
        title="The people, projects, and moments behind the movement."
        text="Official announcements, project stories, and volunteer voices from Subang Philippines."
      />

      {/* Featured Story */}
      {featuredStory && (
        <section className="container-wide pt-16 md:pt-24">
          <Link
            href={`/stories/${featuredStory.slug}`}
            className="group grid overflow-hidden border border-maroon/10 bg-maroon md:grid-cols-[1.25fr_1fr]"
          >
            <div className="aspect-[16/10] overflow-hidden bg-cream md:aspect-auto">
              <img
                src={featuredStory.image}
                alt={featuredStory.title}
                className="h-full w-full object-cover transition duration-500 group-hover:scale-[1.02]"
              />
            </div>

            <div className="flex flex-col justify-center p-8 text-white md:p-12 lg:p-16">
              <p className="eyebrow text-sun">
                Latest Story · {featuredStory.type}
              </p>

              <h2 className="display mt-4 text-3xl md:text-4xl lg:text-5xl">
                {featuredStory.title}
              </h2>

              <p className="mt-5 leading-7 text-white/70">
                {featuredStory.excerpt}
              </p>

              <span className="mt-8 inline-flex items-center gap-2 font-extrabold text-sun">
                Read the story
                <ArrowUpRight size={17} />
              </span>
            </div>
          </Link>
        </section>
      )}

      {/* Archive */}
      <section className="container-wide py-16 md:py-24">
        <div className="border-y border-maroon/10 py-6">
          {/* Story Type */}
          <div>
            <p className="eyebrow mb-3 text-green">
              Story type
            </p>

            <div className="flex flex-wrap gap-2">
              {categories.map((item) => (
                <button
                  key={item}
                  type="button"
                  onClick={() => setCategory(item)}
                  className={`border px-4 py-2 text-sm font-extrabold transition ${
                    category === item
                      ? "border-maroon bg-maroon text-white"
                      : "border-maroon/15 bg-white text-ink hover:border-maroon/40"
                  }`}
                >
                  {item === "Press Release"
                    ? "Press Releases"
                    : item === "Project Story"
                    ? "Project Stories"
                    : item === "Volunteer Story"
                    ? "Volunteer Stories"
                    : item}
                </button>
              ))}
            </div>
          </div>

          {/* Program Area */}
          <div className="mt-7">
            <p className="eyebrow mb-3 text-green">
              Program area
            </p>

            <div className="flex flex-wrap gap-2">
              {programAreas.map((item) => (
                <button
                  key={item}
                  type="button"
                  onClick={() => setProgramArea(item)}
                  className={`border px-4 py-2 text-sm font-extrabold transition ${
                    programArea === item
                      ? "border-blue bg-blue text-white"
                      : "border-maroon/15 bg-white text-ink hover:border-blue/40"
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>
          </div>

          {/* Year */}
          <div className="mt-7">
            <p className="eyebrow mb-3 text-green">
              Year
            </p>

            <div className="flex flex-wrap gap-4">
              {years.map((item) => (
                <button
                  key={item}
                  type="button"
                  onClick={() => setYear(item)}
                  className={`text-sm font-extrabold transition ${
                    year === item
                      ? "text-blue"
                      : "text-ink/45 hover:text-ink"
                  }`}
                >
                  {item === "All" ? "All Years" : item}
                </button>
              ))}
            </div>
          </div>

          {/* Search */}
          <div className="relative mt-7 max-w-xl">
            <Search
              size={18}
              className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-ink/35"
            />

            <input
              type="search"
              value={search}
              onChange={(event) => setSearch(event.target.value)}
              placeholder="Search stories, projects, partners..."
              className="w-full border border-maroon/15 bg-white py-3 pl-11 pr-4 text-base text-ink outline-none placeholder:text-ink/35 focus:border-blue"
              aria-label="Search stories"
            />
          </div>
        </div>

        {/* Archive Heading */}
        <div className="flex items-end justify-between gap-6 py-10">
          <div>
            <p className="eyebrow text-green">
              Archive
            </p>

            <h2 className="display mt-2 text-3xl text-maroon md:text-4xl">
              Stories from the field.
            </h2>
          </div>

          <p className="hidden text-sm font-bold text-ink/45 sm:block">
            {filteredStories.length}{" "}
            {filteredStories.length === 1
              ? "story"
              : "stories"}
          </p>
        </div>

        {/* Active Filters */}
        {(category !== "All" ||
          year !== "All" ||
          programArea !== "All" ||
          search) && (
          <div className="mb-8 flex flex-wrap items-center gap-3">
            <p className="text-sm font-bold text-ink/45">
              Showing:
            </p>

            {category !== "All" && (
              <span className="border border-maroon/10 bg-cream px-3 py-2 text-xs font-extrabold text-maroon">
                {category}
              </span>
            )}

            {programArea !== "All" && (
              <span className="border border-blue/10 bg-blue/5 px-3 py-2 text-xs font-extrabold text-blue">
                {programArea}
              </span>
            )}

            {year !== "All" && (
              <span className="border border-maroon/10 bg-cream px-3 py-2 text-xs font-extrabold text-maroon">
                {year}
              </span>
            )}

            {search && (
              <span className="border border-maroon/10 bg-cream px-3 py-2 text-xs font-extrabold text-maroon">
                “{search}”
              </span>
            )}

            <button
              type="button"
              onClick={clearFilters}
              className="ml-1 text-sm font-extrabold text-blue hover:underline"
            >
              Clear all
            </button>
          </div>
        )}

        {/* Story Grid */}
        {filteredStories.length > 0 ? (
          <div className="grid gap-8 md:grid-cols-2">
            {filteredStories.map((story) => (
              <article
                key={story.slug}
                className="group overflow-hidden border border-maroon/10 bg-white transition hover:-translate-y-1"
              >
                <Link href={`/stories/${story.slug}`}>
                  <div className="aspect-[16/9] overflow-hidden bg-cream">
                    <img
                      src={story.image}
                      alt={story.title}
                      className="h-full w-full object-cover transition duration-500 group-hover:scale-[1.03]"
                    />
                  </div>
                </Link>

                <div className="p-7 md:p-8">
                  <div className="flex flex-wrap items-center gap-x-2 gap-y-1">
                    <p className="eyebrow text-green">
                      {story.type}
                    </p>

                    <span className="text-xs text-ink/30">
                      •
                    </span>

                    <p className="eyebrow text-ink/45">
                      {story.date}
                    </p>
                  </div>

                  <h3 className="display mt-4 text-2xl text-maroon md:text-3xl">
                    {story.title}
                  </h3>

                  <p className="mt-4 leading-7 text-ink/65">
                    {story.excerpt}
                  </p>

                  <div className="mt-6">
                    <p className="text-sm font-bold text-ink/45">
                      {story.category}
                    </p>
                  </div>

                  <Link
                    href={`/stories/${story.slug}`}
                    className="mt-5 inline-flex items-center gap-2 font-extrabold text-blue"
                  >
                    Read more
                    <ArrowUpRight size={16} />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        ) : (
          <div className="border border-maroon/10 bg-cream px-6 py-16 text-center">
            <p className="eyebrow text-green">
              No stories found
            </p>

            <h3 className="display mt-3 text-3xl text-maroon">
              Nothing matches your filters.
            </h3>

            <p className="mx-auto mt-4 max-w-lg leading-7 text-ink/60">
              Try another keyword or clear one of the
              archive filters.
            </p>

            <button
              type="button"
              onClick={clearFilters}
              className="mt-6 font-extrabold text-blue"
            >
              Clear all filters
            </button>
          </div>
        )}
      </section>

      <Footer />
    </main>
  );
}
