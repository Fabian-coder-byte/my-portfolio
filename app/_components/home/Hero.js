import Image from "next/image";
import pictureProfile from "@/public/profile/user2.jpeg";
export default function Hero() {
  return (
    <section className="mx-auto flex max-w-6xl flex-col gap-12 px-6 py-20 md:flex-row md:items-center md:justify-between">
      <div className="max-w-2xl">
        <p className="mb-4 text-sm uppercase tracking-[0.2em] text-cyan-400">
          Portfolio personale
        </p>

        <h1 className="text-4xl font-bold leading-tight md:text-6xl">
          Ciao, sono <span className="text-cyan-400">Fabian</span>
          <br />
          Web Developer
        </h1>

        <p className="mt-6 max-w-xl text-lg leading-8 text-slate-300">
          Realizzo applicazioni web moderne con attenzione a frontend, backend e
          architetture pulite. Mi piace costruire esperienze chiare, performanti
          e ben organizzate.
        </p>

        <div className="mt-8 flex flex-wrap gap-4">
          <a
            href="#projects"
            className="rounded-2xl bg-cyan-400 px-6 py-3 font-semibold text-slate-950 transition hover:scale-105"
          >
            Vedi i progetti
          </a>

          <a
            href="#contact"
            className="rounded-2xl border border-slate-700 px-6 py-3 font-semibold text-white transition hover:border-cyan-400 hover:text-cyan-400"
          >
            Contattami
          </a>
        </div>
      </div>

      <div className="flex justify-center">
        <div className="relative h-72 w-72 overflow-hidden rounded-3xl border border-slate-800 bg-slate-900 shadow-2xl">
          <Image
            src={pictureProfile}
            alt="Foto profilo Fabian"
            fill
            className="object-cover"
            priority
          />
        </div>
      </div>
    </section>
  );
}
