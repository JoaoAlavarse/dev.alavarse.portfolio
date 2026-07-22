import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Check } from "lucide-react";
import ProjectCard from "@/components/project-card";
import { getCases } from "@/lib/get-cases";
import { getDictionary } from "@/lib/get-dictionary";
import {
  absoluteLocalizedPath,
  languageAlternates,
  metadataBase,
  sharedOpenGraphImages,
  siteUrl,
} from "@/lib/seo";
import type { CaseSection, CaseSectionId, Locale } from "@/interfaces";

type Props = {
  params: Promise<{ locale: Locale; id: string }>;
};

export function generateStaticParams() {
  const locales: Locale[] = ["pt", "en", "es"];

  return locales.flatMap((locale) =>
    getCases(locale).map((caseStudy) => ({
      locale,
      id: caseStudy.id,
    })),
  );
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale, id } = await params;
  const caseStudy = getCases(locale).find((item) => item.id === id);

  if (!caseStudy) return {};

  return {
    title: `${caseStudy.name} | Case | João Alavarse`,
    description: caseStudy.summary,
    metadataBase,
    alternates: {
      canonical: `/${locale}/cases/${id}`,
      languages: languageAlternates(`/cases/${id}`),
    },
    openGraph: {
      title: `${caseStudy.name} | Case | João Alavarse`,
      description: caseStudy.summary,
      url: `/${locale}/cases/${id}`,
      type: "article",
      siteName: "AlavarseDev",
      images: sharedOpenGraphImages,
    },
    twitter: {
      card: "summary_large_image",
      title: `${caseStudy.name} | Case | João Alavarse`,
      description: caseStudy.summary,
      images: sharedOpenGraphImages.map((image) => image.url),
    },
    robots: {
      index: false,
      follow: true,
    },
  };
}

function sectionMap(sections: CaseSection[]) {
  return Object.fromEntries(sections.map((section) => [section.id, section])) as Partial<
    Record<CaseSectionId, CaseSection>
  >;
}

function ProseBlock({ section }: { section?: CaseSection }) {
  if (!section) return null;

  return (
    <div>
      <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">
        {section.title}
      </h2>
      <div className="mt-4 space-y-4 text-muted-foreground leading-relaxed">
        {section.content.map((item) => (
          <p key={item}>{item}</p>
        ))}
      </div>
    </div>
  );
}

export default async function CaseDetailsPage({ params }: Props) {
  const { locale, id } = await params;
  const dict = getDictionary(locale);
  const cases = getCases(locale);
  const caseStudy = cases.find((item) => item.id === id);

  if (!caseStudy) return notFound();

  const relatedCases = cases.filter((item) =>
    caseStudy.relatedProjects.includes(item.id),
  );
  const byId = sectionMap(caseStudy.sections);
  const hasFraming = byId.context || byId.problem;
  const hasConstraints = byId.restrictions || byId.decision;
  const hasSolution = byId.architecture || byId.execution || byId.challenges;
  const hasOutcome = byId.result || byId.impact || byId.learnings;

  return (
    <main className="container mx-auto px-6 py-24 space-y-24">
      <header className="grid gap-12 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
        <div>
          <p className="text-sm font-medium text-muted-foreground">
            {dict.cases.title}
          </p>
          <h1 className="mt-3 text-4xl font-bold tracking-tight sm:text-6xl bg-linear-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
            {caseStudy.name}
          </h1>
          <p className="mt-4 text-base font-medium text-purple-400">
            {caseStudy.competency}
          </p>
          <p className="mt-6 max-w-2xl text-lg text-muted-foreground leading-relaxed">
            {caseStudy.summary}
          </p>
          {caseStudy.link && (
            <Link
              href={caseStudy.link}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-block text-sm font-medium hover:underline"
            >
              {dict.project.officialSite} →
            </Link>
          )}
        </div>

        <div className="relative mx-auto w-full max-w-sm lg:mx-0 lg:justify-self-end">
          <div className="absolute -inset-4 rounded-full bg-linear-to-tr from-purple-500/30 via-blue-500/20 to-pink-500/30 blur-3xl" />
          <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-background/60 p-2 shadow-xl backdrop-blur-lg">
            <div className="relative aspect-4/3 overflow-hidden rounded-xl bg-black/5 dark:bg-white/5">
              <Image
                src={caseStudy.logo}
                alt={`${caseStudy.name} logo`}
                fill
                className="object-contain p-10"
                sizes="(max-width: 1024px) 100vw, 360px"
                priority
              />
            </div>
          </div>
        </div>
      </header>

      <div className="grid gap-16 lg:grid-cols-[220px_minmax(0,1fr)] lg:gap-20">
        <aside className="space-y-10 lg:sticky lg:top-28 lg:self-start">
          {caseStudy.role &&
            !/não publicada|not published|no publicada/i.test(caseStudy.role) && (
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">
                {dict.project.myActions}
              </p>
              <p className="mt-3 text-sm leading-relaxed">{caseStudy.role}</p>
            </div>
          )}

          {caseStudy.competencies.length > 0 && (
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">
                {dict.cases.competencies}
              </p>
              <ul className="mt-4 space-y-3">
                {caseStudy.competencies.map((competency) => (
                  <li
                    key={competency}
                    className="text-sm leading-relaxed text-muted-foreground"
                  >
                    {competency}
                  </li>
                ))}
              </ul>
            </div>
          )}

          {caseStudy.technologies.length > 0 && (
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">
                {dict.project.technologies}
              </p>
              <ul className="mt-4 flex flex-wrap gap-2">
                {caseStudy.technologies.map((technology) => (
                  <li
                    key={technology}
                    className="rounded-full border border-purple-400/20 bg-purple-500/10 px-3 py-1 text-xs text-purple-400"
                  >
                    {technology}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </aside>

        <div className="space-y-20">
          {hasFraming && (
            <section className="grid gap-12 md:grid-cols-2">
              <ProseBlock section={byId.context} />
              <ProseBlock section={byId.problem} />
            </section>
          )}

          {hasConstraints && (
            <section className="grid gap-12 border-y border-white/10 py-16 md:grid-cols-2">
              <ProseBlock section={byId.restrictions} />
              <ProseBlock section={byId.decision} />
            </section>
          )}

          {byId.responsibilities && (
            <section>
              <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">
                {byId.responsibilities.title}
              </h2>
              <ul className="mt-8 grid gap-4 sm:grid-cols-2">
                {byId.responsibilities.content.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <Check className="mt-0.5 h-5 w-5 shrink-0 text-purple-400" />
                    <span className="text-muted-foreground leading-relaxed">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </section>
          )}

          {hasSolution && (
            <section className="space-y-12">
              {(byId.architecture || byId.execution) && (
                <div className="grid gap-12 md:grid-cols-2">
                  <ProseBlock section={byId.architecture} />
                  <ProseBlock section={byId.execution} />
                </div>
              )}

              {byId.challenges && (
                <div className="border-l-2 border-purple-400/40 pl-6">
                  <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">
                    {byId.challenges.title}
                  </h2>
                  <ul className="mt-6 space-y-3">
                    {byId.challenges.content.map((item) => (
                      <li
                        key={item}
                        className="text-muted-foreground leading-relaxed"
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </section>
          )}

          {hasOutcome && (
            <section className="space-y-12 rounded-2xl border border-white/10 bg-linear-to-br from-purple-500/5 via-transparent to-blue-500/5 p-8 sm:p-10">
              <div className="grid gap-12 md:grid-cols-2">
                <ProseBlock section={byId.result} />
                <ProseBlock section={byId.impact} />
              </div>
              <ProseBlock section={byId.learnings} />
            </section>
          )}
        </div>
      </div>

      {relatedCases.length > 0 && (
        <section>
          <h2 className="text-3xl font-bold">{dict.cases.related}</h2>
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {relatedCases.map((related) => (
              <ProjectCard
                key={related.id}
                locale={locale}
                project={{
                  id: related.id,
                  name: related.name,
                  whatIs: related.competency,
                  smallDescription: related.summary,
                  logo: related.logo,
                  link: related.link,
                  technologies: related.technologies,
                  role: related.role,
                  highlights: related.competencies.slice(0, 2),
                }}
              />
            ))}
          </div>
        </section>
      )}

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              {
                "@type": "ListItem",
                position: 1,
                name: dict.navbar.home,
                item: absoluteLocalizedPath(locale),
              },
              {
                "@type": "ListItem",
                position: 2,
                name: dict.cases.title,
                item: absoluteLocalizedPath(locale, "/cases"),
              },
              {
                "@type": "ListItem",
                position: 3,
                name: caseStudy.name,
                item: absoluteLocalizedPath(locale, `/cases/${caseStudy.id}`),
              },
            ],
          }),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: `${caseStudy.name} | Case`,
            description: caseStudy.summary,
            url: `${siteUrl}/${locale}/cases/${caseStudy.id}`,
            author: {
              "@type": "Person",
              name: "João Alavarse",
            },
            publisher: {
              "@type": "Person",
              name: "João Alavarse",
            },
            inLanguage:
              locale === "pt" ? "pt-BR" : locale === "es" ? "es-ES" : "en-US",
          }),
        }}
      />
    </main>
  );
}
