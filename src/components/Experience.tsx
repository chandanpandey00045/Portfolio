import { Award, BookOpen, Briefcase, CheckCircle2 } from "lucide-react";
import { certifications, education, experience } from "@/data/portfolio";
import SectionHeading from "./SectionHeading";

export default function Experience() {
  return (
    <section id="experience" className="section border-b border-slate-200 bg-white">
      <div className="container">
        <SectionHeading
          label="Career & Education"
          title="Professional experience and academic background."
          description="A timeline of industry engineering roles, enterprise client projects, and verified credentials."
        />

        <div className="grid gap-6 lg:grid-cols-[1.15fr_0.85fr]">
          {/* Left Column: Work Experience */}
          <div className="panel p-6 sm:p-8 border border-slate-200 bg-white">
            <div className="mb-6 flex items-center gap-3">
              <span className="flex h-9 w-9 items-center justify-center rounded-lg border border-slate-200 bg-slate-50 text-blue-600">
                <Briefcase size={18} />
              </span>
              <div>
                <h3 className="text-base font-bold text-slate-900">Work Experience</h3>
                <p className="text-xs text-slate-500">Software development and data engineering roles</p>
              </div>
            </div>

            <div className="relative border-l border-slate-200 pl-6 space-y-8">
              {experience.map((item) => (
                <article className="relative" key={item.company + item.role}>
                  {/* Subtle clean timeline marker - NO shadow */}
                  <span className="absolute -left-[31px] top-1.5 h-3 w-3 rounded-full border-2 border-blue-600 bg-white" />

                  <div className="flex flex-col justify-between gap-1 sm:flex-row sm:items-baseline">
                    <div>
                      <h4 className="font-bold text-slate-900 text-sm sm:text-base">{item.role}</h4>
                      <div className="flex flex-wrap items-center gap-2 mt-1">
                        <span className="text-xs font-semibold text-blue-700">{item.company}</span>
                        {item.location && <span className="text-xs text-slate-400">· {item.location}</span>}
                        {item.collaboration && (
                          <span className="rounded-md border border-blue-200 bg-blue-50 px-2 py-0.5 font-mono text-[10px] font-semibold text-blue-700">
                            {item.collaboration}
                          </span>
                        )}
                      </div>
                    </div>
                    <span className="font-mono text-xs text-slate-500 whitespace-nowrap">{item.period}</span>
                  </div>

                  <ul className="mt-3.5 space-y-2 text-xs sm:text-sm leading-relaxed text-slate-600">
                    {item.details.map((detail) => (
                      <li className="flex items-start gap-2" key={detail}>
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-slate-400" />
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
          </div>

          {/* Right Column: Education & Certifications */}
          <div className="space-y-6">
            {/* Education Card */}
            <div className="panel p-6 border border-slate-200 bg-white">
              <div className="mb-4 flex items-center gap-3">
                <span className="flex h-9 w-9 items-center justify-center rounded-lg border border-slate-200 bg-slate-50 text-blue-600">
                  <BookOpen size={18} />
                </span>
                <div>
                  <h3 className="text-sm font-bold text-slate-900">Education</h3>
                  <p className="text-xs text-slate-500">Degree &amp; institutional training</p>
                </div>
              </div>

              <div className="space-y-4 divide-y divide-slate-100">
                {education.map((edu) => (
                  <div className="pt-3 first:pt-0" key={edu.degree}>
                    <div className="flex items-start justify-between gap-2">
                      <p className="text-xs sm:text-sm font-bold text-slate-900">{edu.degree}</p>
                      <span className="font-mono text-xs text-slate-500 shrink-0">{edu.period}</span>
                    </div>
                    <p className="mt-1 text-xs text-slate-600">{edu.institution} · {edu.location}</p>
                    {edu.grade && (
                      <span className="mt-1.5 inline-block rounded border border-slate-200 bg-slate-50 px-2 py-0.5 font-mono text-[11px] font-semibold text-blue-700">
                        {edu.grade}
                      </span>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Certifications Card */}
            <div className="panel p-6 border border-slate-200 bg-white">
              <div className="mb-4 flex items-center gap-3">
                <span className="flex h-9 w-9 items-center justify-center rounded-lg border border-slate-200 bg-slate-50 text-blue-600">
                  <Award size={18} />
                </span>
                <div>
                  <h3 className="text-sm font-bold text-slate-900">Certifications</h3>
                  <p className="text-xs text-slate-500">Industry-recognized credentials</p>
                </div>
              </div>

              <div className="space-y-3.5 divide-y divide-slate-100">
                {certifications.map((cert) => (
                  <div className="pt-3 first:pt-0" key={cert.name}>
                    <div className="flex items-start justify-between gap-2">
                      <p className="text-xs font-semibold text-slate-900">{cert.name}</p>
                      {cert.date && <span className="font-mono text-[11px] text-slate-400 shrink-0">{cert.date}</span>}
                    </div>
                    <p className="text-[11px] text-blue-700 font-mono mt-0.5">{cert.issuer}</p>
                    {cert.note && <p className="text-xs text-slate-500 mt-1">{cert.note}</p>}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
