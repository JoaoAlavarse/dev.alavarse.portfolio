import Image from "next/image";
import { Check } from "lucide-react";
import Contact from "@/components/home/contact";
import academicExperiencePt from "@/data/academic-experience-pt.json";
import academicExperienceEn from "@/data/academic-experience-en.json";
import academicExperienceEs from "@/data/academic-experience-es.json";
import professionalExperiencePt from "@/data/professional-experience-pt.json";
import professionalExperienceEn from "@/data/professional-experience-en.json";
import professionalExperienceEs from "@/data/professional-experience-es.json";
import { TimelineItem, type Locale } from "@/interfaces";
import { Metadata } from "next";
import ClientTimeline from "@/components/client-timeline";
import { getDictionary } from "@/lib/get-dictionary";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}): Promise<Metadata> {
  const { locale } = await params;

  const seo = {
    pt: {
      title: "Sobre | João Alavarse",
      description:
        "Conheça a trajetória de João Alavarse, desenvolvedor Full Stack com experiência em React, Next.js, Java e arquitetura de software.",
      locale: "pt_BR",
      keywords: [
        "João Alavarse",
        "desenvolvedor fullstack",
        "React",
        "Next.js",
        "Node.js",
        "Java",
        "Spring Boot",
      ],
    },
    en: {
      title: "About | João Alavarse",
      description:
        "Learn more about João Alavarse, a Full Stack developer experienced in React, Next.js, Java, and software architecture.",
      locale: "en_US",
      keywords: [
        "João Alavarse",
        "full stack developer",
        "React",
        "Next.js",
        "Node.js",
        "Java",
        "Spring Boot",
      ],
    },
    es: {
      title: "Sobre mí | João Alavarse",
      description:
        "Conoce más sobre João Alavarse, desarrollador Full Stack con experiencia en React, Next.js, Java y arquitectura de software.",
      locale: "es_ES",
      keywords: [
        "João Alavarse",
        "desarrollador full stack",
        "React",
        "Next.js",
        "Node.js",
        "Java",
        "Spring Boot",
      ],
    },
  };

  const data = seo[locale];

  return {
    title: data.title,
    description: data.description,
    keywords: data.keywords,
    alternates: {
      canonical: `/${locale}/sobre`,
      languages: {
        pt: "/pt/sobre",
        en: "/en/sobre",
        es: "/es/sobre",
        "x-default": "/en/sobre",
      },
    },
    openGraph: {
      title: data.title,
      description: data.description,
      url: `/${locale}/sobre`,
      siteName: "AlavarseDev",
      locale: data.locale,
      type: "profile",
    },
    twitter: {
      card: "summary_large_image",
      title: data.title,
      description: data.description,
    },
  };
}

export default async function AboutPage({
  params,
}: {
  params: Promise<{ locale: "pt" | "en" | "es" }>;
}) {
  const { locale } = await params;
  const dict = getDictionary(locale);
  const academicExperience = locale === "en" ? academicExperienceEn : locale === "es" ? academicExperienceEs : academicExperiencePt;
  const professionalExperience = locale === "en" ? professionalExperienceEn : locale === "es" ? professionalExperienceEs : professionalExperiencePt;

  return (
    <main className="container mx-auto px-6 py-24 space-y-32">
      {/* FOTO */}
      <div className="relative flex md:hidden justify-center">
        {/* Glow */}
        <div className="absolute -inset-4 rounded-full bg-linear-to-tr from-purple-500/30 via-blue-500/20 to-pink-500/30 blur-3xl" />

        {/* Glass frame */}
        <div className="relative rounded-2xl bg-background/60 backdrop-blur-lg border border-white/10 p-2 shadow-xl">
          <Image
            src="/joao-alavarse.jpeg"
            alt={dict.hero.imageAlt}
            width={360}
            height={450}
            className="rounded-xl object-cover grayscale hover:grayscale-0 transition duration-300"
            priority
          />
        </div>
      </div>

      {/* HERO */}
      <section className="flex justify-between items-center">
        <div className="max-w-3xl">
          <h1 className="text-4xl font-bold tracking-tight sm:text-6xl bg-linear-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
            {dict.about.title}
          </h1>

          <p className="mt-6 text-lg text-muted-foreground">
            {dict.about.hero.paragraph1}
          </p>

          <p className="mt-6 text-lg text-muted-foreground">
            {dict.about.hero.paragraph2}
          </p>
        </div>

        {/* FOTO */}
        <div className="relative hidden md:flex justify-center">
          {/* Glow */}
          <div className="absolute -inset-4 rounded-full bg-linear-to-tr from-purple-500/30 via-blue-500/20 to-pink-500/30 blur-3xl" />

          {/* Glass frame */}
          <div className="relative rounded-2xl bg-background/60 backdrop-blur-lg border border-white/10 p-2 shadow-xl">
            <Image
              src="/joao-alavarse.jpeg"
              alt={dict.hero.imageAlt}
              width={360}
              height={450}
              className="rounded-xl object-cover grayscale hover:grayscale-0 transition duration-300"
              priority
            />
          </div>
        </div>
      </section>

      {/* HISTÓRIA */}
      <section className="grid gap-12 md:grid-cols-2 items-center">
        <div>
          <h2 className="text-3xl font-bold">{dict.about.story.title}</h2>

          <p className="mt-4 text-muted-foreground leading-relaxed">
            {dict.about.story.paragraph1}
          </p>

          <p className="mt-4 text-muted-foreground leading-relaxed">
            {dict.about.story.paragraph2}
          </p>

          <p className="mt-4 text-muted-foreground leading-relaxed">
            {dict.about.story.paragraph3}
          </p>
        </div>

        <ul className="space-y-4">
          {dict.about.values.map((item) => (
            <li key={item} className="flex items-center gap-3">
              <Check className="h-5 w-5 text-purple-400" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </section>

      {/* EXPERIÊNCIA PROFISSIONAL */}
      <section>
        <h2 className="text-3xl font-bold">{dict.about.professionalExperience.title}</h2>

        <ClientTimeline items={professionalExperience as TimelineItem[]} currentLabel={dict.timeline.current} />
      </section>

      {/* FORMAÇÃO */}
      <section>
        <h2 className="text-3xl font-bold">{dict.about.academicExperience.title}</h2>

        <ClientTimeline items={academicExperience as TimelineItem[]} currentLabel={dict.timeline.current} />
      </section>

      {/* TECNOLOGIAS */}
      <section>
        <h2 className="text-3xl font-bold">{dict.about.technologies.title}</h2>

        <ul className="mt-6 flex flex-wrap gap-3 text-sm">
          {dict.about.technologies.list.map((tech) => (
            <li
              key={tech}
              className="rounded-full border px-4 py-1 text-muted-foreground hover:border-purple-400/50 transition"
            >
              {tech}
            </li>
          ))}
        </ul>
      </section>

      <Contact params={params} />
    </main>
  );
}
