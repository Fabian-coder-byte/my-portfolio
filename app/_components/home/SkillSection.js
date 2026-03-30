import { skills } from "@/data/skills";
import { getTopSkills } from "@/lib/utils";

export default function SkillsSection() {
  const topSkills = getTopSkills(skills);
  console.log(topSkills);
  return (
    <section className="mx-auto max-w-6xl px-6 py-16 ">
      <h2 className="mb-8 text-2xl font-semibold">Competenze principali</h2>

      <div className="flex flex-wrap gap-3">
        <span className="rounded-full border border-slate-700 bg-slate-900 px-4 py-2 text-sm text-slate-200">
          {topSkills.frontend.name}
        </span>
        <span className="rounded-full border border-slate-700 bg-slate-900 px-4 py-2 text-sm text-slate-200">
          {topSkills.backend.name}
        </span>
        <span className="rounded-full border border-slate-700 bg-slate-900 px-4 py-2 text-sm text-slate-200">
          {topSkills.database.name}
        </span>
        <span className="rounded-full border border-slate-700 bg-slate-900 px-4 py-2 text-sm text-slate-200">
          {topSkills.tools.name}
        </span>
      </div>
    </section>
  );
}
