const skills = ["Next.js", "React", "TypeScript", "Angular", ".NET", "Node.js"];

export default function SkillsSection() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-16">
      <h2 className="mb-8 text-2xl font-semibold">Competenze principali</h2>

      <div className="flex flex-wrap gap-3">
        {skills.map((skill) => (
          <span
            key={skill}
            className="rounded-full border border-slate-700 bg-slate-900 px-4 py-2 text-sm text-slate-200"
          >
            {skill}
          </span>
        ))}
      </div>
    </section>
  );
}
