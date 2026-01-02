import { MetadataRoute } from "next";
import projects from "@/data/projects.json";

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL!;

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: BASE_URL,
      priority: 1,
      lastModified: new Date(),
      alternates: {
        languages: {
          "pt-BR": BASE_URL,
        },
      },
    },
    {
      url: `${BASE_URL}/projetos`,
      lastModified: new Date(),
      alternates: {
        languages: {
          "pt-BR": `${BASE_URL}/projetos`,
        },
      },
    },
    {
      url: `${BASE_URL}/sobre`,
      lastModified: new Date(),
      alternates: {
        languages: {
          "pt-BR": `${BASE_URL}/sobre`,
        },
      },
    },
  ];

  const projectRoutes: MetadataRoute.Sitemap = projects.map((project) => ({
    url: `${BASE_URL}/projetos/${project.id}`,
    lastModified: new Date(),
    priority: 0.8,
    alternates: {
      languages: {
        "pt-BR": `${BASE_URL}/projetos/${project.id}`,
      },
    },
  }));

  return [...staticRoutes, ...projectRoutes];
}