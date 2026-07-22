import Link from "next/link";
import { Button } from "@/components/ui/button";
import { getDictionary } from "@/lib/get-dictionary";
import type { Locale, TimelineItem } from "@/interfaces";
import professionalExperiencePt from "@/data/professional-experience-pt.json";
import professionalExperienceEn from "@/data/professional-experience-en.json";
import professionalExperienceEs from "@/data/professional-experience-es.json";

export default async function ExperiencePreview({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}) {
  const { locale } = await params;
  const dict = getDictionary(locale);
  const experiences =
    locale === "en"
      ? professionalExperienceEn
      : locale === "es"
        ? professionalExperienceEs
        : professionalExperiencePt;

  return (
    <section className="py-24">
      <div className="mb-10">
        <h2 className="text-4xl font-bold tracking-tight sm:text-5xl bg-linear-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent leading-tight sm:leading-snug">
          {dict.experience.title}
        </h2>
        <p className="text-muted-foreground mt-2">
          {dict.experience.description}
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        {(experiences as TimelineItem[]).slice(0, 3).map((item) => (
          <article key={`${item.title}-${item.period}`} className="rounded-xl border p-6">
            <p className="text-sm text-muted-foreground">{item.period}</p>
            <h3 className="mt-2 text-xl font-bold">{item.title}</h3>
            <p className="mt-1 text-sm text-muted-foreground">{item.subtitle}</p>
            <p className="mt-4 text-sm text-muted-foreground">{item.description}</p>
          </article>
        ))}
      </div>

      <div className="mt-10">
        <Button asChild variant="secondary">
          <Link href={`/${locale}/experiencia`}>{dict.experience.title}</Link>
        </Button>
      </div>
    </section>
  );
}
