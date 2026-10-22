import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Experience from "@/components/Experience";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import { Code2, Database, Cloud, Workflow } from "lucide-react";

export default function HomePage() {
  return (
    <>
      <a href="#main-content" className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-lg focus:bg-cyan focus:px-4 focus:py-3 focus:text-slate-950">
        Skip to content
      </a>
      <Navbar />
      <main id="main-content">
        <Hero />
        <section aria-label="Core capabilities" className="border-y border-slate-200 bg-slate-50/90">
          <div className="container grid grid-cols-2 gap-4 py-6 sm:grid-cols-4 sm:gap-6">
            {[
              { icon: Code2, title: "Full-stack apps", subtitle: "UI → API → database" },
              { icon: Database, title: "Data engineering", subtitle: "Ingest → transform → deliver" },
              { icon: Cloud, title: "Cloud & DevOps", subtitle: "Deploy → monitor → improve" },
              { icon: Workflow, title: "System thinking", subtitle: "Reliable end-to-end flows" }
            ].map(({ icon: Icon, title, subtitle }) => (
              <div className="flex items-start gap-3" key={title}>
                <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-blue-100 bg-blue-50 text-cyan"><Icon size={17} /></span>
                <div><p className="text-xs font-semibold text-slate-900 sm:text-sm">{title}</p><p className="mt-1 text-[10px] leading-4 text-slate-600 sm:text-xs">{subtitle}</p></div>
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
