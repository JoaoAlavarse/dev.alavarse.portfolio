import Image from "next/image";
import { Check } from "lucide-react";
import Contact from "@/components/home/contact";

import professionalExperience from "@/data/professional-experience.json";
import academicExperience from "@/data/academic-experience.json";
import { TimelineItem } from "@/interfaces";
import { Metadata } from "next";
import ClientTimeline from "@/components/client-timeline";

export const metadata: Metadata = {
  title: "Sobre mim | João Alavarse",
  description:
    "Conheça João Alavarse, desenvolvedor fullstack com experiência em React, Next.js, Node.js, Java, arquitetura de software e produtos digitais.",
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
    canonical: `${process.env.NEXT_PUBLIC_BASE_URL}/sobre`,
  },
  openGraph: {
    title: "Sobre mim | João Alavarse",
    description:
      "Desenvolvedor fullstack focado em produtos reais, arquitetura de software e experiência do usuário.",
    url: `${process.env.NEXT_PUBLIC_BASE_URL}/sobre`,
    siteName: "João Alavarse",
    images: [
      {
        url: `${process.env.NEXT_PUBLIC_BASE_URL}/joao-alavarse.jpg`,
        width: 1200,
        height: 630,
        alt: "João Alavarse – Desenvolvedor Fullstack",
      },
    ],
    locale: "pt_BR",
    type: "profile",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sobre mim | João Alavarse",
    description:
      "Desenvolvedor fullstack com foco em arquitetura, produtos digitais e experiência real de mercado.",
    images: [`${process.env.NEXT_PUBLIC_BASE_URL}/joao-alavarse.jpg`],
  },
};

export default function AboutPage() {
  return (
    <main className="container mx-auto px-6 py-24 space-y-32">
      {/* HERO */}
      <section className="flex justify-between items-center">
        <div className="max-w-3xl">
          <h1 className="text-4xl font-bold tracking-tight sm:text-6xl bg-linear-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
            Sobre mim
          </h1>

          <p className="mt-6 text-lg text-muted-foreground">
            Sou desenvolvedor fullstack, apaixonado por tecnologia, arquitetura
            de software e por transformar ideias em produtos reais, escaláveis e
            bem construídos.
          </p>

          <p className="mt-6 text-lg text-muted-foreground">
            Ao desenvolver um software, sempre penso no cliente e no que poderia
            ajudar ele, as vezes pode ser algo simples, ou até mesmo "chato" de
            se programar, mas são esses pequenos detalhes que facilitam a vida
            do usuário e que mantém o cliente com o produto
          </p>
        </div>

        {/* FOTO */}
        <div className="relative flex justify-center">
          {/* Glow */}
          <div className="absolute -inset-4 rounded-full bg-linear-to-tr from-purple-500/30 via-blue-500/20 to-pink-500/30 blur-3xl" />

          {/* Glass frame */}
          <div className="relative rounded-2xl bg-background/60 backdrop-blur-lg border border-white/10 p-2 shadow-xl">
            <Image
              src="/joao-alavarse.jpg"
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
          <h2 className="text-3xl font-bold">Minha história</h2>

          <p className="mt-4 text-muted-foreground leading-relaxed">
            Minha jornada na tecnologia começou ainda na graduação, quando
            percebi que programação era muito mais do que escrever código, era
            resolver problemas reais.
          </p>

          <p className="mt-4 text-muted-foreground leading-relaxed">
            E também através da influência de ótimos professores que tive, me
            despertou a vontade de contribuir com a próxima geração de
            desenvolvedores. Assim, também comecei a atuar como professor do
            ensino supeior.
          </p>

          <p className="mt-4 text-muted-foreground leading-relaxed">
            Hoje, trabalho com produtos digitais completos, cuidando de
            frontend, backend e decisões de arquitetura.
          </p>
        </div>

        <ul className="space-y-4">
          {[
            "Arquitetura e boas práticas",
            "Experiência com produtos reais",
            "Mentalidade de produto",
            "Comunicação clara",
          ].map((item) => (
            <li key={item} className="flex items-center gap-3">
              <Check className="h-5 w-5 text-purple-400" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </section>

      {/* EXPERIÊNCIA PROFISSIONAL */}
      <section>
        <h2 className="text-3xl font-bold">Experiência profissional</h2>

        <ClientTimeline items={professionalExperience as TimelineItem[]} />
      </section>

      {/* FORMAÇÃO */}
      <section>
        <h2 className="text-3xl font-bold">Formação acadêmica</h2>

        <ClientTimeline items={academicExperience as TimelineItem[]} />
      </section>

      {/* TECNOLOGIAS */}
      <section>
        <h2 className="text-3xl font-bold">Tecnologias</h2>

        <ul className="mt-6 flex flex-wrap gap-3 text-sm">
          {[
            "TypeScript",
            "React",
            "Next.js",
            "React Native",
            "Node.js",
            "NestJS",
            "Java",
            "Spring Boot",
            ".NET",
            "TailwindCSS",
            "PostgreSQL",
            "Docker",
          ].map((tech) => (
            <li
              key={tech}
              className="rounded-full border px-4 py-1 text-muted-foreground hover:border-purple-400/50 transition"
            >
              {tech}
            </li>
          ))}
        </ul>
      </section>

      <Contact />
    </main>
  );
}
