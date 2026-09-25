import { Header, Footer } from "../components";

const sdgs = [
  {
    number: 1,
    title: "No Poverty",
    description:
      "End poverty in all its forms and expand opportunities for vulnerable communities.",
  },
  {
    number: 2,
    title: "Zero Hunger",
    description:
      "Promote food security, sustainable agriculture, and improved access to nutritious food.",
  },
  {
    number: 3,
    title: "Good Health and Well-being",
    description:
      "Support healthier communities and promote well-being across all ages.",
  },
  {
    number: 4,
    title: "Quality Education",
    description:
      "Advance inclusive learning, skills development, and meaningful educational opportunities.",
  },
  {
    number: 5,
    title: "Gender Equality",
    description:
      "Promote equal opportunities, participation, and dignity for all.",
  },
  {
    number: 6,
    title: "Clean Water and Sanitation",
    description:
      "Support sustainable water resources, sanitation, and community health.",
  },
  {
    number: 7,
    title: "Affordable and Clean Energy",
    description:
      "Encourage accessible, sustainable, and innovative energy solutions.",
  },
  {
    number: 8,
    title: "Decent Work and Economic Growth",
    description:
      "Promote productive livelihoods, entrepreneurship, innovation, and inclusive economic opportunity.",
  },
  {
    number: 9,
    title: "Industry, Innovation and Infrastructure",
    description:
      "Encourage innovation, appropriate technologies, and resilient infrastructure.",
  },
  {
    number: 10,
    title: "Reduced Inequalities",
    description:
      "Promote social inclusion and reduce inequalities within communities.",
  },
  {
    number: 11,
    title: "Sustainable Cities and Communities",
    description:
      "Build safer, more inclusive, sustainable, and resilient communities.",
  },
  {
    number: 12,
    title: "Responsible Consumption and Production",
    description:
      "Promote sustainable resource use, waste reduction, and responsible production.",
  },
  {
    number: 13,
    title: "Climate Action",
    description:
      "Strengthen climate awareness, adaptation, mitigation, and community resilience.",
  },
  {
    number: 14,
    title: "Life Below Water",
    description:
      "Support the protection and sustainable use of marine and coastal ecosystems.",
  },
  {
    number: 15,
    title: "Life on Land",
    description:
      "Protect biodiversity, forests, ecosystems, and terrestrial resources.",
  },
  {
    number: 16,
    title: "Peace, Justice and Strong Institutions",
    description:
      "Promote peaceful communities, active citizenship, accountability, and inclusive institutions.",
  },
  {
    number: 17,
    title: "Partnerships for the Goals",
    description:
      "Build meaningful partnerships that accelerate sustainable development.",
  },
];

const centers = [
  {
    number: 1,
    title: "Health",
    description:
      "Promoting health awareness, well-being, and access to healthier communities.",
  },
  {
    number: 2,
    title: "Education",
    description:
      "Supporting learning opportunities, skills development, and youth education.",
  },
  {
    number: 3,
    title: "Economic Empowerment",
    description:
      "Creating pathways for entrepreneurship, livelihoods, innovation, and economic participation.",
  },
  {
    number: 4,
    title: "Social Inclusion & Equity",
    description:
      "Advancing inclusion, equal opportunity, and participation for diverse communities.",
  },
  {
    number: 5,
    title: "Peace-building & Security",
    description:
      "Strengthening peace, dialogue, community safety, and youth participation in peace-building.",
  },
  {
    number: 6,
    title: "Governance",
    description:
      "Encouraging transparent, participatory, responsive, and accountable governance.",
  },
  {
    number: 7,
    title: "Active Citizenship",
    description:
      "Mobilizing young people to participate meaningfully in community and civic life.",
  },
  {
    number: 8,
    title: "Agriculture",
    description:
      "Supporting sustainable agriculture, food systems, food security, and rural development.",
  },
  {
    number: 9,
    title: "Environment",
    description:
      "Promoting environmental stewardship, conservation, climate action, and sustainability.",
  },
  {
    number: 10,
    title: "Global Mobility",
    description:
      "Connecting young people with opportunities, networks, learning, and engagement beyond their communities.",
  },
];

const ambitionAreas = [
  {
    title: "Matatag",
    subtitle: "Strong and Resilient",
    description:
      "Communities that are rooted in strong social relationships, capable of responding to challenges, and prepared for shocks and disasters.",
  },
  {
    title: "Maginhawa",
    subtitle: "Comfortable and Prosperous",
    description:
      "Communities where people can access opportunities, quality services, decent livelihoods, education, health, and a better quality of life.",
  },
  {
    title: "Panatag",
    subtitle: "Secure and Peaceful",
    description:
      "Communities where people feel safe, enjoy peace and stability, and can pursue their aspirations with confidence.",
  },
];

const frameworkMatrix = [
  {
    framework: "Sustainable Development Goals",
    role: "Global development direction",
    focus:
      "17 interconnected goals for people, planet, prosperity, peace, and partnerships.",
  },
  {
    framework: "Ambisyon Natin 2040",
    role: "National aspiration",
    focus:
      "A long-term Filipino vision of a Matatag, Maginhawa at Panatag na Buhay.",
  },
  {
    framework: "10 Centers of Youth Participation",
    role: "Youth participation framework",
    focus:
      "Ten priority areas that provide pathways for meaningful youth participation in development.",
  },
];

const initiatives = [
  {
    title: "Environmental Sustainability",
    description:
      "Community-based environmental initiatives including bamboo propagation, native tree growing, riparian rehabilitation, coastal action, and ecological stewardship.",
  },
  {
    title: "Food Security & Agriculture",
    description:
      "Initiatives that connect young people with sustainable agriculture, food production, community food systems, and practical solutions to food insecurity.",
  },
  {
    title: "Climate & Disaster Resilience",
    description:
      "Youth engagement in disaster risk reduction, climate action, preparedness, resilience-building, and community-based risk management.",
  },
  {
    title: "Youth Leadership & Participation",
    description:
      "Leadership development, civic engagement, education, creative expression, and opportunities for young people to contribute to community development.",
  },
  {
    title: "Volunteerism",
    description:
      "Mobilizing young people and community volunteers to turn time, skills, ideas, and collective action into meaningful development outcomes.",
  },
  {
    title: "Innovation & Technology",
    description:
      "Encouraging practical innovation, science and technology, and locally relevant solutions to community challenges.",
  },
];

export default function Framework() {
  return (
    <>
      <Header />

      <main className="bg-white text-slate-900">
        {/* HERO */}
        <section className="relative overflow-hidden bg-[#5b1734]">
          <div className="mx-auto max-w-7xl px-6 py-24 sm:px-8 lg:px-12 lg:py-32">
            <div className="max-w-4xl">
              <p className="mb-5 text-sm font-semibold uppercase tracking-[0.25em] text-[#d4af37]">
                Our Framework
              </p>

              <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
                Global Goals. National Aspirations. Youth Participation.
              </h1>

              <p className="mt-7 max-w-3xl text-lg leading-8 text-white/80 sm:text-xl">
                Subang Philippines connects global development goals, the
                Philippines&apos; long-term national aspiration, and meaningful
                youth participation into one framework for community action.
              </p>
            </div>
          </div>
        </section>

        {/* THREE FRAMEWORKS */}
        <section className="mx-auto max-w-7xl px-6 py-20 sm:px-8 lg:px-12 lg:py-24">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#8b2448]">
              The Subang Framework
            </p>

            <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
              Three frameworks. One direction.
            </h2>

            <p className="mt-5 text-lg leading-8 text-slate-600">
              Subang translates broad development aspirations into practical
              community action by working at the intersection of global goals,
              national aspirations, and youth participation.
            </p>
          </div>

          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {/* SDGs */}
            <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
              <div className="flex h-56 items-center justify-center bg-slate-50 p-8">
                <img
                  src="/assets/framework/sdgs-wheel.png"
                  alt="United Nations Sustainable Development Goals"
                  className="h-full w-full object-contain"
                />
              </div>

              <div className="p-7">
                <p className="text-sm font-semibold uppercase tracking-wider text-[#8b2448]">
                  Global Framework
                </p>

                <h3 className="mt-2 text-2xl font-bold">
                  Sustainable Development Goals
                </h3>

                <p className="mt-4 leading-7 text-slate-600">
                  The 17 Sustainable Development Goals provide Subang with a
                  globally recognized direction for sustainable and inclusive
                  development.
                </p>
              </div>
            </div>

            {/* AMBISION */}
            <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
              <div className="flex h-56 items-center justify-center bg-slate-50 p-8">
                <img
                  src="/assets/framework/ambisyon-natin-2040.png"
                  alt="Ambisyon Natin 2040"
                  className="h-full w-full object-contain"
                />
              </div>

              <div className="p-7">
                <p className="text-sm font-semibold uppercase tracking-wider text-[#8b2448]">
                  National Aspiration
                </p>

                <h3 className="mt-2 text-2xl font-bold">
                  Ambisyon Natin 2040
                </h3>

                <p className="mt-4 leading-7 text-slate-600">
                  The long-term Filipino vision of a{" "}
                  <span className="font-semibold">
                    Matatag, Maginhawa at Panatag na Buhay
                  </span>{" "}
                  provides a national context for Subang&apos;s development
                  work.
                </p>
              </div>
            </div>

            {/* 10 CENTERS */}
            <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
              <div className="flex h-56 items-center justify-center bg-slate-50 p-5">
                <img
                  src="/assets/framework/10-centers-youth-participation.jpg"
                  alt="10 Centers of Youth Participation"
                  className="h-full w-full object-contain"
                />
              </div>

              <div className="p-7">
                <p className="text-sm font-semibold uppercase tracking-wider text-[#8b2448]">
                  Youth Participation
                </p>

                <h3 className="mt-2 text-2xl font-bold">
                  10 Centers of Youth Participation
                </h3>

                <p className="mt-4 leading-7 text-slate-600">
                  The National Youth Commission&apos;s framework provides
                  concrete areas through which young people can participate in
                  development.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* HOW THEY CONNECT */}
        <section className="bg-slate-50">
          <div className="mx-auto max-w-7xl px-6 py-20 sm:px-8 lg:px-12 lg:py-24">
            <div className="max-w-3xl">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#8b2448]">
                How They Connect
              </p>

              <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
                From aspiration to action.
              </h2>

              <p className="mt-5 text-lg leading-8 text-slate-600">
                These frameworks serve different purposes, but work together to
                guide how Subang understands problems, designs initiatives,
                engages young people, and measures meaningful development.
              </p>
            </div>

            <div className="mt-12 grid gap-6 md:grid-cols-3">
              <div className="rounded-2xl bg-white p-7 shadow-sm ring-1 ring-slate-200">
                <div className="text-sm font-bold uppercase tracking-wider text-[#8b2448]">
                  01
                </div>
                <h3 className="mt-3 text-xl font-bold">Global Direction</h3>
                <p className="mt-3 leading-7 text-slate-600">
                  The SDGs help identify the broader development challenge and
                  the global goals to which an initiative contributes.
                </p>
              </div>

              <div className="rounded-2xl bg-white p-7 shadow-sm ring-1 ring-slate-200">
                <div className="text-sm font-bold uppercase tracking-wider text-[#8b2448]">
                  02
                </div>
                <h3 className="mt-3 text-xl font-bold">National Context</h3>
                <p className="mt-3 leading-7 text-slate-600">
                  Ambisyon Natin 2040 connects community action with the
                  Philippines&apos; long-term vision for the lives Filipinos
                  aspire to have.
                </p>
              </div>

              <div className="rounded-2xl bg-white p-7 shadow-sm ring-1 ring-slate-200">
                <div className="text-sm font-bold uppercase tracking-wider text-[#8b2448]">
                  03
                </div>
                <h3 className="mt-3 text-xl font-bold">Youth Action</h3>
                <p className="mt-3 leading-7 text-slate-600">
                  The 10 Centers provide practical pathways for young people to
                  participate, lead, innovate, and contribute.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* AMBISION */}
        <section className="mx-auto max-w-7xl px-6 py-20 sm:px-8 lg:px-12 lg:py-24">
          <div className="grid items-center gap-12 lg:grid-cols-[0.8fr_1.2fr]">
            <div>
              <img
                src="/assets/framework/ambisyon-natin-2040.png"
                alt="Ambisyon Natin 2040"
                className="mx-auto max-h-72 w-full object-contain"
              />
            </div>

            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#8b2448]">
                Ambisyon Natin 2040
              </p>

              <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
                Matatag, Maginhawa at Panatag na Buhay
              </h2>

              <p className="mt-5 text-lg leading-8 text-slate-600">
                Subang sees community development as part of a larger national
                aspiration. Strong communities, meaningful opportunities,
                sustainable livelihoods, quality education, health, peace,
                security, and resilience all contribute to the kind of future
                envisioned by Ambisyon Natin 2040.
              </p>

              <div className="mt-8 grid gap-4 sm:grid-cols-3">
                {ambitionAreas.map((area) => (
                  <div
                    key={area.title}
                    className="rounded-2xl border border-slate-200 p-5"
                  >
                    <h3 className="text-xl font-bold text-[#8b2448]">
                      {area.title}
                    </h3>

                    <p className="mt-1 text-sm font-semibold text-slate-900">
                      {area.subtitle}
                    </p>

                    <p className="mt-3 text-sm leading-6 text-slate-600">
                      {area.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* SDGs */}
        <section className="bg-[#faf8f9]">
          <div className="mx-auto max-w-7xl px-6 py-20 sm:px-8 lg:px-12 lg:py-24">
            <div className="grid items-center gap-10 lg:grid-cols-[0.65fr_1.35fr]">
              <div className="flex justify-center">
                <img
                  src="/assets/framework/sdgs-wheel.png"
                  alt="United Nations Sustainable Development Goals wheel"
                  className="w-full max-w-sm object-contain"
                />
              </div>

              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#8b2448]">
                  Sustainable Development Goals
                </p>

                <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
                  17 Goals for a Better Future
                </h2>

                <p className="mt-5 text-lg leading-8 text-slate-600">
                  Subang aligns its initiatives with the SDGs to connect local
                  action with global development priorities. Different
                  initiatives may contribute to several goals simultaneously,
                  reflecting the interconnected nature of sustainable
                  development.
                </p>
              </div>
            </div>

            <div className="mt-14 grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6">
              {sdgs.map((sdg) => (
                <div
                  key={sdg.number}
                  id={`sdg-${String(sdg.number).padStart(2, "0")}`}
                  className="scroll-mt-24 overflow-hidden rounded-xl bg-white shadow-sm ring-1 ring-slate-200 transition hover:-translate-y-1 hover:shadow-md"
                >
                  <div className="aspect-square bg-slate-50">
                    <img
                      src={`/assets/framework/sdgs/sdg-${String(
                        sdg.number
                      ).padStart(2, "0")}.jpg`}
                      alt={`Sustainable Development Goal ${sdg.number}: ${sdg.title}`}
                      className="h-full w-full object-cover"
                    />
                  </div>

                  <div className="p-4">
                    <p className="text-xs font-bold uppercase tracking-wider text-[#8b2448]">
                      SDG {sdg.number}
                    </p>

                    <h3 className="mt-1 text-sm font-bold leading-5 text-slate-900">
                      {sdg.title}
                    </h3>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-14 rounded-2xl bg-[#5b1734] p-8 text-white sm:p-10">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#d4af37]">
                Strong Areas of Contribution
              </p>

              <h3 className="mt-3 text-2xl font-bold sm:text-3xl">
                Where Subang&apos;s work connects most directly
              </h3>

              <div className="mt-7 grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
                {[
                  "SDG 2 · Zero Hunger",
                  "SDG 4 · Quality Education",
                  "SDG 8 · Decent Work",
                  "SDG 9 · Innovation",
                  "SDG 11 · Sustainable Communities",
                  "SDG 12 · Responsible Consumption",
                  "SDG 13 · Climate Action",
                  "SDG 15 · Life on Land",
                  "SDG 16 · Strong Institutions",
                  "SDG 17 · Partnerships",
                ].map((item) => (
                  <div
                    key={item}
                    className="rounded-xl border border-white/15 bg-white/10 px-4 py-3 text-sm leading-5 text-white/90"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* 10 CENTERS */}
        <section className="mx-auto max-w-7xl px-6 py-20 sm:px-8 lg:px-12 lg:py-24">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#8b2448]">
              National Youth Commission
            </p>

            <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
              10 Centers of Youth Participation
            </h2>

            <p className="mt-5 text-lg leading-8 text-slate-600">
              Youth participation becomes meaningful when young people have
              clear spaces to contribute. Subang uses the 10 Centers as a
              practical guide for connecting volunteer action with the
              different dimensions of youth development.
            </p>
          </div>

          <div className="mt-12 overflow-hidden rounded-2xl border border-slate-200 bg-slate-50 p-5 shadow-sm sm:p-8">
            <img
              src="/assets/framework/10-centers-youth-participation.jpg"
              alt="National Youth Commission 10 Centers of Youth Participation"
              className="mx-auto max-h-[520px] w-full object-contain"
            />
          </div>

          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {centers.map((center) => (
              <div
                key={center.number}
                className="rounded-2xl border border-slate-200 bg-white p-6 transition hover:-translate-y-1 hover:shadow-md"
              >
                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#5b1734] text-sm font-bold text-white">
                    {center.number}
                  </div>

                  <div>
                    <h3 className="text-lg font-bold text-slate-900">
                      {center.title}
                    </h3>

                    <p className="mt-2 text-sm leading-6 text-slate-600">
                      {center.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* FRAMEWORK MATRIX */}
        <section className="bg-slate-50">
          <div className="mx-auto max-w-7xl px-6 py-20 sm:px-8 lg:px-12 lg:py-24">
            <div className="max-w-3xl">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#8b2448]">
                Framework Matrix
              </p>

              <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
                How the three frameworks work together
              </h2>
            </div>

            <div className="mt-10 overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
              <div className="overflow-x-auto">
                <table className="w-full min-w-[760px] text-left">
                  <thead className="bg-[#5b1734] text-white">
                    <tr>
                      <th className="px-6 py-5 text-sm font-semibold">
                        Framework
                      </th>
                      <th className="px-6 py-5 text-sm font-semibold">
                        Role
                      </th>
                      <th className="px-6 py-5 text-sm font-semibold">
                        Focus
                      </th>
                    </tr>
                  </thead>

                  <tbody className="divide-y divide-slate-200">
                    {frameworkMatrix.map((row) => (
                      <tr key={row.framework}>
                        <td className="px-6 py-6 font-bold text-slate-900">
                          {row.framework}
                        </td>

                        <td className="px-6 py-6 text-sm font-semibold text-[#8b2448]">
                          {row.role}
                        </td>

                        <td className="px-6 py-6 text-sm leading-6 text-slate-600">
                          {row.focus}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </section>

        {/* INITIATIVES */}
        <section className="mx-auto max-w-7xl px-6 py-20 sm:px-8 lg:px-12 lg:py-24">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#8b2448]">
              Framework in Practice
            </p>

            <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
              Turning frameworks into community action
            </h2>

            <p className="mt-5 text-lg leading-8 text-slate-600">
              The framework is not simply a set of references. It helps shape
              the areas in which Subang develops programs, builds partnerships,
              and creates opportunities for young people and volunteers to
              contribute.
            </p>
          </div>

          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {initiatives.map((initiative) => (
              <div
                key={initiative.title}
                className="rounded-2xl border border-slate-200 bg-white p-7 shadow-sm"
              >
                <h3 className="text-xl font-bold text-slate-900">
                  {initiative.title}
                </h3>

                <p className="mt-3 leading-7 text-slate-600">
                  {initiative.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* CLOSING CTA */}
        <section className="bg-[#5b1734]">
          <div className="mx-auto max-w-5xl px-6 py-20 text-center sm:px-8 lg:py-24">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#d4af37]">
              Live. Create. Inspire.
            </p>

            <h2 className="mt-4 text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Development begins when people choose to participate.
            </h2>

            <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-white/75">
              Subang brings together young people, volunteers, communities,
              institutions, and partners to transform shared aspirations into
              meaningful action.
            </p>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
