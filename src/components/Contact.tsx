"use client";

import { FormEvent, useState } from "react";
import { ArrowUpRight, Github, Linkedin, Mail, MapPin, Send } from "lucide-react";
import SectionHeading from "./SectionHeading";

export default function Contact() {
  const [status, setStatus] = useState("");

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const name = String(form.get("name") ?? "").trim();
    const email = String(form.get("email") ?? "").trim();
    const message = String(form.get("message") ?? "").trim();

    if (!name || !email || !message) {
      setStatus("Please complete all fields.");
      return;
    }

    // Frontend-only fallback: open the visitor's email client. Replace the placeholder address.
    const recipient = "YOUR_EMAIL@example.com";
    if (recipient === "YOUR_EMAIL@example.com") {
      setStatus("Demo form only. Replace YOUR_EMAIL@example.com in Contact.tsx to enable email-client submission.");
      return;
    }
    const subject = encodeURIComponent(`Portfolio message from ${name}`);
    const body = encodeURIComponent(`${message}\n\nFrom: ${name}\nReply to: ${email}`);
    window.location.href = `mailto:${recipient}?subject=${subject}&body=${body}`;
    setStatus("Your email app should open with the message ready to send.");
  }

  return (
    <section id="contact" className="section border-t border-slate-200 bg-slate-50">
      <div className="container">
        <SectionHeading label="05 / Get in touch" title="Let’s build something useful" description="Have a data problem, a project idea or an opportunity to discuss? Send a note." />
        <div className="grid gap-6 lg:grid-cols-[.85fr_1.15fr]">
          <div className="panel p-6 sm:p-8">
            <p className="font-mono text-sm text-cyan">Contact details</p>
            <p className="mt-3 text-sm leading-6 text-slate-400">I’m interested in data engineering, scalable pipelines, cloud platforms and practical analytics projects.</p>
            <div className="mt-7 space-y-5 text-sm">
              <a className="flex items-center gap-3 text-slate-300 hover:text-cyan" href="mailto:YOUR_EMAIL@example.com"><Mail size={17} className="text-cyan" /> YOUR_EMAIL@example.com</a>
              <a className="flex items-center gap-3 text-slate-300 hover:text-cyan" href="https://github.com/ChandanPandey45" target="_blank" rel="noreferrer"><Github size={17} className="text-cyan" /> github.com/ChandanPandey45 <ArrowUpRight size={13} /></a>
              <a className="flex items-center gap-3 text-slate-300 hover:text-cyan" href="https://www.linkedin.com/" target="_blank" rel="noreferrer"><Linkedin size={17} className="text-cyan" /> Add your LinkedIn profile <ArrowUpRight size={13} /></a>
              <p className="flex items-center gap-3 text-slate-500"><MapPin size={17} className="text-cyan" /> [Your city, India]</p>
            </div>
          </div>
          <form onSubmit={handleSubmit} className="panel space-y-4 p-6 sm:p-8">
            <div className="grid gap-4 sm:grid-cols-2">
              <label className="block text-xs text-slate-400">Name<input className="mt-2" name="name" placeholder="Your name" autoComplete="name" required /></label>
              <label className="block text-xs text-slate-400">Email<input className="mt-2" name="email" type="email" placeholder="you@example.com" autoComplete="email" required /></label>
            </div>
            <label className="block text-xs text-slate-400">Message<textarea className="mt-2 min-h-36 resize-y" name="message" placeholder="Tell me a little about your project..." required /></label>
            <button className="btn btn-primary w-full sm:w-auto" type="submit">Prepare message <Send size={15} /></button>
            <p aria-live="polite" className="text-xs leading-5 text-slate-500">{status || "This demo uses your email app; it does not send or store messages on a server."}</p>
          </form>
        </div>
      </div>
    </section>
  );
}
