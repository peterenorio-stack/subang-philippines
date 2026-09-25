export type Story = {
  slug: string;
  type: "Press Release" | "Project Story" | "Volunteer Story";
  title: string;
  date: string;
  excerpt: string;
  body: string[];
  image: string;
  category: string;
  partner?: string;
};

export const stories: Story[] = [
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
    slug: "black-bamboo-propagation-initiative-2026",
    type: "Project Story",
    title: "Growing Resilience, One Bamboo at a Time",
    date: "January 25, 2026",
    dateValue: "2026-01-25",
    excerpt: "A community-based bamboo propagation initiative demonstrates how youth volunteerism can support environmental restoration and climate resilience.",
    category: "Environmental Sustainability",
    image: "/assets/press/black-bamboo-propagation.jpg",
    partner: "Cebu Technological University",
    body: [
      "Subang Philippines continues to develop practical, volunteer-led approaches to environmental restoration through bamboo propagation and community participation.",
      "The 2026 Black Bamboo Propagation Initiative at CTU Barili brought together youth volunteers and institutional partners around a shared goal: turn environmental concern into hands-on action.",
      "The initiative forms part of a wider approach that connects biodiversity, climate resilience, education, and meaningful youth participation."
    ]
  },
  {
    slug: "philippine-resilience-awards-2025",
    type: "Press Release",
    title: "Subang Environmental Initiatives Recognized at Philippine Resilience Awards 2025",
    date: "November 24, 2025",
    dateValue: "2025-11-24",
    excerpt: "The Subang Environmental Initiatives were recognized through the Philippine Resilience Awards 2025.",
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
    excerpt: "A growing collection of stories about the young people and volunteers who give their time, skills, creativity, and energy to community work.",
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
    "The first Saturday was only the beginning. The project would continue through succeeding sessions of planting, propagation, maintenance, and volunteer engagement.",
  ],
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
    "The second Saturday therefore became a continuation of the same commitment: not simply to plant, but to nurture what had been planted.",
  ],
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
    "From local environmental initiatives to conversations on the Sustainable Development Goals, Subang's volunteers were already finding ways to connect community action with a wider movement of young people working for sustainable development.",
  ],
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
    "The Cagay river cleanup became part of the growing body of environmental volunteer work being undertaken by Subang Cebu Technological University in its early years.",
  ],
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
    "The first fieldwork experience established a simple principle that would continue to shape Subang's approach to volunteer development: learning becomes more meaningful when it is put into action.",
  ],
},
];

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
  section: "Executive Leadership" | "Advisers" | "National Vice Presidents" | "National Directors" | "Provincial Chapter Directors" | "University & College Chapter Executive Presidents";
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
