"use client";
import { useMemo, useState } from "react";
import { ArrowUpRight, BarChart3, Cloud, Database, Layers, MessageCircle, LayoutDashboard, GitBranch } from "lucide-react";
import { projects } from "@/data/portfolio";
import SectionHeading from "./SectionHeading";

const iconMap = { database: Database, chart: BarChart3, cloud: Cloud, layers: Layers, message: MessageCircle, layout: LayoutDashboard };
const filters = ["All", "Full Stack", "Data Engineering", "Data & ML", "Cloud & Data"];

export default function Projects() {
  const [active, setActive] = useState("All");
  const visibleProjects = useMemo(() => active === "All" ? projects : projects.filter((project) => project.category === active), [active]);
  return <section id="projects" className="section border-y border-slate-200 bg-slate-50"><div className="container">
    <div className="flex flex-col justify-between gap-5 md:flex-row md:items-end"><SectionHeading label="03 / Selected work" title="Built across the stack" description="Explore projects across web applications, data platforms and analytical workflows. Replace starter links and sample outcomes with actual repositories and verified details." /><a className="mb-12 inline-flex shrink-0 items-center gap-2 text-sm text-cyan hover:text-blue-700" href="https://github.com/ChandanPandey45" target="_blank" rel="noreferrer">Explore GitHub <ArrowUpRight size={16} /></a></div>
    <div className="mb-7 flex flex-wrap gap-2" aria-label="Filter projects">{filters.map((filter) => <button type="button" key={filter} aria-pressed={active === filter} onClick={() => setActive(filter)} className={`rounded-full border px-4 py-2 text-xs transition ${active === filter ? "border-cyan/50 bg-blue-50 text-cyan shadow-sm" : "border-slate-200 bg-slate-50 text-slate-400 hover:border-slate-300 hover:text-blue-700"}`}>{filter}</button>)}</div>
    <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">{visibleProjects.map((project) => { const Icon = iconMap[project.icon as keyof typeof iconMap] ?? GitBranch; return <article className="panel project-card flex min-h-[350px] flex-col p-5 sm:p-6" key={project.number}>
      <div className="flex items-center justify-between"><span className="flex h-11 w-11 items-center justify-center rounded-xl border border-blue-100 bg-blue-50 text-cyan"><Icon size={21} /></span><span className="rounded-full border border-slate-200 px-2.5 py-1 font-mono text-[10px] text-slate-500">{project.category}</span></div>
      <h3 className="mt-6 text-lg font-semibold tracking-tight">{project.title}</h3><p className="mt-3 text-sm leading-6 text-slate-400">{project.description}</p>
      <div className="mt-5 flex flex-wrap gap-2">{project.stack.map((item) => <span className="tag" key={item}>{item}</span>)}</div>
      <div className="mt-5 border-t border-slate-200 pt-4"><p className="text-[10px] uppercase tracking-[.14em] text-slate-600">Impact / details</p><p className="mt-2 text-xs leading-5 text-slate-400">{project.outcome}</p></div>
      <a className="mt-auto inline-flex items-center gap-2 pt-5 text-sm font-medium text-cyan hover:text-blue-700" href={project.href} target="_blank" rel="noreferrer">View project <ArrowUpRight size={15} /></a>
    </article>; })}</div>
    <p className="mt-5 text-xs text-slate-600">Starter content only: verify project ownership and replace generic links with exact repositories or live demos.</p>
  </div></section>;
}
