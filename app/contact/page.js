import { contactLinks } from "@/data/contact-link";

export const metadata = {
  title: "Contact | Fabian",
  description:
    "Contatta Fabian per collaborazioni, progetti o opportunità lavorative.",
};

export default function ContactPage() {
  return (
    <main className="bg-slate-950 text-white">
      <section className="mx-auto max-w-5xl px-6 py-20">
        <p className="mb-4 text-sm uppercase tracking-[0.2em] text-cyan-400">
          Contact
        </p>

        <h1 className="text-4xl font-bold leading-tight md:text-5xl">
          Mettiamoci in contatto
        </h1>

        <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
          Se vuoi parlare di un progetto, di una collaborazione o di
          un’opportunità professionale, puoi scrivermi direttamente da qui
          oppure usare uno dei miei riferimenti.
        </p>
      </section>

      <section className="border-y border-slate-800 bg-slate-900/40">
        <div className="mx-auto max-w-5xl px-6 py-16">
          <div className="grid gap-6 md:grid-cols-3">
            {contactLinks.map((item) => (
              <a
                key={item.title}
                href={item.href}
                target={item.href.startsWith("http") ? "_blank" : undefined}
                rel={item.href.startsWith("http") ? "noreferrer" : undefined}
                className="group rounded-3xl border border-slate-800 bg-slate-900 p-6 transition duration-300 hover:-translate-y-1 hover:border-cyan-400/60 hover:bg-slate-900/80"
              >
                <h2 className="text-xl font-semibold text-cyan-400 transition group-hover:text-cyan-300">
                  {item.title}
                </h2>

                <p className="mt-3 break-all text-sm font-medium text-white">
                  {item.value}
                </p>

                <p className="mt-4 leading-7 text-slate-400">
                  {item.description}
                </p>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-6 py-16">
        <div className="grid gap-8 lg:grid-cols-[1.3fr_0.7fr]">
          <div className="rounded-3xl border border-slate-800 bg-slate-900 p-8">
            <div className="mb-8">
              <h2 className="text-2xl font-semibold">Inviami un messaggio</h2>
              <p className="mt-3 max-w-2xl leading-8 text-slate-400">
                Raccontami in breve il contesto, il tipo di progetto o la
                collaborazione che hai in mente. Ti ricontatterò attraverso i
                riferimenti che lasci nel form.
              </p>
            </div>

            <form
              action="https://formspree.io/f/your-form-id"
              method="POST"
              className="space-y-6"
            >
              <div className="grid gap-6 md:grid-cols-2">
                <div>
                  <label
                    htmlFor="name"
                    className="mb-2 block text-sm font-medium text-slate-200"
                  >
                    Nome
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    placeholder="Il tuo nome"
                    required
                    className="w-full rounded-2xl border border-slate-700 bg-slate-950 px-4 py-3 text-white outline-none transition placeholder:text-slate-500 focus:border-cyan-400"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="mb-2 block text-sm font-medium text-slate-200"
                  >
                    Email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="tuamail@email.com"
                    required
                    className="w-full rounded-2xl border border-slate-700 bg-slate-950 px-4 py-3 text-white outline-none transition placeholder:text-slate-500 focus:border-cyan-400"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="subject"
                  className="mb-2 block text-sm font-medium text-slate-200"
                >
                  Oggetto
                </label>
                <input
                  id="subject"
                  name="subject"
                  type="text"
                  placeholder="Collaborazione, progetto, opportunità..."
                  required
                  className="w-full rounded-2xl border border-slate-700 bg-slate-950 px-4 py-3 text-white outline-none transition placeholder:text-slate-500 focus:border-cyan-400"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="mb-2 block text-sm font-medium text-slate-200"
                >
                  Messaggio
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={7}
                  placeholder="Scrivi qui il tuo messaggio..."
                  required
                  className="w-full rounded-2xl border border-slate-700 bg-slate-950 px-4 py-3 text-white outline-none transition placeholder:text-slate-500 focus:border-cyan-400"
                />
              </div>

              <button
                type="submit"
                className="rounded-2xl bg-cyan-400 px-6 py-3 font-semibold text-slate-950 transition hover:scale-[1.02] hover:bg-cyan-300"
              >
                Invia messaggio
              </button>
            </form>
          </div>

          <aside className="space-y-6">
            <div className="rounded-3xl border border-slate-800 bg-slate-900 p-6">
              <h3 className="text-lg font-semibold text-white">
                Disponibilità
              </h3>
              <p className="mt-4 leading-7 text-slate-300">
                Sono disponibile per progetti web, collaborazioni freelance,
                opportunità professionali e confronti su frontend, backend e
                sviluppo software.
              </p>
            </div>

            <div className="rounded-3xl border border-slate-800 bg-slate-900 p-6">
              <h3 className="text-lg font-semibold text-white">
                Tempi di risposta
              </h3>
              <p className="mt-4 leading-7 text-slate-300">
                Cerco di rispondere nel più breve tempo possibile, soprattutto
                per richieste legate a collaborazioni e progetti concreti.
              </p>
            </div>

            <div className="rounded-3xl border border-slate-800 bg-slate-900 p-6">
              <h3 className="text-lg font-semibold text-white">Preferenze</h3>
              <p className="mt-4 leading-7 text-slate-300">
                Per richieste di lavoro o collaborazioni, è utile includere una
                breve descrizione del progetto, stack tecnologico e obiettivi.
              </p>
            </div>
          </aside>
        </div>
      </section>
    </main>
  );
}
