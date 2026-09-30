"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowRight, ChevronDown, X } from "lucide-react";

const aboutNavigation = [
  {
    label: "About",
    href: "/about",
    description: "Who we are and what we stand for.",
  },
  {
    label: "Programs",
    href: "/programs",
    description: "Our areas of community action.",
  },
  {
    label: "Framework",
    href: "/framework",
    description: "The principles guiding our work.",
  },
  {
    label: "Impact",
    href: "/impact",
    description: "What our volunteers and communities have achieved.",
  },
];

const teamNavigation = [
  {
    label: "Leadership",
    href: "/leadership",
    description: "Meet the people serving Subang.",
  },
  {
    label: "Founder’s Corner",
    href: "/founder",
    description: "The story and perspective behind Subang.",
  },
];

const directNavigation = [
  { label: "Volunteer", href: "/volunteer" },
  { label: "Stories & Press", href: "/stories" },
];

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [mobileAboutOpen, setMobileAboutOpen] = useState(false);
  const [mobileTeamOpen, setMobileTeamOpen] = useState(false);

  function closeMenu() {
    setMenuOpen(false);
    setMobileAboutOpen(false);
    setMobileTeamOpen(false);
  }

  return (
    <header className="bg-maroon text-white">
      <div className="container-wide flex items-center justify-between py-5">
        {/* Logo + Brand */}
        <Link
          href="/"
          className="flex items-center gap-3 rounded-xl bg-cream px-3 py-2"
          onClick={closeMenu}
        >
          <img
            src="/assets/logo/subang-logo.png"
            alt="Subang Philippines logo"
            className="h-12 w-auto object-contain"
          />

          <span className="text-xl font-extrabold tracking-tight text-maroon">
            Subang <span className="text-gold">Philippines</span>
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-6 text-sm font-semibold md:flex">
          {/* About Ribbon */}
          <div className="group relative">
            <Link
              href="/about"
              className="flex items-center gap-1 py-3 transition-opacity hover:opacity-80"
            >
              About
              <ChevronDown
                size={15}
                className="transition-transform duration-200 group-hover:rotate-180"
              />
            </Link>

            <div className="pointer-events-none absolute left-1/2 top-full z-50 w-[620px] -translate-x-1/2 translate-y-2 opacity-0 transition-all duration-200 group-hover:pointer-events-auto group-hover:translate-y-0 group-hover:opacity-100">
              <div className="overflow-hidden rounded-b-2xl border-t-2 border-gold bg-cream p-6 text-maroon shadow-xl">
                <div className="mb-4">
                  <p className="text-xs font-bold uppercase tracking-[0.18em] text-green">
                    About Subang
                  </p>
                  <p className="mt-1 text-sm font-normal leading-6 text-ink/65">
                    Learn about our organization, programs, guiding framework,
                    and community impact.
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  {aboutNavigation.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      className="group/item rounded-xl border border-maroon/10 p-4 transition-colors hover:bg-maroon hover:text-white"
                    >
                      <div className="flex items-center justify-between gap-3">
                        <span className="font-bold">{item.label}</span>
                        <ArrowRight
                          size={16}
                          className="text-gold transition-transform group-hover/item:translate-x-1"
                        />
                      </div>

                      <p className="mt-2 text-xs font-normal leading-5 text-ink/55 group-hover/item:text-white/70">
                        {item.description}
                      </p>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Team Ribbon */}
          <div className="group relative">
            <button
              type="button"
              className="flex items-center gap-1 py-3 transition-opacity hover:opacity-80"
              aria-haspopup="true"
            >
              Team
              <ChevronDown
                size={15}
                className="transition-transform duration-200 group-hover:rotate-180"
              />
            </button>

            <div className="pointer-events-none absolute left-1/2 top-full z-50 w-[430px] -translate-x-1/2 translate-y-2 opacity-0 transition-all duration-200 group-hover:pointer-events-auto group-hover:translate-y-0 group-hover:opacity-100">
              <div className="overflow-hidden rounded-b-2xl border-t-2 border-gold bg-cream p-6 text-maroon shadow-xl">
                <div className="mb-4">
                  <p className="text-xs font-bold uppercase tracking-[0.18em] text-green">
                    Our Team
                  </p>
                  <p className="mt-1 text-sm font-normal leading-6 text-ink/65">
                    Meet the people helping lead and grow Subang Philippines.
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  {teamNavigation.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      className="group/item rounded-xl border border-maroon/10 p-4 transition-colors hover:bg-maroon hover:text-white"
                    >
                      <div className="flex items-center justify-between gap-3">
                        <span className="font-bold">{item.label}</span>
                        <ArrowRight
                          size={16}
                          className="text-gold transition-transform group-hover/item:translate-x-1"
                        />
                      </div>

                      <p className="mt-2 text-xs font-normal leading-5 text-ink/55 group-hover/item:text-white/70">
                        {item.description}
                      </p>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Direct Navigation */}
          {directNavigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="py-3 transition-opacity hover:opacity-80"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Desktop Connect + Mobile Menu Button */}
        <div className="flex items-center gap-3">
          <Link
            href="/connect"
            className="hidden border border-white/35 px-4 py-2 text-sm font-bold transition-colors hover:bg-white hover:text-maroon md:block"
          >
            Connect ↗
          </Link>

          <button
            type="button"
            onClick={() => setMenuOpen((open) => !open)}
            className="flex h-10 w-10 items-center justify-center md:hidden"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
          >
            {menuOpen ? <X size={24} /> : <span className="text-2xl">☰</span>}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {menuOpen && (
        <div className="border-t border-white/15 bg-maroon md:hidden">
          <nav className="container-wide flex flex-col py-4">
            {/* Mobile About */}
            <div className="border-b border-white/10">
              <div className="flex items-center justify-between">
                <Link
                  href="/about"
                  onClick={closeMenu}
                  className="py-4 text-base font-semibold"
                >
                  About
                </Link>

                <button
                  type="button"
                  onClick={() => setMobileAboutOpen((open) => !open)}
                  className="flex h-12 w-12 items-center justify-center"
                  aria-label={
                    mobileAboutOpen
                      ? "Collapse About submenu"
                      : "Expand About submenu"
                  }
                  aria-expanded={mobileAboutOpen}
                >
                  <ChevronDown
                    size={19}
                    className={`text-gold transition-transform duration-200 ${
                      mobileAboutOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>
              </div>

              {mobileAboutOpen && (
                <div className="mb-3 ml-4 border-l border-white/15 pl-4">
                  {aboutNavigation
                    .filter((item) => item.label !== "About")
                    .map((item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        onClick={closeMenu}
                        className="flex items-center justify-between py-3 text-sm font-semibold text-white/85"
                      >
                        <span>{item.label}</span>
                        <ArrowRight size={16} className="text-gold" />
                      </Link>
                    ))}
                </div>
              )}
            </div>

            {/* Mobile Team */}
            <div className="border-b border-white/10">
              <div className="flex items-center justify-between">
                <button
                  type="button"
                  onClick={() => setMobileTeamOpen((open) => !open)}
                  className="py-4 text-base font-semibold"
                  aria-expanded={mobileTeamOpen}
                >
                  Team
                </button>

                <button
                  type="button"
                  onClick={() => setMobileTeamOpen((open) => !open)}
                  className="flex h-12 w-12 items-center justify-center"
                  aria-label={
                    mobileTeamOpen
                      ? "Collapse Team submenu"
                      : "Expand Team submenu"
                  }
                  aria-expanded={mobileTeamOpen}
                >
                  <ChevronDown
                    size={19}
                    className={`text-gold transition-transform duration-200 ${
                      mobileTeamOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>
              </div>

              {mobileTeamOpen && (
                <div className="mb-3 ml-4 border-l border-white/15 pl-4">
                  {teamNavigation.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      onClick={closeMenu}
                      className="flex items-center justify-between py-3 text-sm font-semibold text-white/85"
                    >
                      <span>{item.label}</span>
                      <ArrowRight size={16} className="text-gold" />
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* Mobile Direct Navigation */}
            {directNavigation.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={closeMenu}
                className="flex items-center justify-between border-b border-white/10 py-4 text-base font-semibold"
              >
                <span>{item.label}</span>
                <ArrowRight size={17} className="text-gold" />
              </Link>
            ))}

            {/* Mobile Connect */}
            <Link
              href="/connect"
              onClick={closeMenu}
              className="mt-5 flex items-center justify-between border border-white/30 px-4 py-4 text-base font-bold"
            >
              <span>Connect</span>
              <ArrowRight size={17} className="text-gold" />
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}

export function Footer() {
  return (
    <footer className="bg-maroon px-5 pb-8 text-white/65">
      <div className="container-wide grid gap-8 border-t border-white/15 pt-8 md:grid-cols-3">
        <div>
          <p className="font-extrabold text-white">Subang Philippines</p>
          <p className="mt-3 text-sm leading-6">Live. Create. Inspire.</p>
        </div>

        <div className="text-sm leading-7">
          <p className="font-bold text-white">Explore</p>

          <Link className="block" href="/about">
            About
          </Link>

          <Link className="block" href="/programs">
            Programs
          </Link>

          <Link className="block" href="/leadership">
            Leadership
          </Link>

          <Link className="block" href="/founder">
            Founder’s Corner
          </Link>

          <Link className="block" href="/stories">
            Stories & Press
          </Link>
        </div>

        <div className="text-sm leading-7">
          <p className="font-bold text-white">Connect</p>

          <Link className="block" href="/connect">
            Volunteer & Partnerships
          </Link>

          <p>
            Official channels to be added from confirmed organizational
            accounts.
          </p>
        </div>
      </div>

      <div className="container-wide mt-8 flex flex-col justify-between gap-4 text-xs md:flex-row">
        <p>© 2026 Subang Philippines.</p>
        <p>Youth. Volunteerism. Community Action.</p>
      </div>
    </footer>
  );
}

export function PageIntro({
  eyebrow,
  title,
  text,
}: {
  eyebrow: string;
  title: string;
  text?: string;
}) {
  return (
    <section className="bg-cream py-20 md:py-28">
      <div className="container-wide">
        <p className="eyebrow text-green">{eyebrow}</p>

        <h1 className="display mt-5 max-w-4xl text-5xl leading-[1.02] text-maroon md:text-7xl">
          {title}
        </h1>

        {text && (
          <p className="mt-7 max-w-2xl text-lg leading-8 text-ink/70">
            {text}
          </p>
        )}
      </div>
    </section>
  );
}
