import { projects } from "@/data/projects";
import { ProjectList } from "../_components/projects/ProjectList";

export const metadata = {
  title: "Projects | Fabian",
  description:
    "Una selezione di progetti sviluppati da Fabian, tra frontend, backend e applicazioni web moderne.",
};

export default function ProjectsPage() {
  return (
    <main className="bg-white text-slate-900 dark:bg-slate-950 dark:text-white">
      <section className="mx-auto max-w-6xl px-6 py-20">
        <p className="mb-4 text-sm uppercase tracking-[0.2em] text-cyan-500 dark:text-cyan-400">
          Projects
        </p>

        <h1 className="text-4xl font-bold leading-tight text-slate-900 md:text-5xl dark:text-white">
          Alcuni progetti su cui ho lavorato
        </h1>

        <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-600 dark:text-slate-300">
          Qui raccolgo una selezione di progetti che rappresentano il mio
          percorso tecnico. Ogni progetto mi ha aiutato a migliorare nella
          progettazione, nello sviluppo e nell’organizzazione del codice.
        </p>
      </section>

      <section className="border-y border-slate-200 bg-slate-100/70 dark:border-slate-800 dark:bg-slate-900/40">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <div className="max-w-2xl">
            <p className="text-sm uppercase tracking-[0.2em] text-cyan-500 dark:text-cyan-400">
              Projects
            </p>
            <h2 className="mt-3 text-3xl font-semibold text-slate-900 dark:text-white">
              Progetti selezionati
            </h2>
            <p className="mt-4 leading-8 text-slate-600 dark:text-slate-400">
              Una selezione di progetti su cui ho lavorato, tra frontend,
              backend, integrazioni e applicazioni web moderne.
            </p>
          </div>

          <ProjectList projects={projects} />
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-16">
        <div className="rounded-3xl border border-slate-200 bg-white p-8 dark:border-slate-800 dark:bg-slate-900">
          <h2 className="text-2xl font-semibold text-slate-900 dark:text-white">
            Vuoi vedere di più?
          </h2>

          <p className="mt-4 max-w-3xl leading-8 text-slate-600 dark:text-slate-300">
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
              className="rounded-2xl border border-slate-300 px-6 py-3 font-semibold text-slate-900 transition hover:border-cyan-500 hover:text-cyan-500 dark:border-slate-700 dark:text-white dark:hover:border-cyan-400 dark:hover:text-cyan-400"
            >
              Scopri di più su di me
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
