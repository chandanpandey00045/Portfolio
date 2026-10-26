import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Experience from "@/components/Experience";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import { Cloud, Cpu, Database, Server } from "lucide-react";

export default function HomePage() {
  return (
    <>
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-lg focus:bg-slate-900 focus:px-4 focus:py-3 focus:text-white"
      >
        Skip to content
      </a>
      <Navbar />
      <main id="main-content">
        <Hero />
        {/* Core Domains Banner - Flat, crisp, shadow-free */}
        <section aria-label="Core Focus Areas" className="border-b border-slate-200 bg-slate-50/60">
          <div className="container grid grid-cols-2 gap-4 py-5 sm:grid-cols-4 sm:gap-6">
            {[
              { icon: Database, title: "Lakehouse Platforms", subtitle: "Azure Databricks & Delta Lake" },
              { icon: Server, title: "Enterprise ETL Pipelines", subtitle: "High-scale batch & streaming" },
              { icon: Cpu, title: "Backend & REST APIs", subtitle: "Low latency & query tuning" },
              { icon: Cloud, title: "Cloud Architecture", subtitle: "ADLS Gen2, Data Factory & Azure" }
            ].map(({ icon: Icon, title, subtitle }) => (
              <div className="flex items-start gap-3" key={title}>
                <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border border-slate-200 bg-white text-blue-700">
                  <Icon size={16} />
                </span>
                <div>
                  <p className="text-xs font-bold text-slate-900 sm:text-sm">{title}</p>
                  <p className="text-[11px] text-slate-500 mt-0.5">{subtitle}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
