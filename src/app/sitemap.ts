import { MetadataRoute } from "next"

import projectsPt from "@/data/projects-pt.json"
import projectsEn from "@/data/projects-en.json"
import projectsEs from "@/data/projects-es.json"

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://alavarsedev.com.br"

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
        lastModified: new Date(),
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
        lastModified: new Date(),
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