import Image from "next/image";
import pictureProfile from "@/public/profile/user2.jpeg";
import DownloadCv from "../shared/DownloadCv";

export default function Hero() {
  return (
    <section className="mx-auto flex max-w-6xl flex-col gap-12 px-6 py-20 md:flex-row md:items-center md:justify-between">
      <div className="max-w-2xl">
        <p className="mb-4 text-sm uppercase tracking-[0.2em] text-cyan-500 dark:text-cyan-400">
          Portfolio personale
        </p>

        <h1 className="text-4xl font-bold leading-tight text-slate-900 md:text-6xl dark:text-white">
          Ciao, sono{" "}
          <span className="text-cyan-500 dark:text-cyan-400">Fabian</span>
          <br />
          Web Developer
        </h1>

        <p className="mt-6 max-w-xl text-lg leading-8 text-slate-600 dark:text-slate-300">
          Realizzo applicazioni web moderne con attenzione a frontend, backend e
          architetture pulite. Mi piace costruire esperienze chiare, performanti
          e ben organizzate.
        </p>

        <div className="mt-8 grid max-w-xl grid-cols-2 gap-4 sm:grid-cols-4">
          <div className="rounded-2xl border border-slate-200 bg-slate-100 p-4 dark:border-slate-800 dark:bg-slate-900/70">
            <p className="text-xs uppercase tracking-wide text-slate-500 dark:text-slate-400">
              Ruolo
            </p>
            <p className="mt-2 text-sm font-medium text-slate-900 dark:text-white">
              Full Stack Developer
            </p>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-slate-100 p-4 dark:border-slate-800 dark:bg-slate-900/70">
            <p className="text-xs uppercase tracking-wide text-slate-500 dark:text-slate-400">
              Focus
            </p>
            <p className="mt-2 text-sm font-medium text-slate-900 dark:text-white">
              Frontend & Backend
            </p>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-slate-100 p-4 dark:border-slate-800 dark:bg-slate-900/70">
            <p className="text-xs uppercase tracking-wide text-slate-500 dark:text-slate-400">
              Base
            </p>
            <p className="mt-2 text-sm font-medium text-slate-900 dark:text-white">
              Italia
            </p>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-slate-100 p-4 dark:border-slate-800 dark:bg-slate-900/70">
            <p className="text-xs uppercase tracking-wide text-slate-500 dark:text-slate-400">
              Stack
            </p>
            <p className="mt-2 text-sm font-medium text-slate-900 dark:text-white">
              React / .NET
            </p>
          </div>
        </div>

        <div className="mt-8 flex flex-wrap gap-4">
          <a
            href="#projects"
            className="rounded-2xl bg-cyan-400 px-6 py-3 font-semibold text-slate-950 transition hover:scale-105"
          >
            Vedi i progetti
          </a>

          <a
            href="#contact"
            className="rounded-2xl border border-slate-300 px-6 py-3 font-semibold text-slate-900 transition hover:border-cyan-500 hover:text-cyan-500 dark:border-slate-700 dark:text-white dark:hover:border-cyan-400 dark:hover:text-cyan-400"
          >
            Contattami
          </a>

          <DownloadCv />
        </div>
      </div>

      <div className="flex justify-center">
        <div className="relative h-72 w-72 overflow-hidden rounded-3xl border border-slate-200 bg-slate-100 shadow-2xl dark:border-slate-800 dark:bg-slate-900 md:h-80 md:w-80">
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
