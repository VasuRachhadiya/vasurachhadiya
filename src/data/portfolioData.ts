import { Project, SkillCategory, EducationItem, Certification, ContactInfo } from '../types';

export const contactInfo: ContactInfo = {
  name: "Vasu Rachhadiya",
  title: "Software Developer | AI-Assisted Development",
  email: "vasurachhadiya@gmail.com",
  phone: "+91 99983 64533",
  location: "Rajkot, Gujarat, India",
  github: "https://github.com/VasuRachhadiya",
  linkedin: "https://www.linkedin.com/in/vasurachhadiya",
  statusMessage: "Available for Software Engineering Opportunities"
};

export const bioData = {
  headline: "Aspiring Software Developer & MCA Student",
  summary: "I'm an aspiring Software Developer and MCA student passionate about building modern web applications, exploring new technologies, and turning ideas into practical digital experiences.",
  detailedBio: [
    "Currently pursuing my Master of Computer Applications (MCA) at Atmiya University with consistent academic distinction (84.56% Sem 1, 82.33% Sem 2). My core foundation lies in programming logic, clean web development, database modeling, and structured problem-solving.",
    "I actively leverage modern AI-assisted development tools (such as Antigravity and ChatGPT) to accelerate prototyping, comprehend complex codebases rapidly, debug with agility, and make thoughtful iterative enhancements.",
    "I believe in continuous learning, disciplined engineering habits, and delivering well-crafted digital experiences with clean architecture and responsive user interfaces."
  ],
  stats: [
    { label: "MCA Academic Performance", value: "84.5%", highlight: "Atmiya University" },
    { label: "BCA Graduation Score", value: "77.4%", highlight: "Saurashtra University" },
    { label: "Core Foundations", value: "Full-Stack & Mobile", highlight: "Web, Databases, Kotlin" },
    { label: "Approach", value: "AI-Assisted", highlight: "Rapid Prototyping" }
  ]
};

export const projectsData: Project[] = [
  {
    id: "primemart",
    title: "PrimeMart",
    subtitle: "E-Commerce Web Application Concept",
    category: "Full-Stack Web Development",
    description: "An e-commerce project concept focused on intuitive product catalog browsing, seamless shopping workflows, dynamic cart state management, and modern responsive UI design.",
    longDescription: "PrimeMart was engineered as a comprehensive e-commerce user experience prototype. It features modular product showcases, interactive category filters, intuitive cart management, and clean checkout workflow transitions. Built utilizing modern web fundamentals and AI-assisted prototyping for rapid architectural iteration and refined user experience.",
    tags: ["JavaScript", "HTML5", "CSS3", "React", "State Management", "Responsive UI"],
    features: [
      "Dynamic product catalog with category filtering and instant search simulation",
      "Interactive cart state management with real-time total calculations",
      "Streamlined multi-step checkout workflow and order confirmation visualizer",
      "Responsive, mobile-first design system with accessible interactions",
      "Iterative AI-assisted component prototyping and performance tuning"
    ],
    architecture: [
      "Client-side UI built with component-driven modular structure",
      "State persistence for cart items using LocalStorage APIs",
      "Clean separation of data models, UI components, and presentation styles",
      "Optimized DOM rendering and fluid layout constraints"
    ],
    githubUrl: "https://github.com/VasuRachhadiya/PrimeMart",
    featured: true,
    type: "web",
    color: "#38bdf8"
  },
  {
    id: "recipehub",
    title: "RecipeHub",
    subtitle: "Android Recipe Application Concept",
    category: "Mobile Application Development",
    description: "An Android application concept featuring user registration, customized profile management, recipe search, and recipe-listing screens, with a focus on Kotlin-based mobile development.",
    longDescription: "RecipeHub addresses the daily culinary challenge by offering an organized, beautifully structured mobile interface for discovering and saving recipes. The project emphasizes clean Android UI flow, user account onboarding, structured culinary lists, and modular Kotlin-based architecture.",
    tags: ["Kotlin", "Android SDK", "Mobile UI/UX", "User Auth Flow", "Recipe Catalog"],
    features: [
      "User authentication and onboarding flow (Registration & Profile screens)",
      "Categorized culinary catalog with preparation time, difficulty, and ingredient tags",
      "Interactive recipe detail view with step-by-step instructions and nutritional badges",
      "Smooth Android navigation architecture and responsive layout hierarchy",
      "Clean UI component design compliant with modern Material Design principles"
    ],
    architecture: [
      "Kotlin-based Android architecture focusing on modular view layers",
      "Activity and Fragment / Navigation component flow structuring",
      "Model-driven data representation for recipe schemas and user profiles",
      "Extensible structure prepared for REST API backend integration"
    ],
    githubUrl: "https://github.com/VasuRachhadiya/RecipeHub",
    featured: true,
    type: "mobile",
    color: "#818cf8"
  }
];

export const skillsData: SkillCategory[] = [
  {
    id: "languages",
    title: "Programming Languages",
    description: "Core languages used for problem solving, algorithm design, and application logic.",
    skills: [
      { name: "Java", level: "Core Foundations", iconName: "Coffee", description: "OOP concepts, multithreading basics, data structures, and enterprise logic." },
      { name: "Python", level: "Proficient", iconName: "Terminal", description: "Scripting, data handling, automation, and algorithmic problem-solving." },
      { name: "C", level: "Core Foundations", iconName: "Cpu", description: "Memory management fundamentals, pointers, algorithms, and computational logic." }
    ]
  },
  {
    id: "frontend",
    title: "Web & Frontend Development",
    description: "Creating modern, responsive, and visually engaging interfaces.",
    skills: [
      { name: "HTML5", level: "Advanced", iconName: "Code2", description: "Semantic markup, modern web standards, accessibility, and SEO foundations." },
      { name: "CSS3 / Modern CSS", level: "Proficient", iconName: "Palette", description: "Flexbox, Grid, animations, responsive design, and CSS variables." },
      { name: "JavaScript (ES6+)", level: "Proficient", iconName: "Sparkles", description: "Asynchronous programming, DOM manipulation, closures, and modern ES features." },
      { name: "React & TypeScript", level: "Active Learning", iconName: "Layers", description: "Component-based architecture, hooks, typed props, and modern frontend tooling." },
      { name: "Tailwind CSS", level: "Proficient", iconName: "Wind", description: "Utility-first rapid styling, responsive layouts, and design tokens." }
    ]
  },
  {
    id: "databases",
    title: "Databases & Storage",
    description: "Relational and document databases for structured and flexible storage.",
    skills: [
      { name: "MySQL", level: "Proficient", iconName: "Database", description: "Relational schema design, normalization, joins, indexes, and SQL querying." },
      { name: "MongoDB", level: "Familiar", iconName: "Boxes", description: "NoSQL document storage, BSON collections, and aggregation basics." },
      { name: "SQLite", level: "Proficient", iconName: "HardDrive", description: "Lightweight embedded databases, mobile app storage, and local caching." }
    ]
  },
  {
    id: "tools",
    title: "Development Tools & Environment",
    description: "Essential tools used in daily development, collaboration, and version control.",
    skills: [
      { name: "Git", level: "Proficient", iconName: "GitBranch", description: "Version control, branching strategies, commits, rebasing, and merge resolution." },
      { name: "GitHub", level: "Proficient", iconName: "Github", description: "Repository management, code reviews, collaboration, and deployment workflows." },
      { name: "VS Code", level: "Advanced", iconName: "FileCode", description: "Primary IDE, workspace configuration, debugging tools, and extensions." }
    ]
  },
  {
    id: "ai-assisted",
    title: "AI-Assisted Engineering",
    description: "Modern productivity acceleration with state-of-the-art developer tooling.",
    skills: [
      { name: "Antigravity", level: "Specialist", iconName: "Bot", description: "Agentic workflows, workspace automation, rapid code exploration, and execution." },
      { name: "ChatGPT & LLMs", level: "Proficient", iconName: "Zap", description: "Prompt engineering, code refactoring, troubleshooting, and architectural validation." },
      { name: "AI Prototyping", level: "Strengths", iconName: "Rocket", description: "Iterative prototype development, bug triage, and rapid proof-of-concept creation." }
    ]
  },
  {
    id: "strengths",
    title: "Engineering Strengths",
    description: "Mindset and soft skills that drive high-quality technical outcomes.",
    skills: [
      { name: "Problem Solving", level: "Core Strength", iconName: "CheckCircle2", description: "Analytical mindset, breaking complex challenges into manageable components." },
      { name: "Fast Learner", level: "Core Strength", iconName: "TrendingUp", description: "Rapidly adopting new libraries, frameworks, SDKs, and engineering conventions." },
      { name: "Iterative Development", level: "Core Strength", iconName: "Repeat", description: "Continuous refinement, user-centered improvements, and clean code hygiene." }
    ]
  }
];

export const educationData: EducationItem[] = [
  {
    id: "mca",
    degree: "Master of Computer Applications (MCA)",
    institution: "Atmiya University",
    university: "Rajkot, Gujarat",
    location: "Rajkot, Gujarat, India",
    period: "2025 - Present",
    status: "In Progress",
    grade: "Sem 1: 84.56% | Sem 2: 82.33%",
    details: [
      "Secured outstanding academic distinction across both initial semesters (84.56% and 82.33%).",
      "Coursework highlights: Advanced Database Management Systems, Software Engineering Methodologies, Object-Oriented System Architecture, and Enterprise Web Development.",
      "Engaged in hands-on practical laboratories, algorithm design, and applied system design projects."
    ],
    icon: "GraduationCap"
  },
  {
    id: "bca",
    degree: "Bachelor of Computer Applications (BCA)",
    institution: "T. N. Rao College",
    university: "Saurashtra University",
    location: "Rajkot, Gujarat, India",
    period: "2022 - 2025",
    status: "Completed",
    grade: "77.42% (First Class with Distinction)",
    details: [
      "Graduated with 77.42% overall score, establishing a strong foundation in computational principles.",
      "Comprehensive curriculum covering Programming in C, Java, Data Structures, Relational Database Systems (RDBMS), Operating Systems, and Web Foundations.",
      "Developed project prototypes including web applications and relational database integrations."
    ],
    icon: "Award"
  },
  {
    id: "hsc",
    degree: "Higher Secondary Certificate (12th Standard)",
    institution: "Tapovan School",
    location: "Rajkot, Gujarat, India",
    period: "2021 - 2022",
    status: "Completed",
    grade: "82.00% | Percentile: 94.55",
    details: [
      "Achieved a 94.55 percentile rank with an overall aggregate of 82.00%.",
      "Focused on analytical thinking, mathematics, problem-solving, and foundational logic."
    ],
    icon: "BookOpen"
  },
  {
    id: "ssc",
    degree: "Secondary School Certificate (10th Standard)",
    institution: "Tapovan School",
    location: "Rajkot, Gujarat, India",
    period: "2019 - 2020",
    status: "Completed",
    grade: "81.50% | Percentile: 97.36",
    details: [
      "Secured a top 97.36 percentile rank with 81.50% aggregate score.",
      "Recognized for academic consistency, mathematical aptitude, and scientific inquiries."
    ],
    icon: "Compass"
  }
];

export const certificationsData: Certification[] = [
  {
    id: "cisco-python",
    title: "Data Science Essentials with Python",
    issuer: "Cisco Networking Academy",
    issuerLogoText: "CISCO",
    description: "Hands-on foundation in Python programming for data analysis, covering core syntax, data manipulation, standard libraries, and algorithmic processing.",
    skillsLearned: ["Python 3", "Data Structures", "Data Analysis Basics", "Algorithmic Logic"],
    link: "https://drive.google.com/file/d/18vT-QTfmkG92EGjWs8ik4EDN_jNJIf0W/view?usp=drive_link"
  },
  {
    id: "google-ai",
    title: "Bring AI to Work Workshop",
    issuer: "Google Workspace",
    issuerLogoText: "GOOGLE",
    description: "Practical workshop on deploying and integrating AI capabilities to optimize workplace workflows, productivity augmentation, and automated collaboration.",
    skillsLearned: ["Generative AI", "Workspace Productivity", "Prompting Techniques", "Workflow Automation"],
    link: "https://drive.google.com/file/d/1DZ3SMyPKCYlAEDS-FbUNhiw4WPNa4C0K/view?usp=drive_link"
  },
  {
    id: "tcs-mdm",
    title: "Master Data Management for Beginners",
    issuer: "TCS iON",
    issuerLogoText: "TCS iON",
    description: "Enterprise foundation on master data governance, data quality architectures, relational consistency, data lifecycle management, and single-source-of-truth frameworks.",
    skillsLearned: ["Data Governance", "Master Data Architecture", "Data Integrity", "Enterprise Standards"],
    link: "https://drive.google.com/file/d/1vRvZDdMGiOXqn1_GIhxt4Ciljs-YY-hJ/view?usp=drive_link"
  }
];

export const navigationLinks = [
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Education", href: "#education" },
  { name: "Certifications", href: "#certifications" },
  { name: "Contact", href: "#contact" }
];
