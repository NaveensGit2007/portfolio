/**
 * Centralized Portfolio Data for Navya Mittal
 * Easily editable repository for personal info, skills, projects, education, and social links.
 */

export const personalInfo = {
  name: "Navya Mittal",
  title: "B.Tech Computer Science(AI & ML) Student & Aspiring Software/Data Professional",
  shortName: "NAVYA.M",
  role: "B.Tech CSE Student",
  institution: "GLA University, Mathura",
  degree: "B.Tech in Computer Science & Engineering(AI & ML)",
  graduationYear: "2029",
  location: "Mathura, India",
  status: "BUILD MODE: ON",
  currentlyLearningStatus: "ADVANCED DATA ENGINEERING & CLOUD SYSTEMS",
  bio: "I am a B.Tech Computer Science student at GLA University with a passion for software development, data engineering, database architecture, and technology. I build robust data pipelines, design backend logic, and craft digital experiences with code.",
  linkedin: "https://www.linkedin.com/in/naveen-mittal-07b18a383/",
  github: "https://github.com/NaveensGit2007",
  email: "mittalnaveen294@gmail.com",
  quickBioPoints: [
    "B.Tech Computer Science student at GLA University, Mathura",
    "Passionate about software architecture & data engineering",
    "Hands-on experience with Python, SQL, REST APIs & Databases",
    "Continuous learner exploring cloud infrastructure & scalable systems"
  ]
};

export const heroData = {
  headlineMain: "HI, I'M NAVYA.",
  headlineSub: "I BUILD, BREAK & LEARN THINGS WITH CODE.",
  description: "Computer Science student at GLA University specializing in software engineering, data pipelines, database systems, and full-stack solutions. Code → Data → Products.",
  stickers: [
    { text: "⚡ AVAILABLE FOR OPPORTUNITIES", color: "bg-accent-yellow" },
    { text: "💻 CTRL + CREATE", color: "bg-accent-blue" },
    { text: "🚀 BUILD MODE: ON", color: "bg-accent-green" },
    { text: "010101 DATA PIPELINES", color: "bg-accent-red" }
  ],
  quickStats: [
    { label: "DEGREE", value: "B.Tech CSE" },
    { label: "COLLEGE", value: "GLA Univ." },
    { label: "FOCUS", value: "Data & Code" },
    { label: "STATUS", value: "Available" }
  ]
};

export const journeyTimeline = [
  {
    number: "01",
    title: "LEARNING",
    tagline: "Building Core Foundations",
    description: "Learned Object-Oriented Programming in C++/Java, Relational Database principles (SQL), and Python basics at GLA University."
  },
  {
    number: "02",
    title: "BUILDING",
    tagline: "Hands-on Data & Software",
    description: "Constructed automated ETL scripts, MySQL database schemas, REST API integrations, and CSV/JSON data transformation workflows."
  },
  {
    number: "03",
    title: "EXPERIMENTING",
    tagline: "Cloud & Database Exploration",
    description: "Explored NoSQL with MongoDB, cloud fundamentals on Microsoft Azure, and developed full-stack web concepts with modern UI architectures."
  },
  {
    number: "04",
    title: "IMPROVING",
    tagline: "Production-Grade Engineering",
    description: "Optimizing database queries, studying system design concepts, and refining data analytics workflows for real-world reliability."
  }
];

export const skillsCategoryData = [
  {
    category: "PROGRAMMING",
    accent: "yellow",
    skills: [
      { name: "Python", level: "Advanced", desc: "Data processing, ETL automation, pandas, backend scripts" },
      { name: "SQL", level: "Advanced", desc: "Complex queries, joins, aggregations, schema indexing" },
      { name: "Java", level: "Proficient", desc: "Object-oriented programming, standard library, backend logic" },
      { name: "C++", level: "Proficient", desc: "Object-oriented programming, syntax, and logic design" },
      { name: "JavaScript", level: "Proficient", desc: "ES6+, DOM manipulation, web APIs, dynamic interfaces" }
    ]
  },
  {
    category: "DATA & ETL",
    accent: "blue",
    skills: [
      { name: "Data Engineering", level: "Focus Area", desc: "Data extraction, transformation, and pipeline structuring" },
      { name: "ETL Pipelines", level: "Hands-on", desc: "Automated ingestion from REST APIs to structured SQL/CSV" },
      { name: "Data Transformation", level: "Hands-on", desc: "Cleaning, parsing, mapping JSON/CSV into normalized schemas" },
      { name: "REST APIs", level: "Proficient", desc: "API consumption, JSON parsing, endpoint integrations" },
      { name: "Data Analysis", level: "Proficient", desc: "Exploratory data analysis, statistical queries, metrics" }
    ]
  },
  {
    category: "DATABASES",
    accent: "green",
    skills: [
      { name: "MySQL", level: "Advanced", desc: "Relational database design, triggers, stored procedures" },
      { name: "MongoDB", level: "Proficient", desc: "Document store, aggregation pipelines, JSON collections" },
      { name: "NoSQL", level: "Proficient", desc: "Key-value and document data modeling strategies" },
      { name: "Database Architecture", level: "Hands-on", desc: "Normalization, indexing, foreign keys, query optimization" }
    ]
  },
  {
    category: "TOOLS & CLOUD",
    accent: "red",
    skills: [
      { name: "Microsoft Azure", level: "Certified/Learning", desc: "Cloud computing fundamentals, resource deployment" },
      { name: "Git & GitHub", level: "Essential", desc: "Version control, branching, pull requests, repository management" },
      { name: "VS Code", level: "Primary IDE", desc: "Custom environment, debugging, extension ecosystem" },
      { name: "MySQL Workbench", level: "Tooling", desc: "Visual schema design, SQL execution, DB administration" }
    ]
  }
];

export const projectsData = [
  {
    id: "etl-pipeline",
    number: "PROJECT 01",
    title: "Automated API Data Extraction & ETL Pipeline",
    category: "data",
    categoryLabel: "ETL & DATA",
    shortDesc: "Automated Python-driven data pipeline that extracts dynamic API data, cleans JSON payloads, transforms schema formats, and loads structured records into MySQL database tables.",
    fullDetails: {
      problem: "Raw API data feeds are unstructured, rate-limited, and periodically change JSON field formats, leading to data quality issues when loaded directly into analytical reports.",
      approach: "Built a resilient Python ETL workflow using Request modules and Pandas. Implemented schema mapping, data validation hooks, error logging, and batch upserts into a normalized MySQL schema.",
      techStack: ["Python", "REST APIs", "MySQL", "Pandas", "JSON Processing", "SQLAlchemy"],
      result: "Achieved 100% automated daily data ingestion with zero manual intervention and robust fallback error logging.",
      whatILearned: "Deepened knowledge of idempotent database upserts, defensive JSON parsing, and structured logging in Python ETL routines."
    },
    demoUrl: "#",
    githubUrl: "https://github.com/NaveensGit2007",
    accentColor: "border-accent-yellow bg-accent-yellow/10"
  },
  {
    id: "database-analytics",
    number: "PROJECT 02",
    title: "Relational Database & Inventory Analytics System",
    category: "database",
    categoryLabel: "DATABASES",
    shortDesc: "Comprehensive SQL database solution featuring complex join views, stored procedures, indexing for fast analytical queries, and hybrid MongoDB fallback storage.",
    fullDetails: {
      problem: "Legacy inventory tracking relied on unindexed spreadsheets, causing slow reporting queries and concurrency conflicts when tracking stock levels across multiple locations.",
      approach: "Designed a 3rd Normal Form (3NF) relational database schema in MySQL with indexed foreign keys, automated stock alert triggers, and analytical views for daily revenue metrics.",
      techStack: ["SQL", "MySQL Workbench", "MongoDB", "Database Normalization", "Indexing"],
      result: "Reduced analytical query latency by 85% through optimized composite indexes and pre-computed materialized SQL views.",
      whatILearned: "Mastered query execution plan analysis (`EXPLAIN`), index cardinality optimization, and ACID transactional safeguards."
    },
    demoUrl: "#",
    githubUrl: "https://github.com/NaveensGit2007",
    accentColor: "border-accent-blue bg-accent-blue/10"
  },
  {
    id: "data-analysis-tool",
    number: "PROJECT 03",
    title: "Exploratory Data Analysis & Visualization Suite",
    category: "data",
    categoryLabel: "ETL & DATA",
    shortDesc: "Python data processing script suite performing statistical analysis, outlier detection, data cleansing, and structured summary reporting on large CSV datasets.",
    fullDetails: {
      problem: "Multi-gigabyte CSV records often contained duplicate entries, missing values, and corrupted data types that skewed analytical reporting.",
      approach: "Created a modular Python tool using Pandas and NumPy to systematically validate data integrity, impute missing fields, calculate statistical distributions, and output cleaned analytical tables.",
      techStack: ["Python", "Pandas", "NumPy", "Matplotlib", "Data Cleansing", "CSV Processing"],
      result: "Processed over 100,000+ raw records in seconds, highlighting correlation insights and identifying invalid data records automatically.",
      whatILearned: "Gained expertise in vectorized data operations in Pandas, memory efficient chunked processing, and statistical distribution modeling."
    },
    demoUrl: "#",
    githubUrl: "https://github.com/NaveensGit2007",
    accentColor: "border-accent-green bg-accent-green/10"
  },
  {
    id: "neo-brutalist-portfolio",
    number: "PROJECT 04",
    title: "Interactive Neo-Brutalist Developer Portfolio",
    category: "software",
    categoryLabel: "SOFTWARE & WEB",
    shortDesc: "Production-grade, highly interactive personal portfolio built with a tactile Neo-Brutalist design language, interactive CLI terminal, dynamic theme engine, and micro-interactions.",
    fullDetails: {
      problem: "Generic portfolio templates blend together and fail to communicate visual confidence, technical creativity, or tactile web engineering skills.",
      approach: "Engineered a custom Neo-Brutalist UI system featuring high contrast typography, 3D tactile button physics, dynamic theme color swapper, interactive web audio synth, and modular ES6 architecture.",
      techStack: ["JavaScript (ES6)", "HTML5", "CSS3 / Custom Tokens", "Web Audio API", "Tailwind Engine"],
      result: "Created a visually stunning, responsive, fast-loading portfolio with high recruiter impact and interactive playground elements.",
      whatILearned: "Refined modular web architecture, responsive brutalist grid layouts, Web Audio API synthesis, and accessible focus state management."
    },
    demoUrl: "https://www.linkedin.com/in/naveen-mittal-07b18a383/",
    githubUrl: "https://github.com/NaveensGit2007",
    accentColor: "border-accent-red bg-accent-red/10"
  }
];

export const educationData = {
  degree: "B.TECH IN COMPUTER SCIENCE & ENGINEERING(AI & ML)",
  institution: "GLA UNIVERSITY",
    location: "Mathura, Uttar Pradesh, India",
    duration: "2025 - 2029 (Expected)",
  status: "CURRENTLY PURSUING",
  studentCardId: "GLA-CSE-2029-NM",
  highlights: [
    "Core focus on Database Management Systems (DBMS), Operating Systems, Software Engineering, and Object-Oriented Programming.",
    "Hands-on lab work in SQL relational database design, Python programming, and Software Engineering methodologies.",
    "Active participant in technical student communities, coding challenges, and collaborative technology initiatives."
  ],
  coursework: [
    "Database Management Systems (DBMS)",
    "Object Oriented Programming (OOP)",
    "Operating Systems & System Architecture",
    "Computer Networks & Web Engineering",
    "Data Engineering & Cloud Fundamentals",
    "Software Engineering Principles"
  ]
};

export const certificationsData = [
  {
    type: "CERTIFICATION",
    title: "Microsoft Azure Fundamentals / Cloud Technical Learning",
    issuer: "Microsoft Azure",
    status: "VERIFIED / COMPLETED",
    badgeColor: "bg-accent-blue text-white",
    desc: "Understanding core cloud concepts, Azure architectural components, cloud governance, security, and cloud storage management."
  },
  {
    type: "TECHNICAL LEARNING",
    title: "Data Engineering & Pipeline Architecture",
    issuer: "Practical Engineering Milestone",
    status: "HANDS-ON MILESTONE",
    badgeColor: "bg-accent-yellow text-black",
    desc: "Mastery of ETL data pipeline workflows, data transformation in Python, JSON parsing, and relational database schema loading."
  },
  {
    type: "DATABASE MILESTONE",
    title: "Relational Database Management & SQL Mastery",
    issuer: "Academic & Practical Work",
    status: "CONFIRMED SKILL",
    badgeColor: "bg-accent-green text-black",
    desc: "Proficiency in complex SQL queries, multi-table joins, subqueries, database normalization, indexing, and MySQL workbench operations."
  }
];

export const rabbitHoleTopics = [
  {
    id: "python-adv",
    title: "ADVANCED PYTHON INTERNALS",
    tag: "PROGRAMMING",
    desc: "Deep diving into Python memory management, decorators, generators, asyncio, and writing C-extensions for performance optimization.",
    progress: 85,
    accent: "yellow"
  },
  {
    id: "data-eng",
    title: "SCALABLE DATA PIPELINES",
    tag: "DATA ENGINEERING",
    desc: "Exploring distributed data processing concepts, Apache Spark workflows, batch vs streaming architecture, and parquet column storage.",
    progress: 75,
    accent: "blue"
  },
  {
    id: "sql-opt",
    title: "SQL QUERY OPTIMIZATION",
    tag: "DATABASES",
    desc: "Analyzing query execution plans, B-tree indexes, join strategies (Hash Join vs Nested Loops), and lock contention in high throughput DBs.",
    progress: 80,
    accent: "green"
  },
  {
    id: "cloud-arch",
    title: "AZURE & CLOUD ARCHITECTURE",
    tag: "CLOUD",
    desc: "Building serverless event-driven architectures using Azure Functions, Blob Storage triggers, and Managed SQL Databases.",
    progress: 70,
    accent: "red"
  }
];

export const terminalCommands = {
  help: `Available commands:
  - whoami     : Display developer identity & status
  - skills     : List core programming & data skills
  - projects   : View highlighted software & data projects
  - education  : Display GLA University academic details
  - contact    : Get direct contact links & LinkedIn profile
  - theme      : Cycle primary brutalist accent colors
  - clear      : Clear terminal screen output
  - run        : Execute a surprise code compilation test`,
  whoami: `NAME      : Navya Mittal
ROLE      : B.Tech Computer Science Student @ GLA University
LOCATION  : Mathura, India
SPECIALTY : Code → Data → Software Engineering
STATUS    : Open for internship & software/data roles!`,
  skills: `PROGRAMMING : Python, SQL, Java, C++, JavaScript
DATA        : Data Engineering, ETL Pipelines, REST APIs, Analytics
DATABASES   : MySQL, MongoDB, Database Architecture
TOOLS/CLOUD : Microsoft Azure, Git, GitHub, VS Code`,
  projects: `01. Automated API Data Extraction & ETL Pipeline [Python + MySQL]
02. Relational Database & Inventory System [SQL + MongoDB]
03. Exploratory Data Cleansing & Analysis Suite [Python + Pandas]
04. Interactive Neo-Brutalist Developer Portfolio [JS + CSS3]`,
  education: `DEGREE      : B.Tech Computer Science & Engineering(AI & ML)
INSTITUTION : GLA University, Mathura, India
TIMELINE    : 2025 - 2029`,
  contact: `LINKEDIN : https://www.linkedin.com/in/naveen-mittal-07b18a383/
GITHUB   : https://github.com/NaveensGit2007
EMAIL    : mittalnaveen294@gmail.com
LOCATION : Mathura, India`,
  run: `[COMPILING NAVYA.M PORTFOLIO SYSTEM...]
> Loading core modules... [OK]
> Ingesting Python & SQL engines... [OK]
> Verifying Neo-Brutalist hard shadow physics... [6px 6px 0 #000 APPROVED]
> STATUS: 100% OPERATIONAL. Ready to build incredible tech!`
};
