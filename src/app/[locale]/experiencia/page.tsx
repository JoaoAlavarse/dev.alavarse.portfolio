import { Metadata } from "next";
import academicExperiencePt from "@/data/academic-experience-pt.json";
import academicExperienceEn from "@/data/academic-experience-en.json";
import academicExperienceEs from "@/data/academic-experience-es.json";
import professionalExperiencePt from "@/data/professional-experience-pt.json";
import professionalExperienceEn from "@/data/professional-experience-en.json";
import professionalExperienceEs from "@/data/professional-experience-es.json";
import ClientTimeline from "@/components/client-timeline";
import ProjectCard from "@/components/project-card";
import { getCases } from "@/lib/get-cases";
import { getDictionary } from "@/lib/get-dictionary";
import {
  languageAlternates,
  metadataBase,
  sharedOpenGraphImages,
} from "@/lib/seo";
import type { Locale, TimelineItem } from "@/interfaces";

type Props = {
  params: Promise<{ locale: Locale }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const dict = getDictionary(locale);

  return {
    title: `${dict.experience.title} | João Alavarse`,
    description: dict.experience.description,
    metadataBase,
    alternates: {
      canonical: `/${locale}/experiencia`,
      languages: languageAlternates("/experiencia"),
    },
    openGraph: {
      title: `${dict.experience.title} | João Alavarse`,
      description: dict.experience.description,
      url: `/${locale}/experiencia`,
      type: "profile",
      siteName: "AlavarseDev",
      images: sharedOpenGraphImages,
    },
    twitter: {
      card: "summary_large_image",
      title: `${dict.experience.title} | João Alavarse`,
      description: dict.experience.description,
      images: sharedOpenGraphImages.map((image) => image.url),
    },
  };
}

export default async function ExperiencePage({ params }: Props) {
  const { locale } = await params;
  const dict = getDictionary(locale);
  const academicExperience =
    locale === "en"
      ? academicExperienceEn
      : locale === "es"
        ? academicExperienceEs
        : academicExperiencePt;
  const professionalExperience =
    locale === "en"
      ? professionalExperienceEn
      : locale === "es"
        ? professionalExperienceEs
        : professionalExperiencePt;
  const relatedCases = getCases(locale).slice(0, 3);

  return (
    <main className="container mx-auto px-6 py-24 space-y-24">
      <header className="max-w-3xl">
        <h1 className="text-4xl font-bold sm:text-6xl bg-linear-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
          {dict.experience.title}
        </h1>
        <p className="mt-6 text-lg text-muted-foreground">
          {dict.experience.description}
        </p>
      </header>

      <section>
        <h2 className="text-3xl font-bold">{dict.experience.professional}</h2>
        <ClientTimeline
          items={professionalExperience as TimelineItem[]}
          currentLabel={dict.timeline.current}
        />
      </section>

      <section>
        <h2 className="text-3xl font-bold">{dict.experience.academic}</h2>
        <ClientTimeline
          items={academicExperience as TimelineItem[]}
          currentLabel={dict.timeline.current}
        />
      </section>

      <section>
        <h2 className="text-3xl font-bold">{dict.experience.relatedCases}</h2>
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {relatedCases.map((caseStudy) => (
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
        </div>
      </section>
    </main>
  );
}
