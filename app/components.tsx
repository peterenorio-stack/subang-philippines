"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowRight, X } from "lucide-react";

const navigation = [
  { label: "About", href: "/about" },
  { label: "Programs", href: "/programs" },
  { label: "Framework", href: "/framework" },
  { label: "Impact", href: "/impact" },
  { label: "Volunteer", href: "/volunteer" },
  { label: "Leadership", href: "/leadership" },
  { label: "Founder’s Corner", href: "/founder" },
  { label: "Stories & Press", href: "/stories" },
];

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  function closeMenu() {
    setMenuOpen(false);
  }

  return (
    <header className="bg-maroon text-white">
      <div className="container-wide flex items-center justify-between py-5">
        {/* Logo */}
        <Link
          href="/"
          className="flex items-center gap-3"
          onClick={closeMenu}
        >
          <img
            src="/assets/logo/subang-logo.png"
            alt="Subang Philippines logo"
            className="h-12 w-auto object-contain"
          />

          <span className="text-xl font-extrabold tracking-tight text-white">
            Subang <span className="text-gold">Philippines</span>
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-6 text-sm font-semibold md:flex">
          {navigation.map((item) => (
            <Link key={item.href} href={item.href}>
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Desktop Connect + Mobile Menu Button */}
        <div className="flex items-center gap-3">
          <Link
            href="/connect"
            className="hidden border border-white/35 px-4 py-2 text-sm font-bold md:block"
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
            {navigation.map((item) => (
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
