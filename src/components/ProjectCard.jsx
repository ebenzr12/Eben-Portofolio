import { ArrowUpRight } from "lucide-react";

export default function ProjectCard({ project, onClick }) {
  if (!project) return null;

  const technologies = Array.isArray(project.technologies)
    ? project.technologies
    : [];

  return (
    <button
      type="button"
      onClick={() => onClick(project)}
      className="group relative w-full overflow-hidden rounded-3xl border border-white/10 bg-[#0A1210] p-7 text-left transition-all duration-500 hover:-translate-y-2 hover:border-emerald-500/40 hover:bg-[#0D1714] md:p-8"
    >
      <div className="pointer-events-none absolute -right-20 -top-20 h-48 w-48 rounded-full bg-emerald-500/0 blur-3xl transition-all duration-500 group-hover:bg-emerald-500/10" />

      <div className="absolute left-0 top-0 h-[2px] w-0 bg-emerald-400 transition-all duration-500 group-hover:w-full" />

      <div className="relative">

        <div className="flex items-center justify-between gap-4">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-emerald-400">
            {project.category}
          </span>

          <span className="text-sm text-white/35">
            {project.year}
          </span>
        </div>

        <div className="mt-10">
          <h3 className="max-w-xl text-3xl font-semibold tracking-tight text-white transition-colors duration-300 group-hover:text-emerald-300">
            {project.title}
          </h3>

          <p className="mt-2 text-base text-white/45">
            {project.subtitle}
          </p>

          <p className="mt-6 max-w-xl text-sm leading-7 text-white/55">
            {project.overview}
          </p>
        </div>

        <div className="mt-7 flex flex-wrap gap-2">
          {technologies.slice(0, 5).map((tech) => (
            <span
              key={tech}
              className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1.5 text-xs text-white/50 transition-colors duration-300 group-hover:border-emerald-500/20"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="mt-9 flex items-center justify-between border-t border-white/10 pt-5">
          <span className="text-sm font-medium text-white/70 transition-colors duration-300 group-hover:text-emerald-400">
            Explore Project
          </span>

          <span className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-white/45 transition-all duration-300 group-hover:border-emerald-500/40 group-hover:bg-emerald-500 group-hover:text-black">
            <ArrowUpRight size={18} />
          </span>
        </div>

      </div>
    </button>
  );
}