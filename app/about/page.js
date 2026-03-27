export const metadata = {
  title: "About | Fabian",
  description:
    "Scopri di più su Fabian, web developer appassionato di sviluppo frontend, backend e applicazioni web moderne.",
};

const skills = {
  frontend: ["React", "Next.js", "Angular", "TypeScript", "Tailwind CSS"],
  backend: [".NET", "Node.js", "Java Spring", "REST API"],
  database: ["PostgreSQL", "SQL Server", "MongoDB"],
  tools: ["Git", "Azure", "Docker", "Hangfire", "SignalR"],
};

const experiences = [
  {
    title: ".NET Academy",
    description:
      "Ho seguito un percorso formativo intensivo focalizzato sullo sviluppo software, consolidando basi pratiche su backend, database e architettura applicativa.",
  },
  {
    title: "Internship su progetti interni",
    description:
      "Ho lavorato su applicazioni interne come sistemi di inventario e gestione prenotazioni, collaborando allo sviluppo di funzionalità reali.",
  },
  {
    title: "Consulenza e sviluppo web",
    description:
      "Successivamente ho continuato il mio percorso lavorando su progetti più strutturati, occupandomi sia di frontend che di backend, integrazioni e processi applicativi.",
  },
];

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
        <h2 className="text-2xl font-semibold">Percorso</h2>

        <div className="mt-8 space-y-6">
          {experiences.map((item) => (
            <article
              key={item.title}
              className="rounded-3xl border border-slate-800 bg-slate-900 p-6"
            >
              <h3 className="text-xl font-semibold text-cyan-400">
                {item.title}
              </h3>
              <p className="mt-3 leading-8 text-slate-300">
                {item.description}
              </p>
            </article>
          ))}
        </div>
      </section>

      <section className="border-y border-slate-800 bg-slate-900/40">
        <div className="mx-auto max-w-5xl px-6 py-16">
          <h2 className="text-2xl font-semibold">Competenze</h2>

          <div className="mt-10 grid gap-8 md:grid-cols-2">
            <div className="rounded-3xl border border-slate-800 bg-slate-900 p-6">
              <h3 className="text-lg font-semibold">Frontend</h3>
              <div className="mt-4 flex flex-wrap gap-3">
                {skills.frontend.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-full border border-slate-700 bg-slate-800 px-4 py-2 text-sm text-slate-200"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div className="rounded-3xl border border-slate-800 bg-slate-900 p-6">
              <h3 className="text-lg font-semibold">Backend</h3>
              <div className="mt-4 flex flex-wrap gap-3">
                {skills.backend.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-full border border-slate-700 bg-slate-800 px-4 py-2 text-sm text-slate-200"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div className="rounded-3xl border border-slate-800 bg-slate-900 p-6">
              <h3 className="text-lg font-semibold">Database</h3>
              <div className="mt-4 flex flex-wrap gap-3">
                {skills.database.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-full border border-slate-700 bg-slate-800 px-4 py-2 text-sm text-slate-200"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div className="rounded-3xl border border-slate-800 bg-slate-900 p-6">
              <h3 className="text-lg font-semibold">Tools & Tecnologie</h3>
              <div className="mt-4 flex flex-wrap gap-3">
                {skills.tools.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-full border border-slate-700 bg-slate-800 px-4 py-2 text-sm text-slate-200"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
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
