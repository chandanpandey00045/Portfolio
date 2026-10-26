import { Cloud, Cpu, Database, FileCode, Layers, Server } from "lucide-react";
import { skills } from "@/data/portfolio";
import SectionHeading from "./SectionHeading";

const categoryIcons = [
  FileCode,
  Database,
  Layers,
  Cloud,
  Cpu,
  Server
];

export default function Skills() {
  return (
    <section id="skills" className="section border-b border-slate-200 bg-white">
      <div className="container">
        <SectionHeading
          label="Technical Toolkit"
          title="Technologies, frameworks, and data platforms."
          description="A breakdown of the tools and systems I use daily for data engineering, cloud infrastructure, and backend development."
        />

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {skills.map((group, index) => {
            const Icon = categoryIcons[index] ?? Layers;
            return (
              <div
                className="panel p-5 sm:p-6 border border-slate-200 bg-white transition-colors hover:border-slate-300"
                key={group.category}
              >
                <div className="flex items-center gap-3">
                  <span className="flex h-9 w-9 items-center justify-center rounded-lg border border-slate-200 bg-slate-50 text-blue-600">
                    <Icon size={18} />
                  </span>
                  <h3 className="text-sm font-bold text-slate-900">{group.category}</h3>
                </div>

                <div className="mt-4 flex flex-wrap gap-1.5">
                  {group.items.map((item) => (
                    <span
                      className="inline-flex items-center rounded-md border border-slate-200 bg-slate-50 px-2.5 py-1 text-xs font-medium text-slate-700"
                      key={item}
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
