import Link from "next/link";

export default function ProjectCard({ project }) {
  return (
    <article
      key={project.title}
      className="rounded-3xl border border-slate-800 bg-slate-900 p-6 transition hover:-translate-y-1 hover:border-cyan-400"
    >
      {/* <div className="mb-4 h-40 rounded-2xl bg-slate-800" /> */}

      <h3 className="text-xl font-semibold">{project.title}</h3>

      <p className="mt-3 text-sm leading-7 text-slate-400">
        {project.shortDescription}
      </p>

      <div className="mt-5 flex flex-wrap gap-2">
        {project.stack.map((item) => (
          <span
            key={item}
            className="rounded-full bg-slate-800 px-3 py-1 text-xs text-slate-300"
          >
            {item}
          </span>
        ))}
      </div>
      <div className="mt-8 flex flex-wrap gap-4">
        <Link
          href={project.github}
          target="_blank"
          rel="noreferrer"
          className="rounded-2xl bg-cyan-400 px-5 py-3 font-semibold text-slate-950 transition hover:scale-105"
        >
          GitHub
        </Link>

        {project.demo && (
          <Link
            href={project.demo}
            target="_blank"
            rel="noreferrer"
            className="rounded-2xl border border-slate-700 px-5 py-3 font-semibold text-white transition hover:border-cyan-400 hover:text-cyan-400"
          >
            Live Demo
          </Link>
        )}

        <Link
          href={`/projects/${project.slug}`}
          className="rounded-2xl border border-slate-700 px-5 py-3 font-semibold text-white transition hover:border-cyan-400 hover:text-cyan-400"
        >
          Dettaglio
        </Link>
      </div>
    </article>
  );
}
