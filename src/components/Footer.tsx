import { ArrowUp, Github, Heart, Linkedin } from "lucide-react";
import { personalInfo } from "@/data/portfolio";

export default function Footer() {
  return (
    <footer className="border-t border-slate-200 py-8 bg-white">
      <div className="container flex flex-col items-center justify-between gap-4 text-center sm:flex-row sm:text-left">
        <div>
          <a href="#home" className="font-mono text-sm font-bold text-slate-900">
            Chandan<span className="text-cyan">.dev</span>
          </a>
          <p className="mt-1 text-xs text-slate-500">Engineering dependable full-stack applications &amp; data solutions.</p>
        </div>
        <p className="flex items-center gap-1.5 text-xs text-slate-500">
          Designed with care <Heart size={12} className="text-cyan fill-cyan/20" /> · © {new Date().getFullYear()} Chandan Pandey
        </p>
        <div className="flex items-center gap-2.5">
          <a
            aria-label="GitHub profile"
            className="rounded-lg border border-slate-200 p-2 text-slate-600 hover:text-cyan hover:border-cyan/40 transition"
            href={personalInfo.github}
            target="_blank"
            rel="noreferrer"
          >
            <Github size={16} />
          </a>
          <a
            aria-label="LinkedIn profile"
            className="rounded-lg border border-slate-200 p-2 text-slate-600 hover:text-cyan hover:border-cyan/40 transition"
            href={personalInfo.linkedin}
            target="_blank"
            rel="noreferrer"
          >
            <Linkedin size={16} />
          </a>
          <a
            aria-label="Back to top"
            className="rounded-lg border border-cyan/30 p-2 text-cyan hover:bg-blue-50 transition"
            href="#home"
          >
            <ArrowUp size={16} />
          </a>
        </div>
      </div>
    </footer>
  );
}
