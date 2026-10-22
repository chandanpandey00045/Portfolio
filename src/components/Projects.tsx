"use client";

import { useMemo, useState } from "react";
import { ArrowUpRight, BarChart3, Bot, Cloud, Database, ExternalLink, GitBranch, Github, Layers, LayoutDashboard, MessageCircle } from "lucide-react";
import { projects } from "@/data/portfolio";
import SectionHeading from "./SectionHeading";

const iconMap = {
  database: Database,
  chart: BarChart3,
  cloud: Cloud,
  layers: Layers,
  message: MessageCircle,
  layout: LayoutDashboard,
  bot: Bot
};

const filters = ["All", "Enterprise Data", "Data Engineering", "Full Stack & Real-Time"];

export default function Projects() {
  const [active, setActive] = useState("All");

  const visibleProjects = useMemo(
    () => (active === "All" ? projects : projects.filter((project) => project.category === active)),
    [active]
  );

  return (
    <section id="projects" className="section border-y border-slate-200 bg-slate-50">
      <div className="container">
        <div className="flex flex-col justify-between gap-5 md:flex-row md:items-end">
          <SectionHeading
            label="03 / Selected work"
            title="Built across the stack"
            description="Explore selected web applications, cloud architectures, and data engineering pipelines built with reliability and scalability in mind."
          />
          <a
            className="mb-12 inline-flex shrink-0 items-center gap-2 text-sm font-semibold text-cyan hover:text-blue-700"
            href="https://github.com/ChandanPandey45"
            target="_blank"
            rel="noreferrer"
          >
            Explore all repositories on GitHub <ArrowUpRight size={16} />
          </a>
        </div>

        <div className="mb-7 flex flex-wrap gap-2" aria-label="Filter projects">
          {filters.map((filter) => (
            <button
              type="button"
              key={filter}
              aria-pressed={active === filter}
              onClick={() => setActive(filter)}
              className={`rounded-full border px-4 py-2 text-xs font-medium transition ${
                active === filter
                  ? "border-cyan/50 bg-blue-50 text-cyan shadow-sm"
                  : "border-slate-200 bg-white text-slate-600 hover:border-slate-300 hover:text-blue-700"
              }`}
            >
              {filter}
            </button>
          ))}
        </div>

        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {visibleProjects.map((project) => {
            const Icon = iconMap[project.icon as keyof typeof iconMap] ?? GitBranch;
            return (
              <article className="panel project-card flex min-h-[360px] flex-col p-5 sm:p-6" key={project.number}>
                <div className="flex items-center justify-between">
                  <span className="flex h-11 w-11 items-center justify-center rounded-xl border border-blue-100 bg-blue-50 text-cyan">
                    <Icon size={21} />
                  </span>
                  <div className="flex items-center gap-1.5">
                    {project.badge && (
                      <span className="rounded-full border border-blue-200 bg-blue-50 px-2.5 py-0.5 font-mono text-[10px] font-semibold text-cyan">
                        {project.badge}
                      </span>
                    )}
                    <span className="rounded-full border border-slate-200 bg-slate-50 px-2.5 py-0.5 font-mono text-[10px] font-medium text-slate-600">
                      {project.category}
                    </span>
                  </div>
                </div>

                <h3 className="mt-5 text-lg font-semibold tracking-tight text-slate-900">{project.title}</h3>
                <p className="mt-2.5 text-sm leading-6 text-slate-600">{project.description}</p>

                <div className="mt-4 flex flex-wrap gap-1.5">
                  {project.stack.map((item) => (
                    <span className="tag" key={item}>
                      {item}
                    </span>
                  ))}
                </div>

                <div className="mt-4 border-t border-slate-100 pt-3.5">
                  <p className="text-[10px] font-semibold uppercase tracking-[.14em] text-slate-500">Key Outcome &amp; Architecture</p>
                  <p className="mt-1.5 text-xs leading-5 text-slate-600">{project.outcome}</p>
                </div>

                <div className="mt-auto flex items-center gap-4 pt-5">
                  <a
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-cyan hover:text-blue-700"
                    href={project.href}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <Github size={14} /> Source Code
                  </a>
                  {project.demo && (
                    <a
                      className="inline-flex items-center gap-1.5 text-xs font-semibold text-emerald-600 hover:text-emerald-700"
                      href={project.demo}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <ExternalLink size={14} /> Live Demo
                    </a>
                  )}
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
