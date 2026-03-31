import { skills } from "@/data/skills";
import SkillCard from "../_components/about/SkillCard";
import Link from "next/link";
import DownloadCv from "../_components/shared/DownloadCv";
import { learningItems } from "@/data/learing-items";
import { getLearningTypeLabel, groupLearningItems } from "@/lib/utils";
import { LearningSection } from "../_components/about/LearningSection";

export const metadata = {
  title: "About | Fabian",
  description:
    "Scopri di più su Fabian, web developer appassionato di sviluppo frontend, backend e applicazioni web moderne.",
};

export default function AboutPage() {
  const { courses, certifications, certificates } =
    groupLearningItems(learningItems);

  return (
    <main className="bg-white text-slate-900 dark:bg-slate-950 dark:text-white">
      <section className="mx-auto max-w-5xl px-6 py-20">
        <p className="mb-4 text-sm uppercase tracking-[0.2em] text-cyan-500 dark:text-cyan-400">
          About me
        </p>

        <h1 className="text-4xl font-bold leading-tight text-slate-900 md:text-5xl dark:text-white">
          Chi sono e come lavoro
        </h1>

        <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-600 dark:text-slate-300">
          Sono Fabian, uno sviluppatore web interessato alla creazione di
          applicazioni moderne, curate e ben strutturate. Mi piace lavorare su
          interfacce chiare, backend solidi e architetture che abbiano senso sia
          oggi che quando il progetto cresce.
        </p>
      </section>

      <section className="border-y border-slate-200 bg-slate-100/70 dark:border-slate-800 dark:bg-slate-900/40">
        <div className="mx-auto max-w-5xl px-6 py-16">
          <div className="grid gap-10 md:grid-cols-2">
            <div>
              <h2 className="text-2xl font-semibold text-slate-900 dark:text-white">
                Il mio approccio
              </h2>
              <p className="mt-4 leading-8 text-slate-600 dark:text-slate-300">
                Mi piace sviluppare soluzioni che non siano solo funzionanti, ma
                anche leggibili, mantenibili e piacevoli da usare.
              </p>
              <p className="mt-4 leading-8 text-slate-600 dark:text-slate-300">
                Nei progetti cerco sempre di capire il problema prima della
                soluzione, per costruire applicazioni pulite e chiare.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold text-slate-900 dark:text-white">
                Cosa mi interessa
              </h2>
              <p className="mt-4 leading-8 text-slate-600 dark:text-slate-300">
                Mi appassionano sviluppo web, architetture moderne, integrazioni
                tra servizi e backend engineering.
              </p>
              <p className="mt-4 leading-8 text-slate-600 dark:text-slate-300">
                Mi piace continuare a imparare e migliorare costantemente il mio
                modo di progettare software.
              </p>
            </div>
          </div>
        </div>
      </section>

      <LearningSection
        title="Percorso di formazione"
        description="Una panoramica del mio percorso di crescita tra formazione tecnica, esperienza pratica e sviluppo di competenze nel mondo web e software."
        items={courses}
        getLearningTypeLabel={getLearningTypeLabel}
      />

      <div className="mx-auto max-w-5xl px-6">
        <div className="h-px w-full bg-slate-200 dark:bg-slate-800" />
      </div>

      <LearningSection
        title="Certificazioni"
        description="Certificazioni e percorsi che hanno contribuito alla mia crescita tecnica e professionale."
        items={certifications}
        getLearningTypeLabel={getLearningTypeLabel}
      />

      {certificates.length > 0 && (
        <>
          <div className="mx-auto max-w-5xl px-6">
            <div className="h-px w-full bg-slate-200 dark:bg-slate-800" />
          </div>

          <LearningSection
            title="Attestati"
            description="Attestati di completamento e percorsi aggiuntivi rilevanti per il mio percorso."
            items={certificates}
            getLearningTypeLabel={getLearningTypeLabel}
          />
        </>
      )}

      <section className="border-y border-slate-200 bg-slate-100/70 dark:border-slate-800 dark:bg-slate-900/40">
        <div className="mx-auto max-w-5xl px-6 py-16">
          <div className="max-w-2xl">
            <h2 className="text-2xl font-semibold text-slate-900 dark:text-white">
              Competenze
            </h2>
            <p className="mt-3 text-slate-600 dark:text-slate-400">
              Tecnologie e strumenti con cui lavoro maggiormente nello sviluppo
              di applicazioni web moderne.
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
        <div className="rounded-3xl border border-slate-200 bg-white p-8 dark:border-slate-800 dark:bg-slate-900">
          <h2 className="text-2xl font-semibold text-slate-900 dark:text-white">
            Vuoi saperne di più?
          </h2>
          <p className="mt-4 max-w-3xl leading-8 text-slate-600 dark:text-slate-300">
            Puoi esplorare i miei progetti oppure scaricare il CV per avere una
            panoramica più completa del mio percorso e delle mie competenze.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              href="/projects"
              className="rounded-2xl bg-cyan-400 px-6 py-3 font-semibold text-slate-950 transition hover:scale-105"
            >
              Guarda i progetti
            </Link>

            <DownloadCv />
          </div>
        </div>
      </section>
    </main>
  );
}
