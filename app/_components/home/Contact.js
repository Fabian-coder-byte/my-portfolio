import { contactLinks } from "@/data/contact-link";
import ContactCard from "../contact/ContactCard";
import Link from "next/link";

export default function Contact() {
  return (
    <section id="contact" className="mx-auto max-w-6xl px-6 py-16">
      <div className="mx-auto max-w-6xl px-6 py-14">
        <div className="mb-10 flex items-center justify-between gap-4">
          <div>
            <h2 className="text-2xl font-semibold">Contatti</h2>
            <p className="mt-3 max-w-2xl text-slate-400 leading-8">
              Se vuoi collaborare con me, parlare di un progetto o semplicemente
              entrare in contatto, qui trovi i miei riferimenti principali.
            </p>
          </div>

          <Link
            href="/contact"
            className="rounded-xl border border-slate-700 px-4 py-2 text-sm font-medium text-white transition hover:border-cyan-400 hover:text-cyan-400"
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
