import { ArrowUp, Github, Linkedin, Mail } from "lucide-react";
import { personalInfo } from "@/data/portfolio";

export default function Footer() {
  return (
    <footer className="border-t border-slate-200 py-8 bg-white text-xs text-slate-500">
      <div className="container flex flex-col items-center justify-between gap-4 text-center sm:flex-row sm:text-left">
        <div>
          <p className="font-bold text-slate-900 text-sm">{personalInfo.name}</p>
          <p className="mt-0.5 text-slate-500">Software Development Engineer · Data Engineering &amp; Backend Systems</p>
        </div>

        <p>© {new Date().getFullYear()} Chandan Pandey. All rights reserved.</p>

        <div className="flex items-center gap-2">
          <a
            aria-label="GitHub profile"
            className="rounded-lg border border-slate-200 p-2 text-slate-600 hover:border-slate-300 hover:text-slate-900 transition-colors"
            href={personalInfo.github}
            target="_blank"
            rel="noreferrer"
          >
            <Github size={15} />
          </a>
          <a
            aria-label="LinkedIn profile"
            className="rounded-lg border border-slate-200 p-2 text-slate-600 hover:border-slate-300 hover:text-slate-900 transition-colors"
            href={personalInfo.linkedin}
            target="_blank"
            rel="noreferrer"
          >
            <Linkedin size={15} />
          </a>
          <a
            aria-label="Email Chandan"
            className="rounded-lg border border-slate-200 p-2 text-slate-600 hover:border-slate-300 hover:text-slate-900 transition-colors"
            href={`mailto:${personalInfo.email}`}
          >
            <Mail size={15} />
          </a>
          <a
            aria-label="Back to top"
            className="rounded-lg border border-slate-200 p-2 text-slate-600 hover:border-slate-300 hover:text-slate-900 transition-colors"
            href="#home"
          >
            <ArrowUp size={15} />
          </a>
        </div>
      </div>
    </footer>
  );
}
