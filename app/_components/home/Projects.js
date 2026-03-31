import { projects } from "@/data/projects";
import Link from "next/link";
import { ProjectList } from "../projects/ProjectList";

export default function Projects() {
  return (
    <section
      id="projects"
      className="border-y border-slate-200 bg-slate-100/70 dark:border-slate-800 dark:bg-slate-900/40"
    >
      <div className="mx-auto max-w-6xl px-6 py-14">
        <div className="mb-10 flex items-center justify-between gap-4">
          <div>
            <h2 className="text-2xl font-semibold text-slate-900 dark:text-white">
              Progetti in evidenza
            </h2>
            <p className="mt-2 text-slate-600 dark:text-slate-400">
              Alcuni progetti che raccontano il mio percorso tecnico.
            </p>
          </div>

          <Link
            href="/projects"
            className="rounded-xl border border-slate-300 px-4 py-2 text-sm font-medium text-slate-900 transition hover:border-cyan-500 hover:text-cyan-500 dark:border-slate-700 dark:text-white dark:hover:border-cyan-400 dark:hover:text-cyan-400"
          >
            Tutti i progetti
          </Link>
        </div>

        <ProjectList projects={projects} />
      </div>
    </section>
  );
}
