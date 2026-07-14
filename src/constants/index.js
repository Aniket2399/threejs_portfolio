const navLinks = [
  {
    name: "About Me",
    link: "#about",
  },

  {
    name: "Projects",
    link: "#projects",
  },
  {
    name: "Experience",
    link: "#experience",
  },
  {
    name: "Skills",
    link: "#skills",
  },

];

const words = [
  { text: "Data", imgPath: "/images/code.svg" },
  { text: "Insights", imgPath: "/images/ideas.svg" },
  { text: "Signals", imgPath: "/images/concepts.svg" },
  { text: "Dashboards", imgPath: "/images/designs.svg" },
  { text: "Data", imgPath: "/images/code.svg" },
  { text: "Insights", imgPath: "/images/ideas.svg" },
  { text: "Signals", imgPath: "/images/concepts.svg" },
  { text: "Dashboards", imgPath: "/images/designs.svg" },
];

const counterItems = [
  { value: 5, suffix: "+", label: "Years in Analytics" },
  { value: 3, suffix: "", label: "Industries: Banking, Health, Retail" },
  { value: 28, suffix: "%", label: "Fraud Detection Accuracy Gain" },
  { value: 18, suffix: "%", label: "Demand Forecast Precision Gain" },
];

const logoIconsList = [
  {
    imgPath: "/images/logos/power-bi.png",
  },
  {
    imgPath: "/images/logos/tableau-logo-1.svg",
  },
  {
    imgPath: "/images/logos/python.svg",
  },
  {
    imgPath: "/images/logos/microsoft-azure-2.svg",
  },
  {
    imgPath: "/images/logos/google-analytics-2.svg",
  },
  {
    imgPath: "/images/logos/react.png",
  },
  {
    imgPath: "/images/logos/docker.png",
  },
  {
    imgPath: "/images/logos/git.svg",
  },
];

const abilities = [
  {
    imgPath: "/images/seo.png",
    title: "Decisions, Not Just Charts",
    desc: "Turning raw data into answers stakeholders can act on the same day.",
  },
  {
    imgPath: "/images/chat.png",
    title: "Cross-Domain Range",
    desc: "Fluent across banking fraud, healthcare, and retail forecasting.",
  },
  {
    imgPath: "/images/time.png",
    title: "Trustworthy Data",
    desc: "Data quality, validation, and governance built into every pipeline.",
  },
];

const techStackImgs = [
  {
    name: "Python & Pandas",
    imgPath: "/images/logos/python.svg",
  },
  {
    name: "Tableau",
    imgPath: "/images/logos/tableau-logo-1.svg",
  },
  {
    name: "Power BI",
    imgPath: "/images/logos/power-bi.png",
  },
  {
    name: "AWS Data Stack",
    imgPath: "/images/logos/react.png",
  },
  {
    name: "Azure Data Factory",
    imgPath: "/images/logos/microsoft-azure-2.svg",
  },
];

const techStackIcons = [
  {
    name: "Python & Pandas",
    modelPath: "/models/python-transformed.glb",
    scale: 0.8,
    rotation: [0, 0, 0],
  },
  {
    name: "AWS Data Stack",
    modelPath: "/models/aws_logo.glb",
    scale: 0.3,
    rotation: [0, -Math.PI / 4, 0],
  },
  {
    name: "React Dashboards",
    modelPath: "/models/react_logo-transformed.glb",
    scale: 1,
    rotation: [0, 0, 0],
  },
  {
    name: "Interactive Data Viz",
    modelPath: "/models/three.js-transformed.glb",
    scale: 0.05,
    rotation: [0, 0, 0],
  },
  {
    name: "Git & GitHub",
    modelPath: "/models/git-svg-transformed.glb",
    scale: 0.05,
    rotation: [0, -Math.PI / 4, 0],
  },
];

const expCards = [
  {
    review: "Aniket pairs deep SQL and Python skills with a sharp eye for fraud patterns, turning noisy transaction data into decisions the risk team can trust.",
    imgPath: "/images/exp1.png",
    logoPath: "/images/jpmc.svg",
    title: "Data Analyst, JP Morgan Chase",
    date: "September 2024 - Present",
    responsibilities: [
      "Analyzed large-scale financial transaction data in SQL to surface suspicious activity across banking channels.",
      "Built Python anomaly-detection logic, improving fraud detection accuracy by 28% and cutting false positives.",
      "Shipped Tableau dashboards for fraud trends, reducing manual investigation effort by 22%.",
    ],
  },
  {
    review: "Aniket took our AI agents from experiments to production, and built the dashboard our whole team now uses to run them.",
    imgPath: "/images/exp2.png",
    logoPath: "/images/astoria.svg",
    title: "AI Engineer, Astoria AI",
    date: "September 2025 - February 2026",
    responsibilities: [
      "Built and deployed LLM-based AI agents, taking them from prototypes to running services.",
      "Designed a unified agent dashboard with drag-and-drop cards to monitor and operate every agent.",
      "Developed a scheduler-driven recruiting pipeline with OAuth 2.0-secured APIs.",
    ],
  },
  {
    review: "Aniket automated our healthcare reporting and rebuilt the ETL behind it, saving the team days of manual work every cycle.",
    imgPath: "/images/exp3.png",
    logoPath: "/images/capgemini.svg",
    title: "Data Analyst, Capgemini",
    date: "January 2022 - July 2023",
    responsibilities: [
      "Automated recurring healthcare reporting in Power BI, cutting manual effort by ~28%.",
      "Engineered Azure Data Factory ETL pipelines into analytics-ready datasets under PHI governance.",
      "Built Tableau dashboards and Python cohort models to guide higher-risk patient interventions.",
    ],
  },
];

const expLogos = [
  {
    name: "logo1",
    imgPath: "/images/jpmc.svg",
  },
  {
    name: "logo2",
    imgPath: "/images/astoria.svg",
  },
  {
    name: "logo3",
    imgPath: "/images/capgemini.svg",
  },
];

const socialImgs = [
  {
    name: "linkedin",
    imgPath: "/images/linkedin.png",
    url: "https://linkedin.com/in/aniketk99",
  },
  {
    name: "github",
    imgPath: "/images/github.svg",
    url: "https://github.com/Aniket2399",
  },
];

const workExperiences = [
  {
    id: 1,
    name: 'JP Morgan Chase - NJ, USA',
    pos: 'Data Analyst',
    duration: 'Sep 2024 - Present',
    icon: '/images/jpmc.svg',
    responsibilities: [
      "Analyzed large-scale financial transaction data in SQL to surface suspicious activity and support enterprise fraud monitoring.",
      "Built Python anomaly-detection logic and tuned rule-based models, improving fraud detection accuracy by 28% while cutting false positives.",
      "Shipped interactive Tableau dashboards for fraud trends and alert volumes, reducing manual investigation effort by 22%.",
    ],
    animation: 'rally',
  },
  {
    id: 2,
    name: 'Astoria AI - NY, USA (Remote)',
    pos: 'AI Engineer (Part-Time)',
    duration: 'Sep 2025 - Feb 2026',
    icon: '/images/astoria.svg',
    responsibilities: [
      "Built and deployed LLM-based AI agents, taking them from prototypes to running, usable services.",
      "Designed a unified dashboard with drag-and-drop agent cards to monitor and operate all agents in one view.",
      "Developed an automated, scheduler-driven candidate-recruiting pipeline with OAuth 2.0-secured APIs.",
    ],
    icon2: '/images/astoria.svg',
    animation: 'salute',
  },
  {
    id: 3,
    name: 'Capgemini - India',
    pos: 'Data Analyst',
    duration: 'Jan 2022 - July 2023',
    responsibilities: [
      "Automated recurring healthcare reporting in Power BI, cutting manual effort by ~28% and improving delivery consistency.",
      "Engineered Azure Data Factory ETL pipelines consolidating disparate healthcare sources into analytics-ready datasets.",
      "Built Tableau dashboards and Python cohort models for patient engagement under PHI governance.",
    ],
    icon: '/images/capgemini.svg',
    animation: 'fist',
  },
  {
    id: 4,
    name: 'Accenture - India',
    pos: 'Data Analyst',
    duration: 'Aug 2019 - Dec 2021',
    icon: '/images/accenture.svg',
    responsibilities: [
      "Built Python time-series demand-forecasting models, increasing prediction precision by 18% and improving inventory planning.",
      "Mined historical sales with SQL to surface seasonal demand, reducing stockouts by 15%.",
      "Delivered Power BI KPI dashboards for inventory turnover and replenishment, speeding stakeholder decisions by 25%.",
    ],
    animation: 'rally',
  },
];

export {
  words,
  abilities,
  logoIconsList,
  counterItems,
  expCards,
  expLogos,
  socialImgs,
  techStackIcons,
  techStackImgs,
  navLinks,
  workExperiences,
};
