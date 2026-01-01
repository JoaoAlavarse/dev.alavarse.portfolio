import { IProject } from "@/interfaces";
import Image from "next/image";
import Link from "next/link";

export default function ProjectCard({ project }: { project: IProject }) {
  return (
    <div className="rounded-xl border p-5 hover:border-foreground/30 transition">
      <div className="relative h-40 w-full bg-black/5 dark:bg-white/5 rounded-lg mb-4">
        <Image
          src={project.logo}
          alt={`${project.name} Logo`}
          fill
          className="object-contain p-6 rounded-t-xl"
          sizes="(max-width: 768px) 100vw, 33vw"
        />
      </div>

      <h3 className="text-xl font-bold">{project.name}</h3>
      <p className="mt-2 text-md">{project.whatIs}</p>
      <p className="mt-2 text-sm text-muted-foreground">
        {project.smallDescription}
      </p>

      <div className="flex justify-between items-center">
        <Link
          href={`/projetos/${project.id}`}
          className="mt-4 inline-block text-sm font-medium hover:underline"
        >
          Ver detalhes →
        </Link>
        {project.link && (
          <Link
            href={project.link}
            className="mt-4 inline-block text-sm font-medium hover:underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            Site oficial
          </Link>
        )}
      </div>
    </div>
  );
}
