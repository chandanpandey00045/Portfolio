"use client";

import { FormEvent, useState } from "react";
import { ArrowUpRight, Check, Copy, FileText, Github, Linkedin, Mail, MapPin, Phone, Send } from "lucide-react";
import { personalInfo } from "@/data/portfolio";
import SectionHeading from "./SectionHeading";

export default function Contact() {
  const [status, setStatus] = useState("");
  const [copied, setCopied] = useState<string | null>(null);

  function copyText(text: string, type: string) {
    navigator.clipboard.writeText(text);
    setCopied(type);
    setTimeout(() => setCopied(null), 2500);
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const name = String(form.get("name") ?? "").trim();
    const email = String(form.get("email") ?? "").trim();
    const message = String(form.get("message") ?? "").trim();

    if (!name || !email || !message) {
      setStatus("Please complete all required fields.");
      return;
    }

    const recipient = personalInfo.email;
    const subject = encodeURIComponent(`Portfolio Message from ${name}`);
    const body = encodeURIComponent(`${message}\n\n---\nSender Name: ${name}\nEmail: ${email}`);
    
    window.location.href = `mailto:${recipient}?subject=${subject}&body=${body}`;
    setStatus("Opening your email client to send the message...");
  }

  return (
    <section id="contact" className="section border-t border-slate-200 bg-slate-50">
      <div className="container">
        <SectionHeading
          label="05 / Get in touch"
          title="Let's build something impactful"
          description="Have a role, software project, data pipeline challenge, or opportunity to discuss? I'd love to hear from you."
        />

        <div className="grid gap-6 lg:grid-cols-[.9fr_1.1fr]">
          {/* Contact Details Card */}
          <div className="panel flex flex-col justify-between p-6 sm:p-8">
            <div>
              <p className="font-mono text-xs font-semibold text-cyan uppercase tracking-wider">Contact Information</p>
              <h3 className="mt-2 text-xl font-semibold text-slate-900">Reach out directly</h3>
              <p className="mt-2.5 text-sm leading-6 text-slate-600">
                I am actively seeking full-stack engineering and data engineering opportunities. Feel free to contact me via email, phone, or LinkedIn.
              </p>

              <div className="mt-7 space-y-4 text-sm">
                {/* Email */}
                <div className="flex items-center justify-between rounded-xl border border-slate-200 bg-white p-3">
                  <a
                    className="flex items-center gap-3 text-slate-800 hover:text-cyan font-medium text-xs sm:text-sm"
                    href={`mailto:${personalInfo.email}`}
                  >
                    <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-blue-50 text-cyan">
                      <Mail size={16} />
                    </span>
                    {personalInfo.email}
                  </a>
                  <button
                    type="button"
                    onClick={() => copyText(personalInfo.email, "email")}
                    className="p-1.5 text-slate-400 hover:text-cyan"
                    aria-label="Copy email"
                  >
                    {copied === "email" ? <Check size={16} className="text-emerald-500" /> : <Copy size={16} />}
                  </button>
                </div>

                {/* Phone */}
                <div className="flex items-center justify-between rounded-xl border border-slate-200 bg-white p-3">
                  <a
                    className="flex items-center gap-3 text-slate-800 hover:text-cyan font-medium text-xs sm:text-sm"
                    href={`tel:${personalInfo.phone.replace(/\s+/g, '')}`}
                  >
                    <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-blue-50 text-cyan">
                      <Phone size={16} />
                    </span>
                    {personalInfo.phone}
                  </a>
                  <button
                    type="button"
                    onClick={() => copyText(personalInfo.phone, "phone")}
                    className="p-1.5 text-slate-400 hover:text-cyan"
                    aria-label="Copy phone number"
                  >
                    {copied === "phone" ? <Check size={16} className="text-emerald-500" /> : <Copy size={16} />}
                  </button>
                </div>

                {/* Location */}
                <div className="flex items-center gap-3 rounded-xl border border-slate-200 bg-white p-3 text-xs sm:text-sm font-medium text-slate-700">
                  <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-blue-50 text-cyan">
                    <MapPin size={16} />
                  </span>
                  {personalInfo.location}
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="mt-8 border-t border-slate-100 pt-5">
              <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Online Presence</p>
              <div className="mt-3 flex flex-wrap gap-2.5">
                <a
                  className="flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-3.5 py-2 text-xs font-medium text-slate-700 hover:border-cyan/40 hover:text-cyan transition"
                  href={personalInfo.github}
                  target="_blank"
                  rel="noreferrer"
                >
                  <Github size={15} /> GitHub <ArrowUpRight size={13} />
                </a>
                <a
                  className="flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-3.5 py-2 text-xs font-medium text-slate-700 hover:border-cyan/40 hover:text-cyan transition"
                  href={personalInfo.linkedin}
                  target="_blank"
                  rel="noreferrer"
                >
                  <Linkedin size={15} /> LinkedIn <ArrowUpRight size={13} />
                </a>
                <a
                  className="flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-3.5 py-2 text-xs font-medium text-slate-700 hover:border-cyan/40 hover:text-cyan transition"
                  href={personalInfo.resumeDriveUrl || personalInfo.resumeUrl}
                  target="_blank"
                  rel="noreferrer"
                >
                  <FileText size={15} /> Resume <ArrowUpRight size={13} />
                </a>
              </div>
            </div>
          </div>

          {/* Form Card */}
          <form onSubmit={handleSubmit} className="panel space-y-4 p-6 sm:p-8">
            <h3 className="text-lg font-semibold text-slate-900">Send a quick note</h3>
            <p className="text-xs text-slate-600">Fill out the fields below to start a conversation.</p>

            <div className="grid gap-4 sm:grid-cols-2">
              <label className="block text-xs font-medium text-slate-700">
                Your Name
                <input
                  className="mt-1.5"
                  name="name"
                  placeholder="e.g. Sarah Jenkins"
                  autoComplete="name"
                  required
                />
              </label>
              <label className="block text-xs font-medium text-slate-700">
                Your Email
                <input
                  className="mt-1.5"
                  name="email"
                  type="email"
                  placeholder="name@company.com"
                  autoComplete="email"
                  required
                />
              </label>
            </div>

            <label className="block text-xs font-medium text-slate-700">
              Your Message
              <textarea
                className="mt-1.5 min-h-36 resize-y"
                name="message"
                placeholder="Hi Chandan, I'd like to discuss an opportunity..."
                required
              />
            </label>

            <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-2">
              <button className="btn btn-primary w-full sm:w-auto" type="submit">
                Send message <Send size={15} />
              </button>
              {status && (
                <p aria-live="polite" className="text-xs font-medium text-cyan">
                  {status}
                </p>
              )}
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
