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
  | "executiveSummary"
  | "context"
  | "problem"
  | "restrictions"
  | "role"
  | "responsibilities"
  | "stakeholders"
  | "successCriteria"
  | "alternatives"
  | "decision"
  | "architecture"
  | "flow"
  | "technologies"
  | "tradeoffs"
  | "execution"
  | "challenges"
  | "result"
  | "impact"
  | "limitations"
  | "learnings"
  | "principles";

export interface CaseSection {
  id: CaseSectionId;
  title: string;
  status: "available" | "partial" | "missing";
  content: string[];
}

export interface EngineeringDecision {
  title: string;
  problem: string[];
  alternatives: string[];
  choice: string[];
  justification: string[];
  tradeoffs: string[];
  consequences: string[];
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
  decisions: EngineeringDecision[];
}

export interface TimelineItem {
  title: string;
  subtitle: string;
  period: string;
  description: string;
  type: "work" | "education" | "project";
  current?: boolean;
}
