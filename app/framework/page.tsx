import { Header, Footer } from "../components";

const sdgs = [
  ["01", "No Poverty", "End poverty in all its forms everywhere."],
  ["02", "Zero Hunger", "End hunger, achieve food security, and promote sustainable agriculture."],
  ["03", "Good Health and Well-being", "Promote healthy lives and well-being for all."],
  ["04", "Quality Education", "Ensure inclusive and equitable quality education and lifelong learning."],
  ["05", "Gender Equality", "Achieve gender equality and empower women and girls."],
  ["06", "Clean Water and Sanitation", "Ensure availability and sustainable management of water and sanitation."],
  ["07", "Affordable and Clean Energy", "Ensure access to affordable, reliable, sustainable, and modern energy."],
  ["08", "Decent Work and Economic Growth", "Promote sustained, inclusive, and sustainable economic growth and decent work."],
  ["09", "Industry, Innovation and Infrastructure", "Build resilient infrastructure and foster innovation."],
  ["10", "Reduced Inequalities", "Reduce inequality within and among countries."],
  ["11", "Sustainable Cities and Communities", "Make communities inclusive, safe, resilient, and sustainable."],
  ["12", "Responsible Consumption and Production", "Ensure sustainable consumption and production patterns."],
  ["13", "Climate Action", "Take urgent action to combat climate change and its impacts."],
  ["14", "Life Below Water", "Conserve and sustainably use oceans, seas, and marine resources."],
  ["15", "Life on Land", "Protect, restore, and sustainably manage terrestrial ecosystems."],
  ["16", "Peace, Justice and Strong Institutions", "Promote peaceful and inclusive societies and accountable institutions."],
  ["17", "Partnerships for the Goals", "Strengthen implementation through global partnerships."],
];

const centers = [
  ["01", "Health", "Promoting healthy communities and supporting youth participation in health-related action."],
  ["02", "Education", "Advancing learning opportunities, skills development, knowledge sharing, and youth education."],
  ["03", "Economic Empowerment", "Creating pathways for young people to develop livelihoods, entrepreneurship, innovation, and economic opportunities."],
  ["04", "Social Inclusion & Equity", "Ensuring that young people and communities can participate meaningfully regardless of circumstance."],
  ["05", "Peace-building & Security", "Supporting peaceful communities, disaster preparedness, resilience, and constructive youth engagement."],
  ["06", "Governance", "Encouraging young people to understand, participate in, and contribute to governance."],
  ["07", "Active Citizenship", "Strengthening volunteerism, civic engagement, community service, and responsible citizenship."],
  ["08", "Agriculture", "Promoting sustainable agriculture, food security, food systems innovation, and rural development."],
  ["09", "Environment", "Mobilizing youth for environmental protection, restoration, conservation, and climate action."],
  ["10", "Global Mobility", "Connecting young Filipinos with opportunities for exchange, collaboration, learning, and participation beyond their communities."],
];

const ambitionAreas = [
  {
    title: "Matatag",
    label: "Strong and Resilient",
    text: "A Philippines where people, communities, and institutions are capable of facing challenges, adapting to change, and building a secure future.",
  },
  {
    title: "Maginhawa",
    label: "Comfortable and Prosperous",
    text: "A Philippines where people have opportunities to improve their quality of life through education, livelihoods, innovation, and inclusive economic development.",
  },
  {
    title: "Panatag",
    label: "Secure and Peaceful",
    text: "A Philippines where people can live with security, peace, confidence, and trust in their communities and institutions.",
  },
];

const frameworkMatrix = [
  {
    area: "Food Security & Agriculture",
    ambition: "Maginhawa",
    sdgs: "SDG 2, 8, 12",
    centers: "Agriculture, Economic Empowerment",
  },
  {
    area: "Environmental Sustainability",
    ambition: "Matatag, Panatag",
    sdgs: "SDG 6, 11, 12, 13, 14, 15",
    centers: "Environment, Agriculture",
  },
  {
    area: "Climate & Disaster Resilience",
    ambition: "Panatag",
    sdgs: "SDG 11, 13",
    centers: "Peace-building & Security, Environment",
  },
  {
    area: "Youth Leadership",
    ambition: "Matatag",
    sdgs: "SDG 4, 10, 16, 17",
    centers: "Education, Governance, Active Citizenship",
  },
  {
    area: "Volunteerism",
    ambition: "Matatag",
    sdgs: "SDG 10, 11, 16, 17",
    centers: "Active Citizenship, Social Inclusion & Equity",
  },
  {
    area: "Science & Innovation",
    ambition: "Maginhawa",
    sdgs: "SDG 4, 8, 9",
    centers: "Education, Economic Empowerment",
  },
  {
    area: "Peace & Civic Participation",
    ambition: "Matatag, Panatag",
    sdgs: "SDG 16, 17",
    centers: "Peace-building & Security, Governance, Active Citizenship",
  },
  {
    area: "Creative & Media Education",
    ambition: "Matatag, Maginhawa",
    sdgs: "SDG 4, 10, 16",
    centers: "Education, Active Citizenship, Global Mobility",
  },
];

const initiatives = [
  {
    title: "Paglaum Farm",
    text: "A community-oriented food security initiative connecting sustainable agriculture, local production, and support for students.",
    sdgs: "SDG 2 • SDG 8 • SDG 12",
    centers: "Agriculture • Economic Empowerment",
  },
  {
    title: "Bamboo & Native Tree Restoration",
    text: "Environmental initiatives involving bamboo propagation, riparian restoration, and native tree growing to strengthen ecosystems and community resilience.",
    sdgs: "SDG 11 • SDG 13 • SDG 15",
    centers: "Environment • Agriculture",
  },
  {
    title: "Community Composting",
    text: "Microbial composting initiatives that convert organic waste into useful resources while encouraging responsible consumption and production.",
    sdgs: "SDG 12 • SDG 13 • SDG 15",
    centers: "Environment • Agriculture",
  },
  {
    title: "Youth Leadership & Volunteerism",
    text: "Leadership development, volunteer mobilization, civic participation, and community-based action led by young people.",
    sdgs: "SDG 4 • SDG 10 • SDG 16 • SDG 17",
    centers: "Education • Governance • Active Citizenship",
  },
  {
    title: "Climate & Disaster Resilience",
    text: "Youth participation in disaster preparedness, risk reduction, resilience education, and community-based resilience initiatives.",
    sdgs: "SDG 11 • SDG 13",
    centers: "Peace-building & Security • Environment",
  },
  {
    title: "Creative & Media Education",
    text: "Skills development through filmmaking, storytelling, communications, and creative media that give young people platforms to express community experiences.",
    sdgs: "SDG 4 • SDG 10 • SDG 16",
    centers: "Education • Active Citizenship",
  },
];

export default function Framework() {
  return (
    <>
      <Header />

      <main className="bg-white text-ink">
        {/* HERO */}
        <section className="bg-maroon text-white">
          <div className="container-wide py-16 md:py-24">
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-gold">
              Our Development Framework
            </p>

            <h1 className="mt-3 max-w-5xl text-4xl font-extrabold tracking-tight md:text-6xl">
              Global Goals. National Aspirations. Youth Participation.
            </h1>

            <p className="mt-6 max-w-3xl text-lg leading-7 text-white/80">
              Subang Philippines connects global development goals, the
              Philippines&apos; long-term aspirations, and meaningful youth
              participation with practical community action.
            </p>
          </div>
        </section>

        {/* THREE FRAMEWORKS */}
        <section className="border-b border-black/10 bg-paper">
          <div className="container-wide py-14 md:py-20">
            <div className="grid gap-5 md:grid-cols-3">
              <div className="border border-black/10 bg-white p-7">
                <p className="text-xs font-bold uppercase tracking-[0.16em] text-maroon">
                  National Vision
                </p>
                <h2 className="mt-3 text-2xl font-extrabold">
                  Ambisyon Natin 2040
                </h2>
                <p className="mt-3 text-sm leading-6 text-ink/65">
                  The Philippines&apos; long-term vision for a strongly rooted,
                  comfortable, and secure life for Filipinos.
                </p>
              </div>

              <div className="border border-black/10 bg-white p-7">
                <p className="text-xs font-bold uppercase tracking-[0.16em] text-maroon">
                  Global Framework
                </p>
                <h2 className="mt-3 text-2xl font-extrabold">
                  UN Sustainable Development Goals
                </h2>
                <p className="mt-3 text-sm leading-6 text-ink/65">
                  The 17 global goals that provide a shared framework for
                  ending poverty, protecting the planet, and improving lives.
                </p>
              </div>

              <div className="border border-black/10 bg-white p-7">
                <p className="text-xs font-bold uppercase tracking-[0.16em] text-maroon">
                  Youth Participation
                </p>
                <h2 className="mt-3 text-2xl font-extrabold">
                  10 Centers of Youth Participation
                </h2>
                <p className="mt-3 text-sm leading-6 text-ink/65">
                  A youth participation framework covering key areas where
                  young people can contribute to national development.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* FRAMEWORK FLOW */}
        <section>
          <div className="container-wide py-16 md:py-20">
            <div className="max-w-3xl">
              <p className="text-sm font-bold uppercase tracking-[0.18em] text-maroon">
                How We Connect Them
              </p>

              <h2 className="mt-3 text-3xl font-extrabold tracking-tight md:text-4xl">
                Frameworks guide us. Communities define the work.
              </h2>

              <p className="mt-5 text-base leading-7 text-ink/65">
                Subang Philippines uses these frameworks as a common language
                for designing, connecting, and communicating community
                initiatives. They help translate broad development aspirations
                into opportunities for young people and volunteers to act.
              </p>
            </div>

            <div className="mt-10 grid gap-4 md:grid-cols-4">
              {[
                ["01", "Global", "UN Sustainable Development Goals"],
                ["02", "National", "Ambisyon Natin 2040"],
                ["03", "Youth", "10 Centers of Youth Participation"],
                ["04", "Action", "Community-led Programs"],
              ].map(([number, title, text]) => (
                <div
                  key={number}
                  className="border border-black/10 p-6"
                >
                  <p className="text-sm font-extrabold text-maroon">{number}</p>
                  <h3 className="mt-5 text-xl font-extrabold">{title}</h3>
                  <p className="mt-2 text-sm leading-6 text-ink/60">{text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* AMBISYON */}
        <section className="bg-paper">
          <div className="container-wide py-16 md:py-20">
            <div className="max-w-3xl">
              <p className="text-sm font-bold uppercase tracking-[0.18em] text-maroon">
                01 / Ambisyon Natin 2040
              </p>

              <h2 className="mt-3 text-3xl font-extrabold tracking-tight md:text-4xl">
                Matatag, Maginhawa at Panatag na Buhay
              </h2>

              <p className="mt-5 text-base leading-7 text-ink/65">
                Ambisyon Natin 2040 provides the Philippines with a long-term
                vision of the future Filipinos aspire to have. Subang
                Philippines connects this national aspiration with community
                action by working on resilience, livelihoods, education,
                environmental sustainability, food security, and meaningful
                citizenship.
              </p>
            </div>

            <div className="mt-10 grid gap-5 md:grid-cols-3">
              {ambitionAreas.map((item) => (
                <div
                  key={item.title}
                  className="border border-black/10 bg-white p-7"
                >
                  <p className="text-3xl font-extrabold text-maroon">
                    {item.title}
                  </p>
                  <p className="mt-2 text-sm font-bold uppercase tracking-wide text-gold-dark">
                    {item.label}
                  </p>
                  <p className="mt-5 text-sm leading-6 text-ink/65">
                    {item.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SDGs */}
        <section>
          <div className="container-wide py-16 md:py-20">
            <div className="max-w-3xl">
              <p className="text-sm font-bold uppercase tracking-[0.18em] text-maroon">
                02 / UN Sustainable Development Goals
              </p>

              <h2 className="mt-3 text-3xl font-extrabold tracking-tight md:text-4xl">
                17 Goals. One shared agenda for sustainable development.
              </h2>

              <p className="mt-5 text-base leading-7 text-ink/65">
                The Sustainable Development Goals provide a global framework
                for addressing interconnected social, economic, and
                environmental challenges. Subang Philippines uses the SDGs to
                align community initiatives with a wider development agenda.
              </p>
            </div>

            <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {sdgs.map(([number, title, text]) => (
                <div
                  key={number}
                  className="border border-black/10 bg-white p-5"
                >
                  <div className="flex items-start gap-4">
                    <span className="text-sm font-extrabold text-maroon">
                      {number}
                    </span>

                    <div>
                      <h3 className="font-extrabold">{title}</h3>
                      <p className="mt-2 text-sm leading-6 text-ink/60">
                        {text}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-12 border border-maroon/20 bg-maroon p-7 text-white md:p-9">
              <p className="text-sm font-bold uppercase tracking-[0.16em] text-gold">
                Subang Philippines
              </p>

              <h3 className="mt-3 text-2xl font-extrabold">
                Areas of direct contribution
              </h3>

              <p className="mt-4 max-w-3xl text-sm leading-6 text-white/75">
                While community development is interconnected across the
                entire SDG framework, Subang Philippines has particularly
                direct programmatic connections with the following goals.
              </p>

              <div className="mt-7 flex flex-wrap gap-3">
                {[
                  "SDG 2",
                  "SDG 4",
                  "SDG 8",
                  "SDG 9",
                  "SDG 11",
                  "SDG 12",
                  "SDG 13",
                  "SDG 15",
                  "SDG 16",
                  "SDG 17",
                ].map((item) => (
                  <span
                    key={item}
                    className="border border-white/20 px-4 py-2 text-sm font-bold"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CENTERS */}
        <section className="bg-paper">
          <div className="container-wide py-16 md:py-20">
            <div className="max-w-3xl">
              <p className="text-sm font-bold uppercase tracking-[0.18em] text-maroon">
                03 / 10 Centers of Youth Participation
              </p>

              <h2 className="mt-3 text-3xl font-extrabold tracking-tight md:text-4xl">
                Youth participation has many entry points.
              </h2>

              <p className="mt-5 text-base leading-7 text-ink/65">
                Subang Philippines uses the 10 Centers of Youth Participation
                as a way to understand where young people can meaningfully
                contribute to development, governance, community action, and
                nation-building.
              </p>
            </div>

            <div className="mt-10 grid gap-4 md:grid-cols-2">
              {centers.map(([number, title, text]) => (
                <div
                  key={number}
                  className="border border-black/10 bg-white p-6"
                >
                  <div className="flex gap-5">
                    <span className="pt-1 text-sm font-extrabold text-maroon">
                      {number}
                    </span>

                    <div>
                      <h3 className="text-xl font-extrabold">{title}</h3>
                      <p className="mt-2 text-sm leading-6 text-ink/60">
                        {text}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* MATRIX */}
        <section>
          <div className="container-wide py-16 md:py-20">
            <div className="max-w-3xl">
              <p className="text-sm font-bold uppercase tracking-[0.18em] text-maroon">
                The Subang Philippines Framework
              </p>

              <h2 className="mt-3 text-3xl font-extrabold tracking-tight md:text-4xl">
                One community action can advance several goals.
              </h2>

              <p className="mt-5 text-base leading-7 text-ink/65">
                Development challenges rarely exist in isolation. Our
                initiatives therefore connect national aspirations, SDGs, and
                youth participation rather than treating them as separate
                agendas.
              </p>
            </div>

            <div className="mt-10 overflow-x-auto border border-black/10">
              <table className="w-full min-w-[760px] border-collapse text-left">
                <thead>
                  <tr className="bg-maroon text-white">
                    <th className="px-5 py-4 text-sm font-bold">
                      Development Area
                    </th>
                    <th className="px-5 py-4 text-sm font-bold">
                      Ambisyon
                    </th>
                    <th className="px-5 py-4 text-sm font-bold">
                      SDGs
                    </th>
                    <th className="px-5 py-4 text-sm font-bold">
                      Youth Participation
                    </th>
                  </tr>
                </thead>

                <tbody>
                  {frameworkMatrix.map((item, index) => (
                    <tr
                      key={item.area}
                      className={index % 2 === 0 ? "bg-white" : "bg-paper"}
                    >
                      <td className="border-t border-black/10 px-5 py-5 text-sm font-bold">
                        {item.area}
                      </td>
                      <td className="border-t border-black/10 px-5 py-5 text-sm text-ink/65">
                        {item.ambition}
                      </td>
                      <td className="border-t border-black/10 px-5 py-5 text-sm text-ink/65">
                        {item.sdgs}
                      </td>
                      <td className="border-t border-black/10 px-5 py-5 text-sm text-ink/65">
                        {item.centers}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* INITIATIVES */}
        <section className="bg-paper">
          <div className="container-wide py-16 md:py-20">
            <div className="max-w-3xl">
              <p className="text-sm font-bold uppercase tracking-[0.18em] text-maroon">
                From Framework to Action
              </p>

              <h2 className="mt-3 text-3xl font-extrabold tracking-tight md:text-4xl">
                Turning development frameworks into community work.
              </h2>

              <p className="mt-5 text-base leading-7 text-ink/65">
                The frameworks matter because they help us identify the
                problems, opportunities, and forms of participation that can
                translate into concrete action.
              </p>
            </div>

            <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
              {initiatives.map((item) => (
                <div
                  key={item.title}
                  className="border border-black/10 bg-white p-6"
                >
                  <h3 className="text-xl font-extrabold">{item.title}</h3>

                  <p className="mt-3 text-sm leading-6 text-ink/60">
                    {item.text}
                  </p>

                  <div className="mt-5 border-t border-black/10 pt-4">
                    <p className="text-xs font-bold uppercase tracking-wide text-maroon">
                      {item.sdgs}
                    </p>

                    <p className="mt-2 text-xs font-semibold text-ink/50">
                      {item.centers}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CLOSING */}
        <section className="bg-maroon text-white">
          <div className="container-wide py-16 text-center md:py-20">
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-gold">
              Live. Create. Inspire.
            </p>

            <h2 className="mx-auto mt-3 max-w-3xl text-3xl font-extrabold tracking-tight md:text-5xl">
              Development becomes meaningful when people turn vision into
              action.
            </h2>

            <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-white/70">
              Subang Philippines brings young people and volunteers together
              to create practical, inclusive, and sustainable solutions in
              their communities.
            </p>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
