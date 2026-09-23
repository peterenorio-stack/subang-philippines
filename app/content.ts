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
}
  {
    slug: "black-bamboo-propagation-initiative-2026",
    type: "Project Story",
    title: "Growing Resilience, One Bamboo at a Time",
    date: "January 25, 2026",
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
    excerpt: "A growing collection of stories about the young people and volunteers who give their time, skills, creativity, and energy to community work.",
    category: "Volunteerism",
    image: "/assets/stories/volunteer-story.jpg",
    body: [
      "Volunteerism is the human foundation of Subang Philippines. The organization creates spaces where people can contribute what they know, what they can do, and what they are willing to learn.",
      "These stories will document the people behind projects, from youth leaders and student volunteers to community partners and local champions.",
      "The purpose is simple: to show that meaningful development can begin with people who choose to give their time."
    ]
  }
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
