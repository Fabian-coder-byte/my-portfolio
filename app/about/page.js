import { couses } from "@/data/courses";
import { skills } from "@/data/skills";
import SkillCard from "../_components/about/SkillCard";

export const metadata = {
  title: "About | Fabian",
  description:
    "Scopri di più su Fabian, web developer appassionato di sviluppo frontend, backend e applicazioni web moderne.",
};

export default function AboutPage() {
  return (
    <main className="bg-slate-950 text-white">
      <section className="mx-auto max-w-5xl px-6 py-20">
        <p className="mb-4 text-sm uppercase tracking-[0.2em] text-cyan-400">
          About me
        </p>

        <h1 className="text-4xl font-bold leading-tight md:text-5xl">
          Chi sono e come lavoro
        </h1>

        <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
          Sono Fabian, uno sviluppatore web interessato alla creazione di
          applicazioni moderne, curate e ben strutturate. Mi piace lavorare su
          interfacce chiare, backend solidi e architetture che abbiano senso sia
          oggi che quando il progetto cresce.
        </p>
      </section>

      <section className="border-y border-slate-800 bg-slate-900/40">
        <div className="mx-auto max-w-5xl px-6 py-16">
          <div className="grid gap-10 md:grid-cols-2">
            <div>
              <h2 className="text-2xl font-semibold">Il mio approccio</h2>
              <p className="mt-4 leading-8 text-slate-300">
                Mi piace sviluppare soluzioni che non siano solo funzionanti, ma
                anche leggibili, mantenibili e piacevoli da usare. Cerco di
                unire attenzione tecnica e visione pratica, curando sia la parte
                visuale sia la logica applicativa.
              </p>
              <p className="mt-4 leading-8 text-slate-300">
                Nei progetti cerco sempre di capire il problema prima della
                soluzione, per costruire applicazioni che abbiano una struttura
                pulita e un’esperienza utente chiara.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold">Cosa mi interessa</h2>
              <p className="mt-4 leading-8 text-slate-300">
                Mi appassionano lo sviluppo web, le architetture moderne, le
                integrazioni tra servizi, il backend engineering e la creazione
                di progetti che uniscono tecnologia e utilità reale.
              </p>
              <p className="mt-4 leading-8 text-slate-300">
                Mi piace anche continuare a imparare, esplorare nuovi strumenti
                e migliorare costantemente il mio modo di progettare software.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-6 py-16">
        <div className="max-w-2xl">
          <h2 className="text-2xl font-semibold text-white">
            Percorso di formazione
          </h2>
          <p className="mt-3 text-slate-400">
            Una panoramica del mio percorso di crescita tra formazione tecnica,
            esperienza pratica e sviluppo di competenze nel mondo web e
            software.
          </p>
        </div>

        <div className="mt-10 grid gap-6">
          {couses.map((item) => (
            <article
              key={item.name}
              className="rounded-3xl border border-slate-800 bg-slate-900/80 p-6 shadow-sm transition hover:border-cyan-500/40 hover:bg-slate-900"
            >
              <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                <div>
                  <h3 className="text-xl font-semibold text-cyan-400">
                    {item.name}
                  </h3>
                  <p className="mt-1 text-sm text-slate-400">
                    {item.institution}
                  </p>
                </div>

                <span className="w-fit rounded-full border border-slate-700 bg-slate-800 px-3 py-1 text-sm text-slate-300">
                  {item.year}
                </span>
              </div>

              <p className="mt-4 leading-7 text-slate-300">{item.summary}</p>

              {item.skills?.length > 0 && (
                <div className="mt-5 flex flex-wrap gap-2">
                  {item.skills.map((skill) => (
                    <span
                      key={skill}
                      className="rounded-full bg-slate-800 px-3 py-1 text-sm text-slate-300"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              )}
            </article>
          ))}
        </div>
      </section>

      <section className="border-y border-slate-800 bg-slate-900/40">
        <div className="mx-auto max-w-5xl px-6 py-16">
          <div className="max-w-2xl">
            <h2 className="text-2xl font-semibold text-white">Competenze</h2>
            <p className="mt-3 text-slate-400">
              Tecnologie e strumenti con cui lavoro maggiormente nello sviluppo
              di applicazioni web moderne, tra frontend, backend, database e
              workflow di sviluppo.
            </p>
          </div>

          <div className="mt-10 grid gap-8 md:grid-cols-2">
            <SkillCard title="Frontend" items={skills.frontend} />
            <SkillCard title="Backend" items={skills.backend} />
            <SkillCard title="Database" items={skills.database} />
            <SkillCard title="Tools & Tecnologie" items={skills.tools} />
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-6 py-16">
        <div className="rounded-3xl border border-slate-800 bg-slate-900 p-8">
          <h2 className="text-2xl font-semibold">Obiettivo</h2>
          <p className="mt-4 max-w-3xl leading-8 text-slate-300">
            Voglio continuare a crescere come sviluppatore costruendo
            applicazioni web sempre più complete, robuste e ben progettate,
            migliorando sia sul piano tecnico sia su quello progettuale.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="/projects"
              className="rounded-2xl bg-cyan-400 px-6 py-3 font-semibold text-slate-950 transition hover:scale-105"
            >
              Guarda i progetti
            </a>
            <a
              href="/contact"
              className="rounded-2xl border border-slate-700 px-6 py-3 font-semibold text-white transition hover:border-cyan-400 hover:text-cyan-400"
            >
              Contattami
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
