"use client";

import React from "react";
import { portfolioData } from "@/data/portfolio";

export function Footer() {
  const { footer } = portfolioData;

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="py-8 border-t border-slate-200/80 dark:border-slate-800/80 mt-12 text-xs font-mono text-slate-500 dark:text-slate-400">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex flex-col sm:flex-row items-center gap-2 text-center sm:text-left">
          <p>© {footer.year} {footer.copyrightName}. All rights reserved.</p>
          <span className="hidden sm:inline text-slate-400">·</span>
          <p className="text-slate-400 dark:text-slate-500">{footer.tagline}</p>
        </div>

        <button
          onClick={scrollToTop}
          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md border border-slate-200 dark:border-slate-800 hover:border-indigo-500/40 dark:hover:border-indigo-400/40 text-slate-700 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors shadow-2xs"
          aria-label="Back to top"
        >
          <span>Back to top</span>
          <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 10l7-7m0 0l7 7m-7-7v18" />
          </svg>
        </button>
      </div>
    </footer>
  );
}

