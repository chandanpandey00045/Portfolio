"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ArrowDown, ArrowRight, Download, FileText, Github, Linkedin } from "lucide-react";
import Image from "next/image";
import TerminalCard from "./TerminalCard";
import { personalInfo } from "@/data/portfolio";

export default function Hero() {
  const reduceMotion = useReducedMotion();

  return (
    <section id="home" className="relative flex min-h-[760px] items-center overflow-hidden pb-20 pt-32 sm:pt-36">
      <div className="grid-bg pointer-events-none absolute inset-0" aria-hidden="true" />
      <div className="pointer-events-none absolute right-[-130px] top-28 h-[430px] w-[430px] rounded-full border border-slate-200 sm:right-[5%]" aria-hidden="true">
        <div className="absolute inset-8 rounded-full border border-slate-200" />
        <div className="absolute inset-16 rounded-full border border-slate-200" />
        <div className="absolute inset-0 rounded-full bg-blue-50 blur-3xl" />
      </div>

      <div className="container relative z-10 grid items-center gap-14 lg:grid-cols-[1.05fr_.95fr]">
        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <p className="section-label">Hello, world — I&apos;m</p>
          <h1 className="mt-5 text-5xl font-bold leading-[1.04] tracking-[-.06em] sm:text-6xl lg:text-[76px]">
            Chandan<br /><span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-cyan to-blue-700">Pandey</span><span className="terminal-cursor" aria-hidden="true" />
          </h1>
          <h2 className="mt-6 max-w-xl font-mono text-base leading-7 text-cyan sm:text-lg">
            Data Engineering Professional <span className="text-slate-400">×</span> SDE 1
          </h2>
          <p className="mt-5 max-w-xl text-sm leading-7 text-slate-600 sm:text-base">
            1+ year of experience building enterprise ETL pipelines, backend data systems, and cloud data workflows. Enterprise experience delivering high-impact supply chain &amp; inventory solutions for P&amp;G (Procter &amp; Gamble) using Azure Databricks, Delta Lake, and Python.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a className="btn btn-primary" href="#projects">Explore my work <ArrowRight size={16} /></a>
            <a
              className="btn btn-secondary"
              href={personalInfo.resumeDriveUrl || personalInfo.resumeUrl}
              target="_blank"
              rel="noreferrer"
            >
              <FileText size={16} /> View resume
            </a>
            <a
              className="inline-flex items-center gap-1.5 rounded-full border border-slate-200 bg-white px-4 py-2.5 text-xs font-semibold text-slate-700 hover:border-cyan/40 hover:text-cyan hover:bg-slate-50 transition"
              href={personalInfo.resumeUrl}
              download="Chandan_Pandey_Resume.pdf"
              title="Download PDF"
            >
              <Download size={14} /> PDF
            </a>
          </div>
          <div className="mt-8 flex items-center gap-4 text-sm text-slate-500">
            <span className="mr-1 text-xs">FIND ME</span>
            <a aria-label="GitHub profile" className="rounded-md p-1.5 hover:text-cyan" href="https://github.com/ChandanPandey45" target="_blank" rel="noreferrer"><Github size={18} /></a>
            <a aria-label="LinkedIn profile" className="rounded-md p-1.5 hover:text-cyan" href="https://www.linkedin.com/in/chandan-pandey-043771251/" target="_blank" rel="noreferrer"><Linkedin size={18} /></a>
            <span className="h-4 w-px bg-slate-300" />
            <span className="flex items-center gap-2"><span className="h-2 w-2 rounded-full bg-emerald-500" /> Open to meaningful opportunities</span>
          </div>
        </motion.div>

        <div className="relative flex min-h-[520px] items-center justify-center lg:justify-end">
          <div className="absolute -inset-5 rounded-[2rem] bg-blue-50 blur-3xl" aria-hidden="true" />
          <div className="relative w-full max-w-[480px]">
            {/* Top-right specialty pill */}
            <div className="absolute -right-2 -top-4 z-20 rounded-full border border-blue-100 bg-white/95 px-3.5 py-1.5 font-mono text-[11px] font-semibold text-cyan shadow-sm backdrop-blur">
              <span className="mr-2 inline-block h-2 w-2 rounded-full bg-emerald-500" /> DATA ENGINEER × SDE 1
            </div>

            {/* Profile Photo in custom styled frame */}
            <div className="photo-frame panel overflow-hidden p-2.5 bg-white shadow-xl transition-all duration-300">
              <div className="relative aspect-[3/4] w-full overflow-hidden rounded-[22px] bg-slate-100">
                <Image
                  src="/images/chandanp_img.png"
                  alt="Chandan Pandey — Data Engineer & SDE 1"
                  fill
                  priority
                  sizes="(max-width: 640px) 90vw, (max-width: 1024px) 440px, 480px"
                  className="object-cover object-top transition duration-500 hover:scale-[1.02]"
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent" />
                
                {/* Clean caption badge overlaid on lower photo */}
                <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between rounded-xl border border-white/10 bg-slate-950/65 px-3.5 py-2 backdrop-blur-md">
                  <div>
                    <p className="text-xs font-semibold text-white">Chandan Pandey</p>
                    <p className="font-mono text-[10px] text-slate-300">Data Engineer · P&amp;G Collaboration</p>
                  </div>
                  <span className="flex items-center gap-1.5 rounded-full border border-emerald-400/30 bg-emerald-500/20 px-2.5 py-1 font-mono text-[10px] font-medium text-emerald-300">
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" /> Available
                  </span>
                </div>
              </div>
            </div>

            {/* Overlapping Terminal Card */}
            <div className="relative z-10 mx-auto -mt-6 w-[94%] sm:-ml-4 sm:mr-0 sm:w-[92%]">
              <TerminalCard />
            </div>

            {/* Bottom floating badge */}
            <div className="panel absolute -bottom-5 right-2 hidden items-center gap-3 border border-slate-200 bg-white/95 px-4 py-2.5 shadow-lg backdrop-blur sm:flex">
              <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-blue-50 font-mono text-xs font-bold text-cyan">P&amp;G</span>
              <div>
                <p className="text-xs font-semibold text-slate-900">Enterprise Data Impact</p>
                <p className="text-[10px] text-slate-500">Databricks · Delta Lake · Cloud ETL</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <a href="#about" className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 items-center gap-2 text-[10px] uppercase tracking-[.2em] text-slate-500 hover:text-cyan sm:flex">
        Scroll to explore <ArrowDown size={13} />
      </a>
    </section>
  );
}
