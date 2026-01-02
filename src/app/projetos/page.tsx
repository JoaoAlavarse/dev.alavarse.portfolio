import projects from "@/data/projects.json";
import ProjectCard from "@/components/project-card";

export const metadata = {
  title: "Projetos | João Alavarse",
  description: "Projetos desenvolvidos por João Alavarse, com foco em frontend, backend e arquitetura de software.",
};

export default function ProjectsPage() {
  return (
    <main className="container mx-auto px-6 py-24">
      <header className="max-w-3xl">
        <h1 className="text-4xl font-bold sm:text-6xl bg-linear-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
          Projetos
        </h1>

        <p className="mt-6 text-lg text-muted-foreground">
          Alguns dos projetos que desenvolvi ao longo da minha trajetória
          profissional.
        </p>
      </header>

      <section className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </section>
    </main>
  );
}
