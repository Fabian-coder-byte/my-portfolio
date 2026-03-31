export default function SkillCard({ title, items }) {
  return (
    <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition hover:border-cyan-500 dark:border-slate-800 dark:bg-slate-900 dark:hover:border-cyan-400/40">
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
          {title}
        </h3>
        <span className="rounded-full border border-slate-300 bg-slate-100 px-3 py-1 text-xs text-slate-600 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-400">
          {items.length} skill
        </span>
      </div>

      <div className="mt-6 space-y-5">
        {items.map((skill) => (
          <div key={skill.name}>
            <div className="flex items-center justify-between gap-4">
              <span className="text-sm font-medium text-slate-700 dark:text-slate-200">
                {skill.name}
              </span>
              <span className="text-xs text-cyan-600 dark:text-cyan-400">
                {skill.label}
              </span>
            </div>

            <div className="mt-2 h-2 overflow-hidden rounded-full bg-slate-200 dark:bg-slate-800">
              <div
                className="h-full rounded-full bg-cyan-400 transition-all duration-500"
                style={{ width: `${skill.level}%` }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
