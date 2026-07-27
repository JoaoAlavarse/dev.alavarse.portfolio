import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/next";
import { Footer } from "@/components/footer";
import { Navbar } from "@/components/navbar";
import type { Locale } from "@/interfaces";
import { getDictionary } from "@/lib/get-dictionary";
import {
  homeSeo,
  languageAlternates,
  localeConfig,
  metadataBase,
  sharedOpenGraphImages,
  siteUrl,
} from "@/lib/seo";

type LayoutProps = {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const currentLocale = locale as Locale;
  const data = homeSeo[currentLocale] || homeSeo.en;
  const localeData = localeConfig[currentLocale] || localeConfig.en;

  return {
    title: data.title,
    description: data.description,
    metadataBase,
    alternates: {
      canonical: `/${locale}`,
      languages: languageAlternates(),
    },
    openGraph: {
      title: data.title,
      description: data.description,
      url: `/${locale}`,
      siteName: "AlavarseDev",
      locale: localeData.ogLocale,
      type: "website",
      images: sharedOpenGraphImages,
    },
    twitter: {
      card: "summary_large_image",
      title: data.title,
      description: data.description,
      images: sharedOpenGraphImages.map((image) => image.url),
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
    authors: [
      {
        name: "João Paulo Almeida Alavarse",
        url: `${siteUrl}/${locale}/sobre`,
      },
    ],
    creator: "João Paulo Almeida Alavarse",
    publisher: "João Paulo Almeida Alavarse",
    keywords: data.keywords,
  };
}

export function generateStaticParams() {
  return [{ locale: "pt" }, { locale: "en" }, { locale: "es" }];
}

export default async function LocaleLayout({ children, params }: LayoutProps) {
  const { locale } = await params;
  const currentLocale = locale as Locale;
  const dict = getDictionary(currentLocale);
  const localeData = localeConfig[currentLocale] || localeConfig.en;
  const personId = `${siteUrl}/${currentLocale}/sobre#person`;
  const personJsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": personId,
    name: "João Paulo Almeida Alavarse",
    alternateName: ["João Alavarse", "AlavarseDev"],
    url: `${siteUrl}/${currentLocale}/sobre`,
    image: {
      "@type": "ImageObject",
      url: `${siteUrl}/joao-alavarse.jpeg`,
      width: 360,
      height: 450,
    },
    jobTitle: "Software Engineer",
    description: homeSeo[currentLocale].description,
    inLanguage: localeData.htmlLang,
    sameAs: [
      "https://github.com/JoaoAlavarse",
      "https://www.linkedin.com/in/joao-alavarse/",
    ],
    knowsAbout: [
      "Software Engineering",
      "Software Architecture",
      "Legacy System Modernization",
      "Product Engineering",
      "ERP Systems",
      "React",
      "Next.js",
      "Java",
      "Spring Boot",
      "React Native",
      "TypeScript",
      ".NET",
      "Technical Documentation",
    ],
    alumniOf: {
      "@type": "CollegeOrUniversity",
      name: "UMFG",
      alternateName: "FACEC",
      url: "https://umfg.edu.br/home/",
    },
  };

  return (
    <>
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:rounded-md focus:bg-primary focus:px-4 focus:py-2 focus:text-primary-foreground"
      >
        {dict.accessibility.skipToContent}
      </a>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(personJsonLd),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebSite",
            name: "AlavarseDev",
            url: siteUrl,
            inLanguage: ["pt-BR", "en-US", "es-ES"],
            author: {
              "@type": "Person",
              "@id": personId,
              name: "João Paulo Almeida Alavarse",
            },
          }),
        }}
      />
      <Analytics />
      <Navbar locale={currentLocale} />
      <div id="main-content">{children}</div>
      <Footer locale={currentLocale} />
    </>
  );
}
