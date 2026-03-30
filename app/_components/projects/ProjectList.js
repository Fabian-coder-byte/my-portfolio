import ProjectCard from "./ProjectCard";

export function ProjectList({ projects }) {
  return (
    <div className="mt-12 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
      {projects.length ? (
        projects.map((project) => (
          <ProjectCard project={project} key={project.title} />
        ))
      ) : (
        <div className="md:col-span-2 xl:col-span-3">
          <div className="rounded-3xl border border-dashed border-slate-700 bg-slate-900/70 p-10 text-center">
            <h3 className="text-xl font-semibold text-white">
              Nessun progetto disponibile
            </h3>
            <p className="mt-3 text-slate-400">
              Sto ancora preparando questa sezione. Torna presto per vedere i
              progetti pubblicati.
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
