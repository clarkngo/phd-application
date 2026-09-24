/**
 * PhD Application Tracker & Viability Matrix Data
 * Applicant: Clark Jason Ngo
 * Enhanced with 2024 UW Application Dossier Context:
 *   - Reference folder: reference-uw-2024-application
 *   - Recommenders: Dr. Sam Chung (Dean/Prof, former UW 14-yr faculty), Dr. Morgan Zantua (Assoc Prof, Dir. Center for Cybersecurity Innovation)
 *   - Research: Explainable AI (XAI) in Educational Systems, Human-in-the-loop Teacher Scaffolding
 *   - Target Faculty: Dr. Ben Lee, Dr. Mike Teodorescu, Dr. Jason Yip, Dr. Amy Ko, Dr. Julie Kientz
 */

const APPLICANT_PROFILE = {
  name: "Clark Jason Ngo",
  title: "Software Engineer, Graduate Educator & Program Manager | Prospective Ph.D. Researcher",
  location: "Seattle, WA",
  heritage: "Filipino-Chinese (Multilingual: English, Tagalog, Mandarin)",
  links: {
    portfolio: "https://clarkngo.github.io",
    github: "https://github.com/clarkngo",
    linkedin: "https://www.linkedin.com/in/clarkngo/"
  },
  degrees: [
    {
      degree: "Master of Science in Computer Science (MSCS)",
      institution: "City University of Seattle",
      location: "Seattle, WA",
      focus: "Cloud Systems, Full-Stack Architecture, Serverless Computing, DevSecOps & AI Workflows"
    },
    {
      degree: "Master of Business Administration (MBA)",
      institution: "City University of Seattle",
      location: "Seattle, WA",
      focus: "Technology Management, Organizational Leadership, Enterprise Information Systems"
    },
    {
      degree: "Bachelor of Science in Management of Financial Institutions",
      institution: "De La Salle University",
      location: "Manila, Philippines",
      focus: "Quantitative Financial Analysis, Financial Markets, Cross-Cultural Business Systems"
    }
  ],
  publications: [
    {
      title: "Decreasing the barrier to entry for an open-source full-stack web development",
      authors: "Ngo, C. J., Chang, J., & Chung, S.",
      venue: "Proceedings of the Conference on Information Systems Applied Research (CONISAR / ISCAP)",
      year: 2021,
      type: "Conference Proceeding",
      url: "https://iscap.us/proceedings/conisar/2021/pdf/5540.pdf",
      description: "Proposed pedagogical frameworks and curriculum architectures to make full-stack development accessible to non-traditional and beginning software engineering students."
    },
    {
      title: "Serverless Computing Architecture Security and Quality Analysis for Back-end Development",
      authors: "Ngo, C., Wang, P., Tran, T., & Chung, S.",
      venue: "Journal of The Colloquium for Information Systems Security Education (CISSE), Vol. 7, No. 1",
      year: 2020,
      type: "Journal Article",
      url: "https://cisse.info/journal/index.php/cisse/article/view/110",
      description: "Empirical evaluation of serverless computing architectures (AWS Lambda) assessing architectural quality metrics, cold-start latency, and vulnerability exposure for secure back-end systems."
    },
    {
      title: "Enterprise AI Course: Cloud-Based Full-Stack DevSecOps with Retrieval-Augmented Generation",
      authors: "Ngo, C.",
      venue: "UKC 2024 Conference (US-Korea Conference on Science, Technology, and Entrepreneurship)",
      year: 2024,
      type: "Conference Presentation",
      url: "https://ukc.ksea.org/programs/proceeding-ukc2024",
      description: "Presented cutting-edge pedagogical framework integrating Retrieval-Augmented Generation (RAG) and automated DevSecOps pipelines into computer science and enterprise AI education."
    }
  ],
  industryExperience: [
    {
      role: "Platform Reliability & Quality Engineering (Contractor)",
      companies: "eBay Ads",
      description: "Improved platform reliability, reduced root-cause analysis (RCA) latency, and engineered monitoring dashboards to enhance experimental data accuracy."
    },
    {
      role: "IT Consultant & ERP Modernization",
      companies: "Liberty Paper / Manufacturing",
      description: "Modernized legacy systems with cloud ERP architectures, optimized supply-chain workflow data, and trained staff on modern digital operations."
    },
    {
      role: "Mandarin Financial Analyst & Localization Specialist",
      companies: "Thomson Reuters & S&P Global Intelligence",
      description: "Conducted financial statement analysis and managed cross-lingual translation standards for global markets across Chinese, Filipino, and Western teams for over 5 years."
    }
  ],
  academicExperience: [
    {
      title: "Program Manager & Graduate Instructor",
      organization: "City University of Seattle — School of Technology & Computing (STC)",
      description: "Taught core graduate courses in full-stack development, cloud computing, cybersecurity, and AI for managers. Led student research groups and tech clubs."
    },
    {
      title: "Apprenticeship Program Manager",
      organization: "Amazon Web Services (AWS) Apprenticeship Program at CityU",
      description: "Led two cohorts consisting of 87 transitioning U.S. military service members and military spouses through an intensive 17-week technical career launch program."
    },
    {
      title: "Software Engineering Mentor",
      organization: "CodeDay & CodeDay Labs",
      description: "Mentored diverse student demographics (ages 12–26) in building open-source projects, bridging academic computer science with real-world industry engineering practices."
    }
  ],
  recommenders: [
    {
      name: "Dr. Sam Chung",
      title: "Dean and Professor, School of Technology and Computing",
      institution: "City University of Seattle",
      background: "Former tenured Associate Professor at UW Tacoma Institute of Technology (14 years); founded the BS in IT program at UW Tacoma. Supervised Clark for 7+ years.",
      keyEndorsement: "Extensively endorses Clark's interdisciplinary research drive, pedagogical leadership in the AWS grant, and natural fit for the UW iSchool."
    },
    {
      name: "Dr. Morgan Zantua",
      title: "Associate Professor & Director, Center for Cybersecurity Innovation",
      institution: "City University of Seattle",
      background: "Administrative Faculty and co-mentor on the AWS Full Stack Curriculum and research publications for 5+ years.",
      keyEndorsement: "Highlights Clark's peer-mentorship, community building, work ethic, and ability to translate emerging technologies (like RAG and DevSecOps) into curriculum."
    }
  ],
  researchInterests: [
    "Explainable Artificial Intelligence (XAI) in Educational Systems",
    "Human-in-the-Loop AI Scaffolding & Teacher Decision Support",
    "Socio-Technical Systems & Computing Education Pedagogy",
    "Mitigating AI Faculty Shortages via Scalable Adaptive Mentoring",
    "Human-Centered Software Engineering & Developer Cognitive Tools"
  ],
  coreStrengths: [
    "3 Published Papers in applied computing, pedagogy, and cloud security (CONISAR, CISSE, UKC 2024)",
    "Strong backing from UW insider faculty: Dr. Sam Chung (14-year former UW professor/founder of BS in IT)",
    "Demonstrated impact training 87 veterans/spouses (AWS grant) and teaching graduate CS courses",
    "Compelling socio-technical research statement combining XAI, instructor agency, and educational equity"
  ],
  strategicGaps: [
    "Expanding peer-reviewed publication venue reach into top-tier ACM venues (CHI, SIGCSE, CSCW)",
    "Tailoring the 2024 iSchool Statement of Purpose into an HCDE user-centered research framing for the dual application",
    "Securing direct faculty alignment dialogue with target PIs ahead of December 2 deadline"
  ]
};

const PROGRAMS_DATA = [
  {
    id: "uw-ischool",
    name: "UW Information School",
    shortName: "UW iSchool",
    university: "University of Washington",
    college: "Information School",
    degree: "Ph.D. in Information Science",
    degreeType: "PhD",
    location: "Seattle, WA (UW Seattle Campus)",
    deadline: "2026-12-02T23:59:59-08:00",
    deadlineFormatted: "December 2, 2026 (11:59 PM PT)",
    badgeColor: "uw-purple",
    portalUrl: "https://grad.uw.edu/admissions/apply-now/",
    websiteUrl: "https://ischool.uw.edu/programs/phd",
    tagline: "Interdisciplinary research at the intersection of information, people, and technology.",
    competitiveness: "High (< 8% acceptance rate)",
    fundingModel: "100% Guaranteed 4-5 Years (Full Tuition Waiver + Living Stipend + Health Insurance as RA/TA)",
    greRequired: false,
    greNote: "GRE scores are not considered in the admissions review.",
    
    viabilityScore: 92,
    viabilityCategory: "Direct Application Continuum (Highest Match)",
    viabilitySummary: "Clark's 2024 application dossier was tailored precisely for the UW iSchool. His focus on Explainable AI (XAI) in Education, socio-technical systems, and diverse community leadership directly mirrors the iSchool's ethos. Endorsements from former UW professor Dr. Sam Chung and Director Zantua provide institutional credibility.",
    
    strengthsMatch: [
      "Existing tailored 2024 Statements of Purpose, Diversity, and Personal Statements already authored and grounded in XAI research literature (Longo 2024, Cardona 2023).",
      "Rank 1 advisor match Dr. Ben Lee's research on Explainable AI (LIMEADE) and born-digital data matches Clark's XAI proposal perfectly.",
      "Recommender Dr. Sam Chung served 14 years on faculty at UW Tacoma, offering an exceptional insider evaluation.",
      "Proven track record in university teaching and AWS veteran apprenticeships addresses the iSchool's priority for social good and tech equity."
    ],
    challengesToAddress: [
      "Prior application in 2024: Ensure the 2026/2027 update highlights new progress (UKC 2024 presentation, recent AI developments, refined research methodology).",
      "Reach out directly to Dr. Ben Lee, Dr. Mike Teodorescu, and Dr. Jason Yip with a concise 1-page research pitch."
    ],
    recommendedPositioning: "Focus on Explainable AI (XAI) for Human-AI Hybrid Educational Systems: Investigate how transparent, interpretable AI recommendations empower human educators rather than replacing them, directly tackling AI faculty shortages.",

    facultyMatches: [
      {
        name: "Dr. Benjamin (Ben) Lee",
        title: "Assistant Professor",
        lab: "Human-Centered Machine Learning & Digital Humanities",
        researchAreas: ["Explainable AI (XAI)", "Machine Learning", "Cultural Heritage & Born-Digital Data", "LIMEADE"],
        url: "https://ischool.uw.edu/people/faculty/profile/bcgl",
        alignment: "Clark's Rank 1 Advisor. Dr. Lee's work on LIMEADE and explainable AI algorithms directly parallels Clark's desire to build transparent, interpretable decision systems."
      },
      {
        name: "Dr. Mike H.M. Teodorescu",
        title: "Assistant Professor",
        lab: "Information, Technology & Organization (ITO)",
        researchAreas: ["Machine Learning Fairness", "Technology Innovation", "Ethical AI Adoption", "Intellectual Property"],
        url: "https://ischool.uw.edu/people/faculty/profile/miket",
        alignment: "Clark's Rank 2 Advisor. Dr. Teodorescu's emphasis on algorithmic fairness, bias mitigation, and ethical adoption aligns with Clark's commitment to equitable educational tools."
      },
      {
        name: "Dr. Jason Yip",
        title: "Associate Professor",
        lab: "KidsTeam UW / Digital Youth Lab",
        researchAreas: ["Participatory Design", "Child-Computer Interaction", "Self-Regulated Learning", "Family Technologies"],
        url: "https://ischool.uw.edu/people/faculty/profile/jcyip",
        alignment: "Clark's Rank 3 Advisor. Direct synergy with Clark's CodeDay mentorship, teen coaching, and participatory design of educational software."
      },
      {
        name: "Dr. Amy J. Ko",
        title: "Professor & Associate Dean",
        lab: "Code & Cognition Lab",
        researchAreas: ["Computing Education", "Human-Computer Interaction", "Developer Cognition"],
        url: "https://faculty.washington.edu/ajko/",
        alignment: "Pioneering researcher in how humans learn computer science and how software engineering tools scaffold problem-solving."
      }
    ],

    requirementsList: [
      { id: "sop", label: "Statement of Purpose (Refine 2024 XAI in Education proposal with 2025/2026 literature)", completed: false },
      { id: "personal", label: "Personal Statement (350 words: Journey from finance to software engineering & teaching)", completed: false },
      { id: "diversity", label: "Diversity Statement (Filipino-Chinese identity, AWS veteran cohorts, CodeDay mentoring)", completed: false },
      { id: "cv", label: "Academic CV (Include 3 papers: CONISAR, CISSE, UKC 2024, plus CityU/eBay experience)", completed: false },
      { id: "transcripts", label: "Transcripts (CityU MSCS, CityU MBA, and DLSU BS)", completed: false },
      { id: "lor_chung", label: "LOR #1: Dr. Sam Chung (Dean & Prof, former 14-yr UW tenured faculty)", completed: false },
      { id: "lor_zantua", label: "LOR #2: Dr. Morgan Zantua (Assoc Prof & Center Director)", completed: false },
      { id: "lor_third", label: "LOR #3: Industry/Academic Recommender (eBay Director or CityU Colleague)", completed: false },
      { id: "faculty_outreach", label: "Email Dr. Ben Lee, Dr. Mike Teodorescu & Dr. Jason Yip with updated pitch", completed: false }
    ]
  },

  {
    id: "uw-hcde",
    name: "UW Human Centered Design & Engineering",
    shortName: "UW HCDE",
    university: "University of Washington",
    college: "College of Engineering",
    degree: "Ph.D. in Human Centered Design & Engineering",
    degreeType: "PhD",
    location: "Seattle, WA (UW Seattle Campus)",
    deadline: "2026-12-02T23:59:59-08:00",
    deadlineFormatted: "December 2, 2026 (11:59 PM PT - Strict Deadline)",
    badgeColor: "uw-gold",
    portalUrl: "https://grad.uw.edu/admissions/apply-now/",
    websiteUrl: "https://www.hcde.washington.edu/phd",
    tagline: "Engineering human-centered technologies, user experience research, and collaborative systems.",
    competitiveness: "Very High (< 10% acceptance rate)",
    fundingModel: "100% Guaranteed 4-5 Years (Tuition Waiver + RA/TA Stipend + Health Insurance)",
    greRequired: false,
    greNote: "GRE scores are not required and not considered.",

    viabilityScore: 86,
    viabilityCategory: "Strong Fit (Engineering & Design Hybrid)",
    viabilitySummary: "HCDE is in the College of Engineering. Clark's background in software engineering, cloud systems, and his 2024 research proposal on collaborative instructor dashboards is well-suited for HCDE if translated into user-centered research methods (contextual inquiry, participatory design with teachers, interaction design for XAI).",

    strengthsMatch: [
      "Clark's proposed 'Hybrid Platform for Human Educators & AI Collaboration' from his 2024 SoP is inherently an HCDE topic (human-in-the-loop interaction design).",
      "Strong engineering chops (MSCS, AWS, serverless paper) give him the technical capability to build working interactive prototypes.",
      "Work with diverse populations (CodeDay, military veterans) directly supports HCDE's commitment to equity and user diversity."
    ],
    challengesToAddress: [
      "Must re-orient the SoP from purely algorithmic XAI to interaction design, teacher user studies, cognitive load, and human-AI collaborative workflows.",
      "Must select 3 HCDE-specific faculty advisors (e.g., Dr. Julie Kientz, Dr. Jennifer Turns, Dr. Sean Munson)."
    ],
    recommendedPositioning: "Position as a Human-AI Interaction & Educational Technology Engineer: Design and evaluate collaborative interfaces that allow educators to steer and audit AI recommendations while preserving pedagogical agency.",

    facultyMatches: [
      {
        name: "Dr. Julie Kientz",
        title: "Professor & Former Department Chair",
        lab: "Computing for Healthy Living & Learning",
        researchAreas: ["Human-Computer Interaction", "Health & Educational Tech", "User-Centered Design"],
        url: "https://www.hcde.washington.edu/kientz",
        alignment: "Leader in designing technologies for children, families, and learners with focus on empirical evaluation."
      },
      {
        name: "Dr. Jennifer Turns",
        title: "Professor",
        lab: "Engineering Education & Reflection Lab",
        researchAreas: ["Engineering Pedagogy", "Reflection in Design", "Educator Cognitive Tools"],
        url: "https://www.hcde.washington.edu/turns",
        alignment: "Exceptional synergy with Clark's goal of empowering educators and improving engineering education systems."
      },
      {
        name: "Dr. Sean A. Munson",
        title: "Professor & Department Chair",
        lab: "Collaboration & Health Informatics Lab",
        researchAreas: ["Human-Centered Data", "CSCW", "Interactive Systems Design"],
        url: "https://www.hcde.washington.edu/munson",
        alignment: "Strong alignment for full-stack data dashboards that support human decision making."
      }
    ],

    requirementsList: [
      { id: "sop", label: "Statement of Purpose (Reframe 2024 XAI proposal toward Human-Centered Interaction Design)", completed: false },
      { id: "edi", label: "Equity, Diversity & Inclusion Statement (Leverage 2024 diversity narrative: AWS veterans & CodeDay)", completed: false },
      { id: "cv", label: "Curriculum Vitae (Highlight software architecture and research publications)", completed: false },
      { id: "transcripts", label: "Transcripts (CityU MSCS, MBA, DLSU BS)", completed: false },
      { id: "letters", label: "3 Letters of Recommendation (Dr. Sam Chung, Dr. Morgan Zantua, Industry Lead)", completed: false },
      { id: "faculty_selection", label: "Identify and rank 3 Prospective HCDE Faculty Advisors in portal", completed: false },
      { id: "portfolio_link", label: "Include links to clarkngo.github.io learning platforms and capstone", completed: false }
    ]
  },

  {
    id: "seattleu-eoll",
    name: "Seattle University College of Education",
    shortName: "Seattle U Ed.D.",
    university: "Seattle University",
    college: "College of Education",
    degree: "Doctor of Education (Ed.D.) in Educational & Organizational Learning & Leadership (EOLL)",
    degreeType: "EdD",
    location: "Seattle, WA (Capitol Hill Campus)",
    deadline: "Cohort based (Admissions currently under revision)",
    deadlineFormatted: "Program Under Revision (Contact Admissions for Upcoming Cohorts)",
    badgeColor: "seattleu-red",
    portalUrl: "https://www.seattleu.edu/education/graduate-admissions/",
    websiteUrl: "https://www.seattleu.edu/education/educational-leadership-doctorate/",
    tagline: "Practitioner-scholar leadership model for transformative educational change and organizational equity.",
    competitiveness: "Moderate / Selective (Cohort-based)",
    fundingModel: "Tuition-Paying / Self-Funded (Tuition scholarships, employer assistance, or loans; typically no full PhD research stipend)",
    greRequired: false,
    greNote: "GRE is not required.",

    viabilityScore: 60,
    viabilityCategory: "Moderate Fit (Important Strategic Considerations)",
    viabilitySummary: "Seattle U offers an Ed.D. (Doctor of Education) rather than a Ph.D. in Computer Science or Information Science. While Clark's leadership managing 87 veterans in the AWS program and teaching at CityU connects to educational leadership, an Ed.D. does not lead to research scientist roles or tenure-track CS/IS faculty positions.",

    strengthsMatch: [
      "Values experienced program managers and higher education instructors.",
      "Mission of social justice aligns with Clark's military spouse/veteran support and underrepresented student mentorship."
    ],
    challengesToAddress: [
      "Degree Distinction: Awards an Ed.D., not a Ph.D. Clark specifically stated needing a PhD.",
      "Funding: Ed.D. programs are usually tuition-paying without the guaranteed 4-5 year living stipends of UW Ph.D. programs.",
      "Admissions Status: Seattle U has been actively revising and reimagining the EOLL program, with admissions paused/selective.",
      "Research Focus: Focuses on school administration and organizational policy rather than software engineering, AI, or HCI."
    ],
    recommendedPositioning: "Only pursue if your primary career goal is higher-education administration, community college deanship, or organizational leadership. For technical research, academic faculty in computing, or AI R&D, UW iSchool or HCDE Ph.D. is the appropriate path.",

    facultyMatches: [
      {
        name: "College of Education Graduate Faculty",
        title: "Leadership & Learning Faculty",
        lab: "Department of Educational Leadership",
        researchAreas: ["Organizational Learning", "Higher Education Leadership", "Social Justice in Pedagogy"],
        url: "https://www.seattleu.edu/education/",
        alignment: "Applicable for leadership in technical education and institutional diversity."
      }
    ],

    requirementsList: [
      { id: "sop", label: "Statement of Intent (Framed around organizational leadership and tech education)", completed: false },
      { id: "cv", label: "Professional Resume / CV (Highlighting AWS program management and teaching)", completed: false },
      { id: "transcripts", label: "Official Transcripts from all previously attended accredited institutions", completed: false },
      { id: "letters", label: "2-3 Professional Recommendations (Dr. Sam Chung, Dr. Morgan Zantua)", completed: false },
      { id: "cohort_inquiry", label: "Contact Graduate Admissions regarding Reimagined Program Cohort status", completed: false }
    ]
  },

  {
    id: "uw-education",
    name: "UW College of Education (Alternative Ph.D. Option)",
    shortName: "UW Education Ph.D.",
    university: "University of Washington",
    college: "College of Education",
    degree: "Ph.D. in Education (Learning Sciences & Human Development)",
    degreeType: "PhD",
    location: "Seattle, WA (Miller Hall, UW Campus)",
    deadline: "2026-12-01T23:59:59-08:00",
    deadlineFormatted: "December 1, 2026",
    badgeColor: "uw-purple-light",
    portalUrl: "https://grad.uw.edu/admissions/apply-now/",
    websiteUrl: "https://education.uw.edu/programs/doctoral/phd",
    tagline: "Theory, research, and design of learning environments, cognitive tools, and socio-cultural development.",
    competitiveness: "High",
    fundingModel: "Fully Funded (4-year packages typically available for full-time PhDs)",
    greRequired: false,
    greNote: "GRE scores not required.",

    viabilityScore: 80,
    viabilityCategory: "Promising Interdisciplinary Option",
    viabilitySummary: "If Clark is passionate about education and requires a fully funded Ph.D. (rather than an Ed.D.), the UW College of Education's Learning Sciences & Human Development (LSHD) area is a compelling alternative. It investigates how people learn with cognitive tools, AI, and digital environments.",

    strengthsMatch: [
      "Awards an authentic research Ph.D. with graduate funding opportunities.",
      "Examines how cognitive technologies facilitate STEM and computing learning.",
      "Allows cross-campus collaboration with UW iSchool and Paul G. Allen School of CSE."
    ],
    challengesToAddress: [
      "Requires deeper grounding in learning theories, socio-cultural theories of cognition, and qualitative educational research methods.",
      "Less focus on direct software architecture and engineering than iSchool or HCDE."
    ],
    recommendedPositioning: "Position as a Computing Learning Sciences researcher examining how explainable AI and developer cognitive tools scaffold conceptual understanding.",

    facultyMatches: [
      {
        name: "Dr. Philip Bell",
        title: "Professor of Learning Sciences",
        lab: "Learning in Informal and Formal Environments (LIFE)",
        researchAreas: ["STEM Learning", "Educational Technologies", "Learning Sciences"],
        url: "https://education.uw.edu/people/faculty/pbell",
        alignment: "Strong match for investigating how computing and science tools foster learning."
      }
    ],

    requirementsList: [
      { id: "sop", label: "Statement of Purpose (Learning Sciences research questions & theoretical interest)", completed: false },
      { id: "writing_sample", label: "Academic Writing Sample (Include CONISAR or CISSE paper)", completed: false },
      { id: "cv", label: "Academic Curriculum Vitae", completed: false },
      { id: "transcripts", label: "Transcripts (CityU MSCS, MBA, DLSU BS)", completed: false },
      { id: "letters", label: "3 Letters of Recommendation", completed: false }
    ]
  }
];

const VIABILITY_CRITERIA = [
  {
    key: "degreeType",
    name: "PhD vs. EdD Distinction",
    weight: 25,
    description: "User explicitly stated needing a Ph.D. (research doctorate vs. practitioner doctorate)."
  },
  {
    key: "csAlignment",
    name: "CS & Technical Alignment",
    weight: 25,
    description: "Fit with Clark's MSCS, software engineering, cloud platforms, and data querying background."
  },
  {
    key: "teachingFit",
    name: "Pedagogy & Educational Fit",
    weight: 20,
    description: "Alignment with teaching assistantship, educational roadmaps, and mentoring experience."
  },
  {
    key: "fundingSecurity",
    name: "Full Funding & Stipend",
    weight: 15,
    description: "Availability of 4-5 year guaranteed tuition waiver, living stipend, and RA/TA employment."
  },
  {
    key: "localProximity",
    name: "Local Seattle Ecosystem",
    weight: 15,
    description: "In-person campus engagement, local network, and immediate faculty access."
  }
];

// 2024 Application Archive Dossier
const APPLICATION_2024_DOSSIER = {
  sop: {
    title: "2024 Statement of Purpose (UW iSchool)",
    targetDegree: "Ph.D. in Information Science",
    coreTheme: "Explainable Artificial Intelligence (XAI) in Educational Systems",
    summary: "Proposes integrating Explainable AI (XAI) into educational platforms to provide transparent, interpretable guidance while preserving human instructor agency. Explores a cloud-based hybrid collaborative dashboard where instructors customize AI recommendations for struggling students, addressing both the 'black box' problem and national AI faculty shortages.",
    keyQuotes: [
      "By making AI-driven decisions more understandable, I aim to build trust among educators and learners, thereby increasing the effectiveness and acceptance of these technologies.",
      "The platform would feature a collaborative dashboard for instructors, enabling them to customize AI-generated recommendations... AI would handle tasks like identifying struggling students or curating resources, while instructors retain the final say, promoting accountability and human agency.",
      "According to Zwetsloot and Corrigan (2022), U.S. universities face significant faculty shortages in AI-related disciplines... Addressing these gaps is essential for preparing an inclusive workforce equipped for an AI-driven future."
    ],
    upgradeRecommendations: [
      "Integrate the latest 2025/2026 literature on agentic workflows and LLM reasoning evaluations.",
      "Add a concrete methodology section detailing empirical pilot studies: mix of quantitative log analysis and qualitative teacher usability interviews.",
      "For HCDE application: Reframe dashboard implementation through interaction design (DevX/EducatorX), cognitive load theory, and iterative prototyping."
    ]
  },
  personalStatement: {
    title: "2024 Personal Statement",
    length: "350 words",
    narrativeArc: "Traces journey from Financial Analyst (Thomson Reuters, S&P Global) -> discovering computing during MBA -> MSCS at City University of Seattle -> software engineering & IT consulting (eBay Ads, Liberty Paper) -> teaching full-stack & cloud -> published researcher.",
    keyPublicationsMentioned: [
      "Decreasing the Barrier to Entry for an Open-Source Full-Stack Web Development (ISCAP 2021)",
      "Enterprise AI Course: Cloud-Based Full-Stack DevSecOps with RAG (UKC 2024)",
      "Serverless Computing Architecture Security and Quality Analysis for Back-end Development (CISSE 2020)"
    ],
    upgradeRecommendations: [
      "Update with recent industry consulting and ongoing open-source curriculum projects.",
      "Explicitly mention how your MBA enhances research management and project execution capacity."
    ]
  },
  diversityStatement: {
    title: "2024 Diversity, Equity & Inclusion Statement",
    narrativeArc: "Filipino-Chinese identity navigating cultural and linguistic belonging in the Philippines -> overcoming early linguistic ridicule to become fluent in Mandarin -> leading Mandarin analyst focus groups for 5 years -> mentoring youth and college students at CodeDay / CodeDay Labs -> managing 2 cohorts (87 members) of military veterans & spouses in the AWS Apprenticeship Program.",
    impactMetrics: [
      "87 transitioning military service members & military spouses mentored through 17-week AWS cloud curriculum.",
      "Mentored college students in open-source projects through CodeDay Labs.",
      "Volunteered at De La Salle University's 'For The Kids' (Mini-Olympics) supporting children with special needs."
    ],
    upgradeRecommendations: [
      "Retain this authentic personal narrative — it is powerful, grounded in concrete actions, and directly addresses UW's mission.",
      "Explicitly connect your experience mentoring non-traditional students to your research goal of building inclusive, accessible AI learning environments."
    ]
  },
  facultyEndorsements: [
    {
      recommender: "Dr. Sam Chung (Dean & Professor, CityU; former 14-yr tenured UW professor)",
      quote: "Mr. Ngo's background in Finance and MSCS demonstrates how knowledge across domains can be mutually enhancing. In teaching, research, and peer support, he has consistently demonstrated excellence. Having served on the UW faculty for 14 years, I can attest to his alignment with the iSchool's interdisciplinary ethos."
    },
    {
      recommender: "Dr. Morgan Zantua (Associate Professor & Director, Center for Cybersecurity Innovation, CityU)",
      quote: "Clark has demonstrated an exceptional capacity to combine academic achievements and research interests... During the AWS Full Stack project, Clark mastered content by teaching his peers. His recent contribution at UKC 2024 demonstrates his ability to maintain academic relevance."
    }
  ]
};
