import { contactLinks } from "@/data/contact-link";
import ContactCard from "../contact/ContactCard";
import Link from "next/link";

export default function Contact() {
  return (
    <section id="contact" className="mx-auto max-w-6xl px-6 py-16">
      <div className="mx-auto max-w-6xl px-6 py-14">
        <div className="mb-10 flex items-center justify-between gap-4">
          <div>
            <h2 className="text-2xl font-semibold text-slate-900 dark:text-white">
              Contatti
            </h2>
            <p className="mt-3 max-w-2xl leading-8 text-slate-600 dark:text-slate-400">
              Se vuoi collaborare con me, parlare di un progetto o semplicemente
              entrare in contatto, qui trovi i miei riferimenti principali.
            </p>
          </div>

          <Link
            href="/contact"
            className="rounded-xl border border-slate-300 px-4 py-2 text-sm font-medium text-slate-900 transition hover:border-cyan-500 hover:text-cyan-500 dark:border-slate-700 dark:text-white dark:hover:border-cyan-400 dark:hover:text-cyan-400"
          >
            Contattami
          </Link>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {contactLinks.map((item, i) => (
            <ContactCard item={item} key={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
