import Contact from "@/components/home/contact";
import { Hero } from "@/components/home/hero";
import Stats from "@/components/home/stats";
import ExperiencePreview from "@/components/home/experience-preview";
import ProjectsList from "@/components/home/projects";
import type { Locale } from "@/interfaces";

export default function Home({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}) {
  return (
    <main className="relative mx-auto max-w-6xl px-4">
      <div className="pointer-events-none absolute -top-24 -left-24 h-96 w-96 rounded-full bg-purple-500/20 blur-3xl" />
      <div className="pointer-events-none absolute bottom-0 left-1/4 h-80 w-80 rounded-full bg-pink-500/20 blur-3xl" />
      <div className="pointer-events-none absolute bottom-5/12 right-3/4 h-80 w-80 rounded-full bg-blue-500/20 blur-3xl" />

      <Hero params={params}/>

      <Stats params={params}/>

      <ExperiencePreview params={params}/>

      <ProjectsList params={params}/>

      <Contact params={params}/>
    </main>
  );
}
