export interface Project {
  number: string;
  category: "Enterprise Data" | "Data Engineering" | "Cloud & Data" | "Full Stack & Real-Time";
  icon: "database" | "chart" | "cloud" | "layers" | "message" | "layout" | "bot";
  title: string;
  description: string;
  stack: string[];
  outcome: string;
  href: string;
  demo?: string;
  badge?: string;
}

export interface ExperienceItem {
  role: string;
  company: string;
  period: string;
  location?: string;
  collaboration?: string;
  details: string[];
}

export interface EducationItem {
  degree: string;
  institution: string;
  period: string;
  location: string;
  grade?: string;
}

export const personalInfo = {
  name: "Chandan Pandey",
  role: "Data Engineering Professional × SDE 1",
  email: "info.contactchandan@gmail.com",
  phone: "+91 7651856853",
  location: "Lucknow, U.P., India",
  github: "https://github.com/ChandanPandey45",
  linkedin: "https://www.linkedin.com/in/chandan-pandey-043771251/",
  resumeUrl: "/resume.pdf",
  resumeDriveUrl: "https://drive.google.com/file/d/1sik2cABAKJ9Vwq301J6_ZlQyqsqEyc7b/view?usp=sharing"
};

export const skills = [
  {
    category: "Languages & Frameworks",
    items: ["Python", "SQL", "PySpark", "Pandas", "NumPy", "JavaScript", "Node.js"]
  },
  {
    category: "Data Engineering",
    items: ["Azure Databricks", "Azure Data Factory", "Delta Lake", "ADLS", "ETL / ELT Pipelines", "Medallion Architecture"]
  },
  {
    category: "Databases & Storage",
    items: ["SQL Server", "Azure SQL Database", "PostgreSQL", "MySQL", "MongoDB", "Delta Lake"]
  },
  {
    category: "Cloud & DevOps",
    items: ["Microsoft Azure", "AWS", "Docker", "Git & GitHub", "Linux", "SharePoint APIs"]
  },
  {
    category: "Data Concepts & Formats",
    items: ["Data Modeling", "Schema Design", "Query Optimization", "ACID Transactions", "Parquet / CSV / JSON", "Data Validation"]
  },
  {
    category: "Backend & Systems",
    items: ["REST APIs", "Socket.IO", "Express.js", "Real-Time Streaming", "System Reliability"]
  }
];

export const projects: Project[] = [
  {
    number: "01",
    category: "Enterprise Data",
    icon: "chart",
    title: "Supply Chain Demand Forecasting & Prediction",
    description: "Enterprise forecasting pipeline leveraging historical sales data, previous-year seasonality, and monthly sales trends to predict product demand for supply chain operations.",
    stack: ["Python", "Azure Databricks", "SQL", "Pandas"],
    outcome: "Built demand pattern recognition across multi-period sales to guide proactive P&G inventory replenishment and planning.",
    href: "https://github.com/ChandanPandey45",
    badge: "P&G Collaboration"
  },
  {
    number: "02",
    category: "Enterprise Data",
    icon: "database",
    title: "E2E RCA — Global Supply Chain Pipeline",
    description: "Global Root Cause Analysis (RCA) pipeline deployed on Azure Databricks, processing multi-country supply chain transactions from Central Data Lake (CDL) at enterprise scale.",
    stack: ["Azure Databricks", "Python", "Azure Blob Storage", "SQL"],
    outcome: "Reduced end-to-end data processing duration from 24 hours to under 60 minutes, delivering near-real-time inventory visibility.",
    href: "https://github.com/ChandanPandey45",
    badge: "24h → <60min"
  },
  {
    number: "03",
    category: "Enterprise Data",
    icon: "cloud",
    title: "Online Availability RCA — Inventory Ingestion Pipeline",
    description: "Automated Databricks ingestion workflow extracting inventory records and order histories from SharePoint, REST APIs, and ADLS into Delta Lake with automated alerts.",
    stack: ["Databricks", "Python", "ADLS", "Delta Lake", "REST APIs"],
    outcome: "Automated real-time anomaly detection and inventory stakeholder alerting, contributing to a 15% reduction in stockouts.",
    href: "https://github.com/ChandanPandey45",
    badge: "-15% Stockouts"
  },
  {
    number: "04",
    category: "Data Engineering",
    icon: "database",
    title: "Supply Chain Agility & Data Connectivity",
    description: "End-to-end scalable ETL pipeline components on Azure Databricks ingesting and structuring high-volume supply chain and consumer behavior data from SQL databases and flat files.",
    stack: ["Python", "Azure Databricks", "SQL", "Delta Lake"],
    outcome: "Streamlined data refresh pipelines and cut end-to-end processing latency by 40% for operational teams.",
    href: "https://github.com/ChandanPandey45",
    badge: "-40% Latency"
  },
  {
    number: "05",
    category: "Full Stack & Real-Time",
    icon: "message",
    title: "Scalable Real-Time Data Streaming & Chat System",
    description: "High-throughput operational messaging and data streaming system using Node.js and Socket.IO, delivering real-time metrics to monitoring dashboards.",
    stack: ["React", "Node.js", "Express", "Socket.IO", "MongoDB"],
    outcome: "Engineered for 500+ concurrent connections, reducing dashboard reporting latency by 30%.",
    href: "https://github.com/ChandanPandey45/ChatApp"
  },
  {
    number: "06",
    category: "Full Stack & Real-Time",
    icon: "bot",
    title: "AI ChatBot Assistant",
    description: "Conversational AI assistant built with Google Gemini API, handling contextual queries with streaming markdown responses.",
    stack: ["Next.js", "JavaScript", "Google Gemini API", "Framer Motion"],
    outcome: "Deployed live on Render with low-latency streaming inference and an interactive interface.",
    href: "https://github.com/ChandanPandey45/ChatBot",
    demo: "https://chatbot-gemini-whf6.onrender.com/"
  }
];

export const experience: ExperienceItem[] = [
  {
    role: "Software Development Engineer 1, Data Engineering",
    company: "Tranzita Systems",
    collaboration: "P&G (Procter & Gamble) Collaboration",
    period: "April 2025 – Present",
    location: "Lucknow, U.P.",
    details: [
      "Worked on enterprise data engineering projects for P&G (Procter & Gamble), developing backend pipeline layers, SQL transformation logic, ingestion workflows, and data processing components across supply chain, inventory, and e-commerce domains.",
      "Built and optimized scalable REST APIs for high-volume structured data requests, reducing data latency by 25% for 1,000+ users through SQL query and response optimization.",
      "Developed real-time data streaming workflows using Node.js and Socket.IO to deliver operational data to monitoring dashboards, reducing reporting lag by 30%."
    ]
  },
  {
    role: "Software Developer Intern",
    company: "Predulive Edutech Foundation",
    period: "June 2023 – January 2024",
    location: "Lucknow, U.P.",
    details: [
      "Optimized MongoDB queries and indexing strategies across 5,000+ listings, reducing average query execution time by 35%.",
      "Designed backend APIs for an admin reporting platform managing 10,000+ user records, improving operational data visibility by 40%."
    ]
  }
];

export const education: EducationItem[] = [
  {
    degree: "Bachelor of Technology in Computer Science and Engineering",
    institution: "KIPM College of Engineering and Technology",
    period: "2021 – 2025",
    location: "Gorakhpur, U.P.",
    grade: "CGPA: 7.5 / 10"
  }
];

export interface Certification {
  name: string;
  issuer: string;
  date?: string;
  note?: string;
}

export const certifications: Certification[] = [
  {
    name: "Google Data Analytics Professional Certificate",
    issuer: "Google / Coursera",
    date: "March 2024",
    note: "Data cleaning, analysis, SQL, R, and Tableau"
  },
  {
    name: "Google Cybersecurity Professional Certificate",
    issuer: "Google / Coursera",
    date: "March 2024",
    note: "Network security, Linux, Python, and SIEM tools"
  },
  {
    name: "Azure Databricks & Spark for Data Engineers",
    issuer: "Databricks & Spark Specialization",
    date: "2024",
    note: "PySpark transformations, Delta Lake, Lakehouse architectures"
  }
];
