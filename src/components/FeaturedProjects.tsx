"use client";

import React, { useState } from "react";
import Image from "next/image";
import { portfolioData } from "@/data/portfolio";
import { ExternalLinkIcon, GithubIcon } from "./Icons";

export function FeaturedProjects() {
  const { featuredProjects } = portfolioData;
  const [activeTab, setActiveTab] = useState<"All" | "Full-Stack" | "AI-ML" | "Cloud-Data">("All");
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const filteredProjects = activeTab === "All"
    ? featuredProjects.projects
    : featuredProjects.projects.filter((p) => p.category === activeTab);

  const toggleExpand = (id: string) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <section id="projects" className="py-14 border-t border-slate-200/80 dark:border-slate-800/80">
      <div className="max-w-6xl mx-auto space-y-8">
        {/* Section Header */}
        <div className="space-y-3">
          <div className="flex items-center gap-3">
            <span className="text-xs font-mono font-semibold tracking-wider uppercase text-indigo-600 dark:text-indigo-400">
              02 // Featured Projects
            </span>
            <div className="h-px flex-1 bg-slate-200 dark:bg-slate-800" />
          </div>
          <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2">
            <div>
              <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-slate-900 dark:text-slate-50">
                {featuredProjects.heading}
              </h2>
              <p className="text-xs font-mono text-slate-500 dark:text-slate-400 mt-1">
                7 production-grade systems · Architecture details · Real live deployments
              </p>
            </div>

            {/* Filter Tabs */}
            <div className="flex flex-wrap items-center gap-1.5 p-1 rounded-lg bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
              {featuredProjects.categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveTab(cat)}
                  className={`px-3 py-1 text-xs font-mono font-medium rounded-md transition-colors ${
                    activeTab === cat
                      ? "bg-white dark:bg-slate-800 text-indigo-600 dark:text-indigo-400 shadow-xs font-semibold"
                      : "text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {filteredProjects.map((project) => {
            const isExpanded = expandedId === project.id;
            return (
              <article
                key={project.id}
                className="group flex flex-col justify-between rounded-xl border border-slate-200 dark:border-slate-800/90 bg-white dark:bg-[#0c1222]/80 hover:border-indigo-500/50 dark:hover:border-indigo-500/50 transition-all duration-200 shadow-xs hover:shadow-md overflow-hidden"
              >
                {/* Project Thumbnail */}
                <div className="relative w-full aspect-[16/9] overflow-hidden bg-slate-100 dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800">
                  <Image
                    src={project.imagePath}
                    alt={`${project.title} interface preview`}
                    width={640}
                    height={360}
                    loading="lazy"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="w-full h-full object-cover object-top group-hover:scale-[1.02] transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
                </div>

                <div className="p-6 space-y-4 flex-1 flex flex-col justify-between">
                  <div className="space-y-3">
                    {/* Header Row: Role Badge & Category */}
                    <div className="flex items-center justify-between gap-2">
                      <div className="flex items-center gap-2">
                        <span
                          className={`px-2.5 py-0.5 rounded text-[11px] font-mono font-semibold tracking-wide border ${
                            project.role === "Team Lead"
                              ? "bg-amber-500/10 text-amber-700 dark:text-amber-300 border-amber-500/30"
                              : project.role === "Solo"
                              ? "bg-indigo-500/10 text-indigo-700 dark:text-indigo-300 border-indigo-500/30"
                              : "bg-slate-500/10 text-slate-700 dark:text-slate-300 border-slate-500/30"
                          }`}
                        >
                          {project.role}
                        </span>
                        <span className="text-[11px] font-mono text-slate-400">
                          {project.category}
                        </span>
                      </div>

                      {project.metricsBadge && (
                        <span className="px-2.5 py-0.5 rounded text-[11px] font-mono font-semibold bg-emerald-500/10 text-emerald-700 dark:text-emerald-300 border border-emerald-500/30">
                          {project.metricsBadge}
                        </span>
                      )}
                    </div>

                    {/* Title & Live Status */}
                    <div className="space-y-1">
                      <div className="flex items-center justify-between gap-2">
                        <h3 className="text-xl font-bold tracking-tight text-slate-900 dark:text-slate-100 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                          {project.title}
                        </h3>
                        {project.liveUrl && (
                          <span className="inline-flex items-center gap-1.5 text-[11px] font-mono text-emerald-600 dark:text-emerald-400 font-medium shrink-0">
                            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                            <span>Live Demo</span>
                          </span>
                        )}
                      </div>

                      {/* One-line outcome with concrete detail */}
                      <p className="text-xs sm:text-sm font-semibold text-slate-800 dark:text-slate-200 leading-snug">
                        {project.outcome}
                      </p>
                    </div>

                    {/* Description */}
                    <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                      {project.description}
                    </p>

                    {/* Architecture Details Toggle */}
                    <div className="pt-1">
                      <button
                        onClick={() => toggleExpand(project.id)}
                        aria-expanded={isExpanded}
                        aria-controls={`arch-details-${project.id}`}
                        className="text-xs font-mono font-semibold text-indigo-600 dark:text-indigo-400 hover:underline inline-flex items-center gap-1 focus-visible:outline-2 focus-visible:outline-indigo-500 rounded-xs"
                      >
                        <span>{isExpanded ? "Hide architecture details" : "Architecture details"}</span>
                        <svg
                          className={`w-3.5 h-3.5 transition-transform ${isExpanded ? "rotate-180" : ""}`}
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          aria-hidden="true"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                        </svg>
                      </button>

                      {isExpanded && (
                        <div
                          id={`arch-details-${project.id}`}
                          className="mt-3 p-3.5 rounded-lg bg-slate-50 dark:bg-slate-950/70 border border-slate-200 dark:border-slate-800 space-y-2 text-xs font-mono"
                        >
                          {project.teamMembers && (
                            <div>
                              <span className="text-slate-400">Team: </span>
                              <span className="text-slate-800 dark:text-slate-200 font-semibold">{project.teamMembers.join(", ")}</span>
                            </div>
                          )}
                          {project.verifiedArchitecture.database && (
                            <div>
                              <span className="text-slate-400">Database: </span>
                              <span className="text-slate-800 dark:text-slate-200">{project.verifiedArchitecture.database}</span>
                            </div>
                          )}
                          {project.verifiedArchitecture.orm && (
                            <div>
                              <span className="text-slate-400">ORM: </span>
                              <span className="text-slate-800 dark:text-slate-200">{project.verifiedArchitecture.orm}</span>
                            </div>
                          )}
                          {project.verifiedArchitecture.realtime && (
                            <div>
                              <span className="text-slate-400">Realtime: </span>
                              <span className="text-slate-800 dark:text-slate-200">{project.verifiedArchitecture.realtime}</span>
                            </div>
                          )}
                          {project.verifiedArchitecture.auth && (
                            <div>
                              <span className="text-slate-400">Auth: </span>
                              <span className="text-slate-800 dark:text-slate-200">{project.verifiedArchitecture.auth}</span>
                            </div>
                          )}
                          {project.verifiedArchitecture.testing && (
                            <div>
                              <span className="text-slate-400">Testing: </span>
                              <span className="text-slate-800 dark:text-slate-200">{project.verifiedArchitecture.testing}</span>
                            </div>
                          )}
                          {project.verifiedArchitecture.concurrency && (
                            <div>
                              <span className="text-slate-400">Concurrency: </span>
                              <span className="text-slate-800 dark:text-slate-200">{project.verifiedArchitecture.concurrency}</span>
                            </div>
                          )}
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Footer: Tech Chips & Actions */}
                  <div className="pt-4 border-t border-slate-100 dark:border-slate-800/80 space-y-4">
                    {/* Tech Chips */}
                    <div className="flex flex-wrap gap-1.5">
                      {project.techStack.map((tech) => (
                        <span
                          key={tech}
                          className="px-2 py-0.5 rounded text-[11px] font-mono bg-slate-100 dark:bg-slate-800/90 text-slate-700 dark:text-slate-300 border border-slate-200/80 dark:border-slate-700/80"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* Action Buttons */}
                    <div className="flex flex-wrap items-center gap-2.5 sm:gap-3 pt-1">
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md text-xs font-mono font-medium border border-slate-300 dark:border-slate-700 hover:border-slate-400 dark:hover:border-slate-600 text-slate-800 dark:text-slate-200 bg-white dark:bg-slate-900/60 hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors shadow-2xs"
                      >
                        <GithubIcon className="w-3.5 h-3.5" />
                        <span>Source Code</span>
                      </a>

                      {project.liveUrl && (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md text-xs font-mono font-semibold bg-indigo-600 hover:bg-indigo-500 text-white dark:bg-indigo-500 dark:hover:bg-indigo-400 dark:text-slate-950 transition-colors shadow-2xs"
                        >
                          <span>Live Deployment</span>
                          <ExternalLinkIcon className="w-3.5 h-3.5" />
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
