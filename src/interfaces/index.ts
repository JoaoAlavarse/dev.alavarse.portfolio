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

export interface TimelineItem {
  title: string;
  subtitle: string;
  period: string;
  description: string;
  type: "work" | "education" | "project";
  current?: boolean;
}