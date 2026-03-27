export const metadata = {
  title: "Contact | Fabian",
  description:
    "Contatta Fabian per collaborazioni, progetti o opportunità lavorative.",
};

const contactLinks = [
  {
    title: "Email",
    value: "tuaemail@example.com",
    href: "mailto:tuaemail@example.com",
    description: "Per collaborazioni, opportunità o richieste dirette.",
  },
  {
    title: "GitHub",
    value: "github.com/tuousername",
    href: "https://github.com/tuousername",
    description: "Per vedere repository, codice e progetti personali.",
  },
  {
    title: "LinkedIn",
    value: "linkedin.com/in/tuousername",
    href: "https://linkedin.com/in/tuousername",
    description: "Per contatti professionali e networking.",
  },
];

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
          Se vuoi parlare di un progetto, di una collaborazione o semplicemente
          entrare in contatto, qui trovi i miei riferimenti principali.
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
                className="rounded-3xl border border-slate-800 bg-slate-900 p-6 transition hover:-translate-y-1 hover:border-cyan-400"
              >
                <h2 className="text-xl font-semibold text-cyan-400">
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
        <div className="rounded-3xl border border-slate-800 bg-slate-900 p-8">
          <h2 className="text-2xl font-semibold">Disponibilità</h2>

          <p className="mt-4 max-w-3xl leading-8 text-slate-300">
            Sono disponibile per confronti su progetti web, collaborazioni,
            opportunità professionali e scambi di idee su sviluppo software e
            tecnologie moderne.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="mailto:tuaemail@example.com"
              className="rounded-2xl bg-cyan-400 px-6 py-3 font-semibold text-slate-950 transition hover:scale-105"
            >
              Scrivimi una email
            </a>

            <a
              href="/projects"
              className="rounded-2xl border border-slate-700 px-6 py-3 font-semibold text-white transition hover:border-cyan-400 hover:text-cyan-400"
            >
              Guarda i progetti
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
