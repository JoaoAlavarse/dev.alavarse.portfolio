import { Globe, Smartphone, Server, Users } from "lucide-react";
import { getDictionary } from "@/lib/get-dictionary";
import type { Locale } from "@/interfaces";

const icons = [Globe, Smartphone, Server, Users];

export default async function Services({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}) {
  const { locale } = await params;
  const dict = getDictionary(locale);

  return (
    <section className="py-24">
      <div className="mb-10">
        <h2 className="text-4xl font-bold tracking-tight sm:text-5xl bg-linear-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent leading-tight sm:leading-snug">
          {dict.services.title}
        </h2>
        <p className="text-muted-foreground mt-2">
          {dict.services.description}
        </p>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {dict.services.items.map((item, index) => {
          const Icon = icons[index];
          return (
            <div
              key={item.title}
              className="rounded-xl border p-6 hover:border-purple-400/50 transition group"
            >
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-purple-500/10 text-purple-400 group-hover:bg-purple-500/20 transition">
                <Icon className="h-6 w-6" />
              </div>
              <h3 className="text-lg font-bold">{item.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                {item.description}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
}
