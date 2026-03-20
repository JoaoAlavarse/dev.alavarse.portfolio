import projectsPt from "@/data/projects-pt.json";
import projectsEn from "@/data/projects-en.json";
import projectsEs from "@/data/projects-es.json";
import type { Locale } from "@/interfaces";

const projectsByLocale: Record<Locale, typeof projectsPt> = {
  pt: projectsPt,
  en: projectsEn,
  es: projectsEs,
};

export const getProjects = (locale: Locale) => projectsByLocale[locale];
