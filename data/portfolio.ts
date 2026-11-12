/**
 * MASTER PORTFOLIO DATA FILE (/data/portfolio.ts)
 * 
 * Central typed single-source-of-truth for all portfolio content.
 * Edit text, links, and entries here without modifying component code.
 */

export interface SocialLink {
  name: string;
  url: string;
  username: string;
  platform: "github" | "linkedin" | "codechef" | "codeforces" | "hackerrank" | "leetcode" | "geeksforgeeks";
  isVisible: boolean; // Controls whether this icon is rendered in the UI
  todoNote?: string;
}

export interface StatItem {
  label: string;
  value: string;
  description: string;
}

export interface SkillCategory {
  category: "Languages" | "Web" | "Cloud & Tools";
  skills: {
    name: string;
    icon: string;
  }[];
}

export interface FeaturedProject {
  id: string;
  title: string;
  role: "Team Lead" | "Solo" | "Group";
  category: "Full-Stack" | "AI-ML" | "Cloud-Data";
  outcome: string;
  metricsBadge?: string;
  description: string;
  techStack: string[];
  githubUrl: string;
  liveUrl?: string;
  imagePath: string;
  teamMembers?: string[];
  verifiedArchitecture: {
    database?: string;
    orm?: string;
    realtime?: string;
    auth?: string;
    testing?: string;
    concurrency?: string;
  };
}

export interface MoreProject {
  id: string;
  title: string;
  stack: string;
  description: string;
  githubUrl: string;
  statusBadge?: string; // e.g. "In progress / local"
}

export interface ExperienceItem {
  id: string;
  role: string;
  organization: string;
  period: string;
  location?: string;
  type: "Internship" | "Contract" | "Open Source";
  bullets: string[];
}

export interface CertificationItem {
  id: string;
  name: string;
  issuer: string;
}

export interface AchievementItem {
  id: string;
  title: string; // Exact wording only
}

export interface EducationItem {
  id: string;
  degree: string;
  institution: string;
  location: string;
  period: string;
  scoreLabel: string;
  scoreValue: string;
  coursework?: string[];
}

export interface PortfolioData {
  hero: {
    name: string;
    headline: string;
    valueStatement: string;
    statusBadge: {
      text: string;
      isOpenToWork: boolean;
      targetRoles: string;
    };
    ctas: {
      primary: { text: string; href: string };
      secondary: { text: string; href: string };
      contact: { text: string; href: string };
    };
    resumePdfPath: string;
    socials: SocialLink[];
  };
  about: {
    heading: string;
    lines: string[];
    stats: StatItem[];
  };
  skills: {
    heading: string;
    categories: SkillCategory[];
  };
  featuredProjects: {
    heading: string;
    categories: ("All" | "Full-Stack" | "AI-ML" | "Cloud-Data")[];
    projects: FeaturedProject[];
  };
  moreProjects: {
    heading: string;
    subheading: string;
    projects: MoreProject[];
  };
  experience: {
    heading: string;
    items: ExperienceItem[];
  };
  certifications: {
    heading: string;
    items: CertificationItem[];
  };
  achievements: {
    heading: string;
    items: AchievementItem[];
  };
  education: {
    heading: string;
    items: EducationItem[];
  };
  codingProfiles: {
    heading: string;
    subheading: string;
  };
  contact: {
    heading: string;
    subheading: string;
    email: string;
    phone: string;
    location: string;
    formspreeEndpoint?: string;
  };
  footer: {
    copyrightName: string;
    year: number;
    tagline: string;
  };
}

export const portfolioData: PortfolioData = {
  hero: {
    name: "Hanumanthu Swathi",
    headline: "SDE, FSD and AI Engineer",
    valueStatement:
      "I build full-stack apps, AI-powered tools, and cloud data pipelines. From real-time collaboration to ML systems, I focus on clean code, reliable backends, and shipping things that work.",
    statusBadge: {
      text: "Open to work",
      isOpenToWork: true,
      targetRoles: "SWE Internships & SDE Roles",
    },
    ctas: {
      primary: { text: "View Projects", href: "#projects" },
      secondary: { text: "Download Resume", href: "/resume.pdf" },
      contact: { text: "Contact", href: "#contact" },
    },
    resumePdfPath: "/resume.pdf",
    socials: [
      {
        name: "GitHub",
        url: "https://github.com/2005swathi2000",
        username: "2005swathi2000",
        platform: "github",
        isVisible: true,
      },
      {
        name: "LinkedIn",
        url: "https://linkedin.com/in/swathi-hanumanthu-817265291",
        username: "swathi-hanumanthu-817265291",
        platform: "linkedin",
        isVisible: true,
      },
      {
        name: "LeetCode",
        url: "https://leetcode.com/u/Hanumanthu_Swathi/",
        username: "Hanumanthu_Swathi",
        platform: "leetcode",
        isVisible: true,
      },
      {
        name: "GeeksforGeeks",
        url: "https://www.geeksforgeeks.org/profile/swathihanumanthu21",
        username: "swathihanumanthu21",
        platform: "geeksforgeeks",
        isVisible: true,
      },
      {
        name: "CodeChef",
        url: "https://www.codechef.com/users/swathi_hanu_82",
        username: "swathi_hanu_82",
        platform: "codechef",
        isVisible: true,
      },
      {
        name: "Codeforces",
        url: "https://codeforces.com/profile/Swathi_Hanumanthu",
        username: "Swathi_Hanumanthu",
        platform: "codeforces",
        isVisible: true,
      },
      {
        name: "HackerRank",
        url: "https://hackerrank.com/profile/hanumanthuswath1",
        username: "hanumanthuswath1",
        platform: "hackerrank",
        isVisible: true,
      },
    ],
  },

  about: {
    heading: "About Me",
    lines: [
      "Third-year B.Tech Information Technology student at Aditya College of Engineering & Technology (ACET), Surampalem with a CGPA of 8.30/10 (graduating May 2027).",
      "Based in Rajahmundry, Andhra Pradesh, actively targeting SWE internships, apprenticeships, and entry-level Software Development Engineer positions.",
      "Core engineering focus centered on real-time systems, AI-powered applications, and AWS serverless cloud infrastructure.",
      "Committed to clean architecture, concurrency safety, rigorous automated unit testing, and production reproducibility without template shortcuts.",
    ],
    stats: [
      {
        label: "8.30",
        value: "CGPA",
        description: "B.Tech IT at ACET Surampalem (Class of 2027)",
      },
      {
        label: "7",
        value: "Featured Projects",
        description: "Full-Stack, Real-Time Web, Cloud Pipelines & ML",
      },
      {
        label: "3",
        value: "Internships / Exp.",
        description: "APSSDC (AWS Cloud), Infosys Springboard & SolveMPire",
      },
      {
        label: "5",
        value: "Certifications",
        description: "NPTEL IIT Kharagpur, AWS/APSSDC, Infosys & Google Cloud",
      },
    ],
  },

  skills: {
    heading: "Technical Skills",
    categories: [
      {
        category: "Languages",
        skills: [
          { name: "Python", icon: "python" },
          { name: "Java", icon: "java" },
          { name: "JavaScript", icon: "javascript" },
          { name: "TypeScript", icon: "typescript" },
          { name: "SQL", icon: "database" },
        ],
      },
      {
        category: "Web",
        skills: [
          { name: "React.js", icon: "react" },
          { name: "Next.js", icon: "nextjs" },
          { name: "Node.js", icon: "nodejs" },
          { name: "Express.js", icon: "express" },
        ],
      },
      {
        category: "Cloud & Tools",
        skills: [
          { name: "AWS", icon: "aws" },
          { name: "Google Cloud", icon: "gcp" },
          { name: "Git & GitHub", icon: "git" },
        ],
      },
    ],
  },

  featuredProjects: {
    heading: "Featured Engineering Projects",
    categories: ["All", "Full-Stack", "AI-ML", "Cloud-Data"],
    projects: [
      {
        id: "studycircle-v2",
        title: "StudyCircle v2",
        role: "Team Lead",
        category: "Full-Stack",
        outcome:
          "Architected real-time room presence and note sync with Socket.io; eliminated auth latency with Bloom filter pre-checks.",
        techStack: [
          "Next.js",
          "Express.js",
          "PostgreSQL",
          "Sequelize",
          "Socket.io",
          "OTP",
          "Google OAuth",
        ],
        githubUrl: "https://github.com/2005swathi2000/studycircle-v2",
        liveUrl: "https://studycircle-v2-frontend-standalone.vercel.app/",
        imagePath: "/projects/studycircle-v2.webp",
        teamMembers: ["Swathi (Lead)", "Bhagya Lakshmi", "RathnaRekha"],
        description:
          "Real-time collaborative learning platform built by a 3-member team. Features dedicated workspaces, shared and personal note management, Pomodoro focus timers, live desk occupancy, typing indicators, and cursor coordinate broadcasting.",
        verifiedArchitecture: {
          database: "PostgreSQL (Production) / SQLite (Development)",
          orm: "Sequelize v6.37",
          realtime: "Socket.io v4.7 (room presence, live cursor sync, desk seating)",
          auth: "OTP via Nodemailer + Google OAuth (OAuth2Client) + JWT",
        },
      },
      {
        id: "devmind-ai",
        title: "DevMind AI",
        role: "Solo",
        category: "Full-Stack",
        outcome:
          "Solved HTTP gateway timeouts on large diffs using Spring Boot async job queues streamed via Server-Sent Events (SSE).",
        techStack: [
          "Spring Boot 3",
          "Angular 19",
          "Google Gemini API",
          "SSE",
          "Spring Security",
          "Monaco Editor",
        ],
        githubUrl: "https://github.com/2005swathi2000/DevMind-AI",
        liveUrl: "https://dev-mind-ai-tau.vercel.app/",
        imagePath: "/projects/devmind-ai.webp",
        description:
          "Enterprise AI workspace providing automated code review, vulnerability detection, documentation drafting, and test-case generation with real-time SSE stream ingestion and in-browser Monaco editing.",
        verifiedArchitecture: {
          database: "PostgreSQL / H2 schema with Jakarta Persistence",
          realtime: "Server-Sent Events (SseEmitter) streaming",
          auth: "Spring Security 6 with JWT token protection",
        },
      },
      {
        id: "ai-resume-analyzer",
        title: "AI Resume Analyzer",
        role: "Solo",
        category: "AI-ML",
        outcome:
          "Deterministic ATS scoring with mathematical weighting and keyword-gap engine; 19/19 Vitest tests passing.",
        metricsBadge: "19/19 Vitest tests passing",
        techStack: [
          "Next.js 15",
          "TypeScript",
          "Gemini API",
          "Mammoth",
          "pdf-parse",
          "Vitest",
        ],
        githubUrl: "https://github.com/2005swathi2000/AI-Resume-Analyzer",
        liveUrl: "https://ai-resume-analyzer-sand-beta.vercel.app/",
        imagePath: "/projects/ai-resume-analyzer.webp",
        description:
          "High-throughput ATS scoring and career readiness platform. Features multi-format PDF and DOCX parsing, keyword-gap calculation, and local algorithmic fallback when API keys are not supplied.",
        verifiedArchitecture: {
          testing: "19/19 Vitest unit tests verifying ATS scorer & interview generator",
          auth: "Stateless / session-based validation",
        },
      },
      {
        id: "cloud-data-pipeline",
        title: "Cloud Data Engineering Pipeline",
        role: "Solo",
        category: "Cloud-Data",
        outcome:
          "Idempotent ELT pipeline with automated quarantine routing for corrupted records and SHA-256 PII pseudonymization; 20/20 tests passing.",
        metricsBadge: "20/20 tests passing",
        techStack: [
          "Python",
          "Apache Beam",
          "DuckDB",
          "Google Cloud BigQuery",
          "Streamlit",
          "Pytest",
        ],
        githubUrl: "https://github.com/2005swathi2000/Cloud-Data-Engineering-Pipeline",
        liveUrl: "https://cloud-data-engineering-pipeline-ccwowzxswdnaq6cbcdyxo5.streamlit.app/",
        imagePath: "/projects/cloud-pipeline.webp",
        description:
          "Production-style retail analytics pipeline with data governance. Segregates clean transactions from corrupted rows into quarantine tables with error reason classification, executes in DuckDB, and exposes analytics in BigQuery and Streamlit.",
        verifiedArchitecture: {
          database: "DuckDB embedded analytical warehouse + Google Cloud BigQuery",
          testing: "20/20 Pytest suite (pipeline, transformation, SQL queries, validation)",
        },
      },
      {
        id: "customer-churn-ml",
        title: "Customer Churn ML System",
        role: "Solo",
        category: "AI-ML",
        outcome:
          "Cost-sensitive XGBoost in a leakage-free ColumnTransformer pipeline; 1,409-customer test set, recall 78.88% (295/374), ROC-AUC 0.8434.",
        metricsBadge: "Recall 78.88% · ROC-AUC 0.8434",
        techStack: [
          "Python",
          "Scikit-learn",
          "XGBoost",
          "Pandas",
          "Streamlit",
          "Plotly",
        ],
        githubUrl: "https://github.com/2005swathi2000/Customer_Churn_Analyzer_With_ML",
        liveUrl: "https://2005swathi2000-customer-churn-analyzer-with-ml-app-0eax27.streamlit.app/",
        imagePath: "/projects/customer-churn-ml.webp",
        description:
          "End-to-end customer retention prediction system. Eliminates feature leakage with strict ColumnTransformer preprocessing (median/mode imputers, StandardScaler, OneHotEncoder), tuning probability decision thresholds to maximize churn capture.",
        verifiedArchitecture: {
          testing: "Reproducible train/test holdout validation (1,409 customers)",
        },
      },
      {
        id: "docspot-mern",
        title: "DocSpot",
        role: "Group",
        category: "Full-Stack",
        outcome:
          "Conflict-free timeslots via optimistic concurrency + compound partial unique indexes to prevent doctor double-booking.",
        techStack: [
          "React 18",
          "Redux Toolkit",
          "Node.js",
          "Express.js",
          "MongoDB",
          "Mongoose",
          "Material-UI",
        ],
        githubUrl: "https://github.com/2005swathi2000/DocSpot-MERN",
        imagePath: "/projects/docspot.webp",
        description:
          "Comprehensive clinical appointment system supporting admin, doctor, and patient roles. Utilizes partial unique indexes ({ doctorId, date, time }) on active bookings to eliminate double-booking race conditions while preserving cancelled audit history.",
        verifiedArchitecture: {
          database: "MongoDB via Mongoose",
          concurrency: "Compound partial unique index on { doctorId, date, time }",
          auth: "JWT authentication with bcryptjs and role-based permissions",
        },
      },
      {
        id: "vbcua-voice-analyser",
        title: "VBCUA (Voice-Based Concept Analyser)",
        role: "Solo",
        category: "AI-ML",
        outcome:
          "Acoustic speech diagnostics (pause ratio, RMS energy, loudness) and semantic scoring against reference technical concepts with PDF reports.",
        techStack: [
          "Streamlit",
          "Groq Whisper",
          "OpenAI Fallback",
          "Librosa",
          "ReportLab",
          "Pydub",
        ],
        githubUrl: "https://github.com/2005swathi2000/VBCUA-",
        liveUrl: "https://6r93czc7qqtznsnrythdmn.streamlit.app/",
        imagePath: "/projects/vbcua.webp",
        description:
          "Multimodal speech assessment platform evaluating spoken explanations of technical concepts. Extracts acoustic speech diagnostics via Librosa and computes semantic alignment with automated downloadable PDF performance summaries.",
        verifiedArchitecture: {
          realtime: "Browser microphone capture + audio uploads (WAV, MP3, M4A)",
        },
      },
    ],
  },

  moreProjects: {
    heading: "More Projects",
    subheading: "Additional engineering systems, algorithms, and practical applications.",
    projects: [
      {
        id: "retail-sales-analysis",
        title: "Retail Sales Analysis",
        stack: "Python · Pandas · Matplotlib · Seaborn",
        description:
          "Exploratory data analysis uncovering demographic purchasing patterns, seasonal sales trends, and customer transaction distributions.",
        githubUrl: "https://github.com/2005swathi2000/FUTURE_DS_Task01",
      },
      {
        id: "hotel-management-system",
        title: "Hotel Management System",
        stack: "Java · Swing · MySQL · JDBC",
        description:
          "Desktop application for room reservation, guest checkout billing, and relational room occupancy tracking with JDBC persistence.",
        githubUrl: "https://github.com/2005swathi2000/Hotel_Management_System",
      },
      {
        id: "student-management-system",
        title: "Student Management System",
        stack: "C++ · OOP · File I/O",
        description:
          "Object-oriented CLI system managing student records, grade computations, and persistent file-based academic registries.",
        githubUrl: "https://github.com/2005swathi2000/Student-Management-System",
      },
      {
        id: "to-do-list-python",
        title: "To-Do List",
        stack: "Python · CLI",
        description:
          "Task prioritization and scheduling script with persistent state storage and command-line lifecycle management.",
        githubUrl: "https://github.com/2005swathi2000/To-Do-List-Python",
      },
      {
        id: "gym-website",
        title: "Gym Website",
        stack: "HTML5 · CSS3 · Bootstrap",
        description:
          "Responsive multi-section fitness center landing page featuring membership tiers, schedule tables, and mobile-friendly navigation.",
        githubUrl: "https://github.com/2005swathi2000/Gym-Website",
      },
      {
        id: "documind-ai",
        title: "documind-ai",
        stack: "FastAPI · PyMuPDF · FAISS · Vite",
        description:
          "Document intelligence microservice with PDF chunking, local FAISS vector indexing, and asynchronous semantic retrieval.",
        githubUrl: "https://github.com/2005swathi2000/documind-ai",
        statusBadge: "In progress / local",
      },
      {
        id: "devtwin-ai",
        title: "DevTwin-AI",
        stack: "Next.js 15 · Monaco · React Flow · AST Engine",
        description:
          "Digital twin developer tooling visualizing codebase knowledge graphs and simulating pull request impact risk scores.",
        githubUrl: "https://github.com/2005swathi2000/DevTwin-AI",
        statusBadge: "In progress / local",
      },
    ],
  },

  experience: {
    heading: "Work Experience",
    items: [
      {
        id: "exp-apssdc",
        role: "Cloud Engineering Intern",
        organization: "APSSDC",
        period: "2024",
        type: "Internship",
        bullets: [
          "Deployed and configured AWS cloud infrastructure across 7 key services: AWS Lambda, API Gateway, DynamoDB, EC2, S3, IAM, and CloudWatch.",
          "Constructed serverless event-driven workflows with AWS Lambda and API Gateway for decoupled backend processing without server maintenance.",
          "Enforced least-privilege IAM security policies and monitored service latency and invocation metrics using Amazon CloudWatch.",
        ],
      },
      {
        id: "exp-infosys",
        role: "Python Technology Stack Virtual Intern",
        organization: "Infosys Springboard",
        period: "8 weeks (Completed Sept 2026)",
        type: "Internship",
        bullets: [
          "Completed industry-aligned Batch 1 virtual internship covering core Python engineering, data structure implementations, and application development.",
          "Executed progressive milestone evaluations covering algorithmic efficiency and modular application design practices.",
        ],
      },
      {
        id: "exp-solvempire",
        role: "Full Stack Engineer",
        organization: "SolveMPire",
        period: "4 May 2026 – 29 Jun 2026",
        type: "Contract",
        // Note: Swathi will supply the specific measurable project metric achieved during this tenure.
        // TODO: Add specific measurable project outcome / metric achieved during this tenure.
        bullets: [],
      },
      {
        id: "exp-opensource",
        role: "Open Source Engineering",
        organization: "GitHub (@2005swathi2000)",
        period: "2023 – Present",
        type: "Open Source",
        bullets: [
          "Built and deployed 6 web apps spanning full-stack, AI, and data/ML.",
          "Wrote automated test suites for projects using Vitest and Pytest (19/19 and 20/20 passing).",
        ],
      },
    ],
  },

  certifications: {
    heading: "Certifications",
    items: [
      {
        id: "cert-nptel",
        name: "Cloud Computing",
        issuer: "NPTEL (IIT Kharagpur)",
      },
      {
        id: "cert-apssdc",
        name: "Cloud Engineering Internship",
        issuer: "APSSDC",
      },
      {
        id: "cert-infosys",
        name: "Infosys Springboard Virtual Internship 7.0",
        issuer: "Infosys Springboard",
      },
      {
        id: "cert-solvempire",
        name: "Full Stack Engineer",
        issuer: "SolveMPire",
      },
      {
        id: "cert-google",
        name: "Google Cloud Generative AI",
        issuer: "SmartInternz",
      },
    ],
  },

  achievements: {
    heading: "Key Achievements",
    items: [
      { id: "ach-1", title: "EY Techathon Round 2" },
      { id: "ach-2", title: "CodeClash rank 599" },
      { id: "ach-3", title: "C3 Challenge rank 163" },
      { id: "ach-4", title: "StudyCircle v2 team lead" },
    ],
  },

  education: {
    heading: "Education",
    items: [
      {
        id: "edu-btech",
        degree: "B.Tech in Information Technology",
        institution: "Aditya College of Engineering & Technology (ACET)",
        location: "Surampalem, Andhra Pradesh",
        period: "2023 – Present (Expected May 2027)",
        scoreLabel: "CGPA",
        scoreValue: "8.30 / 10.0",
        coursework: [
          "Data Structures & Algorithms",
          "Object-Oriented Programming",
          "Database Management Systems",
          "Cloud Computing",
          "Operating Systems",
          "Computer Networks",
        ],
      },
      {
        id: "edu-inter",
        degree: "Intermediate (MPC)",
        institution: "Sri Sai Aditya Junior College",
        location: "Danavaipeta, Rajahmundry, Andhra Pradesh",
        period: "2021 – 2023",
        scoreLabel: "Marks",
        scoreValue: "92.70% (927 / 1000)",
      },
      {
        id: "edu-ssc",
        degree: "Secondary School Certificate (SSC)",
        institution: "Surya Deep English Model High School",
        location: "Andhra Pradesh",
        period: "2021",
        scoreLabel: "Marks",
        scoreValue: "91.67% (550 / 600)",
      },
    ],
  },

  codingProfiles: {
    heading: "Coding Profiles",
    subheading: "Competitive programming and algorithmic problem-solving platforms.",
  },

  contact: {
    heading: "Get In Touch",
    subheading:
      "Looking for a Software Development Engineer intern or entry-level engineer? Reach out via email, phone, or the contact form below.",
    email: "hanumanthuswathi24@gmail.com",
    phone: "+91 7382740244",
    location: "Rajahmundry, Andhra Pradesh, India",
    formspreeEndpoint:
      process.env.NEXT_PUBLIC_FORMSPREE_ENDPOINT ||
      (process.env.NEXT_PUBLIC_FORMSPREE_ID ? `https://formspree.io/f/${process.env.NEXT_PUBLIC_FORMSPREE_ID}` : ""),
  },

  footer: {
    copyrightName: "Hanumanthu Swathi",
    year: 2026,
    tagline: "Built with Next.js, TypeScript & Tailwind CSS. Hosted on Vercel.",
  },
};

