import { Activity, Braces, Cloud, Database, Layers3, Server, Workflow } from "lucide-react";
import { skills } from "@/data/portfolio";
import SectionHeading from "./SectionHeading";

const icons = [Braces, Server, Workflow, Cloud, Database];

export default function Skills() {
  return <section id="skills" className="section"><div className="container">
    <SectionHeading label="02 / Capability stack" title="Full stack thinking. Data engineering depth." description="From interfaces and APIs to data pipelines and cloud infrastructure, I enjoy understanding how the whole system fits together." />
    <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
      {skills.map((group, index) => { const Icon = icons[index] ?? Layers3; return <article className="panel group p-5 transition duration-300 hover:-translate-y-1 hover:border-cyan/30 sm:p-6" key={group.category}>
        <div className="flex items-center justify-between"><span className="flex h-11 w-11 items-center justify-center rounded-xl border border-blue-100 bg-blue-50 text-cyan transition group-hover:shadow-glow"><Icon size={20} /></span><span className="font-mono text-xs text-slate-600">0{index + 1}</span></div>
        <h3 className="mt-5 text-sm font-semibold tracking-wide">{group.category}</h3><div className="mt-4 flex flex-wrap gap-2">{group.items.map((item) => <span className="tag transition hover:border-cyan/30 hover:text-cyan" key={item}>{item}</span>)}</div>
      </article>; })}
      <article className="relative overflow-hidden rounded-2xl border border-blue-100 bg-blue-50 p-6 sm:col-span-2 xl:col-span-1">
        <div className="absolute -right-12 -top-12 h-36 w-36 rounded-full bg-blue-50 blur-3xl" aria-hidden="true" /><p className="eyebrow">Working principle</p>
        <h3 className="mt-4 text-xl font-semibold leading-snug">Build the product.<br /><span className="text-cyan">Trust the data.</span></h3>
        <p className="mt-3 text-sm leading-6 text-slate-400">Connect user-facing experiences with reliable APIs, well-designed databases and observable data workflows.</p>
        <div className="mt-6 flex items-center gap-2 text-xs text-slate-500"><Activity size={15} className="text-cyan" /> Continuous learning & iteration</div>
      </article>
    </div>
  </div></section>;
}
