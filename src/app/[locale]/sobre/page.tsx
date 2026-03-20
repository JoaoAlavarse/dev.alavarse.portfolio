import Image from "next/image";
import { Check } from "lucide-react";
import Contact from "@/components/home/contact";
import academicExperiencePt from "@/data/academic-experience-pt.json";
import academicExperienceEn from "@/data/academic-experience-en.json";
import academicExperienceEs from "@/data/academic-experience-es.json";
import professionalExperiencePt from "@/data/professional-experience-pt.json";
import professionalExperienceEn from "@/data/professional-experience-en.json";
import professionalExperienceEs from "@/data/professional-experience-es.json";
import { TimelineItem } from "@/interfaces";
import { Metadata } from "next";
import ClientTimeline from "@/components/client-timeline";
import { getDictionary } from "@/lib/get-dictionary";

export const metadata: Metadata = {
  title: "João Alavarse | Desenvolvedor Fullstack",
  description:
    "João Paulo Almeida Alavarse, desenvolvedor fullstack com experiência em React, Next.js, Node.js, Java, arquitetura de software e produtos digitais.",
  keywords: [
    "João Alavarse",
    "desenvolvedor fullstack",
    "React",
    "Next.js",
    "Node.js",
    "Java",
    "Spring Boot",
    "React Native",
    "portfólio desenvolvedor",
  ],
  alternates: {
    canonical: "/sobre",
  },
  openGraph: {
    title: "Sobre mim | João Alavarse",
    description:
      "Desenvolvedor fullstack focado em produtos reais, arquitetura de software e experiência do usuário.",
    url: `${process.env.NEXT_PUBLIC_BASE_URL}/sobre`,
    siteName: "João Alavarse",
    images: [
      {
        url: `/joao-alavarse.jpeg`,
        width: 1200,
        height: 630,
        alt: "João Alavarse – Desenvolvedor Fullstack",
      },
    ],
    locale: "pt_BR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sobre mim | João Alavarse",
    description:
      "Desenvolvedor fullstack com foco em arquitetura, produtos digitais e experiência real de mercado.",
    images: [`${process.env.NEXT_PUBLIC_BASE_URL}/joao-alavarse.jpeg`],
  },
};

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
            alt="João Alavarse, desenvolvedor fullstack"
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
              alt="João Alavarse, desenvolvedor fullstack"
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

        <ClientTimeline items={professionalExperience as TimelineItem[]} />
      </section>

      {/* FORMAÇÃO */}
      <section>
        <h2 className="text-3xl font-bold">{dict.about.academicExperience.title}</h2>

        <ClientTimeline items={academicExperience as TimelineItem[]} />
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
