import { CheckCircle2, Cloud, Cpu, Database, Server } from "lucide-react";
import SectionHeading from "./SectionHeading";

const pillars = [
  {
    icon: Database,
    title: "Lakehouse & Medallion Architecture",
    description: "Designing structured Bronze, Silver, and Gold data layers in Delta Lake on Azure Databricks. Enforcing schema evolution, ACID transactions, and partition pruning."
  },
  {
    icon: Server,
    title: "Idempotent & Resilient ETL",
    description: "Building pipelines with automated data validation, deduping, and checkpointing so jobs can fail gracefully and re-run safely without corrupting historical data."
  },
  {
    icon: Cpu,
    title: "High-Throughput APIs & Queries",
    description: "Designing REST endpoints and query execution plans optimized for low latency and high concurrency across relational databases, document stores, and lakehouse tables."
  },
  {
    icon: Cloud,
    title: "Cloud Orchestration & Monitoring",
    description: "Automating scheduled ingestion workflows using Azure Data Factory, ADLS, and Databricks jobs, backed by proactive alerting and real-time dashboard streams."
  }
];

export default function About() {
  return (
    <section id="about" className="section border-b border-slate-200 bg-slate-50/60">
      <div className="container">
        <SectionHeading
          label="Background & Philosophy"
          title="Engineering for scale, accuracy, and operational clarity."
          description="A look at how I think about data systems, backend architecture, and building production-grade software."
        />

        <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          {/* Narrative Card */}
          <div className="panel p-6 sm:p-8 border border-slate-200 bg-white">
            <h3 className="text-lg font-bold text-slate-900">
              Data pipelines are production software, not just scripts.
            </h3>

            <div className="mt-4 space-y-4 text-sm leading-relaxed text-slate-600">
              <p>
                My work centers on the intersection of data engineering and backend development. Currently at <strong>Tranzita Systems</strong>, I develop backend data pipelines, transformation logic, and APIs supporting <strong>Procter &amp; Gamble (P&amp;G)</strong> enterprise supply chain and inventory workflows.
              </p>
              <p>
                Before zeroing in on data platforms, I spent years building full-stack applications with React, Node.js, and MongoDB. Having built customer-facing products gives me an uncommon perspective as a data engineer: I understand how data is consumed by real people and applications, not just how it looks inside a data warehouse.
              </p>
              <p>
                I believe that good engineering is about reducing surprises: writing clean SQL, ensuring idempotent transformations, and putting monitoring in place so issues are surfaced and solved before stakeholders ever notice.
              </p>
            </div>

            <div className="mt-6 border-t border-slate-100 pt-5">
              <p className="text-xs font-semibold text-slate-700 uppercase tracking-wider font-mono">
                Core Engineering Commitments
              </p>
              <div className="mt-3 grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-600">
                <div className="flex items-center gap-2">
                  <CheckCircle2 size={14} className="text-blue-600 shrink-0" />
                  <span>Schema-enforced Delta tables</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 size={14} className="text-blue-600 shrink-0" />
                  <span>Zero silent pipeline failures</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 size={14} className="text-blue-600 shrink-0" />
                  <span>Comprehensive API validation</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 size={14} className="text-blue-600 shrink-0" />
                  <span>Maintainable, testable code</span>
                </div>
              </div>
            </div>
          </div>

          {/* Pillars Grid */}
          <div className="grid gap-3.5 sm:grid-cols-2 lg:grid-cols-1">
            {pillars.map((pillar) => {
              const Icon = pillar.icon;
              return (
                <div
                  className="panel p-5 border border-slate-200 bg-white"
                  key={pillar.title}
                >
                  <div className="flex items-center gap-3">
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-slate-200 bg-slate-50 text-blue-600">
                      <Icon size={18} />
                    </span>
                    <h4 className="text-sm font-bold text-slate-900">{pillar.title}</h4>
                  </div>
                  <p className="mt-2.5 text-xs sm:text-sm leading-relaxed text-slate-600">
                    {pillar.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
