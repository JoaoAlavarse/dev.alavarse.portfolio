import { MetadataRoute } from "next"

import projectsPt from "@/data/projects-pt.json"
import projectsEn from "@/data/projects-en.json"
import projectsEs from "@/data/projects-es.json"

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://alavarsedev.com.br"
  const staticLastModified = new Date("2026-03-20T00:00:00.000Z")
  const projectLastModifiedById: Record<string, string> = {
    hemoup: "2026-03-20T00:00:00.000Z",
    zshop: "2026-03-20T00:00:00.000Z",
    pupilens: "2026-03-20T00:00:00.000Z",
    kerootica: "2026-03-20T00:00:00.000Z",
    batterycommerce: "2026-03-20T00:00:00.000Z",
  }

  const locales = ["pt", "en", "es"]

  const routes = ["", "/sobre", "/projetos"]

  const projectsByLocale = {
    pt: projectsPt,
    en: projectsEn,
    es: projectsEs,
  }

  const urls: MetadataRoute.Sitemap = []

  for (const locale of locales) {
    const projects = projectsByLocale[locale as keyof typeof projectsByLocale]

    // páginas principais
    for (const route of routes) {
      urls.push({
        url: `${base}/${locale}${route}`,
        lastModified: staticLastModified,
        alternates: {
          languages: {
            pt: `${base}/pt${route}`,
            en: `${base}/en${route}`,
            es: `${base}/es${route}`,
          },
        },
      })
    }

    // páginas de projetos
    for (const project of projects) {
      urls.push({
        url: `${base}/${locale}/projetos/${project.id}`,
        lastModified: new Date(
          projectLastModifiedById[project.id] || "2026-03-20T00:00:00.000Z",
        ),
        alternates: {
          languages: {
            pt: `${base}/pt/projetos/${project.id}`,
            en: `${base}/en/projetos/${project.id}`,
            es: `${base}/es/projetos/${project.id}`,
          },
        },
      })
    }
  }

  return urls
}