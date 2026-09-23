import { ArrowUpRight, Leaf, Users, Sprout, Globe2, Menu } from "lucide-react";

const programs = [
  { no: "01", title: "Youth Empowerment", text: "Creating meaningful spaces for young people to lead, participate, and shape the future of their communities.", icon: Users },
  { no: "02", title: "Environmental Sustainability", text: "Turning local action into lasting care for ecosystems, biodiversity, and natural resources.", icon: Leaf },
  { no: "03", title: "Community Resilience", text: "Supporting communities in becoming safer, more equitable, sustainable, and prepared for change.", icon: Sprout },
  { no: "04", title: "Innovation & Creativity", text: "Using ideas, storytelling, and practical solutions to address real community challenges.", icon: Globe2 }
];

export default function Home() {
  return (
    <main>
      <header className="bg-forest text-cream">
        <div className="container-wide flex items-center justify-between py-6">
          <a href="#" className="text-xl font-black tracking-tight">SUBANG<span className="text-sun">.</span></a>
          <nav className="hidden gap-7 text-sm md:flex">
            <a href="#about" className="hover:text-sun">About</a>
            <a href="#programs" className="hover:text-sun">Programs</a>
            <a href="#impact" className="hover:text-sun">Impact</a>
            <a href="#stories" className="hover:text-sun">Stories</a>
          </nav>
          <a href="#contact" className="hidden border border-cream/40 px-4 py-2 text-sm md:block">Connect with us ↗</a>
          <Menu className="md:hidden" size={22}/>
        </div>
      </header>

      <section className="grid-lines bg-forest text-cream">
        <div className="container-wide grid min-h-[650px] items-center gap-12 py-20 md:grid-cols-[1.1fr_.9fr]">
          <div>
            <p className="eyebrow mb-7 text-sun">Youth-led. Community-rooted. Future-focused.</p>
            <h1 className="display max-w-3xl text-6xl leading-[.94] md:text-8xl">Young people.<br/><span className="text-sun">Meaningful action.</span><br/>Stronger communities.</h1>
            <p className="mt-8 max-w-lg text-lg leading-8 text-cream/75">Subang Philippines is a youth-led movement working toward safer, equitable, sustainable, and resilient communities.</p>
            <div className="mt-10 flex flex-wrap gap-3">
              <a href="#about" className="bg-sun px-6 py-4 font-bold text-forest">Discover Subang ↗</a>
              <a href="#programs" className="border border-cream/40 px-6 py-4 font-bold">Explore our work</a>
            </div>
          </div>
          <div className="relative min-h-[360px] overflow-hidden bg-moss p-8">
            <div className="absolute -right-20 -top-20 h-72 w-72 rounded-full border-[45px] border-sun/70"/>
            <div className="absolute bottom-8 left-8 right-8 border-l-2 border-sun pl-5">
              <p className="eyebrow text-sun">Our guiding spirit</p>
              <p className="display mt-3 text-4xl">Live.<br/>Create.<br/>Inspire.</p>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="container-wide grid gap-12 py-28 md:grid-cols-2">
        <div><p className="eyebrow text-moss">01 / Who we are</p><h2 className="display mt-5 text-5xl leading-tight md:text-6xl">Change begins when people choose to act.</h2></div>
        <div className="self-end text-lg leading-8 text-ink/70"><p>Subang Philippines brings together young people, volunteers, partners, and communities to turn shared aspirations into practical action.</p><p className="mt-5">Anchored in the Sustainable Development Goals, Ambisyon Natin 2040, and meaningful youth participation, we believe progress is built through consistent, collaborative work.</p></div>
      </section>

      <section id="programs" className="bg-white py-24">
        <div className="container-wide">
          <p className="eyebrow text-moss">02 / Areas of action</p>
          <div className="mt-5 flex flex-col justify-between gap-5 md:flex-row md:items-end"><h2 className="display text-5xl md:text-6xl">From intention<br/>to impact.</h2><p className="max-w-sm text-ink/60">We work across interconnected areas because community challenges rarely exist in isolation.</p></div>
          <div className="mt-14 grid gap-px bg-forest/15 md:grid-cols-2">
            {programs.map(({no,title,text,icon:Icon}) => <article key={no} className="bg-white p-8 transition hover:bg-cream md:p-10"><div className="flex justify-between"><span className="eyebrow text-moss">{no}</span><Icon size={30} strokeWidth={1.5}/></div><h3 className="display mt-16 text-3xl">{title}</h3><p className="mt-4 leading-7 text-ink/65">{text}</p><a href="#contact" className="mt-8 inline-flex items-center gap-2 font-bold">Learn more <ArrowUpRight size={16}/></a></article>)}
          </div>
        </div>
      </section>

      <section id="impact" className="bg-sun py-24">
        <div className="container-wide">
          <p className="eyebrow text-forest/70">03 / Our impact</p>
          <h2 className="display mt-5 max-w-3xl text-5xl leading-tight md:text-7xl">Small actions become movements when people work together.</h2>
          <div className="mt-16 grid gap-8 border-t border-forest/30 pt-8 md:grid-cols-3">
            <div><p className="display text-6xl">300<span className="text-3xl">+</span></p><p className="mt-2 font-bold">SDG-aligned initiatives</p></div>
            <div><p className="display text-6xl">10<span className="text-3xl">+</span></p><p className="mt-2 font-bold">Years of volunteer action</p></div>
            <div><p className="display text-6xl">∞</p><p className="mt-2 font-bold">Possibilities through collaboration</p></div>
          </div>
          <p className="mt-10 max-w-2xl text-sm text-forest/70">Impact figures shown here are draft placeholders and should be reviewed and formally documented before publication.</p>
        </div>
      </section>

      <section id="stories" className="container-wide py-28">
        <p className="eyebrow text-moss">04 / Stories from the field</p>
        <div className="mt-5 grid gap-10 md:grid-cols-2"><h2 className="display text-5xl md:text-6xl">People are the heart of every story.</h2><p className="self-end text-lg leading-8 text-ink/65">Soon, this space will feature project stories, volunteer reflections, community voices, and updates from Subang chapters across the Philippines.</p></div>
        <div className="mt-14 grid gap-5 md:grid-cols-3">
          {["Community stories","Volunteer journals","Chapter updates"].map((item,i)=><div key={item} className="min-h-56 bg-forest p-7 text-cream"><p className="eyebrow text-sun">Coming soon / 0{i+1}</p><h3 className="display mt-20 text-3xl">{item}</h3></div>)}
        </div>
      </section>

      <section id="contact" className="bg-forest py-24 text-cream">
        <div className="container-wide grid gap-10 md:grid-cols-2"><div><p className="eyebrow text-sun">05 / Be part of the movement</p><h2 className="display mt-5 text-6xl leading-none md:text-7xl">There is work to do.<br/>Let's do it together.</h2></div><div className="self-end"><p className="text-lg leading-8 text-cream/70">Whether you are a young leader, community volunteer, institution, or potential partner, there is a place for meaningful collaboration.</p><a href="mailto:hello@subangphilippines.org" className="mt-8 inline-flex items-center gap-3 bg-sun px-6 py-4 font-bold text-forest">Start a conversation <ArrowUpRight size={18}/></a></div></div>
      </section>

      <footer className="bg-forest px-5 pb-8 text-cream/60"><div className="container-wide flex flex-col justify-between gap-5 border-t border-cream/20 pt-7 text-sm md:flex-row"><p>© 2026 Subang Philippines. Live. Create. Inspire.</p><p>Safer communities. Shared futures.</p></div></footer>
    </main>
  );
}