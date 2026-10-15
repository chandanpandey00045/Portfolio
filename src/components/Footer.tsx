import { ArrowUp, Github, Heart } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-slate-200 py-7">
      <div className="container flex flex-col items-center justify-between gap-4 text-center sm:flex-row sm:text-left">
        <div>
          <a href="#home" className="font-mono text-sm font-bold">Chandan<span className="text-cyan">.dev</span></a>
          <p className="mt-1 text-[11px] text-slate-600">Building dependable data solutions.</p>
        </div>
        <p className="flex items-center gap-1 text-[11px] text-slate-600">Designed with care <Heart size={11} className="text-cyan" /> · © {new Date().getFullYear()} Chandan Pandey</p>
        <div className="flex items-center gap-3">
          <a aria-label="GitHub profile" className="rounded-lg border border-slate-200 p-2 text-slate-400 hover:text-cyan" href="https://github.com/ChandanPandey45" target="_blank" rel="noreferrer"><Github size={16} /></a>
          <a aria-label="Back to top" className="rounded-lg border border-cyan/30 p-2 text-cyan hover:bg-blue-50" href="#home"><ArrowUp size={16} /></a>
        </div>
      </div>
    </footer>
  );
}
