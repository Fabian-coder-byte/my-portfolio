import { contactLinks } from "@/data/contact-link";

export default function Contact() {
  return (
    <section id="contact" className="mx-auto max-w-6xl px-6 py-16">
      <h2 className="text-2xl font-semibold">Contatti</h2>
      <p className="mt-3 max-w-2xl text-slate-400 leading-8">
        Se vuoi collaborare con me, parlare di un progetto o semplicemente
        entrare in contatto, qui trovi i miei riferimenti principali.
      </p>

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

            <p className="mt-4 leading-7 text-slate-400">{item.description}</p>
          </a>
        ))}
      </div>
    </section>
  );
}
