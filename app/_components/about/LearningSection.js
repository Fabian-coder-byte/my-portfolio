export function LearningSection({
  title,
  description,
  items,
  getLearningTypeLabel,
}) {
  if (!items.length) return null;

  return (
    <section className="mx-auto max-w-5xl px-6 py-16">
      <div className="max-w-2xl">
        <h2 className="text-2xl font-semibold text-white">{title}</h2>
        <p className="mt-3 text-slate-400">{description}</p>
      </div>

      <div className="mt-10 grid gap-6 md:grid-cols-2">
        {items.map((item) => (
          <article
            key={`${item.type}-${item.name}`}
            className="rounded-3xl border border-slate-800 bg-slate-900/80 p-6 transition hover:border-cyan-500/40"
          >
            <div className="flex items-start justify-between gap-4">
              <div>
                <h3 className="text-xl font-semibold text-cyan-400">
                  {item.name}
                </h3>
                <p className="mt-1 text-sm text-slate-400">{item.provider}</p>
              </div>

              <span className="rounded-full border border-slate-700 bg-slate-800 px-3 py-1 text-sm text-slate-300">
                {item.year}
              </span>
            </div>

            <div className="mt-4 flex flex-wrap gap-2">
              <span className="rounded-full border border-cyan-500/30 bg-cyan-500/10 px-3 py-1 text-xs font-medium text-cyan-300">
                {getLearningTypeLabel(item.type)}
              </span>
            </div>

            <p className="mt-4 leading-7 text-slate-300">{item.description}</p>

            {item.skills?.length > 0 && (
              <div className="mt-5 flex flex-wrap gap-2">
                {item.skills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-full bg-slate-800 px-3 py-1 text-sm text-slate-300"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            )}

            {item.credentials?.length > 0 && (
              <div className="mt-5 space-y-2">
                <p className="text-sm font-medium text-slate-200">
                  Attestati e certificati
                </p>

                <div className="flex flex-col gap-2">
                  {item.credentials.map((credential) => (
                    <a
                      key={`${item.name}-${credential.title}`}
                      href={credential.link}
                      target="_blank"
                      rel="noreferrer"
                      className="rounded-2xl border border-slate-700 bg-slate-800/60 px-4 py-3 text-sm text-cyan-400 transition hover:border-cyan-400/50 hover:text-cyan-300"
                    >
                      {credential.title}
                      {credential.skill ? (
                        <span className="ml-2 text-slate-400">
                          • {credential.skill}
                        </span>
                      ) : null}
                    </a>
                  ))}
                </div>
              </div>
            )}
          </article>
        ))}
      </div>
    </section>
  );
}
