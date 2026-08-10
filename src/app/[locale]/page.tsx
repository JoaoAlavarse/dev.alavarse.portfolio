import Link from "next/link";
import Image from "next/image";
import CaseCard from "@/components/case-card";
import Contact from "@/components/home/contact";
import ExperiencePreview from "@/components/home/experience-preview";
import { Hero } from "@/components/home/hero";
import ProjectsList from "@/components/home/projects";
import Stats from "@/components/home/stats";
import { Button } from "@/components/ui/button";
import { experiencePt, featuredCaseIdsPt, homePt } from "@/data/portfolio-pt";
import type { ICase, Locale } from "@/interfaces";
import { getCases } from "@/lib/get-cases";

export default async function Home({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}) {
  const { locale } = await params;
  const localeParams = Promise.resolve({ locale });

  if (locale !== "pt") {
    return (
      <main className="relative mx-auto max-w-6xl px-4">
        <div className="pointer-events-none absolute -top-24 -left-24 h-96 w-96 rounded-full bg-purple-500/20 blur-3xl" />
        <div className="pointer-events-none absolute bottom-0 left-1/4 h-80 w-80 rounded-full bg-pink-500/20 blur-3xl" />
        <div className="pointer-events-none absolute bottom-5/12 right-3/4 h-80 w-80 rounded-full bg-blue-500/20 blur-3xl" />

        <Hero params={localeParams} />
        <Stats params={localeParams} />
        <ExperiencePreview params={localeParams} />
        <ProjectsList params={localeParams} />
        <Contact params={localeParams} />
      </main>
    );
  }

  const cases = getCases(locale).filter((caseStudy) =>
    featuredCaseIdsPt.includes(caseStudy.id),
  );

  return (
    <main className="relative mx-auto max-w-6xl px-4">
      <div className="pointer-events-none absolute left-0 top-24 h-80 w-80 -translate-x-1/2 rounded-full bg-purple-500/20 blur-3xl" />
      <div className="pointer-events-none absolute bottom-1/3 right-0 h-80 w-80 translate-x-1/3 rounded-full bg-blue-500/20 blur-3xl" />

      <section className="relative grid w-full max-w-full min-h-[78vh] items-center gap-10 overflow-visible py-20 lg:grid-cols-[1.15fr_0.85fr]">  
        <div className="min-w-0 w-full max-w-160">
          <p className="text-sm font-medium uppercase tracking-[0.18em] text-primary">
            {homePt.hero.eyebrow}
          </p>
          <h1 className="mt-5 max-w-full min-h-23 bg-linear-to-r from-purple-400 to-blue-400 bg-clip-text text-4xl font-bold tracking-tight text-transparent sm:min-h-18 sm:text-6xl">
            {homePt.hero.title}
          </h1>
          <p className="mt-5 max-w-full min-h-14 wrap-break-word text-xl font-semibold leading-snug sm:min-h-8 sm:text-2xl">
            {homePt.hero.subtitle}
          </p>
          <p className="mt-6 max-w-full min-h-24 wrap-break-word text-base leading-8 text-muted-foreground sm:min-h-16 sm:text-lg">
            {homePt.hero.description}
          </p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <Button asChild size="lg">
              <Link href={`/${locale}/cases`}>{homePt.hero.primaryAction}</Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <Link href={`/${locale}/contato`}>
                {homePt.hero.secondaryAction}
              </Link>
            </Button>
          </div>
        </div>

        <div className="relative mx-auto flex w-full max-w-[288px] justify-center sm:max-w-90 lg:justify-self-end">
          <div className="absolute -inset-4 rounded-full bg-linear-to-tr from-purple-500/30 via-blue-500/20 to-pink-500/30 blur-3xl" />
          <div className="relative aspect-square w-full overflow-hidden rounded-2xl border border-white/10 bg-background/60 p-2 shadow-xl backdrop-blur-lg">
            <Image
              src="/joao-alavarse.jpeg"
              alt="Foto profissional de João Paulo Almeida Alavarse"
              width={360}
              height={360}
              sizes="(max-width: 639px) 272px, 344px"
              quality={70}
              className="h-full w-full rounded-xl object-cover"
              priority
              fetchPriority="high"
            />
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-3xl">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            {homePt.evidence.title}
          </h2>
          <p className="mt-4 text-muted-foreground">
            {homePt.evidence.description}
          </p>
        </div>
        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {homePt.evidence.items.map((item) => (
            <article key={item.title} className="rounded-lg border p-5">
              <p className="text-xs font-medium uppercase tracking-[0.16em] text-primary">
                {item.context}
              </p>
              <h3 className="mt-3 text-xl font-bold">{item.title}</h3>
              <p className="mt-3 text-sm leading-6 text-muted-foreground">
                {item.description}
              </p>
            </article>
          ))}
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-3xl">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            {homePt.decisionEvidence.title}
          </h2>
          <p className="mt-4 text-muted-foreground">
            {homePt.decisionEvidence.description}
          </p>
        </div>
        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {homePt.decisionEvidence.items.map((item) => (
            <article key={item.title} className="rounded-lg border p-5">
              <p className="text-xs font-medium uppercase tracking-[0.16em] text-primary">
                {item.context}
              </p>
              <h3 className="mt-3 text-xl font-bold">{item.title}</h3>
              <p className="mt-3 text-sm leading-6 text-muted-foreground">
                {item.description}
              </p>
            </article>
          ))}
        </div>
      </section>

      <section className="py-16">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Cases principais
            </h2>
            <p className="mt-3 max-w-2xl text-muted-foreground">
              Depois dos sinais, os cases entram para mostrar o raciocínio com
              mais detalhe.
            </p>
          </div>
          <Button asChild variant="secondary">
            <Link href={`/${locale}/cases`}>Ver todos</Link>
          </Button>
        </div>
        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          {(cases as ICase[]).map((caseStudy) => (
            <CaseCard
              key={caseStudy.id}
              caseStudy={caseStudy}
              locale={locale}
            />
          ))}
        </div>
      </section>

      <section className="py-16">
        <div>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Progressão profissional
          </h2>
          <p className="mt-3 max-w-2xl text-muted-foreground">
            O ponto aqui não é a lista de lugares. É o que cada etapa deixou
            mais difícil de ignorar.
          </p>
        </div>
        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {experiencePt.professional.slice(0, 3).map((item) => (
            <article key={item.title} className="rounded-lg border p-5">
              <p className="text-sm text-primary">{item.period}</p>
              <h3 className="mt-3 text-xl font-bold">{item.title}</h3>
              <p className="mt-1 text-sm text-muted-foreground">{item.role}</p>
              <p className="mt-4 text-sm leading-6 text-muted-foreground">
                {item.evolution}
              </p>
            </article>
          ))}
        </div>
        <Button asChild variant="secondary" className="mt-8">
          <Link href={`/${locale}/experiencia`}>Ver experiência completa</Link>
        </Button>
      </section>

      <section className="py-16">
        <div className="rounded-lg border bg-background/70 p-6 backdrop-blur sm:p-8">
          <div className="max-w-3xl">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              {homePt.expectations.title}
            </h2>
            <p className="mt-4 text-muted-foreground">
              {homePt.expectations.description}
            </p>
          </div>
          <ul className="mt-8 grid gap-3 text-sm text-muted-foreground md:grid-cols-2">
            {homePt.expectations.items.map((item) => (
              <li key={item} className="rounded-md border px-4 py-3">
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>
      <Contact params={localeParams} />
    </main>
  );
}
