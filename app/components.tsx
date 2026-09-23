import Link from "next/link";
import { ArrowUpRight, Menu } from "lucide-react";

export function Header() {
  return (
    <header className="bg-maroon text-white">
      <div className="container-wide flex items-center justify-between py-5">
     <Link href="/" className="flex items-center gap-3">
  <img
    src="/assets/logo/subang-logo.png"
    alt="Subang Philippines logo"
    className="h-12 w-auto object-contain"
  />

  <span className="text-xl font-extrabold tracking-tight text-white">
    Subang Philippines<span className="text-gold">.</span>
  </span>
</Link>

        <nav className="hidden items-center gap-7 text-sm font-semibold md:flex">
          <Link href="/about">About</Link>
          <Link href="/programs">Programs</Link>
          <Link href="/impact">Impact</Link>
          <Link href="/leadership">Leadership</Link>
          <Link href="/founder">Founder’s Corner</Link>
          <Link href="/stories">Stories & Press</Link>
        </nav>

        <div className="flex items-center gap-3">
          <Link
            href="/connect"
            className="hidden border border-white/35 px-4 py-2 text-sm font-bold md:block"
          >
            Connect ↗
          </Link>

          <Menu className="md:hidden" size={22} />
        </div>
      </div>
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
