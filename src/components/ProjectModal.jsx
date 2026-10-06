import { ArrowUpRight, Github, X } from "lucide-react";

export default function ProjectModal({ project, onClose }) {
  if (!project) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 p-4 backdrop-blur-md"
      onClick={onClose}
    >
      <div
        className="relative max-h-[90vh] w-full max-w-5xl overflow-y-auto rounded-3xl border border-emerald-500/20 bg-[#080D0B] shadow-2xl shadow-emerald-950/40"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute right-5 top-5 z-10 flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-black/20 text-white/50 backdrop-blur-md transition hover:border-emerald-500/40 hover:bg-emerald-950/30 hover:text-white"
          aria-label="Close"
        >
          <X size={19} />
        </button>

        {/* Header */}
        <div className="border-b border-white/10 px-7 py-10 md:px-10 md:py-12">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-emerald-400">
            {project.category}
          </p>

          <h2 className="mt-4 max-w-3xl text-3xl font-bold tracking-tight text-white md:text-5xl">
            {project.title}
          </h2>

          <p className="mt-4 max-w-2xl text-lg leading-8 text-white/50">
            {project.subtitle}
          </p>

          <div className="mt-6 flex flex-wrap gap-2">
            {project.technologies.map((tech) => (
              <span
                key={tech}
                className="rounded-full border border-emerald-500/15 bg-emerald-950/10 px-3.5 py-1.5 text-xs text-white/55"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Content */}
        <div className="space-y-10 px-7 py-10 md:px-10 md:py-12">
          {/* Overview */}
          <section>
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.25em] text-emerald-400">
              Overview
            </p>

            <p className="max-w-4xl text-base leading-8 text-white/65">
              {project.overview}
            </p>
          </section>

          {/* Problem / Approach */}
          <div className="grid gap-5 md:grid-cols-2">
            <section className="rounded-2xl border border-white/10 bg-white/[0.02] p-6">
              <p className="mb-4 text-xs font-semibold uppercase tracking-[0.25em] text-emerald-400">
                The Problem
              </p>

              <p className="leading-7 text-white/55">
                {project.problem}
              </p>
            </section>

            <section className="rounded-2xl border border-white/10 bg-white/[0.02] p-6">
              <p className="mb-4 text-xs font-semibold uppercase tracking-[0.25em] text-emerald-400">
                The Approach
              </p>

              <p className="leading-7 text-white/55">
                {project.approach}
              </p>
            </section>
          </div>

          {/* Result */}
          <section className="rounded-2xl border border-emerald-500/15 bg-emerald-950/10 p-6 md:p-7">
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.25em] text-emerald-400">
              Result
            </p>

            <p className="max-w-4xl leading-8 text-white/70">
              {project.result}
            </p>
          </section>

          {/* Links */}
          <div className="flex flex-wrap gap-3 border-t border-white/10 pt-7">
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-5 py-3 text-sm font-semibold text-white transition hover:border-emerald-500/40 hover:bg-emerald-950/20 hover:text-emerald-400"
              >
                <Github size={17} />
                View GitHub
                <ArrowUpRight size={16} />
              </a>
            )}

            {project.demo && (
              <a
                href={project.demo}
                target="_blank"
                rel="noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="inline-flex items-center gap-2 rounded-xl bg-emerald-500 px-5 py-3 text-sm font-semibold text-black transition hover:bg-emerald-400"
              >
                Live Demo
                <ArrowUpRight size={16} />
              </a>
            )}

            {project.drive && (
              <a
                href={project.drive}
                target="_blank"
                rel="noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-5 py-3 text-sm font-semibold text-white/80 transition hover:border-emerald-500/40 hover:text-emerald-400"
              >
                Project Files
                <ArrowUpRight size={16} />
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}