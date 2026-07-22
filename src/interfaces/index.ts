export type Locale = "pt" | "en" | "es";

export interface IProject {
  id: string;
  name: string;
  whatIs: string;
  smallDescription: string;
  logo: string;
  link: string | null;
  technologies: string[];
  description?: string;
  role?: string;
  responsibilities?: string[];
  images?: string[];
  highlights?: string[];
}

export type CaseSectionId =
  | "context"
  | "problem"
  | "restrictions"
  | "responsibilities"
  | "decision"
  | "architecture"
  | "execution"
  | "challenges"
  | "result"
  | "impact"
  | "learnings";

export interface CaseSection {
  id: CaseSectionId;
  title: string;
  status: "available" | "partial" | "missing";
  content: string[];
}

export interface ICase {
  id: string;
  name: string;
  summary: string;
  objective: string;
  competency: string;
  competencies: string[];
  role: string;
  status: string;
  logo: string;
  link: string | null;
  technologies: string[];
  relatedProjects: string[];
  sections: CaseSection[];
}

export interface TimelineItem {
  title: string;
  subtitle: string;
  period: string;
  description: string;
  type: "work" | "education" | "project";
  current?: boolean;
}
