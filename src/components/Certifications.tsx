"use client";

import React from "react";
import { portfolioData } from "@/data/portfolio";

export function Certifications() {
  const { certifications } = portfolioData;

  return (
    <section id="certifications" className="py-14 border-t border-slate-200/80 dark:border-slate-800/80">
      <div className="max-w-4xl mx-auto space-y-8">
        {/* Section Header */}
        <div className="space-y-2">
          <div className="flex items-center gap-3">
            <span className="text-xs font-mono font-semibold tracking-wider uppercase text-indigo-600 dark:text-indigo-400">
              05 // Certifications
            </span>
            <div className="h-px flex-1 bg-slate-200 dark:bg-slate-800" />
          </div>
          <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1">
            <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-slate-900 dark:text-slate-50">
              {certifications.heading}
            </h2>
            <span className="text-xs font-mono text-slate-500 dark:text-slate-400">
              Industry and academic technical credentials
            </span>
          </div>
        </div>

        {/* 5 Certifications Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {certifications.items.map((cert) => (
            <div
              key={cert.id}
              className="p-5 rounded-xl border border-slate-200 dark:border-slate-800 bg-white/70 dark:bg-slate-900/40 backdrop-blur-xs flex items-start gap-4 hover:border-indigo-500/40 dark:hover:border-indigo-400/40 transition-colors shadow-xs"
            >
              <div className="w-10 h-10 rounded-lg bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 flex items-center justify-center shrink-0">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>

              <div className="space-y-1">
                <span className="text-xs font-mono font-semibold uppercase tracking-wider text-indigo-600 dark:text-indigo-400">
                  {cert.issuer}
                </span>
                <h3 className="text-base font-bold text-slate-900 dark:text-slate-100">
                  {cert.name}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
