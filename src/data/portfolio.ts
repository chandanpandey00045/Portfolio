export const skills = [
  { category: "Frontend", items: ["React", "Next.js", "TypeScript", "Tailwind CSS"] },
  { category: "Backend", items: ["Node.js", "Express.js", "REST APIs", "JWT", "Socket.IO"] },
  { category: "Data Engineering", items: ["Python", "SQL", "PySpark", "ETL / ELT", "Data quality"] },
  { category: "Cloud & DevOps", items: ["Azure", "Databricks", "Docker", "GitHub Actions", "Vercel"] },
  { category: "Databases", items: ["MySQL", "PostgreSQL", "MongoDB", "Firebase", "Delta Lake"] }
];

export const projects = [
  { number: "01", category: "Data Engineering", icon: "database", title: "Retail Data Pipeline", description: "A workflow for ingesting, transforming, validating and publishing retail data for downstream reporting.", stack: ["Python", "PySpark", "Databricks", "Delta Lake"], outcome: "[Add verified impact metric or actual validation logic]", href: "https://github.com/ChandanPandey45" },
  { number: "02", category: "Data & ML", icon: "chart", title: "Grain Price Forecasting", description: "An exploratory project for preparing historical grain prices and evaluating time-series forecasting approaches.", stack: ["Python", "Pandas", "SQL", "Machine Learning"], outcome: "[Add dataset source, evaluation method and measured result]", href: "https://github.com/ChandanPandey45" },
  { number: "03", category: "Cloud & Data", icon: "cloud", title: "Azure Data Platform", description: "A cloud architecture for ingestion, transformation, storage and monitoring across data workloads.", stack: ["Azure", "Data Factory", "Databricks", "SQL"], outcome: "[Add actual architecture, deployment details or diagram]", href: "https://github.com/ChandanPandey45" },
  { number: "04", category: "Full Stack", icon: "layers", title: "MindGauge / MindGrid", description: "A web application workflow using Next.js, API routes, Prisma and Firebase storage for assessment content and media.", stack: ["Next.js", "TypeScript", "Prisma", "MySQL", "Firebase"], outcome: "[Add exact contribution, feature scope and verified details]", href: "https://github.com/ChandanPandey45" },
  { number: "05", category: "Full Stack", icon: "message", title: "Real-time Chat Application", description: "Full-stack application work exploring real-time communication and API-backed features.", stack: ["React", "Node.js", "Express", "Socket.IO", "MongoDB"], outcome: "[Link actual repository and describe implemented features]", href: "https://github.com/ChandanPandey45" },
  { number: "06", category: "Full Stack", icon: "layout", title: "Jagruk Bharat / Notes App", description: "Web application work showcasing UI development, backend integration, persistence and deployment practices.", stack: ["React", "Node.js", "REST APIs", "Database", "CI/CD"], outcome: "[Choose correct project and add live demo and verified details]", href: "https://github.com/ChandanPandey45" }
];

export const experience = [
  { role: "[Your current role]", company: "[Company name]", period: "[Month YYYY – Present]", details: [
    "Worked on data workflows and transformations using Python, SQL and Spark.",
    "Contributed to application/API development and database-backed features where applicable.",
    "Investigated data and application issues, focusing on correctness, maintainability and reliability."
  ]}
];

export const certifications = [
  { name: "Azure Databricks & Spark for Data Engineers", issuer: "[Course provider]", note: "Hands-on project course" },
  { name: "Microsoft Azure Fundamentals", issuer: "[Add only if completed]", note: "AZ-900 — publish only if verified" }
];
