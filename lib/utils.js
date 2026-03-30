import { skills } from "@/data/skills";

export function getTopSkills(skills) {
  return Object.fromEntries(
    Object.entries(skills).map(([category, items]) => {
      const topSkill = items.reduce((max, current) =>
        current.level > max.level ? current : max,
      );

      return [category, topSkill];
    }),
  );
}

export function groupLearningItems(items) {
  return {
    courses: items.filter((item) => item.type === "course"),
    certifications: items.filter((item) => item.type === "certification"),
    certificates: items.filter((item) => item.type === "certificate"),
  };
}

export function getLearningTypeLabel(type) {
  const labels = {
    course: "Corso",
    certification: "Certificazione",
    certificate: "Attestato",
  };

  return labels[type] || "Altro";
}
