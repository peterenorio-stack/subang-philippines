export type Story = {
  slug: string;
  type: "Press Release" | "Project Story" | "Volunteer Story";
  title: string;
  date: string;
  dateValue?: string;
  excerpt: string;
  body: string[];
  image: string;
  category: string;
  partner?: string;
};

export const stories: Story[] = [
  {
  slug: "subang-youth-perspective-in-action-resilient-communities-2026",
  type: "Press Release",
  title: "Subang Philippines Holds Youth Perspective in Action Conversation on Resilient, Safe, and Sustainable Communities",
  date: "August 7, 2026",
  dateValue: "2026-08-07",
  excerpt: "Subang Philippines brought together three young leaders for a conversation on disaster preparedness, lifesaving, and sustainable community design through Youth Perspective in Action.",
  body: [
    "Subang Philippines brought together three young leaders for Youth Perspective in Action, a conversation focused on building resilient, safe, and sustainable communities through youth participation and practical knowledge.",
    "The session explored three complementary perspectives on community resilience, covering community-based disaster risk reduction and management, lifesaving, and sustainable community design.",
    "Subang Philippines Founder & National Executive President Peter John C. Enorio shared perspectives on empowering communities through community-based disaster risk reduction and management. A Philippine Climate and Disaster Resilience Champion in 2025, Enorio discussed the role of young people in strengthening community preparedness and resilience.",
    "Yogi Christ P. Agan, a Philippine Life Saving responder, brought the perspective of youth involvement in lifesaving and emergency response. His participation highlighted the importance of practical skills and readiness in efforts to protect lives during emergencies.",
    "Raf B. Jimenez, a Bachelor of Landscape Architecture student at the University of San Carlos, contributed perspectives on sustainable and resilient community design, connecting the role of young professionals and students with the way communities are planned and shaped.",
    "The conversation was moderated by Jellian Macadildig and brought together different areas of youth expertise around a shared focus on community resilience.",
    "Youth Perspective in Action reflects Subang Philippines' approach to youth participation: creating spaces where young people can share practical knowledge, learn from one another, and connect their fields of interest with real community needs."
  ],
  image: "/assets/press/subang-youth-perspective-in-action-resilient-communities-2026.jpg",
  category: "Youth Leadership & Participation"
}
  {
  slug: "subang-coastal-cleanup-mabuhay-beach-siquijor-2026",
  type: "Project Story",
  title: "Subang Philippines Conducts Coastal Cleanup at Mabuhay Beach in Siquijor",
  date: "August 6, 2026",
  dateValue: "2026-08-06",
  excerpt: "Subang Philippines volunteers conducted a coastal cleanup at Mabuhay Beach in Barangay Canal, Siquijor, supporting marine environmental protection through community action.",
  body: [
    "Subang Philippines conducted a coastal cleanup at Mabuhay Beach in Barangay Canal, Siquijor, Siquijor on August 6, 2026, bringing volunteers together for a hands-on effort to address marine litter along the shoreline.",
    "The activity was spearheaded by Subang Philippines National Executive President Peter John C. Enorio, together with Subang - CTU Vice President for Community Affairs Yogi Christ P. Agan, Subang - USC President Raf B. Jimenez, and volunteer Jellian Macadildig.",
    "The team collected marine litter along the shoreline and ensured that the gathered waste was properly disposed of, contributing to a cleaner coastal environment.",
    "The activity demonstrates how volunteer-led environmental action can create opportunities for young people to participate directly in protecting local ecosystems. It also strengthens Subang Philippines' continuing work in coastal and marine action, environmental responsibility, and community volunteerism.",
    "Through activities in local communities, Subang Philippines continues to encourage young people to translate environmental awareness into practical action."
  ],
  image: "/assets/stories/subang-coastal-cleanup-mabuhay-beach-siquijor-2026.jpg",
  category: "Coastal & Marine Action",
  partner: "Subang - Siquijor"
}
  {
  slug: "subang-president-dost-7-regional-science-technology-innovation-week-2026",
  type: "Project Story",
  title: "Subang President Participates in DOST-7 Regional Science, Technology, and Innovation Week 2026",
  date: "July 13-15, 2026",
  dateValue: "2026-07-13",
  excerpt: "Subang Philippines National Executive President Peter John C. Enorio participated in the 2026 Regional Science, Technology, and Innovation Week of DOST Central Visayas in Cebu City.",
  body: [
    "Subang Philippines National Executive President Peter John C. Enorio participated in the 2026 Regional Science, Technology, and Innovation Week of the Department of Science and Technology Central Visayas, held from July 13 to 15, 2026 in Cebu City.",
    "The three-day regional celebration brought together researchers, innovators, government agencies, industry leaders, academic institutions, and youth advocates around discussions and activities related to science, technology, and innovation for regional development.",
    "During the event, Enorio participated in key activities including the Regional Science and Technology Summit, Research and Development Conference, Innovation and Startup Forum, technology exhibits, and innovation showcases. Discussions also covered emerging technologies, climate resilience, disaster risk reduction, and sustainable development.",
    "Participation in the regional event provided an opportunity to engage with developments in science, technology, and innovation and to connect these areas with Subang Philippines' continuing work in sustainability, resilience, youth participation, and community development.",
    "The organization continues to promote opportunities for young people to engage with science, innovation, and collaborative action as part of efforts to contribute to resilient and future-ready communities."
  ],
  image: "/assets/stories/subang-president-dost-7-regional-science-technology-innovation-week-2026.jpg",
  category: "Education & Capacity Building",
  partner: "DOST Central Visayas"
}
  {
  slug: "subang-founder-top-50-bagani-sibol-fellows-2026",
  type: "Press Release",
  title: "Subang Founder Selected Among Top 50 BAGANI Fellows Nationwide",
  date: "May 2, 2026",
  dateValue: "2026-05-02",
  excerpt: "Subang Philippines Founder & National Executive President Peter John C. Enorio has been selected as one of the Top 50 fellows nationwide for the BAGANI Fellowship SIBOL Cohort under the Development Academy of the Philippines.",
  body: [
    "Subang Philippines announces that its Founder & National Executive President, Peter John C. Enorio, has been selected as one of the Top 50 fellows nationwide for the BAGANI Fellowship SIBOL Cohort under the Development Academy of the Philippines.",
    "The BAGANI Fellowship, also known as the Rising Leaders Development Program, is a fully funded, one-month intensive program that brings together young leaders from across the Philippines. The program focuses on strengthening competencies in governance, ethical leadership, systems thinking, and public service through structured mentorship, peer collaboration, and innovation project development.",
    "Enorio was selected through a competitive national process. The fellowship provides an opportunity for participants to further develop their leadership and public service competencies while working alongside other emerging leaders from across the country.",
    "As Founder & National Executive President of Subang Philippines, Enorio has led initiatives focused on environmental restoration, climate education, food security, youth participation, and community development across Central Visayas and the Negros Island Region.",
    "For Subang Philippines, the fellowship represents an opportunity to further connect community-based volunteer action with broader approaches to governance, sustainability, and public service. The organization looks forward to drawing on the learning and experiences gained through the program to strengthen its continuing work with young people, communities, and partners.",
    "The selection also highlights Subang Philippines' continuing emphasis on developing young leaders who engage in practical community action and contribute to sustainable and resilient communities."
  ],
  image: "/assets/press/subang-founder-top-50-bagani-sibol-fellows-2026.jpg",
  category: "Youth Leadership & Participation",
  partner: "Development Academy of the Philippines"
}
  {
  slug: "subang-ctu-bamboo-propagation-graduating-council-2026",
  type: "Project Story",
  title: "Subang - CTU Conducts Bamboo Propagation Activity with the CTU-Barili Graduating Council",
  date: "April 10, 2026",
  dateValue: "2026-04-10",
  excerpt: "Subang - CTU and the CTU-Barili Graduating Council joined a hands-on bamboo propagation activity supporting campus environmental sustainability and ecosystem restoration.",
  body: [
    "Subang - CTU Chapter volunteers and the officers of the CTU-Barili Graduating Council for Batch 2025-2026 carried out a bamboo propagation activity at Cebu Technological University - Barili Campus, continuing collaborative efforts to strengthen environmental sustainability within the university.",
    "The activity was led by Subang Philippines Founder & National Executive President Peter John C. Enorio, who also served as President of the Graduating Council, alongside Subang - CTU Chapter volunteer interns Yogi Christ P. Agan, Jannah T. Sobiono, Karis Philomine R. Palomar, Shyrra Divine H. Legaspino, and Rod Santiago Lebumfacil Jr.",
    "Through hands-on participation, the activity engaged student leaders in practical environmental action while supporting ongoing bamboo propagation and ecosystem restoration efforts on campus.",
    "The activity reflects the value of institutional collaboration in creating opportunities for students to participate directly in sustainability initiatives and contribute to environmental action within their university community."
  ],
  image: "/assets/stories/subang-ctu-bamboo-propagation-graduating-council-2026.jpg",
  category: "Environmental Sustainability",
  partner: "CTU-Barili Graduating Council"
}
  {
  slug: "ctu-dumanjug-research-management-design-thinking-workshop-2025",
  type: "Project Story",
  title: "CTU-Dumanjug Faculty Engage in Workshop on Research Management and Design Thinking",
  date: "July 24, 2025",
  dateValue: "2025-07-24",
  excerpt:
    "CTU-Dumanjug faculty members participated in a workshop on research management and design thinking as part of the campus's strategic planning activities.",
  body: [
    "Cebu Technological University - Dumanjug Extension Campus conducted a workshop on adapting research management and design thinking on July 24, 2025, as part of its three-day strategic planning activity held in Argao, Cebu.",
    "The session focused on strengthening the university's Research, Innovation, Development, and Extension agenda. Dr. Pet Roey L. Pascual, CTU Vice President for Research and Development and Adviser of Subang, led the workshop and introduced participants to the application of the Design Thinking and Innovation Framework in research conceptualization and target setting.",
    "Subang Philippines President and CTU-Barili Campus SSG President Peter John C. Enorio facilitated the Design Thinking segment, with support from Subang - CTU Chapter Volunteer Intern Miles Wilven Ayuban.",
    "Faculty members of the CTU-Dumanjug Extension Campus participated in the workshop, which aimed to strengthen research capabilities and encourage innovation as part of institutional planning."
  ],
  image:
    "/assets/stories/ctu-dumanjug-research-management-design-thinking-workshop-2025.jpg",
  category: "Education & Capacity Building",
  partner: "CTU-Dumanjug Extension Campus"
},

{
  slug: "subang-president-moderates-pagtanaw-2050-forum-2025",
  type: "Project Story",
  title: "Subang President Moderates Key Forum at Visayas Seminar on PAGTANAW 2050",
  date: "July 29, 2025",
  dateValue: "2025-07-29",
  excerpt:
    "Subang Philippines President Peter John C. Enorio moderated the open forum and couch session during the Visayas Island Seminar on PAGTANAW 2050 at CTU Main Campus.",
  body: [
    "Subang Philippines President Peter John C. Enorio served as moderator during the Visayas Island Seminar on PAGTANAW 2050 held on July 29, 2025, at the Cebu Technological University Main Campus Gymnasium.",
    "Organized by the Department of Science and Technology Region VII, the Philippine Association for the Advancement of Science and Technology, and Cebu Technological University, the seminar brought together experts, policymakers, and regional stakeholders under the theme 'Infrastructure, Energy, and Water Security Outlook: Moving Forward to PAGTANAW 2050.'",
    "The program opened with welcome remarks from Dr. Pet Roey L. Pascual, CTU Vice President for Research and Development and Subang Adviser, delivered on behalf of CTU President Dr. Joseph C. Pepito. DOST-VII OIC-Regional Director Dr. Tristan L. Abando followed with opening remarks emphasizing the importance of localizing the PAGTANAW 2050 foresight framework. Prof. Fortunato T. de la Peña, President of PhilAAST and former DOST Secretary, formally opened the technical discussions.",
    "Enorio moderated the open forum and couch session, facilitating exchanges between speakers, discussants, and participants on energy, infrastructure, urban transport, and housing. The discussion also highlighted the importance of connecting science-based foresight with community realities and long-term resilience.",
    "The technical sessions featured Dr. Danilo Jaque of Hydronet Consultants, Inc. on the energy-water nexus; Engr. Augusto 'Jay-Ar' Reynes of the Clean Energy Advocates Association of the Philippines, Inc. on energy security; Architect Joseph Michael Espina, former Head of the Cebu City Planning and Development Office, on infrastructure outlook; and Dr. Jonathan C. Maglasang and Engr. Hana Astrid Canseco-Tunacao of CTU Main Campus College of Engineering on urban and maritime transport and housing.",
    "Dr. Diana L. Ignacio, Assistant Secretary for Administrative and Legal Affairs of the Department of Science and Technology, delivered the synthesis and closing message, encouraging continued collaboration between science and society.",
    "Also in attendance were Subang - CTU Chapter President Shaina Faith D. Visorro, Subang - CTU Chapter Volunteer Intern Miles Wilven Ayuban, and CTU students Brylle Bryan Lauglaug and Baby Seth E. Villatima."
  ],
  image:
    "/assets/stories/subang-president-moderates-pagtanaw-2050-forum-2025.jpg",
  category: "Youth Leadership & Participation",
  partner: "DOST Region VII, PhilAAST, and CTU"
},

{
  slug: "primo-villegas-first-agro-fair-2025",
  type: "Project Story",
  title: "Primo Villegas Elementary School Holds First Agro Fair",
  date: "July 30, 2025",
  dateValue: "2025-07-30",
  excerpt:
    "Primo Villegas Elementary School held its first Agro Fair in Cagay, Barili, bringing together families, educators, and partners to promote food and nutrition security.",
  body: [
    "Primo Villegas Elementary School in Cagay, Barili, Cebu held its First Agro Fair 2025 on June 30, 2025, as part of the school's celebration of Nutrition Month and its theme, 'Food and Nutrition Security maging Priority! Sapat na Pagkain, Karapatan Natin!'",
    "The activity brought together parents, educators, school leaders, and community partners in a showcase of agricultural products and sustainable food practices. The fair was spearheaded by School Principal Mercedita B. Marinay in collaboration with School Parents and Teachers Association President Ma. Jumilie B. Carreon, the School Governance Council, and SPTA officials.",
    "Peter John C. Enorio, Subang Philippines President, and Shaina Faith D. Visorro, Subang - CTU Chapter President, served as members of the judging panel. They were joined by volunteers Dennis B. Bendulo and Crestine Lendio and Volunteer Intern Miles Wilven Ayuban.",
    "The Agro Fair featured fruits, vegetables, herbs, root crops, and homemade products prepared by parents of enrolled learners. The activity highlighted the connection between agriculture, education, nutrition, and community participation.",
    "During the activity, Enorio discussed the relationship between adequate nutrition, food security, and the holistic development of learners, including their health, cognitive development, and academic performance.",
    "The fair provided a community-based platform for promoting agricultural awareness and nutritious food choices while celebrating the agricultural roots and local participation of the school community."
  ],
  image: "/assets/stories/primo-villegas-first-agro-fair-2025.jpg",
  category: "Food Security & Sustainable Agriculture",
  partner: "Primo Villegas Elementary School"
},

{
  slug: "subang-president-the-aun-transforming-asean-universities-2025",
  type: "Project Story",
  title: "Subang President Joins Training on Transforming ASEAN Universities",
  date: "September 17, 2025",
  dateValue: "2025-09-17",
  excerpt:
    "Subang Philippines President Peter John C. Enorio joined the THE-AUN Webinar Series 2025 session on data, rankings, and strategic growth in ASEAN universities.",
  body: [
    "Subang Philippines President Peter John C. Enorio joined the THE-AUN Webinar Series 2025 on September 17, 2025, participating in a session focused on the transformation and strategic development of ASEAN universities.",
    "The session, titled 'Transforming ASEAN Universities - Introduction to Data, Rankings, and Strategic Growth,' featured Julie Wilkens McMahon, Vice President for APAC of Times Higher Education.",
    "The webinar explored World University Rankings, Impact Rankings, practices from universities participating in global rankings, and the methodology for the 2026 rankings.",
    "Enorio's participation provided an opportunity to engage with discussions on higher education development, institutional data, global academic benchmarking, and strategic growth.",
    "The engagement forms part of Subang's continuing interest in knowledge exchange and youth participation in academic and institutional development discussions."
  ],
  image:
    "/assets/stories/subang-president-the-aun-transforming-asean-universities-2025.jpg",
  category: "Education & Capacity Building",
  partner: "Times Higher Education and ASEAN University Network"
},

{
  slug: "subang-regional-volunteerism-exhibit-2025",
  type: "Project Story",
  title: "Subang Featured as Official Exhibitor at the 2nd Regional Volunteerism Exhibit 2025",
  date: "September 30, 2025",
  dateValue: "2025-09-30",
  excerpt:
    "Subang Philippines participated as an official exhibitor at the 2nd Regional Volunteerism Exhibit 2025 in Cebu City, showcasing youth-led volunteer initiatives and community work.",
  body: [
    "Subang Philippines participated as one of the featured exhibitors at the 2nd Regional Volunteerism Exhibit 2025 held on September 30, 2025, at the Atrium of Robinsons Galleria Cebu.",
    "Hosted by the Department of Economy, Planning, and Development Region VII under the theme 'Atong Garbo, SugBolunterismo!', the exhibit brought together volunteer organizations and community groups to highlight volunteerism across Central Visayas.",
    "Representing Subang were Peter John C. Enorio, Shaina Faith D. Visorro, Volunteer Interns Dan Mishael D. Abines and Miles Wilven Ayuban, and Subang Adviser Dr. Pet Roey L. Pascual.",
    "Subang presented its volunteer initiatives, environmental projects, and youth-driven programs during the exhibit, providing an opportunity to share experiences and connect with organizations working in volunteerism and community development.",
    "The event also featured organizational exhibits, cultural performances, and discussions focused on strengthening partnerships for development. Subang's participation highlighted the role of volunteer organizations and young people in contributing to community-based development."
  ],
  image: "/assets/stories/subang-regional-volunteerism-exhibit-2025.jpg",
  category: "Volunteerism",
  partner: "DEPDev Region VII"
},

{
  slug: "subang-world-food-forum-fireside-reflections-2025",
  type: "Project Story",
  title: "Subang Joins World Food Forum Fireside Reflections with Past Flagship Participants",
  date: "October 7, 2025",
  dateValue: "2025-10-07",
  excerpt:
    "Subang Philippines participated in a World Food Forum Philippines Chapter session preparing participants for the 2025 WFF Flagship Event in Rome.",
  body: [
    "Subang Philippines joined the Fireside Reflections with Past Flagship Participants hosted by the World Food Forum Philippines Chapter on October 7, 2025, as part of preparations for the 2025 WFF Flagship Event in Rome, Italy.",
    "The organization was represented by Subang Executive President Peter John C. Enorio, Agriculture and Food Systems Volunteer Dennis B. Bendulo, and Volunteer Intern Dan Mishael D. Abines.",
    "The session provided participants with an opportunity to hear reflections and experiences from previous World Food Forum delegates and to learn more about the international food systems platform.",
    "The engagement complemented Subang's continuing work in sustainable agriculture, food security, and youth participation, while providing its representatives with an opportunity to connect with broader discussions on sustainable food systems."
  ],
  image:
    "/assets/stories/subang-world-food-forum-fireside-reflections-2025.jpg",
  category: "Food Security & Sustainable Agriculture",
  partner: "World Food Forum Philippines Chapter"
},

{
  slug: "subang-echo-season-two-relaunch-2026",
  type: "Press Release",
  title: "Subang Relaunches 'Subang ECHO: Shaping Tomorrow Today' for Season Two",
  date: "January 24, 2026",
  dateValue: "2026-01-24",
  excerpt:
    "Subang - CTU Chapter relaunched Subang ECHO: Shaping Tomorrow Today for its second season, opening a new series of conversations on youth participation and community development.",
  body: [
    "Subang - CTU Chapter relaunched its talk show series, 'Subang ECHO: Shaping Tomorrow Today,' with the premiere of its second season on January 24, 2026.",
    "The opening episode focused on the 10 Centers of Youth Participation and was broadcast through DYNE Radyo Kahimsog 97.5 at Cebu Technological University - Barili Campus and through Facebook Live.",
    "The second season builds on Subang ECHO's role as a platform for conversations on community engagement and social development, with greater emphasis on youth empowerment, nation-building, sustainability, volunteerism, innovation, and meaningful participation.",
    "The premiere episode was hosted by newly welcomed Subang - CTU volunteer interns Beryl Gem A. Figueroa and Janice D. Remobatac. Iana Babe D. Bueno, also a newly welcomed volunteer intern, served as the resource speaker and shared her experiences and advocacies during the program.",
    "The relaunch marked the beginning of an expanded series intended to provide regular conversations on issues relevant to young people and communities. Subsequent episodes were scheduled for Saturdays through the continuing partnership with DYNE Radyo Kahimsog 97.5."
  ],
  image: "/assets/press/subang-echo-season-two-relaunch-2026.jpg",
  category: "Youth Leadership & Participation",
  partner: "DYNE Radyo Kahimsog 97.5"
},

{
  slug: "first-bamboo-propagation-activity-2026",
  type: "Project Story",
  title: "Subang - CTU Conducts First Bamboo Propagation Activity of 2026",
  date: "January 25, 2026",
  dateValue: "2026-01-25",
  excerpt:
    "Subang - CTU Chapter opened its 2026 environmental activities with another bamboo propagation session at CTU-Barili Campus.",
  body: [
    "Subang - CTU Chapter conducted its first bamboo propagation activity of 2026 on January 25, continuing the chapter's environmental sustainability and ecological restoration efforts at Cebu Technological University - Barili Campus.",
    "The activity was spearheaded by Subang Philippines President Peter John C. Enorio and co-facilitated by Subang - CTU Volunteer Miles Wilven Ayuban.",
    "Subang - CTU officers Ron Janbert P. Ofquila, Ciara Mari M. Brigoli, and Andrewkyle E. Oroc supported the activity, with CTU-Barili BSAB-1 student Yogi Christ P. Agan also participating.",
    "The activity provided volunteers and students with practical experience in bamboo propagation while continuing the chapter's broader environmental work at the campus."
  ],
  image: "/assets/stories/first-bamboo-propagation-activity-2026.jpg",
  category: "Environmental Sustainability",
  partner: "CTU-Barili"
},

{
  slug: "subang-echo-episode-two-ambisyon-natin-2040-2026",
  type: "Press Release",
  title: "Subang ECHO Episode Two Explores Ambisyon Natin 2040",
  date: "January 31, 2026",
  dateValue: "2026-01-31",
  excerpt:
    "Subang ECHO Episode Two continued the second season with a discussion on Ambisyon Natin 2040 featuring guest Jannah T. Sobiono.",
  body: [
    "Subang ECHO: Shaping Tomorrow Today continued its second season with Episode Two on January 31, 2026, featuring a discussion on Ambisyon Natin 2040 with guest Jannah T. Sobiono.",
    "The episode was broadcast through DYNE Radyo Kahimsog 97.5 and Facebook Live as part of the continuing Subang ECHO series.",
    "The episode contributed to the program's broader objective of creating accessible conversations on youth participation, national development, and inclusive community development.",
    "Through its continuing broadcasts, Subang ECHO provides a platform where young people and community participants can engage with development issues and connect national aspirations with local realities."
  ],
  image: "/assets/press/subang-echo-episode-two-ambisyon-natin-2040-2026.jpg",
  category: "Youth Leadership & Participation",
  partner: "DYNE Radyo Kahimsog 97.5"
},

{
  slug: "fsg-subang-black-bamboo-propagation-2026",
  type: "Project Story",
  title: "FSG Officers Conduct Black Bamboo Propagation Activity at CTU-Barili",
  date: "January 31, 2026",
  dateValue: "2026-01-31",
  excerpt:
    "FSG-CTU officers and Subang - CTU volunteers worked together on black bamboo propagation at CTU-Barili as part of their continuing environmental initiatives.",
  body: [
    "The Federation of Student Governments - Cebu Technological University, Inc. and Subang - CTU Chapter conducted a Black Bamboo propagation activity at Cebu Technological University - Barili Campus on January 31, 2026.",
    "The activity was spearheaded by Peter John C. Enorio, President of Subang Philippines, and Shaina Faith D. Visorro, President of the Subang - CTU Chapter, with coordination from Dennis B. Bendulo, Miles Wilven Ayuban, and Rod Santiago Lebumfacil Jr.",
    "The session began with an orientation and demonstration on black bamboo propagation, followed by a hands-on planting activity. Participants gained practical experience in propagation while learning about the potential role of bamboo in environmental restoration and sustainability.",
    "FSG-CTU officers and Subang - CTU volunteers participated throughout the activity, strengthening collaboration between student leaders and volunteer groups.",
    "The initiative contributed to the continuing environmental work of Subang - CTU while providing an action-based learning opportunity for student leaders."
  ],
  image: "/assets/stories/fsg-subang-black-bamboo-propagation-2026.jpg",
  category: "Environmental Sustainability",
  partner: "FSG-CTU, Inc."
},

{
  slug: "fsg-subang-adopt-a-hectare-maintenance-transplanting-2026",
  type: "Project Story",
  title: "FSG Officers and Subang - CTU Continue Adopt-a-Hectare Site Maintenance and Tree Transplanting",
  date: "January 31, 2026",
  dateValue: "2026-01-31",
  excerpt:
    "FSG-CTU officers and Subang - CTU volunteers continued the Adopt-a-Hectare project through site maintenance and tree transplanting at CTU-Barili.",
  body: [
    "The Federation of Student Governments - Cebu Technological University, Inc. and Subang - CTU Chapter conducted an Adopt-a-Hectare Project site maintenance and tree transplanting activity at Cebu Technological University - Barili Campus on January 31, 2026.",
    "The activity was led by Subang Volunteer Miles Wilven Ayuban, with support from Peter John C. Enorio, Shaina Faith D. Visorro, Dennis B. Bendulo, and Volunteer Intern Rod Santiago Lebumfacil Jr.",
    "Participants began with an orientation on the objectives of the Adopt-a-Hectare Project before carrying out hands-on site maintenance. Areas planted with kamagong were cleaned and maintained, while participants also transplanted pajo mango as part of the continuing development of the site.",
    "The activity provided participants with practical experience in tree maintenance and transplanting while reinforcing the importance of continued care for established environmental projects.",
    "The joint activity strengthened collaboration among student leaders from different CTU campuses and contributed to the continuing environmental stewardship work of the Adopt-a-Hectare Project."
  ],
  image:
    "/assets/stories/fsg-subang-adopt-a-hectare-maintenance-transplanting-2026.jpg",
  category: "Environmental Sustainability",
  partner: "FSG-CTU, Inc."
},

{
  slug: "fsg-subang-breadfruit-marcotting-2026",
  type: "Project Story",
  title: "FSG Officers Lead Breadfruit Propagation Through Marcotting at CTU-Barili",
  date: "January 31, 2026",
  dateValue: "2026-01-31",
  excerpt:
    "FSG-CTU officers and Subang - CTU volunteers conducted breadfruit propagation through marcotting, combining practical agricultural learning with sustainable food production.",
  body: [
    "The Federation of Student Governments - Cebu Technological University, Inc. and Subang - CTU Chapter conducted a breadfruit propagation activity through marcotting at Cebu Technological University - Barili Campus on January 31, 2026.",
    "The activity was led by Dennis B. Bendulo, Subang Human Resources Officer, with support from Peter John C. Enorio, Shaina Faith D. Visorro, Miles Wilven Ayuban, and Volunteer Intern Rod Santiago Lebumfacil Jr.",
    "Participants were introduced to marcotting as a vegetative propagation technique that can produce new plants from a parent tree while retaining desirable characteristics. The hands-on activity allowed participants to apply the technique directly to breadfruit propagation.",
    "The activity connected agricultural knowledge with practical food production and environmental stewardship while providing student leaders with an opportunity to learn a propagation method that can support future planting and production.",
    "The joint initiative also strengthened collaboration between FSG-CTU and Subang - CTU in promoting sustainable agriculture and action-based learning."
  ],
  image: "/assets/stories/fsg-subang-breadfruit-marcotting-2026.jpg",
  category: "Food Security & Sustainable Agriculture",
  partner: "FSG-CTU, Inc."
},

{
  slug: "fsg-subang-river-cleanup-ctu-barili-2026",
  type: "Project Story",
  title: "FSG Officers and Subang - CTU Volunteers Join River Cleanup at CTU-Barili",
  date: "January 31, 2026",
  dateValue: "2026-01-31",
  excerpt:
    "FSG-CTU officers and Subang - CTU volunteers worked together in a river cleanup activity at CTU-Barili, promoting environmental responsibility and youth participation.",
  body: [
    "The Federation of Student Governments - Cebu Technological University, Inc. and Subang - CTU Chapter conducted a River Clean-up Drive at Cebu Technological University - Barili Campus on January 31, 2026.",
    "The activity was led by Peter John C. Enorio, President of Subang Philippines, with support from Dennis B. Bendulo, Shaina Faith D. Visorro, Miles Wilven Ayuban, and Volunteer Intern Rod Santiago Lebumfacil Jr.",
    "FSG-CTU officers and Subang - CTU volunteers worked together along the river area, removing waste materials from the riverbanks and helping maintain the surrounding environment.",
    "Beyond the cleanup itself, the activity served as a practical learning experience on waste management, collective responsibility, and environmental stewardship.",
    "The joint initiative demonstrated how student organizations and volunteer groups can collaborate on practical environmental action within the campus community."
  ],
  image: "/assets/stories/fsg-subang-river-cleanup-ctu-barili-2026.jpg",
  category: "Waste Management & Circularity",
  partner: "FSG-CTU, Inc."
},

{
  slug: "subang-echo-episode-three-sdgs-2026",
  type: "Press Release",
  title: "Subang ECHO Episode Three Focuses on the Sustainable Development Goals",
  date: "February 7, 2026",
  dateValue: "2026-02-07",
  excerpt:
    "Subang ECHO continued its second season with Episode Three, featuring a discussion on the United Nations Sustainable Development Goals with Karis Philomine R. Palomar.",
  body: [
    "Subang ECHO: Shaping Tomorrow Today continued its second season with Episode Three on February 7, 2026, featuring a discussion on the United Nations Sustainable Development Goals.",
    "The episode featured Karis Philomine R. Palomar as guest, providing an opportunity to discuss the Sustainable Development Goals and their relevance to youth participation and community action.",
    "The episode formed part of Subang ECHO's continuing series of conversations on development, sustainability, volunteerism, and youth engagement.",
    "Through the program, Subang continues to provide a platform for young people and communities to exchange perspectives and connect broader development goals with local action."
  ],
  image: "/assets/press/subang-echo-episode-three-sdgs-2026.jpg",
  category: "Youth Leadership & Participation",
  partner: "DYNE Radyo Kahimsog 97.5"
},

{
  slug: "subang-ctu-bamboo-propagation-march-14-2026",
  type: "Project Story",
  title: "Subang - CTU Conducts Another Bamboo Propagation Activity at CTU-Barili",
  date: "March 14, 2026",
  dateValue: "2026-03-14",
  excerpt:
    "Subang - CTU volunteers and interns continued bamboo propagation at CTU-Barili as part of the chapter's ongoing environmental sustainability work.",
  body: [
    "Subang - CTU Chapter conducted another bamboo propagation activity at Cebu Technological University - Barili Campus on March 14, 2026, continuing its environmental sustainability and ecological restoration efforts.",
    "The activity was spearheaded by Subang Philippines President Peter John C. Enorio, together with Subang - CTU Chapter Volunteer Miles Wilven Ayuban and Volunteer Interns Yogi Christ P. Agan, Jannah T. Sobiono, Karis Philomine R. Palomar, and Janice D. Remobatac.",
    "The activity provided volunteers and interns with hands-on experience in bamboo propagation and continued the chapter's efforts to engage students in practical environmental action.",
    "Bamboo propagation forms part of the broader environmental work of Subang Philippines and its campus chapters, including initiatives related to ecosystem restoration, climate resilience, and youth participation.",
    "Through continued field activities, Subang - CTU provides young volunteers with opportunities to contribute directly to environmental initiatives while developing practical skills in sustainability."
  ],
  image:
    "/assets/stories/subang-ctu-bamboo-propagation-march-14-2026.jpg",
  category: "Environmental Sustainability",
  partner: "CTU-Barili"
},
  {
  slug: "subang-ctu-welcomes-second-batch-volunteer-interns-2025",
  type: "Volunteer Story",
  title: "Subang - CTU Welcomes Second Batch of Volunteer Interns",
  date: "February 10, 2025",
  dateValue: "2025-02-10",
  excerpt:
    "Subang - CTU Chapter welcomed its second batch of volunteer interns through an orientation and oath-taking activity at CTU-Barili.",
  body: [
    "Subang - Cebu Technological University Chapter welcomed its second batch of volunteer interns on February 10, 2025, marking another step in the chapter's continuing effort to provide young people with meaningful opportunities for volunteer service and community development.",
    "The orientation and oath-taking activity was led by Dennis B. Bendulo, Director for Human Resources, with support from the chapter's vice presidents and other volunteers. Shaina Faith D. Visorro formally welcomed the new interns, while Sean B. Tellidua delivered the Statement of Purpose.",
    "The new volunteers were introduced to five working areas within the chapter: Education Affairs, Community Affairs, Environmental Affairs, Agriculture and Food Systems, and Science and Technology. These areas provide interns with opportunities to contribute their skills while gaining practical experience in community-based initiatives.",
    "Founder and National Executive President Peter John C. Enorio also addressed the new volunteers, emphasizing the value of service, participation, and responsibility in contributing to Subang's work.",
    "The activity concluded with the oath-taking ceremony, formally welcoming the second batch of volunteer interns into the Subang - CTU Chapter and its continuing work with communities and partner institutions."
  ],
  image:
    "/assets/stories/subang-ctu-welcomes-second-batch-volunteer-interns-2025.jpg",
  category: "Volunteerism",
  partner: "CTU-Barili"
},

{
  slug: "paglaum-farm-harvest-february-12-2025",
  type: "Project Story",
  title: "CTU and Subang - CTU Continue Paglaum Farm Harvests, Bringing Fresh Produce to the Community",
  date: "February 12, 2025",
  dateValue: "2025-02-12",
  excerpt:
    "Another Paglaum Farm harvest at CTU-Barili brought fresh tomatoes, okra, and chilis to students, staff, and members of the local community.",
  body: [
    "Paglaum Farm at Cebu Technological University - Barili Campus continued its regular harvests on February 12, 2025, as CTU and Subang - CTU volunteers gathered fresh produce for distribution to members of the campus and surrounding community.",
    "The harvest included tomatoes, okra, and chilis cultivated through the farm's continuing food production activities. The produce was distributed to CTU-Barili students, staff, and members of the local community.",
    "The activity was led by Sean B. Tellidua, Mary Danielle T. Descallar, and volunteer interns Mary Rose D. Razo and Maria Kristina M. Pacaldo.",
    "The continuing harvests form part of Paglaum Farm's broader effort to connect sustainable food production with student welfare, agricultural learning, and community support. The initiative contributes to the broader goal of advancing food security and supports Sustainable Development Goal 2, Zero Hunger."
  ],
  image: "/assets/stories/paglaum-farm-harvest-february-12-2025.jpg",
  category: "Food Security & Sustainable Agriculture",
  partner: "CTU-Barili"
},

{
  slug: "paglaum-farm-harvest-february-15-2025",
  type: "Project Story",
  title: "Subang - CTU Leads Another Successful Harvesting Session for Paglaum Farm Project",
  date: "February 15, 2025",
  dateValue: "2025-02-15",
  excerpt:
    "Subang - CTU volunteers led another Paglaum Farm harvesting session, bringing fresh produce from the farm to students and members of the community.",
  body: [
    "Subang - CTU volunteers continued the Paglaum Farm project with another harvesting session on February 15, 2025, contributing to the farm's ongoing production and distribution of fresh vegetables.",
    "The activity involved the harvesting and preparation of produce for distribution to members of the CTU-Barili community. The session was led by Peter John C. Enorio together with volunteer interns Pearl Marie F. Caballero, Benzi Asher C. Obcial, and Leanne Danielle T. Trasporte.",
    "The activity reflects Paglaum Farm's continuing approach of combining sustainable food production with student support and community participation. Regular harvesting also provides volunteers and interns with opportunities to take part in practical agricultural work.",
    "Through these continuing activities, Subang - CTU contributes to campus-based food security efforts while promoting sustainable agriculture and volunteer participation."
  ],
  image: "/assets/stories/paglaum-farm-harvest-february-15-2025.jpg",
  category: "Food Security & Sustainable Agriculture",
  partner: "CTU-Barili"
},

{
  slug: "bamboo-propagation-site-maintenance-february-15-2025",
  type: "Project Story",
  title: "Bamboo Propagation and Site Maintenance Strengthen Environmental Efforts at CTU-Barili",
  date: "February 15, 2025",
  dateValue: "2025-02-15",
  excerpt:
    "Subang - CTU volunteers and CWTS trainees continued bamboo propagation and Adopt-A-Hectare site maintenance at CTU-Barili.",
  body: [
    "Environmental activities at Cebu Technological University - Barili Campus continued on February 15, 2025, with a combined session focused on bamboo propagation and the maintenance of areas developed through the Adopt-A-Hectare initiative.",
    "CWTS trainees participated in the propagation of black bamboo, while volunteers and trainees also carried out maintenance activities within the Adopt-A-Hectare site, including work around established kamagong areas.",
    "The activities were led by Peter John C. Enorio, Shaina Faith D. Visorro, and Cedrick B. Parojinog, with support from CWTS staff Dave M. Baran and Jan Emmanuel Lausa. CTU-Barili SSG Senator Xyrah P. Cuizon also supported the activity.",
    "The combined work allowed participants to contribute both to the expansion of planting materials and to the continued care of previously established areas. Regular site maintenance remains an important part of ensuring that environmental projects are sustained beyond their initial planting activities."
  ],
  image:
    "/assets/stories/bamboo-propagation-site-maintenance-february-15-2025.jpg",
  category: "Environmental Sustainability",
  partner: "CTU-Barili"
},

{
  slug: "black-bamboo-riparian-maintenance-february-15-2025",
  type: "Project Story",
  title: "Subang Leads Black Bamboo Propagation and Riparian Project Maintenance at CTU-Barili",
  date: "February 15, 2025",
  dateValue: "2025-02-15",
  excerpt:
    "Subang - CTU volunteers and NSTP participants continued black bamboo propagation while conducting site assessment and maintenance within the campus riparian project.",
  body: [
    "Subang - CTU continued its environmental work at Cebu Technological University - Barili Campus on February 15, 2025, through a combined activity involving black bamboo propagation and maintenance of the campus riparian project.",
    "NSTP-CWTS trainees and staff participated in site activities that included assessing existing areas, carrying out maintenance work, and preparing additional black bamboo planting materials. The session provided participants with practical experience in supporting an ongoing environmental restoration effort.",
    "The activity also included visitation and maintenance within the riparian project area, allowing volunteers and participants to monitor previously established work while identifying areas requiring continued attention.",
    "By combining propagation with site maintenance, the activity supported both the expansion and long-term care of the campus environmental initiative."
  ],
  image:
    "/assets/stories/black-bamboo-riparian-maintenance-february-15-2025.jpg",
  category: "Environmental Sustainability",
  partner: "CTU-Barili"
},

{
  slug: "paglaum-farm-harvest-february-23-2025",
  type: "Project Story",
  title: "Subang - CTU Conducts Another Harvesting Session for Paglaum Farm Project",
  date: "February 23, 2025",
  dateValue: "2025-02-23",
  excerpt:
    "Subang - CTU volunteers and interns continued Paglaum Farm's regular harvesting and distribution activities at CTU-Barili.",
  body: [
    "Paglaum Farm continued its regular harvesting activities on February 23, 2025, with Subang - CTU volunteers and interns taking part in the collection and preparation of fresh produce.",
    "The session was led by Peter John C. Enorio, together with volunteers Ron Janbert P. Ofquila, Ciara Mari M. Brigoli, and Mary Danielle T. Descallar, and interns John Niño Pielago, Benzi Asher C. Obcial, and Iyz Phoebemae Del Socorro.",
    "The harvested produce was prepared for distribution as part of Paglaum Farm's continuing effort to make fresh agricultural products available to students and members of the local community.",
    "The activity reflects the project's continuing connection between sustainable food production, volunteer participation, and community support."
  ],
  image: "/assets/stories/paglaum-farm-harvest-february-23-2025.jpg",
  category: "Food Security & Sustainable Agriculture",
  partner: "CTU-Barili"
},

{
  slug: "subang-ctu-welcomes-third-batch-volunteer-interns-2025",
  type: "Volunteer Story",
  title: "Subang - CTU Welcomes 3rd Batch of Volunteer Interns",
  date: "March 10, 2025",
  dateValue: "2025-03-10",
  excerpt:
    "Subang - CTU Chapter welcomed its third batch of volunteer interns through an orientation and oath-taking activity at the chapter office in Barili.",
  body: [
    "Subang - Cebu Technological University Chapter welcomed its third batch of volunteer interns on March 10, 2025, through an orientation and oath-taking activity held at the Subang Office in Barili.",
    "The activity opened with Dennis B. Bendulo, followed by a Statement of Purpose from John Gielai O. Sedentario. Chapter officers, including Shaina Faith D. Visorro and Cedrick B. Parojinog, together with other vice presidents and Executive Vice President Joshua Ray P. Calago, provided the new interns with an overview of the organization's work and volunteer structure.",
    "Founder and National Executive President Peter John C. Enorio also delivered a message to the new volunteers, highlighting the importance of participation and service in community development.",
    "The orientation concluded with the formal oath-taking of the third batch of volunteer interns, marking their entry into the continuing volunteer work of Subang - CTU Chapter."
  ],
  image:
    "/assets/stories/subang-ctu-welcomes-third-batch-volunteer-interns-2025.jpg",
  category: "Volunteerism",
  partner: "CTU-Barili"
},

{
  slug: "lakbay-agham-women-science-technology-2025",
  type: "Project Story",
  title: "CTU-Barili Celebrates Women in Science and Technology with 'Lakbay Agham'",
  date: "March 21, 2025",
  dateValue: "2025-03-21",
  excerpt:
    "Subang - CTU Chapter and the CTU-Barili GAD Office marked National Women's Month 2025 through Lakbay Agham, a learning activity highlighting women's participation in science and technology.",
  body: [
    "Subang - CTU Chapter and the CTU-Barili Gender and Development Office marked National Women's Month 2025 through 'Lakbay Agham: Kababaihan sa Siyensa at Teknolohiya,' an activity held at the campus Smart Room.",
    "Shaina Faith D. Visorro opened the activity and shared the purpose of creating a space for learning and discussion on women's participation in science and technology. Peter John C. Enorio also discussed Republic Act No. 9262, or the Anti-Violence Against Women and Their Children Act.",
    "The activity featured a presentation by Shaina Faith D. Visorro on women in science and technology, followed by a contribution from Dr. Daisy L. Obiso through the #JuanaSays campaign. Mary Grace Flores, GAD Director, also took part in the activity.",
    "John Gielai O. Sedentario delivered the closing remarks, bringing the session to a close with a continued emphasis on awareness, participation, and opportunities for women in science and technology."
  ],
  image:
    "/assets/stories/lakbay-agham-women-science-technology-2025.jpg",
  category: "Social Inclusion & Equity",
  partner: "CTU-Barili GAD Office"
},

{
  slug: "academic-writing-workshop-series-launch-2025",
  type: "Project Story",
  title: "Subang - CTU Chapter and R&D Office Launch Academic Writing Workshop Series",
  date: "March 25, 2025",
  dateValue: "2025-03-25",
  excerpt:
    "Subang - CTU Chapter, the R&D Office, and the Institute of Agricultural and Biosystems Engineering launched a workshop series designed to strengthen students' academic writing and research skills.",
  body: [
    "Subang - Cebu Technological University Chapter, the CTU-Barili Research and Development Office, and the Institute of Agricultural and Biosystems Engineering launched an Academic Writing Workshop Series on March 25, 2025.",
    "Dr. Jeremy P. Mondejar opened the activity, while Shaina Faith D. Visorro shared a statement on the purpose of the workshop series and the importance of strengthening students' research and academic writing capabilities.",
    "Dr. Mondejar facilitated the workshop, covering key areas of academic research and writing including research objectives, literature review, methodology, citation practices, and the responsible use of AI tools. The session also provided participants with an opportunity to raise questions and discuss research-related concerns during the open forum.",
    "Peter John C. Enorio delivered the closing remarks, concluding the first session of the workshop series and setting the stage for succeeding learning activities."
  ],
  image:
    "/assets/stories/academic-writing-workshop-series-launch-2025.jpg",
  category: "Education & Capacity Building",
  partner: "CTU-Barili R&D Office"
},

{
  slug: "academic-writing-workshop-second-session-2025",
  type: "Project Story",
  title: "Subang - CTU Chapter, R&D Office, and College of Education Hold 2nd Academic Writing Workshop",
  date: "March 27, 2025",
  dateValue: "2025-03-27",
  excerpt:
    "The second session of the Academic Writing Workshop Series continued with practical discussions on research design, literature reviews, methodologies, and academic writing.",
  body: [
    "The Academic Writing Workshop Series continued on March 27, 2025, with its second session organized by Subang - CTU Chapter, the CTU-Barili Research and Development Office, and the College of Education.",
    "Dr. Margarito B. Callao opened the session, followed by a Statement of Purpose from Peter John C. Enorio. Audie L. Cherry, a PhD candidate at Clemson University, facilitated the main learning session.",
    "The discussion covered research objectives, literature reviews, methodologies, citation practices, and the use of AI tools in academic work. Participants were also introduced to conceptual and theoretical frameworks and given opportunities to work through research proposals and research questions.",
    "The session included an open forum addressing research procedures, question formulation, sampling, and research ethics. Students from the College of Education and TLE participated in the workshop.",
    "Ciara Mari M. Brigoli led the closing portion of the activity and the distribution of awards and recognition to participants."
  ],
  image:
    "/assets/stories/academic-writing-workshop-second-session-2025.jpg",
  category: "Education & Capacity Building",
  partner: "CTU-Barili R&D Office"
},

{
  slug: "academic-writing-workshop-third-session-2025",
  type: "Project Story",
  title: "Subang - CTU Chapter, R&D Office, and CAFBC Continue Academic Writing Workshop Series in Its 3rd Run",
  date: "April 11, 2025",
  dateValue: "2025-04-11",
  excerpt:
    "The third session of the Academic Writing Workshop Series brought together research discussions on academic writing, research design, quantitative methods, and data analysis.",
  body: [
    "The Academic Writing Workshop Series continued with its third session on April 11, 2025, bringing the activity to the new CAFBC Multimedia Room at CTU-Barili.",
    "Valerie U. Pascual opened the session, which continued the series' focus on strengthening research and academic writing skills among participants.",
    "Audie L. Cherry led the morning session, revisiting research objectives, literature reviews, methodology, citation practices, and the responsible use of AI tools. The discussion also covered conceptual and theoretical frameworks as important components of research development.",
    "The afternoon session focused on quantitative research, data gathering, statistical treatment, and analysis. It was facilitated by Julius C. Medellin, MSc., PFT, OIC Chair of BS Food Technology.",
    "Janica Jay P. Pahayahay delivered the closing portion of the activity, concluding the third run of the workshop series."
  ],
  image:
    "/assets/stories/academic-writing-workshop-third-session-2025.jpg",
  category: "Education & Capacity Building",
  partner: "CTU-Barili R&D Office"
},

{
  slug: "adopt-a-hectare-maintenance-april-26-2025",
  type: "Project Story",
  title: "CTU-Barili Strengthens Environmental Stewardship Through 'Adopt a Hectare' Project",
  date: "April 26, 2025",
  dateValue: "2025-04-26",
  excerpt:
    "CWTS trainees and Subang - CTU volunteers continued the Adopt a Hectare project through site maintenance and care for growing trees at CTU-Barili.",
  body: [
    "Environmental stewardship efforts at Cebu Technological University - Barili Campus continued on April 26, 2025, through another maintenance activity under the Adopt a Hectare project.",
    "CWTS trainees and volunteers worked together to maintain the project area and care for growing trees, including soursop, berries, Java apple, and jackfruit.",
    "The activity was led by Shaina Faith D. Visorro, John Gielai O. Sedentario, and Gissa Mae C. Castino, with support from CWTS staff Dave M. Baran, Jan Emmanuel Lausa, Eden F. Nemeño, and Feil Hurvey C. Avenido.",
    "Regular maintenance allows participants to continue caring for trees beyond their initial planting and supports the long-term development of the Adopt a Hectare project as a campus-based environmental initiative."
  ],
  image:
    "/assets/stories/adopt-a-hectare-maintenance-april-26-2025.jpg",
  category: "Environmental Sustainability",
  partner: "CTU-Barili"
},

{
  slug: "kamagong-propagation-tree-growing-june-14-2025",
  type: "Project Story",
  title: "Subang - CTU Leads Kamagong Propagation and Tree-Growing Activity at CTU-Barili",
  date: "June 14, 2025",
  dateValue: "2025-06-14",
  excerpt:
    "Subang - CTU volunteers continued campus environmental work through kamagong propagation and tree-growing activities at CTU-Barili.",
  body: [
    "Subang - Cebu Technological University Chapter continued its environmental activities at CTU-Barili on June 14, 2025, through a kamagong propagation and tree-growing activity.",
    "Kamagong, scientifically known as Diospyros blancoi, was among the trees propagated and planted as part of the continuing effort to develop and care for the campus landscape.",
    "The activity was led by Peter John C. Enorio, with support from Ron Janbert P. Ofquila, Ciara Mari M. Brigoli, and Miles Wilven Ayuban.",
    "The activity provided volunteers with hands-on experience in tree propagation and planting while contributing to the continuing environmental work of Subang - CTU at the campus."
  ],
  image:
    "/assets/stories/kamagong-propagation-tree-growing-june-14-2025.jpg",
  category: "Environmental Sustainability",
  partner: "CTU-Barili"
},

{
  slug: "ctu-barili-nafte-2025",
  type: "Project Story",
  title: "CTU-Barili Participates in 3rd National Agriculture and Fisheries Technology Exhibition",
  date: "June 19, 2025",
  dateValue: "2025-06-19",
  excerpt:
    "CTU-Barili student leaders and representatives participated in the 3rd National Agriculture and Fisheries Technology Exhibition in Mandaue City to explore emerging technologies in agriculture and fisheries.",
  body: [
    "Representatives from Cebu Technological University - Barili Campus participated in the 3rd National Agriculture and Fisheries Technology Exhibition held at the Mandaue City Sports and Cultural Complex on June 19, 2025.",
    "Among the participants were Peter John C. Enorio, Peter Gabriel Suico, and Miles Wilven Ayuban, a Subang volunteer intern, together with Dr. Pet Roey L. Pascual. The group also engaged with the UrbanGrow Plant Box team, co-headed by Dr. Jerome B. Aguilar.",
    "During the exhibition, the participants explored agricultural and fisheries technologies and interacted with officials from the Department of Agriculture Regional Field Office 7, including Dr. Angel C. Enriquez, Dr. Wilberto Castillo, and Dr. Fabio Enriquez.",
    "The participation provided an opportunity for CTU-Barili representatives to learn about technologies and innovations relevant to agriculture and fisheries while connecting with practitioners and institutions working in the sector."
  ],
  image: "/assets/stories/ctu-barili-nafte-2025.jpg",
  category: "Food Security & Sustainable Agriculture",
  partner: "Department of Agriculture Regional Field Office 7"
},

{
  slug: "dennis-bendulo-gawad-subang-volunteer-story-2025",
  type: "Volunteer Story",
  title: "It's Not About What You Give, But Why You Give",
  date: "July 13, 2025",
  dateValue: "2025-07-13",
  excerpt:
    "For Dennis B. Bendulo, volunteerism grew from a life shaped by perseverance, agriculture, community, and the decision to show up where he was needed.",
  body: [
    "Dennis B. Bendulo, a BS Agriculture student specializing in Agronomy, became the sole recipient of the Gawad Subang award, a recognition that reflects not only his work as a volunteer but also the experiences that shaped his commitment to service.",
    "His journey began long before he became involved in Subang. As a young student, Dennis found ways to support himself and his education, selling Frutos candies in elementary school and bibingka in high school. By Grade 9, he was already a working student. After senior high school, uncertainty about whether he could continue to college was eased when a cousin and teacher offered him an opportunity to study while working.",
    "His parents and grandmother remained important sources of inspiration as he pursued agriculture. College brought its own challenges, including periods when friends helped him with food and other needs. Along the way, mentors such as Dr. Clea Anne V. Corsiga, whom he admired for her work in Soil Science, and Dr. Danny E. Carabio helped nurture his potential.",
    "Dennis initially had little interest in joining a student organization. That changed when he was invited by Kuya Rodney Sundo, then Subang Environmental Affairs Vice President. He eventually joined because of the organization's culture of volunteerism and its emphasis on contributing to communities without expecting something in return.",
    "His experience in agriculture also shaped his perspective on service. He often returns to the idea that people should look at what is most needed and respond accordingly. For agriculture students, he encourages them to recognize the importance of their field and the role agriculturists play in sustaining food production.",
    "Dennis' story offers a simple reflection on volunteerism: service is not always measured by the amount of resources a person can give. Sometimes, what matters most is the willingness to show up, take responsibility, and contribute where one is called to serve."
  ],
  image:
    "/assets/stories/dennis-bendulo-gawad-subang-volunteer-story-2025.jpg",
  category: "Volunteerism",
  partner: "Subang - CTU Chapter"
},
    {
    slug: "bamboo-propagation-aquaculture-preparation-2024",
    type: "Project Story",
    title: "Building Sustainability: Bamboo Propagation and Aquaculture Preparation",
    date: "Dec 7, 2024",
    dateValue: "2024-12-07",
    excerpt:
      "Subang - Cebu Technological University Chapter continued its bamboo propagation work while preparing a site for a planned aquaculture initiative.",
    body: [
      "On December 7, 2024, Subang - Cebu Technological University Chapter conducted another bamboo propagation session in collaboration with CWTS and LTS trainees of Cebu Technological University - Barili Campus.",
      "The activity focused on the propagation of Black Bamboo (Gigantochloa atroviolacea) while also preparing a site for a planned aquaculture project. The combined activity reflected the chapter's approach to linking environmental restoration with sustainable and innovative agricultural initiatives.",
      "Through hands-on work in propagation and site preparation, volunteers and students contributed to the continuing development of sustainability initiatives at the CTU-Barili campus.",
    ],
    image: "/assets/stories/bamboo-propagation-aquaculture-preparation-2024.jpg",
    category: "Environmental Sustainability",
    partner: "Cebu Technological University - Barili Campus",
  },

  {
    slug: "azolla-harvest-livestock-feed-2024",
    type: "Project Story",
    title: "Harvesting Azolla for Sustainable Livestock Feed Development",
    date: "Dec 13, 2024",
    dateValue: "2024-12-13",
    excerpt:
      "Subang - Cebu Technological University harvested Azolla as part of its continuing exploration of sustainable livestock feed production.",
    body: [
      "On December 13, 2024, Subang - Cebu Technological University Chapter harvested Azolla pinnata as part of its ongoing work exploring sustainable livestock feed production.",
      "The activity was led by Azolla Project Leader and Human Resource Director Dennis B. Bendulo, with volunteer interns Benzi Asher C. Obcial, Leanne Danielle T. Trasporte, and Kennie Jun A. Enecio participating in the harvest.",
      "The activity forms part of Subang - CTU's broader efforts to explore practical agricultural applications of Azolla while providing volunteers with hands-on experience in sustainable food and agricultural systems.",
    ],
    image: "/assets/stories/azolla-harvest-livestock-feed-2024.jpg",
    category: "Food Security & Sustainable Agriculture",
    partner: "Cebu Technological University - Barili Campus",
  },

  {
    slug: "subang-echo-third-episode-2024",
    type: "Project Story",
    title: "Subang ECHO Episode 3 Explores Education, Technology, and Environmental Awareness",
    date: "Dec 14, 2024",
    dateValue: "2024-12-14",
    excerpt:
      "The third Subang ECHO episode brought educators and practitioners together to discuss educational innovation, technology, and environmental awareness.",
    body: [
      "The third episode of Subang ECHO: Shaping Tomorrow Today was held on December 14, 2024, bringing together educators and education practitioners for discussions on educational innovation, technology integration, and environmental awareness.",
      "The episode was hosted by Subang President Peter John C. Enorio and Shaina Faith D. Visorro of Subang - Cebu Technological University Chapter. Featured speakers were Jun Mar S. Sibala, Engr. Edwin Jo M. Jardin, Felmarie D. Libato, Marilyn V. Aristas, Jocelyn L. Osmil, and Marilou S. Costuna.",
      "The program aired on DYNE Radyo Kahimsug 97.5 from 8:30 AM to 12:00 noon, followed by a Facebook livestream at 6:00 PM. Volunteer interns Jarryll Jay D. Fat and Dhemae D. Libusana supported the program as part of the technical staff.",
      "Through Subang ECHO, Subang created a platform for practitioners and community members to exchange knowledge and discuss issues connected to education, technology, sustainability, and community development.",
    ],
    image: "/assets/stories/subang-echo-third-episode-2024.jpg",
    category: "Education & Capacity Building",
    partner: "DYNE Radyo Kahimsug 97.5",
  },

  {
    slug: "microbial-composting-training-moa-2024",
    type: "Project Story",
    title: "Advancing Community Composting Through Training and Partnership",
    date: "Dec 16, 2024",
    dateValue: "2024-12-16",
    excerpt:
      "CTU-Barili, Barangay Kalubihan, and Subang volunteers strengthened community composting through technical training and a formal partnership.",
    body: [
      "On December 16, 2024, Cebu Technological University - Barili Campus and the Barangay Council of Kalubihan conducted a Microbial Composting Training and Memorandum of Agreement signing at the CTU-Barili campus, with volunteers from Subang - Cebu Technological University Chapter participating in the activity.",
      "The initiative was spearheaded by the CTU-Barili Resource Generation Office under Dr. Danny E. Carabio and Subang - Cebu Technological University Chapter. CTU-Barili Campus Director Dr. Romeo C. Lepiten opened the program, while Subang President Peter John C. Enorio delivered the statement of purpose.",
      "Participants received technical sessions on the operation and maintenance of rotary composters and biomass shredders, followed by training on microbial composting and home-based composting techniques. The sessions included demonstrations at the Materials Recovery and Microbial Composting Facility.",
      "A Pledge of Commitment was administered by Punong Barangay Hon. Rebecca S. Barbac, followed by the ceremonial signing of the commitment. The program concluded with the signing of a MOA between CTU-Barili Campus and the Barangay Council of Kalubihan to advance microbial composting initiatives in the community.",
      "Participants also received seed compost as a starter agent for home-based microbial composting. The activity strengthened collaboration among the university, barangay, and Subang volunteers in promoting practical approaches to waste recovery and sustainable agriculture.",
    ],
    image: "/assets/stories/microbial-composting-training-moa-2024.jpg",
    category: "Waste Management & Circularity",
    partner:
      "Cebu Technological University - Barili Campus and Barangay Kalubihan",
  },

  {
    slug: "penning-the-future-campus-journalism-workshop-2024",
    type: "Project Story",
    title: "Penning the Future: A Campus Journalism Workshop",
    date: "Dec 18, 2024",
    dateValue: "2024-12-18",
    excerpt:
      "Subang - Cebu Technological University Chapter conducted a hands-on campus journalism workshop for budding student journalists from Cagay National High School.",
    body: [
      "On December 17, 2024, Subang - Cebu Technological University Chapter conducted Penning the Future: A Campus Journalism Workshop at the Multimedia Room of the New CAFBC Building at CTU-Barili Campus.",
      "The workshop, themed \"Empowering Tomorrow's Storytellers: Mastering the Basics of Campus Journalism,\" was designed to strengthen the journalism skills of budding campus journalists from Cagay National High School.",
      "The program included sessions on copyreading and headline writing by Krista Marie Frances C. Bicada, science and technology writing by Shaina Faith D. Visorro, news and column writing by Peter John C. Enorio, feature, sports, and editorial writing by Ruth C. Enorio, and editorial cartooning by Raf B. Jimenez.",
      "Participants were grouped according to their selected journalism categories and engaged in discussions, practical exercises, and mentoring. The afternoon hands-on activity allowed participants to produce articles, headlines, editorials, and editorial cartoons, followed by an open forum and personalized feedback.",
      "The workshop concluded with the distribution of certificates and closing remarks from Cagay National High School Principal Marilou S. Costuna, who emphasized honesty and integrity in journalism. The activity provided students with practical communication skills while strengthening the role of youth storytelling in education and community engagement.",
    ],
    image: "/assets/stories/penning-the-future-campus-journalism-workshop-2024.jpg",
    category: "Education & Capacity Building",
    partner: "Cagay National High School",
  },

  {
    slug: "subang-christmas-special-badian-2024",
    type: "Project Story",
    title: "Subang Christmas Special at Badian Central School",
    date: "Dec 20, 2024",
    dateValue: "2024-12-20",
    excerpt:
      "Subang volunteers joined Badian Central School's Christmas celebration through games, fellowship, and activities for children and families.",
    body: [
      "On December 20, 2024, Subang joined Badian Central School's PTA Christmas Party and Family Fun Day through Subang: A Christmas Special, a community activity centered on games, fellowship, and giving.",
      "The program was led by Cedrick B. Parojinog, Subang - Cebu Technological University Education Vice President. Shaina Faith D. Visorro delivered the statement of purpose, while Peter John C. Enorio and Dennis B. Bendulo hosted the main program with support from Subang volunteers.",
      "The volunteers facilitated interactive games and activities for the children, including a dance presentation, while students received gifts intended to make learning and the holiday celebration more enjoyable.",
      "The activity provided an opportunity for Subang volunteers to engage with children and families through community-based service, combining recreation, volunteerism, and support for children's learning and well-being.",
    ],
    image: "/assets/stories/subang-christmas-special-badian-2024.jpg",
    category: "Youth Leadership & Participation",
    partner: "Badian Central School",
  },

  {
    slug: "pond-preparation-ctu-barili-2025",
    type: "Project Story",
    title: "Preparing the Ground: Pond Development at CTU-Barili",
    date: "Jan 4, 2025",
    dateValue: "2025-01-04",
    excerpt:
      "Subang - Cebu Technological University began preparing a pond site for a planned aquaculture initiative at CTU-Barili Campus.",
    body: [
      "On January 4, 2025, Subang - Cebu Technological University Chapter conducted a pond preparation activity at Cebu Technological University - Barili Campus in collaboration with CWTS and LTS trainees.",
      "The activity involved clearing operations and digging as part of preparations for the chapter's planned aquaculture initiative. The effort was led by Subang - CTU President Peter John C. Enorio, with support from CWTS and LTS staff Jan Emmanuel Lausa and Feil Hurvey Avenido.",
      "Subang - CTU volunteer interns Judinel B. Batusbatusan, Pearl Shanea D. Mahinay, and Dhemae D. Libusana facilitated the activity.",
      "The site preparation marked an early step in developing an agricultural and aquaculture initiative designed to complement the chapter's broader work in food systems and sustainability.",
    ],
    image: "/assets/stories/pond-preparation-ctu-barili-2025.jpg",
    category: "Food Security & Sustainable Agriculture",
    partner: "Cebu Technological University - Barili Campus",
  },

  {
    slug: "paglaum-farm-first-harvest-2025",
    type: "Project Story",
    title: "Paglaum Farm Harvests Its First Batch of Crops",
    date: "Jan 23, 2025",
    dateValue: "2025-01-23",
    excerpt:
      "Paglaum Farm marked its first harvest of tomatoes, okra, and chilis, connecting agricultural learning with food production and community support.",
    body: [
      "On January 23, 2025, Cebu Technological University - Barili Campus and Subang - Cebu Technological University Agriculture and Food Systems Department marked the first harvest of the Paglaum Farm Project.",
      "The harvest included tomatoes, okra, and chilis cultivated by first-year BS Agribusiness and BS Agriculture students under the guidance of Subang Adviser Dr. Pet Roey L. Pascual. The project provides students with hands-on agricultural experience while supporting food production within the university and surrounding community.",
      "Subang volunteer interns Kesiah C. Montesuso, Mary Rose D. Razo, and Leanne Danielle T. Trasporte joined Subang - CTU officers Peter John C. Enorio, Krista Marie Frances C. Bicada, Rodney Joseph B. Sundo, and Augustin P. Tapinit during the harvest.",
      "The produce was distributed among students, volunteers, and members of the local community in Barili. The first harvest demonstrated how campus-based food production can connect agricultural education with practical support for food accessibility.",
    ],
    image: "/assets/stories/paglaum-farm-first-harvest-2025.jpg",
    category: "Food Security & Sustainable Agriculture",
    partner: "Cebu Technological University - Barili Campus",
  },

  {
    slug: "permaculture-training-pagtambayayong-2025",
    type: "Project Story",
    title: "Learning Permaculture: Subang - CTU and Pagtambayayong Training",
    date: "Jan 27, 2025",
    dateValue: "2025-01-27",
    excerpt:
      "Subang - Cebu Technological University and Pagtambayayong conducted practical training on permaculture, water management, and soil conservation.",
    body: [
      "On January 27, 2025, Subang - Cebu Technological University Chapter and Pagtambayayong - A Foundation for Mutual Aid, Inc. conducted a Permaculture Training in Cagay, Barili, Cebu.",
      "The training covered permaculture layouting, theoretical principles, and site application, giving participants practical exposure to regenerative approaches to agriculture. One of the key components was the use of the swale method for water management and soil conservation.",
      "The training was led by Roberto L. Bajenting, formerly of the Department of Agrarian Reform - Province of Cebu, with assistance from Arturo Villanueva and his family.",
      "Participants from Subang included Peter John C. Enorio, Sean B. Tellidua, Shaina Faith D. Visorro, Dennis B. Bendulo, and volunteer interns Queenelene Faith N. Perpetua, James Adam P. Posas, and Karen L. Defuntorum. The activity was supervised by Subang Adviser Dr. Pet Roey L. Pascual.",
      "The collaboration provided volunteers and participants with practical knowledge on permaculture and agroforestry while strengthening shared efforts toward sustainable agriculture and food security.",
    ],
    image: "/assets/stories/permaculture-training-pagtambayayong-2025.jpg",
    category: "Food Security & Sustainable Agriculture",
    partner: "Pagtambayayong - A Foundation for Mutual Aid, Inc.",
  },

  {
    slug: "paglaum-farm-harvest-january-29-2025",
    type: "Project Story",
    title: "Paglaum Farm Harvests Another Batch of Fresh Produce",
    date: "Jan 29, 2025",
    dateValue: "2025-01-29",
    excerpt:
      "Another Paglaum Farm harvest supplied fresh tomatoes, okra, and chilis to selected CTU-Barili students while providing hands-on agricultural learning.",
    body: [
      "On January 29, 2025, Cebu Technological University and Subang - Cebu Technological University harvested another batch of fresh produce from the Paglaum Farm Project at CTU-Barili Campus.",
      "The harvest included tomatoes, okra, and chilis cultivated by first-year BS Agribusiness and BS Agriculture students under the guidance of Subang Adviser Dr. Pet Roey L. Pascual.",
      "The activity continued the project's dual role of providing students with hands-on agricultural learning while producing fresh food for the university community. Following the harvest, the produce was distributed to selected CTU-Barili students.",
      "The continuing harvests demonstrated the practical application of campus-based agriculture in supporting food accessibility, student learning, and sustainable food production.",
    ],
    image: "/assets/stories/paglaum-farm-harvest-january-29-2025.jpg",
    category: "Food Security & Sustainable Agriculture",
    partner: "Cebu Technological University - Barili Campus",
  },

  {
    slug: "paglaum-farm-harvest-february-1-2025",
    type: "Project Story",
    title: "Paglaum Farm Continues Its Harvests for Students and Communities",
    date: "Feb 1, 2025",
    dateValue: "2025-02-01",
    excerpt:
      "Paglaum Farm continued its cycle of cultivation, harvest, and distribution, providing fresh produce to students and community members in Barili.",
    body: [
      "On February 1, 2025, Cebu Technological University and Subang - Cebu Technological University conducted another harvest from the Paglaum Farm Project at CTU-Barili Campus.",
      "The harvest included tomatoes, okra, and chilis, which were distributed to students and local community members in Barili. The activity was facilitated by Subang Executive President Peter John C. Enorio, Resource Generation Director Ron Janbert P. Ofquila, and volunteers Ciara Mari M. Brigoli, Mary Danielle T. Descallar, and Iyz Phoebemae Del Socorro.",
      "Led jointly by CTU and Subang - CTU's Agriculture and Food Systems Department, Paglaum Farm continues to provide students with practical agricultural experience while producing fresh food for the university and surrounding community.",
      "The activity represents the continuing cycle of cultivation, harvest, and distribution that forms the foundation of the project's contribution to food security and student welfare.",
    ],
    image: "/assets/stories/paglaum-farm-harvest-february-1-2025.jpg",
    category: "Food Security & Sustainable Agriculture",
    partner: "Cebu Technological University - Barili Campus",
  },

  {
    slug: "black-bamboo-propagation-cwts-february-1-2025",
    type: "Project Story",
    title: "Propagating Black Bamboo with CWTS Trainees",
    date: "Feb 1, 2025",
    dateValue: "2025-02-01",
    excerpt:
      "More than 100 black bamboo plants were propagated with CWTS trainees, combining hands-on learning with continuing environmental work at CTU-Barili.",
    body: [
      "On February 1, 2025, Cebu Technological University and Subang - Cebu Technological University conducted another Black Bamboo (Phyllostachys nigra) propagation session in collaboration with CWTS trainees at CTU-Barili Campus.",
      "More than 100 black bamboo plants were propagated during the activity, providing CWTS trainees with hands-on experience in plant propagation and environmental stewardship.",
      "The session was led by Subang Executive President Peter John C. Enorio, with Subang - Province of Cebu Acting Provincial Director Krista Marie Frances C. Bicada, Subang - CTU Science and Technology Vice President Shaina Faith D. Visorro, CTU-Barili CWTS Student Staff Dave M. Baran, and Subang - CTU Volunteer Intern Dhemae D. Libusana participating in the activity.",
      "The propagation session formed part of the continuing environmental work of CTU-Barili and Subang - CTU, connecting volunteer participation, experiential learning, and campus-based ecological initiatives.",
    ],
    image: "/assets/stories/black-bamboo-propagation-cwts-february-1-2025.jpg",
    category: "Environmental Sustainability",
    partner: "Cebu Technological University - Barili Campus",
  },

  {
    slug: "paglaum-farm-harvest-february-3-2025",
    type: "Project Story",
    title: "Paglaum Farm Harvest Supports Students and Local Communities",
    date: "Feb 3, 2025",
    dateValue: "2025-02-03",
    excerpt:
      "Another Paglaum Farm harvest provided fresh tomatoes, okra, and chilis while giving students and volunteers continued experience in campus-based agriculture.",
    body: [
      "On February 3, 2025, Cebu Technological University and Subang - Cebu Technological University conducted another harvest from the Paglaum Farm Project at CTU-Barili Campus.",
      "Tomatoes, okra, and chilis were harvested and distributed to students and local community members in Barili. The activity was facilitated by Subang Executive President Peter John C. Enorio, Administration and Finance Director Andrewkyle E. Oroc, and volunteers Ciara Mari M. Brigoli, Mary Danielle T. Descallar, and Iyz Phoebemae Del Socorro.",
      "The project, led by CTU and Subang - CTU's Agriculture and Food Systems Department, continues to provide students with practical agricultural experience while producing fresh food for the university and surrounding community.",
      "The February 3 harvest formed part of the project's continuing cycle of cultivation and distribution, demonstrating how campus agriculture can support experiential learning and local food accessibility.",
    ],
    image: "/assets/stories/paglaum-farm-harvest-february-3-2025.jpg",
    category: "Food Security & Sustainable Agriculture",
    partner: "Cebu Technological University - Barili Campus",
  },

  {
    slug: "paglaum-farm-harvest-february-5-2025",
    type: "Project Story",
    title: "Paglaum Farm Continues Its Food Security Efforts",
    date: "Feb 5, 2025",
    dateValue: "2025-02-05",
    excerpt:
      "Paglaum Farm continued producing and distributing fresh vegetables while connecting agricultural education, volunteerism, and food support.",
    body: [
      "On February 5, 2025, Cebu Technological University and Subang - Cebu Technological University conducted another harvest from the Paglaum Farm Project at CTU-Barili Campus.",
      "The harvest yielded tomatoes, okra, and chilis, which were distributed to students and local community members. The activity was led by Subang Executive President Peter John C. Enorio, Resource Generation Director Ron Janbert P. Ofquila, Administration and Finance Director Andrewkyle E. Oroc, and volunteers Ciara Mari M. Brigoli and Mary Danielle T. Descallar.",
      "The Paglaum Farm Project provides students with practical agricultural experience while contributing fresh produce to the university and surrounding community. The continuing harvests demonstrate the project's ongoing integration of agricultural education, volunteerism, and food production.",
      "Through sustained collaboration between CTU and Subang - CTU, the project continues to develop a practical campus-based model for sustainable agriculture and community food support.",
    ],
    image: "/assets/stories/paglaum-farm-harvest-february-5-2025.jpg",
    category: "Food Security & Sustainable Agriculture",
    partner: "Cebu Technological University - Barili Campus",
  },

  {
    slug: "paglaum-farm-harvest-february-10-2025",
    type: "Project Story",
    title: "Paglaum Farm Harvests Continue to Support Students and Communities",
    date: "Feb 10, 2025",
    dateValue: "2025-02-10",
    excerpt:
      "Students and volunteers joined another Paglaum Farm harvest, continuing the project's role in agricultural learning, food production, and community engagement.",
    body: [
      "On February 10, 2025, Cebu Technological University and Subang - Cebu Technological University conducted another harvest from the Paglaum Farm Project at CTU-Barili Campus.",
      "Fresh tomatoes, okra, and chilis were gathered and distributed to CTU-Barili students and members of the local community. Subang - CTU volunteers Andrewkyle E. Oroc, Ron Janbert P. Ofquila, Ciara Mari M. Brigoli, and Mary Danielle T. Descallar facilitated the harvest, joined by Doctor of Veterinary Medicine students Johanna Beatriz T. Adlawan, Julia Mae M. Amparo, Diane P. Artiaga, Iyz Phoebemae C. Del Socorro, and Christine Karyl D. Momongan.",
      "The activity continued Paglaum Farm's role as both a learning space for students and a source of fresh produce for the university and surrounding community.",
      "The continuing participation of students and volunteers demonstrates the collaborative nature of the project and its connection to food security, agricultural learning, and community engagement.",
    ],
    image: "/assets/stories/paglaum-farm-harvest-february-10-2025.jpg",
    category: "Food Security & Sustainable Agriculture",
    partner: "Cebu Technological University - Barili Campus",
  },
  {
  slug: "subang-echo-second-episode-education-2024",
  type: "Project Story",
  title: "Subang ECHO Continues with Conversations on Educational Innovation",
  date: "December 6, 2024",
  dateValue: "2024-12-06",
  excerpt:
    "The second episode of Subang ECHO explored educational research and classroom innovation, bringing educators and researchers into a public conversation on improving learning.",
  body: [
    "On December 6, 2024, Subang ECHO: Shaping Tomorrow Today aired its second episode, continuing the talk show's focus on knowledge sharing, education, innovation, and sustainable development.",
    "The episode was hosted by Subang President Peter John C. Enorio and Subang - Cebu Technological University Human Resource Director Dennis B. Bendulo. It was broadcast live on DYNE Radyo Kahimsog 97.5 from 1:00 PM to 4:00 PM, followed by a livestream session beginning at 6:00 PM.",
    "Three educators and researchers served as resource speakers. Xela Efrena V. Sator, MAEd, Head Teacher I at Lunas Elementary School and an EDD-EMD student, presented research on internal stakeholders' perceptions of positive discipline implementation and collaborative evaluation mechanisms.",
    "Lyndon G. Frejoles, MAEd, Teacher III and an education supervisor, discussed the use of multisensory instructional materials to improve Grade 1 learner engagement. Joselito V. Dinela, MAEd, Teacher III and Master of Arts in Education graduate, discussed the relationship between teacher competence and pupil academic performance in the implementation of the MATATAG Curriculum.",
    "The episode created a platform for educators to share research and practical perspectives with a broader audience. By bringing academic and professional knowledge into a public discussion, Subang ECHO continued its aim of connecting learning, innovation, and community development.",
    "The episode was supported by the DYNE Radyo Kahimsog team, Mr. Germie Carpentero, and Subang - CTU Associate Director Laurence Glenn B. Parojinog."
  ],
  image: "/assets/stories/subang-echo-second-episode-2024.jpg",
  category: "Education & Capacity Building",
  partner: "DYNE Radyo Kahimsog 97.5",
},
  {
  slug: "substance-abuse-awareness-vaw-campaign-ctu-barili-2024",
  type: "Project Story",
  title: "CTU-Barili and Subang Promote Substance Abuse Awareness During the 2024 VAW Campaign",
  date: "December 3, 2024",
  dateValue: "2024-12-03",
  excerpt:
    "Cebu Technological University - Barili Campus and Subang brought students and community members together for a substance abuse awareness forum held in line with the 2024 18-Day Campaign to End Violence Against Women.",
  body: [
    "On December 3, 2024, Cebu Technological University - Barili Campus, through its Gender and Development Office and Subang, conducted \"Breaking the Habit: Understanding the Dangers of Substance Abuse in Our Community\" at the New CAFBC Building.",
    "Held in line with the 2024 18-Day Campaign to End Violence Against Women, the activity brought together more than 60 participants, including students from different academic programs and habal-habal drivers from Barangays Cagay and Kalubihan.",
    "The program featured discussions on substance abuse and community-based approaches to recovery. Psychiatric nurse Ryan J. Hernan discussed the effects of substance abuse, while Ronnie G. Delos Santos, CEO of Safe Haven Recovery Village, discussed community approaches to recovery. Roberto \"Berta\" A. Plando Jr. also shared a personal account of recovery and transformation.",
    "The activity concluded with a gift-giving component, during which participants received rice and spaghetti packs. Subang President Peter John C. Enorio delivered the closing remarks and emphasized the role of community collaboration in addressing substance abuse and violence.",
    "The activity brought together education, community dialogue, and direct engagement around a social concern affecting communities. It also reflected the shared efforts of the university and Subang to support safer and more inclusive community spaces."
  ],
  image: "/assets/stories/substance-abuse-awareness-vaw-campaign-2024.jpg",
  category: "Social Inclusion & Equity",
  partner: "Cebu Technological University - Barili Campus Gender and Development Office",
},
  {
  slug: "bamboo-propagation-subang-ctu-november-30-2024",
  type: "Project Story",
  title: "Continuing the Work: Bamboo Propagation at CTU-Barili",
  date: "November 30, 2024",
  dateValue: "2024-11-30",
  excerpt:
    "Subang - Cebu Technological University Chapter continued its Bamboo Propagation Project through another hands-on propagation activity led by volunteers and volunteer interns.",
  body: [
    "On November 30, 2024, Subang - Cebu Technological University Chapter continued its Bamboo Propagation Project at the CTU-Barili Campus.",
    "Under the leadership of Subang - CTU Environmental Affairs Vice-President Rodney Joseph B. Sundo, volunteers and volunteer interns propagated black bamboo (Phyllostachys nigra) as part of the chapter's continuing environmental activities.",
    "The activity contributed to the ongoing production and care of bamboo planting materials, building on earlier propagation, maintenance, and transplantation activities conducted throughout the campus.",
    "The continued work demonstrates the cumulative nature of volunteer-led environmental initiatives. Each propagation session adds to the planting materials available for future establishment while giving volunteers practical experience in environmental stewardship."
  ],
  image: "/assets/stories/bamboo-propagation-subang-ctu-november-30-2024.jpg",
  category: "Environmental Sustainability",
  partner: "Cebu Technological University - Barili Campus",
},
  {
  slug: "subang-echo-pilot-episode-pbels-2024",
  type: "Project Story",
  title: "Subang ECHO Launches with a Conversation on Food Security",
  date: "November 29, 2024",
  dateValue: "2024-11-29",
  excerpt:
    "Subang - Cebu Technological University Chapter launched Subang ECHO: Shaping Tomorrow Today with a pilot episode exploring Plant Box with Extended Lighting System as a potential approach to urban food production.",
  body: [
    "On November 29, 2024, Subang - Cebu Technological University Chapter launched Subang ECHO: Shaping Tomorrow Today, a talk show series designed to bring conversations on sustainability, volunteerism, innovation, and community development to a wider audience.",
    "The pilot episode, titled \"Plant Box with Extended Lighting System (PBELS),\" aired live on DYNE Radyo Kahimsog 97.5 from the CTU-Barili Campus. The episode explored the potential of PBELS as a practical approach to growing food in spaces where conventional agricultural production may be limited.",
    "The episode was hosted by Subang President Peter John C. Enorio and Subang - CTU Human Resource Director Dennis B. Bendulo. Dr. Pet Roey L. Pascual, a crop scientist and Subang adviser, served as the resource speaker and discussed the agricultural applications and potential of the system.",
    "The discussion centered on how compact growing systems and appropriate lighting technologies could provide additional options for food production, particularly in urban or space-constrained settings. The episode connected the topic with broader conversations on food security, sustainable agriculture, and community self-reliance.",
    "Subang - CTU Communications Associate Director Laurence Glenn B. Parojinog and Mr. Germie Carpentero of DYNE Radyo Kahimsog supported the broadcast, while the station's management and staff provided the platform for the program.",
    "Subang ECHO established a new communication platform for sharing technical knowledge and community-oriented ideas. Through conversations with practitioners and resource persons, the series sought to make development issues more accessible while encouraging audiences to connect knowledge with practical action."
  ],
  image: "/assets/stories/subang-echo-pilot-pbels-2024.jpg",
  category: "Food Security & Sustainable Agriculture",
  partner: "DYNE Radyo Kahimsog 97.5",
},
  {
  slug: "black-bamboo-orientation-beed-students-2024",
  type: "Volunteer Story",
  title: "Learning Through Propagation: Black Bamboo Orientation for BEEd Students",
  date: "November 29, 2024",
  dateValue: "2024-11-29",
  excerpt:
    "Subang - Cebu Technological University Chapter introduced Bachelor of Elementary Education students to black bamboo propagation through an orientation, demonstration, and hands-on activity.",
  body: [
    "On November 29, 2024, Subang - Cebu Technological University Chapter conducted an orientation, demonstration, and propagation activity focused on black bamboo (Phyllostachys nigra) at the CTU-Barili Campus.",
    "Subang President Peter John C. Enorio and Human Resource Director Dennis B. Bendulo facilitated the session, which was attended by Bachelor of Elementary Education students Genevieve Mae Dumagpe and Jonit Dingal.",
    "The activity introduced participants to the practical process of bamboo propagation and provided an opportunity to learn through direct participation. By combining discussion with demonstration and hands-on work, the session connected environmental concepts with skills that participants could apply in future community or educational settings.",
    "The activity formed part of Subang - CTU's continuing effort to integrate environmental stewardship with volunteer learning and skills development."
  ],
  image: "/assets/stories/black-bamboo-orientation-beed-students-2024.jpg",
  category: "Education & Capacity Building",
  partner: "Cebu Technological University - Barili Campus",
},
  {
  slug: "black-bamboo-propagation-100-2024",
  type: "Project Story",
  title: "Propagating 100 Black Bamboos for a Greener Future",
  date: "November 29, 2024",
  dateValue: "2024-11-29",
  excerpt:
    "Subang - Cebu Technological University Chapter propagated 100 black bamboo planting materials as part of its continuing Bamboo Propagation Project.",
  body: [
    "On November 29, 2024, Subang - Cebu Technological University Chapter propagated 100 black bamboo (Phyllostachys nigra) planting materials at the CTU-Barili Campus as part of its continuing Bamboo Propagation Project.",
    "The activity was led by Subang President Peter John C. Enorio, Human Resource Director Dennis B. Bendulo, and Presidential Staff Shaina Faith D. Visorro.",
    "The propagation activity contributed to the chapter's growing collection of bamboo planting materials and supported its broader environmental work involving bamboo establishment, site maintenance, and ecological education.",
    "The activity also reinforced Subang - CTU's emphasis on practical volunteer participation, where environmental action is carried out through repeated, hands-on work rather than one-time activities."
  ],
  image: "/assets/stories/black-bamboo-propagation-100-2024.jpg",
  category: "Environmental Sustainability",
  partner: "Cebu Technological University - Barili Campus",
},
  {
  slug: "black-bamboo-propagation-site-maintenance-2024",
  type: "Project Story",
  title: "Preparing for the Next 1,000: Black Bamboo Propagation and Site Maintenance",
  date: "November 23, 2024",
  dateValue: "2024-11-23",
  excerpt:
    "Subang - Cebu Technological University Chapter prepared 1,000 polybags for additional black bamboo propagation while continuing tree maintenance and developing a recovery chamber at the Adopt-A-Hectare site.",
  body: [
    "On November 23, 2024, Subang - Cebu Technological University Chapter continued its Bamboo Propagation Project by preparing 1,000 polybags for the propagation of an additional 1,000 black bamboo plants at the CTU-Barili Campus.",
    "The activity involved CWTS and LTS trainees with the support of their respective staff. Preparing planting containers at this scale established the materials needed for the next phase of bamboo propagation and demonstrated the importance of preparation in sustaining a growing environmental initiative.",
    "The day's activities also included maintenance work at the Adopt-A-Hectare Project. Trainees watered established trees as part of their continuing care, while another team worked on a recovery chamber for propagated bamboo. The chamber provides a designated space for nurturing planting materials before transplantation.",
    "Together, these activities reflected a broader approach to environmental restoration that extends beyond planting itself. Propagation, maintenance, recovery, and eventual transplantation are treated as interconnected stages of sustained environmental action."
  ],
  image: "/assets/stories/black-bamboo-propagation-site-maintenance-2024.jpg",
  category: "Environmental Sustainability",
  partner: "Cebu Technological University - Barili Campus",
},
  {
  slug: "da-bswm-composting-equipment-turnover-ctu-barili-2024",
  type: "Press Release",
  title: "DA-BSWM Turns Over Composters and Biomass Shredders to CTU-Barili and Barangay Kalubihan",
  date: "November 20, 2024",
  dateValue: "2024-11-20",
  excerpt:
    "The Department of Agriculture - Bureau of Soils and Water Management turned over rotary composters and biomass shredders to Cebu Technological University - Barili Campus and Barangay Kalubihan to support sustainable waste management and compost production.",
  body: [
    "On November 20, 2024, the Department of Agriculture - Bureau of Soils and Water Management (DA-BSWM) facilitated the inspection, turnover, and signing of a Memorandum of Agreement for two rotary composters and two biomass shredders in Barili, Cebu.",
    "The equipment turnover formed part of DA-BSWM's efforts to promote sustainable agriculture through improved waste management and microbial compost production. The equipment was intended to support the recovery and processing of organic materials for agricultural use.",
    "Mc Reith C. Rodriquez, Project Assistant under the Compost Production Implementation Team of the DA-BSWM Central Office, conducted the inspection of the equipment. The formal turnover was facilitated by DA-BSWM Central Visayas in collaboration with the Local Government Unit of Barili.",
    "Cebu Technological University - Barili Campus received its equipment under the DA-BSWM High-Value Crops Development Program, while Barangay Kalubihan received its units under the National Rice Program. Dr. Danny E. Carabio, Director of Resource Generation at CTU-Barili Campus, formally received the university's equipment. Barangay Kalubihan was represented by Punong Barangay Hon. Rebecca S. Barbac.",
    "The Memorandum of Agreement was subsequently signed by Dr. Carabio and Hon. Barbac as representatives of CTU-Barili Campus and Barangay Kalubihan, respectively. Peter John C. Enorio, President of Subang, signed as a witness, reflecting Subang's support for the Resource Generation Office and the university's sustainability-related initiatives.",
    "The equipment provides additional infrastructure for organic waste recovery, biomass processing, and microbial compost production. Its deployment creates opportunities for stronger connections between waste management, agricultural production, and circular resource use within the campus and surrounding community."
  ],
  image: "/assets/press/da-bswm-composting-equipment-turnover-2024.jpg",
  category: "Waste Management & Circularity",
  partner: "Department of Agriculture - Bureau of Soils and Water Management",
},
  {
  slug: "azolla-ponds-subang-ctu-2024",
  type: "Project Story",
  title: "Activating Azolla Ponds for Sustainable Agriculture and Learning",
  date: "November 16, 2024",
  dateValue: "2024-11-16",
  excerpt:
    "Subang - Cebu Technological University Chapter activated new Azolla ponds at the CTU-Barili Campus, creating additional space for agricultural learning, research, and sustainable production practices.",
  body: [
    "On November 16, 2024, Subang - Cebu Technological University Chapter activated new Azolla ponds at the CTU-Barili Campus to support the cultivation and study of Azolla pinnata, a fast-growing aquatic fern with applications in sustainable agriculture.",
    "The initiative was made possible through the reuse of ponds previously used by fourth-year Bachelor of Science in Agriculture major in Horticulture students. Their support allowed the existing facilities to be repurposed for continued agricultural learning and experimentation.",
    "Azolla is commonly studied for its association with nitrogen-fixing cyanobacteria and its potential applications as a biological fertilizer and supplemental feed resource. Its cultivation can therefore provide opportunities for exploring lower-cost and resource-efficient agricultural practices.",
    "Beyond cultivation, the newly activated ponds provide a potential platform for research, education, and practical agricultural training within the campus. The initiative reflects Subang - CTU's interest in connecting environmental stewardship, agricultural innovation, and accessible community-based solutions."
  ],
  image: "/assets/stories/azolla-ponds-subang-ctu-2024.jpg",
  category: "Food Security & Sustainable Agriculture",
  partner: "Cebu Technological University - Barili Campus",
},
  {
  slug: "bamboo-kamagong-transplanting-ctu-barili-2024",
  type: "Project Story",
  title: "Advancing Reforestation Through Bamboo and Kamagong Transplanting",
  date: "November 16, 2024",
  dateValue: "2024-11-16",
  excerpt:
    "Subang - Cebu Technological University Chapter engaged CWTS and LTS trainees in a hands-on bamboo and kamagong transplanting activity focused on reforestation and biodiversity conservation.",
  body: [
    "On November 16, 2024, Subang - Cebu Technological University Chapter conducted a bamboo and kamagong transplanting activity at the CTU-Barili Campus in collaboration with Civic Welfare Training Service (CWTS) and Literacy Training Service (LTS) trainees.",
    "The activity involved the transplantation of propagated bamboo and kamagong (Diospyros blancoi), a native Philippine tree species. By bringing students into the practical work of establishing and caring for planting materials, the activity connected environmental education with hands-on ecological stewardship.",
    "The afternoon activity was supported by Subang - CTU Environmental Affairs Deputy Director Augustin P. Tapinit, Associate Director Laurence Reinz S. Tolentino, Human Resource Director Dennis B. Bendulo, Senior Environmental Advocate Gissa Mae C. Castino, and interns James P. Posas, Shaina Faith D. Visorro, and Kesiah C. Montesuso, with assistance from CWTS staff members Jan Emmanuel Lausa and Dave Baran.",
    "The transplanting activity formed part of Subang - CTU's continuing environmental initiatives, which combine propagation, site maintenance, and volunteer participation to support longer-term restoration efforts."
  ],
  image: "/assets/stories/bamboo-kamagong-transplanting-ctu-barili-2024.jpg",
  category: "Environmental Sustainability",
  partner: "Cebu Technological University - Barili Campus",
},
  {
  slug: "black-bamboo-propagation-cwts-lts-2024",
  type: "Project Story",
  title: "Growing Black Bamboo Through Youth Participation",
  date: "November 16, 2024",
  dateValue: "2024-11-16",
  excerpt:
    "Subang - CTU Chapter led a black bamboo propagation activity with CWTS and LTS trainees, resulting in the planting of 100 black bamboo specimens at the CTU-Barili Campus.",
  body: [
    "On November 16, 2024, Subang - Cebu Technological University Chapter conducted a Black Bamboo Propagation activity at the CTU-Barili Campus in collaboration with Civic Welfare Training Service (CWTS) and Literacy Training Service (LTS) trainees.",
    "A total of 100 black bamboo specimens were planted during the activity, adding another component to the chapter's continuing environmental restoration and sustainable landscape efforts.",
    "The activity was co-facilitated by CWTS and LTS staff with assistance from Subang - CTU volunteers. Human Resource Director Dennis B. Bendulo, Senior Environmental Advocate Gissa Mae C. Castino, and interns Shaina Faith D. Visorro and Kesiah C. Montesuso supported the implementation, alongside CWTS staff members Jan Emmanuel Lausa and Dave Baran.",
    "By involving students and trainees in hands-on environmental activities, the initiative connected volunteerism, practical learning, and ecological stewardship. The activity also demonstrated how institutional partnerships can expand the reach of community-based environmental action."
  ],
  image: "/assets/stories/black-bamboo-propagation-cwts-lts-2024.jpg",
  category: "Environmental Sustainability",
  partner: "Cebu Technological University - Barili Campus",
},
  {
  slug: "batch-diospyros-blancoi-volunteer-interns-2024",
  type: "Volunteer Story",
  title: "Welcoming Batch Diospyros blancoi: Growing the Volunteer Network",
  date: "November 15, 2024",
  dateValue: "2024-11-15",
  excerpt:
    "Subang - CTU Chapter welcomed a new batch of volunteer interns through an orientation and oath-taking ceremony at Cebu Technological University - Barili Campus.",
  body: [
    "On November 15, 2024, Subang - Cebu Technological University Chapter held an orientation and oath-taking ceremony for its newest Volunteer Interns, Batch Diospyros blancoi, at the CTU-Barili Campus.",
    "The activity was led by Subang - CTU Executive Vice-President Krista Marie Frances C. Bicada and Human Resource Director Dennis B. Bendulo, with support from the chapter's Vice-Presidents and volunteers representing its advocacy departments.",
    "The orientation introduced the incoming interns to Subang's work and provided guidance on their roles as volunteers. National Executive President Peter John C. Enorio also addressed the new batch, emphasizing the contribution of volunteers to the organization's mission and vision.",
    "Batch Diospyros blancoi was set to participate in initiatives related to environmental conservation, education, and sustainable development. Their induction marked another step in building a volunteer network where young people can develop practical skills while contributing their time and effort to community initiatives."
  ],
  image: "/assets/stories/batch-diospyros-blancoi-volunteer-interns-2024.jpg",
  category: "Volunteerism",
  partner: "Cebu Technological University - Barili Campus",
},
  {
  slug: "roadside-cleanup-kalubihan-barili-2024",
  type: "Project Story",
  title: "Caring for Our Communities, One Cleanup at a Time",
  date: "November 13, 2024",
  dateValue: "2024-11-13",
  excerpt:
    "Subang - CTU volunteers and interns collected more than eight sacks of waste during a roadside cleanup in Barangay Kalubihan, Barili, Cebu.",
  body: [
    "On November 13, 2024, volunteers and interns of Subang - Cebu Technological University Chapter conducted a roadside cleanup in Barangay Kalubihan, Barili, Cebu.",
    "The activity collected more than eight sacks of waste, including glass bottles, plastic bottles, sachets, and other discarded plastic materials. The cleanup provided volunteers with a direct opportunity to address visible waste in a community space while promoting responsible waste disposal.",
    "The initiative was spearheaded by the Environmental Affairs Department under the leadership of Subang - CTU SEAD Vice-President Rodney Joseph B. Sundo.",
    "Beyond the cleanup itself, the activity reinforced a simple principle of community environmental action: maintaining clean and safe public spaces requires shared responsibility. Through volunteer-led activities, Subang continues to encourage practical participation in environmental stewardship."
  ],
  image: "/assets/stories/roadside-cleanup-kalubihan-2024.jpg",
  category: "Waste Management & Circularity",
  partner: "Subang - Cebu Technological University Chapter",
},
  {
  slug: "subang-ctu-the-aun-virtual-events-2024",
  type: "Project Story",
  title: "Connecting Youth Leadership with Global Higher Education",
  date: "November 13, 2024",
  dateValue: "2024-11-13",
  excerpt:
    "Subang - CTU Chapter participated in virtual events organized by Times Higher Education and the ASEAN University Network, exploring university rankings, internationalization, and data-driven institutional development.",
  body: [
    "Subang - Cebu Technological University Chapter President Peter John C. Enorio participated in two virtual events organized by Times Higher Education (THE) and the ASEAN University Network (AUN), held on October 17 and November 13, 2024.",
    "The sessions, titled \"Integrating THE Impact and World University Rankings for Global Excellence, Internationalization, and Reputation\" and \"THE Introduction to THE World University Rankings: Enhancing Performance and Data Submission,\" featured speakers from Times Higher Education, including Mei Mei Lim, Director of Consultancy, and Todd Hornal, Regional Director for APAC.",
    "The discussions explored how THE Impact Rankings and THE World University Rankings are used by higher education institutions to examine institutional performance, societal contributions, internationalization, and data-driven strategies.",
    "For Subang - CTU Chapter, the engagements provided additional perspective on how student and youth participation can intersect with institutional development and the Sustainable Development Goals. The chapter continues to explore ways that youth-led initiatives can contribute to broader university and community development efforts."
  ],
  image: "/assets/stories/the-aun-virtual-events-2024.jpg",
  category: "Youth Leadership & Participation",
  partner: "Times Higher Education and ASEAN University Network",
},
  {
  slug: "adopt-a-hectare-visitation-maintenance-2024",
  type: "Project Story",
  title: "Nurturing What Was Planted: Adopt-A-Hectare Maintenance",
  date: "November 9, 2024",
  dateValue: "2024-11-09",
  excerpt:
    "Subang - CTU volunteers and interns continued the Adopt-A-Hectare Project through a site visitation and maintenance activity focused on caring for growing trees and sustaining long-term environmental action.",
  body: [
    "On November 9, 2024, Subang - Cebu Technological University Chapter continued its Adopt-A-Hectare Project through a visitation and maintenance activity at the CTU-Barili Campus.",
    "The Adopt-A-Hectare Project is a long-term tree propagation and growing initiative that emphasizes continued care alongside the establishment of new plantings. During the activity, Subang - CTU Volunteer Interns conducted site maintenance under the supervision of the Environmental Affairs Department.",
    "The activity provided an opportunity for volunteers to revisit the growing site, monitor previously established plantings, and reinforce the importance of consistent environmental stewardship.",
    "Rather than treating tree planting as a one-time activity, the initiative reflects Subang's approach of sustaining environmental action through regular maintenance, volunteer participation, and long-term care."
  ],
  image: "/assets/stories/adopt-a-hectare-maintenance-2024-02.jpg",
  category: "Environmental Sustainability",
  partner: "Cebu Technological University - Barili Campus",
},
  {
  slug: "bamboo-propagation-orientation-ctu-barili-2024",
  type: "Project Story",
  title: "Strengthening Sustainability Through Bamboo Propagation",
  date: "November 9, 2024",
  dateValue: "2024-11-09",
  excerpt:
    "Subang - CTU Chapter introduced NSTP trainees to the environmental, economic, and practical applications of bamboo through an orientation and hands-on propagation demonstration.",
  body: [
    "On November 9, 2024, Subang - Cebu Technological University Chapter, in collaboration with NSTP trainees of Cebu Technological University - Barili Campus, conducted a Bamboo Propagation Orientation from 9:00 AM to 11:00 AM.",
    "The session opened with a discussion led by Subang - CTU President Peter John C. Enorio on the environmental, economic, and infrastructural importance of bamboo. The discussion also introduced participants to practical techniques for propagating bamboo and establishing planting materials.",
    "The orientation continued with a hands-on demonstration of bamboo propagation, followed by a tour of pre-propagated bamboo specimens. The activity allowed participants to connect the concepts discussed during the session with actual propagation materials and growing practices.",
    "With the support of CWTS and LTS staff, Subang officers, and volunteers, the activity provided NSTP trainees with practical knowledge that can contribute to environmental stewardship and sustainable resource use."
  ],
  image: "/assets/stories/bamboo-propagation-orientation-2024.jpg",
  category: "Environmental Sustainability",
  partner: "Cebu Technological University - Barili Campus",
},
  {
  slug: "black-bamboo-propagation-ctu-barili-2024",
  type: "Project Story",
  title: "Propagating Black Bamboo for a More Resilient Landscape",
  date: "October 19, 2024",
  dateValue: "2024-10-19",
  excerpt:
    "Subang volunteers and CTU-Barili partners propagated black bamboo planting materials as part of the chapter's continuing environmental restoration efforts.",
  body: [
    "On October 19, 2024, Subang - Cebu Technological University Chapter conducted a black bamboo propagation activity at the CTU-Barili Campus, contributing to the chapter's continuing work in environmental restoration and sustainable land management.",
    "The activity focused on harvesting and propagating black bamboo (Phyllostachys nigra), a species recognized for its distinctive dark culms and strength. Beyond its ornamental value, bamboo can contribute to soil stabilization and erosion control when appropriately integrated into landscapes and restoration efforts.",
    "The activity was facilitated by Subang President Peter John C. Enorio, SEAD Deputy Director Augustin P. Tapinit, SEAD Associate Director Dennis B. Bendulo, SCAD Vice-President Joshua Ray P. Calago, and SED Vice-President Cedrick B. Parojinog, with the participation of Volunteer Interns Kesiah C. Montesuso, Shaina Faith D. Visorro, and James Adam P. Posas.",
    "Together, the volunteers harvested and propagated bamboo planting materials, strengthening the chapter's practical approach to environmental stewardship and demonstrating how sustained volunteer action can contribute to long-term ecological goals."
  ],
  image: "/assets/stories/black-bamboo-propagation-ctu-barili-2024.jpg",
  category: "Environmental Sustainability",
  partner: "Cebu Technological University - Barili Campus",
},
  {
    slug: "kamera-at-kwento-larena-youth-filmmaking-workshop-2026",
    type: "Project Story",
    title: "Kamera at Kwento: A Basic Filmmaking Workshop for Larena Youth",
    date: "August 26, 2026",
    dateValue: "2026-08-26",
    excerpt:
      "Larena youth explored storytelling, cinematography, directing, audio, and editing through a hands-on filmmaking workshop led by Subang Philippines National Executive President Peter John C. Enorio.",
    category: "Youth Leadership & Participation",
    image: "/assets/stories/kamera-at-kwento-larena.jpg",
    partner: "Municipality of Larena",
    body: [
      "As part of the Municipality of Larena's Linggo ng Kabataan 2026 celebration, Subang Philippines National Executive President Peter John C. Enorio served as Training and Resource Speaker for “Kamera at Kwento: A Basic Filmmaking Workshop for Larena Youth” on August 26, 2026.",
      "The workshop brought together students from participating secondary schools in Larena for a hands-on learning session covering pre-production, production, and post-production.",
      "Participants explored practical skills in storytelling, screenplay development, cinematography, directing, audio production, editing, and visual storytelling.",
      "Anchored in the National Youth Commission's 2026 theme, “Different Contexts, Common Aspirations,” the workshop encouraged young people to recognize the power of their own experiences and perspectives while using film as a creative platform for expressing shared aspirations, youth concerns, and community stories.",
      "Following a Learn-Do-Refine methodology, participants transformed their ideas into short film scenes through collaborative writing, shooting, and editing exercises.",
      "The engagement highlights Subang Philippines' continuing commitment to youth empowerment through creativity, communication, skills development, and meaningful community participation."
    ]
  },

  {
    slug: "subang-philippines-agridam-training-2026",
    type: "Project Story",
    title: "Subang Philippines Strengthens Disaster Resilience Through AGRIDAM Training",
    date: "July 21–23, 2026",
    dateValue: "2026-07-21",
    excerpt:
      "Subang Philippines National Executive President Peter John C. Enorio participated in AGRIDAM 2026, strengthening his knowledge and skills in community-based disaster risk reduction and management.",
    category: "Climate & Disaster Resilience",
    image: "/assets/stories/agridam-training-2026.jpg",
    partner: "National Youth Commission and Office of Civil Defense",
    body: [
      "Subang Philippines continues to strengthen its work in youth leadership and community resilience through the participation of its National Executive President, Peter John C. Enorio, in the AGRIDAM: Agents for RISK and DAMage Management training held from July 21 to 23, 2026, in Dumaguete City, Negros Oriental.",
      "Organized by the National Youth Commission (NYC) and co-implemented by the Department of National Defense - Office of Civil Defense (DND-OCD), the three-day training brought together young leaders from across the Visayas under the theme “Empowering the Youth for Generational Resilience.”",
      "The training provided participants with knowledge and practical skills in Community-Based Disaster Risk Reduction and Management (CBDRRM), with emphasis on disaster preparedness, risk reduction, and strengthening resilience at the community level.",
      "For Subang Philippines, participation in AGRIDAM contributes to its continuing efforts to develop young leaders equipped to understand community risks and support preparedness and resilience initiatives in their respective communities.",
      "The experience also reinforces the organization's broader commitment to building safer and more resilient communities through youth participation, volunteerism, environmental action, and community-based solutions.",
      "Through initiatives such as AGRIDAM, Subang Philippines continues to encourage young people to take an active role in preparing communities for disasters and emerging challenges while contributing to a more informed, prepared, and resilient Philippines."
    ]
  },

  {
    slug: "subang-siquijor-negros-young-heroes-2026",
    type: "Press Release",
    title: "Subang - Province of Siquijor Chapter Honored at Negros Young Heroes 2026",
    date: "July 25, 2026",
    dateValue: "2026-07-25",
    excerpt:
      "Subang Philippines - Province of Siquijor Chapter was recognized under the Samahan Category during Negros Young Heroes 2026: Gawad Parangal sa Kabataan in Dumaguete City.",
    category: "Recognition",
    image: "/assets/press/negros-young-heroes-2026.jpg",
    partner: "Negros Young Heroes 2026",
    body: [
      "Subang Philippines - Province of Siquijor Chapter (SPSC) was recognized during Negros Young Heroes 2026: Gawad Parangal sa Kabataan, receiving distinction under the Samahan Category, which honors youth organizations demonstrating sustained excellence in leadership, volunteerism, and community development across Negros Island and Siquijor.",
      "The Samahan Category recognizes organizations that have maintained at least two years of meaningful service and whose initiatives have contributed to lasting impact in their communities. The recognition reflects Subang Philippines' continuing work in youth empowerment, education, environmental stewardship, agriculture and food systems, community engagement, leadership development, and volunteerism.",
      "Representing the organization during the awarding ceremony at the Sofia Soller Sinco Hall of Foundation University in Dumaguete City was the Subang Philippines - Siquijor delegation, headed by National Executive Vice President Dyn Michael M. Lozana and Siquijor Provincial Director Rachel Gulahab.",
      "Joining the delegation were Erll Vincent Villadares, Vice President for Subang Visayas; Andreev Mattheus Sumile, Vice President for Agriculture and Food Systems; Ylaiza Sucuano, SPSC Human Resource Director; Yhen Alexa Dahili, SPSC Director for Education; Jaynard Cruz, SPSC Director for Environmental Affairs; and Diana Gallendo, Senior Volunteer.",
      "Since its establishment, Subang Philippines has worked to develop servant leaders and support sustainable, community-driven initiatives that enable young people to participate meaningfully in addressing community challenges. The recognition highlights the collective contributions of the organization's volunteers, officers, partners, and communities.",
      "The Negros Young Heroes Awards draws inspiration from the legacy of León Kilat, whose courage, patriotism, and selfless service represent the spirit of youth leadership and service celebrated by the recognition.",
      "For Subang Philippines, the distinction serves as a milestone for the Siquijor Chapter and the volunteers who continue to contribute their time, skills, and effort to community development.",
      "The organization continues to carry its commitment to Live. Create. Inspire. while working toward resilient communities, empowered young leaders, and meaningful community action across the Philippines."
    ]
  },

  {
    slug: "philippine-resilience-awards-2025",
    type: "Press Release",
    title: "Subang Environmental Initiatives Recognized at Philippine Resilience Awards 2025",
    date: "November 24, 2025",
    dateValue: "2025-11-24",
    excerpt:
      "The Subang Environmental Initiatives were recognized through the Philippine Resilience Awards 2025.",
    category: "Recognition",
    image: "/assets/press/resilience-awards.jpg",
    body: [
      "The recognition highlighted environmental restoration and nature-based community resilience work associated with the Subang Environmental Initiatives.",
      "The work brings together activities such as bamboo and kamagong propagation, coastal cleanups, environmental education, and community participation.",
      "For Subang, recognition is most meaningful when it helps draw attention to the volunteers and communities who make practical action possible."
    ]
  },

  {
    slug: "subang-volunteer-stories",
    type: "Volunteer Story",
    title: "The People Who Choose to Show Up",
    date: "2026",
    dateValue: "2026-01-01",
    excerpt:
      "A growing collection of stories about the young people and volunteers who give their time, skills, creativity, and energy to community work.",
    category: "Volunteerism",
    image: "/assets/stories/volunteer-story.jpg",
    body: [
      "Volunteerism is the human foundation of Subang Philippines. The organization creates spaces where people can contribute what they know, what they can do, and what they are willing to learn.",
      "These stories will document the people behind projects, from youth leaders and student volunteers to community partners and local champions.",
      "The purpose is simple: to show that meaningful development can begin with people who choose to give their time."
    ]
  },

  {
    slug: "adopt-a-hectare-launch-2024",
    type: "Project Story",
    title: "Adopt-A-Hectare: Building a Greener CTU-Barili Campus",
    date: "September 14, 2024",
    dateValue: "2024-09-14",
    excerpt:
      "Subang Cebu Technological University launched the first Saturday session of its Adopt-A-Hectare Project, planting more than 100 fruit-bearing and native trees and propagating bamboo at CTU-Barili Campus.",
    category: "Environmental Sustainability",
    image: "/assets/stories/adopt-a-hectare-launch-2024.jpg",
    partner: "Cebu Technological University – Barili Campus",
    body: [
      "The first Saturday session of the Adopt-A-Hectare Project for Academic Year 2024–2025 marked another step in Subang Philippines' continuing work toward a greener and more sustainable community.",
      "Spearheaded by the Environmental Affairs Department of the Subang Cebu Technological University Chapter, the September 14 activity brought together volunteers and members of the CTU-Barili community for a day of tree planting and bamboo propagation.",
      "More than 100 fruit-bearing and native trees were planted within the CTU-Barili Campus, including soursop (Annona muricata), jackfruit (Artocarpus heterophyllus), marang (Artocarpus odoratissimus), and kamagong (Diospyros blancoi).",
      "The activity also featured bamboo propagation in celebration of Philippine Bamboo Month, connecting campus-based environmental action with the promotion of bamboo as an important and versatile natural resource.",
      "The initiative was carried out in collaboration with NSTP trainees, CWTS staff, and ROTC officers of CTU-Barili Campus. Their collective effort demonstrated how environmental stewardship can become a shared responsibility across students, volunteers, and academic communities.",
      "For Subang, the Adopt-A-Hectare Project was more than a tree-planting activity. It was an opportunity to cultivate long-term environmental responsibility by putting young people's time, energy, and collective action into restoring and caring for the spaces around them.",
      "The first Saturday was only the beginning. The project would continue through succeeding sessions of planting, propagation, maintenance, and volunteer engagement."
    ]
  },

  {
    slug: "adopt-a-hectare-maintenance-2024",
    type: "Project Story",
    title: "Nurturing What Was Planted",
    date: "September 21, 2024",
    dateValue: "2024-09-21",
    excerpt:
      "One week after the launch of Adopt-A-Hectare, Subang Cebu Technological University volunteers returned to CTU-Barili to propagate additional kamagong and bamboo while maintaining trees planted during the first session.",
    category: "Environmental Sustainability",
    image: "/assets/stories/adopt-a-hectare-maintenance-2024.jpg",
    partner: "Cebu Technological University – Barili Campus",
    body: [
      "One week after the launch of the Adopt-A-Hectare Project for Academic Year 2024–2025, Subang Cebu Technological University Chapter volunteers returned to the CTU-Barili Campus for another day of environmental action.",
      "Spearheaded by the chapter's Environmental Affairs Department, the September 21 session focused on both propagation and maintenance. NSTP trainees worked alongside Subang volunteers and CTU personnel to propagate additional kamagong (Diospyros blancoi) and bamboo, further expanding the project's growing collection of plants.",
      "The volunteers also revisited the fruit-bearing and native trees planted during the previous session. Maintaining newly planted trees is an essential part of environmental restoration, requiring continued attention beyond the initial planting activity.",
      "The session brought together ROTC officers, CWTS/LTS staff, and NSTP trainees, creating another opportunity for students to participate directly in environmental stewardship.",
      "Through the Adopt-A-Hectare Project, Subang sought to build a culture where environmental action does not end when a seedling is planted. Propagation, maintenance, monitoring, and continued volunteer participation are equally important in giving young trees a chance to grow and become part of a healthier campus environment.",
      "The second Saturday therefore became a continuation of the same commitment: not simply to plant, but to nurture what had been planted."
    ]
  },

  {
    slug: "on-to-the-next-youth-force-2024",
    type: "Project Story",
    title: "On to the Next: Youth Volunteers Across Visayas and Mindanao",
    date: "October 6, 2024",
    dateValue: "2024-10-06",
    excerpt:
      "Twenty-four young volunteers from across Visayas and Mindanao gathered virtually for a conversation on youth volunteerism and sustainable development during the Global Week to #Act4SDGs.",
    category: "Youth Leadership & Participation",
    image: "/assets/stories/on-to-the-next-youth-force-2024.jpg",
    partner: "2030 Youth Force in the Philippines",
    body: [
      "Twenty-four young volunteers from across the Visayas and Mindanao came together virtually on October 6, 2024, for a conversation on the role of young people in advancing sustainable development.",
      "Organized by the 2030 Youth Force in the Philippines in support of the Global Week to #Act4SDGs, the gathering was entitled On to the Next: A Showcase of the Youth's Force. The session brought together young people with experiences across different sectors, including intergovernmental organizations, science and technology, social enterprise, healthcare, and the private sector.",
      "The discussion highlighted the diverse ways young people can contribute to sustainable development. Rather than limiting youth participation to a single field or type of volunteer work, the gathering recognized the range of skills, perspectives, and experiences that young people can bring to development efforts.",
      "Subang Cebu Technological University was represented by four volunteers: President Peter John C. Enorio, Executive Vice-President Krista Marie Frances C. Bicada, Environmental Affairs Vice-President Rodney Joseph B. Sundo, and Volunteer Intern Shaina Faith D. Visorro.",
      "Their participation reflected Subang's early efforts to connect campus-based volunteer action with wider youth networks and development conversations beyond the organization itself.",
      "The gathering also reinforced an important principle that continues to shape Subang's work: meaningful change begins when young people move beyond discussing the challenges around them and begin contributing their skills, ideas, and time toward practical solutions.",
      "From local environmental initiatives to conversations on the Sustainable Development Goals, Subang's volunteers were already finding ways to connect community action with a wider movement of young people working for sustainable development."
    ]
  },

  {
    slug: "cagay-river-cleanup-2024",
    type: "Project Story",
    title: "Cleaning Cagay: A River Cleanup Led by Young Volunteers",
    date: "October 6, 2024",
    dateValue: "2024-10-06",
    excerpt:
      "Subang volunteers conducted a river cleanup in Cagay, Barili, Cebu, removing plastic waste and glass bottles as part of the organization's continuing environmental action.",
    category: "Environmental Sustainability",
    image: "/assets/stories/cagay-river-cleanup-2024.jpg",
    partner: "Subang Cebu Technological University Chapter",
    body: [
      "A group of Subang volunteers took their environmental commitment beyond the campus on October 5, 2024, conducting a river cleanup in Cagay, Barili, Cebu.",
      "Spearheaded by Subang Philippines Environmental Affairs Vice-President Rodney Joseph B. Sundo, the activity brought together volunteers from the Subang Cebu Technological University Chapter, including Subang Philippines President Peter John C. Enorio.",
      "The volunteers collected plastic waste and glass bottles along portions of the river, removing materials that could otherwise contribute to pollution and threaten surrounding ecosystems.",
      "Although simple in scale, the activity reflected a practical approach to environmental stewardship: identifying an immediate community concern and responding through collective volunteer action.",
      "The cleanup also connected Subang's local environmental work with the Sustainable Development Goals, particularly SDG 13 on Climate Action and SDG 14 on Life Below Water. While a river cleanup is a localized intervention, protecting waterways contributes to the broader effort to maintain healthy ecosystems and reduce the impacts of pollution on communities and the environment.",
      "For the volunteers, the activity was another opportunity to demonstrate that environmental action does not always require large-scale programs. Sometimes, meaningful work begins with people showing up, taking responsibility for a shared space, and doing what they can to leave it better than they found it.",
      "The Cagay river cleanup became part of the growing body of environmental volunteer work being undertaken by Subang Cebu Technological University in its early years."
    ]
  },

  {
    slug: "subang-first-volunteer-work-exposure-2024",
    type: "Project Story",
    title: "Learning by Doing: Subang's First Volunteer Work Exposure",
    date: "October 12, 2024",
    dateValue: "2024-10-12",
    excerpt:
      "Subang Cebu Technological University's volunteer interns took part in their first fieldwork experience, combining orientation, environmental work, project immersion, and reflection.",
    category: "Volunteerism",
    image: "/assets/stories/subang-first-volunteer-work-exposure-2024.jpg",
    partner: "Subang Cebu Technological University Chapter",
    body: [
      "On October 12, 2024, Subang Cebu Technological University volunteers took another step in developing a culture of hands-on volunteerism as its volunteer interns participated in their first fieldwork experience.",
      "The activity began with an orientation led by Subang President Peter John C. Enorio, who provided the volunteers with an overview of the organization, its work, and the role of volunteers in turning community initiatives into sustained action.",
      "Subang Environmental Affairs Vice-President Rodney Joseph B. Sundo then introduced the Adopt-A-Hectare Project, providing the interns with a closer look at the environmental initiative and the work being carried out at the project site.",
      "The interns participated in maintaining trees planted through the project and were introduced to the propagation of kamagong (Diospyros blancoi), a native Philippine tree species. They also helped propagate additional kamagong seedlings, gaining practical experience in an activity that connects biodiversity conservation with community volunteerism.",
      "The fieldwork continued with a tour of the Adopt-A-Hectare project area, allowing the interns to see the initiative beyond its documentation and understand the continuing work required to maintain a growing environmental project.",
      "The day concluded with a reflection session, giving the interns an opportunity to process their first hands-on volunteer experience and consider the responsibilities that come with participating in community-based work.",
      "For Subang, the activity represented an important part of volunteer development. Volunteerism is not only about completing tasks. It is also about learning through experience, understanding community needs, developing practical skills, and becoming more prepared to contribute meaningfully.",
      "The first fieldwork experience established a simple principle that would continue to shape Subang's approach to volunteer development: learning becomes more meaningful when it is put into action."
    ]
  }
];

/*
 * Automatically sorts stories from newest to oldest.
 * dateValue is used for sorting while date remains the
 * human-readable date displayed on the website.
 */
export const sortedStories = [...stories].sort(
  (a, b) =>
    new Date(b.dateValue || "1900-01-01").getTime() -
    new Date(a.dateValue || "1900-01-01").getTime()
);

export const programPillars = [
  {
    number: "01",
    title: "Environmental Sustainability",
    short: "Restoring ecosystems and advancing practical environmental action.",
    items: [
      "Bamboo propagation",
      "Kamagong propagation",
      "Black bamboo propagation",
      "Riparian restoration",
      "Mangrove restoration",
      "Coastal cleanups",
      "Biodiversity conservation",
      "Community environmental education"
    ]
  },
  {
    number: "02",
    title: "Food Security & Sustainable Agriculture",
    short: "Connecting community food production, sustainability, education, and welfare.",
    items: [
      "Sustainable food production",
      "Paglaum Farm",
      "Food support",
      "Agricultural education",
      "Composting",
      "Food-waste reduction",
      "Community-based production"
    ]
  },
  {
    number: "03",
    title: "Waste Management & Circularity",
    short: "Turning organic waste into a resource through practical community action.",
    items: [
      "Microbial composting",
      "Food-waste management",
      "Green-waste recovery",
      "Soil improvement",
      "Circular community practices"
    ]
  },
  {
    number: "04",
    title: "Coastal & Marine Action",
    short: "Protecting coastal ecosystems through volunteer action and education.",
    items: [
      "Coastal cleanups",
      "Mangrove planting",
      "Blue-carbon conservation",
      "Coastal environmental education"
    ]
  },
  {
    number: "05",
    title: "Youth Leadership & Participation",
    short: "Creating meaningful roles for young people in community development.",
    items: [
      "Project leadership",
      "Program development",
      "Community decision-making",
      "Volunteer mobilization",
      "Technical skills",
      "Leadership development"
    ]
  },
  {
    number: "06",
    title: "Education & Capacity Building",
    short: "Building knowledge, skills, confidence, and practical capability.",
    items: [
      "Leadership training",
      "Environmental education",
      "Community training",
      "Youth development",
      "Workshops",
      "Advocacy campaigns"
    ]
  },
  {
    number: "07",
    title: "Partnerships & Community Mobilization",
    short: "Connecting academe, government, communities, youth, civil society, and volunteers.",
    items: [
      "Academic partnerships",
      "Government collaboration",
      "Local government engagement",
      "Community partnerships",
      "Civil society collaboration"
    ]
  }
];

export type Officer = {
  name: string;
  role: string;
  image?: string;
  section:
    | "Executive Leadership"
    | "Advisers"
    | "National Vice Presidents"
    | "National Directors"
    | "Provincial Chapter Directors"
    | "University & College Chapter Executive Presidents";
  location?: string;
  vacant?: boolean;
};

export const officers: Officer[] = [
  {
    name: "Peter John C. Enorio",
    role: "Founder & National Executive President",
    image: "/assets/team/peter-john-enorio.jpg",
    section: "Executive Leadership"
  },
  {
    name: "Dyn Michael M. Lozana",
    role: "National Executive Vice President",
    image: "/assets/team/dyn-michael-lozana.jpg",
    section: "Executive Leadership"
  },

  {
    name: "Dr. Pet Roey L. Pascual",
    role: "National Adviser",
    image: "/assets/team/pet-roey-pascual.jpg",
    section: "Advisers"
  },
  {
    name: "Dr. Danny E. Carabio",
    role: "National Adviser",
    image: "/assets/team/danny-e-carabio.jpg",
    section: "Advisers"
  },

  {
    name: "Alrose Mae Malinao",
    role: "Vice President for Environmental Affairs",
    image: "/assets/team/alrose-mae-malinao.jpg",
    section: "National Vice Presidents"
  },
  {
    name: "John Blair More J. Omandam",
    role: "Vice President for Community Affairs",
    image: "/assets/team/john-blair-more-j-omandam.jpg",
    section: "National Vice Presidents"
  },
  {
    name: "Andreev Mattheus Sumile",
    role: "Vice President for Agriculture and Food Systems",
    image: "/assets/team/andreev-mattheus-sumile.jpg",
    section: "National Vice Presidents"
  },
  {
    name: "Shaina Faith D. Visorro",
    role: "Vice President for Science and Technology",
    image: "/assets/team/shaina-faith-visorro.jpg",
    section: "National Vice Presidents"
  },
  {
    name: "Vice President for Education",
    role: "Position Vacant",
    section: "National Vice Presidents",
    vacant: true
  },
  {
    name: "Angelo M. Asas",
    role: "Vice President for Luzon",
    image: "/assets/team/angelo-m-asas.jpg",
    section: "National Vice Presidents"
  },
  {
    name: "Erll Vincent Villadares",
    role: "Vice President for Visayas",
    image: "/assets/team/erll-vincent-villadares.jpg",
    section: "National Vice Presidents"
  },
  {
    name: "Vice President for Mindanao",
    role: "Position Vacant",
    section: "National Vice Presidents",
    vacant: true
  },

  {
    name: "Andrewkyle E. Oroc",
    role: "Director for Administration and Finance",
    image: "/assets/team/andrewkyle-e-oroc.jpg",
    section: "National Directors"
  },
  {
    name: "Ron Janbert P. Ofquila",
    role: "Director for Resource Generation",
    image: "/assets/team/ron-janbert-p-ofquila.jpg",
    section: "National Directors"
  },
  {
    name: "Rod Santiago Jr. Lebumfacil",
    role: "Director for Communications",
    image: "/assets/team/rod-santiago-jr-lebumfacil.jpg",
    section: "National Directors"
  },
  {
    name: "Dennis B. Bendulo",
    role: "Director for Human Resources",
    image: "/assets/team/dennis-b-bendulo.jpg",
    section: "National Directors"
  },

  {
    name: "Rachel Gulahab",
    role: "Provincial Chapter Director",
    location: "Subang - Province of Siquijor",
    image: "/assets/team/rachel-gulahab.jpg",
    section: "Provincial Chapter Directors"
  },
  {
    name: "Krista Marie Frances C. Bicada",
    role: "Provincial Chapter Director",
    location: "Subang - Province of Cebu",
    image: "/assets/team/krista-marie-frances-c-bicada.jpg",
    section: "Provincial Chapter Directors"
  },
  {
    name: "Jerecho Jose P. Sumalpong",
    role: "Provincial Chapter Director",
    location: "Subang - Province of Leyte",
    image: "/assets/team/jerecho-jose-p-sumalpong.jpg",
    section: "Provincial Chapter Directors"
  },
  {
    name: "Subang - Province of Bohol",
    role: "Position Vacant",
    section: "Provincial Chapter Directors",
    vacant: true
  },
  {
    name: "Subang - Province of Negros Oriental",
    role: "Position Vacant",
    section: "Provincial Chapter Directors",
    vacant: true
  },
  {
    name: "Subang - Province of Negros Occidental",
    role: "Position Vacant",
    section: "Provincial Chapter Directors",
    vacant: true
  },

  {
    name: "Shaina Faith D. Visorro",
    role: "University & College Chapter Executive President",
    location: "Subang - Cebu Technological University",
    image: "/assets/team/shaina-faith-visorro.jpg",
    section: "University & College Chapter Executive Presidents"
  },
  {
    name: "Raf B. Jimenez",
    role: "University & College Chapter Executive President",
    location: "Subang - University of San Carlos",
    image: "/assets/team/raf-b-jimenez.jpg",
    section: "University & College Chapter Executive Presidents"
  },
  {
    name: "Jerecho Jose P. Sumalpong",
    role: "University & College Chapter Executive President",
    location: "Subang - Visayas State University",
    image: "/assets/team/jerecho-jose-p-sumalpong.jpg",
    section: "University & College Chapter Executive Presidents"
  },
  {
    name: "Subang - Cebu Normal University",
    role: "Position Vacant",
    section: "University & College Chapter Executive Presidents",
    vacant: true
  },
  {
    name: "Subang - Siquijor State College",
    role: "Position Vacant",
    section: "University & College Chapter Executive Presidents",
    vacant: true
  },
  {
    name: "Subang - Negros Oriental State University",
    role: "Position Vacant",
    section: "University & College Chapter Executive Presidents",
    vacant: true
  },
  {
    name: "Subang - Silliman University",
    role: "Position Vacant",
    section: "University & College Chapter Executive Presidents",
    vacant: true
  }
];
