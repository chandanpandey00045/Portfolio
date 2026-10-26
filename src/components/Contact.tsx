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
    const body = encodeURIComponent(`${message}\n\n---\nFrom: ${name}\nEmail: ${email}`);

    window.location.href = `mailto:${recipient}?subject=${subject}&body=${body}`;
    setStatus("Opening your email client to send...");
  }

  return (
    <section id="contact" className="section border-b border-slate-200 bg-slate-50/60">
      <div className="container">
        <SectionHeading
          label="Get In Touch"
          title="Let's start a conversation."
          description="I'm open to discussing engineering roles, distributed data platforms, backend architecture, or collaborative projects."
        />

        <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
          {/* Contact Details Card - Flat, zero shadow */}
          <div className="panel flex flex-col justify-between p-6 sm:p-8 border border-slate-200 bg-white">
            <div>
              <h3 className="text-lg font-bold text-slate-900">Direct Contact</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">
                You can reach me directly via email or phone, or connect through LinkedIn. I respond promptly to engineering inquiries and opportunities.
              </p>

              <div className="mt-6 space-y-3">
                {/* Email */}
                <div className="flex items-center justify-between rounded-lg border border-slate-200 bg-slate-50/70 p-3">
                  <a
                    className="flex items-center gap-3 text-xs sm:text-sm font-semibold text-slate-800 hover:text-blue-600 transition-colors"
                    href={`mailto:${personalInfo.email}`}
                  >
                    <Mail size={16} className="text-blue-600 shrink-0" />
                    <span className="truncate">{personalInfo.email}</span>
                  </a>
                  <button
                    type="button"
                    onClick={() => copyText(personalInfo.email, "email")}
                    className="p-1 text-slate-400 hover:text-slate-700 transition-colors"
                    aria-label="Copy email"
                  >
                    {copied === "email" ? <Check size={15} className="text-emerald-600" /> : <Copy size={15} />}
                  </button>
                </div>

                {/* Phone */}
                <div className="flex items-center justify-between rounded-lg border border-slate-200 bg-slate-50/70 p-3">
                  <a
                    className="flex items-center gap-3 text-xs sm:text-sm font-semibold text-slate-800 hover:text-blue-600 transition-colors"
                    href={`tel:${personalInfo.phone.replace(/\s+/g, "")}`}
                  >
                    <Phone size={16} className="text-blue-600 shrink-0" />
                    <span>{personalInfo.phone}</span>
                  </a>
                  <button
                    type="button"
                    onClick={() => copyText(personalInfo.phone, "phone")}
                    className="p-1 text-slate-400 hover:text-slate-700 transition-colors"
                    aria-label="Copy phone number"
                  >
                    {copied === "phone" ? <Check size={15} className="text-emerald-600" /> : <Copy size={15} />}
                  </button>
                </div>

                {/* Location */}
                <div className="flex items-center gap-3 rounded-lg border border-slate-200 bg-slate-50/70 p-3 text-xs sm:text-sm font-medium text-slate-700">
                  <MapPin size={16} className="text-blue-600 shrink-0" />
                  <span>{personalInfo.location}</span>
                </div>
              </div>
            </div>

            {/* Online Links */}
            <div className="mt-8 border-t border-slate-100 pt-5">
              <p className="text-xs font-semibold uppercase tracking-wider text-slate-500 font-mono">
                Profiles &amp; Documents
              </p>
              <div className="mt-3 flex flex-wrap gap-2">
                <a
                  className="inline-flex items-center gap-1.5 rounded-lg border border-slate-200 bg-white px-3 py-1.5 text-xs font-semibold text-slate-700 hover:border-slate-300 hover:text-blue-600 transition-colors"
                  href={personalInfo.github}
                  target="_blank"
                  rel="noreferrer"
                >
                  <Github size={14} /> GitHub <ArrowUpRight size={12} />
                </a>
                <a
                  className="inline-flex items-center gap-1.5 rounded-lg border border-slate-200 bg-white px-3 py-1.5 text-xs font-semibold text-slate-700 hover:border-slate-300 hover:text-blue-600 transition-colors"
                  href={personalInfo.linkedin}
                  target="_blank"
                  rel="noreferrer"
                >
                  <Linkedin size={14} /> LinkedIn <ArrowUpRight size={12} />
                </a>
                <a
                  className="inline-flex items-center gap-1.5 rounded-lg border border-slate-200 bg-white px-3 py-1.5 text-xs font-semibold text-slate-700 hover:border-slate-300 hover:text-blue-600 transition-colors"
                  href={personalInfo.resumeDriveUrl || personalInfo.resumeUrl}
                  target="_blank"
                  rel="noreferrer"
                >
                  <FileText size={14} /> Resume <ArrowUpRight size={12} />
                </a>
              </div>
            </div>
          </div>

          {/* Form Card - Flat, zero shadow */}
          <form onSubmit={handleSubmit} className="panel p-6 sm:p-8 border border-slate-200 bg-white space-y-4">
            <h3 className="text-lg font-bold text-slate-900">Send a Message</h3>
            <p className="text-xs sm:text-sm text-slate-600">
              Leave a note with your project or opportunity details and I will reply as soon as possible.
            </p>

            <div className="grid gap-4 sm:grid-cols-2">
              <label className="block text-xs font-semibold text-slate-700">
                Your Name
                <input
                  className="mt-1.5"
                  name="name"
                  placeholder="e.g. Alex Miller"
                  autoComplete="name"
                  required
                />
              </label>
              <label className="block text-xs font-semibold text-slate-700">
                Your Email
                <input
                  className="mt-1.5"
                  name="email"
                  type="email"
                  placeholder="alex@company.com"
                  autoComplete="email"
                  required
                />
              </label>
            </div>

            <label className="block text-xs font-semibold text-slate-700">
              Message
              <textarea
                className="mt-1.5 min-h-36 resize-y"
                name="message"
                placeholder="Hi Chandan, I'd like to discuss an opportunity..."
                required
              />
            </label>

            <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-2">
              <button className="btn btn-primary w-full sm:w-auto" type="submit">
                Prepare message <Send size={14} />
              </button>
              {status && (
                <p aria-live="polite" className="text-xs font-semibold text-blue-700">
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
