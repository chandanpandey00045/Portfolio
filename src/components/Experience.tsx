import { Award, BookOpen, BriefcaseBusiness, CheckCircle2 } from "lucide-react";
import { certifications, education, experience } from "@/data/portfolio";
import SectionHeading from "./SectionHeading";

export default function Experience() {
  return (
    <section id="experience" className="section">
      <div className="container">
        <SectionHeading
          label="04 / Journey"
          title="Experience & Education"
          description="A timeline of industry roles, academic background, and technical certifications focused on building robust full-stack software and data pipelines."
        />

        <div className="grid gap-6 lg:grid-cols-[1.1fr_.9fr]">
          {/* Left Column: Work Experience */}
          <div className="panel p-6 sm:p-8">
            <div className="mb-7 flex items-center gap-3">
              <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-50 text-cyan">
                <BriefcaseBusiness size={20} />
              </span>
              <div>
                <h3 className="font-semibold text-slate-900">Professional Experience</h3>
                <p className="mt-0.5 text-xs text-slate-500">Software development internships &amp; engineering roles</p>
              </div>
            </div>

            <div className="relative border-l border-blue-100 pl-6 space-y-8">
              {experience.map((item) => (
                <article className="relative" key={item.company + item.role}>
                  <span className="absolute -left-[31px] top-1.5 h-3 w-3 rounded-full border-2 border-cyan bg-white shadow-sm" />
                  <div className="flex flex-col justify-between gap-1 sm:flex-row sm:items-start">
                    <div>
                      <h4 className="font-semibold text-slate-900">{item.role}</h4>
                      <div className="flex flex-wrap items-center gap-2 mt-0.5">
                        <span className="text-sm font-medium text-cyan">{item.company}</span>
                        {item.location && <span className="text-xs text-slate-400">· {item.location}</span>}
                        {item.collaboration && (
                          <span className="rounded-full border border-blue-200 bg-blue-50 px-2 py-0.5 font-mono text-[10px] font-semibold text-cyan">
                            {item.collaboration}
                          </span>
                        )}
                      </div>
                    </div>
                    <span className="font-mono text-xs text-slate-500 whitespace-nowrap">{item.period}</span>
                  </div>
                  <ul className="mt-3.5 space-y-2 text-sm leading-6 text-slate-600">
                    {item.details.map((detail) => (
                      <li className="flex items-start gap-2" key={detail}>
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-cyan/70" />
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
          </div>

          {/* Right Column: Principles, Education & Certifications */}
          <div className="space-y-6">
            {/* Education Card */}
            <div className="panel p-6 sm:p-7">
              <div className="mb-4 flex items-center gap-3">
                <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-blue-50 text-cyan">
                  <BookOpen size={18} />
                </span>
                <div>
                  <h3 className="text-sm font-semibold text-slate-900">Education</h3>
                  <p className="text-[11px] text-slate-500">Academic qualifications</p>
                </div>
              </div>
              <div className="space-y-3.5 divide-y divide-slate-100">
                {education.map((edu) => (
                  <div className="pt-3 first:pt-0" key={edu.degree}>
                    <div className="flex items-start justify-between gap-2">
                      <p className="text-xs font-semibold text-slate-900">{edu.degree}</p>
                      <span className="font-mono text-[11px] text-slate-500 shrink-0">{edu.period}</span>
                    </div>
                    <p className="mt-0.5 text-xs text-slate-600">{edu.institution} · {edu.location}</p>
                    {edu.grade && <span className="mt-1 inline-block text-[11px] font-medium text-cyan">{edu.grade}</span>}
                  </div>
                ))}
              </div>
            </div>

            {/* Certifications Card */}
            <div className="panel p-6 sm:p-7">
              <div className="mb-4 flex items-center gap-3">
                <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-blue-50 text-cyan">
                  <Award size={18} />
                </span>
                <div>
                  <h3 className="text-sm font-semibold text-slate-900">Certifications</h3>
                  <p className="text-[11px] text-slate-500">Verified credentials &amp; specializations</p>
                </div>
              </div>
              <div className="space-y-3 divide-y divide-slate-100">
                {certifications.map((cert) => (
                  <div className="pt-2.5 first:pt-0" key={cert.name}>
                    <div className="flex items-start justify-between gap-2">
                      <p className="text-xs font-medium text-slate-900">{cert.name}</p>
                      {cert.date && <span className="font-mono text-[10px] text-slate-400 shrink-0">{cert.date}</span>}
                    </div>
                    <p className="text-[11px] text-cyan font-mono">{cert.issuer}</p>
                    {cert.note && <p className="text-[11px] text-slate-500 mt-0.5">{cert.note}</p>}
                  </div>
                ))}
              </div>
            </div>

            {/* Engineering Principles */}
            <div className="panel p-6 sm:p-7 bg-slate-50/70">
              <p className="eyebrow">Engineering Standards</p>
              <h4 className="mt-2 text-base font-semibold text-slate-900">Trustworthy Code &amp; Reliable Pipelines</h4>
              <p className="mt-2 text-xs leading-5 text-slate-600">
                Writing clean, defensive logic with idempotent transformations, strict schema validation, comprehensive test coverage, and clear documentation.
              </p>
              <div className="mt-4 grid grid-cols-2 gap-2">
                {[
                  "Idempotent workflows",
                  "Defensive error handling",
                  "Data quality tests",
                  "Observability & metrics"
                ].map((item) => (
                  <div className="flex items-center gap-1.5 rounded-lg border border-slate-200 bg-white px-2.5 py-1.5 text-[11px] text-slate-700 font-medium" key={item}>
                    <CheckCircle2 size={13} className="text-cyan shrink-0" />
                    <span>{item}</span>
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
