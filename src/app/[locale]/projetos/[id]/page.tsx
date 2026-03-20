import { notFound } from "next/navigation";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { IProject, type Locale } from "@/interfaces";
import Link from "next/link";
import Contact from "@/components/home/contact";
import { getDictionary } from "@/lib/get-dictionary";
import { getProjects } from "@/lib/get-projects";
import { Metadata } from "next";
import projectsPt from "@/data/projects-pt.json";

export async function generateStaticParams() {
  const locales = ["pt", "en", "es"];

  return projectsPt.flatMap((project) =>
    locales.map((locale) => ({
      locale,
      id: project.id,
    })),
  );
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string; locale: Locale }>;
}): Promise<Metadata> {
  const { id, locale } = await params;
  const projects = getProjects(locale);
  const project = projects.find((p) => p.id === id);

  if (!project) return {};

  return {
    title: `${project.name} | João Alavarse`,
    description: project.description,

    alternates: {
      canonical: `/${locale}/projetos/${id}`,
      languages: {
        pt: `/pt/projetos/${id}`,
        en: `/en/projetos/${id}`,
        es: `/es/projetos/${id}`,
        "x-default": `/en/projetos/${id}`,
      },
    },

    openGraph: {
      title: project.name,
      description: project.description,
      url: `/${locale}/projetos/${id}`,
      siteName: "AlavarseDev",
      type: "article",
    },
    twitter: {
      card: "summary_large_image",
      title: `${project.name} | João Alavarse`,
      description: project.smallDescription || project.description,
    },
  };
}

export default async function ProjectDetailsPage({
  params,
}: {
  params: Promise<{ id: string; locale: "pt" | "en" | "es" }>;
}) {
  const { id, locale } = await params;
  const projects = getProjects(locale);

  const project = projects.find((p) => p.id === id) as IProject | undefined;
  const dict = getDictionary(locale);

  if (!project) return notFound();

  return (
    <main className="container mx-auto px-6 py-32 space-y-24">
      <div className="pointer-events-none fixed inset-0 -z-10">
        <div className="absolute top-1/4 left-1/4 h-96 w-96 bg-purple-500/20 blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 h-96 w-96 bg-blue-500/20 blur-3xl" />
      </div>

      <div className="relative items-center flex md:hidden">
        {/* glow da logo */}
        <div className="pointer-events-none absolute -inset-8 rounded-3xl bg-linear-to-br from-purple-500/30 to-blue-500/20 blur-3xl" />

        <div className="relative flex p-4 items-center justify-center rounded-3xl border border-border bg-card/70 backdrop-blur-xl shadow-[0_30px_80px_-20px_rgba(59,130,246,0.65)]">
          <Image
            src={project.logo}
            alt={`${project.name} logo`}
            width={400}
            height={400}
            className="object-contain"
          />
        </div>
      </div>

      {/* HEADER */}
      <div className="flex justify-between">
        <section className="relative max-w-3xl rounded-3xl border border-border bg-card/70 backdrop-blur-xl p-12 shadow-[0_0_80px_-20px_rgba(168,85,247,0.45)]">
          {/* glow */}
          <div className="pointer-events-none absolute -inset-8 rounded-3xl bg-linear-to-r from-purple-500/20 via-blue-500/10 to-transparent blur-3xl" />
          <div className="relative">
            <h1 className="text-5xl font-bold tracking-tight">
              {project.name}
            </h1>
            <p className="mt-6 text-lg text-muted-foreground">
              {project.smallDescription}
            </p>
            {project.highlights && project.highlights.length > 0 && (
              <div className="mt-4 flex flex-wrap gap-2">
                {project.highlights.map((highlight: string) => (
                  <span
                    key={highlight}
                    className="text-sm rounded-full bg-purple-500/10 px-4 py-1.5 text-purple-400 border border-purple-400/20"
                  >
                    {highlight}
                  </span>
                ))}
              </div>
            )}
            <p className="mt-6 text-lg text-muted-foreground whitespace-pre-line">
              {project.description}
            </p>
            {project.link && (
              <div className="mt-8">
                <Button
                  asChild
                  size="lg"
                  className="bg-linear-to-r from-purple-500 to-blue-500 text-white shadow-lg hover:opacity-90"
                >
                  <Link
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {dict.project.visit}
                  </Link>
                </Button>
              </div>
            )}
          </div>
        </section>
        <div className="relative items-center hidden md:flex">
          {/* glow da logo */}
          <div className="pointer-events-none absolute -inset-8 rounded-3xl bg-linear-to-br from-purple-500/30 to-blue-500/20 blur-3xl" />

          <div className="relative flex p-4 items-center justify-center rounded-3xl border border-border bg-card/70 backdrop-blur-xl shadow-[0_30px_80px_-20px_rgba(59,130,246,0.65)]">
            <Image
              src={project.logo}
              alt={`${project.name} logo`}
              width={400}
              height={400}
              className="object-contain"
            />
          </div>
        </div>
      </div>

      {/* IMAGENS */}
      {project.images && (
        <section className="grid gap-8 md:grid-cols-2">
          {project.images.map((img: string) => (
            <div
              key={img}
              className="rounded-2xl border border-border bg-background/60 backdrop-blur-md p-3 shadow-lg"
            >
              <Image
                src={img}
                alt={project.name}
                width={900}
                height={500}
                className="rounded-xl object-cover"
              />
            </div>
          ))}
        </section>
      )}

      <aside className="rounded-2xl border border-border bg-background/60 backdrop-blur-xl p-6 shadow-lg h-fit md:hidden block">
        <h3 className="text-sm font-semibold uppercase tracking-wide text-muted-foreground">
          {dict.project.technologies}
        </h3>

        <ul className="mt-4 flex flex-wrap gap-2">
          {project.technologies.map((tech: string) => (
            <li
              key={tech}
              className="rounded-full px-4 py-1 border border-border bg-linear-to-r from-purple-500/10 to-blue-500/10 hover:from-purple-500/20 hover:to-blue-500/20 transition"
            >
              {tech}
            </li>
          ))}
        </ul>
      </aside>

      {/* ATUAÇÃO */}
      {project.role && (
        <section className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-16">
          <div className="md:col-span-2">
            <h2 className="text-3xl font-bold">{dict.project.myActions}</h2>

            <p className="mt-6 text-muted-foreground leading-relaxed text-lg">
              {project.role}
            </p>

            {project.responsibilities && (
              <div className="mt-8">
                <h3 className="mb-4 text-sm font-semibold uppercase tracking-wide text-muted-foreground">
                  {dict.project.myResponsibilities}
                </h3>

                <ul className="flex flex-wrap gap-3">
                  {project.responsibilities.map((item: string) => (
                    <li
                      key={item}
                      className="rounded-full px-5 py-2 text-sm border border-border bg-linear-to-r from-purple-500/10 to-blue-500/10 hover:from-purple-500/20 hover:to-blue-500/20 transition"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>

          {/* TECNOLOGIAS */}
          <aside className="rounded-2xl border border-border bg-background/60 backdrop-blur-xl p-6 shadow-lg h-fit md:block hidden">
            <h3 className="text-sm font-semibold uppercase tracking-wide text-muted-foreground">
              {dict.project.technologies}
            </h3>

            <ul className="mt-4 flex flex-wrap gap-2">
              {project.technologies.map((tech: string) => (
                <li
                  key={tech}
                  className="rounded-full px-4 py-1 border border-border bg-linear-to-r from-purple-500/10 to-blue-500/10 hover:from-purple-500/20 hover:to-blue-500/20 transition"
                >
                  {tech}
                </li>
              ))}
            </ul>
          </aside>
        </section>
      )}

      <Contact params={params}/>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "SoftwareSourceCode",
            name: project.name,
            description: project.description,
            programmingLanguage: project.technologies,
            author: {
              "@type": "Person",
              name: "João Alavarse",
            },
          }),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              {
                "@type": "ListItem",
                position: 1,
                name: dict.navbar.home,
                item: `https://alavarsedev.com.br/${locale}`,
              },
              {
                "@type": "ListItem",
                position: 2,
                name: dict.navbar.projects,
                item: `https://alavarsedev.com.br/${locale}/projetos`,
              },
              {
                "@type": "ListItem",
                position: 3,
                name: project.name,
                item: `https://alavarsedev.com.br/${locale}/projetos/${project.id}`,
              },
            ],
          }),
        }}
      />
    </main>
  );
}
