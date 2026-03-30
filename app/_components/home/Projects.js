import { projects } from "@/data/projects";
import ProjectCard from "../projects/ProjectCard";
import Link from "next/link";

export default function Projects() {
  return (
    <section
      id="projects"
      className="border-y border-slate-800 bg-slate-900/40"
    >
      <div className="mx-auto max-w-6xl px-6 py-14">
        <div className="mb-10 flex items-center justify-between gap-4">
          <div>
            <h2 className="text-2xl font-semibold">Progetti in evidenza</h2>
            <p className="mt-2 text-slate-400">
              Alcuni progetti che raccontano il mio percorso tecnico.
            </p>
          </div>

          <Link
            href="/projects"
            className="rounded-xl border border-slate-700 px-4 py-2 text-sm font-medium text-white transition hover:border-cyan-400 hover:text-cyan-400"
          >
            Tutti i progetti
          </Link>
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {projects.map((project) => (
            <ProjectCard project={project} key={project.title} />
          ))}
        </div>
      </div>
    </section>
  );
}
