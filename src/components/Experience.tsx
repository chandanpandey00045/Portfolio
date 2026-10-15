import { BriefcaseBusiness } from "lucide-react";
import { experience } from "@/data/portfolio";
import SectionHeading from "./SectionHeading";

export default function Experience() {
  return (
    <section id="experience" className="section">
      <div className="container">
        <SectionHeading label="04 / Journey" title="Experience & learning" description="Use this section to show scope, ownership and outcomes. Keep each bullet specific and supportable." />
        <div className="grid gap-5 lg:grid-cols-[1.15fr_.85fr]">
          <div className="panel p-6 sm:p-8">
            <div className="mb-7 flex items-center gap-3">
              <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-lime-500/10 text-lime-300"><BriefcaseBusiness size={20} /></span>
              <div><h3 className="font-semibold">Professional experience</h3><p className="mt-1 text-xs text-slate-500">Replace bracketed fields before publishing</p></div>
            </div>
            <div className="relative border-l border-blue-100 pl-6">
              {experience.map((item) => (
                <article className="relative" key={item.role}>
                  <span className="absolute -left-[31px] top-1 h-3 w-3 rounded-full border-2 border-cyan bg-ink shadow-sm" />
                  <div className="flex flex-col justify-between gap-2 sm:flex-row sm:items-start">
                    <div><h4 className="font-semibold">{item.role}</h4><p className="mt-1 text-sm text-cyan">{item.company}</p></div>
                    <span className="font-mono text-[11px] text-slate-500">{item.period}</span>
                  </div>
                  <ul className="mt-4 space-y-2 pb-2 text-sm leading-6 text-slate-400">
                    {item.details.map((detail) => <li className="flex gap-2" key={detail}><span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-cyan/70" />{detail}</li>)}
                  </ul>
                </article>
              ))}
            </div>
          </div>
          <div className="panel flex flex-col justify-between p-6 sm:p-8">
            <div>
              <p className="eyebrow">Engineering principles</p>
              <h3 className="mt-3 text-xl font-semibold">Make data work trustworthy.</h3>
              <p className="mt-3 text-sm leading-7 text-slate-400">Good data engineering is more than moving rows. It means handling edge cases, measuring quality, documenting assumptions and designing for the people who depend on the output.</p>
            </div>
            <div className="mt-8 grid grid-cols-2 gap-3">
              {["Idempotent jobs", "Data validation", "Clear ownership", "Useful monitoring"].map((item) => <div className="rounded-lg border border-slate-200 bg-slate-50 p-3 text-xs text-slate-300" key={item}><span className="mr-2 text-cyan">✓</span>{item}</div>)}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
