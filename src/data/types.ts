export type Project = {
  id: string; title: string; category: "Security" | "Machine Learning" | "Trading";
  status: "Planned" | "In progress" | "Completed"; role: string; context: string;
  description: string; highlights: string[]; tech: string[];
  links?: { repo?: string; demo?: string };
};
export type ProcessLayer = { id: number; name: string; summary: string; whatIDo: string };
export type SkillGroup = { title: string; icon: string; items: string[] };
export type TimelineItem = { id: string; start: string; end: string; title: string; org: string; bullets: string[] };
export type EducationItem = { id: string; period: string; title: string; institution: string; notes: string[] };
