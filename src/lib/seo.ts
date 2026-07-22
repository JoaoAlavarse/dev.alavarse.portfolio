import type { Locale } from "@/interfaces";

export const siteUrl = "https://alavarsedev.com.br";
export const metadataBase = new URL(siteUrl);
export const socialImage = `${siteUrl}/opengraph-image`;

export const localeConfig: Record<
  Locale,
  { htmlLang: string; ogLocale: string; path: string }
> = {
  pt: { htmlLang: "pt-BR", ogLocale: "pt_BR", path: "pt" },
  en: { htmlLang: "en-US", ogLocale: "en_US", path: "en" },
  es: { htmlLang: "es-ES", ogLocale: "es_ES", path: "es" },
};

export const homeSeo = {
  pt: {
    title: "João Alavarse | Engenheiro de Software Full Stack",
    description:
      "Engenheiro de software Full Stack com atuação em sistemas reais, arquitetura, produto, inovação, ERP, mobile, web, backend e ensino.",
    keywords: [
      "João Alavarse",
      "engenheiro de software",
      "engenheiro full stack",
      "arquitetura de software",
      "sistemas em produção",
      "ERP",
      "React",
      "React Native",
      "Java",
      "Spring Boot",
      ".NET",
      "professor universitário",
    ],
  },
  en: {
    title: "João Alavarse | Full Stack Software Engineer",
    description:
      "Full Stack Software Engineer working with real systems, architecture, product, innovation, ERP, mobile, web, backend, and teaching.",
    keywords: [
      "João Alavarse",
      "software engineer",
      "full stack engineer",
      "software architecture",
      "production systems",
      "ERP",
      "React",
      "React Native",
      "Java",
      "Spring Boot",
      ".NET",
      "university professor",
    ],
  },
  es: {
    title: "João Alavarse | Ingeniero de Software Full Stack",
    description:
      "Ingeniero de software Full Stack con actuación en sistemas reales, arquitectura, producto, innovación, ERP, mobile, web, backend y enseñanza.",
    keywords: [
      "João Alavarse",
      "ingeniero de software",
      "ingeniero full stack",
      "arquitectura de software",
      "sistemas en producción",
      "ERP",
      "React",
      "React Native",
      "Java",
      "Spring Boot",
      ".NET",
      "profesor universitario",
    ],
  },
};

export const localizedPath = (locale: Locale, path = "") =>
  `/${locale}${path}`;

export const absoluteLocalizedPath = (locale: Locale, path = "") =>
  `${siteUrl}${localizedPath(locale, path)}`;

export const languageAlternates = (path = "") => ({
  pt: localizedPath("pt", path),
  en: localizedPath("en", path),
  es: localizedPath("es", path),
  "x-default": localizedPath("en", path),
});

export const absoluteLanguageAlternates = (path = "") => ({
  pt: absoluteLocalizedPath("pt", path),
  en: absoluteLocalizedPath("en", path),
  es: absoluteLocalizedPath("es", path),
});

export const sharedOpenGraphImages = [
  {
    url: socialImage,
    width: 1200,
    height: 630,
    alt: "João Alavarse",
  },
];
