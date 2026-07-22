import { MetadataRoute } from "next"

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://alavarsedev.com.br"
  const staticLastModified = new Date("2026-03-20T00:00:00.000Z")

  const locales = ["pt", "en", "es"]

  const routes = ["", "/experiencia", "/cases", "/sobre", "/contato"]

  const urls: MetadataRoute.Sitemap = []

  for (const locale of locales) {
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
  }

  return urls
}
