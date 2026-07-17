// Content source of truth: career-ops cv.md + config/profile.yml
// House style: no em-dashes, curly quotes, arrows, or ellipsis anywhere.

const profile = {
  name: "Aniket Kshirsagar",
  role: "Data Analyst",
  location: "New Jersey, USA",
  email: "aniket.kshirsagar.work08@gmail.com",
  linkedin: "https://linkedin.com/in/aniketk99",
  github: "https://github.com/Aniket2399",
  cv: "/Aniket-Kshirsagar-CV.pdf",
  blurb:
    "Data Analyst with 5+ years turning messy financial, healthcare, and retail data into decisions. I work in SQL, Python, Tableau, and Power BI, with depth in fraud and anomaly analysis, ETL, and forecasting.",
  blurb2:
    "Currently at JP Morgan Chase on transaction fraud analytics. I also build and ship end-to-end analytics platforms of my own, and recently started building LLM-based AI agents.",
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
  { value: "18%", label: "demand forecast precision gain" },
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
    name: "Soccer PepStats",
    tagline: "End-to-end football analytics platform",
    image: "/images/pepstats.png",
    caption:
      "Players view: per-player movement heatmap built from 640 touch points, with zone occupation and match filters.",
    stack: "Python, pandas, DuckDB, FastAPI, React/TypeScript",
    live: "https://pep-stats-analytics.vercel.app",
    code: "https://github.com/Aniket2399/Pep_Stats_Analytics",
    bullets: [
      "Transformed ~1.3M raw StatsBomb events into a 12-tab dashboard covering a full La Liga season: 380 matches, 9,168 shots with xG, 546 player-seasons with league-wide percentiles.",
      "Built a Lambda architecture: a batch layer producing an immutable events master plus 3 analytics marts, and a speed layer scraping live data with a 45s TTL cache and last-good fallback.",
      "Unified both layers in DuckDB behind a read-only FastAPI service (11 endpoints), gated by 60+ automated tests with CI/CD on every push.",
    ],
  },
  {
    name: "COURTSIDE",
    tagline: "End-to-end NBA analytics platform",
    image: "/images/courtside.png",
    caption:
      "Players view: shot zone map with real FG% per zone, plus shot selection and efficiency, all derived from play-by-play.",
    stack: "Python, DuckDB, dbt, React/TypeScript",
    live: "https://courtside-nba-analytics.vercel.app",
    code: "https://github.com/Aniket2399/nba-data-analytics",
    bullets: [
      "Turned 2.2 GB of raw basketball data (65K+ games, 13.5M play-by-play events, 77 years of history) into a 6-page interactive dashboard.",
      "Modeled 16 source feeds into 9 analytics-ready marts using a medallion pattern with dbt transformations on DuckDB.",
      "Enforced data quality with automated tests on every transformation and deployed the full system to production.",
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
    role: "Data Analyst",
    place: "New Jersey, USA",
    date: "Sep 2024 to Present",
    bullets: [
      "Analyzed large-scale transaction datasets in SQL to surface suspicious activity across multiple banking channels.",
      "Built anomaly detection logic in Python and tuned rule-based models, improving fraud detection accuracy by 28% and cutting false positives.",
      "Shipped Tableau dashboards for fraud trends and alert volumes, reducing manual investigation effort by 22%.",
      "Used AWS (S3, Redshift, Athena, Glue) for scalable processing, contributing to a 15% cut in fraud-related exposure.",
    ],
  },
  {
    company: "Astoria AI",
    role: "AI Engineer (Part-Time)",
    place: "New York, USA (Remote)",
    date: "Sep 2025 to Feb 2026",
    bullets: [
      "Built and deployed LLM-based AI agents, taking them from prototypes to running services.",
      "Designed a unified dashboard with drag-and-drop agent cards to monitor and operate every agent in one view.",
      "Developed a scheduler-driven recruiting pipeline with OAuth 2.0 secured APIs.",
    ],
  },
  {
    company: "Capgemini",
    role: "Data Analyst",
    place: "India",
    date: "Jan 2022 to Jul 2023",
    bullets: [
      "Automated recurring healthcare reporting in Power BI, cutting manual effort by roughly 28%.",
      "Engineered Azure Data Factory ETL pipelines consolidating disparate healthcare sources into analytics-ready datasets.",
      "Ran patient segmentation and cohort modeling in Python to target higher-risk populations, under PHI governance.",
    ],
  },
  {
    company: "Accenture",
    role: "Data Analyst",
    place: "India",
    date: "Aug 2019 to Dec 2021",
    bullets: [
      "Built time-series demand forecasting models in Python, increasing prediction precision by 18%.",
      "Mined historical sales with SQL to surface seasonal demand, reducing stockouts by 15%.",
      "Delivered Power BI KPI dashboards for inventory turnover, speeding stakeholder decisions by 25%.",
      "Ran A/B tests on replenishment strategies, cutting excess inventory by 12%.",
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
  socials,
};
