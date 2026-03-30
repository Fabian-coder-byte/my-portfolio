import { projects } from "@/data/projects";
import ProjectCard from "../_components/projects/ProjectCard";

export const metadata = {
  title: "Projects | Fabian",
  description:
    "Una selezione di progetti sviluppati da Fabian, tra frontend, backend e applicazioni web moderne.",
};

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
              <ProjectCard project={project} key={project.title} />
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
