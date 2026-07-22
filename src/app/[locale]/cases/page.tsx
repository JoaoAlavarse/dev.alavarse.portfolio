import { Metadata } from "next";
import ProjectCard from "@/components/project-card";
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
  const cases = getCases(locale);

  return (
    <main className="container mx-auto px-6 py-24">
      <header className="max-w-3xl">
        <h1 className="text-4xl font-bold sm:text-6xl bg-linear-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
          {dict.cases.title}
        </h1>
        <p className="mt-6 text-lg text-muted-foreground">
          {dict.cases.description}
        </p>
      </header>

      <section className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {cases.map((caseStudy) => (
          <ProjectCard
            key={caseStudy.id}
            locale={locale}
            project={{
              id: caseStudy.id,
              name: caseStudy.name,
              whatIs: caseStudy.competency,
              smallDescription: caseStudy.summary,
              logo: caseStudy.logo,
              link: caseStudy.link,
              technologies: caseStudy.technologies,
              role: caseStudy.role,
              highlights: caseStudy.competencies.slice(0, 2),
            }}
          />
        ))}
      </section>
    </main>
  );
}
