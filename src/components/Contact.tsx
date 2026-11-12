"use client";

import React, { useState } from "react";
import { portfolioData } from "@/data/portfolio";
import {
  MailIcon,
  PhoneIcon,
  MapPinIcon,
  CopyIcon,
  CheckIcon,
} from "./Icons";

export function Contact() {
  const { contact } = portfolioData;

  const [copiedField, setCopiedField] = useState<"email" | "phone" | null>(null);
  const [formData, setFormData] = useState({ name: "", email: "", subject: "", message: "" });
  const [formStatus, setFormStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [statusMessage, setStatusMessage] = useState("");

  const handleCopy = (text: string, field: "email" | "phone") => {
    navigator.clipboard.writeText(text);
    setCopiedField(field);
    setTimeout(() => setCopiedField(null), 2000);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      setFormStatus("error");
      setStatusMessage("Please fill in all mandatory fields (Name, Email, Message).");
      return;
    }

    // If a Formspree endpoint is configured via NEXT_PUBLIC_FORMSPREE_ENDPOINT
    if (contact.formspreeEndpoint) {
      try {
        setFormStatus("submitting");
        const res = await fetch(contact.formspreeEndpoint, {
          method: "POST",
          headers: { "Content-Type": "application/json", Accept: "application/json" },
          body: JSON.stringify(formData),
        });
        if (res.ok) {
          setFormStatus("success");
          setStatusMessage("Thank you! Your message has been sent successfully.");
          setFormData({ name: "", email: "", subject: "", message: "" });
        } else {
          throw new Error("Failed to send via Formspree");
        }
      } catch {
        setFormStatus("error");
        setStatusMessage("Could not send message via form endpoint. Please use the direct email link below.");
      }
    } else {
      // Default mailto fallback
      const mailtoUrl = `mailto:${contact.email}?subject=${encodeURIComponent(
        formData.subject || `Inquiry from ${formData.name}`
      )}&body=${encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`)}`;
      window.location.href = mailtoUrl;
      setFormStatus("success");
      setStatusMessage("Opening your default email client...");
    }
  };

  return (
    <section id="contact" className="py-14 border-t border-slate-200/80 dark:border-slate-800/80">
      <div className="max-w-5xl mx-auto space-y-8">
        {/* Section Header */}
        <div className="space-y-2">
          <div className="flex items-center gap-3">
            <span className="text-xs font-mono font-semibold tracking-wider uppercase text-indigo-600 dark:text-indigo-400">
              09 // Contact
            </span>
            <div className="h-px flex-1 bg-slate-200 dark:bg-slate-800" />
          </div>
          <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1">
            <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-slate-900 dark:text-slate-50">
              {contact.heading}
            </h2>
            <span className="text-xs font-mono text-slate-500 dark:text-slate-400">
              Direct email &amp; validated form
            </span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
          {/* Direct Outreach Details */}
          <div className="p-6 rounded-xl border border-slate-200 dark:border-slate-800 bg-white/70 dark:bg-slate-900/40 backdrop-blur-xs space-y-6 shadow-xs">
            <div className="space-y-2">
              <h3 className="text-lg font-bold text-slate-900 dark:text-slate-100">
                Direct Communication
              </h3>
              <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                {contact.subheading}
              </p>
            </div>

            {/* Email Pill */}
            <div className="space-y-1.5">
              <span className="text-xs font-mono text-slate-500 block">Email Address</span>
              <div className="flex items-center justify-between p-3 rounded-lg bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700/80">
                <div className="flex items-center gap-2.5 min-w-0">
                  <MailIcon className="w-4 h-4 text-indigo-500 shrink-0" />
                  <a
                    href={`mailto:${contact.email}`}
                    className="text-xs sm:text-sm font-mono text-slate-800 dark:text-slate-200 hover:text-indigo-600 dark:hover:text-indigo-400 truncate"
                  >
                    {contact.email}
                  </a>
                </div>
                <button
                  type="button"
                  onClick={() => handleCopy(contact.email, "email")}
                  className="p-1.5 rounded hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-500 transition-colors shrink-0"
                  aria-label="Copy email address"
                >
                  {copiedField === "email" ? (
                    <CheckIcon className="w-4 h-4 text-emerald-500" />
                  ) : (
                    <CopyIcon className="w-4 h-4" />
                  )}
                </button>
              </div>
            </div>

            {/* Phone Pill */}
            <div className="space-y-1.5">
              <span className="text-xs font-mono text-slate-500 block">Phone Number</span>
              <div className="flex items-center justify-between p-3 rounded-lg bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700/80">
                <div className="flex items-center gap-2.5">
                  <PhoneIcon className="w-4 h-4 text-indigo-500 shrink-0" />
                  <a
                    href={`tel:${contact.phone.replace(/\s+/g, "")}`}
                    className="text-xs sm:text-sm font-mono text-slate-800 dark:text-slate-200 hover:text-indigo-600 dark:hover:text-indigo-400"
                  >
                    {contact.phone}
                  </a>
                </div>
                <button
                  type="button"
                  onClick={() => handleCopy(contact.phone, "phone")}
                  className="p-1.5 rounded hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-500 transition-colors shrink-0"
                  aria-label="Copy phone number"
                >
                  {copiedField === "phone" ? (
                    <CheckIcon className="w-4 h-4 text-emerald-500" />
                  ) : (
                    <CopyIcon className="w-4 h-4" />
                  )}
                </button>
              </div>
            </div>

            {/* Location Pill */}
            <div className="flex items-center gap-2.5 text-xs font-mono text-slate-600 dark:text-slate-400 pt-2 border-t border-slate-100 dark:border-slate-800">
              <MapPinIcon className="w-4 h-4 text-slate-400 shrink-0" />
              <span>{contact.location}</span>
            </div>
          </div>

          {/* Validated Contact Form */}
          <form
            onSubmit={handleSubmit}
            className="p-6 rounded-xl border border-slate-200 dark:border-slate-800 bg-white/70 dark:bg-slate-900/40 backdrop-blur-xs space-y-4 shadow-xs"
          >
            <div className="space-y-1">
              <h3 className="text-lg font-bold text-slate-900 dark:text-slate-100">
                Send a Message
              </h3>
              <p className="text-xs font-mono text-slate-500">
                Responses delivered directly to Swathi&apos;s inbox.
              </p>
            </div>

            {statusMessage && (
              <div
                className={`p-3 rounded-lg text-xs font-mono ${
                  formStatus === "success"
                    ? "bg-emerald-500/10 text-emerald-700 dark:text-emerald-300 border border-emerald-500/30"
                    : "bg-rose-500/10 text-rose-700 dark:text-rose-300 border border-rose-500/30"
                }`}
              >
                {statusMessage}
              </div>
            )}

            <div className="space-y-1.5">
              <label htmlFor="name" className="block text-xs font-mono font-medium text-slate-700 dark:text-slate-300">
                Your Name *
              </label>
              <input
                id="name"
                type="text"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                placeholder="e.g. Alex Mercer"
                className="w-full px-3.5 py-2 text-xs font-mono rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-900 dark:text-slate-100 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>

            <div className="space-y-1.5">
              <label htmlFor="email" className="block text-xs font-mono font-medium text-slate-700 dark:text-slate-300">
                Email Address *
              </label>
              <input
                id="email"
                type="email"
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                placeholder="alex@company.com"
                className="w-full px-3.5 py-2 text-xs font-mono rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-900 dark:text-slate-100 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>

            <div className="space-y-1.5">
              <label htmlFor="subject" className="block text-xs font-mono font-medium text-slate-700 dark:text-slate-300">
                Subject
              </label>
              <input
                id="subject"
                type="text"
                value={formData.subject}
                onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                placeholder="SWE Internship / SDE Role Opportunity"
                className="w-full px-3.5 py-2 text-xs font-mono rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-900 dark:text-slate-100 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>

            <div className="space-y-1.5">
              <label htmlFor="message" className="block text-xs font-mono font-medium text-slate-700 dark:text-slate-300">
                Message *
              </label>
              <textarea
                id="message"
                required
                rows={4}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                placeholder="Share role details, team scope, or any questions..."
                className="w-full px-3.5 py-2 text-xs font-mono rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-900 dark:text-slate-100 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>

            <button
              type="submit"
              disabled={formStatus === "submitting"}
              className="w-full py-2.5 rounded-lg text-xs font-mono font-semibold bg-indigo-600 hover:bg-indigo-500 text-white dark:bg-indigo-500 dark:hover:bg-indigo-400 dark:text-slate-950 transition-colors shadow-xs disabled:opacity-50"
            >
              {formStatus === "submitting" ? "Sending..." : "Submit Message"}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
