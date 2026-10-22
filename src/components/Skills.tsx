import { Activity, Braces, Cloud, Cpu, Database, Layers3, Server, Workflow } from "lucide-react";
import { skills } from "@/data/portfolio";
import SectionHeading from "./SectionHeading";

const icons = [Braces, Server, Workflow, Cloud, Database, Cpu];

export default function Skills() {
  return (
    <section id="skills" className="section">
      <div className="container">
        <SectionHeading
          label="02 / Capability stack"
          title="Full-stack agility. Data engineering depth."
          description="From modern React and Next.js interfaces and Node.js backend microservices to Python, Spark, and Azure cloud pipelines."
        />

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {skills.map((group, index) => {
            const Icon = icons[index] ?? Layers3;
            return (
              <article
                className="panel group p-6 transition duration-300 hover:-translate-y-1 hover:border-cyan/40"
                key={group.category}
              >
                <div className="flex items-center justify-between">
                  <span className="flex h-11 w-11 items-center justify-center rounded-xl border border-blue-100 bg-blue-50 text-cyan transition group-hover:shadow-glow">
                    <Icon size={20} />
                  </span>
                  <span className="font-mono text-xs font-semibold text-slate-400">0{index + 1}</span>
                </div>
                <h3 className="mt-5 text-sm font-semibold tracking-wide text-slate-900">{group.category}</h3>
                <div className="mt-4 flex flex-wrap gap-1.5">
                  {group.items.map((item) => (
                    <span className="tag transition hover:border-cyan/30 hover:text-cyan" key={item}>
                      {item}
                    </span>
                  ))}
                </div>
              </article>
            );
          })}
        </div>

        {/* Working Principle Banner */}
        <div className="mt-6 relative overflow-hidden rounded-2xl border border-blue-100 bg-gradient-to-r from-blue-50/80 via-white to-blue-50/40 p-6 sm:p-8">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div className="max-w-2xl">
              <p className="eyebrow">Engineering Philosophy</p>
              <h3 className="mt-2 text-xl font-semibold text-slate-900">
                Design intuitive software. <span className="text-cyan">Deliver dependable data.</span>
              </h3>
              <p className="mt-2 text-sm leading-6 text-slate-600">
                A great user experience relies on reliable backend APIs, structured data models, and observable data pipelines. I engineer software where frontend precision meets backend stability.
              </p>
            </div>
            <div className="flex items-center gap-2 rounded-xl border border-blue-100 bg-white px-4 py-2.5 text-xs font-medium text-slate-700 shadow-sm shrink-0">
              <Activity size={16} className="text-cyan" />
              <span>Production-ready quality &amp; iteration</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
