import { Header, Footer } from "../components";

export default function Framework() {
  return (
    <>
      <Header />

      <main className="bg-white">
        <section className="bg-maroon text-white">
          <div className="container-wide py-16 md:py-24">
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-gold">
              Our Development Framework
            </p>

            <h1 className="mt-3 text-4xl font-extrabold tracking-tight md:text-6xl">
              Global Goals. National Aspirations. Youth Participation.
            </h1>

            <p className="mt-6 max-w-3xl text-lg leading-7 text-white/80">
              Subang Philippines connects global development goals, the
              Philippines&apos; long-term aspirations, and meaningful youth
              participation with practical community action.
            </p>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
