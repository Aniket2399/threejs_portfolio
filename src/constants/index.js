// Content source of truth: career-ops cv.md + config/profile.yml
// House style: no em-dashes, curly quotes, arrows, or ellipsis anywhere.

const profile = {
  name: "Aniket Kshirsagar",
  role: "Full Stack Developer",
  location: "New Jersey, USA",
  email: "aniket.kshirsagar.work08@gmail.com",
  linkedin: "https://linkedin.com/in/aniketk99",
  github: "https://github.com/Aniket2399",
  cv: "/Aniket-Kshirsagar-Resume.pdf",
  blurb:
    "I have always liked taking things apart to see how they work, then putting them back together like Lego. These days I do it with software: pulling messy problems into pieces and rebuilding them into something people can actually use. When I am not, I am probably watching or playing football or basketball.",
  blurb2: "",
  summary:
    "Full-stack developer with an MS in Computer Science and 5+ years building web applications end to end, with React, Next.js, and TypeScript front ends over Python and Node.js services and REST APIs. I ship clean, well-tested code backed by automated tests, monitoring, and code review, from a founding engineering role at Astoria AI to production systems at scale at JP Morgan Chase. I work daily with AI coding tools, have built LLM-powered and voice-agent features, and care about turning messy data and unpredictable model output into fast, reliable, polished products.",
};

const navLinks = [
  { name: "Projects", link: "#projects" },
  { name: "Experience", link: "#experience" },
  { name: "Skills", link: "#skills" },
  { name: "My Journey", link: "#about" },
  { name: "Blog", link: "#blog" },
];

const metrics = [
  { value: "5+", label: "years across data and dev" },
  { value: "28%", label: "fraud detection accuracy gain" },
  { value: "4", label: "apps and AI agents shipped to production" },
  { value: "15M+", label: "data events modeled across platforms" },
];

const heroTools = [
  "SQL",
  "Python",
  "Tableau",
  "Power BI",
  "AWS",
  "React",
  "TypeScript",
  "Next.js",
  "FastAPI",
  "LLM Agents",
];

const featuredProjects = [
  {
    name: "SelfPrep",
    slug: "selfprep",
    tagline: "AI voice-agent interview practice platform",
    insight: "Voice-driven mock interviews with real-time, personalized AI feedback.",
    stack: "Next.js, TypeScript, Firebase, Vapi AI, Google Gemini, Tailwind",
    live: "https://selfprep-ai.vercel.app",
    code: "https://github.com/Aniket2399/selfprep_ai",
    description: [
      "SelfPrep is a job-interview practice platform powered by Vapi AI voice agents. A candidate picks a role, interview type, level, and question count, and the app generates a custom interview and runs it as a natural spoken conversation, no typing required.",
      "During the session the agent asks questions, transcribes each answer in real time, and adapts its follow-ups based on what the candidate says. Google Gemini drives both the question generation and the post-interview evaluation, while Firebase handles authentication and stores every session.",
      "When the interview ends, SelfPrep scores the candidate across technical knowledge, communication, confidence, and problem-solving, and returns a structured feedback report. Built with Next.js, TypeScript, Tailwind, and shadcn/ui, and deployed on Vercel.",
    ],
    bullets: [
      "End-to-end voice interview flow: preference collection, custom question generation, and a spoken Q&A loop with real-time transcription and adaptive follow-ups.",
      "Google Gemini generates role-specific questions and a structured post-interview evaluation across technical, communication, confidence, and problem-solving.",
      "Next.js and Firebase (auth and storage), Vapi AI voice agents, Tailwind and shadcn/ui, deployed on Vercel.",
    ],
    shots: [
      { src: "/images/selfprep-dashboard.jpg", cap: "Dashboard: your interview library, with role-specific interviews to take and past results." },
      { src: "/images/selfprep-interview.jpg", cap: "Live voice interview: the AI interviewer and candidate, with the response transcribed in real time." },
      { src: "/images/selfprep-feedback.jpg", cap: "AI feedback: scored across communication, technical knowledge, problem-solving, and confidence, with strengths and areas to improve." },
      { src: "/images/selfprep-flow.jpg", cap: "System design: data collection and preparation, the interview process, and evaluation and reporting." },
    ],
  },
  {
    name: "Soccer PepStats",
    slug: "soccer-pepstats",
    tagline: "End-to-end football analytics platform",
    insight: "1.3M raw match events turned into a live scouting dashboard.",
    stack: "Python, pandas, DuckDB, FastAPI, React/TypeScript",
    live: "https://pep-stats-analytics.vercel.app",
    code: "https://github.com/Aniket2399/Pep_Stats_Analytics",
    description: [
      "PepStats is an end-to-end football analytics platform built on a Lambda architecture. A batch layer ingests, cleans, and models roughly 1.3M StatsBomb events from a full La Liga 2015/16 season into an immutable events master plus three analytics marts. A speed layer scrapes live data with a 45s TTL cache and a last-good fallback, so the dashboard stays responsive even when a source is down.",
      "Both layers are unified in a single DuckDB store exposed through a read-only FastAPI service with 11 endpoints and OpenAPI docs. The frontend is React 18, TypeScript, and Vite, with every chart hand-rolled in pure SVG (no charting library) for full control over the visuals.",
      "The whole pipeline is gated by 60+ automated tests (pytest, Vitest). The API is Dockerized on Render, the frontend deploys to Vercel with per-PR previews, and GitHub Actions runs CI on every push. A live World Cup 2026 mode reuses the same speed layer.",
    ],
    bullets: [
      "1.3M StatsBomb events, a full La Liga season: 380 matches, 9,168 shots with xG, 546 player-seasons with league-wide percentiles.",
      "Lambda architecture: immutable batch layer plus a resilient speed layer with a 45s TTL cache and last-good fallback.",
      "DuckDB behind a read-only FastAPI service (11 endpoints), 60+ automated tests, Dockerized with CI/CD on every push.",
    ],
    shots: [
      { src: "/images/pepstats-overview.png", cap: "Team overview: possession, shot outcomes, and top scorers." },
      { src: "/images/pepstats-heatmap.png", cap: "Player movement heatmap from 640 touch points, with zone occupation." },
      { src: "/images/pepstats-setpieces.png", cap: "Set pieces: goal-type breakdown and goals by match interval." },
      { src: "/images/pepstats-trends.png", cap: "Trends: goals, xG, possession, and points by matchweek." },
    ],
  },
  {
    name: "COURTSIDE",
    slug: "courtside",
    tagline: "End-to-end NBA analytics platform",
    insight: "2.2GB of play-by-play modeled with dbt into an interactive dashboard.",
    stack: "Python, DuckDB, dbt, React/TypeScript",
    live: "https://courtside-nba-analytics.vercel.app",
    code: "https://github.com/Aniket2399/nba-data-analytics",
    description: [
      "COURTSIDE is an end-to-end NBA analytics platform that turns 2.2 GB of raw basketball data (65K+ games, 13.5M play-by-play events, 77 years of history) into a six-page interactive dashboard with advanced metrics and custom visualizations.",
      "Sixteen source feeds are modeled into nine analytics-ready marts using a medallion pattern: Python and DuckDB handle ingestion, and dbt runs the modular transformations. The React 18 and TypeScript dashboard renders custom Scatter, Radar, Donut, and Area charts with no charting library.",
      "Data quality is enforced with automated tests on every transformation, and the full system is deployed to production. Shot zones, player shot profiles, team ratings, and head-to-head comparisons are all derived directly from play-by-play.",
    ],
    bullets: [
      "2.2 GB of raw data (65K+ games, 13.5M play-by-play events, 77 years) into a 6-page interactive dashboard.",
      "16 source feeds modeled into 9 analytics-ready marts with a dbt medallion pattern on DuckDB.",
      "Custom Scatter, Radar, Donut, and Area charts with no charting library; automated tests on every transformation.",
    ],
    shots: [
      { src: "/images/courtside-league.png", cap: "League overview: pace, shot mix, and net-rating leaders." },
      { src: "/images/courtside-shotmap.png", cap: "Player shot-zone map with real FG% per zone, plus shot selection and efficiency." },
      { src: "/images/courtside-teams.png", cap: "Team stats: ratings, point differential, and shot distribution." },
      { src: "/images/courtside-compare.png", cap: "Compare players: radar overlay and head-to-head table." },
    ],
  },
];

const otherProjects = [
  {
    name: "Flutter Spotify Clone",
    tech: "Flutter, Dart, Firebase",
    note: "Cross-platform music app with streaming, playlist management, and auth.",
    code: "https://github.com/Aniket2399/flutter_spotify_clone",
  },
  {
    name: "Flutter Chat App",
    tech: "Flutter, Dart, Firebase",
    note: "Real-time messaging app with Firebase email auth and cloud storage.",
    code: "https://github.com/Aniket2399/chat_app",
  },
  {
    name: "React Native Mini-Apps",
    tech: "React Native, TypeScript, Expo",
    note: "Mobile labs and mini-apps: chat, media library, tab navigation, Clerk auth.",
    code: "https://github.com/Aniket2399/CS641",
  },
  {
    name: "Budgetify",
    tech: "React, Node.js, PostgreSQL",
    note: "Full-stack personal budgeting app with JWT and Firebase social sign-in.",
    code: "https://github.com/Aniket2399/Budgetify-",
  },
  {
    name: "React Movie App",
    tech: "React, Vite",
    note: "Movie browser over an external API with a responsive, filterable UI.",
    code: "https://github.com/Aniket2399/React_movie_app",
  },
  {
    name: "SQL Data Warehouse",
    tech: "SQL Server, T-SQL",
    note: "Modern data warehouse with ETL processes, data modeling, and analytics.",
    code: "https://github.com/Aniket2399/sql-data-warehouse-project",
  },
  {
    name: "GradEase",
    tech: "React, Node.js, MongoDB",
    note: "MERN graduation store with JWT auth, an admin panel, and an AI chatbot.",
    code: "https://github.com/Aniket2399/Grad-Ease",
  },
];

const experience = [
  {
    company: "JP Morgan Chase",
    role: "Full Stack Developer",
    place: "New Jersey, USA",
    date: "Mar 2026 to Present",
    bullets: [
      "Build and operate back-end services and tools over large-scale financial data in Python and SQL, with the monitoring and testing that keep them reliable in a regulated production environment.",
      "Rebuilt fraud-detection logic to improve accuracy 28% and automated workflows that cut manual effort 22%, owning each outcome end to end.",
      "Shipped custom React dashboards that surface fraud trends early, helping the business cut fraud-related exposure roughly 15% over the year.",
    ],
  },
  {
    company: "Astoria AI",
    role: "Founding Full Stack Engineer (GenAI)",
    place: "New York, USA (Remote)",
    date: "Sep 2025 to Feb 2026",
    bullets: [
      "Built full-stack features end to end with React and TypeScript front ends over Python and Node.js services and REST APIs, taking AI-agent prototypes all the way to reliable production.",
      "Built LLM-powered, agent-driven features around unpredictable, streaming model output, backed by automated tests, logging, monitoring, and alerting.",
      "Shipped a single dashboard to operate every agent behind OAuth-protected APIs, handling async, event-driven work on the backend.",
    ],
  },
  {
    company: "JPMorgan Chase",
    role: "Data Analyst Intern",
    place: "New York, USA (Remote)",
    date: "May 2024 to Aug 2024",
    bullets: [
      "Profiled slow production SQL with execution plans, pinpointing full table scans, inefficient joins, and missing predicates.",
      "Rewrote query logic (subqueries to joins, earlier filters) and added composite and covering indexes, materially cutting runtime and dashboard load times.",
      "Built Tableau dashboards to stakeholder requirements, enabling self-service access that previously required manual SQL pulls.",
    ],
  },
  {
    company: "Capgemini",
    role: "Frontend Developer",
    place: "India",
    date: "Jan 2022 to Jul 2023",
    bullets: [
      "Built and optimized React dashboards and front-end views for enterprise reporting, turning fragmented data into clean, responsive interfaces.",
      "Wrote Selenium UI test automation to keep the front end reliable across releases, and automated recurring workflows in Python to cut manual effort nearly 28%.",
      "Partnered with stakeholders to ship consistent, trustworthy views they could act on without re-checking the numbers by hand.",
    ],
  },
  {
    company: "Accenture",
    role: "Web Developer",
    place: "India",
    date: "Aug 2019 to Dec 2021",
    bullets: [
      "Built dashboards and web views to each requirement, turning raw datasets into clear, readable interfaces the whole team could act on.",
      "Ran careful data validation (nulls, duplicates, stray whitespace) so the data behind every view started clean, consistent, and trustworthy.",
      "Fed that validated data to the Python models the data engineers built, improving how efficiently and accurately they ran.",
    ],
  },
];

const skills = [
  { group: "Languages", items: ["Python", "JavaScript", "TypeScript", "Java", "C++", "Node.js", "SQL"] },
  {
    group: "Frontend",
    items: ["React", "Next.js", "Redux", "TailwindCSS", "shadcn/ui", "React Native", "Flutter", "Responsive UI"],
  },
  {
    group: "Backend and APIs",
    items: ["REST APIs", "FastAPI", "Node.js and Express", "PostgreSQL", "MongoDB", "Event-Driven (Kafka)", "System Design"],
  },
  {
    group: "Auth and Cloud",
    items: ["OAuth", "JWT", "Firebase Auth", "AWS (S3, Glue, Redshift, Athena)", "Docker", "CI/CD (GitHub Actions)"],
  },
  {
    group: "Practices",
    items: ["Automated Testing", "Monitoring and Observability", "Code Review", "Git", "Agile", "Documentation"],
  },
  {
    group: "AI",
    items: ["LLM-Powered Features", "AI Coding Tools (Claude Code)", "Vapi Voice Agents", "RAG", "NLP"],
  },
  {
    group: "CS Fundamentals",
    items: ["Data Structures and Algorithms", "OOP", "System Design"],
  },
];

const education = [
  {
    school: "Pace University, New York",
    degree: "MS, Computer Science",
    date: "May 2025",
    note: "GPA 3.5/4",
  },
  {
    school: "Savitribai Phule University, Pune",
    degree: "BS, Computer Science",
    date: "Aug 2021",
    note: "GPA 3.4/4",
  },
];

const certifications = [
  "INSPIRE (International Student Professional Readiness Education) Program Certification, Pace University, Nov 2024",
];

const achievements = [
  "Held robotics leadership roles across all three years of the Bachelor's program: Technical Coordinator of the robotics team, then Technical Head of robotics events, then Head of the robotics event.",
  "State-level under-18 soccer player.",
  "Represented the college soccer team in inter-college tournaments, and played for the Computer department in the inter-department tournament, reaching the final.",
];

const socials = [
  { name: "GitHub", url: "https://github.com/Aniket2399" },
  { name: "LinkedIn", url: "https://linkedin.com/in/aniketk99" },
];

export {
  profile,
  navLinks,
  metrics,
  heroTools,
  featuredProjects,
  otherProjects,
  experience,
  skills,
  education,
  certifications,
  achievements,
  socials,
};
