import Link from "next/link";

export const metadata = {
  title: "404 | Pagina non trovata",
  description: "La pagina che stai cercando non esiste.",
};

export default function NotFound() {
  return (
    <main className="relative flex min-h-[70vh] items-center justify-center overflow-hidden bg-slate-950 px-6 py-20 text-white">
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
        <span className="text-[10rem] font-bold leading-none text-slate-900 md:text-[16rem]">
          404
        </span>
      </div>

      <div className="relative z-10 mx-auto max-w-2xl text-center">
        <p className="mb-4 text-sm uppercase tracking-[0.25em] text-cyan-400">
          Error 404
        </p>

        <h1 className="text-4xl font-bold leading-tight md:text-6xl">
          Questa pagina non esiste
        </h1>

        <p className="mt-6 text-lg leading-8 text-slate-300">
          Hai raggiunto una rotta fantasma. Nessun problema: da qui puoi tornare
          alle sezioni principali del portfolio.
        </p>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <Link
            href="/"
            className="rounded-2xl bg-cyan-400 px-6 py-3 font-semibold text-slate-950 transition hover:scale-105"
          >
            Home
          </Link>

          <Link
            href="/projects"
            className="rounded-2xl border border-slate-700 px-6 py-3 font-semibold text-white transition hover:border-cyan-400 hover:text-cyan-400"
          >
            Projects
          </Link>

          <Link
            href="/contact"
            className="rounded-2xl border border-slate-700 px-6 py-3 font-semibold text-white transition hover:border-cyan-400 hover:text-cyan-400"
          >
            Contact
          </Link>
        </div>
      </div>
    </main>
  );
}
