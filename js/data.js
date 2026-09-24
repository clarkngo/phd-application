/**
 * PhD Application Tracker & Viability Matrix Data
 * Applicant: Clark Ngo
 * Links: 
 *   - Portfolio: https://clarkngo.github.io
 *   - GitHub: https://github.com/clarkngo
 *   - LinkedIn: https://www.linkedin.com/in/clarkngo/
 */

const APPLICANT_PROFILE = {
  name: "Clark Ngo",
  title: "Software Engineer & Graduate Educator | Prospective Ph.D. Researcher",
  location: "Seattle, WA",
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
      focus: "Full-Stack Web Systems, Cloud Architecture, Scalable Systems, AI/Data Querying",
      role: "Graduate Teaching Assistant & Student Worker"
    },
    {
      degree: "Bachelor of Science in Management of Financial Institutions",
      institution: "De La Salle University",
      location: "Manila, Philippines",
      focus: "Quantitative Financial Analysis, Organizational Systems, Strategic Management"
    }
  ],
  industryExperience: [
    {
      role: "Software Development & Systems Engineering",
      companies: "Thomson Reuters, S&P Capital IQ, eBay, and enterprise projects",
      description: "Extensive background in enterprise software engineering, database design, API engineering, full-stack web platforms (.NET Core, React, Node.js, Angular, Python), and cloud deployment."
    }
  ],
  academicExperience: [
    {
      title: "Graduate Teaching Assistant (School of Technology & Computing)",
      organization: "City University of Seattle",
      description: "Mentoring graduate and undergraduate students in algorithms, data structures, full-stack cloud software engineering, and database systems. Led technical seminars and workshops."
    },
    {
      title: "Research Contributor",
      organization: "Smart and Secure Computing Research Group (SSCRG) & Center for Information Assurance Education (CIAE)",
      description: "Applied research in secure computing architectures, information systems, and intelligent data systems."
    },
    {
      title: "Educational Content Creator & Open Source",
      organization: "Independent (clarkngo.github.io)",
      description: "Authored technical curriculum, learning roadmaps, interactive coding notes, conceptual breakdowns, and developer learning tools."
    }
  ],
  researchInterests: [
    "Human-Computer Interaction (HCI) & Developer Experience (DX)",
    "Computing Education & Cognitive Tools for Programmers",
    "Socio-Technical Systems & Information Accessibility",
    "Applied AI & LLM Systems for Educational Scaffolding",
    "Human-Centered Software Engineering"
  ],
  coreStrengths: [
    "Proven CS Master's degree foundation with practical engineering chops",
    "Active teaching track record and passion for computing pedagogy",
    "Unique hybrid background: Business/Finance BS + Technical MSCS + Industry Engineering",
    "Local Seattle resident with direct proximity to UW and Seattle University campuses"
  ],
  strategicGaps: [
    "Needs academic peer-reviewed conference publications (e.g., ACM CHI, SIGCSE, CSCW, FIE)",
    "Requires high-conviction Statement of Purpose linking industry experience to fundamental research questions",
    "Must secure 3 academic recommendation letters emphasizing research aptitude beyond coursework excellence"
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
    
    viabilityScore: 88,
    viabilityCategory: "Very Strong Fit (Top Recommendation)",
    viabilitySummary: "Clark's hybrid background (business + MSCS + teaching + software engineering) is a textbook match for the iSchool's socio-technical ethos. The iSchool actively values multidisciplinary backgrounds and computing education research.",
    
    strengthsMatch: [
      "iSchool explicitly prizes interdisciplinary applicants who bridge computing with social, organizational, or educational contexts.",
      "World-class faculty in Computing Education (Dr. Amy J. Ko) and HCI align precisely with Clark's teaching assistantship and educational tooling work.",
      "Clark's MSCS satisfies all technical analytical expectations, while his DLSU finance degree adds organizational breadth.",
      "Teaching assistant experience gives Clark immediate qualification for graduate teaching assistantship (TA) positions."
    ],
    challengesToAddress: [
      "Needs to frame past software engineering not merely as feature development, but as socio-technical inquiry into how developers/learners interact with information systems.",
      "Must identify 2-3 specific faculty members whose funded labs match his research agenda."
    ],
    recommendedPositioning: "Position as a Socio-Technical & Computing Education Researcher: investigate how modern software engineering workflows, AI-assisted coding tools, and interactive educational scaffolding impact diverse learners.",

    facultyMatches: [
      {
        name: "Dr. Amy J. Ko",
        title: "Professor & Associate Dean for Diversity",
        lab: "Code & Cognition Lab",
        researchAreas: ["Computing Education", "Human-Computer Interaction", "Software Engineering Pedagogy"],
        url: "https://faculty.washington.edu/ajko/",
        alignment: "Exceptional Match. Dr. Ko researches how people learn computing and how tools shape developer learning."
      },
      {
        name: "Dr. Jacob O. Wobbrock",
        title: "Professor of Information",
        lab: "ACE Lab (Accessible Computing Environments)",
        researchAreas: ["HCI", "Accessibility", "Input & Interaction Techniques"],
        url: "https://faculty.washington.edu/wobbrock/",
        alignment: "Strong Match for HCI, accessible design, and user-centered system interfaces."
      },
      {
        name: "Dr. Chirag Shah",
        title: "Professor",
        lab: "InfoSeeking Lab",
        researchAreas: ["Search & Information Retrieval", "Conversational AI", "Fairness in AI"],
        url: "https://ischool.uw.edu/people/faculty/chirags",
        alignment: "High relevance for Clark's interest in data querying, LLM information retrieval, and system architectures."
      }
    ],

    requirementsList: [
      { id: "sop", label: "Statement of Purpose (Research goals, faculty alignment, methodological approach)", completed: false },
      { id: "personal", label: "Personal Statement (350 words max: journey, lived experience, motivations)", completed: false },
      { id: "diversity", label: "Diversity & Inclusion Statement (Equity, inclusive teaching, perspective)", completed: false },
      { id: "cv", label: "Curriculum Vitae (Academic format: MSCS, TA work, publications/notes, engineering)", completed: false },
      { id: "transcripts", label: "Transcripts (Unofficial copies from CityU MSCS & DLSU BS)", completed: false },
      { id: "letters", label: "3 Letters of Recommendation (CityU professors, research mentor, technical director)", completed: false },
      { id: "faculty_outreach", label: "Faculty Alignment & Pre-application Outreach (Review recent lab papers)", completed: false },
      { id: "work_sample", label: "Optional Work Sample (Link to clarkngo.github.io learning tools or capstone)", completed: false }
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

    viabilityScore: 84,
    viabilityCategory: "Strong Fit (Engineering & Design Hybrid)",
    viabilitySummary: "HCDE sits in the College of Engineering. Clark's background in software engineering, UI/UX full-stack development, and interest in human factors makes him a compelling candidate if framed through user-centered research methodologies.",

    strengthsMatch: [
      "Clark has real engineering deployment experience (full-stack, scalable systems) which many pure design applicants lack.",
      "HCDE emphasizes building and evaluating interactive systems that serve human needs.",
      "The department has active research in engineering education and collaborative design tools.",
      "Clark's portfolio (clarkngo.github.io) demonstrates visual communication and educational UX."
    ],
    challengesToAddress: [
      "HCDE puts strong weight on qualitative and mixed design research methods (field studies, usability interviews, contextual inquiry) - Clark's SoP must articulate research questions beyond coding features.",
      "Adviser-driven admissions: You are admitted directly to a faculty advisor's funding group."
    ],
    recommendedPositioning: "Position as a Human-Centered Systems & Developer Tools Researcher: investigate how software architecture, interactive developer experiences (DevX), and cognitive computing tools empower novice and professional creators.",

    facultyMatches: [
      {
        name: "Dr. Julie Kientz",
        title: "Professor & Former Department Chair",
        lab: "Computing for Healthy Living & Learning",
        researchAreas: ["Human-Computer Interaction", "Health & Educational Tech", "User-Centered Design"],
        url: "https://www.hcde.washington.edu/kientz",
        alignment: "High fit for interactive learning technologies and empirical user research."
      },
      {
        name: "Dr. Jennifer Turns",
        title: "Professor",
        lab: "Engineering Education & Reflection Lab",
        researchAreas: ["Engineering Pedagogy", "Reflection in Design", "Computing Education"],
        url: "https://www.hcde.washington.edu/turns",
        alignment: "Outstanding fit for Clark's teaching experience and desire to improve how engineers learn systems."
      },
      {
        name: "Dr. Sean A. Munson",
        title: "Professor & Department Chair",
        lab: "Collaboration & Health Informatics Lab",
        researchAreas: ["Human-Centered Data", "CSCW", "Interactive Systems"],
        url: "https://www.hcde.washington.edu/munson",
        alignment: "Strong alignment for full-stack systems engineering coupled with behavioral data science."
      }
    ],

    requirementsList: [
      { id: "sop", label: "Statement of Purpose (Specific to HCDE research paradigms & research questions)", completed: false },
      { id: "edi", label: "Equity, Diversity & Inclusion (EDI) Statement (Crucial HCDE evaluation component)", completed: false },
      { id: "cv", label: "Curriculum Vitae (Highlighting engineering projects, mentoring, and technical writing)", completed: false },
      { id: "transcripts", label: "Transcripts (CityU MSCS & DLSU BS)", completed: false },
      { id: "letters", label: "3 Letters of Recommendation (Academic rigor and independent research potential)", completed: false },
      { id: "faculty_selection", label: "Identify 3 Prospective HCDE Faculty Advisors (Ranked in online portal)", completed: false },
      { id: "portfolio_link", label: "Design/Engineering Portfolio URL (Include clarkngo.github.io showcase)", completed: false }
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
    deadline: "Cohort based (Check current admission status)",
    deadlineFormatted: "Program Under Revision (Contact Admissions for Upcoming Cohorts)",
    badgeColor: "seattleu-red",
    portalUrl: "https://www.seattleu.edu/education/graduate-admissions/",
    websiteUrl: "https://www.seattleu.edu/education/educational-leadership-doctorate/",
    tagline: "Practitioner-scholar leadership model for transformative educational change and organizational equity.",
    competitiveness: "Moderate / Selective (Cohort-based)",
    fundingModel: "Tuition-Paying / Self-Funded (Tuition scholarships, employer assistance, or loans; typically no full PhD research stipend)",
    greRequired: false,
    greNote: "GRE is not required.",

    viabilityScore: 62,
    viabilityCategory: "Moderate Fit (Important Strategic Considerations)",
    viabilitySummary: "Seattle U offers an Ed.D. (Doctor of Education) rather than a Ph.D. in Computer Science or HCI. While it aligns with Clark's leadership and higher-education teaching ambitions, it is a practitioner degree focusing on administrative leadership and organizational change rather than funded technical/computing research.",

    strengthsMatch: [
      "Values experienced professionals, teaching assistants, and organizational leaders.",
      "Focus on social justice, educational equity, and organizational transformation aligns with mentorship passion.",
      "Flexible schedule often designed for working professionals in the Seattle area."
    ],
    challengesToAddress: [
      "Degree Distinction: Awards an Ed.D., not a Ph.D. Clark specifically stated needing a PhD.",
      "Funding: Ed.D. programs rarely offer the 100% full-tuition waiver + $35k+/yr living stipend that UW Ph.D. programs provide.",
      "Program Status: Seattle U has been actively revising and reimagining the EOLL program, with admissions paused/selective.",
      "Research Focus: Focuses on educational policy, leadership, and qualitative school reform rather than software engineering, AI, or HCI."
    ],
    recommendedPositioning: "Consider if the ultimate goal is higher-education administration, university tech leadership, or curriculum directorship. If the goal is tenure-track computing faculty, research scientist, or technical R&D, UW iSchool or HCDE Ph.D. is markedly superior.",

    facultyMatches: [
      {
        name: "College of Education Graduate Faculty",
        title: "Leadership & Learning Faculty",
        lab: "Department of Educational Leadership",
        researchAreas: ["Organizational Learning", "Higher Education Leadership", "Social Justice in Pedagogy"],
        url: "https://www.seattleu.edu/education/",
        alignment: "Applicable for leadership in technical education and higher-ed institutional development."
      }
    ],

    requirementsList: [
      { id: "sop", label: "Statement of Intent (Focusing on problems of practice in educational leadership)", completed: false },
      { id: "cv", label: "Professional Resume / CV (Highlighting professional leadership and teaching roles)", completed: false },
      { id: "transcripts", label: "Official Transcripts from all previously attended accredited institutions", completed: false },
      { id: "letters", label: "2-3 Professional Recommendations (Supervisors and educational leaders)", completed: false },
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

    viabilityScore: 78,
    viabilityCategory: "Promising Interdisciplinary Option",
    viabilitySummary: "If Clark is passionate about education and requires a real Ph.D. (rather than an Ed.D.), the UW College of Education's Learning Sciences & Human Development (LSHD) area is a strong alternative. It studies how people learn with technology, cognitive tools, and collaborative environments.",

    strengthsMatch: [
      "Awards an authentic research Ph.D. with graduate funding opportunities.",
      "Learning Sciences is an established discipline examining how cognitive technologies facilitate STEM & computing learning.",
      "Allows cross-campus collaboration with UW iSchool and Paul G. Allen School of CSE."
    ],
    challengesToAddress: [
      "Requires deeper grounding in learning theories, socio-cultural theories of cognition, and educational research methods.",
      "Less focus on direct software architecture and engineering than iSchool or HCDE."
    ],
    recommendedPositioning: "Position as a STEM/Computing Learning Sciences researcher examining how developer tools and AI tutoring environments facilitate conceptual understanding.",

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
      { id: "writing_sample", label: "Academic Writing Sample (Scholarly essay or technical capstone writeup)", completed: false },
      { id: "cv", label: "Academic Curriculum Vitae", completed: false },
      { id: "transcripts", label: "Transcripts (CityU MSCS, DLSU BS)", completed: false },
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
