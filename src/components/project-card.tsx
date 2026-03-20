import { IProject, type Locale } from "@/interfaces";
import Image from "next/image";
import Link from "next/link";
import { getDictionary } from "@/lib/get-dictionary";

export default function ProjectCard({ project, locale }: { project: IProject; locale: Locale }) {
  const dict = getDictionary(locale);
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

      {project.highlights && project.highlights.length > 0 && (
        <div className="mt-3 flex flex-wrap gap-2">
          {project.highlights.map((highlight) => (
            <span
              key={highlight}
              className="text-xs rounded-full bg-purple-500/10 px-3 py-1 text-purple-400 border border-purple-400/20"
            >
              {highlight}
            </span>
          ))}
        </div>
      )}

      <div className="flex justify-between items-center">
        <Link
          href={`/${locale}/projetos/${project.id}`}
          className="mt-4 inline-block text-sm font-medium hover:underline"
        >
          {dict.project.seeDetails}
        </Link>
        {project.link && (
          <Link
            href={project.link}
            className="mt-4 inline-block text-sm font-medium hover:underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            {dict.project.officialSite}
          </Link>
        )}
      </div>
    </div>
  );
}
