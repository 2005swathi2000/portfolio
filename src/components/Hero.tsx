import React from "react";
import { portfolioData } from "@/data/portfolio";
import {
  DownloadIcon,
  GithubIcon,
  LinkedinIcon,
  LeetCodeIcon,
  GeeksforGeeksIcon,
  CodeChefIcon,
  HackerRankIcon,
  CodeforcesIcon,
  ExternalLinkIcon,
  MailIcon,
} from "./Icons";

export function Hero() {
  const { hero } = portfolioData;

  const iconMap: Record<string, React.ComponentType<{ className?: string; size?: number }>> = {
    github: GithubIcon,
    linkedin: LinkedinIcon,
    leetcode: LeetCodeIcon,
    geeksforgeeks: GeeksforGeeksIcon,
    codechef: CodeChefIcon,
    codeforces: CodeforcesIcon,
    hackerrank: HackerRankIcon,
  };

  const activeSocials = hero.socials.filter(
    (s) => s.isVisible && typeof s.url === "string" && s.url.trim().length > 0
  );

  return (
    <section id="hero" className="relative pt-12 pb-16 md:pt-20 md:pb-24 border-b border-slate-200/60 dark:border-slate-800/60">
      {/* Subtle ambient gradient mesh in background */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 flex items-center justify-center overflow-hidden opacity-40 dark:opacity-25"
      >
        <div className="h-[280px] sm:h-[360px] w-[90vw] max-w-[580px] rounded-full bg-gradient-to-tr from-indigo-500/20 via-violet-500/10 to-emerald-500/15 blur-3xl" />
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <div className="space-y-6">
          {/* Status Badge: Pulsing Green Indicator */}
          <div className="flex items-center">
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full border border-emerald-500/30 bg-emerald-500/10 text-emerald-800 dark:text-emerald-300 text-xs font-mono font-medium shadow-xs">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
              </span>
              <span className="font-semibold">{hero.statusBadge.text}</span>
              <span className="text-slate-400 dark:text-slate-600">·</span>
              <span className="text-slate-700 dark:text-slate-300">{hero.statusBadge.targetRoles}</span>
            </div>
          </div>

          {/* Name & Role Headline */}
          <div className="space-y-2">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-slate-900 dark:text-slate-50">
              {hero.name}
            </h1>
            <p className="text-xl sm:text-2xl md:text-3xl font-semibold tracking-tight text-indigo-600 dark:text-indigo-400">
              {hero.headline}
            </p>
          </div>

          {/* 2-line Value Statement */}
          <p className="text-base sm:text-lg text-slate-700 dark:text-slate-300 leading-relaxed max-w-3xl">
            {hero.valueStatement}
          </p>

          {/* Fast Verification Key Stats Pills */}
          <div className="flex flex-wrap items-center gap-y-2 gap-x-4 text-xs font-mono text-slate-600 dark:text-slate-400 pt-1">
            <div className="flex items-center gap-1.5 px-2.5 py-1 rounded bg-slate-100 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-800">
              <span className="font-bold text-slate-900 dark:text-slate-100">CGPA:</span>
              <span>8.30 / 10.0 (ACET)</span>
            </div>
            <div className="flex items-center gap-1.5 px-2.5 py-1 rounded bg-slate-100 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-800">
              <span className="font-bold text-slate-900 dark:text-slate-100">Class of:</span>
              <span>May 2027</span>
            </div>
            <div className="flex items-center gap-1.5 px-2.5 py-1 rounded bg-slate-100 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-800">
              <span className="font-bold text-slate-900 dark:text-slate-100">Location:</span>
              <span>Rajahmundry, AP</span>
            </div>
          </div>

          {/* Action CTAs */}
          <div className="flex flex-wrap items-center gap-3 pt-3">
            <a
              href={hero.ctas.primary.href}
              className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-lg text-sm font-semibold bg-indigo-600 hover:bg-indigo-500 text-white dark:bg-indigo-500 dark:hover:bg-indigo-400 dark:text-slate-950 transition-colors shadow-xs focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
            >
              <span>{hero.ctas.primary.text}</span>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
              </svg>
            </a>

            <a
              href={hero.ctas.secondary.href}
              download="Hanumanthu_Swathi_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-lg text-sm font-semibold border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900/60 hover:bg-slate-50 dark:hover:bg-slate-800 text-slate-800 dark:text-slate-200 transition-colors shadow-xs focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
            >
              <DownloadIcon className="w-4 h-4" />
              <span>{hero.ctas.secondary.text}</span>
            </a>

            <a
              href={hero.ctas.contact.href}
              className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg text-sm font-semibold text-slate-700 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-indigo-400 hover:bg-slate-100/60 dark:hover:bg-slate-800/40 transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
            >
              <MailIcon className="w-4 h-4" />
              <span>{hero.ctas.contact.text}</span>
            </a>
          </div>

          {/* Social Profiles Row */}
          <div className="pt-4 border-t border-slate-200/80 dark:border-slate-800/80 flex flex-wrap items-center gap-2">
            <span className="text-xs font-mono text-slate-500 dark:text-slate-400 mr-2">
              Profiles:
            </span>
            {activeSocials.map((social) => {
              const IconComp = iconMap[social.platform] || ExternalLinkIcon;
              return (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${social.name} profile (${social.username})`}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md text-xs font-mono border border-slate-200 dark:border-slate-800 hover:border-indigo-500/50 dark:hover:border-indigo-400/50 text-slate-700 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-indigo-400 bg-white/60 dark:bg-slate-900/40 hover:bg-slate-50 dark:hover:bg-slate-800/60 transition-colors shadow-2xs focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
                >
                  <IconComp className="w-3.5 h-3.5" size={14} />
                  <span>{social.name}</span>
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
