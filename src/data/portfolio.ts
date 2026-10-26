export interface ImpactMetric {
  value: string;
  label: string;
}

export interface Project {
  number: string;
  category: "Enterprise Data" | "Data Engineering" | "Full Stack & Real-Time";
  icon: "database" | "chart" | "cloud" | "layers" | "message" | "layout" | "bot";
  title: string;
  client?: string;
  description: string;
  architecture?: string;
  impactMetric?: ImpactMetric;
  stack: string[];
  outcome: string;
  href: string;
  demo?: string;
  badge?: string;
  featured?: boolean;
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

export interface Certification {
  name: string;
  issuer: string;
  date?: string;
  note?: string;
}

export const personalInfo = {
  name: "Chandan Pandey",
  role: "SDE 1 (Data Engineering)",
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
    category: "Data Engineering & Lakehouse",
    items: ["Azure Databricks", "Delta Lake", "PySpark", "Azure Data Factory", "ADLS Gen2", "Medallion Architecture", "ETL / ELT"]
  },
  {
    category: "Programming Languages",
    items: ["Python", "SQL", "JavaScript", "TypeScript", "C", "HTML5 & CSS3"]
  },
  {
    category: "Data Analysis & Libraries",
    items: ["Pandas", "NumPy", "PySpark SQL", "Data Validation", "Schema Enforcement", "Query Tuning"]
  },
  {
    category: "Databases & Storage",
    items: ["SQL Server", "Azure SQL Database", "PostgreSQL", "MongoDB", "MySQL", "Delta Tables"]
  },
  {
    category: "Cloud, DevOps & Tooling",
    items: ["Microsoft Azure", "AWS", "Docker", "Git & GitHub", "Linux / Bash", "Postman", "SharePoint APIs"]
  },
  {
    category: "Backend & Systems",
    items: ["Node.js", "Express.js", "REST APIs", "Socket.IO", "JWT & Bcrypt", "Real-Time Streaming"]
  }
];

export const projects: Project[] = [
  {
    number: "01",
    category: "Enterprise Data",
    icon: "database",
    title: "E2E RCA — Global Supply Chain Data Pipeline",
    client: "Procter & Gamble (P&G) × Tranzita Systems",
    description: "Built an enterprise Root Cause Analysis (RCA) pipeline on Azure Databricks to ingest, normalize, and process multi-country supply chain transactions from the Central Data Lake (CDL).",
    architecture: "Central Data Lake (CDL) → Azure Databricks → Delta Lake → Operational Reports",
    impactMetric: {
      value: "24h → <60m",
      label: "Reduction in end-to-end data processing duration"
    },
    stack: ["Azure Databricks", "Python", "Delta Lake", "Azure Blob", "SQL Server"],
    outcome: "Cut multi-country data processing from 24 hours to under an hour, unlocking near-real-time inventory visibility for operational teams across regions.",
    href: "https://github.com/ChandanPandey45",
    badge: "24h → <60min",
    featured: true
  },
  {
    number: "02",
    category: "Enterprise Data",
    icon: "chart",
    title: "Supply Chain Demand Forecasting & Seasonality Engine",
    client: "Procter & Gamble (P&G) × Tranzita Systems",
    description: "Designed a multi-period demand prediction pipeline in Azure Databricks analyzing historical sales volumes, previous-year seasonality, and recent monthly velocity.",
    architecture: "Historical Sales DB → PySpark Aggregations → Databricks Models → Planning Lake",
    impactMetric: {
      value: "Multi-Period",
      label: "Granular forecasting across retail product lines"
    },
    stack: ["Python", "Azure Databricks", "Pandas", "PySpark", "SQL"],
    outcome: "Generated reliable forward demand projections to guide data-driven supply planning, inventory allocation, and order scheduling.",
    href: "https://github.com/ChandanPandey45",
    badge: "P&G Supply Chain",
    featured: true
  },
  {
    number: "03",
    category: "Enterprise Data",
    icon: "cloud",
    title: "Online Availability RCA — Automated Ingestion & Alerting",
    client: "Procter & Gamble (P&G) × Tranzita Systems",
    description: "Automated ingestion pipeline extracting order histories and live inventory records from SharePoint, REST endpoints, and ADLS into structured Delta Lake tables.",
    architecture: "SharePoint & REST APIs → ADLS Gen2 → Databricks Bronze/Silver → Delta Lake",
    impactMetric: {
      value: "-15%",
      label: "Reduction in stockout incidents via automated anomaly alerts"
    },
    stack: ["Databricks", "Python", "ADLS Gen2", "Delta Lake", "REST APIs"],
    outcome: "Enabled proactive stockout detection through automated validation and immediate stakeholder notifications, decreasing inventory disruptions by 15%.",
    href: "https://github.com/ChandanPandey45",
    badge: "-15% Stockouts",
    featured: true
  },
  {
    number: "04",
    category: "Data Engineering",
    icon: "database",
    title: "Supply Chain Agility & Data Transformation Layer",
    client: "Procter & Gamble (P&G) × Tranzita Systems",
    description: "Scalable ETL pipeline components on Azure Databricks transforming high-volume transactional data from SQL Server databases and flat files into clean analytical views.",
    architecture: "SQL Server & Files → Azure Data Factory → Databricks PySpark → Curated Views",
    impactMetric: {
      value: "-40%",
      label: "Drop in query latency and data refresh time"
    },
    stack: ["Python", "Azure Databricks", "PySpark", "SQL", "Delta Lake"],
    outcome: "Streamlined data refresh cycles, eliminated transformation bottlenecks, and accelerated reporting speeds by 40%.",
    href: "https://github.com/ChandanPandey45",
    badge: "-40% Latency"
  },
  {
    number: "05",
    category: "Full Stack & Real-Time",
    icon: "message",
    title: "Real-Time Operational Messaging & Data Streamer",
    description: "High-throughput real-time messaging and operational event streaming application built with Node.js and Socket.IO, pushing live metrics to monitoring dashboards.",
    impactMetric: {
      value: "500+",
      label: "Concurrent active socket connections with JWT security"
    },
    stack: ["React", "Node.js", "Express", "Socket.IO", "MongoDB", "JWT"],
    outcome: "Engineered scalable socket handlers supporting over 500 simultaneous users, reducing operational reporting delay by 30%.",
    href: "https://github.com/ChandanPandey45/ChatApp"
  },
  {
    number: "06",
    category: "Full Stack & Real-Time",
    icon: "bot",
    title: "Conversational AI Assistant with Streaming Responses",
    description: "Interactive chatbot application leveraging Google Gemini API to process and answer user technical queries with markdown rendering and low-latency token streaming.",
    impactMetric: {
      value: "Live Demo",
      label: "Deployed on Render with responsive streaming"
    },
    stack: ["Next.js", "JavaScript", "Google Gemini API", "Framer Motion"],
    outcome: "Deployed live on Render with fluid real-time responses and contextual message history.",
    href: "https://github.com/ChandanPandey45/ChatBot",
    demo: "https://chatbot-gemini-whf6.onrender.com/"
  }
];

export const experience: ExperienceItem[] = [
  {
    role: "Software Development Engineer 1, Data Engineering",
    company: "Tranzita Systems",
    collaboration: "Procter & Gamble (P&G) Collaboration",
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
