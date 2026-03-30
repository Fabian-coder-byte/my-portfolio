export default function SkillCard({ title, items }) {
  return (
    <div className="rounded-3xl border border-slate-800 bg-slate-900 p-6 shadow-sm transition hover:border-cyan-500/30">
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-semibold text-white">{title}</h3>
        <span className="rounded-full border border-slate-700 bg-slate-800 px-3 py-1 text-xs text-slate-400">
          {items.length} skill
        </span>
      </div>

      <div className="mt-6 space-y-5">
        {items.map((skill) => (
          <div key={skill.name}>
            <div className="flex items-center justify-between gap-4">
              <span className="text-sm font-medium text-slate-200">
                {skill.name}
              </span>
              <span className="text-xs text-cyan-400">{skill.label}</span>
            </div>

            <div className="mt-2 h-2 overflow-hidden rounded-full bg-slate-800">
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
