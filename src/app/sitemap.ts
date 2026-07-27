import type { MetadataRoute } from "next";
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
    ["x-default", absoluteLocalizedPath("en", route)],
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

  return urls;
}
