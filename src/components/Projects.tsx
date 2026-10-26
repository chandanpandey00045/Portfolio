"use client";

import { useMemo, useState } from "react";
import { ArrowUpRight, CheckCircle, Database, ExternalLink, GitBranch, Github, Layers, Sparkles } from "lucide-react";
import { projects } from "@/data/portfolio";
import SectionHeading from "./SectionHeading";

const filters = ["All", "Enterprise Data", "Data Engineering", "Full Stack & Real-Time"];

export default function Projects() {
  const [active, setActive] = useState("All");

  const visibleProjects = useMemo(
    () => (active === "All" ? projects : projects.filter((project) => project.category === active)),
    [active]
  );

  return (
    <section id="projects" className="section border-b border-slate-200 bg-slate-50/50">
      <div className="container">
        <div className="flex flex-col justify-between gap-5 md:flex-row md:items-end">
          <SectionHeading
            label="Selected Engineering Work"
            title="Production pipelines and software systems."
            description="Case studies spanning high-scale supply chain data workflows for Procter & Gamble to real-time event streaming applications."
          />
          <a
            className="mb-12 inline-flex shrink-0 items-center gap-2 text-sm font-semibold text-blue-600 hover:text-blue-700 transition-colors"
            href="https://github.com/ChandanPandey45"
            target="_blank"
            rel="noreferrer"
          >
            Browse all repositories on GitHub <ArrowUpRight size={15} />
          </a>
        </div>

        {/* Filter Tabs - Flat, zero shadow */}
        <div className="mb-8 flex flex-wrap gap-2" aria-label="Filter projects">
          {filters.map((filter) => (
            <button
              type="button"
              key={filter}
              aria-pressed={active === filter}
              onClick={() => setActive(filter)}
              className={`rounded-lg border px-3.5 py-1.5 text-xs font-semibold transition-colors ${
                active === filter
                  ? "border-slate-900 bg-slate-900 text-white"
                  : "border-slate-200 bg-white text-slate-600 hover:border-slate-300 hover:text-slate-900"
              }`}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* Customized Projects Grid */}
        <div className="grid gap-6 md:grid-cols-2">
          {visibleProjects.map((project) => (
            <article
              key={project.number}
              className={`panel flex flex-col justify-between p-6 sm:p-7 border border-slate-200 bg-white transition-colors hover:border-slate-300 ${
                project.featured ? "md:col-span-2 lg:col-span-1" : ""
              }`}
            >
              <div>
                {/* Header Meta Row */}
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <div className="flex items-center gap-2">
                    <span className="inline-flex items-center rounded-md border border-slate-200 bg-slate-50 px-2.5 py-0.5 font-mono text-[11px] font-medium text-slate-700">
                      {project.category}
                    </span>
                    {project.client && (
                      <span className="text-xs font-medium text-blue-700">
                        {project.client}
                      </span>
                    )}
                  </div>

                  {project.badge && (
                    <span className="rounded-md border border-blue-200 bg-blue-50 px-2 py-0.5 font-mono text-[11px] font-semibold text-blue-700">
                      {project.badge}
                    </span>
                  )}
                </div>

                {/* Title */}
                <h3 className="mt-4 text-lg sm:text-xl font-bold tracking-tight text-slate-900">
                  {project.title}
                </h3>

                {/* Technical Description */}
                <p className="mt-2.5 text-sm leading-relaxed text-slate-600">
                  {project.description}
                </p>

                {/* Architecture Pipeline Callout (if available) */}
                {project.architecture && (
                  <div className="mt-4 rounded-lg border border-slate-200 bg-slate-50/70 px-3.5 py-2.5">
                    <p className="text-[10px] font-semibold uppercase tracking-wider text-slate-500 font-mono">
                      Data Architecture Flow
                    </p>
                    <p className="mt-1 font-mono text-xs text-slate-800 break-words">
                      {project.architecture}
                    </p>
                  </div>
                )}

                {/* Impact Metric Callout */}
                {project.impactMetric && (
                  <div className="mt-4 flex items-baseline gap-3 rounded-lg border border-blue-100 bg-blue-50/40 p-3">
                    <span className="font-mono text-lg font-bold text-blue-700 whitespace-nowrap">
                      {project.impactMetric.value}
                    </span>
                    <span className="text-xs text-slate-600">
                      {project.impactMetric.label}
                    </span>
                  </div>
                )}

                {/* Stack Chips */}
                <div className="mt-4 flex flex-wrap gap-1.5">
                  {project.stack.map((tech) => (
                    <span className="tag" key={tech}>
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Bottom Actions */}
              <div className="mt-6 flex flex-wrap items-center justify-between gap-3 border-t border-slate-100 pt-4">
                <p className="text-xs text-slate-500 line-clamp-1 max-w-[280px]">
                  {project.outcome}
                </p>

                <div className="flex items-center gap-3 shrink-0">
                  <a
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-700 hover:text-blue-600 transition-colors"
                    href={project.href}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <Github size={14} /> Repository
                  </a>
                  {project.demo && (
                    <a
                      className="inline-flex items-center gap-1.5 rounded-md border border-emerald-300 bg-emerald-50 px-2.5 py-1 text-xs font-semibold text-emerald-800 hover:bg-emerald-100 transition-colors"
                      href={project.demo}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <ExternalLink size={13} /> Live App
                    </a>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
