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
    slug: "black-bamboo-propagation-initiative-2026",
    type: "Project Story",
    title: "Growing Resilience, One Bamboo at a Time",
    date: "January 25, 2026",
    dateValue: "2026-01-25",
    excerpt:
      "A community-based bamboo propagation initiative demonstrates how youth volunteerism can support environmental restoration and climate resilience.",
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
