import { Metadata } from "next";
import CaseCard from "@/components/case-card";
import { publicCaseIdsPt } from "@/data/portfolio-pt";
import { getCases } from "@/lib/get-cases";
import { getDictionary } from "@/lib/get-dictionary";
import {
  languageAlternates,
  metadataBase,
  sharedOpenGraphImages,
} from "@/lib/seo";
import type { Locale } from "@/interfaces";

type Props = {
  params: Promise<{ locale: Locale }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const dict = getDictionary(locale);

  return {
    title: `${dict.cases.title} | João Alavarse`,
    description: dict.cases.description,
    metadataBase,
    alternates: {
      canonical: `/${locale}/cases`,
      languages: languageAlternates("/cases"),
    },
    openGraph: {
      title: `${dict.cases.title} | João Alavarse`,
      description: dict.cases.description,
      url: `/${locale}/cases`,
      type: "website",
      siteName: "AlavarseDev",
      images: sharedOpenGraphImages,
    },
    twitter: {
      card: "summary_large_image",
      title: `${dict.cases.title} | João Alavarse`,
      description: dict.cases.description,
      images: sharedOpenGraphImages.map((image) => image.url),
    },
  };
}

export default async function CasesPage({ params }: Props) {
  const { locale } = await params;
  const dict = getDictionary(locale);
  const cases =
    locale === "pt"
      ? getCases(locale).filter((caseStudy) =>
          publicCaseIdsPt.includes(caseStudy.id),
        )
      : getCases(locale);

  return (
    <main className="relative mx-auto max-w-6xl px-4">
      <div className="pointer-events-none absolute left-0 top-24 h-80 w-80 -translate-x-1/2 rounded-full bg-purple-500/20 blur-3xl" />
      <div className="pointer-events-none absolute bottom-1/3 right-0 h-80 w-80 translate-x-1/3 rounded-full bg-blue-500/20 blur-3xl" />

      <header className="relative max-w-3xl py-20">
        <p className="text-sm font-medium uppercase tracking-[0.18em] text-primary">
          Perguntas de engenharia
        </p>
        <h1 className="mt-5 bg-linear-to-r from-purple-400 to-blue-400 bg-clip-text text-4xl font-bold tracking-tight text-transparent sm:text-6xl">
          {dict.cases.title}
        </h1>
        <p className="mt-6 text-lg leading-8 text-muted-foreground">
          {dict.cases.description}
        </p>
      </header>

      <section className="relative grid gap-6 pb-24 sm:grid-cols-2 lg:grid-cols-3">
        {cases.map((caseStudy) => (
          <CaseCard
            key={caseStudy.id}
            locale={locale}
            caseStudy={caseStudy}
          />
        ))}
      </section>
    </main>
  );
}
