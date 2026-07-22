import type { Metadata, Viewport } from "next";
import "../globals.css";
import { Navbar } from "@/components/navbar";
import { ThemeProvider } from "@/components/theme-provider";
import { Footer } from "@/components/footer";
import { Analytics } from "@vercel/analytics/next";
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

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
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
        name: "João Alavarse",
        url: "https://www.linkedin.com/in/joao-alavarse/",
      },
      {
        name: "João Paulo Almeida Alavarse",
        url: "https://www.linkedin.com/in/joao-alavarse/",
      },
    ],

    creator: "João Alavarse",
    publisher: "João Alavarse",
    keywords: data.keywords,
  };
}

export function generateStaticParams() {
  return [{ locale: "pt" }, { locale: "en" }, { locale: "es" }];
}

export default async function RootLayout({ children, params }: LayoutProps) {
  const { locale } = await params;

  const currentLocale = locale as Locale;
  const dict = getDictionary(currentLocale);

  return (
    <html
      lang={
        currentLocale === "pt"
          ? "pt-BR"
          : currentLocale === "es"
            ? "es-ES"
            : "en-US"
      }
      suppressHydrationWarning
      className="scroll-smooth overflow-x-hidden"
    >
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
      </head>
      <body className="min-h-screen bg-background text-foreground antialiased overflow-x-hidden">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:rounded-md focus:bg-primary focus:px-4 focus:py-2 focus:text-primary-foreground"
        >
          {dict.accessibility.skipToContent}
        </a>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@type": "Person",
              "@context": "https://schema.org",
              name: "João Alavarse",
              alternateName: "João Paulo Almeida Alavarse",
              url: siteUrl,
              jobTitle: "Full Stack Software Engineer",
              description: homeSeo.en.description,
              image: `${siteUrl}/web-app-manifest-512x512.png`,
              sameAs: [
                "https://github.com/JoaoAlavarse",
                "https://www.linkedin.com/in/joao-alavarse/",
              ],
              knowsAbout: [
                "Software Engineering",
                "Software Architecture",
                "Product Engineering",
                "ERP",
                "React",
                "Next.js",
                "Java",
                "Spring Boot",
                "React Native",
                "TypeScript",
                ".NET",
                "Technical Communication",
              ],
              alumniOf: {
                "@type": "Organization",
                name: "UTFPR",
              },
            }),
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
                name: "João Alavarse",
              },
            }),
          }}
        />
        <Analytics />
        <ThemeProvider>
          <Navbar locale={currentLocale} />
          <div id="main-content">
            {children}
          </div>
          <Footer locale={currentLocale} />
        </ThemeProvider>
      </body>
    </html>
  );
}
