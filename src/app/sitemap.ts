import type { MetadataRoute } from "next";
import { publicCaseIdsPt } from "@/data/portfolio-pt";
import {
  absoluteLocalizedPath,
  indexableRoutes,
  siteUrl,
  supportedLocales,
} from "@/lib/seo";

const sitemapAlternates = (route = "") =>
  Object.fromEntries([
    ...supportedLocales.map((locale) => [
      locale,
      absoluteLocalizedPath(locale, route),
    ]),
    ["x-default", absoluteLocalizedPath("pt", route)],
  ]);

export default function sitemap(): MetadataRoute.Sitemap {
  const staticLastModified = new Date("2026-07-27T00:00:00.000Z");
  const urls: MetadataRoute.Sitemap = [];

  for (const locale of supportedLocales) {
    for (const route of indexableRoutes) {
      urls.push({
        url: absoluteLocalizedPath(locale, route),
        lastModified: staticLastModified,
        changeFrequency: route === "" ? "monthly" : "weekly",
        priority: route === "" ? 1 : route === "/sobre" ? 0.95 : 0.8,
        alternates: {
          languages: sitemapAlternates(route),
        },
      });
    }
  }

  urls.push({
    url: siteUrl,
    lastModified: staticLastModified,
    changeFrequency: "monthly",
    priority: 0.7,
    alternates: {
      languages: sitemapAlternates(),
    },
  });

  for (const id of publicCaseIdsPt) {
    const route = `/cases/${id}`;

    urls.push({
      url: absoluteLocalizedPath("pt", route),
      lastModified: staticLastModified,
      changeFrequency: "monthly",
      priority: id === "kerootica" ? 0.9 : 0.75,
      alternates: {
        languages: {
          pt: absoluteLocalizedPath("pt", route),
          "x-default": absoluteLocalizedPath("pt", route),
        },
      },
    });
  }

  return urls;
}
