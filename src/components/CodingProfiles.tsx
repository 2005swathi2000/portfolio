import React from "react";
import { portfolioData } from "@/data/portfolio";
import {
  LeetCodeIcon,
  GeeksforGeeksIcon,
  CodeChefIcon,
  CodeforcesIcon,
  HackerRankIcon,
  GithubIcon,
  LinkedinIcon,
  ExternalLinkIcon,
} from "./Icons";

export function CodingProfiles() {
  const { codingProfiles, hero } = portfolioData;

  const iconMap: Record<string, React.ComponentType<{ className?: string; size?: number }>> = {
    leetcode: LeetCodeIcon,
    geeksforgeeks: GeeksforGeeksIcon,
    codechef: CodeChefIcon,
    codeforces: CodeforcesIcon,
    hackerrank: HackerRankIcon,
    github: GithubIcon,
    linkedin: LinkedinIcon,
  };

  // 5 core competitive DSA profiles
  const dsaPlatforms = ["leetcode", "geeksforgeeks", "codechef", "codeforces", "hackerrank"];
  const profiles = hero.socials.filter((s) => dsaPlatforms.includes(s.platform) && s.isVisible && s.url.trim().length > 0);

  return (
    <section id="coding-profiles" className="py-14 border-t border-slate-200/80 dark:border-slate-800/80">
      <div className="max-w-4xl mx-auto space-y-8">
        {/* Section Header */}
        <div className="space-y-2">
          <div className="flex items-center gap-3">
            <span className="text-xs font-mono font-semibold tracking-wider uppercase text-indigo-600 dark:text-indigo-400">
              08 // Coding Profiles
            </span>
            <div className="h-px flex-1 bg-slate-200 dark:bg-slate-800" />
          </div>
          <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1">
            <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-slate-900 dark:text-slate-50">
              {codingProfiles.heading}
            </h2>
            <span className="text-xs font-mono text-slate-500 dark:text-slate-400">
              Competitive programming &amp; algorithmic problem-solving profiles
            </span>
          </div>
        </div>

        {/* Profile Link Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {profiles.map((profile) => {
            const IconComp = iconMap[profile.platform] || ExternalLinkIcon;
            return (
              <a
                key={profile.name}
                href={profile.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group p-5 rounded-xl border border-slate-200 dark:border-slate-800 bg-white/70 dark:bg-slate-900/40 backdrop-blur-xs flex items-center justify-between hover:border-indigo-500/50 dark:hover:border-indigo-400/50 hover:bg-slate-50/80 dark:hover:bg-slate-800/50 transition-all duration-200 shadow-xs"
              >
                <div className="flex items-center gap-3.5">
                  <div className="w-10 h-10 rounded-lg bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                    <IconComp className="w-5 h-5" size={20} />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-slate-900 dark:text-slate-100 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                      {profile.name}
                    </h3>
                    <p className="text-xs font-mono text-slate-500 dark:text-slate-400 truncate max-w-[150px]">
                      @{profile.username}
                    </p>
                  </div>
                </div>

                <div className="text-slate-400 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                  <ExternalLinkIcon className="w-4 h-4" />
                </div>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
