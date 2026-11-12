import React from "react";
import { portfolioData } from "@/data/portfolio";

// Clean SVG icons for the 12 verified technical skills
function SkillIcon({ name }: { name: string }) {
  const iconClass = "w-4 h-4 shrink-0";
  switch (name) {
    case "Python":
      return (
        <svg className={iconClass} viewBox="0 0 24 24" fill="currentColor">
          <path d="M11.914 0C5.82 0 6.2 2.656 6.2 2.656l.006 2.753h5.814v.827H3.908S0 5.766 0 11.896c0 6.133 3.412 5.922 3.412 5.922h2.035v-2.857s-.11-3.412 3.357-3.412h5.77V9.77s.548-5.77-5.663-5.77zm-1.68 1.84c.57 0 1.034.463 1.034 1.034 0 .57-.464 1.033-1.034 1.033a1.033 1.033 0 0 1-1.034-1.033c0-.571.464-1.034 1.034-1.034zm1.852 20.32c6.094 0 5.714-2.656 5.714-2.656l-.006-2.753h-5.814v-.827h8.112s3.908.47 3.908-5.66c0-6.133-3.412-5.922-3.412-5.922h-2.035v2.857s.11 3.412-3.357 3.412h-5.77v1.778s-.548 5.77 5.663 5.77zm1.68-1.84a1.033 1.033 0 0 1-1.034-1.034c0-.57.464-1.033 1.034-1.033.57 0 1.034.463 1.034 1.033 0 .571-.464 1.034-1.034 1.034z" />
        </svg>
      );
    case "Java":
      return (
        <svg className={iconClass} viewBox="0 0 24 24" fill="currentColor">
          <path d="M8.85 16.84s-.97.23-1.39.5c-.77.51-.78.93-.32 1.35.64.58 2.06.87 3.96.87 1.89 0 3.86-.33 4.88-.95.34-.2.43-.52.22-.8-.4-.53-1.82-.92-3.35-.97zm-1.04-2.92s-1.36.27-1.92.65c-1.05.7-1.07 1.29-.44 1.87.87.8 2.83 1.2 5.43 1.2 2.59 0 5.28-.46 6.69-1.31.47-.28.58-.72.3-1.1-.55-.73-2.49-1.27-4.58-1.31zm1.25-3.07s-.92.23-1.3.51c-.69.5-.66.95-.2 1.34.64.54 1.95.84 3.7.84 1.82 0 3.79-.34 4.79-.93.33-.2.37-.53.14-.79-.4-.46-1.78-.89-3.21-.97z" />
        </svg>
      );
    case "JavaScript":
      return (
        <svg className={iconClass} viewBox="0 0 24 24" fill="currentColor">
          <path d="M0 0h24v24H0V0zm22.034 18.276c-.175-1.017-.888-1.798-2.616-2.492l-.527-.222c-.803-.338-1.139-.636-1.139-1.139 0-.444.338-.803 1.017-.803.65 0 1.05.286 1.334.825l1.62-.977c-.492-.936-1.428-1.507-2.954-1.507-1.841 0-3.111 1.096-3.111 2.698 0 1.54 1.016 2.302 2.618 2.953l.524.222c.92.381 1.285.746 1.285 1.334 0 .587-.508.968-1.317.968-.984 0-1.555-.54-1.857-1.222l-1.683.968c.556 1.27 1.635 1.969 3.54 1.969 2.048 0 3.397-1.064 3.397-2.674zm-9.397-5.905H10.51v5.714c0 1.222-.27 1.825-1.079 1.825-.667 0-1.064-.381-1.397-.936l-1.683 1.032c.587 1.159 1.571 1.778 3.08 1.778 2.048 0 3.19-.984 3.19-3.317V12.37z" />
        </svg>
      );
    case "TypeScript":
      return (
        <svg className={iconClass} viewBox="0 0 24 24" fill="currentColor">
          <path d="M1.125 0C.502 0 0 .502 0 1.125v21.75C0 23.498.502 24 1.125 24h21.75c.623 0 1.125-.502 1.125-1.125V1.125C24 .502 23.498 0 22.875 0H1.125zM15.22 8.79h3.76v1.948h-1.828v7.264h-2.128v-7.264h-1.804V8.79h2zm-5.467 4.122c0 .942-.497 1.488-1.464 1.84l-.62.22c-.684.24-.968.468-.968.868 0 .444.38.748.992.748.744 0 1.22-.38 1.48-.928l1.62.948c-.628 1.192-1.728 1.816-3.1 1.816-1.824 0-3.088-1.068-3.088-2.64 0-1.544 1.028-2.3 2.584-2.888l.608-.228c.552-.208.824-.436.824-.8 0-.396-.34-.68-.872-.68-.616 0-1.04.312-1.28.808L4.316 11.58c.488-1.008 1.448-1.592 2.768-1.592 1.816 0 2.668.96 2.668 2.924z" />
        </svg>
      );
    case "SQL":
      return (
        <svg className={iconClass} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <ellipse cx="12" cy="5" rx="9" ry="3" />
          <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" />
          <path d="M3 12c0 1.66 4 3 9 3s9-1.34 9-3" />
        </svg>
      );
    case "React.js":
      return (
        <svg className={iconClass} viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 9c-1.657 0-3 1.343-3 3s1.343 3 3 3 3-1.343 3-3-1.343-3-3-3zm0-8.25c-3.136 0-5.83.64-7.662 1.7C2.422 3.568 1.5 5.178 1.5 7s.922 3.432 2.838 4.55C2.422 12.668 1.5 14.278 1.5 16.1c0 1.822.922 3.432 2.838 4.55C6.17 21.71 8.864 22.35 12 22.35s5.83-.64 7.662-1.7c1.916-1.118 2.838-2.728 2.838-4.55 0-1.822-.922-3.432-2.838-4.55 1.916-1.118 2.838-2.728 2.838-4.55s-.922-3.432-2.838-4.55C17.83 1.39 15.136.75 12 .75z" />
        </svg>
      );
    case "Next.js":
      return (
        <svg className={iconClass} viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.82 17.52l-5.64-7.92v7.92H10.5V6.48h1.86l5.7 7.98V6.48H19.5v11.04h-1.68z" />
        </svg>
      );
    case "Node.js":
      return (
        <svg className={iconClass} viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 0L1.75 5.92v12.16L12 24l10.25-5.92V5.92L12 0zm0 2.22l8.25 4.76v9.8L12 21.54l-8.25-4.76v-9.8L12 2.22z" />
        </svg>
      );
    case "Express.js":
      return (
        <svg className={iconClass} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M4 12h16" />
          <path d="M14 6l6 6-6 6" />
        </svg>
      );
    case "AWS":
      return (
        <svg className={iconClass} viewBox="0 0 24 24" fill="currentColor">
          <path d="M8.2 11.2c-.4 0-.8.1-1.1.4-.3.2-.5.6-.5 1.1 0 .5.2.9.5 1.1.3.2.7.4 1.1.4.5 0 .9-.1 1.2-.4.3-.2.5-.6.5-1.1 0-.5-.2-.9-.5-1.1-.3-.3-.7-.4-1.2-.4zm5.6 0c-.4 0-.8.1-1.1.4-.3.2-.5.6-.5 1.1 0 .5.2.9.5 1.1.3.2.7.4 1.1.4.5 0 .9-.1 1.2-.4.3-.2.5-.6.5-1.1 0-.5-.2-.9-.5-1.1-.3-.3-.7-.4-1.2-.4zM22.5 16.5c-4.4 3-10.2 3.6-15.6 1.8-.7-.2-.2-.8.3-.7 5 1.6 10.3 1 14.4-1.7.5-.3 1.2.3.9.6z" />
        </svg>
      );
    case "Google Cloud":
      return (
        <svg className={iconClass} viewBox="0 0 24 24" fill="currentColor">
          <path d="M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96z" />
        </svg>
      );
    case "Git & GitHub":
      return (
        <svg className={iconClass} viewBox="0 0 24 24" fill="currentColor">
          <path d="M2.6 10.59L8.38 4.8a2.53 2.53 0 0 1 3.58 0l1.24 1.24L11.58 7.66a1.69 1.69 0 0 0-.44-.06 1.7 1.7 0 0 0-1.63 1.21L7.75 7.05a.85.85 0 0 0-1.2 1.2l1.76 1.76a1.7 1.7 0 0 0 1.25 1.63v4.72a1.7 1.7 0 1 0 1.7 0v-4.49l2.25 2.25a2.54 2.54 0 0 1 0 3.59l-5.78 5.78a2.54 2.54 0 0 1-3.59 0L2.6 14.18a2.54 2.54 0 0 1 0-3.59z" />
        </svg>
      );
    default:
      return (
        <svg className={iconClass} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <circle cx="12" cy="12" r="10" />
        </svg>
      );
  }
}

export function Skills() {
  const { skills } = portfolioData;

  return (
    <section id="skills" className="py-14 border-t border-slate-200/80 dark:border-slate-800/80">
      <div className="max-w-5xl mx-auto space-y-8">
        {/* Section Header */}
        <div className="space-y-2">
          <div className="flex items-center gap-3">
            <span className="text-xs font-mono font-semibold tracking-wider uppercase text-indigo-600 dark:text-indigo-400">
              03 // Technical Skills
            </span>
            <div className="h-px flex-1 bg-slate-200 dark:bg-slate-800" />
          </div>
          <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1">
            <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-slate-900 dark:text-slate-50">
              {skills.heading}
            </h2>
            <span className="text-xs font-mono text-slate-500 dark:text-slate-400">
              Categorized chips · No percentage bars
            </span>
          </div>
        </div>

        {/* 3 Skill Groups Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {skills.categories.map((group) => (
            <div
              key={group.category}
              className="p-5 rounded-xl border border-slate-200 dark:border-slate-800 bg-white/70 dark:bg-slate-900/40 backdrop-blur-xs flex flex-col justify-between space-y-4 shadow-xs"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between border-b border-slate-100 dark:border-slate-800/80 pb-2">
                  <h3 className="text-xs font-mono font-bold uppercase tracking-wider text-indigo-600 dark:text-indigo-400">
                    {group.category}
                  </h3>
                  <span className="text-[10px] font-mono text-slate-400">
                    {group.skills.length} skills
                  </span>
                </div>

                <div className="flex flex-wrap gap-2">
                  {group.skills.map((skill) => (
                    <div
                      key={skill.name}
                      className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg text-xs font-mono font-medium bg-slate-100/80 dark:bg-slate-800/80 text-slate-800 dark:text-slate-200 border border-slate-200 dark:border-slate-700/80 hover:border-indigo-500/50 dark:hover:border-indigo-400/50 hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors shadow-2xs"
                    >
                      <SkillIcon name={skill.name} />
                      <span>{skill.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
