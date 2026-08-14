(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))o(t);new MutationObserver(t=>{for(const d of t)if(d.type==="childList")for(const x of d.addedNodes)x.tagName==="LINK"&&x.rel==="modulepreload"&&o(x)}).observe(document,{childList:!0,subtree:!0});function r(t){const d={};return t.integrity&&(d.integrity=t.integrity),t.referrerPolicy&&(d.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?d.credentials="include":t.crossOrigin==="anonymous"?d.credentials="omit":d.credentials="same-origin",d}function o(t){if(t.ep)return;t.ep=!0;const d=r(t);fetch(t.href,d)}})();const L={email:"mittalnaveen294@gmail.com"},M=[{id:"etl-pipeline",number:"PROJECT 01",title:"Automated API Data Extraction & ETL Pipeline",category:"data",categoryLabel:"ETL & DATA",shortDesc:"Automated Python-driven data pipeline that extracts dynamic API data, cleans JSON payloads, transforms schema formats, and loads structured records into MySQL database tables.",fullDetails:{problem:"Raw API data feeds are unstructured, rate-limited, and periodically change JSON field formats, leading to data quality issues when loaded directly into analytical reports.",approach:"Built a resilient Python ETL workflow using Request modules and Pandas. Implemented schema mapping, data validation hooks, error logging, and batch upserts into a normalized MySQL schema.",techStack:["Python","REST APIs","MySQL","Pandas","JSON Processing","SQLAlchemy"],result:"Achieved 100% automated daily data ingestion with zero manual intervention and robust fallback error logging.",whatILearned:"Deepened knowledge of idempotent database upserts, defensive JSON parsing, and structured logging in Python ETL routines."},demoUrl:"#",githubUrl:"https://github.com/NaveensGit2007",accentColor:"border-accent-yellow bg-accent-yellow/10"},{id:"database-analytics",number:"PROJECT 02",title:"Relational Database & Inventory Analytics System",category:"database",categoryLabel:"DATABASES",shortDesc:"Comprehensive SQL database solution featuring complex join views, stored procedures, indexing for fast analytical queries, and hybrid MongoDB fallback storage.",fullDetails:{problem:"Legacy inventory tracking relied on unindexed spreadsheets, causing slow reporting queries and concurrency conflicts when tracking stock levels across multiple locations.",approach:"Designed a 3rd Normal Form (3NF) relational database schema in MySQL with indexed foreign keys, automated stock alert triggers, and analytical views for daily revenue metrics.",techStack:["SQL","MySQL Workbench","MongoDB","Database Normalization","Indexing"],result:"Reduced analytical query latency by 85% through optimized composite indexes and pre-computed materialized SQL views.",whatILearned:"Mastered query execution plan analysis (`EXPLAIN`), index cardinality optimization, and ACID transactional safeguards."},demoUrl:"#",githubUrl:"https://github.com/NaveensGit2007",accentColor:"border-accent-blue bg-accent-blue/10"},{id:"data-analysis-tool",number:"PROJECT 03",title:"Exploratory Data Analysis & Visualization Suite",category:"data",categoryLabel:"ETL & DATA",shortDesc:"Python data processing script suite performing statistical analysis, outlier detection, data cleansing, and structured summary reporting on large CSV datasets.",fullDetails:{problem:"Multi-gigabyte CSV records often contained duplicate entries, missing values, and corrupted data types that skewed analytical reporting.",approach:"Created a modular Python tool using Pandas and NumPy to systematically validate data integrity, impute missing fields, calculate statistical distributions, and output cleaned analytical tables.",techStack:["Python","Pandas","NumPy","Matplotlib","Data Cleansing","CSV Processing"],result:"Processed over 100,000+ raw records in seconds, highlighting correlation insights and identifying invalid data records automatically.",whatILearned:"Gained expertise in vectorized data operations in Pandas, memory efficient chunked processing, and statistical distribution modeling."},demoUrl:"#",githubUrl:"https://github.com/NaveensGit2007",accentColor:"border-accent-green bg-accent-green/10"},{id:"neo-brutalist-portfolio",number:"PROJECT 04",title:"Interactive Neo-Brutalist Developer Portfolio",category:"software",categoryLabel:"SOFTWARE & WEB",shortDesc:"Production-grade, highly interactive personal portfolio built with a tactile Neo-Brutalist design language, interactive CLI terminal, dynamic theme engine, and micro-interactions.",fullDetails:{problem:"Generic portfolio templates blend together and fail to communicate visual confidence, technical creativity, or tactile web engineering skills.",approach:"Engineered a custom Neo-Brutalist UI system featuring high contrast typography, 3D tactile button physics, dynamic theme color swapper, interactive web audio synth, and modular ES6 architecture.",techStack:["JavaScript (ES6)","HTML5","CSS3 / Custom Tokens","Web Audio API","Tailwind Engine"],result:"Created a visually stunning, responsive, fast-loading portfolio with high recruiter impact and interactive playground elements.",whatILearned:"Refined modular web architecture, responsive brutalist grid layouts, Web Audio API synthesis, and accessible focus state management."},demoUrl:"https://www.linkedin.com/in/naveen-mittal-07b18a383/",githubUrl:"https://github.com/NaveensGit2007",accentColor:"border-accent-red bg-accent-red/10"}],C={help:`Available commands:
  - whoami     : Display developer identity & status
  - skills     : List core programming & data skills
  - projects   : View highlighted software & data projects
  - education  : Display GLA University academic details
  - contact    : Get direct contact links & LinkedIn profile
  - theme      : Cycle primary brutalist accent colors
  - clear      : Clear terminal screen output
  - run        : Execute a surprise code compilation test`,whoami:`NAME      : Navya Mittal
ROLE      : B.Tech Computer Science Student @ GLA University
LOCATION  : Mathura, India
SPECIALTY : Code → Data → Software Engineering
STATUS    : Open for internship & software/data roles!`,skills:`PROGRAMMING : Python, SQL, Java, C++, JavaScript
DATA        : Data Engineering, ETL Pipelines, REST APIs, Analytics
DATABASES   : MySQL, MongoDB, Database Architecture
TOOLS/CLOUD : Microsoft Azure, Git, GitHub, VS Code`,projects:`01. Automated API Data Extraction & ETL Pipeline [Python + MySQL]
02. Relational Database & Inventory System [SQL + MongoDB]
03. Exploratory Data Cleansing & Analysis Suite [Python + Pandas]
04. Interactive Neo-Brutalist Developer Portfolio [JS + CSS3]`,education:`DEGREE      : B.Tech Computer Science & Engineering
INSTITUTION : GLA University, Mathura, India
TIMELINE    : 2022 - 2026`,contact:`LINKEDIN : https://www.linkedin.com/in/naveen-mittal-07b18a383/
GITHUB   : https://github.com/NaveensGit2007
EMAIL    : mittalnaveen294@gmail.com
LOCATION : Mathura, India`,run:`[COMPILING NAVYA.M PORTFOLIO SYSTEM...]
> Loading core modules... [OK]
> Ingesting Python & SQL engines... [OK]
> Verifying Neo-Brutalist hard shadow physics... [6px 6px 0 #000 APPROVED]
> STATUS: 100% OPERATIONAL. Ready to build incredible tech!`};let l=null,m=!0;const D=()=>{if(!l&&typeof window<"u"){const e=window.AudioContext||window.webkitAudioContext;e&&(l=new e)}l&&l.state==="suspended"&&l.resume()},B=()=>(m=!m,m&&w(800,"sine",.05),m),w=(e=440,s="sine",r=.04)=>{if(m)try{if(D(),!l)return;const o=l.createOscillator(),t=l.createGain();o.type=s,o.frequency.setValueAtTime(e,l.currentTime),o.frequency.exponentialRampToValueAtTime(e/2,l.currentTime+r),t.gain.setValueAtTime(.08,l.currentTime),t.gain.exponentialRampToValueAtTime(.001,l.currentTime+r),o.connect(t),t.connect(l.destination),o.start(),o.stop(l.currentTime+r)}catch{}},R=()=>{if(!m)return;const e=[350,420,500,580],s=e[Math.floor(Math.random()*e.length)];w(s,"triangle",.02)},N=()=>{if(m)try{if(D(),!l)return;const e=l.currentTime;[523.25,659.25,783.99].forEach((s,r)=>{const o=l.createOscillator(),t=l.createGain();o.type="square",o.frequency.setValueAtTime(s,e+r*.06),t.gain.setValueAtTime(.04,e+r*.06),t.gain.exponentialRampToValueAtTime(.001,e+r*.06+.1),o.connect(t),t.connect(l.destination),o.start(e+r*.06),o.stop(e+r*.06+.1)})}catch{}},c={name:"Navya Mittal",shortName:"NAVYA.M",role:"B.Tech CSE Student",institution:"GLA University, Mathura",degree:"B.Tech in Computer Science & Engineering",location:"Mathura, India",status:"BUILD MODE: ON",linkedin:"https://www.linkedin.com/in/naveen-mittal-07b18a383/",github:"https://github.com/NaveensGit2007",email:"mittalnaveen294@gmail.com",quickBioPoints:["B.Tech Computer Science student at GLA University, Mathura","Passionate about software architecture & data engineering","Hands-on experience with Python, SQL, REST APIs & Databases","Continuous learner exploring cloud infrastructure & scalable systems"]},_={description:"Computer Science student at GLA University specializing in software engineering, data pipelines, database systems, and full-stack solutions. Code → Data → Products."},U=[{number:"01",title:"LEARNING",tagline:"Building Core Foundations",description:"Learned Object-Oriented Programming in C++/Java, Relational Database principles (SQL), and Python basics at GLA University."},{number:"02",title:"BUILDING",tagline:"Hands-on Data & Software",description:"Constructed automated ETL scripts, MySQL database schemas, REST API integrations, and CSV/JSON data transformation workflows."},{number:"03",title:"EXPERIMENTING",tagline:"Cloud & Database Exploration",description:"Explored NoSQL with MongoDB, cloud fundamentals on Microsoft Azure, and developed full-stack web concepts with modern UI architectures."},{number:"04",title:"IMPROVING",tagline:"Production-Grade Engineering",description:"Optimizing database queries, studying system design concepts, and refining data analytics workflows for real-world reliability."}],H=[{category:"PROGRAMMING",accent:"yellow",skills:[{name:"Python",level:"Advanced",desc:"Data processing, ETL automation, pandas, backend scripts"},{name:"SQL",level:"Advanced",desc:"Complex queries, joins, aggregations, schema indexing"},{name:"Java",level:"Proficient",desc:"Object-oriented programming, standard library, backend logic"},{name:"C++",level:"Proficient",desc:"Object-oriented programming, syntax, and logic design"},{name:"JavaScript",level:"Proficient",desc:"ES6+, DOM manipulation, web APIs, dynamic interfaces"}]},{category:"DATA & ETL",accent:"blue",skills:[{name:"Data Engineering",level:"Focus Area",desc:"Data extraction, transformation, and pipeline structuring"},{name:"ETL Pipelines",level:"Hands-on",desc:"Automated ingestion from REST APIs to structured SQL/CSV"},{name:"Data Transformation",level:"Hands-on",desc:"Cleaning, parsing, mapping JSON/CSV into normalized schemas"},{name:"REST APIs",level:"Proficient",desc:"API consumption, JSON parsing, endpoint integrations"},{name:"Data Analysis",level:"Proficient",desc:"Exploratory data analysis, statistical queries, metrics"}]},{category:"DATABASES",accent:"green",skills:[{name:"MySQL",level:"Advanced",desc:"Relational database design, triggers, stored procedures"},{name:"MongoDB",level:"Proficient",desc:"Document store, aggregation pipelines, JSON collections"},{name:"NoSQL",level:"Proficient",desc:"Key-value and document data modeling strategies"},{name:"Database Architecture",level:"Hands-on",desc:"Normalization, indexing, foreign keys, query optimization"}]},{category:"TOOLS & CLOUD",accent:"red",skills:[{name:"Microsoft Azure",level:"Certified/Learning",desc:"Cloud computing fundamentals, resource deployment"},{name:"Git & GitHub",level:"Essential",desc:"Version control, branching, pull requests, repository management"},{name:"VS Code",level:"Primary IDE",desc:"Custom environment, debugging, extension ecosystem"},{name:"MySQL Workbench",level:"Tooling",desc:"Visual schema design, SQL execution, DB administration"}]}],$=[{id:"etl-pipeline",number:"PROJECT 01",title:"Automated API Data Extraction & ETL Pipeline",category:"data",categoryLabel:"ETL & DATA",shortDesc:"Automated Python-driven data pipeline that extracts dynamic API data, cleans JSON payloads, transforms schema formats, and loads structured records into MySQL database tables.",fullDetails:{problem:"Raw API data feeds are unstructured, rate-limited, and periodically change JSON field formats, leading to data quality issues when loaded directly into analytical reports.",approach:"Built a resilient Python ETL workflow using Request modules and Pandas. Implemented schema mapping, data validation hooks, error logging, and batch upserts into a normalized MySQL schema.",techStack:["Python","REST APIs","MySQL","Pandas","JSON Processing","SQLAlchemy"],result:"Achieved 100% automated daily data ingestion with zero manual intervention and robust fallback error logging.",whatILearned:"Deepened knowledge of idempotent database upserts, defensive JSON parsing, and structured logging in Python ETL routines."},demoUrl:"#",githubUrl:"https://github.com/NaveensGit2007",accentColor:"border-accent-yellow bg-accent-yellow/10"},{id:"database-analytics",number:"PROJECT 02",title:"Relational Database & Inventory Analytics System",category:"database",categoryLabel:"DATABASES",shortDesc:"Comprehensive SQL database solution featuring complex join views, stored procedures, indexing for fast analytical queries, and hybrid MongoDB fallback storage.",fullDetails:{problem:"Legacy inventory tracking relied on unindexed spreadsheets, causing slow reporting queries and concurrency conflicts when tracking stock levels across multiple locations.",approach:"Designed a 3rd Normal Form (3NF) relational database schema in MySQL with indexed foreign keys, automated stock alert triggers, and analytical views for daily revenue metrics.",techStack:["SQL","MySQL Workbench","MongoDB","Database Normalization","Indexing"],result:"Reduced analytical query latency by 85% through optimized composite indexes and pre-computed materialized SQL views.",whatILearned:"Mastered query execution plan analysis (`EXPLAIN`), index cardinality optimization, and ACID transactional safeguards."},demoUrl:"#",githubUrl:"https://github.com/NaveensGit2007",accentColor:"border-accent-blue bg-accent-blue/10"},{id:"data-analysis-tool",number:"PROJECT 03",title:"Exploratory Data Analysis & Visualization Suite",category:"data",categoryLabel:"ETL & DATA",shortDesc:"Python data processing script suite performing statistical analysis, outlier detection, data cleansing, and structured summary reporting on large CSV datasets.",fullDetails:{problem:"Multi-gigabyte CSV records often contained duplicate entries, missing values, and corrupted data types that skewed analytical reporting.",approach:"Created a modular Python tool using Pandas and NumPy to systematically validate data integrity, impute missing fields, calculate statistical distributions, and output cleaned analytical tables.",techStack:["Python","Pandas","NumPy","Matplotlib","Data Cleansing","CSV Processing"],result:"Processed over 100,000+ raw records in seconds, highlighting correlation insights and identifying invalid data records automatically.",whatILearned:"Gained expertise in vectorized data operations in Pandas, memory efficient chunked processing, and statistical distribution modeling."},demoUrl:"#",githubUrl:"https://github.com/NaveensGit2007",accentColor:"border-accent-green bg-accent-green/10"},{id:"neo-brutalist-portfolio",number:"PROJECT 04",title:"Interactive Neo-Brutalist Developer Portfolio",category:"software",categoryLabel:"SOFTWARE & WEB",shortDesc:"Production-grade, highly interactive personal portfolio built with a tactile Neo-Brutalist design language, interactive CLI terminal, dynamic theme engine, and micro-interactions.",fullDetails:{problem:"Generic portfolio templates blend together and fail to communicate visual confidence, technical creativity, or tactile web engineering skills.",approach:"Engineered a custom Neo-Brutalist UI system featuring high contrast typography, 3D tactile button physics, dynamic theme color swapper, interactive web audio synth, and modular ES6 architecture.",techStack:["JavaScript (ES6)","HTML5","CSS3 / Custom Tokens","Web Audio API","Tailwind Engine"],result:"Created a visually stunning, responsive, fast-loading portfolio with high recruiter impact and interactive playground elements.",whatILearned:"Refined modular web architecture, responsive brutalist grid layouts, Web Audio API synthesis, and accessible focus state management."},demoUrl:"https://www.linkedin.com/in/naveen-mittal-07b18a383/",githubUrl:"https://github.com/NaveensGit2007",accentColor:"border-accent-red bg-accent-red/10"}],u={degree:"B.TECH IN COMPUTER SCIENCE & ENGINEERING",institution:"GLA UNIVERSITY",location:"Mathura, Uttar Pradesh, India",duration:"2022 - 2026 (Expected)",status:"CURRENTLY PURSUING",studentCardId:"GLA-CSE-2026-NM",highlights:["Core focus on Database Management Systems (DBMS), Operating Systems, Software Engineering, and Object-Oriented Programming.","Hands-on lab work in SQL relational database design, Python programming, and Software Engineering methodologies.","Active participant in technical student communities, coding challenges, and collaborative technology initiatives."],coursework:["Database Management Systems (DBMS)","Object Oriented Programming (OOP)","Operating Systems & System Architecture","Computer Networks & Web Engineering","Data Engineering & Cloud Fundamentals","Software Engineering Principles"]},G=[{type:"CERTIFICATION",title:"Microsoft Azure Fundamentals / Cloud Technical Learning",issuer:"Microsoft Azure",status:"VERIFIED / COMPLETED",badgeColor:"bg-accent-blue text-white",desc:"Understanding core cloud concepts, Azure architectural components, cloud governance, security, and cloud storage management."},{type:"TECHNICAL LEARNING",title:"Data Engineering & Pipeline Architecture",issuer:"Practical Engineering Milestone",status:"HANDS-ON MILESTONE",badgeColor:"bg-accent-yellow text-black",desc:"Mastery of ETL data pipeline workflows, data transformation in Python, JSON parsing, and relational database schema loading."},{type:"DATABASE MILESTONE",title:"Relational Database Management & SQL Mastery",issuer:"Academic & Practical Work",status:"CONFIRMED SKILL",badgeColor:"bg-accent-green text-black",desc:"Proficiency in complex SQL queries, multi-table joins, subqueries, database normalization, indexing, and MySQL workbench operations."}],j=[{id:"python-adv",title:"ADVANCED PYTHON INTERNALS",tag:"PROGRAMMING",desc:"Deep diving into Python memory management, decorators, generators, asyncio, and writing C-extensions for performance optimization.",progress:85,accent:"yellow"},{id:"data-eng",title:"SCALABLE DATA PIPELINES",tag:"DATA ENGINEERING",desc:"Exploring distributed data processing concepts, Apache Spark workflows, batch vs streaming architecture, and parquet column storage.",progress:75,accent:"blue"},{id:"sql-opt",title:"SQL QUERY OPTIMIZATION",tag:"DATABASES",desc:"Analyzing query execution plans, B-tree indexes, join strategies (Hash Join vs Nested Loops), and lock contention in high throughput DBs.",progress:80,accent:"green"},{id:"cloud-arch",title:"AZURE & CLOUD ARCHITECTURE",tag:"CLOUD",desc:"Building serverless event-driven architectures using Azure Functions, Blob Storage triggers, and Managed SQL Databases.",progress:70,accent:"red"}],V=()=>`
    <nav class="w-full bg-white border-b-4 border-black box-border px-4 lg:px-8 py-3 shadow-[0_4px_0_#000]">
      <div class="max-w-7xl mx-auto flex items-center justify-between">
        
        <!-- Left: Logo & Status Badge -->
        <a href="#hero" class="flex items-center gap-3 group text-decoration-none">
          <div class="bg-accent-yellow border-2 border-black px-3 py-1 font-black text-lg tracking-wider shadow-[2px_2px_0px_#000] group-hover:-translate-y-0.5 transition-transform">
            ${c.shortName}
          </div>
          <div class="hidden sm:flex items-center gap-2 bg-paper border-2 border-black px-2 py-0.5 font-mono text-xs font-bold shadow-[2px_2px_0px_#000]">
            <span class="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
            <span>B.TECH CSE '26</span>
          </div>
        </a>

        <!-- Center: Desktop Nav Links -->
        <div class="hidden md:flex items-center gap-6 font-bold text-sm tracking-wide font-mono">
          <a href="#about" class="hover:bg-accent-yellow hover:border-2 hover:border-black px-2 py-1 transition-all">ABOUT</a>
          <a href="#skills" class="hover:bg-accent-blue hover:text-white hover:border-2 hover:border-black px-2 py-1 transition-all">SKILLS</a>
          <a href="#projects" class="hover:bg-accent-green hover:border-2 hover:border-black px-2 py-1 transition-all">PROJECTS</a>
          <a href="#education" class="hover:bg-accent-red hover:text-white hover:border-2 hover:border-black px-2 py-1 transition-all">EDUCATION</a>
          <a href="#contact" class="hover:bg-accent-yellow hover:border-2 hover:border-black px-2 py-1 transition-all">CONTACT</a>
        </div>

        <!-- Right Controls: Audio Toggle, LinkedIn & Connect CTA -->
        <div class="hidden sm:flex items-center gap-3">
          
          <!-- Sound FX Toggle -->
          <button id="sound-toggle-btn" class="brutal-btn py-1.5 px-3 text-xs bg-paper font-mono" title="Toggle audio feedback">
            <span id="sound-icon">🔊</span>
            <span id="sound-text">SOUND</span>
          </button>

          <!-- Primary Connect Button -->
          <a href="#contact" class="brutal-btn brutal-btn-primary py-1.5 px-4 text-xs font-black tracking-wider">
            LET'S CONNECT →
          </a>
        </div>

        <!-- Mobile Hamburger Button -->
        <button id="mobile-menu-btn" class="md:hidden brutal-btn py-1.5 px-3 text-sm font-mono font-bold bg-accent-yellow">
          MENU ☰
        </button>

      </div>

      <!-- Mobile Dropdown Menu -->
      <div id="mobile-menu" class="hidden md:hidden mt-4 pt-4 border-t-2 border-black flex flex-col gap-3 font-mono font-bold text-center">
        <a href="#about" class="mobile-nav-link p-2 bg-paper border-2 border-black shadow-[2px_2px_0px_#000]">01. ABOUT ME</a>
        <a href="#skills" class="mobile-nav-link p-2 bg-accent-yellow border-2 border-black shadow-[2px_2px_0px_#000]">02. SKILLS</a>
        <a href="#projects" class="mobile-nav-link p-2 bg-accent-blue text-white border-2 border-black shadow-[2px_2px_0px_#000]">03. PROJECTS</a>
        <a href="#education" class="mobile-nav-link p-2 bg-accent-green border-2 border-black shadow-[2px_2px_0px_#000]">04. EDUCATION</a>
        <a href="#contact" class="mobile-nav-link p-2 bg-accent-red text-white border-2 border-black shadow-[2px_2px_0px_#000]">05. CONTACT</a>
        <div class="flex justify-center gap-3 pt-2">
          <a href="${c.linkedin}" target="_blank" rel="noopener noreferrer" class="brutal-btn brutal-btn-blue text-xs w-full">LINKEDIN ↗</a>
        </div>
      </div>
    </nav>
  `,q=()=>`
    <div class="relative grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch pt-4">
      
      <!-- Decorative Floating Stickers (Asymmetric) -->
      <div class="absolute -top-6 left-0 hidden md:block z-10">
        <span class="brutal-badge brutal-badge-yellow sticker-rotate-1 animate-float shadow-[3px_3px_0px_#000]">
          🚀 BUILD MODE: ON
        </span>
      </div>
      
      <div class="absolute top-2 right-12 hidden lg:block z-10">
        <span class="brutal-badge brutal-badge-blue text-white sticker-rotate-2 shadow-[3px_3px_0px_#000]">
          ⚡ AVAILABLE FOR OPPORTUNITIES
        </span>
      </div>

      <!-- Left Column: Huge Asymmetric Typography & Action CTAs -->
      <div class="lg:col-span-7 flex flex-col justify-between space-y-6">
        
        <div class="space-y-4">
          <!-- Top Sub-Badge -->
          <div class="inline-flex items-center gap-2 bg-black text-white border-2 border-black px-3 py-1 font-mono text-xs font-bold shadow-[4px_4px_0px_#FFE600]">
            <span>HELLO WORLD 👋</span>
            <span>|</span>
            <span class="text-accent-yellow">${c.degree}</span>
          </div>

          <!-- Main Massive Headline -->
          <h1 class="text-5xl sm:text-7xl lg:text-8xl font-black tracking-tighter leading-none uppercase select-none">
            HI, I'M <span class="bg-accent-yellow px-2 py-0.5 border-4 border-black inline-block shadow-[6px_6px_0px_#000] -rotate-1 hover:rotate-0 transition-transform">NAVYA.</span>
          </h1>

          <!-- Secondary Expressive Headline -->
          <h2 class="text-2xl sm:text-4xl font-extrabold tracking-tight text-slate-900 leading-snug">
            I BUILD, BREAK & LEARN THINGS WITH <span class="underline decoration-4 decoration-accent-blue underline-offset-4 font-mono">CODE.</span>
          </h2>

          <!-- Bio Description -->
          <p class="text-base sm:text-lg font-medium text-slate-800 max-w-2xl bg-white/80 p-4 border-3 border-black shadow-[4px_4px_0px_#000] font-mono leading-relaxed">
            ${_.description}
          </p>
        </div>

        <!-- Action CTAs -->
        <div class="flex flex-wrap items-center gap-4 pt-2">
          
          <a href="#projects" class="brutal-btn brutal-btn-primary text-sm sm:text-base font-black px-6 py-3">
            VIEW MY WORK ↓
          </a>

          <a href="#contact" class="brutal-btn brutal-btn-black text-sm sm:text-base font-bold px-6 py-3">
            CONNECT WITH ME →
          </a>

          <a href="${c.linkedin}" target="_blank" rel="noopener noreferrer" class="brutal-btn brutal-btn-blue text-sm sm:text-base font-bold px-5 py-3" title="Open LinkedIn Profile">
            LINKEDIN ↗
          </a>

        </div>

        <!-- Quick Brutalist Tags -->
        <div class="flex flex-wrap gap-2 pt-2 font-mono text-xs font-bold">
          <span class="brutal-badge brutal-badge-paper">DATA ENGINEERING</span>
          <span class="brutal-badge brutal-badge-paper">PYTHON</span>
          <span class="brutal-badge brutal-badge-paper">SQL</span>
          <span class="brutal-badge brutal-badge-paper">REST APIs</span>
          <span class="brutal-badge brutal-badge-paper">AZURE</span>
        </div>

      </div>

      <!-- Right Column: Interactive 3D Brutalist Status Card -->
      <div class="lg:col-span-5 flex flex-col justify-center">
        <div id="hero-tilt-card" class="brutal-card-lg bg-white p-6 sm:p-8 space-y-6 relative overflow-hidden transition-transform duration-200">
          
          <!-- Card Header Banner -->
          <div class="bg-black text-white p-3 border-2 border-black -mx-2 -mt-2 flex items-center justify-between font-mono text-xs font-bold">
            <span class="flex items-center gap-2">
              <span class="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-ping"></span>
              CARD // SYSTEM_STATUS
            </span>
            <span id="live-time" class="text-accent-yellow">18:47 IST</span>
          </div>

          <!-- Profile Info Blocks -->
          <div class="space-y-4 font-mono">
            
            <div class="border-b-2 border-black pb-3">
              <span class="text-xs text-slate-500 font-bold uppercase block mb-1">STATUS:</span>
              <div class="flex items-center gap-2 bg-emerald-100 border-2 border-black p-2 font-black text-xs sm:text-sm">
                <span class="w-3 h-3 bg-emerald-500 rounded-full border border-black"></span>
                <span class="uppercase">${c.status}</span>
              </div>
            </div>

            <div class="border-b-2 border-black pb-3">
              <span class="text-xs text-slate-500 font-bold uppercase block mb-1">ROLE:</span>
              <span class="font-extrabold text-sm sm:text-base text-black bg-accent-yellow/40 px-2 py-0.5 border border-black block">
                ${c.role}
              </span>
            </div>

            <div class="border-b-2 border-black pb-3">
              <span class="text-xs text-slate-500 font-bold uppercase block mb-1">COLLEGE / LOCATION:</span>
              <span class="font-bold text-xs sm:text-sm text-black block">
                ${c.institution}
              </span>
              <span class="text-xs text-slate-600">${c.location}</span>
            </div>

            <div>
              <span class="text-xs text-slate-500 font-bold uppercase block mb-1">INTERESTS:</span>
              <div class="flex flex-wrap gap-1.5 text-xs font-bold">
                <span class="bg-accent-blue/10 border border-black px-2 py-0.5">CODE</span>
                <span class="bg-accent-green/10 border border-black px-2 py-0.5">DATA</span>
                <span class="bg-accent-red/10 border border-black px-2 py-0.5">TECH</span>
                <span class="bg-accent-yellow/30 border border-black px-2 py-0.5">ETL PIPELINES</span>
              </div>
            </div>

          </div>

          <!-- Bottom Card Stamp -->
          <div class="pt-2 flex items-center justify-between border-t-2 border-black text-xs font-mono font-black">
            <span class="bg-accent-yellow border border-black px-2 py-0.5">VERIFIED CSE '26</span>
            <span class="text-slate-500">CTRL + CREATE ⌘</span>
          </div>

        </div>
      </div>

    </div>
  `,Q=()=>`
    <div class="relative brutal-card-lg bg-paper-light p-6 sm:p-10 border-4 border-black shadow-[8px_8px_0px_#000] space-y-10">
      
      <!-- Poster Pin Accent Header -->
      <div class="flex items-center justify-between border-b-4 border-black pb-4">
        <div class="flex items-center gap-4">
          <span class="bg-accent-yellow text-black border-2 border-black px-3 py-1 font-mono font-black text-lg shadow-[2px_2px_0px_#000]">
            01
          </span>
          <h2 class="text-3xl sm:text-5xl font-black uppercase tracking-tight">
            ABOUT ME
          </h2>
        </div>
        <div class="hidden sm:flex items-center gap-2 font-mono text-xs font-black bg-black text-white px-3 py-1 border-2 border-black">
          <span>POSTER // WALL_01</span>
        </div>
      </div>

      <!-- Content Grid: Bio & Values -->
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        <!-- Bio Narrative Block -->
        <div class="lg:col-span-6 space-y-6">
          <div class="brutal-card bg-white p-6 border-3 border-black space-y-4">
            <h3 class="text-xl sm:text-2xl font-black uppercase border-b-2 border-black pb-2 text-black">
              CODE. DATA. CONTINUOUS GROWTH.
            </h3>
            <p class="text-base text-slate-800 font-medium leading-relaxed font-mono">
              I am currently pursuing my <strong>B.Tech in Computer Science & Engineering</strong> at <strong>GLA University, Mathura</strong>. My technical journey is driven by a deep curiosity for how data flows through systems and how clean software architecture turns raw code into reliable solutions.
            </p>
            <p class="text-base text-slate-800 font-medium leading-relaxed font-mono">
              Whether writing automated Python scripts for ETL data processing, crafting optimized SQL queries in MySQL, or exploring cloud scalability with Microsoft Azure, I approach every challenge with a problem-solving mindset and a drive to learn.
            </p>
          </div>

          <!-- Highlight Bullet Grid -->
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
            ${c.quickBioPoints.map((e,s)=>`
              <div class="bg-white border-2 border-black p-3 font-mono text-xs font-bold shadow-[3px_3px_0px_#000] flex items-start gap-2">
                <span class="bg-accent-yellow border border-black px-1.5 py-0.5 font-black text-black">0${s+1}</span>
                <span>${e}</span>
              </div>
            `).join("")}
          </div>
        </div>

        <!-- Right Side: 4-Block Journey Timeline -->
        <div class="lg:col-span-6 space-y-4">
          <div class="bg-black text-white p-3 border-2 border-black font-mono text-xs font-extrabold flex justify-between items-center">
            <span>DEVELOPMENT JOURNEY TIMELINE</span>
            <span class="text-accent-yellow">GLA CSE → 2026</span>
          </div>

          <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
            ${U.map((e,s)=>{const r=["bg-accent-yellow","bg-accent-blue text-white","bg-accent-green","bg-accent-red text-white"];return`
                <div class="brutal-card p-5 border-3 border-black space-y-2 relative overflow-hidden group">
                  <div class="flex items-center justify-between border-b-2 border-black pb-2">
                    <span class="font-mono font-black text-xl px-2 py-0.5 border border-black ${r[s%r.length]} shadow-[2px_2px_0px_#000]">
                      ${e.number}
                    </span>
                    <span class="font-mono text-xs font-black uppercase text-slate-600">${e.title}</span>
                  </div>
                  <h4 class="font-extrabold text-base uppercase text-black pt-1">${e.tagline}</h4>
                  <p class="font-mono text-xs text-slate-700 leading-relaxed">${e.description}</p>
                </div>
              `}).join("")}
          </div>
        </div>

      </div>

    </div>
  `,F=()=>`
    <div class="space-y-8">
      
      <!-- Section Header -->
      <div class="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b-4 border-black pb-4">
        <div>
          <div class="inline-flex items-center gap-2 bg-accent-blue text-white border-2 border-black px-3 py-1 font-mono font-bold text-xs shadow-[2px_2px_0px_#000] mb-2">
            <span>TECH STACK & TOOLING</span>
          </div>
          <h2 class="text-3xl sm:text-5xl font-black uppercase tracking-tight">
            SKILLS & CAPABILITIES
          </h2>
        </div>
        <p class="font-mono text-sm font-bold text-slate-700 max-w-md bg-white p-3 border-2 border-black shadow-[3px_3px_0px_#000]">
          ⚡ Verified technical stack based on actual coursework, projects, and hands-on software/data engineering.
        </p>
      </div>

      <!-- Skills Categories Grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
        ${H.map((e,s)=>`
            <div class="brutal-card-lg bg-white p-6 border-4 border-black space-y-6">
              
              <!-- Category Title Badge -->
              <div class="flex items-center justify-between border-b-3 border-black pb-3">
                <span class="font-mono font-black text-base px-3 py-1 border-2 shadow-[2px_2px_0px_#000] uppercase ${{yellow:"bg-accent-yellow border-black text-black",blue:"bg-accent-blue border-black text-white",green:"bg-accent-green border-black text-black",red:"bg-accent-red border-black text-white"}[e.accent]||"bg-accent-yellow border-black text-black"}">
                  ${e.category}
                </span>
                <span class="font-mono text-xs font-bold text-slate-500">0${s+1} // CAPABILITY</span>
              </div>

              <!-- Skills Stickers List -->
              <div class="flex flex-wrap gap-3">
                ${e.skills.map((t,d)=>`
                  <div class="skill-sticker brutal-card p-3 border-2 border-black cursor-pointer group hover:-translate-y-1 hover:rotate-1 transition-all duration-150 relative bg-paper-light">
                    
                    <div class="flex items-center justify-between gap-3">
                      <span class="font-black text-sm uppercase text-black group-hover:text-accent-blue transition-colors">
                        ${t.name}
                      </span>
                      <span class="font-mono text-[10px] font-extrabold uppercase px-1.5 py-0.5 border border-black bg-white shadow-[1px_1px_0px_#000]">
                        ${t.level}
                      </span>
                    </div>

                    <!-- Hidden Hover Detail Popover -->
                    <div class="mt-2 pt-2 border-t border-dashed border-black/40 text-xs font-mono text-slate-700 hidden group-hover:block transition-all">
                      ${t.desc}
                    </div>

                  </div>
                `).join("")}
              </div>

            </div>
          `).join("")}
      </div>

    </div>
  `,W=()=>`
    <div class="space-y-8">
      
      <!-- Section Header & Filter Controls -->
      <div class="flex flex-col lg:flex-row lg:items-end justify-between gap-6 border-b-4 border-black pb-6">
        <div>
          <div class="inline-flex items-center gap-2 bg-accent-green text-black border-2 border-black px-3 py-1 font-mono font-bold text-xs shadow-[2px_2px_0px_#000] mb-2">
            <span>PORTFOLIO & CODE</span>
          </div>
          <h2 class="text-3xl sm:text-5xl font-black uppercase tracking-tight">
            THINGS I'VE BUILT.
          </h2>
        </div>

        <!-- Filter Buttons -->
        <div id="project-filters" class="flex flex-wrap gap-2 font-mono text-xs font-bold">
          <button data-filter="all" class="project-filter-btn brutal-btn brutal-btn-primary py-1.5 px-3 text-xs">
            ALL (4)
          </button>
          <button data-filter="data" class="project-filter-btn brutal-btn py-1.5 px-3 text-xs bg-white">
            ETL & DATA
          </button>
          <button data-filter="software" class="project-filter-btn brutal-btn py-1.5 px-3 text-xs bg-white">
            SOFTWARE & WEB
          </button>
          <button data-filter="database" class="project-filter-btn brutal-btn py-1.5 px-3 text-xs bg-white">
            DATABASES
          </button>
        </div>
      </div>

      <!-- Asymmetrical Project Cards Grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
        ${$.map((e,s)=>{const r=["rotate-0","rotate-1","-rotate-1","rotate-0"],o=r[s%r.length];return`
            <div data-category="${e.category}" class="project-card brutal-card-lg bg-white p-6 sm:p-8 border-4 border-black space-y-6 flex flex-col justify-between ${o} hover:rotate-0 transition-transform">
              
              <div class="space-y-4">
                <!-- Top Card Bar -->
                <div class="flex items-center justify-between border-b-3 border-black pb-3">
                  <span class="font-mono font-black text-sm px-2.5 py-0.5 border-2 border-black bg-accent-yellow shadow-[2px_2px_0px_#000]">
                    ${e.number}
                  </span>
                  <span class="font-mono text-xs font-extrabold px-2 py-0.5 border border-black bg-paper">
                    ${e.categoryLabel}
                  </span>
                </div>

                <!-- Project Title -->
                <h3 class="text-2xl sm:text-3xl font-black uppercase text-black leading-tight hover:text-accent-blue transition-colors">
                  ${e.title}
                </h3>

                <!-- Short Description -->
                <p class="font-mono text-sm text-slate-700 leading-relaxed bg-paper p-3 border-2 border-black">
                  ${e.shortDesc}
                </p>

                <!-- Tech Stack Badges -->
                <div class="flex flex-wrap gap-1.5 pt-1">
                  ${e.fullDetails.techStack.map(t=>`
                    <span class="brutal-badge brutal-badge-paper text-[11px]">
                      ${t}
                    </span>
                  `).join("")}
                </div>
              </div>

              <!-- Action Footer -->
              <div class="pt-4 border-t-3 border-black flex flex-wrap items-center justify-between gap-3">
                <button data-project-id="${e.id}" class="view-project-modal-btn brutal-btn brutal-btn-primary text-xs font-black py-2 px-4">
                  VIEW DETAILS →
                </button>
                <a href="${e.githubUrl}" target="_blank" rel="noopener noreferrer" class="brutal-btn py-2 px-3 text-xs font-bold bg-white font-mono">
                  GITHUB ↗
                </a>
              </div>

            </div>
          `}).join("")}
      </div>

    </div>
  `,Y=e=>e?`
    <div class="relative w-full max-w-3xl brutal-card-lg bg-white p-6 sm:p-10 border-4 border-black shadow-[12px_12px_0px_#000] max-h-[90vh] overflow-y-auto space-y-6">
      
      <!-- Close Button -->
      <button id="close-modal-btn" class="absolute top-4 right-4 brutal-btn brutal-btn-red text-sm font-black p-2 py-1" title="Close Modal">
        ✕ CLOSE
      </button>

      <!-- Modal Header -->
      <div class="space-y-2 border-b-4 border-black pb-4 pr-12">
        <div class="flex items-center gap-2 font-mono text-xs font-bold">
          <span class="bg-accent-yellow border border-black px-2 py-0.5">${e.number}</span>
          <span class="bg-paper border border-black px-2 py-0.5 uppercase">${e.categoryLabel}</span>
        </div>
        <h3 class="text-3xl sm:text-4xl font-black uppercase text-black">
          ${e.title}
        </h3>
      </div>

      <!-- Problem & Approach Grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 gap-6 font-mono text-sm">
        
        <div class="bg-paper p-4 border-2 border-black space-y-2">
          <h4 class="font-black text-xs uppercase bg-accent-red text-white p-1 inline-block border border-black">
            01 // PROBLEM STATEMENT
          </h4>
          <p class="text-slate-800 leading-relaxed">${e.fullDetails.problem}</p>
        </div>

        <div class="bg-paper p-4 border-2 border-black space-y-2">
          <h4 class="font-black text-xs uppercase bg-accent-blue text-white p-1 inline-block border border-black">
            02 // TECHNICAL APPROACH
          </h4>
          <p class="text-slate-800 leading-relaxed">${e.fullDetails.approach}</p>
        </div>

      </div>

      <!-- Results & Metrics -->
      <div class="bg-accent-green/20 p-4 border-3 border-black space-y-2 font-mono">
        <h4 class="font-black text-xs uppercase bg-accent-green text-black p-1 inline-block border border-black">
          03 // RESULT & IMPACT
        </h4>
        <p class="text-slate-900 font-bold text-sm leading-relaxed">${e.fullDetails.result}</p>
      </div>

      <!-- What I Learned -->
      <div class="bg-accent-yellow/20 p-4 border-3 border-black space-y-2 font-mono">
        <h4 class="font-black text-xs uppercase bg-accent-yellow text-black p-1 inline-block border border-black">
          04 // KEY TAKEAWAYS
        </h4>
        <p class="text-slate-900 font-medium text-sm leading-relaxed">${e.fullDetails.whatILearned}</p>
      </div>

      <!-- Tech Stack Badges -->
      <div class="space-y-2 font-mono">
        <span class="text-xs font-bold uppercase text-slate-500 block">TECHNOLOGIES USED:</span>
        <div class="flex flex-wrap gap-2">
          ${e.fullDetails.techStack.map(s=>`
            <span class="brutal-badge brutal-badge-paper font-bold text-xs">${s}</span>
          `).join("")}
        </div>
      </div>

      <!-- Action Links -->
      <div class="pt-4 border-t-3 border-black flex flex-wrap gap-4 justify-between items-center">
        <a href="${e.githubUrl}" target="_blank" rel="noopener noreferrer" class="brutal-btn brutal-btn-black py-2.5 px-6 text-xs">
          VIEW CODE ON GITHUB ↗
        </a>
        <button id="close-modal-bottom-btn" class="brutal-btn py-2.5 px-6 text-xs bg-paper">
          BACK TO PORTFOLIO
        </button>
      </div>

    </div>
  `:"",z=()=>`
    <div class="space-y-8">
      
      <!-- Section Header -->
      <div class="flex items-center gap-4 border-b-4 border-black pb-4">
        <span class="bg-accent-red text-white border-2 border-black px-3 py-1 font-mono font-black text-lg shadow-[2px_2px_0px_#000]">
          03
        </span>
        <h2 class="text-3xl sm:text-5xl font-black uppercase tracking-tight">
          EDUCATION
        </h2>
      </div>

      <!-- Oversized Academic ID Card Container -->
      <div class="brutal-card-lg bg-white p-6 sm:p-10 border-4 border-black shadow-[10px_10px_0px_#000] relative overflow-hidden space-y-8">
        
        <!-- ID Card Top Banner -->
        <div class="bg-black text-white p-4 border-3 border-black -mx-2 -mt-2 flex flex-wrap items-center justify-between gap-4 font-mono text-xs font-bold">
          <div class="flex items-center gap-2">
            <span class="w-3 h-3 bg-accent-yellow rounded-full"></span>
            <span>ACADEMIC CREDENTIAL // STUDENT_ID</span>
          </div>
          <div class="bg-accent-yellow text-black px-3 py-1 border border-black font-black">
            ID: ${u.studentCardId}
          </div>
        </div>

        <!-- Main ID Card Content Layout -->
        <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          <!-- Left Badge & Degree Summary -->
          <div class="lg:col-span-5 space-y-6">
            
            <div class="bg-accent-yellow/20 p-6 border-3 border-black space-y-4 relative">
              <div class="inline-block bg-accent-red text-white font-mono text-xs font-black px-2.5 py-1 border border-black uppercase shadow-[2px_2px_0px_#000]">
                ${u.status}
              </div>
              
              <h3 class="text-2xl sm:text-3xl font-black uppercase text-black leading-tight">
                ${u.degree}
              </h3>
              
              <div class="space-y-1 font-mono text-sm">
                <p class="font-extrabold text-black uppercase text-base">${u.institution}</p>
                <p class="text-slate-700">${u.location}</p>
                <p class="text-xs font-bold text-slate-500">${u.duration}</p>
              </div>

              <!-- Brutalist Stamp -->
              <div class="absolute bottom-2 right-2 opacity-15 pointer-events-none select-none font-black text-4xl font-mono">
                GLA UNIV
              </div>
            </div>

            <!-- Official Highlights -->
            <div class="space-y-3 font-mono text-xs">
              <span class="font-bold text-slate-500 uppercase block">ACADEMIC HIGHLIGHTS:</span>
              ${u.highlights.map(e=>`
                <div class="bg-paper p-3 border-2 border-black font-medium text-slate-800 shadow-[2px_2px_0px_#000]">
                  ✓ ${e}
                </div>
              `).join("")}
            </div>

          </div>

          <!-- Right Column: Coursework Grid -->
          <div class="lg:col-span-7 space-y-4">
            
            <div class="bg-paper p-3 border-2 border-black font-mono text-xs font-black flex justify-between items-center">
              <span>CORE TECHNICAL COURSEWORK</span>
              <span class="text-accent-blue">COMPUTER SCIENCE</span>
            </div>

            <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
              ${u.coursework.map((e,s)=>`
                <div class="bg-white p-3 border-2 border-black font-mono text-xs font-bold shadow-[3px_3px_0px_#000] flex items-center gap-3">
                  <span class="bg-accent-yellow border border-black px-2 py-0.5 font-black">0${s+1}</span>
                  <span>${e}</span>
                </div>
              `).join("")}
            </div>

            <div class="p-4 bg-accent-blue/10 border-2 border-black font-mono text-xs text-slate-800 leading-relaxed">
              💡 <strong>Academic Note:</strong> Coursework focuses heavily on algorithmic efficiency, system design fundamentals, hands-on database operations, and scalable software pipelines.
            </div>

          </div>

        </div>

      </div>

    </div>
  `,J=()=>`
    <div class="space-y-8">
      
      <!-- Section Header -->
      <div class="flex items-center gap-4 border-b-4 border-black pb-4">
        <span class="bg-accent-yellow text-black border-2 border-black px-3 py-1 font-mono font-black text-lg shadow-[2px_2px_0px_#000]">
          04
        </span>
        <h2 class="text-3xl sm:text-5xl font-black uppercase tracking-tight">
          ACHIEVEMENTS & CERTIFICATIONS
        </h2>
      </div>

      <!-- Certification Cards Grid -->
      <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
        ${G.map((e,s)=>`
          <div class="brutal-card bg-white p-6 border-3 border-black space-y-4 flex flex-col justify-between hover:-translate-y-1 transition-transform">
            
            <div class="space-y-3">
              <div class="flex items-center justify-between border-b-2 border-black pb-2 font-mono text-xs font-black">
                <span class="px-2 py-0.5 border border-black ${e.badgeColor}">
                  ${e.type}
                </span>
                <span class="text-slate-500">0${s+1}</span>
              </div>

              <h3 class="text-xl font-black uppercase text-black leading-snug">
                ${e.title}
              </h3>

              <p class="font-mono text-xs text-slate-700 leading-relaxed bg-paper p-3 border border-black">
                ${e.desc}
              </p>
            </div>

            <div class="pt-3 border-t-2 border-black flex items-center justify-between font-mono text-xs font-bold">
              <span class="text-slate-600">ISSUER: ${e.issuer}</span>
              <span class="bg-accent-yellow border border-black px-1.5 py-0.5 text-[10px]">VERIFIED</span>
            </div>

          </div>
        `).join("")}
      </div>

    </div>
  `,K=()=>`
    <div class="space-y-8">
      
      <!-- Section Header -->
      <div class="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b-4 border-black pb-4">
        <div>
          <div class="inline-flex items-center gap-2 bg-accent-purple text-white border-2 border-black px-3 py-1 font-mono font-bold text-xs shadow-[2px_2px_0px_#000] mb-2">
            <span>DEEP DIVES & EXPLORATION</span>
          </div>
          <h2 class="text-3xl sm:text-5xl font-black uppercase tracking-tight">
            CURRENTLY DOWN THE RABBIT HOLE ↓
          </h2>
        </div>
        <p class="font-mono text-xs font-bold text-slate-700 bg-white p-2 border-2 border-black shadow-[2px_2px_0px_#000]">
          Active topics being studied & researched in depth.
        </p>
      </div>

      <!-- Rabbit Hole Cards Grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
        ${j.map((e,s)=>`
            <div class="rabbit-card brutal-card bg-white p-6 border-3 border-black space-y-4 cursor-pointer hover:-translate-y-1.5 transition-transform">
              
              <div class="flex items-center justify-between border-b-2 border-black pb-2 font-mono text-xs font-bold">
                <span class="px-2 py-0.5 border border-black uppercase ${{yellow:"bg-accent-yellow",blue:"bg-accent-blue text-white",green:"bg-accent-green",red:"bg-accent-red text-white"}[e.accent]||"bg-accent-yellow"}">
                  ${e.tag}
                </span>
                <span class="text-slate-500">EXPLORATION // 0${s+1}</span>
              </div>

              <h3 class="text-2xl font-black uppercase text-black">
                ${e.title}
              </h3>

              <p class="font-mono text-xs text-slate-700 leading-relaxed bg-paper p-3 border border-black">
                ${e.desc}
              </p>

              <!-- Progress Bar -->
              <div class="space-y-1 font-mono">
                <div class="flex justify-between text-xs font-bold">
                  <span>PROGRESS / MASTERY:</span>
                  <span>${e.progress}%</span>
                </div>
                <div class="w-full h-4 bg-paper border-2 border-black p-0.5 shadow-[2px_2px_0px_#000]">
                  <div class="h-full ${e.accent==="blue"?"bg-accent-blue":e.accent==="green"?"bg-accent-green":e.accent==="red"?"bg-accent-red":"bg-accent-yellow"} border border-black transition-all duration-500" style="width: ${e.progress}%"></div>
                </div>
              </div>

            </div>
          `).join("")}
      </div>

    </div>
  `,X=()=>`
    <div class="space-y-8">
      
      <!-- Section Header -->
      <div class="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b-4 border-black pb-4">
        <div>
          <div class="inline-flex items-center gap-2 bg-black text-accent-yellow border-2 border-black px-3 py-1 font-mono font-bold text-xs shadow-[2px_2px_0px_#FFE600] mb-2">
            <span>INTERACTIVE EXPERIMENT</span>
          </div>
          <h2 class="text-3xl sm:text-5xl font-black uppercase tracking-tight">
            PLAY WITH THIS.
          </h2>
        </div>
        <p class="font-mono text-xs font-bold text-slate-700 bg-accent-yellow p-2 border-2 border-black shadow-[2px_2px_0px_#000]">
          ⚡ Real-time terminal CLI, dynamic color swapper & interactive audio.
        </p>
      </div>

      <!-- Playground Grid -->
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        <!-- Left: Interactive Terminal CLI (7 Cols) -->
        <div class="lg:col-span-7 brutal-card-lg bg-black text-emerald-400 border-4 border-black p-4 sm:p-6 font-mono text-xs sm:text-sm space-y-4 shadow-[10px_10px_0px_#000]">
          
          <!-- Terminal Title Bar -->
          <div class="flex items-center justify-between border-b-2 border-emerald-800 pb-3 text-white">
            <div class="flex items-center gap-2">
              <span class="w-3 h-3 rounded-full bg-red-500 border border-black inline-block"></span>
              <span class="w-3 h-3 rounded-full bg-yellow-500 border border-black inline-block"></span>
              <span class="w-3 h-3 rounded-full bg-green-500 border border-black inline-block"></span>
              <span class="font-bold ml-2">navya-cli v1.0.0</span>
            </div>
            <span class="text-xs text-slate-400">bash / zsh</span>
          </div>

          <!-- Terminal Output Area -->
          <div id="terminal-output" class="space-y-3 min-h-[220px] max-h-[320px] overflow-y-auto pr-2 leading-relaxed">
            <div class="text-slate-300">
              Welcome to Navya Mittal's interactive terminal! Type <span class="text-accent-yellow font-bold">help</span> or click command buttons below.
            </div>
            <div class="text-slate-400">
              Try running: <span class="text-emerald-300">whoami</span>, <span class="text-emerald-300">skills</span>, <span class="text-emerald-300">projects</span>, <span class="text-emerald-300">run</span>
            </div>
          </div>

          <!-- Quick Command Action Buttons -->
          <div class="pt-2 border-t border-emerald-900 flex flex-wrap gap-2 text-xs">
            <span class="text-slate-400 py-1">QUICK COMMANDS:</span>
            <button data-cmd="whoami" class="term-quick-btn bg-slate-800 hover:bg-emerald-900 text-white px-2 py-0.5 border border-slate-600 rounded">whoami</button>
            <button data-cmd="skills" class="term-quick-btn bg-slate-800 hover:bg-emerald-900 text-white px-2 py-0.5 border border-slate-600 rounded">skills</button>
            <button data-cmd="projects" class="term-quick-btn bg-slate-800 hover:bg-emerald-900 text-white px-2 py-0.5 border border-slate-600 rounded">projects</button>
            <button data-cmd="run" class="term-quick-btn bg-emerald-700 hover:bg-emerald-600 text-black font-bold px-2 py-0.5 border border-slate-600 rounded">run</button>
            <button data-cmd="clear" class="term-quick-btn bg-red-900 hover:bg-red-800 text-white px-2 py-0.5 border border-slate-600 rounded">clear</button>
          </div>

          <!-- Command Input Line -->
          <form id="terminal-form" class="flex items-center gap-2 pt-2 border-t border-emerald-900">
            <span class="text-accent-yellow font-bold">navya@portfolio:~$</span>
            <input 
              type="text" 
              id="terminal-input" 
              class="flex-1 bg-transparent text-emerald-300 outline-none font-mono text-xs sm:text-sm placeholder-slate-600" 
              placeholder="type 'help' or any command..." 
              autocomplete="off"
            />
            <button type="submit" class="bg-emerald-500 text-black font-bold px-3 py-1 text-xs border border-black hover:bg-emerald-400">
              EXECUTE ⏎
            </button>
          </form>

        </div>

        <!-- Right: Theme Switcher & Interactive Controls (5 Cols) -->
        <div class="lg:col-span-5 space-y-6">
          
          <!-- Accent Color Swapper Card -->
          <div class="brutal-card bg-white p-6 border-3 border-black space-y-4">
            <div class="flex items-center justify-between border-b-2 border-black pb-2">
              <h3 class="font-black text-lg uppercase">DYNAMIC ACCENT SWAPPER</h3>
              <span class="font-mono text-xs font-bold bg-accent-yellow px-2 py-0.5 border border-black">LIVE THEME</span>
            </div>
            
            <p class="font-mono text-xs text-slate-700 leading-relaxed">
              Click any color swatch below to instantly swap the primary Neo-Brutalist accent color across the entire site!
            </p>

            <div class="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-1">
              <button data-color="#FFE600" class="theme-swatch-btn brutal-btn py-2 px-3 text-xs bg-accent-yellow font-bold border-2 border-black">
                ELECTRIC YELLOW
              </button>
              <button data-color="#2563EB" class="theme-swatch-btn brutal-btn py-2 px-3 text-xs bg-accent-blue text-white font-bold border-2 border-black">
                COBALT BLUE
              </button>
              <button data-color="#10B981" class="theme-swatch-btn brutal-btn py-2 px-3 text-xs bg-accent-green font-bold border-2 border-black">
                LIME GREEN
              </button>
              <button data-color="#FF3333" class="theme-swatch-btn brutal-btn py-2 px-3 text-xs bg-accent-red text-white font-bold border-2 border-black">
                FLAME RED
              </button>
              <button data-color="#EC4899" class="theme-swatch-btn brutal-btn py-2 px-3 text-xs bg-accent-pink text-white font-bold border-2 border-black">
                HOT PINK
              </button>
              <button data-color="#8B5CF6" class="theme-swatch-btn brutal-btn py-2 px-3 text-xs bg-accent-purple text-white font-bold border-2 border-black">
                NEON PURPLE
              </button>
            </div>
          </div>

          <!-- Sound Feedback Card -->
          <div class="brutal-card bg-paper-light p-6 border-3 border-black space-y-4">
            <div class="flex items-center justify-between border-b-2 border-black pb-2">
              <h3 class="font-black text-lg uppercase">AUDIO FEEDBACK ENGINE</h3>
              <span class="font-mono text-xs font-bold bg-accent-green px-2 py-0.5 border border-black">WEB AUDIO API</span>
            </div>

            <p class="font-mono text-xs text-slate-700 leading-relaxed">
              Experience tactile synth audio for buttons, terminal keys, and modal popups. Zero audio files required!
            </p>

            <button id="playground-sound-btn" class="brutal-btn brutal-btn-primary w-full py-2.5 text-xs font-black">
              TEST AUDIO SYNTH SFX 🔊
            </button>
          </div>

        </div>

      </div>

    </div>
  `,Z=()=>`
    <div class="brutal-card-lg bg-accent-yellow p-6 sm:p-12 border-4 border-black shadow-[12px_12px_0px_#000] relative overflow-hidden space-y-10">
      
      <!-- Headline & Subtitle -->
      <div class="space-y-4 max-w-3xl">
        <div class="inline-flex items-center gap-2 bg-black text-white border-2 border-black px-3 py-1 font-mono font-bold text-xs shadow-[2px_2px_0px_#000]">
          <span>05 // GET IN TOUCH</span>
        </div>

        <h2 class="text-4xl sm:text-7xl font-black uppercase tracking-tighter leading-none text-black">
          LET'S BUILD SOMETHING.
        </h2>

        <p class="font-mono text-base sm:text-lg text-black font-bold max-w-2xl bg-white p-4 border-3 border-black shadow-[4px_4px_0px_#000]">
          I'm currently seeking internship opportunities, software engineering roles, data projects, and technical collaborations. Whether you have a project idea, job opportunity, or just want to chat tech—reach out!
        </p>
      </div>

      <!-- Quick Action Buttons Grid -->
      <div class="grid grid-cols-1 sm:grid-cols-3 gap-6">
        
        <!-- LinkedIn Button -->
        <a href="${c.linkedin}" target="_blank" rel="noopener noreferrer" class="brutal-btn brutal-btn-blue p-6 flex flex-col items-start gap-3 border-3 border-black group text-decoration-none">
          <span class="font-mono text-xs font-black bg-black text-white px-2 py-0.5 border border-white">LINKEDIN ↗</span>
          <span class="text-2xl font-black uppercase tracking-wide">CONNECT NOW</span>
          <span class="font-mono text-xs font-bold text-blue-100">linkedin.com/in/naveen-mittal</span>
        </a>

        <!-- Copy Email Button -->
        <button id="copy-email-btn" class="brutal-btn brutal-btn-black p-6 flex flex-col items-start gap-3 border-3 border-black group text-left">
          <span class="font-mono text-xs font-black bg-accent-yellow text-black px-2 py-0.5 border border-black">DIRECT EMAIL ✉</span>
          <span class="text-2xl font-black uppercase tracking-wide">COPY EMAIL</span>
          <span class="font-mono text-xs font-bold text-slate-300 break-all">${c.email}</span>
        </button>

        <!-- GitHub Button -->
        <a href="${c.github}" target="_blank" rel="noopener noreferrer" class="brutal-btn brutal-btn-green p-6 flex flex-col items-start gap-3 border-3 border-black group text-decoration-none">
          <span class="font-mono text-xs font-black bg-black text-white px-2 py-0.5 border border-white">GITHUB ↗</span>
          <span class="text-2xl font-black uppercase tracking-wide">VIEW CODE</span>
          <span class="font-mono text-xs font-bold text-emerald-950">github.com/NaveensGit2007</span>
        </a>

      </div>

      <!-- Quick Message Form -->
      <div class="bg-white p-6 sm:p-8 border-4 border-black space-y-6 shadow-[6px_6px_0px_#000]">
        
        <div class="border-b-3 border-black pb-3">
          <h3 class="text-2xl font-black uppercase text-black">SEND A QUICK MESSAGE</h3>
          <p class="font-mono text-xs text-slate-600 font-bold">Direct message input with client validation</p>
        </div>

        <form id="contact-form" class="space-y-4 font-mono text-sm">
          
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div class="space-y-1">
              <label for="contact-name" class="font-bold text-xs uppercase text-slate-800">YOUR NAME *</label>
              <input 
                type="text" 
                id="contact-name" 
                required 
                class="w-full bg-paper p-3 border-2 border-black font-bold outline-none focus:bg-white transition-colors"
                placeholder="Recruiter / Collaborator Name"
              />
            </div>

            <div class="space-y-1">
              <label for="contact-email" class="font-bold text-xs uppercase text-slate-800">YOUR EMAIL *</label>
              <input 
                type="email" 
                id="contact-email" 
                required 
                class="w-full bg-paper p-3 border-2 border-black font-bold outline-none focus:bg-white transition-colors"
                placeholder="your.email@company.com"
              />
            </div>
          </div>

          <div class="space-y-1">
            <label for="contact-message" class="font-bold text-xs uppercase text-slate-800">MESSAGE / OPPORTUNITY DETAILS *</label>
            <textarea 
              id="contact-message" 
              rows="4" 
              required 
              class="w-full bg-paper p-3 border-2 border-black font-bold outline-none focus:bg-white transition-colors"
              placeholder="Hi Navya, we looked at your portfolio and would like to connect regarding..."
            ></textarea>
          </div>

          <button type="submit" class="brutal-btn brutal-btn-primary py-3 px-8 text-base font-black tracking-wider w-full sm:w-auto">
            SEND MESSAGE NOW 🚀
          </button>

        </form>

      </div>

    </div>
  `,ee=()=>`
    <div class="w-full bg-black text-white border-t-4 border-black space-y-6">
      
      <!-- Infinite Neo-Brutalist Marquee Banner -->
      <div class="overflow-hidden border-b-2 border-slate-800 bg-accent-yellow text-black font-mono font-black text-sm sm:text-base py-2 uppercase select-none">
        <div class="animate-marquee whitespace-nowrap flex gap-8">
          <span>⚡ NAVYA MITTAL</span>
          <span>•</span>
          <span>B.TECH CSE '26 @ GLA UNIVERSITY</span>
          <span>•</span>
          <span>CODE → DATA → PRODUCTS</span>
          <span>•</span>
          <span>BUILT WITH CODE, CURIOSITY & TOO MANY TABS</span>
          <span>•</span>
          <span>PYTHON • SQL • ETL • AZURE</span>
          <span>•</span>
          <span>⚡ NAVYA MITTAL</span>
          <span>•</span>
          <span>B.TECH CSE '26 @ GLA UNIVERSITY</span>
          <span>•</span>
          <span>CODE → DATA → PRODUCTS</span>
          <span>•</span>
          <span>BUILT WITH CODE, CURIOSITY & TOO MANY TABS</span>
        </div>
      </div>

      <!-- Main Footer Content -->
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col md:flex-row items-center justify-between gap-6 font-mono text-xs">
        
        <div class="space-y-1 text-center md:text-left">
          <div class="text-base font-black tracking-wider text-accent-yellow">
            ${c.name.toUpperCase()}
          </div>
          <div class="text-slate-400 font-bold">
            ${c.degree} — ${c.institution}
          </div>
        </div>

        <div class="text-center font-bold text-slate-300 bg-slate-900 px-4 py-2 border border-slate-700">
          "BUILT WITH CODE, CURIOSITY & TOO MANY TABS."
        </div>

        <div class="flex items-center gap-4">
          <a href="${c.linkedin}" target="_blank" rel="noopener noreferrer" class="hover:text-accent-yellow underline">LINKEDIN ↗</a>
          <a href="${c.github}" target="_blank" rel="noopener noreferrer" class="hover:text-accent-yellow underline">GITHUB ↗</a>
          <button id="back-to-top-btn" class="brutal-btn brutal-btn-yellow py-1 px-3 text-xs font-black text-black">
            TOP ↑
          </button>
        </div>

      </div>

    </div>
  `,te=()=>{document.getElementById("navbar-container").innerHTML=V(),document.getElementById("hero").innerHTML=q(),document.getElementById("about").innerHTML=Q(),document.getElementById("skills").innerHTML=F(),document.getElementById("projects").innerHTML=W(),document.getElementById("education").innerHTML=z(),document.getElementById("certifications").innerHTML=J(),document.getElementById("rabbithole").innerHTML=K(),document.getElementById("playground").innerHTML=X(),document.getElementById("contact").innerHTML=Z(),document.getElementById("footer-container").innerHTML=ee(),window.lucide&&typeof window.lucide.createIcons=="function"&&window.lucide.createIcons()},h=(e,s="yellow")=>{const r=document.getElementById("toast-container");if(!r)return;const o={yellow:"bg-accent-yellow text-black border-black",green:"bg-accent-green text-black border-black",blue:"bg-accent-blue text-white border-black",red:"bg-accent-red text-white border-black"},t=document.createElement("div");t.className=`pointer-events-auto p-4 border-3 font-mono font-black text-xs sm:text-sm shadow-[4px_4px_0px_#000] flex items-center justify-between gap-4 transition-all duration-300 transform translate-y-4 opacity-0 ${o[s]||o.yellow}`,t.innerHTML=`
    <span>${e}</span>
    <button class="font-black hover:opacity-75">✕</button>
  `,t.querySelector("button").onclick=()=>{t.remove()},r.appendChild(t),requestAnimationFrame(()=>{t.classList.remove("translate-y-4","opacity-0")}),N(),setTimeout(()=>{t.parentNode&&(t.classList.add("opacity-0","translate-y-4"),setTimeout(()=>t.remove(),300))},4e3)},ae=()=>{const e=document.getElementById("sound-toggle-btn");e&&e.addEventListener("click",()=>{const a=B(),n=document.getElementById("sound-icon"),i=document.getElementById("sound-text");n&&i&&(n.textContent=a?"🔊":"🔇",i.textContent=a?"SOUND":"MUTED"),h(a?"AUDIO FEEDBACK ENABLED 🔊":"AUDIO MUTED 🔇","yellow")}),document.addEventListener("click",a=>{(a.target.closest("button")||a.target.closest("a"))&&w(520,"square",.03)});const s=document.getElementById("live-time"),r=()=>{if(!s)return;const n=new Date().toLocaleTimeString("en-US",{hour:"2-digit",minute:"2-digit",second:"2-digit",hour12:!1});s.textContent=`${n} IST`};r(),setInterval(r,1e3);const o=document.getElementById("hero-tilt-card");o&&(o.addEventListener("mousemove",a=>{const n=o.getBoundingClientRect(),i=a.clientX-n.left-n.width/2,p=(a.clientY-n.top-n.height/2)/(n.height/2)*-6,y=i/(n.width/2)*6;o.style.transform=`perspective(1000px) rotateX(${p}deg) rotateY(${y}deg) translate(-2px, -2px)`}),o.addEventListener("mouseleave",()=>{o.style.transform="perspective(1000px) rotateX(0deg) rotateY(0deg)"}));const t=document.getElementById("mobile-menu-btn"),d=document.getElementById("mobile-menu");t&&d&&(t.addEventListener("click",()=>{d.classList.toggle("hidden")}),document.querySelectorAll(".mobile-nav-link").forEach(a=>{a.addEventListener("click",()=>d.classList.add("hidden"))}));const x=document.querySelectorAll(".project-filter-btn"),O=document.querySelectorAll(".project-card");x.forEach(a=>{a.addEventListener("click",()=>{const n=a.getAttribute("data-filter");x.forEach(i=>{i.classList.remove("brutal-btn-primary"),i.classList.add("bg-white")}),a.classList.remove("bg-white"),a.classList.add("brutal-btn-primary"),O.forEach(i=>{const b=i.getAttribute("data-category");n==="all"||b===n?i.classList.remove("hidden"):i.classList.add("hidden")})})});const g=document.getElementById("project-modal-container"),P=a=>{const n=M.find(y=>y.id===a);if(!n||!g)return;g.innerHTML=Y(n),g.classList.remove("hidden"),document.body.style.overflow="hidden";const i=document.getElementById("close-modal-btn"),b=document.getElementById("close-modal-bottom-btn"),p=()=>{g.classList.add("hidden"),g.innerHTML="",document.body.style.overflow="auto"};i&&(i.onclick=p),b&&(b.onclick=p),g.onclick=y=>{y.target===g&&p()}};document.querySelectorAll(".view-project-modal-btn").forEach(a=>{a.addEventListener("click",()=>{const n=a.getAttribute("data-project-id");P(n)})});const E=document.getElementById("terminal-form"),v=document.getElementById("terminal-input"),f=document.getElementById("terminal-output"),T=a=>{if(!f)return;const n=a.trim().toLowerCase(),i=document.createElement("div");i.className="font-bold text-accent-yellow",i.textContent=`navya@portfolio:~$ ${a}`,f.appendChild(i);let b="";if(n==="clear"){f.innerHTML="";return}else C[n]?b=C[n]:n===""?b="":b=`Command not recognized: '${n}'. Type 'help' for available commands.`;if(b){const p=document.createElement("div");p.className=n==="run"?"text-accent-yellow font-bold whitespace-pre-wrap":"text-emerald-300 whitespace-pre-wrap",p.textContent=b,f.appendChild(p)}f.scrollTop=f.scrollHeight};E&&v&&(E.addEventListener("submit",a=>{a.preventDefault(),T(v.value),v.value=""}),v.addEventListener("keydown",()=>R())),document.querySelectorAll(".term-quick-btn").forEach(a=>{a.addEventListener("click",()=>{const n=a.getAttribute("data-cmd");T(n)})}),document.querySelectorAll(".theme-swatch-btn").forEach(a=>{a.addEventListener("click",()=>{const n=a.getAttribute("data-color");document.documentElement.style.setProperty("--theme-accent",n),h(`ACCENT COLOR SWAPPED TO ${n}! 🎨`,"yellow")})});const A=document.getElementById("playground-sound-btn");A&&A.addEventListener("click",()=>{N(),h("AUDIO SYNTH TEST TRIGGERED! 🔊","green")});const I=document.getElementById("copy-email-btn");I&&I.addEventListener("click",()=>{navigator.clipboard.writeText(L.email).then(()=>{h("EMAIL COPIED TO CLIPBOARD! ✉","green")}).catch(()=>{h(`EMAIL: ${L.email}`,"yellow")})});const k=document.getElementById("contact-form");k&&k.addEventListener("submit",a=>{a.preventDefault();const n=document.getElementById("contact-name").value;h(`THANKS ${n.toUpperCase()}! MESSAGE RECEIVED! 🚀`,"green"),k.reset()});const S=document.getElementById("back-to-top-btn");S&&S.addEventListener("click",()=>{window.scrollTo({top:0,behavior:"smooth"})})};document.addEventListener("DOMContentLoaded",()=>{te(),ae()});
