"use client";

import React from "react";
import { portfolioData } from "@/data/portfolio";

export function About() {
  const { about } = portfolioData;

  return (
    <section id="about" className="py-14 border-t border-slate-200/80 dark:border-slate-800/80">
      <div className="max-w-5xl mx-auto space-y-8">
        {/* Section Index Marker */}
        <div className="flex items-center gap-3">
          <span className="text-xs font-mono font-semibold tracking-wider uppercase text-indigo-600 dark:text-indigo-400">
            01 // About
          </span>
          <div className="h-px flex-1 bg-slate-200 dark:bg-slate-800" />
        </div>

        <div className="space-y-4">
          <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-slate-900 dark:text-slate-50">
            {about.heading}
          </h2>
          <div className="space-y-3.5 text-slate-700 dark:text-slate-300 leading-relaxed text-base max-w-4xl">
            {about.lines.map((line, idx) => (
              <p key={idx}>{line}</p>
            ))}
          </div>
        </div>

        {/* 4 Verifiable Stat Cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 pt-2">
          {about.stats.map((stat, idx) => (
            <div
              key={idx}
              className="p-4 sm:p-5 rounded-xl border border-slate-200 dark:border-slate-800/90 bg-white/70 dark:bg-slate-900/50 backdrop-blur-xs flex flex-col justify-between space-y-2 hover:border-indigo-500/40 dark:hover:border-indigo-500/40 transition-colors shadow-xs"
            >
              <div className="space-y-1">
                <span className="text-2xl sm:text-3xl font-extrabold tracking-tight text-indigo-600 dark:text-indigo-400 font-mono">
                  {stat.label}
                </span>
                <span className="block text-xs font-bold uppercase tracking-wider text-slate-900 dark:text-slate-100">
                  {stat.value}
                </span>
              </div>
              <p className="text-[11px] text-slate-500 dark:text-slate-400 font-mono leading-tight">
                {stat.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
