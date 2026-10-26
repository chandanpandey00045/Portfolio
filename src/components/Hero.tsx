"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, Download, ExternalLink, FileText, Github, Linkedin, Mail, MapPin } from "lucide-react";
import Image from "next/image";
import { personalInfo } from "@/data/portfolio";

export default function Hero() {
  const reduceMotion = useReducedMotion();

  return (
    <section id="home" className="relative pt-32 pb-20 sm:pt-36 sm:pb-24 overflow-hidden border-b border-slate-200 bg-white">
      {/* Crisp, subtle grid texture without color glow or blur orbs */}
      <div className="grid-bg pointer-events-none absolute inset-0" aria-hidden="true" />

      <div className="container relative z-10">
        <div className="grid items-center gap-12 lg:grid-cols-[1.15fr_0.85fr]">
          {/* Left Column: Natural, human introduction */}
          <motion.div
            initial={reduceMotion ? false : { opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50/80 px-3 py-1 font-mono text-xs font-semibold text-blue-700">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
              <span>SDE 1 · Data Engineering &amp; Distributed Systems</span>
            </div>

            <h1 className="mt-5 text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
              Chandan Pandey
            </h1>

            <p className="mt-3 text-lg sm:text-xl font-medium text-slate-700">
              Building enterprise data pipelines and high-throughput backend services.
            </p>

            <p className="mt-4 max-w-xl text-sm sm:text-base leading-relaxed text-slate-600">
              I am a Software Development Engineer at <strong>Tranzita Systems</strong>, working on enterprise supply chain, inventory, and analytics solutions for <strong>Procter &amp; Gamble (P&amp;G)</strong> using Azure Databricks, Delta Lake, Python, and SQL. I focus on building reliable systems that process massive datasets accurately and run without maintenance headaches.
            </p>

            {/* Action Buttons */}
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a className="btn btn-primary" href="#projects">
                View projects <ArrowRight size={15} />
              </a>
              <a
                className="btn btn-secondary"
                href={personalInfo.resumeDriveUrl || personalInfo.resumeUrl}
                target="_blank"
                rel="noreferrer"
              >
                <FileText size={15} /> View resume
              </a>
              <a
                className="btn btn-secondary !px-4"
                href={personalInfo.resumeUrl}
                download="Chandan_Pandey_Resume.pdf"
                title="Download PDF"
              >
                <Download size={15} /> PDF
              </a>
            </div>

            {/* Social & Location Bar */}
            <div className="mt-8 flex flex-wrap items-center gap-5 text-xs text-slate-600">
              <div className="flex items-center gap-3">
                <a
                  aria-label="GitHub profile"
                  className="rounded-lg border border-slate-200 p-2 text-slate-700 hover:border-blue-500 hover:text-blue-600 transition-colors"
                  href={personalInfo.github}
                  target="_blank"
                  rel="noreferrer"
                >
                  <Github size={17} />
                </a>
                <a
                  aria-label="LinkedIn profile"
                  className="rounded-lg border border-slate-200 p-2 text-slate-700 hover:border-blue-500 hover:text-blue-600 transition-colors"
                  href={personalInfo.linkedin}
                  target="_blank"
                  rel="noreferrer"
                >
                  <Linkedin size={17} />
                </a>
                <a
                  aria-label="Send email"
                  className="rounded-lg border border-slate-200 p-2 text-slate-700 hover:border-blue-500 hover:text-blue-600 transition-colors"
                  href={`mailto:${personalInfo.email}`}
                >
                  <Mail size={17} />
                </a>
              </div>

              <div className="h-4 w-px bg-slate-200 hidden sm:block" />

              <span className="flex items-center gap-1.5 text-slate-600">
                <MapPin size={14} className="text-slate-400" />
                <span>{personalInfo.location}</span>
              </span>

              <span className="flex items-center gap-1.5 font-medium text-emerald-700">
                <span className="h-2 w-2 rounded-full bg-emerald-500" />
                <span>Open to opportunities</span>
              </span>
            </div>
          </motion.div>

          {/* Right Column: Clean, customized Profile & Verified Snapshot Card */}
          <motion.div
            initial={reduceMotion ? false : { opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="flex flex-col gap-4"
          >
            {/* Identity & Status Card */}
            <div className="panel p-5 sm:p-6 border border-slate-200 bg-white">
              <div className="flex items-center gap-4">
                <div className="relative h-16 w-16 sm:h-20 sm:w-20 shrink-0 overflow-hidden rounded-xl border border-slate-200 bg-slate-50">
                  <Image
                    src="/images/chandanp_img.png"
                    alt="Chandan Pandey"
                    fill
                    priority
                    sizes="80px"
                    className="object-cover object-top"
                  />
                </div>
                <div>
                  <div className="inline-flex items-center gap-1.5 rounded border border-blue-200 bg-blue-50 px-2 py-0.5 font-mono text-[11px] font-semibold text-blue-700">
                    Tranzita Systems × P&amp;G
                  </div>
                  <h3 className="mt-1 text-base font-bold text-slate-900">Chandan Pandey</h3>
                  <p className="text-xs text-slate-600">SDE 1 (Data Engineering)</p>
                </div>
              </div>

              {/* Engineering Stats / Real Verified Milestones */}
              <div className="mt-5 grid grid-cols-2 gap-2.5 border-t border-slate-100 pt-4">
                <div className="rounded-lg border border-slate-100 bg-slate-50/70 p-3">
                  <p className="font-mono text-base font-bold text-slate-900">24h → &lt;60m</p>
                  <p className="mt-0.5 text-[11px] text-slate-600 leading-tight">Supply chain CDL pipeline runtime</p>
                </div>
                <div className="rounded-lg border border-slate-100 bg-slate-50/70 p-3">
                  <p className="font-mono text-base font-bold text-slate-900">-15% Stockouts</p>
                  <p className="mt-0.5 text-[11px] text-slate-600 leading-tight">Proactive inventory ingestion &amp; alerts</p>
                </div>
              </div>

              {/* Active Toolkit Chips */}
              <div className="mt-4 border-t border-slate-100 pt-3.5">
                <p className="text-[10px] font-semibold tracking-wider uppercase text-slate-600 font-mono">
                  Primary Daily Stack
                </p>
                <div className="mt-2 flex flex-wrap gap-1.5">
                  {["Azure Databricks", "Delta Lake", "PySpark", "Python", "SQL Server", "REST APIs"].map((tech) => (
                    <span className="tag !text-[11px] !py-0.5 !px-2" key={tech}>
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
