import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Header, Footer } from "../components";

const sdgs = [
  {
    number: "01",
    title: "No Poverty",
    description:
      "End poverty in all its forms and expand opportunities for people and communities.",
    connection:
      "Community development and initiatives that expand access to opportunity.",
  },
  {
    number: "02",
    title: "Zero Hunger",
    description:
      "End hunger, achieve food security, improve nutrition, and promote sustainable agriculture.",
    connection:
      "Food security, agriculture, Paglaum Farm, and community food systems.",
  },
  {
    number: "03",
    title: "Good Health and Well-being",
    description:
      "Promote healthy lives and well-being for people of all ages.",
    connection:
      "Community wellness, resilience, and health-related youth initiatives.",
  },
  {
    number: "04",
    title: "Quality Education",
    description:
      "Ensure inclusive and equitable quality education and promote lifelong learning.",
    connection:
      "Leadership development, training, workshops, and community education.",
  },
  {
    number: "05",
    title: "Gender Equality",
    description:
      "Achieve gender equality and empower women and girls.",
    connection:
      "Inclusive participation and opportunities for young people.",
  },
  {
    number: "06",
    title: "Clean Water and Sanitation",
    description:
      "Ensure availability and sustainable management of water and sanitation for all.",
    connection:
      "Environmental stewardship and community-based environmental action.",
  },
  {
    number: "07",
    title: "Affordable and Clean Energy",
    description:
      "Ensure access to affordable, reliable, sustainable, and modern energy.",
    connection:
      "Science, technology, innovation, and community-based solutions.",
  },
  {
    number: "08",
    title: "Decent Work and Economic Growth",
    description:
      "Promote sustained economic growth, productive employment, and decent work.",
    connection:
      "Economic empowerment, agriculture, skills development, and innovation.",
  },
  {
    number: "09",
    title: "Industry, Innovation and Infrastructure",
    description:
      "Build resilient infrastructure, promote inclusive industrialization, and foster innovation.",
    connection:
      "Science, technology, innovation, and practical community solutions.",
  },
  {
    number: "10",
    title: "Reduced Inequalities",
    description:
      "Reduce inequality within and among countries.",
    connection:
      "Inclusive volunteerism and meaningful participation in community development.",
  },
  {
    number: "11",
    title: "Sustainable Cities and Communities",
    description:
      "Make communities inclusive, safe, resilient, and sustainable.",
    connection:
      "Community resilience, environmental action, and sustainable development.",
  },
  {
    number: "12",
    title: "Responsible Consumption and Production",
    description:
      "Ensure sustainable consumption and production patterns.",
    connection:
      "Composting, sustainable agriculture, food systems, and resource stewardship.",
  },
  {
    number: "13",
    title: "Climate Action",
    description:
      "Take urgent action to combat climate change and its impacts.",
    connection:
      "Climate education, disaster resilience, ecosystem restoration, and preparedness.",
  },
  {
    number: "14",
    title: "Life Below Water",
    description:
      "Conserve and sustainably use oceans, seas, and marine resources.",
    connection:
      "Coastal protection, marine stewardship, and community environmental action.",
  },
  {
    number: "15",
    title: "Life on Land",
    description:
      "Protect, restore, and sustainably use terrestrial ecosystems and biodiversity.",
    connection:
      "Bamboo propagation, riparian restoration, mangroves, and biodiversity action.",
  },
  {
    number: "16",
    title: "Peace, Justice and Strong Institutions",
    description:
      "Promote peaceful and inclusive societies, access to justice, and accountable institutions.",
    connection:
      "Peacebuilding, youth participation, governance, and civic engagement.",
  },
  {
    number: "17",
    title: "Partnerships for the Goals",
    description:
      "Strengthen implementation through partnerships and collaboration.",
    connection:
      "Volunteer networks, institutional partnerships, and cross-sector collaboration.",
  },
];

const centers = [
  {
    number: "01",
    title: "Health",
    description:
      "Youth participation in health, wellness, and the development of healthy communities.",
    connection:
      "Community wellness, resilience, and health-related initiatives.",
  },
  {
    number: "02",
    title: "Education",
    description:
      "Youth participation in learning, skills development, capacity building, and lifelong education.",
    connection:
      "Leadership development, training, filmmaking education, and environmental learning.",
  },
  {
    number: "03",
    title: "Economic Empowerment",
    description:
      "Youth participation in livelihoods, entrepreneurship, employment, and economic opportunity.",
    connection:
      "Agriculture, food systems, innovation, and community-based economic initiatives.",
  },
  {
    number: "04",
    title: "Social Inclusion & Equity",
    description:
      "Creating opportunities for young people to participate meaningfully and equitably.",
    connection:
      "Inclusive volunteerism, youth participation, and community engagement.",
  },
  {
    number: "05",
    title: "Peace-building & Security",
    description:
      "Youth participation in peacebuilding, safety, preparedness, and community security.",
    connection:
      "Peace camps, peace communications, disaster preparedness, and resilience.",
  },
  {
    number: "06",
    title: "Governance",
    description:
      "Meaningful youth participation in governance, decision-making, and public affairs.",
    connection:
      "Youth leadership, policy dialogue, civic participation, and institutional partnerships.",
  },
  {
    number: "07",
    title: "Active Citizenship",
    description:
      "Young people contributing to their communities through volunteerism and civic action.",
    connection:
      "Volunteerism, environmental activities, grassroots initiatives, and community service.",
  },
  {
    number: "08",
    title: "Agriculture",
    description:
      "Youth participation in agriculture, food systems, rural development, and food security.",
    connection:
      "Paglaum Farm, food security, sustainable agriculture, and agricultural innovation.",
  },
  {
    number: "09",
    title: "Environment",
    description:
      "Youth participation in environmental protection, conservation, climate action, and sustainability.",
    connection:
      "Bamboo propagation, riparian restoration, mangroves, composting, and climate action.",
  },
  {
    number: "10",
    title: "Global Mobility",
    description:
      "Youth access to international learning, exchange, networks, and global engagement.",
    connection:
      "International youth networks, learning opportunities, and cross-border collaboration.",
  },
];

const ambitionAreas = [
  {
    title: "Matatag",
    subtitle: "Strongly Rooted",
    description:
      "A Philippines where families and communities are strongly rooted, people trust one another, and citizens actively contribute to their communities.",
    connection:
      "Subang Philippines advances this aspiration through volunteerism, youth leadership, community service, peacebuilding, and active citizenship.",
  },
  {
    title: "Maginhawa",
    subtitle: "Comfortable",
    description:
      "A future where Filipinos are free from hunger and poverty, have access to quality education and sustainable livelihoods, and can live comfortable lives.",
    connection:
      "Subang Philippines contributes through food security, agriculture, education, skills development, innovation, and community-based economic initiatives.",
  },
  {
    title: "Panatag",
    subtitle: "Secure",
    description:
      "A future where Filipinos enjoy security, good health, peace, reliable institutions, and communities capable of facing emerging challenges.",
    connection:
      "Subang Philippines contributes through climate and disaster resilience, environmental protection, peace initiatives, governance, and community preparedness.",
  },
];

const frameworkMatrix = [
  {
    area: "Food Security & Agriculture",
    ambition: "Maginhawa",
    sdgs: "2, 8, 12",
    centers: "Agriculture, Economic Empowerment",
  },
  {
    area: "Environmental Sustainability",
    ambition: "Matatag / Panatag",
    sdgs: "6, 11, 12, 13, 14, 15",
    centers: "Environment, Agriculture",
  },
  {
    area: "Climate & Disaster Resilience",
    ambition: "Panatag",
    sdgs: "11, 13",
    centers: "Peace-building & Security, Environment",
  },
  {
    area: "Youth Leadership",
    ambition: "Matatag",
    sdgs: "4, 10, 16, 17",
    centers: "Education, Governance, Active Citizenship",
  },
  {
    area: "Volunteerism",
    ambition: "Matatag",
    sdgs: "10, 11, 16, 17",
    centers: "Active Citizenship, Social Inclusion & Equity",
  },
  {
    area: "Science & Innovation",
    ambition: "Maginhawa",
    sdgs: "4, 8, 9",
    centers: "Education, Economic Empowerment",
  },
  {
    area: "Peace & Civic Participation",
    ambition: "Matatag / Panatag",
    sdgs: "16, 17",
    centers: "Peace-building & Security, Governance, Active Citizenship",
  },
  {
    area: "Creative & Media Education",
    ambition: "Matatag / Maginhawa",
    sdgs: "4, 10, 16",
    centers: "Education, Active Citizenship, Global Mobility",
  },
];

const initiatives = [
  {
    title: "Paglaum Farm & Food Security",
    description:
      "Community-based agriculture and food security initiatives that connect sustainable food production with education and community support.",
    sdgs: "SDGs 2, 8, 12",
    centers: "Agriculture • Economic Empowerment • Education",
    ambition: "AmBisyon Natin 2040: Maginhawa",
  },
  {
    title: "Bamboo & Ecosystem Restoration",
    description:
      "Bamboo propagation, riparian restoration, mangrove activities, and related environmental initiatives that strengthen ecosystems and community resilience.",
    sdgs: "SDGs 11, 13, 15",
    centers: "Environment • Agriculture",
    ambition: "AmBisyon Natin 2040: Matatag / Panatag",
  },
  {
    title: "Climate & Disaster Resilience",
    description:
      "Youth participation in disaster preparedness, climate education, and community-based resilience through training and volunteer action.",
    sdgs: "SDGs 11, 13",
    centers: "Peace-building & Security • Environment",
    ambition: "AmBisyon Natin 2040: Panatag",
  },
  {
    title: "Youth Leadership & Volunteerism",
    description:
      "Programs that equip young people to lead, volunteer, participate in civic life, and contribute to community development.",
    sdgs: "SDGs 4, 10, 16, 17",
    centers: "Education • Governance • Active Citizenship",
    ambition: "AmBisyon Natin 2040: Matatag",
  },
  {
    title: "Kamera at Kwento",
    description:
      "A hands-on filmmaking workshop that develops storytelling, communication, creative, and technical skills among young people.",
    sdgs: "SDGs 4, 10, 16",
    centers: "Education • Active Citizenship • Global Mobility",
    ambition: "AmBisyon Natin 2040: Matatag / Maginhawa",
  },
];

export default function Framework() {
  return (
    <>
      <Header />

      <main className="bg-white">
        {/* Hero */}
        <section className="bg-maroon text-white">
          <div className="container-wide py-16 md:py-24">
            <div className="max-w-4xl">
              <p className="mb-3 text-sm font-bold uppercase tracking-[0.18em] text-gold">
                Our Development Framework
              </p>

              <h1 className="text-4xl font-extrabold tracking-tight md:text-6xl">
                Global Goals. National Aspirations. Youth Participation.
              </h1>

              <p className="mt-6 max-w-3xl text-lg leading-7 text-white/80 md:text-xl">
                Subang Philippines connects global development goals, the
                Philippines&apos; long-term aspirations, and meaningful youth
                participation with practical community action.
              </p>

              <p className="mt-4 max-w-3xl leading-6 text-white/65">
                These frameworks help guide how we understand community
                challenges, develop initiatives, mobilize volunteers, and work
                with partners toward safer, equitable, sustainable, and
                resilient communities.
              </p>
            </div>
          </div>
        </section>

        {/* Three Frameworks */}
        <section className="section-pad">
          <div className="container-wide">
            <div className="max-w-2xl">
              <p className="text-sm font-bold uppercase tracking-[0.18em] text-maroon">
                Three Connected Frameworks
              </p>

              <h2 className="mt-2 text-3xl font-extrabold tracking-tight text-ink md:text-4xl">
                Different frameworks. One direction.
              </h2>

              <p className="mt-4 leading-6 text-ink/70">
                Each framework serves a different purpose. Together, they help
                connect the aspirations of Filipinos, global development
                priorities, and meaningful youth participation.
              </p>
            </div>

            <div className="mt-8 grid gap-5 md:grid-cols-3">
              <div className="border border-black/10 bg-sand p-6">
                <p className="text-sm font-extrabold uppercase tracking-wide text-maroon">
                  National Vision
                </p>

                <h3 className="mt-3 text-2xl font-extrabold text-ink">
                  AmBisyon Natin 2040
                </h3>

                <p className="mt-3 leading-6 text-ink/70">
                  The Philippines&apos; long-term vision for a strongly rooted,
                  comfortable, and secure life for all Filipinos.
                </p>
              </div>

              <div className="border border-black/10 bg-sand p-6">
                <p className="text-sm font-extrabold uppercase tracking-wide text-maroon">
                  Global Agenda
                </p>

                <h3 className="mt-3 text-2xl font-extrabold text-ink">
                  UN Sustainable Development Goals
                </h3>

                <p className="mt-3 leading-6 text-ink/70">
                  The global framework of 17 goals for sustainable development,
                  covering social, economic, environmental, and institutional
                  priorities.
                </p>
              </div>

              <div className="border border-black/10 bg-sand p-6">
                <p className="text-sm font-extrabold uppercase tracking-wide text-maroon">
                  Youth Participation
                </p>

                <h3 className="mt-3 text-2xl font-extrabold text-ink">
                  10 Centers of Youth Participation
                </h3>

                <p className="mt-3 leading-6 text-ink/70">
                  Ten areas through which young Filipinos can participate in
                  development, governance, community life, and nation-building.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Framework Flow */}
        <section className="bg-sand section-pad">
          <div className="container-wide">
            <div className="mx-auto max-w-3xl text-center">
              <p className="text-sm font-bold uppercase tracking-[0.18em] text-maroon">
                From Vision to Action
              </p>

              <h2 className="mt-2 text-3xl font-extrabold tracking-tight text-ink md:text-4xl">
                Frameworks guide us. Communities define the work.
              </h2>
            </div>

            <div className="mt-10 grid gap-4 md:grid-cols-4">
              <div className="border border-black/10 bg-white p-6 text-center">
                <p className="text-xs font-extrabold uppercase tracking-[0.16em] text-maroon">
                  01
                </p>
                <h3 className="mt-2 text-xl font-extrabold text-ink">
                  National Vision
                </h3>
                <p className="mt-2 text-sm leading-6 text-ink/65">
                  AmBisyon Natin 2040
                </p>
              </div>

              <div className="border border-black/10 bg-white p-6 text-center">
                <p className="text-xs font-extrabold uppercase tracking-[0.16em] text-maroon">
                  02
                </p>
                <h3 className="mt-2 text-xl font-extrabold text-ink">
                  Global Goals
                </h3>
                <p className="mt-2 text-sm leading-6 text-ink/65">
                  17 Sustainable Development Goals
                </p>
              </div>

              <div className="border border-black/10 bg-white p-6 text-center">
                <p className="text-xs font-extrabold uppercase tracking-[0.16em] text-maroon">
                  03
                </p>
                <h3 className="mt-2 text-xl font-extrabold text-ink">
                  Youth Action
                </h3>
                <p className="mt-2 text-sm leading-6 text-ink/65">
                  10 Centers of Youth Participation
                </p>
              </div>

              <div className="border border-maroon bg-maroon p-6 text-center text-white">
                <p className="text-xs font-extrabold uppercase tracking-[0.16em] text-gold">
                  04
                </p>
                <h3 className="mt-2 text-xl font-extrabold">
                  Community Action
                </h3>
                <p className="mt-2 text-sm leading-6 text-white/70">
                  Subang Philippines programs, projects, and volunteerism
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* AmBisyon Natin 2040 */}
        <section className="section-pad">
          <div className="container-wide">
            <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
              <div>
                <p className="text-sm font-bold uppercase tracking-[0.18em] text-maroon">
                  National Vision
                </p>

                <h2 className="mt-2 text-3xl font-extrabold tracking-tight text-ink md:text-4xl">
                  AmBisyon Natin 2040
                </h2>

                <p className="mt-5 leading-7 text-ink/70">
                  AmBisyon Natin 2040 is the Philippines&apos; long-term vision
                  based on the aspirations of Filipinos for themselves and for
                  the country.
                </p>

                <div className="mt-6 border-l-4 border-gold pl-5">
                  <p className="text-xl font-extrabold text-maroon">
                    Matatag. Maginhawa. Panatag.
                  </p>

                  <p className="mt-2 leading-6 text-ink/65">
                    A strongly rooted, comfortable, and secure life for
                    Filipinos.
                  </p>
                </div>
              </div>

              <div className="grid gap-5 md:grid-cols-3">
                {ambitionAreas.map((area) => (
                  <div
                    key={area.title}
                    className="border border-black/10 bg-sand p-6"
                  >
                    <p className="text-2xl font-extrabold text-maroon">
                      {area.title}
                    </p>

                    <p className="mt-1 text-sm font-bold uppercase tracking-wide text-ink/50">
                      {area.subtitle}
                    </p>

                    <p className="mt-4 text-sm leading-6 text-ink/70">
                      {area.description}
                    </p>

                    <div className="mt-5 border-t border-black/10 pt-4">
                      <p className="text-sm font-bold text-ink">
                        Subang connection
                      </p>

                      <p className="mt-2 text-sm leading-6 text-ink/65">
                        {area.connection}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* SDGs */}
        <section className="bg-sand section-pad">
          <div className="container-wide">
            <div className="max-w-3xl">
              <p className="text-sm font-bold uppercase tracking-[0.18em] text-maroon">
                Global Agenda
              </p>

              <h2 className="mt-2 text-3xl font-extrabold tracking-tight text-ink md:text-4xl">
                United Nations Sustainable Development Goals
              </h2>

              <p className="mt-4 leading-6 text-ink/70">
                The 17 Sustainable Development Goals provide a shared global
                framework for addressing poverty, inequality, environmental
                sustainability, peace, prosperity, and partnership.
              </p>
            </div>

            <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {sdgs.map((sdg) => (
                <div
                  key={sdg.number}
                  className="border border-black/10 bg-white p-5"
                >
                  <div className="flex items-start gap-4">
                    <span className="shrink-0 text-2xl font-extrabold text-maroon">
                      {sdg.number}
                    </span>

                    <div>
                      <h3 className="font-extrabold text-ink">
                        {sdg.title}
                      </h3>

                      <p className="mt-2 text-sm leading-5 text-ink/60">
                        {sdg.description}
                      </p>
                    </div>
                  </div>

                  <div className="mt-4 border-t border-black/10 pt-4">
                    <p className="text-xs font-extrabold uppercase tracking-wide text-maroon">
                      Subang connection
                    </p>

                    <p className="mt-1 text-sm leading-5 text-ink/65">
                      {sdg.connection}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Strongest SDG Areas */}
        <section className="section-pad">
          <div className="container-wide">
            <div className="mx-auto max-w-3xl text-center">
              <p className="text-sm font-bold uppercase tracking-[0.18em] text-maroon">
                Areas of Direct Contribution
              </p>

              <h2 className="mt-2 text-3xl font-extrabold tracking-tight text-ink md:text-4xl">
                Where our work connects most directly
              </h2>

              <p className="mx-auto mt-4 max-w-2xl leading-6 text-ink/70">
                Subang Philippines does not treat every SDG as an identical
                area of activity. Our initiatives have particularly strong
                connections to the following goals.
              </p>
            </div>

            <div className="mx-auto mt-8 flex max-w-4xl flex-wrap justify-center gap-3">
              {[
                "SDG 2 • Zero Hunger",
                "SDG 4 • Quality Education",
                "SDG 8 • Decent Work",
                "SDG 9 • Innovation",
                "SDG 11 • Sustainable Communities",
                "SDG 12 • Responsible Production",
                "SDG 13 • Climate Action",
                "SDG 15 • Life on Land",
                "SDG 16 • Strong Institutions",
                "SDG 17 • Partnerships",
              ].map((item) => (
                <span
                  key={item}
                  className="border border-maroon/20 bg-sand px-4 py-2 text-sm font-bold text-maroon"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* 10 Centers */}
        <section className="bg-sand section-pad">
          <div className="container-wide">
            <div className="max-w-3xl">
              <p className="text-sm font-bold uppercase tracking-[0.18em] text-maroon">
                Youth Participation
              </p>

              <h2 className="mt-2 text-3xl font-extrabold tracking-tight text-ink md:text-4xl">
                10 Centers of Youth Participation
              </h2>

              <p className="mt-4 leading-6 text-ink/70">
                Youth participation takes many forms. These ten centers provide
                a framework for understanding the different areas where young
                people can contribute to development and nation-building.
              </p>
            </div>

            <div className="mt-8 grid gap-4 md:grid-cols-2">
              {centers.map((center) => (
                <div
                  key={center.number}
                  className="border border-black/10 bg-white p-6"
                >
                  <div className="flex items-start gap-4">
                    <span className="text-2xl font-extrabold text-maroon">
                      {center.number}
                    </span>

                    <div>
                      <h3 className="text-xl font-extrabold text-ink">
                        {center.title}
                      </h3>

                      <p className="mt-2 text-sm leading-6 text-ink/65">
                        {center.description}
                      </p>
                    </div>
                  </div>

                  <div className="mt-5 border-t border-black/10 pt-4">
                    <p className="text-xs font-extrabold uppercase tracking-wide text-maroon">
                      Subang connection
                    </p>

                    <p className="mt-1 text-sm leading-6 text-ink/65">
                      {center.connection}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Framework Matrix */}
        <section className="section-pad">
          <div className="container-wide">
            <div className="max-w-3xl">
              <p className="text-sm font-bold uppercase tracking-[0.18em] text-maroon">
                The Subang Philippines Framework
              </p>

              <h2 className="mt-2 text-3xl font-extrabold tracking-tight text-ink md:text-4xl">
                Connecting vision, goals, and youth action.
              </h2>

              <p className="mt-4 leading-6 text-ink/70">
                Our development areas can be viewed through all three
                frameworks, helping us connect community needs with national
                aspirations, global goals, and meaningful youth participation.
              </p>
            </div>

            <div className="mt-8 overflow-x-auto border border-black/10">
              <table className="w-full min-w-[760px] border-collapse text-left">
                <thead>
                  <tr className="bg-maroon text-white">
                    <th className="px-5 py-4 text-sm font-extrabold">
                      Subang Development Area
                    </th>
                    <th className="px-5 py-4 text-sm font-extrabold">
                      AmBisyon 2040
                    </th>
                    <th className="px-5 py-4 text-sm font-extrabold">
                      SDGs
                    </th>
                    <th className="px-5 py-4 text-sm font-extrabold">
                      Youth Participation
                    </th>
                  </tr>
                </thead>

                <tbody>
                  {frameworkMatrix.map((row, index) => (
                    <tr
                      key={row.area}
                      className={
                        index % 2 === 0 ? "bg-white" : "bg-sand/50"
                      }
                    >
                      <td className="border-t border-black/10 px-5 py-4 font-bold text-ink">
                        {row.area}
                      </td>

                      <td className="border-t border-black/10 px-5 py-4 text-sm text-ink/65">
                        {row.ambition}
                      </td>

                      <td className="border-t border-black/10 px-5 py-4 text-sm font-semibold text-maroon">
                        {row.sdgs}
                      </td>

                      <td className="border-t border-black/10 px-5 py-4 text-sm text-ink/65">
                        {row.centers}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* Initiatives */}
        <section className="bg-sand section-pad">
          <div className="container-wide">
            <div className="mx-auto max-w-3xl text-center">
              <p className="text-sm font-bold uppercase tracking-[0.18em] text-maroon">
                From Framework to Action
              </p>

              <h2 className="mt-2 text-3xl font-extrabold tracking-tight text-ink md:text-4xl">
                What this looks like on the ground.
              </h2>

              <p className="mx-auto mt-4 max-w-2xl leading-6 text-ink/70">
                Frameworks become meaningful when they are translated into
                initiatives that communities can participate in and sustain.
              </p>
            </div>

            <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
              {initiatives.map((initiative) => (
                <div
                  key={initiative.title}
                  className="flex flex-col border border-black/10 bg-white p-6"
                >
                  <h3 className="text-xl font-extrabold text-ink">
                    {initiative.title}
                  </h3>

                  <p className="mt-3 text-sm leading-6 text-ink/65">
                    {initiative.description}
                  </p>

                  <div className="mt-5 border-t border-black/10 pt-4">
                    <p className="text-xs font-extrabold uppercase tracking-wide text-maroon">
                      SDGs
                    </p>

                    <p className="mt-1 text-sm font-semibold text-ink">
                      {initiative.sdgs}
                    </p>
                  </div>

                  <div className="mt-4">
                    <p className="text-xs font-extrabold uppercase tracking-wide text-maroon">
                      Youth Participation
                    </p>

                    <p className="mt-1 text-sm text-ink/65">
                      {initiative.centers}
                    </p>
                  </div>

                  <div className="mt-4">
                    <p className="text-xs font-extrabold uppercase tracking-wide text-maroon">
                      National Vision
                    </p>

                    <p className="mt-1 text-sm text-ink/65">
                      {initiative.ambition}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Closing */}
        <section className="bg-maroon py-16 text-white md:py-20">
          <div className="container-wide text-center">
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-gold">
              From Vision to Volunteer Action
            </p>

            <h2 className="mx-auto mt-3 max-w-3xl text-3xl font-extrabold tracking-tight md:text-5xl">
              Frameworks guide us. People make change happen.
            </h2>

            <p className="mx-auto mt-5 max-w-2xl text-lg leading-7 text-white/70">
              Subang Philippines brings young people and volunteers together to
              turn shared aspirations and development goals into meaningful
              community action.
            </p>

            <div className="mt-7 flex flex-wrap justify-center gap-3">
              <Link
                href="/programs"
                className="inline-flex items-center gap-2 bg-gold px-6 py-3 font-extrabold text-ink transition hover:opacity-90"
              >
                Explore Our Programs
                <ArrowUpRight size={18} />
              </Link>

              <Link
                href="/impact"
                className="inline-flex items-center gap-2 border border-white/30 px-6 py-3 font-bold text-white transition hover:border-white"
              >
                See Our Impact
                <ArrowUpRight size={18} />
              </Link>
            </div>

            <p className="mt-10 text-2xl font-extrabold text-gold">
              Live. Create. Inspire.
            </p>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
