import { MetadataRoute } from "next";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  return [
    {
      url: `${process.env.NEXT_PUBLIC_BASE_URL}`,
      priority: 1,
      lastModified: "2025-12-31",
      alternates: {
        languages: {
          "pt-BR": process.env.NEXT_PUBLIC_BASE_URL,
        },
      }
    },
    {
      url: `${process.env.NEXT_PUBLIC_BASE_URL}/projetos`,
      lastModified: "2025-12-31",
      alternates: {
        languages: {
          "pt-BR": `${process.env.NEXT_PUBLIC_BASE_URL}/projetos`,
        },
      }
    },
    {
      url: `${process.env.NEXT_PUBLIC_BASE_URL}/sobre`,
      lastModified: "2025-12-31",
      alternates: {
        languages: {
          "pt-BR": `${process.env.NEXT_PUBLIC_BASE_URL}/sobre`,
        },
      }
    },
    {
      url: `${process.env.NEXT_PUBLIC_BASE_URL}/contato`,
      lastModified: "2025-12-31",
      alternates: {
        languages: {
          "pt-BR": `${process.env.NEXT_PUBLIC_BASE_URL}/contato`,
        },
      }
    },
  ]
}