import Link from "next/link";
import ProjectCard from "../project-card";
import { Button } from "../ui/button";
import projectsEn from "@/data/projects-en.json";
import projectsEs from "@/data/projects-es.json";
import projectsPt from "@/data/projects-pt.json";
import { getDictionary } from "@/lib/get-dictionary";

export default async function ProjectsList({
  params,
}: {
  params: Promise<{ locale: "pt" | "en" | "es" }>;
}) {
  const { locale } = await params;

  const dict: any = getDictionary(locale);
  const projects =
    locale === "en"
      ? projectsEn
      : locale === "es"
        ? projectsEs
        : projectsPt;
  const projectsToShow = projects.sort(() => Math.random() - 0.5).slice(0, 3);

  return (
    <section className="py-24" id="projetos">
      <div className="mb-10">
        <h2 className="text-4xl font-bold tracking-tight sm:text-5xl bg-linear-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent leading-tight sm:leading-snug">
          {dict.projects.title}
        </h2>
        <p className="text-muted-foreground mt-2">
          {dict.projects.description}
        </p>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {projectsToShow.map((project) => (
          <ProjectCard key={project.id} project={project} locale={locale}/>
        ))}
      </div>

      <div className="mt-10">
        <Button asChild variant="secondary">
          <Link href={`/${locale}/projetos`}>{dict.projects.viewAll}</Link>
        </Button>
      </div>
    </section>
  );
}
