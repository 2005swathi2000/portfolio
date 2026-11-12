"use client";

import React from "react";
import { portfolioData } from "@/data/portfolio";

export function Achievements() {
  const { achievements } = portfolioData;

  return (
    <section id="achievements" className="py-14 border-t border-slate-200/80 dark:border-slate-800/80">
      <div className="max-w-4xl mx-auto space-y-8">
        {/* Section Header */}
        <div className="space-y-2">
          <div className="flex items-center gap-3">
            <span className="text-xs font-mono font-semibold tracking-wider uppercase text-indigo-600 dark:text-indigo-400">
              06 // Achievements
            </span>
            <div className="h-px flex-1 bg-slate-200 dark:bg-slate-800" />
          </div>
          <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1">
            <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-slate-900 dark:text-slate-50">
              {achievements.heading}
            </h2>
            <span className="text-xs font-mono text-slate-500 dark:text-slate-400">
              Competitive hackathons &amp; coding ranks
            </span>
          </div>
        </div>

        {/* 4 Achievements Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {achievements.items.map((item, idx) => (
            <div
              key={item.id}
              className="p-5 rounded-xl border border-slate-200 dark:border-slate-800 bg-white/70 dark:bg-slate-900/40 backdrop-blur-xs flex items-center gap-4 hover:border-indigo-500/40 dark:hover:border-indigo-400/40 transition-colors shadow-xs"
            >
              <div className="w-10 h-10 rounded-lg bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 flex items-center justify-center shrink-0 font-mono font-bold text-sm">
                0{idx + 1}
              </div>

              <div>
                <h3 className="text-base font-bold text-slate-900 dark:text-slate-100">
                  {item.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
