import Link from "next/link";
import ProjectCard from "../project-card";
import { Button } from "../ui/button";
import projects from "@/data/projects.json"

export default function ProjectsList() {
  const projectsToShow = projects.sort(() => Math.random() - 0.5).slice(0, 3)

  return (
    <section className="py-24" id="projetos">
      <div className="mb-10">
        <h2 className="text-4xl font-bold tracking-tight sm:text-5xl bg-linear-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent leading-tight sm:leading-snug">
          Projetos
        </h2>
        <p className="text-muted-foreground mt-2">
          Alguns projetos que tive participação no desenvolvimento recentemente
        </p>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {projectsToShow.map((project) => (
          <ProjectCard key={project.id} project={project}/>
        ))}
      </div>

      <div className="mt-10">
        <Button asChild variant="secondary">
          <Link href="/projetos">Ver todos os projetos</Link>
        </Button>
      </div>
    </section>
  );
}
