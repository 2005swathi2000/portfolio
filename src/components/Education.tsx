"use client";

import React from "react";
import { portfolioData } from "@/data/portfolio";

export function Education() {
  const { education } = portfolioData;

  return (
    <section id="education" className="py-14 border-t border-slate-200/80 dark:border-slate-800/80">
      <div className="max-w-4xl mx-auto space-y-8">
        {/* Section Header */}
        <div className="space-y-2">
          <div className="flex items-center gap-3">
            <span className="text-xs font-mono font-semibold tracking-wider uppercase text-indigo-600 dark:text-indigo-400">
              07 // Education
            </span>
            <div className="h-px flex-1 bg-slate-200 dark:bg-slate-800" />
          </div>
          <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1">
            <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-slate-900 dark:text-slate-50">
              {education.heading}
            </h2>
            <span className="text-xs font-mono text-slate-500 dark:text-slate-400">
              Academic background and formal coursework
            </span>
          </div>
        </div>

        {/* Education Timeline */}
        <div className="relative border-l-2 border-slate-200 dark:border-slate-800 ml-3 sm:ml-4 pl-6 sm:pl-8 space-y-8">
          {education.items.map((item) => (
            <div key={item.id} className="relative group">
              {/* Timeline marker node */}
              <div className="absolute -left-[31px] sm:-left-[39px] top-1.5 w-3.5 h-3.5 rounded-full border-2 border-indigo-500 bg-white dark:bg-[#090d16] group-hover:bg-indigo-500 transition-colors" />

              <div className="p-5 rounded-xl border border-slate-200 dark:border-slate-800 bg-white/70 dark:bg-slate-900/40 backdrop-blur-xs space-y-3 shadow-xs">
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1 border-b border-slate-100 dark:border-slate-800/80 pb-3">
                  <div>
                    <h3 className="text-base sm:text-lg font-bold text-slate-900 dark:text-slate-100">
                      {item.degree}
                    </h3>
                    <p className="text-sm font-semibold text-indigo-600 dark:text-indigo-400">
                      {item.institution}
                    </p>
                    <p className="text-xs font-mono text-slate-500 dark:text-slate-400">
                      {item.location}
                    </p>
                  </div>

                  <div className="text-left sm:text-right mt-1 sm:mt-0">
                    <span className="text-xs font-mono text-slate-500 dark:text-slate-400 block font-medium">
                      {item.period}
                    </span>
                    <span className="inline-block mt-1 px-2.5 py-0.5 rounded text-xs font-mono font-bold bg-indigo-500/10 text-indigo-700 dark:text-indigo-300 border border-indigo-500/30">
                      {item.scoreLabel}: {item.scoreValue}
                    </span>
                  </div>
                </div>

                {item.coursework && (
                  <div className="pt-1 space-y-1.5">
                    <span className="text-[11px] font-mono text-slate-500 block">
                      Key Coursework:
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {item.coursework.map((course) => (
                        <span
                          key={course}
                          className="px-2 py-0.5 rounded text-[11px] font-mono bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700/80"
                        >
                          {course}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
