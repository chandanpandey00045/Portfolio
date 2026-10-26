"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import Image from "next/image";

const links = [
  ["About", "#about"],
  ["Skills", "#skills"],
  ["Projects", "#projects"],
  ["Experience", "#experience"],
  ["Contact", "#contact"]
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-slate-200 bg-white/95 backdrop-blur-md">
      <div className="container flex h-[68px] items-center justify-between">
        <a href="#home" className="flex items-center gap-2.5" aria-label="Chandan Pandey Home">
          <div className="relative h-8 w-8 overflow-hidden rounded-full border border-slate-200 bg-slate-100">
            <Image
              src="/images/chandanp_img.png"
              alt="Chandan Pandey"
              fill
              sizes="32px"
              priority
              className="object-cover object-top"
            />
          </div>
          <span className="font-bold text-sm text-slate-900 tracking-tight">
            Chandan Pandey
          </span>
        </a>

        <nav aria-label="Main navigation" className="hidden items-center gap-7 md:flex">
          {links.map(([label, href]) => (
            <a className="nav-link text-xs uppercase tracking-wider font-semibold text-slate-600 hover:text-slate-900" href={href} key={href}>
              {label}
            </a>
          ))}
          <a className="btn btn-primary !px-4 !py-1.5 !min-h-[36px] text-xs font-semibold" href="#contact">
            Get in touch
          </a>
        </nav>

        <button
          type="button"
          className="rounded-lg border border-slate-200 p-2 text-slate-700 hover:text-slate-900 hover:border-slate-300 transition-colors md:hidden"
          aria-label={open ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={open}
          onClick={() => setOpen(!open)}
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {open && (
        <nav aria-label="Mobile navigation" className="border-t border-b border-slate-200 bg-white px-5 py-4 space-y-1 md:hidden">
          {links.map(([label, href]) => (
            <a
              key={href}
              href={href}
              onClick={() => setOpen(false)}
              className="block rounded-lg px-3 py-2 text-sm font-semibold text-slate-700 hover:bg-slate-50 hover:text-slate-900 transition-colors"
            >
              {label}
            </a>
          ))}
          <div className="pt-2">
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="btn btn-primary w-full text-xs font-semibold"
            >
              Get in touch
            </a>
          </div>
        </nav>
      )}
    </header>
  );
}
