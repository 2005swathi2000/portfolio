import React from "react";
import { portfolioData } from "@/data/portfolio";
import { GithubIcon } from "./Icons";

export function MoreProjects() {
  const { moreProjects } = portfolioData;

  return (
    <section className="py-8">
      <div className="max-w-6xl mx-auto space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1 border-b border-slate-200/80 dark:border-slate-800/80 pb-3">
          <div>
            <h3 className="text-xl font-bold tracking-tight text-slate-900 dark:text-slate-100">
              {moreProjects.heading}
            </h3>
            <p className="text-xs font-mono text-slate-500 dark:text-slate-400">
              {moreProjects.subheading}
            </p>
          </div>
          <span className="text-xs font-mono text-slate-400">
            {moreProjects.projects.length} repositories
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {moreProjects.projects.map((project) => (
            <div
              key={project.id}
              className="p-5 rounded-xl border border-slate-200 dark:border-slate-800 bg-white/70 dark:bg-slate-900/40 backdrop-blur-xs flex flex-col justify-between space-y-3 hover:border-indigo-500/40 dark:hover:border-indigo-400/40 transition-colors shadow-xs"
            >
              <div className="space-y-2">
                <div className="flex items-center justify-between gap-2">
                  <h4 className="text-base font-bold text-slate-900 dark:text-slate-100">
                    {project.title}
                  </h4>
                  {project.statusBadge && (
                    <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-amber-500/10 text-amber-700 dark:text-amber-300 border border-amber-500/30 shrink-0">
                      {project.statusBadge}
                    </span>
                  )}
                </div>

                <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                  {project.description}
                </p>
              </div>

              <div className="pt-3 border-t border-slate-100 dark:border-slate-800/80 flex items-center justify-between gap-2">
                <span className="text-[11px] font-mono text-indigo-600 dark:text-indigo-400 font-medium truncate">
                  {project.stack}
                </span>

                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-xs font-mono text-slate-700 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-indigo-400 font-semibold shrink-0"
                >
                  <GithubIcon className="w-3.5 h-3.5" />
                  <span>GitHub</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
