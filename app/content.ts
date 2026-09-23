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
  { number: "01", title: "Environmental Sustainability", short: "Restoring ecosystems and advancing practical environmental action.", items: ["Bamboo propagation", "Kamagong propagation", "Black bamboo propagation", "Riparian restoration", "Mangrove restoration", "Coastal cleanups", "Biodiversity conservation", "Community environmental education"] },
  { number: "02", title: "Food Security & Sustainable Agriculture", short: "Connecting community food production, sustainability, education, and welfare.", items: ["Sustainable food production", "Paglaum Farm", "Food support", "Agricultural education", "Composting", "Food-waste reduction", "Community-based production"] },
  { number: "03", title: "Waste Management & Circularity", short: "Turning organic waste into a resource through practical community action.", items: ["Microbial composting", "Food-waste management", "Green-waste recovery", "Soil improvement", "Circular community practices"] },
  { number: "04", title: "Coastal & Marine Action", short: "Protecting coastal ecosystems through volunteer action and education.", items: ["Coastal cleanups", "Mangrove planting", "Blue-carbon conservation", "Coastal environmental education"] },
  { number: "05", title: "Youth Leadership & Participation", short: "Creating meaningful roles for young people in community development.", items: ["Project leadership", "Program development", "Community decision-making", "Volunteer mobilization", "Technical skills", "Leadership development"] },
  { number: "06", title: "Education & Capacity Building", short: "Building knowledge, skills, confidence, and practical capability.", items: ["Leadership training", "Environmental education", "Community training", "Youth development", "Workshops", "Advocacy campaigns"] },
  { number: "07", title: "Partnerships & Community Mobilization", short: "Connecting academe, government, communities, youth, civil society, and volunteers.", items: ["Academic partnerships", "Government collaboration", "Local government engagement", "Community partnerships", "Civil society collaboration"] }
];

export const officers = [
  { name: "Peter John C. Enorio", role: "National Executive President / Founding President", image: "/assets/team/peter-john-enorio.jpg" },
  { name: "Dyn Michael M. Lozana", role: "National Executive Vice President", image: "/assets/team/dyn-michael-lozana.jpg" },
  { name: "Shaina Faith D. Visorro", role: "CTU Chapter Executive President", image: "/assets/team/shaina-faith-visorro.jpg" },
  { name: "Rachel Gulahab", role: "Siquijor Provincial Director", image: "/assets/team/rachel-gulahab.jpg" }
];
