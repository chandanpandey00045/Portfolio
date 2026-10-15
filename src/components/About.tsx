import { Activity, Cloud, Database, ShieldCheck } from "lucide-react";
import SectionHeading from "./SectionHeading";

const highlights = [
  { icon: Database, title: "Data pipeline development", text: "Ingestion, transformation and dependable delivery." },
  { icon: ShieldCheck, title: "Data quality", text: "Validation, reconciliation and exception handling." },
  { icon: Cloud, title: "Cloud data platforms", text: "Learning and building with Azure and Databricks." },
  { icon: Activity, title: "Performance mindset", text: "Clear diagnostics, efficient queries and practical monitoring." }
];

export default function About() {
  return (
    <section id="about" className="section border-y border-slate-200 bg-slate-50">
      <div className="container">
        <SectionHeading label="01 / About me" title="Turning data into dependable decisions" description="I enjoy solving practical data problems: bringing information together, making transformations repeatable, and giving downstream teams data they can trust." />
        <div className="grid gap-5 md:grid-cols-2">
          <div className="panel p-6 sm:p-8">
            <p className="font-mono text-sm text-cyan">A little about my approach</p>
            <p className="mt-5 text-sm leading-7 text-slate-400">
              My work spans full-stack application development and data engineering. I have worked with React, Next.js, Node.js, APIs and databases, alongside Python, SQL, Spark and cloud data tooling. I enjoy connecting the user experience to the systems behind it: maintainable interfaces, dependable APIs, sound data models and reliable pipelines.
            </p>
            <div className="mt-7 flex flex-wrap gap-2">
              {["Curiosity", "Reliability", "Continuous learning", "Problem solving"].map((item) => <span className="tag" key={item}>{item}</span>)}
            </div>
          </div>
          <div className="grid gap-3 sm:grid-cols-2">
            {highlights.map(({ icon: Icon, title, text }) => (
              <article className="panel p-5" key={title}>
                <span className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-xl border border-blue-100 bg-cyan/[0.07] text-cyan"><Icon size={19} /></span>
                <h3 className="text-sm font-semibold">{title}</h3>
                <p className="mt-2 text-xs leading-6 text-slate-500">{text}</p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
