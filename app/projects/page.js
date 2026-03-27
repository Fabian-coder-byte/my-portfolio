export const metadata = {
  title: "Projects | Fabian",
  description:
    "Una selezione di progetti sviluppati da Fabian, tra frontend, backend e applicazioni web moderne.",
};

const projects = [
  {
    title: "E-commerce Platform",
    description:
      "Applicazione web con gestione utenti, prodotti, ordini e ruoli multipli. Il progetto è pensato per essere scalabile e facilmente estendibile.",
    stack: ["Next.js", "TypeScript", "PostgreSQL"],
    github: "https://github.com/tuousername/ecommerce-platform",
    demo: "https://tuodominio-ecommerce.com",
  },
  {
    title: "Healthcare Dashboard",
    description:
      "Dashboard per la gestione di dati e processi applicativi, con integrazioni backend e aggiornamenti in tempo reale.",
    stack: [".NET", "Angular", "SignalR", "SQL Server"],
    github: "https://github.com/tuousername/healthcare-dashboard",
    demo: "",
  },
  {
    title: "Game Discovery App",
    description:
      "Applicazione dedicata all'esplorazione di videogiochi tramite API esterne, con focus su ricerca, navigazione e organizzazione dei dati.",
    stack: ["React", "Node.js", "Python"],
    github: "https://github.com/tuousername/game-discovery-app",
    demo: "",
  },
  {
    title: "Portfolio Website",
    description:
      "Sito portfolio personale sviluppato con Next.js per presentare il mio profilo, i miei progetti e le tecnologie con cui lavoro.",
    stack: ["Next.js", "Tailwind CSS", "Vercel"],
    github: "https://github.com/tuousername/portfolio",
    demo: "https://tuodominio-portfolio.com",
  },
];

export default function ProjectsPage() {
  return (
    <main className="bg-slate-950 text-white">
      <section className="mx-auto max-w-6xl px-6 py-20">
        <p className="mb-4 text-sm uppercase tracking-[0.2em] text-cyan-400">
          Projects
        </p>

        <h1 className="text-4xl font-bold leading-tight md:text-5xl">
          Alcuni progetti su cui ho lavorato
        </h1>

        <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
          Qui raccolgo una selezione di progetti che rappresentano il mio
          percorso tecnico. Ogni progetto mi ha aiutato a migliorare nella
          progettazione, nello sviluppo e nell’organizzazione del codice.
        </p>
      </section>

      <section className="border-y border-slate-800 bg-slate-900/40">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <div className="grid gap-8 md:grid-cols-2">
            {projects.map((project) => (
              <article
                key={project.title}
                className="rounded-3xl border border-slate-800 bg-slate-900 p-6 transition hover:-translate-y-1 hover:border-cyan-400"
              >
                <div className="mb-5 h-44 rounded-2xl bg-slate-800" />

                <h2 className="text-2xl font-semibold">{project.title}</h2>

                <p className="mt-4 leading-8 text-slate-300">
                  {project.description}
                </p>

                <div className="mt-6 flex flex-wrap gap-3">
                  {project.stack.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-full border border-slate-700 bg-slate-800 px-4 py-2 text-sm text-slate-200"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="mt-8 flex flex-wrap gap-4">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="rounded-2xl bg-cyan-400 px-5 py-3 font-semibold text-slate-950 transition hover:scale-105"
                  >
                    GitHub
                  </a>

                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noreferrer"
                      className="rounded-2xl border border-slate-700 px-5 py-3 font-semibold text-white transition hover:border-cyan-400 hover:text-cyan-400"
                    >
                      Live Demo
                    </a>
                  )}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-16">
        <div className="rounded-3xl border border-slate-800 bg-slate-900 p-8">
          <h2 className="text-2xl font-semibold">Vuoi vedere di più?</h2>

          <p className="mt-4 max-w-3xl leading-8 text-slate-300">
            Questa è solo una selezione. Posso raccontare più nel dettaglio il
            contesto, le scelte tecniche e le soluzioni adottate nei singoli
            progetti.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="/contact"
              className="rounded-2xl bg-cyan-400 px-6 py-3 font-semibold text-slate-950 transition hover:scale-105"
            >
              Contattami
            </a>

            <a
              href="/about"
              className="rounded-2xl border border-slate-700 px-6 py-3 font-semibold text-white transition hover:border-cyan-400 hover:text-cyan-400"
            >
              Scopri di più su di me
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
