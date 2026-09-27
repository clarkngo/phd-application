/**
 * PhD Application Tracker & Viability Matrix Data
 * Applicant: Clark Jason Ngo
 * Enhanced with 2024 UW Application Dossier Context:
 *   - Reference folder (local only, gitignored): private/reference-uw-2024-application
 *   - Recommenders: Dr. Sam Chung (Dean/Prof, former UW 14-yr faculty), Dr. Morgan Zantua (Assoc Prof, Dir. Center for Cybersecurity Innovation)
 *   - Research: Explainable AI (XAI) in Educational Systems, Human-in-the-loop Teacher Scaffolding
 *   - Target Faculty (verified recruiting for Autumn 2027 on 2026-09-26): iSchool — Katie Davis, Amy Ko, Jason Yip, Ben Lee;
 *     HCDE — Sayamindu Dasgupta, Julie Kientz, David McDonald
 */

const APPLICANT_PROFILE = {
  name: "Clark Jason Ngo",
  title: "Software Engineer & AI Curriculum Builder (former Instructor) | Prospective Ph.D. Researcher",
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
      authors: "Ngo, C., & Chung, S.",
      venue: "Proceedings of UKC 2024, San Francisco, CA (p. 238)",
      year: 2024,
      type: "Conference Poster",
      url: "https://clarkngo.github.io/research/publications/2024-enterprise-ai-course-rag",
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
      title: "Student Worker — BSAI Program, Courses & AI Initiatives (current)",
      organization: "City University of Seattle — School of Technology & Computing (STC)",
      description: "Assists in building the new Bachelor of Science in AI (BSAI) program and its courses, and supports the school's AI initiatives."
    },
    {
      title: "Program Manager & Instructor (former)",
      organization: "City University of Seattle — School of Technology & Computing (STC)",
      description: "Taught 11 course sections from Winter 2020 to Winter 2021 (about 206 total enrollments): Full-Stack Web Development (frontend and backend), Linux Operating Systems I–II, Cybersecurity, IT Service Management, Information Systems, Data Management, Communications & Networking, and IT for Managers, plus graduate courses Programming for Computing (CS 506) and Full-Stack Development II (CS 628). Led student research groups and tech clubs."
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
    "Demonstrated impact training 87 veterans/spouses (AWS grant) and teaching 11 CityU course sections (undergraduate and graduate)",
    "Compelling socio-technical research statement combining XAI, instructor agency, and educational equity"
  ],
  strategicGaps: [
    "Expanding peer-reviewed publication venue reach into top-tier ACM venues (CHI, SIGCSE, CSCW)",
    "Tailoring the 2024 iSchool Statement of Purpose into an HCDE user-centered research framing for the dual application",
    "Securing faculty alignment early (Sept–Oct) with PIs who welcome contact — and respecting the ones who explicitly say not to email (Amy Ko, Lucy Lu Wang)"
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
    officialLinks: [
      { label: "Program home", url: "https://ischool.uw.edu/programs/phd" },
      { label: "Application process", url: "https://ischool.uw.edu/programs/phd/admissions/application-process" },
      { label: "Admissions FAQ", url: "https://ischool.uw.edu/programs/phd/admissions/faq" },
      { label: "Faculty advisors (who is recruiting)", url: "https://ischool.uw.edu/programs/phd/people/faculty" },
      { label: "UW Grad School application portal", url: "https://grad.uw.edu/admissions/apply-now/" }
    ],
    tagline: "Interdisciplinary research at the intersection of information, people, and technology.",
    competitiveness: "High (< 8% acceptance rate)",
    fundingModel: "Guaranteed funding for at least 4 years / 12 quarters (stipend + tuition waiver + health insurance via RA/TA appointments)",
    greRequired: false,
    greNote: "GRE scores are optional (no minimum); mainly useful to support a low-GPA petition.",
    
    viabilityScore: 92,
    viabilityCategory: "Direct Application Continuum (Highest Match)",
    viabilitySummary: "Clark's 2024 dossier was written for the iSchool, and the Autumn 2027 recruiting list now includes a near-direct topical match: Prof. Katie Davis lists 'AI & Education' and is studying how teachers negotiate generative AI in their practice — the same instructor-agency question at the heart of Clark's XAI-in-education proposal. Endorsements from former UW professor Dr. Sam Chung and Director Zantua add institutional credibility.",
    
    strengthsMatch: [
      "Existing tailored 2024 Statements of Purpose, Diversity, and Personal Statements already authored and grounded in XAI research literature (Longo 2024, Cardona 2023).",
      "Four recruiting faculty (Davis, Ko, Yip, B. Lee) each connect to a different part of Clark's profile: teacher-facing AI, CS education, youth co-design, and large-scale ML search engineering.",
      "Recommender Dr. Sam Chung served 14 years on faculty at UW Tacoma, offering an exceptional insider evaluation.",
      "Proven track record in university teaching and AWS veteran apprenticeships addresses the iSchool's priority for social good and tech equity."
    ],
    challengesToAddress: [
      "Prior application in 2024: Ensure the 2026/2027 update highlights new progress (UKC 2024 presentation, recent AI developments, refined research methodology).",
      "Correction from earlier notes: Ben Lee's current lab is the Lab for Computing Cultural Heritage (ML search over library/archive collections). LIMEADE was his earlier CSE work — do not pitch him on XAI-in-education; pitch engineering help on his search systems instead.",
      "Mike Teodorescu is NOT on the iSchool's 'currently seeking Ph.D. students (2027-28)' list — do not rank him as a primary advisor.",
      "Contact rules differ per faculty: Amy Ko and Lucy Lu Wang ask applicants NOT to email — just name them in the application."
    ],
    recommendedPositioning: "Focus on human-centered AI for educators: how teachers interpret, trust, steer and override AI recommendations in their classrooms. Rank Katie Davis #1, then Amy Ko and Jason Yip; list Ben Lee if you want a skills-driven (ML systems engineering) option. The iSchool asks for 3–4 ranked faculty.",

    facultyMatches: [
      {
        name: "Prof. Katie Davis",
        title: "Professor, Associate Dean of Faculty Affairs",
        lab: "Digital Youth Lab · Co-Director, UW Center for Digital Youth",
        researchAreas: ["AI & Education", "Teachers & Generative AI", "Teens' Interactions with AI Chatbots", "Learning Sciences"],
        url: "https://ischool.uw.edu/people/faculty/profile/kdavis78",
        labUrl: "http://www.katiedavisresearch.com/",
        recruiting: "yes",
        recruitingNote: "Recruiting PhD students in youth, well-being, HCI and the learning sciences for the 2027 cycle.",
        contactPolicy: "Email OK (kdavis78@uw.edu). The iSchool FAQ says cold emails are welcomed. Keep it short and specific to her teacher/GenAI project.",
        howClarkCanHelp: "She is studying how teachers negotiate generative AI in their practice. Clark has been on the educator side of that question twice. He designed a RAG course for CityU's doctoral program (he did not teach it there), taught RAG to a faculty research group and in a workshop, and students went on to use RAG in capstones and papers. He also taught a vibe-coding workshop for high school and undergraduate students from Korea. He now assists in building CityU's BSAI program, courses and AI initiatives, where decisions about generative AI in the curriculum are part of the job. He can also build and deploy study tools. Supporting material: AI-Unplugged (K–12 AI-literacy activities, not yet tested with learners). Do NOT link the Alpha School 'classroom is broken' essay.",
        alignment: "Rank #1. Closest topical match to Clark's 2024 XAI-in-education proposal (instructor agency over AI recommendations)."
      },
      {
        name: "Prof. Amy J. Ko",
        title: "Professor, Associate Dean for Academics",
        lab: "Code & Cognition Lab",
        researchAreas: ["Critical & Liberatory CS/AI Education", "Programmable Media for Learners (Wordplay)", "Culturally Responsive CS Teaching"],
        url: "https://ischool.uw.edu/people/faculty/profile/ajko",
        labUrl: "https://faculty.washington.edu/ajko/lab",
        recruiting: "yes",
        recruitingNote: "Recruiting one iSchool or CSE PhD student for Autumn 2027: accessible, multilingual programmable media (Wordplay) and culturally responsive computing teaching.",
        contactPolicy: "DO NOT email a CV or research proposal, and do not ask for a meeting — she says to just apply and she will read it. Only write with a specific question about her recent research.",
        howClarkCanHelp: "Wordplay is an open-source, multilingual, accessible programming language. Clark's full-stack skills plus Tagalog and Mandarin fluency make a useful open-source contribution possible (e.g., localization or accessibility fixes). Cite that work in the SoP instead of emailing her.",
        alignment: "Rank #2. Clark's CONISAR paper on lowering barriers to full-stack development, and his teaching of non-traditional learners, match her CS-education equity agenda."
      },
      {
        name: "Prof. Jason C. Yip",
        title: "Associate Professor, MCHI+D Director",
        lab: "KidsTeam UW",
        researchAreas: ["Co-Design with Children", "Generative AI & Children's Creativity", "AI Literacy", "Family Technologies"],
        url: "https://ischool.uw.edu/people/faculty/profile/jcyip",
        labUrl: "https://kidsteam.ischool.uw.edu/",
        recruiting: "yes",
        recruitingNote: "Listed on the iSchool's 'currently seeking Ph.D. students (2027-28)' list.",
        contactPolicy: "Email OK (jcyip@uw.edu). No stated restriction; the iSchool encourages outreach.",
        howClarkCanHelp: "Clark has CodeDay mentoring experience (ages 12–26) for co-design facilitation, and can build the working GenAI and AI-literacy prototypes that KidsTeam sessions need.",
        alignment: "Rank #3. Good fit if Clark frames his work around learners (AI literacy, novice programmers) rather than instructors."
      },
      {
        name: "Prof. Ben Lee",
        title: "Assistant Professor",
        lab: "Lab for Computing Cultural Heritage",
        researchAreas: ["Machine Learning for Search", "Digital Libraries & Archives", "Digital Humanities", "Ethics of ML"],
        url: "https://ischool.uw.edu/people/faculty/profile/bcgl",
        labUrl: "https://l4cch.github.io/lab-website/",
        recruiting: "yes",
        recruitingNote: "Profile says he is recruiting Ph.D. students for Autumn 2027.",
        contactPolicy: "Email OK (bcgl@uw.edu). His lab site asks for your research interests and why you want the iSchool and his lab specifically.",
        howClarkCanHelp: "His projects are large-scale ML search systems (GovScape: multimodal search over 70M government PDFs; Newspaper Navigator). Clark's cloud, serverless and RAG engineering fits building and scaling these systems. The topic is cultural heritage, not education.",
        alignment: "Rank #4 (skills match). This is a strong engineering fit but a weak topical fit. Only pitch him if Clark is open to research on search and ML over archives."
      },
      {
        name: "Prof. Alexis Hiniker",
        title: "Associate Professor, Ph.D. Program Chair",
        lab: "User Empowerment Lab",
        researchAreas: ["Human-AI Interaction", "Child & Teen Wellbeing", "Dark Patterns", "Conversational AI Privacy"],
        url: "https://ischool.uw.edu/people/faculty/profile/alexisr",
        labUrl: "",
        recruiting: "yes",
        recruitingNote: "Listed on the iSchool's 'currently seeking Ph.D. students (2027-28)' list.",
        contactPolicy: "No stated policy found. Email (alexisr@uw.edu) is acceptable under iSchool guidance.",
        howClarkCanHelp: "Clark could help build and deploy the human-AI interaction study apps her lab uses (e.g., conversational AI prototypes with logging).",
        alignment: "Alternate. Her human-AI interaction focus overlaps with Clark's, but her lab centers wellbeing, not education."
      },
      {
        name: "Prof. Lucy Lu Wang",
        title: "Assistant Professor",
        lab: "NLP · AI Reliability · Agentic AI",
        researchAreas: ["Natural Language Processing", "AI Reliability & Evaluation", "Agentic AI", "Accessible Scholarly Documents"],
        url: "https://ischool.uw.edu/people/faculty/profile/lucylw",
        labUrl: "https://llwang.net/",
        recruiting: "yes",
        recruitingNote: "Recruiting for 2027-28 in NLP, AI reliability, AI for clinical applications, and AI evaluation.",
        contactPolicy: "DO NOT email — she is not replying to individual applicant emails. Tag her in your application instead.",
        howClarkCanHelp: "Clark's RAG and agentic-workflow engineering fits her AI reliability and evaluation work. Evaluating AI tutors could bridge that work to his education interest.",
        alignment: "Alternate (skills match). Consider only if Clark pivots toward AI evaluation."
      },
      {
        name: "Prof. Mike Teodorescu",
        title: "Assistant Professor",
        lab: "Entrepreneurship, Technology Management & IP",
        researchAreas: ["Entrepreneurship", "Technology Management", "Intellectual Property", "ML Fairness"],
        url: "https://ischool.uw.edu/people/faculty/profile/miketeod",
        labUrl: "",
        recruiting: "no",
        recruitingNote: "Not on the iSchool's 'currently seeking Ph.D. students (2027-28)' list (checked 2026-09-26).",
        contactPolicy: "Do not make him a primary pick. At most, send a brief question about his plans.",
        howClarkCanHelp: "Clark's MBA and finance background fits his technology-management research.",
        alignment: "Removed from top 3 because he is not listed as recruiting."
      }
    ],

    requirementsList: [
      { id: "advisor_match_pitch", label: "🎯 Sept–Oct: Email a short, project-specific note to Katie Davis, Jason Yip and Ben Lee (all welcome contact)", completed: false },
      { id: "wordplay_contribution", label: "🛠 Do NOT email Amy Ko or Lucy Lu Wang. Instead, make a concrete Wordplay open-source contribution and cite it in the SoP", completed: false },
      { id: "sop", label: "Statement of Purpose (Refine 2024 XAI in Education proposal toward teachers + GenAI; name 3–4 recruiting faculty)", completed: false },
      { id: "personal", label: "Personal Statement (350 words: Journey from finance to software engineering & teaching)", completed: false },
      { id: "diversity", label: "Diversity Statement (Filipino-Chinese identity, AWS veteran cohorts, CodeDay mentoring)", completed: false },
      { id: "cv", label: "Academic CV (Include 3 papers: CONISAR, CISSE, UKC 2024, plus CityU/eBay experience)", completed: false },
      { id: "transcripts", label: "Transcripts (CityU MSCS, CityU MBA, and DLSU BS)", completed: false },
      { id: "lor_chung", label: "LOR #1: Dr. Sam Chung (Dean & Prof, former 14-yr UW tenured faculty)", completed: false },
      { id: "lor_zantua", label: "LOR #2: Dr. Morgan Zantua (Assoc Prof & Center Director)", completed: false },
      { id: "lor_third", label: "LOR #3: Industry/Academic Recommender (eBay Director or CityU Colleague)", completed: false },
      { id: "early_submission", label: "⚡ Submit by ~Nov 15, 2026 (buffer for letters/transcripts; the official deadline is Dec 2)", completed: false }
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
    officialLinks: [
      { label: "Program home", url: "https://www.hcde.washington.edu/phd" },
      { label: "Admissions", url: "https://www.hcde.washington.edu/phd/admissions" },
      { label: "Application requirements", url: "https://www.hcde.washington.edu/phd/application" },
      { label: "Faculty PhD recruitment (2027)", url: "https://www.hcde.washington.edu/phd/application/faculty-recruitment" },
      { label: "UW Grad School application portal", url: "https://grad.uw.edu/admissions/apply-now/" }
    ],
    tagline: "Engineering human-centered technologies, user experience research, and collaborative systems.",
    competitiveness: "Very High (< 10% acceptance rate)",
    fundingModel: "Funded via RA/TA appointments (tuition waiver + stipend + health insurance). Confirm current terms on HCDE's 'Costs & financing' page.",
    greRequired: false,
    greNote: "GRE scores are not required (still accepted if submitted).",

    viabilityScore: 86,
    viabilityCategory: "Strong Fit (Engineering & Design Hybrid)",
    viabilitySummary: "HCDE is in the College of Engineering. Clark's software engineering background and his 2024 proposal for collaborative instructor dashboards fit HCDE if reframed through user-centered methods (contextual inquiry, participatory design with teachers, interaction design for XAI). HCDE publishes exactly which faculty are recruiting, and naming none of them results in denial.",

    strengthsMatch: [
      "Clark's proposed 'Hybrid Platform for Human Educators & AI Collaboration' from his 2024 SoP is inherently an HCDE topic (human-in-the-loop interaction design).",
      "Strong engineering chops (MSCS, AWS, serverless paper) give him the technical capability to build working interactive prototypes.",
      "Sayamindu Dasgupta (recruiting 1–2, open to meetings) studies how young people learn with and about data — a direct fit for Clark's education + tools focus and his multilingual background."
    ],
    challengesToAddress: [
      "HARD RULE (HCDE application page): applicants who don't name at least one RECRUITING faculty member are DENIED.",
      "Correction from earlier notes: Jennifer Turns is NOT recruiting for 2027. Sean Munson is recruiting, but for digital mental health and personal health informatics, which is a weak fit.",
      "Julie Kientz is recruiting one student (children and families) but is NOT available for meetings. Name her in the rankings rather than asking for a call.",
      "Must re-orient the SoP from purely algorithmic XAI to interaction design, teacher user studies, cognitive load, and human-AI collaborative workflows."
    ],
    recommendedPositioning: "Position as a Human-AI Interaction & Educational Technology Engineer: design and evaluate tools that let learners and educators question, steer and audit AI and data systems. Rank Dasgupta, Kientz and McDonald (all recruiting); HCDE asks for 2–4 ranked faculty.",

    facultyMatches: [
      {
        name: "Prof. Sayamindu Dasgupta",
        title: "HCDE Faculty (joined 2022; PhD, MIT Lifelong Kindergarten)",
        lab: "Research group site: unmad.in",
        researchAreas: ["Data Literacy", "Constructionism", "Digital Media & Learning", "Multilingual Learner Tools"],
        url: "https://www.hcde.washington.edu/dasgupta",
        labUrl: "https://unmad.in/",
        recruiting: "yes",
        recruitingNote: "HCDE recruitment page: recruiting 1–2 students (how young people learn with digital technologies). Open to meetings.",
        contactPolicy: "Meetings OK per HCDE's recruitment page. Email sdg1@uw.edu with a short, specific note.",
        howClarkCanHelp: "He builds systems that let kids create their own data-analysis tools and question data-driven systems, and has studied learners using tools in their home languages. Clark can build those tools full-stack and bring Tagalog and Mandarin localization experience.",
        alignment: "HCDE Rank #1. Best overlap of topic (learning with and about data and AI), skills, and availability."
      },
      {
        name: "Prof. Julie Kientz",
        title: "Professor",
        lab: "Computing for Healthy Living & Learning",
        researchAreas: ["HCI", "Technologies for Children & Families", "Educational & Health Tech", "User-Centered Design"],
        url: "https://www.hcde.washington.edu/kientz",
        labUrl: "",
        recruiting: "yes",
        recruitingNote: "HCDE recruitment page: recruiting 1 student (computing technologies with children and families).",
        contactPolicy: "NOT available for meetings. Don't ask for a call. Name her in the application's faculty rankings.",
        howClarkCanHelp: "Clark can rapidly build high-fidelity prototypes for her field deployments with families and learners.",
        alignment: "HCDE Rank #2. Recruiting and topically relevant (learning technologies), though family-focused."
      },
      {
        name: "Prof. David W. McDonald",
        title: "Professor",
        lab: "Directed Research Groups (CSCW / Social Computing)",
        researchAreas: ["Social Computing", "Human-Centered AI", "CSCW", "Recommender & Matching Systems"],
        url: "https://www.hcde.washington.edu/mcdonald",
        labUrl: "https://www.hcde.washington.edu/research/mcdonald",
        recruiting: "yes",
        recruitingNote: "HCDE recruitment page: recruiting (open) in social computing and human-centered AI. Open to meetings.",
        contactPolicy: "Meetings OK. Email dwmc@uw.edu.",
        howClarkCanHelp: "His interest is systems that interleave computation with human activity. Clark's human-in-the-loop educator/AI dashboard idea and his full-stack skills fit here.",
        alignment: "HCDE Rank #3. A safe recruiting pick on the human-centered AI side."
      },
      {
        name: "Prof. Gary Hsieh",
        title: "Professor",
        lab: "HCDE",
        researchAreas: ["Generative AI", "Conversational Agents", "Health"],
        url: "https://www.hcde.washington.edu/hsieh",
        labUrl: "",
        recruiting: "yes",
        recruitingNote: "HCDE recruitment page: recruiting 1 student (GenAI or conversational agents for health). Open to meetings.",
        contactPolicy: "Meetings OK.",
        howClarkCanHelp: "Clark has hands-on experience building RAG and LLM applications, which fits the conversational-agent work. The application area is health, not education.",
        alignment: "Alternate (skills match, domain mismatch)."
      }
    ],

    requirementsList: [
      { id: "recruitment_check", label: "✅ Verified 2026-09-26: Dasgupta, Kientz, McDonald are recruiting; Turns is NOT. Re-check the recruitment page before submitting", completed: false },
      { id: "faculty_meetings", label: "🎯 Sept–Oct: Request short meetings with Dasgupta and McDonald (both open to meetings). Do not ask Kientz for a meeting", completed: false },
      { id: "sop", label: "Statement of Purpose (Reframe 2024 XAI proposal toward Human-Centered Interaction Design & advisor synergy)", completed: false },
      { id: "edi", label: "Equity, Diversity & Inclusion Statement (Leverage 2024 diversity narrative: AWS veterans & CodeDay)", completed: false },
      { id: "cv", label: "Curriculum Vitae (Highlight software architecture and research publications)", completed: false },
      { id: "transcripts", label: "Unofficial transcripts (CityU MSCS, MBA, DLSU BS)", completed: false },
      { id: "letters", label: "3 Letters of Recommendation (Dr. Sam Chung, Dr. Morgan Zantua, Industry Lead)", completed: false },
      { id: "faculty_selection", label: "Rank 2–4 faculty in the portal. At least one MUST be recruiting, or the application is denied", completed: false },
      { id: "portfolio_link", label: "Include links to clarkngo.github.io learning platforms and capstone", completed: false },
      { id: "early_submission", label: "⚡ Submit by ~Nov 15, 2026 (buffer for letters; the official deadline is Dec 2)", completed: false }
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
    portalUrl: "https://www.seattleu.edu/admissions-aid/executive-professional-admissions/",
    websiteUrl: "https://www.seattleu.edu/academics/all-programs/educational-organizational-learning-leadership/",
    officialLinks: [
      { label: "EOLL Ed.D. program page", url: "https://www.seattleu.edu/academics/all-programs/educational-organizational-learning-leadership/" },
      { label: "Executive & Professional Admissions", url: "https://www.seattleu.edu/admissions-aid/executive-professional-admissions/" }
    ],
    tagline: "Practitioner-scholar leadership model for transformative educational change and organizational equity.",
    competitiveness: "Moderate / Selective (Cohort-based)",
    fundingModel: "Tuition-Paying / Self-Funded (Tuition scholarships, employer assistance, or loans; typically no full PhD research stipend)",
    greRequired: false,
    greNote: "GRE is not required.",

    viabilityScore: 60,
    viabilityCategory: "Moderate Fit (Important Strategic Considerations)",
    viabilitySummary: "Seattle U offers an Ed.D. (Doctor of Education) rather than a Ph.D. in Computer Science or Information Science. While Clark's leadership managing 87 veterans in the AWS program and teaching at CityU connects to educational leadership, an Ed.D. does not lead to research scientist roles or tenure-track CS/IS faculty positions.",

    strengthsMatch: [
      "Values experienced program managers and former higher education instructors.",
      "Mission of social justice aligns with Clark's military spouse/veteran support and underrepresented student mentorship."
    ],
    challengesToAddress: [
      "Degree Distinction: Awards an Ed.D., not a Ph.D. Clark specifically stated needing a PhD.",
      "Funding: Ed.D. programs are usually tuition-paying without the guaranteed 4-5 year living stipends of UW Ph.D. programs.",
      "Admissions Status (verified 2026-09-26): the program page says Seattle U is \"revising and reimagining\" EOLL and asks prospective students to check back. No 2027 cohort deadline is published.",
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
    deadline: "2026-12-04T23:59:59-08:00",
    deadlineFormatted: "December 4, 2026 (Ph.D. — decisions by Feb 12, 2027)",
    badgeColor: "uw-purple-light",
    portalUrl: "https://grad.uw.edu/admissions/apply-now/",
    websiteUrl: "https://education.uw.edu/programs/graduate/educational-psychology/learning-sciences-human-development",
    officialLinks: [
      { label: "LSHD program page", url: "https://education.uw.edu/programs/graduate/educational-psychology/learning-sciences-human-development" },
      { label: "Application deadlines", url: "https://education.uw.edu/admissions/deadlines" },
      { label: "Graduate admission requirements", url: "https://education.uw.edu/admissions/graduate/requirements" },
      { label: "UW Grad School application portal", url: "https://grad.uw.edu/admissions/apply-now/" }
    ],
    tagline: "Theory, research, and design of learning environments, cognitive tools, and socio-cultural development.",
    competitiveness: "High",
    fundingModel: "Not guaranteed on the program page. Ask edinfo@uw.edu about RA/TA packages before applying",
    greRequired: false,
    greNote: "GRE scores not required.",

    viabilityScore: 80,
    viabilityCategory: "Promising Interdisciplinary Option",
    viabilitySummary: "If Clark wants a research Ph.D. in education (rather than an Ed.D.), the UW College of Education's Learning Sciences & Human Development (LSHD) area is a compelling alternative. It investigates how people learn with cognitive tools, AI, and digital environments. Funding is not guaranteed on the program page, so confirm it before investing effort.",

    strengthsMatch: [
      "Awards an authentic research Ph.D.; its 'Learning, Technologies, Creativity, and Design' strand fits Clark's tools-for-learning interest.",
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
        alignment: "Strong match for investigating how computing and science tools foster learning.",
        recruiting: "unknown",
        recruitingNote: "The College of Education does not publish a recruiting list. Ask directly.",
        contactPolicy: "No stated policy. Ask directly whether he is taking students for Autumn 2027.",
        howClarkCanHelp: "Clark can build the learning technologies used in design-based STEM research."
      },
      {
        name: "Prof. Katie Headrick Taylor",
        title: "Associate Professor",
        lab: "Mobile City Science · Unite:Ed",
        researchAreas: ["Digital Literacies", "Equity in Learning", "Mobile & Geospatial STEM Learning", "Design-Based Research"],
        url: "https://education.uw.edu/about/directory/katie-headrick-taylor",
        alignment: "Studies digitally mediated learning with a strong equity lens, which connects to Clark's mentoring of non-traditional learners.",
        recruiting: "unknown",
        recruitingNote: "Recruiting status not published.",
        contactPolicy: "No stated policy. Ask directly (kht126@uw.edu).",
        howClarkCanHelp: "Clark can build the mobile and web apps for community-based learning studies."
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

// Strategic Admissions Verification & Guidance
// Every claim below was checked against official UW / Seattle U pages on 2026-09-26.
const ADMISSIONS_STRATEGY_VERIFICATION = {
  verifiedOn: "2026-09-26",
  deadlineTruth: {
    title: "Is the deadline really \"first come, first served\"?",
    verdict: "Partly true",
    officialPolicy: "No. UW iSchool (Dec 2), HCDE (Dec 2) and UW Education LSHD (Dec 4) each have a single deadline and review applications afterward. The iSchool runs interviews in January and sends decisions in early February. Applications are not reviewed or admitted on a rolling, first-come basis.",
    functionalReality: "In practice, the scarce resource is advisor slots, and those do go early. HCDE publishes slot counts per professor (e.g., \"1\" or \"1–2\" students), and the iSchool FAQ says many successful applicants were admitted after talking directly with faculty. A professor with one slot who has already had good conversations with a candidate in October is effectively taken. Early contact matters far more than an early submit button.",
    keyRisksOfWaiting: [
      "Advisor slots are small and published: Kientz (1), Dasgupta (1–2), Hsieh (1). Once a professor has a candidate in mind, the slot is effectively gone.",
      "Letters and transcripts need buffer time. Submitting around Nov 15 leaves time to chase late recommenders (this is our advice, not official policy).",
      "Not every professor wants early contact. Amy Ko and Lucy Lu Wang explicitly ask applicants NOT to email, and Kientz is not taking meetings. Emailing them does not help and can hurt."
    ],
    recommendedTimeline: {
      earlyOutreach: "Now – Oct 31: Contact only the faculty who welcome it (Davis, Yip, B. Lee, Dasgupta, McDonald). For those who don't, make a visible contribution instead (e.g., to Wordplay for Ko).",
      earlySubmissionTarget: "By ~Nov 15: Submit with buffer for letters and transcripts.",
      hardDeadline: "Dec 2, 2026 (iSchool & HCDE) · Dec 4, 2026 (UW Education LSHD Ph.D.)"
    },
    sources: [
      { label: "iSchool PhD application process", url: "https://ischool.uw.edu/programs/phd/admissions/application-process" },
      { label: "iSchool PhD FAQ", url: "https://ischool.uw.edu/programs/phd/admissions/faq" },
      { label: "HCDE faculty recruitment", url: "https://www.hcde.washington.edu/phd/application/faculty-recruitment" },
      { label: "UW Education deadlines", url: "https://education.uw.edu/admissions/deadlines" }
    ]
  },
  advisorMatchingTruth: {
    title: "Do you need to match an advisor's research?",
    verdict: "Verified: this is the deciding factor",
    officialRequirement: "The iSchool FAQ calls finding a faculty mentor the main admissions consideration and asks applicants to rank 3–4 faculty. HCDE's application page is stricter: applicants who don't name any recruiting faculty have their application DENIED.",
    whyItMatters: "PhD admission is effectively a match with one funded advisor, not a generic cohort seat. A strong CV aimed at a professor who isn't recruiting, or whose topic doesn't overlap, gets nowhere. The pitch should say which of their current projects you can help with and why your skills make you useful from month one.",
    sources: [
      { label: "iSchool faculty currently seeking PhD students", url: "https://ischool.uw.edu/programs/phd/people/faculty" },
      { label: "HCDE application requirements", url: "https://www.hcde.washington.edu/phd/application" },
      { label: "Amy Ko — lab / prospective students", url: "https://faculty.washington.edu/ajko/lab" }
    ]
  }
};

// Advisor Outreach Tracker
// contactMode drives what "outreach" means for each advisor:
//   "email"      — cold email welcomed
//   "meeting"    — open to meetings (HCDE recruitment page)
//   "apply-only" — faculty asked NOT to be emailed / not taking meetings; name them in the application instead
const OUTREACH_DATA = [
  {
    id: "davis",
    name: "Prof. Katie Davis",
    program: "UW iSchool",
    email: "kdavis78@uw.edu",
    contactMode: "email",
    priority: 1,
    targetDate: "2026-10-06",
    why: "AI & Education; studying how teachers negotiate generative AI in their professional practice.",
    draft: {
      subject: "Prospective PhD applicant (Autumn 2027): generative AI from the educator's side",
      body: `Dear Professor Davis,

I'm applying to the iSchool PhD program for Autumn 2027, and your research on how teachers negotiate generative AI in their professional practice is the question I most want to study.

I've seen that question from several sides. I taught 11 course sections at City University of Seattle between 2020 and 2021, mostly in full-stack web development, Linux and cybersecurity. I later designed a course on retrieval-augmented generation (RAG) for our doctoral program, taught RAG to a faculty research group and in a workshop, and presented the course design with Dr. Sam Chung as a poster at UKC 2024. Students went on to use RAG in their capstone projects and published papers. I also taught a vibe-coding workshop for high school and undergraduate students from Korea. I now work as a student worker in CityU's School of Technology & Computing, assisting in building our new Bachelor of Science in AI program, its courses, and the school's AI initiatives. Across these roles I've made decisions I had no evidence for, such as [ONE CONCRETE DECISION YOU ACTUALLY FACED]. I'd like to learn to study decisions like these rigorously.

I've also built K–12 AI-literacy activities (AI Unplugged) that haven't yet been tested with learners. Learning to evaluate materials like these is part of why your lab appeals to me. My engineering background (full-stack and cloud) means I can build and deploy the tools a study needs.

Are you considering students for Autumn 2027 whose interests center on teachers and generative AI? I've attached my CV and would be glad to talk if that would be useful.

Best regards,
Clark Ngo
clarkngo.github.io`
    },
    prep: [
      { id: "example", label: "Fill in the bracketed decision with one you actually faced (BSAI or vibe-coding workshop is strongest)" },
      { id: "sections", label: "Confirm \"11 course sections, 2020–2021\" is your full teaching record" },
      { id: "cv", label: "Attach the updated CV (new role, UKC poster with Sam Chung)" },
      { id: "read", label: "Skim 1–2 of her recent teacher/GenAI papers so a follow-up call can be specific" },
      { id: "backup", label: "After sending: back up this draft to your MS Word doc, then ask Claude to remove it from this public site" }
    ]
  },
  {
    id: "ko",
    name: "Prof. Amy J. Ko",
    program: "UW iSchool (or CSE)",
    email: "",
    contactMode: "apply-only",
    priority: 2,
    targetDate: "2026-11-15",
    why: "Computing education research (CER): accessible, multilingual programmable media (Wordplay) and culturally responsive computing teaching.",
    rule: "Do NOT email a CV or proposal and do not ask for a meeting. She reads every application that names her. Only write with a specific question about her lab's recent research.",
    draft: {
      subject: "Statement of Purpose paragraph (not an email)",
      body: `I am applying to work with Professor Amy Ko on multilingual programmable media for learners. I grew up Filipino-Chinese in the Philippines, moving between English, Tagalog and Mandarin, and was mocked for my Mandarin before I became fluent enough to lead Mandarin-speaking analyst focus groups for five years. Almost every programming language a learner meets assumes English. I want to understand what changes when it doesn't: [YOUR RESEARCH QUESTION — e.g., how do bilingual novices move between a home-language and an English programming environment, and how does that shape whether they see computing as theirs?].

I have started contributing to that question in practice by reviewing Wordplay's machine-translated Tagalog strings [N STRINGS REVIEWED / PR LINK — only once done]. My CONISAR 2021 paper on lowering the barrier to full-stack web development, and teaching 11 course sections at City University of Seattle, showed me where learners get stuck. But as Professor Ko's CER FAQ puts it, teaching is not research. Her lab is where I would learn to study these barriers through discovery and invention, not only address them in my own classroom.`
    },
    prep: [
      { id: "cerfaq", label: "Read her CER FAQ and at least one foundation text it lists (e.g., How People Learn, Stuck in the Shallow End)" },
      { id: "wordplay", label: "Review Wordplay's Tagalog strings in-app (Settings → ✎ localization mode). 6,783 machine-translated strings await review as of 2026-09-26" },
      { id: "question", label: "Write your own research question for the bracketed sentence (not a tool idea)" },
      { id: "name", label: "Name her in the iSchool faculty ranking (she also accepts CSE applicants)" },
      { id: "backup", label: "Once copied into your SoP: back up this text to your MS Word doc, then ask Claude to remove it from this public site" }
    ]
  },
  {
    id: "yip",
    name: "Prof. Jason C. Yip",
    program: "UW iSchool",
    email: "jcyip@uw.edu",
    contactMode: "email",
    priority: 3,
    targetDate: "2026-10-13",
    why: "KidsTeam UW: co-design with children, generative AI and children's creativity, AI literacy.",
    draft: null,
    prep: [
      { id: "draft", label: "Draft email: lead with the vibe-coding workshop (Korean HS/undergrad students) and CodeDay mentoring" }
    ]
  },
  {
    id: "dasgupta",
    name: "Prof. Sayamindu Dasgupta",
    program: "UW HCDE",
    email: "sdg1@uw.edu",
    contactMode: "meeting",
    priority: 4,
    targetDate: "2026-10-13",
    why: "Young people learning with and about data; multilingual learner tools. Recruiting 1–2, open to meetings.",
    draft: null,
    prep: [
      { id: "draft", label: "Draft a short meeting request tied to his home-language learner tools work" }
    ]
  },
  {
    id: "mcdonald",
    name: "Prof. David W. McDonald",
    program: "UW HCDE",
    email: "dwmc@uw.edu",
    contactMode: "meeting",
    priority: 5,
    targetDate: "2026-10-20",
    why: "Social computing and human-centered AI. Recruiting (open), open to meetings.",
    draft: null,
    prep: [
      { id: "draft", label: "Draft a short meeting request (human-in-the-loop educator/AI tools angle)" }
    ]
  },
  {
    id: "blee",
    name: "Prof. Ben Lee",
    program: "UW iSchool",
    email: "bcgl@uw.edu",
    contactMode: "email",
    priority: 6,
    targetDate: "2026-10-20",
    why: "Lab for Computing Cultural Heritage: ML search over archives (GovScape, Newspaper Navigator). Skills match, weak topic match.",
    draft: null,
    prep: [
      { id: "decide", label: "Decide whether you'd genuinely do archive/search research. If not, skip him" }
    ]
  },
  {
    id: "kientz",
    name: "Prof. Julie Kientz",
    program: "UW HCDE",
    email: "",
    contactMode: "apply-only",
    priority: 7,
    targetDate: "2026-11-15",
    why: "Technologies for children and families. Recruiting 1, not available for meetings.",
    rule: "Not taking meetings. Name her in the HCDE faculty ranking instead.",
    draft: null,
    prep: [
      { id: "name", label: "Rank her in the HCDE application (counts as a recruiting faculty member)" }
    ]
  },
  {
    id: "lucywang",
    name: "Prof. Lucy Lu Wang",
    program: "UW iSchool",
    email: "",
    contactMode: "apply-only",
    priority: 8,
    targetDate: "2026-11-15",
    why: "AI reliability, agentic AI, AI evaluation. Skills match only; optional.",
    rule: "Not replying to applicant emails. Tag her in the application if you include her.",
    draft: null,
    prep: []
  }
];
