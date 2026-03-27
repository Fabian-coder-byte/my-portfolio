import { projects } from "@/data/projects";
import ProjectCard from "../projects/ProjectCard";

export default function Projects() {
  return (
    <section id="projects" className="mx-auto max-w-6xl px-6 py-16">
      <div className="mb-10 flex items-center justify-between gap-4">
        <div>
          <h2 className="text-2xl font-semibold">Progetti in evidenza</h2>
          <p className="mt-2 text-slate-400">
            Alcuni progetti che raccontano il mio percorso tecnico.
          </p>
        </div>

        <a
          href="/projects"
          className="rounded-xl border border-slate-700 px-4 py-2 text-sm font-medium text-white transition hover:border-cyan-400 hover:text-cyan-400"
        >
          Tutti i progetti
        </a>
      </div>

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {projects.map((project) => (
          <ProjectCard project={project} key={project.title} />
        ))}
      </div>
    </section>
  );
}
