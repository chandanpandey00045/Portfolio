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
    <header className="fixed inset-x-0 top-0 z-50 border-b border-slate-200 bg-white/95 backdrop-blur-xl">
      <div className="container flex h-[72px] items-center justify-between">
        <a href="#home" className="group flex items-center gap-2.5 font-mono text-sm font-bold tracking-tight" aria-label="Chandan Pandey home">
          <div className="relative h-8 w-8 overflow-hidden rounded-full border border-blue-200 ring-2 ring-blue-50 transition group-hover:ring-cyan/40">
            <Image
              src="/images/chandanp_img.png"
              alt="Chandan Pandey"
              fill
              sizes="32px"
              priority
              className="object-cover object-top"
            />
          </div>
          <span>Chandan<span className="text-cyan">.dev</span></span>
        </a>

        <nav aria-label="Main navigation" className="hidden items-center gap-7 md:flex">
          {links.map(([label, href]) => (
            <a className="nav-link text-sm" href={href} key={href}>{label}</a>
          ))}
          <a className="btn btn-secondary !px-4 !py-2 text-xs" href="#contact">Let&apos;s talk <span aria-hidden>↗</span></a>
        </nav>

        <button
          type="button"
          className="rounded-lg border border-slate-200 p-2 text-slate-200 md:hidden"
          aria-label={open ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={open}
          onClick={() => setOpen(!open)}
        >
          {open ? <X size={21} /> : <Menu size={21} />}
        </button>
      </div>

      {open && (
        <nav aria-label="Mobile navigation" className="border-t border-slate-200 bg-white px-5 py-4 md:hidden">
          {links.map(([label, href]) => (
            <a key={href} href={href} onClick={() => setOpen(false)} className="block rounded-lg px-3 py-3 text-sm text-slate-300 hover:bg-white/5 hover:text-cyan">
              {label}
            </a>
          ))}
        </nav>
      )}
    </header>
  );
}
