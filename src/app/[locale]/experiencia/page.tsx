import { Metadata } from "next";
import academicExperiencePt from "@/data/academic-experience-pt.json";
import academicExperienceEn from "@/data/academic-experience-en.json";
import academicExperienceEs from "@/data/academic-experience-es.json";
import professionalExperiencePt from "@/data/professional-experience-pt.json";
import professionalExperienceEn from "@/data/professional-experience-en.json";
import professionalExperienceEs from "@/data/professional-experience-es.json";
import { Timeline } from "@/components/timeline";
import ProjectCard from "@/components/project-card";
import CaseCard from "@/components/case-card";
import { experiencePt, publicCaseIdsPt } from "@/data/portfolio-pt";
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

  if (locale === "pt") {
    const publicCases = getCases(locale).filter((caseStudy) =>
      publicCaseIdsPt.includes(caseStudy.id),
    );

    return (
      <main className="relative mx-auto max-w-6xl px-4">
        <div className="pointer-events-none absolute left-0 top-24 h-80 w-80 -translate-x-1/2 rounded-full bg-purple-500/20 blur-3xl" />
        <div className="pointer-events-none absolute bottom-1/3 right-0 h-80 w-80 translate-x-1/3 rounded-full bg-blue-500/20 blur-3xl" />

        <header className="relative max-w-3xl py-20">
          <p className="text-sm font-medium uppercase tracking-[0.18em] text-primary">
            Progressão profissional
          </p>
          <h1 className="mt-5 bg-linear-to-r from-purple-400 to-blue-400 bg-clip-text text-4xl font-bold tracking-tight text-transparent sm:text-6xl">
            {dict.experience.title}
          </h1>
          <p className="mt-6 text-lg leading-8 text-muted-foreground">
            {experiencePt.intro}
          </p>
        </header>

        <section className="relative py-12">
          <h2 className="text-3xl font-bold tracking-tight">
            {dict.experience.professional}
          </h2>
          <div className="mt-8 space-y-6">
            {experiencePt.professional.map((item) => (
              <article
                key={`${item.title}-${item.period}`}
                className="rounded-lg border bg-background/70 p-6 backdrop-blur transition hover:border-purple-400/50"
              >
                <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                  <div>
                    <h3 className="text-2xl font-bold">{item.title}</h3>
                    <p className="mt-1 text-sm text-muted-foreground">
                      Cargo documentado · {item.role}
                    </p>
                  </div>
                  <p className="text-sm font-medium text-primary">{item.period}</p>
                </div>
                <dl className="mt-6 grid gap-5 md:grid-cols-2">
                  <div>
                    <dt className="font-semibold">Contexto</dt>
                    <dd className="mt-2 text-sm leading-6 text-muted-foreground">
                      {item.context}
                    </dd>
                  </div>
                  <div>
                    <dt className="font-semibold">Responsabilidade principal</dt>
                    <dd className="mt-2 text-sm leading-6 text-muted-foreground">
                      {item.responsibility}
                    </dd>
                  </div>
                  <div>
                    <dt className="font-semibold">Complexidade do ambiente</dt>
                    <dd className="mt-2 text-sm leading-6 text-muted-foreground">
                      {item.scope}
                    </dd>
                  </div>
                  <div>
                    <dt className="font-semibold">O que mudou na forma de trabalhar</dt>
                    <dd className="mt-2 text-sm leading-6 text-muted-foreground">
                      {item.evolution}
                    </dd>
                  </div>
                </dl>
                <p className="mt-6 text-sm text-muted-foreground">
                  Onde essa evolução aparece: {item.related}
                </p>
              </article>
            ))}
          </div>
        </section>

        <section className="relative py-16">
          <h2 className="text-3xl font-bold tracking-tight">
            {dict.experience.academic}
          </h2>
          <div className="mt-8 grid gap-5 md:grid-cols-3">
            {experiencePt.academic.map((item) => (
              <article
                key={item.title}
                className="rounded-lg border bg-background/70 p-5 backdrop-blur transition hover:border-purple-400/50"
              >
                <p className="text-sm font-medium text-primary">{item.period}</p>
                <h3 className="mt-3 font-bold">{item.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{item.role}</p>
                <p className="mt-4 text-sm leading-6 text-muted-foreground">
                  {item.context}
                </p>
              </article>
            ))}
          </div>
        </section>

        <section className="relative py-16">
          <h2 className="text-3xl font-bold tracking-tight">
            {dict.experience.relatedCases}
          </h2>
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {publicCases.slice(0, 3).map((caseStudy) => (
              <CaseCard key={caseStudy.id} locale={locale} caseStudy={caseStudy} />
            ))}
          </div>
        </section>
      </main>
    );
  }

  return (
    <main className="mx-auto max-w-[22rem] space-y-24 px-4 py-24 sm:container sm:px-6">
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
        <Timeline
          items={professionalExperience as TimelineItem[]}
          currentLabel={dict.timeline.current}
        />
      </section>

      <section>
        <h2 className="text-3xl font-bold">{dict.experience.academic}</h2>
        <Timeline
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
