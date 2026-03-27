export default function Contact() {
  return (
    <section id="contact" className="border-t border-slate-800 bg-slate-900/40">
      <div className="mx-auto max-w-6xl px-6 py-16">
        <h2 className="text-2xl font-semibold">Contatti</h2>
        <p className="mt-3 max-w-2xl text-slate-400 leading-8">
          Se vuoi collaborare con me, parlare di un progetto o semplicemente
          entrare in contatto, qui trovi i miei riferimenti principali.
        </p>

        <div className="mt-8 flex flex-wrap gap-4">
          <a
            href="mailto:tuaemail@example.com"
            className="rounded-2xl bg-cyan-400 px-5 py-3 font-semibold text-slate-950 transition hover:scale-105"
          >
            Email
          </a>

          <a
            href="https://github.com/tuousername"
            target="_blank"
            rel="noreferrer"
            className="rounded-2xl border border-slate-700 px-5 py-3 font-semibold transition hover:border-cyan-400 hover:text-cyan-400"
          >
            GitHub
          </a>

          <a
            href="https://linkedin.com/in/tuousername"
            target="_blank"
            rel="noreferrer"
            className="rounded-2xl border border-slate-700 px-5 py-3 font-semibold transition hover:border-cyan-400 hover:text-cyan-400"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </section>
  );
}
