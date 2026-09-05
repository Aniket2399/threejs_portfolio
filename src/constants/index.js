// Content source of truth: career-ops cv.md + config/profile.yml
// House style: no em-dashes, curly quotes, arrows, or ellipsis anywhere.

const profile = {
  name: "Aniket Kshirsagar",
  role: "Data Analyst",
  location: "New Jersey, USA",
  email: "aniket.kshirsagar.work08@gmail.com",
  linkedin: "https://linkedin.com/in/aniketk99",
  github: "https://github.com/Aniket2399",
  cv: "/Aniket-Kshirsagar-Resume.pdf",
  blurb:
    "Data Analyst with 5+ years turning messy financial, healthcare, and retail data into decisions. I work in SQL, Python, Tableau, and Power BI, with depth in fraud and anomaly analysis, ETL, and forecasting.",
  blurb2:
    "Currently a Senior Data Analyst at JP Morgan Chase on transaction fraud analytics. I also build and ship end-to-end analytics platforms of my own, and recently started building LLM-based AI agents.",
  summary:
    "Data Analyst with 5+ years helping teams in banking, healthcare, and retail make better decisions from messy data. I start with the real business problem, choose the analysis that fits, and judge my work by whether it changed what someone did, with measurable outcomes: sharper fraud detection, faster reporting, and forecasts accurate enough to reshape planning.",
};

const navLinks = [
  { name: "Projects", link: "#projects" },
  { name: "Experience", link: "#experience" },
  { name: "Skills", link: "#skills" },
  { name: "About", link: "#about" },
];

const metrics = [
  { value: "5+", label: "years in analytics" },
  { value: "28%", label: "fraud detection accuracy gain" },
  { value: "22%", label: "less manual investigation effort" },
  { value: "3", label: "industries: banking, health, retail" },
];

const heroTools = [
  "SQL",
  "Python",
  "pandas",
  "Tableau",
  "Power BI",
  "AWS",
  "Azure",
  "dbt",
  "Spark",
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
    name: "GradEase",
    note: "MERN graduation store with an AI chatbot",
    code: "https://github.com/Aniket2399/Grad-Ease",
  },
];

const experience = [
  {
    company: "JP Morgan Chase",
    role: "Senior Data Analyst",
    place: "New Jersey, USA",
    date: "Mar 2026 to Present",
    bullets: [
      "Traced where fraud detection rules misfired and rebuilt them, lifting accuracy 28% so investigators could focus on the cases that mattered.",
      "Replaced slow manual checks with automated, standardized monitoring across every banking channel, cutting investigation effort 22%.",
      "Surfaced fraud anomalies early through shared dashboards, helping the business cut fraud-related exposure roughly 15% over the year.",
    ],
  },
  {
    company: "Astoria AI",
    role: "Full Stack Developer (Part-Time)",
    place: "New York, USA (Remote)",
    date: "Sep 2025 to Feb 2026",
    bullets: [
      "Took promising AI-agent prototypes to production as reliable services that automate real recruiting workflows end to end.",
      "Built a pipeline that advances candidates automatically with scheduled reminders, removing most manual coordination.",
      "Shipped a single dashboard to monitor and operate every agent, secured behind OAuth-protected APIs.",
    ],
  },
  {
    company: "JPMorgan Chase",
    role: "Data Analyst Intern (Part-Time)",
    place: "New York, USA (Remote)",
    date: "May 2024 to Aug 2024",
    bullets: [
      "Diagnosed slow production reporting queries with execution plans, pinpointing full table scans, inefficient joins, and missing predicates.",
      "Rewrote query logic (subqueries to joins, earlier filters) and added composite and covering indexes, materially cutting runtime and dashboard load times.",
      "Built Tableau dashboards to stakeholder requirements, enabling self-service access that previously required manual SQL pulls.",
    ],
  },
  {
    company: "Capgemini",
    role: "Data Analyst",
    place: "India",
    date: "Jan 2022 to Jul 2023",
    bullets: [
      "Automated healthcare reporting end to end, cutting effort nearly 28% and giving stakeholders numbers they could trust.",
      "Consolidated fragmented source systems with Azure Data Factory into clean, analytics-ready data the enterprise could depend on.",
      "Segmented patients and modeled cohorts in Python to point interventions toward the highest-risk groups first.",
    ],
  },
  {
    company: "Accenture",
    role: "Junior Data Analyst",
    place: "India",
    date: "Aug 2019 to Dec 2021",
    bullets: [
      "Built Tableau charts and dashboards to each requirement, turning raw datasets into clear visuals the team could act on.",
      "Ran careful data validation (nulls, duplicates, stray whitespace) so the data feeding the models started clean and consistent.",
      "Fed that validated data to the Python models the data engineers built, improving how efficiently and accurately they ran.",
    ],
  },
];

const skills = [
  { group: "Languages", items: ["Python", "SQL", "R"] },
  { group: "BI and Viz", items: ["Tableau", "Power BI", "Looker", "Matplotlib", "Seaborn"] },
  { group: "Data", items: ["pandas", "NumPy", "Excel (Advanced)", "Power Query"] },
  { group: "Databases", items: ["MySQL", "PostgreSQL", "SQL Server", "Oracle"] },
  {
    group: "Cloud and Big Data",
    items: ["AWS (S3, Redshift, Athena, Glue)", "Azure", "BigQuery", "PySpark", "Hive"],
  },
  { group: "ETL and Modeling", items: ["Azure Data Factory", "dbt", "DuckDB", "ETL pipelines"] },
  {
    group: "Statistics",
    items: ["Hypothesis testing", "Regression", "A/B testing", "Forecasting"],
  },
  { group: "Other", items: ["Ravelin", "LLM AI agents", "Git", "Jira", "Agile"] },
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
