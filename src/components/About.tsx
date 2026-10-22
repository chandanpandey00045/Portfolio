import { Activity, Cloud, Database, ShieldCheck } from "lucide-react";
import SectionHeading from "./SectionHeading";

const highlights = [
  { icon: Database, title: "Enterprise data pipelines", text: "End-to-end ingestion, Delta Lake transformation and SLA delivery." },
  { icon: ShieldCheck, title: "Data quality & integrity", text: "Schema enforcement, ACID guarantees, reconciliation, and alerting." },
  { icon: Cloud, title: "Cloud data platforms", text: "Production architectures built on Azure Databricks, ADLS, and Data Factory." },
  { icon: Activity, title: "Performance & optimization", text: "Query tuning, caching, and cutting multi-hour batch runs to minutes." }
];

export default function About() {
  return (
    <section id="about" className="section border-y border-slate-200 bg-slate-50">
      <div className="container">
        <SectionHeading label="01 / About me" title="Turning data into dependable decisions" description="I enjoy solving practical data problems: bringing information together, making transformations repeatable, and giving downstream teams data they can trust." />
        <div className="grid gap-5 md:grid-cols-2">
          <div className="panel p-6 sm:p-8">
            <p className="font-mono text-sm font-semibold text-cyan">A little about my approach</p>
            <p className="mt-4 text-sm leading-7 text-slate-600">
              My work bridges intuitive full-stack applications with high-throughput data engineering. Having worked with React, Next.js, Node.js, and databases alongside Python, SQL, Spark, and Azure, I focus on building reliable systems end-to-end: responsive user interfaces, modular REST APIs, and scalable, validated data pipelines.
            </p>
            <div className="mt-6 flex flex-wrap gap-2">
              {["Full-Stack Architecture", "Data Reliability", "Clean Code", "Continuous Learning"].map((item) => <span className="tag" key={item}>{item}</span>)}
            </div>
          </div>
          <div className="grid gap-3 sm:grid-cols-2">
            {highlights.map(({ icon: Icon, title, text }) => (
              <article className="panel p-5" key={title}>
                <span className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-xl border border-blue-100 bg-blue-50 text-cyan"><Icon size={19} /></span>
                <h3 className="text-sm font-semibold text-slate-900">{title}</h3>
                <p className="mt-2 text-xs leading-5 text-slate-600">{text}</p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
