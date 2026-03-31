import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getProjectBySlug, projects } from "@/data/projects";

export function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    return {
      title: "Project Not Found | Fabian",
    };
  }

  return {
    title: `${project.title} | Fabian`,
    description: project.shortDescription,
  };
}

export default async function ProjectDetailPage({ params }) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  return (
    <main className="bg-white text-slate-900 dark:bg-slate-950 dark:text-white">
      <section className="mx-auto max-w-6xl px-6 py-20">
        <Link
          href="/projects"
          className="mb-8 inline-flex text-sm text-cyan-500 transition hover:text-cyan-600 dark:text-cyan-400 dark:hover:text-cyan-300"
        >
          ← Torna ai progetti
        </Link>

        <div className="grid gap-12 lg:grid-cols-[1.2fr_0.8fr] lg:items-start">
          <div>
            <p className="mb-4 text-sm uppercase tracking-[0.2em] text-cyan-500 dark:text-cyan-400">
              Project Detail
            </p>

            <h1 className="text-4xl font-bold leading-tight text-slate-900 md:text-5xl dark:text-white">
              {project.title}
            </h1>

            <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-600 dark:text-slate-300">
              {project.description}
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              {project.stack.map((tech) => (
                <span
                  key={tech}
                  className="rounded-full border border-slate-300 bg-slate-100 px-4 py-2 text-sm text-slate-700 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-200"
                >
                  {tech}
                </span>
              ))}
            </div>

            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href={project.github}
                target="_blank"
                rel="noreferrer"
                className="rounded-2xl bg-cyan-400 px-6 py-3 font-semibold text-slate-950 transition hover:scale-105"
              >
                GitHub
              </a>

              {project.demo && (
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-2xl border border-slate-300 px-6 py-3 font-semibold text-slate-900 transition hover:border-cyan-500 hover:text-cyan-500 dark:border-slate-700 dark:text-white dark:hover:border-cyan-400 dark:hover:text-cyan-400"
                >
                  Live Demo
                </a>
              )}
            </div>
          </div>

          <aside className="rounded-3xl border border-slate-200 bg-white p-6 dark:border-slate-800 dark:bg-slate-900">
            <h2 className="text-xl font-semibold text-slate-900 dark:text-white">
              Informazioni progetto
            </h2>

            <div className="mt-6 space-y-5 text-sm text-slate-600 dark:text-slate-300">
              <div>
                <p className="text-slate-500 dark:text-slate-500">Ruolo</p>
                <p className="mt-1 font-medium text-slate-900 dark:text-white">
                  {project.role}
                </p>
              </div>

              <div>
                <p className="text-slate-500 dark:text-slate-500">Durata</p>
                <p className="mt-1 font-medium text-slate-900 dark:text-white">
                  {project.duration}
                </p>
              </div>

              <div>
                <p className="text-slate-500 dark:text-slate-500">Anno</p>
                <p className="mt-1 font-medium text-slate-900 dark:text-white">
                  {project.year}
                </p>
              </div>
            </div>
          </aside>
        </div>
      </section>

      {project.image && (
        <section className="border-y border-slate-200 bg-slate-100/70 dark:border-slate-800 dark:bg-slate-900/40">
          <div className="mx-auto max-w-6xl px-6 py-16">
            <div className="relative h-[260px] overflow-hidden rounded-3xl border border-slate-200 bg-white dark:border-slate-800 dark:bg-slate-900 md:h-[420px]">
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover"
              />
            </div>
          </div>
        </section>
      )}

      <section className="mx-auto max-w-6xl px-6 py-16">
        <div className="grid gap-10 lg:grid-cols-2">
          <article className="rounded-3xl border border-slate-200 bg-white p-8 dark:border-slate-800 dark:bg-slate-900">
            <h2 className="text-2xl font-semibold text-slate-900 dark:text-white">
              Overview
            </h2>
            <p className="mt-4 leading-8 text-slate-600 dark:text-slate-300">
              {project.overview}
            </p>
          </article>

          <article className="rounded-3xl border border-slate-200 bg-white p-8 dark:border-slate-800 dark:bg-slate-900">
            <h2 className="text-2xl font-semibold text-slate-900 dark:text-white">
              Problema
            </h2>
            <p className="mt-4 leading-8 text-slate-600 dark:text-slate-300">
              {project.problem}
            </p>
          </article>

          <article className="rounded-3xl border border-slate-200 bg-white p-8 dark:border-slate-800 dark:bg-slate-900">
            <h2 className="text-2xl font-semibold text-slate-900 dark:text-white">
              Soluzione
            </h2>
            <p className="mt-4 leading-8 text-slate-600 dark:text-slate-300">
              {project.solution}
            </p>
          </article>

          <article className="rounded-3xl border border-slate-200 bg-white p-8 dark:border-slate-800 dark:bg-slate-900">
            <h2 className="text-2xl font-semibold text-slate-900 dark:text-white">
              Stack Tecnologico
            </h2>
            <div className="mt-5 flex flex-wrap gap-3">
              {project.stack.map((tech) => (
                <span
                  key={tech}
                  className="rounded-full border border-slate-300 bg-slate-100 px-4 py-2 text-sm text-slate-700 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-200"
                >
                  {tech}
                </span>
              ))}
            </div>
          </article>
        </div>
      </section>

      <section className="border-y border-slate-200 bg-slate-100/70 dark:border-slate-800 dark:bg-slate-900/40">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <div className="grid gap-8 lg:grid-cols-2">
            <article className="rounded-3xl border border-slate-200 bg-white p-8 dark:border-slate-800 dark:bg-slate-900">
              <h2 className="text-2xl font-semibold text-slate-900 dark:text-white">
                Sfide affrontate
              </h2>
              <ul className="mt-5 space-y-4 text-slate-600 dark:text-slate-300">
                {project.challenges.map((challenge) => (
                  <li
                    key={challenge}
                    className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-4 leading-7 dark:border-slate-800 dark:bg-slate-950"
                  >
                    {challenge}
                  </li>
                ))}
              </ul>
            </article>

            <article className="rounded-3xl border border-slate-200 bg-white p-8 dark:border-slate-800 dark:bg-slate-900">
              <h2 className="text-2xl font-semibold text-slate-900 dark:text-white">
                Cosa ho imparato
              </h2>
              <ul className="mt-5 space-y-4 text-slate-600 dark:text-slate-300">
                {project.learnings.map((learning) => (
                  <li
                    key={learning}
                    className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-4 leading-7 dark:border-slate-800 dark:bg-slate-950"
                  >
                    {learning}
                  </li>
                ))}
              </ul>
            </article>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-16">
        <div className="rounded-3xl border border-slate-200 bg-white p-8 dark:border-slate-800 dark:bg-slate-900">
          <h2 className="text-2xl font-semibold text-slate-900 dark:text-white">
            Ti interessa questo progetto?
          </h2>
          <p className="mt-4 max-w-3xl leading-8 text-slate-600 dark:text-slate-300">
            Se vuoi sapere di più sul contesto, sulle scelte tecniche o sul modo
            in cui ho affrontato lo sviluppo, puoi contattarmi o dare
            un’occhiata agli altri progetti.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              href="/contact"
              className="rounded-2xl bg-cyan-400 px-6 py-3 font-semibold text-slate-950 transition hover:scale-105"
            >
              Contattami
            </Link>

            <Link
              href="/projects"
              className="rounded-2xl border border-slate-300 px-6 py-3 font-semibold text-slate-900 transition hover:border-cyan-500 hover:text-cyan-500 dark:border-slate-700 dark:text-white dark:hover:border-cyan-400 dark:hover:text-cyan-400"
            >
              Vedi altri progetti
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
