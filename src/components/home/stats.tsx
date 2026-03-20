import { getDictionary } from "@/lib/get-dictionary";
import type { Locale } from "@/interfaces";

export default async function Stats({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}) {
  const { locale } = await params;
  const dict = getDictionary(locale);

  return (
    <section className="py-16">
      <div className="rounded-2xl border border-border/50 bg-background/70 backdrop-blur-md p-8 md:p-12 shadow-lg">
        <h2 className="text-center text-2xl font-bold mb-10 text-muted-foreground">
          {dict.stats.title}
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {dict.stats.items.map((item) => (
            <div key={item.label} className="text-center">
              <p className="text-4xl font-bold bg-linear-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                {item.value}
              </p>
              <p className="mt-2 text-sm text-muted-foreground">
                {item.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
