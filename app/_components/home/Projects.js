const featuredProjects = [
  {
    title: "E-commerce Platform",
    description:
      "Applicazione web con gestione utenti, ordini e ruoli multipli, progettata con attenzione alla scalabilità.",
    tech: ["Next.js", "TypeScript", "PostgreSQL"],
  },
  {
    title: "Healthcare Dashboard",
    description:
      "Dashboard per la gestione di dati clinici e processi backend, con attenzione a integrazioni e flussi strutturati.",
    tech: [".NET", "Angular", "SignalR"],
  },
  {
    title: "Game Discovery App",
    description:
      "Progetto dedicato al mondo videoludico per esplorare titoli, dettagli e informazioni provenienti da API esterne.",
    tech: ["React", "Node.js", "Python"],
  },
];
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
        {featuredProjects.map((project) => (
          <article
            key={project.title}
            className="rounded-3xl border border-slate-800 bg-slate-900 p-6 transition hover:-translate-y-1 hover:border-cyan-400"
          >
            <div className="mb-4 h-40 rounded-2xl bg-slate-800" />

            <h3 className="text-xl font-semibold">{project.title}</h3>

            <p className="mt-3 text-sm leading-7 text-slate-400">
              {project.description}
            </p>

            <div className="mt-5 flex flex-wrap gap-2">
              {project.tech.map((item) => (
                <span
                  key={item}
                  className="rounded-full bg-slate-800 px-3 py-1 text-xs text-slate-300"
                >
                  {item}
                </span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
