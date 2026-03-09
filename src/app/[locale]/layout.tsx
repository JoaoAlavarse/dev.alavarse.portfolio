import type { Metadata, Viewport } from "next";
import "../globals.css";
import { Navbar } from "@/components/navbar";
import { ThemeProvider } from "@/components/theme-provider";
import { Footer } from "@/components/footer";
import { Analytics } from "@vercel/analytics/next";
import { getDictionary } from "@/lib/get-dictionary";

type Locale = "pt" | "en" | "es";

// O Next.js exige que params aceite string genérica para validar o roteamento
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

  const seo = {
    pt: {
      title: "AlavarseDev | Desenvolvedor Full Stack",
      description:
        "João Alavarse, desenvolvedor Full Stack especializado em React, Tailwind, Java e Spring Boot.",
      locale: "pt_BR",
      keywords: [
        "desenvolvedor full stack",
        "desenvolvedor react",
        "desenvolvedor java",
        "spring boot",
        "next.js",
        "tailwind css",
        "portfólio desenvolvedor",
        "desenvolvedor react native",
        "João Alavarse",
        "João Paulo Almeida Alavarse",
      ],
    },
    en: {
      title: "AlavarseDev | Full Stack Developer",
      description:
        "João Alavarse, Full Stack developer specialized in React, Tailwind, Java and Spring Boot.",
      locale: "en_US",
      keywords: [
        "full stack developer",
        "react developer",
        "java developer",
        "spring boot",
        "next.js",
        "tailwind css",
        "Developer Portfolio",
        "react native developer",
        "João Alavarse",
        "João Paulo Almeida Alavarse",
        "software engineer",
        "frontend developer",
        "backend developer",
      ],
    },
    es: {
      title: "AlavarseDev | Desarrollador Full Stack",
      description:
        "João Alavarse, desarrollador Full Stack especializado en React, Tailwind, Java y Spring Boot.",
      locale: "es_ES",
      keywords: [
        "desarrollador Full Stack",
        "desarrollador react",
        "desarrollador java",
        "spring boot",
        "next.js",
        "tailwind css",
        "portafolio de desarrollador",
        "desarrollador react native",
        "João Alavarse",
        "João Paulo Almeida Alavarse",
      ],
    },
  };

  // Fallback para 'en' caso a locale venha inesperada
  const data = seo[currentLocale] || seo.en;

  return {
    title: data.title,
    description: data.description,
    metadataBase: new URL("https://alavarsedev.com.br"),
    alternates: {
      canonical: `/${locale}`,
      languages: { pt: "/pt", en: "/en", es: "/es", "x-default": "/en" },
    },
    openGraph: {
      title: data.title,
      description: data.description,
      url: `/${locale}`,
      siteName: "AlavarseDev",
      locale: data.locale,
      type: "website",
      images: [
        {
          url: "/web-app-manifest-512x512.png",
          width: 512,
          height: 512,
          alt: "AlavarseDev Portfolio",
        },
      ],
    },

    twitter: {
      card: "summary_large_image",
      title: data.title,
      description: data.description,
      images: ["/web-app-manifest-512x512.png"],
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

  // Forçamos o tipo aqui para o restante do código funcionar com seu tipo Locale
  const currentLocale = locale as Locale;
  const dict: any = getDictionary(currentLocale);

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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@type": "Person",
              "@context": "https://schema.org",
              name: "João Alavarse",
              alternateName: "João Paulo Almeida Alavarse",
              url: "https://alavarsedev.com.br",
              jobTitle: "Full Stack Developer",
              description:
                "Full Stack developer specialized in React, Next.js, Java and Spring Boot",
              image: "https://alavarsedev.com.br/web-app-manifest-512x512.png",
              sameAs: [
                "https://github.com/JoaoAlavarse",
                "https://www.linkedin.com/in/joao-alavarse/",
              ],
              knowsAbout: [
                "React",
                "Next.js",
                "Java",
                "Spring Boot",
                "React Native",
                "TypeScript",
              ],
              alumniOf: {
                "@type": "Organization",
                name: "UTFPR",
              },
            }),
          }}
        />
        <Analytics />
        <ThemeProvider>
          <Navbar locale={currentLocale} />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
