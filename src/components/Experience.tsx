"use client";

import React from "react";
import { portfolioData } from "@/data/portfolio";

export function Experience() {
  const { experience } = portfolioData;

  return (
    <section id="experience" className="py-14 border-t border-slate-200/80 dark:border-slate-800/80">
      <div className="max-w-4xl mx-auto space-y-8">
        {/* Section Header */}
        <div className="space-y-2">
          <div className="flex items-center gap-3">
            <span className="text-xs font-mono font-semibold tracking-wider uppercase text-indigo-600 dark:text-indigo-400">
              04 // Experience
            </span>
            <div className="h-px flex-1 bg-slate-200 dark:bg-slate-800" />
          </div>
          <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1">
            <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-slate-900 dark:text-slate-50">
              {experience.heading}
            </h2>
            <span className="text-xs font-mono text-slate-500 dark:text-slate-400">
              Internships, engineering roles &amp; open-source contributions
            </span>
          </div>
        </div>

        {/* Vertical Timeline */}
        <div className="relative border-l-2 border-slate-200 dark:border-slate-800 ml-3 sm:ml-4 pl-6 sm:pl-8 space-y-8">
          {experience.items.map((exp) => (
            <div key={exp.id} className="relative group">
              {/* Timeline marker node */}
              <div className="absolute -left-[31px] sm:-left-[39px] top-1.5 w-3.5 h-3.5 rounded-full border-2 border-indigo-500 bg-white dark:bg-[#090d16] group-hover:bg-indigo-500 transition-colors" />

              <div className="space-y-3 p-5 rounded-xl border border-slate-200 dark:border-slate-800 bg-white/70 dark:bg-slate-900/40 backdrop-blur-xs shadow-xs">
                {/* Header row */}
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1 border-b border-slate-100 dark:border-slate-800/80 pb-3">
                  <div>
                    <h3 className="text-base sm:text-lg font-bold text-slate-900 dark:text-slate-100">
                      {exp.role}
                    </h3>
                    <p className="text-sm font-semibold text-indigo-600 dark:text-indigo-400">
                      {exp.organization}
                    </p>
                  </div>

                  <div className="text-left sm:text-right">
                    <span className="text-xs font-mono text-slate-600 dark:text-slate-400 font-semibold block">
                      {exp.period}
                    </span>
                    <span className="text-[11px] font-mono text-slate-400">
                      {exp.type}
                    </span>
                  </div>
                </div>

                {/* Bullets */}
                <ul className="space-y-2 text-xs sm:text-sm text-slate-700 dark:text-slate-300">
                  {exp.bullets.map((bullet, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="text-indigo-500 font-bold shrink-0 mt-0.5">•</span>
                      <span className="leading-relaxed">{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
