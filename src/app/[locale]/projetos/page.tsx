import ProjectCard from "@/components/project-card";
import { Metadata } from "next";
import { getDictionary } from "@/lib/get-dictionary";
import { getProjects } from "@/lib/get-projects";
import type { Locale } from "@/interfaces";

type Props = {
  params: Promise<{ locale: Locale }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;

  const seo = {
    pt: {
      title: "Projetos de Software | João Alavarse",
      description:
        "Projetos desenvolvidos utilizando React, Next.js, Java, Node.js e arquitetura moderna de software.",
    },
    en: {
      title: "Software Projects | João Alavarse",
      description:
        "Projects developed using React, Next.js, Java, Node.js and modern software architecture.",
    },
    es: {
      title: "Proyectos de Software | João Alavarse",
      description:
        "Proyectos desarrollados utilizando React, Next.js, Java, Node.js y arquitectura moderna de software.",
    },
  };

  const data = seo[locale];

  return {
    title: data.title,
    description: data.description,

    alternates: {
      canonical: `/${locale}/projetos`,
      languages: {
        pt: "/pt/projetos",
        en: "/en/projetos",
        es: "/es/projetos",
        "x-default": "/en/projetos",
      },
    },

    openGraph: {
      title: data.title,
      description: data.description,
      url: `/${locale}/projetos`,
      type: "website",
      siteName: "AlavarseDev",
    },
    twitter: {
      card: "summary_large_image",
      title: data.title,
      description: data.description,
    },
  };
}
export default async function ProjectsPage({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}) {
  const { locale } = await params;
  const dict = getDictionary(locale);
  const projects = getProjects(locale);

  return (
    <main className="container mx-auto px-6 py-24">
      <header className="max-w-3xl">
        <h1 className="text-4xl font-bold sm:text-6xl bg-linear-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
          {dict.projects.title}
        </h1>

        <p className="mt-6 text-lg text-muted-foreground">
          {dict.projects.description}
        </p>
      </header>

      <section className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} locale={locale}/>
        ))}
      </section>
    </main>
  );
}
