import { getDictionary } from "@/lib/get-dictionary";
import type { Locale } from "@/interfaces";

export default async function FAQ({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}) {
  const { locale } = await params;
  const dict = getDictionary(locale);

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: dict.faq.items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };

  return (
    <section className="py-24">
      <h2 className="text-3xl font-bold tracking-tight sm:text-4xl bg-linear-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
        {dict.faq.title}
      </h2>

      <div className="mt-10 space-y-6">
        {dict.faq.items.map((item) => (
          <details
            key={item.question}
            className="group rounded-xl border p-6 hover:border-purple-400/50 transition"
          >
            <summary className="cursor-pointer text-lg font-semibold list-none flex items-center justify-between">
              {item.question}
              <span className="ml-4 text-muted-foreground group-open:rotate-45 transition-transform text-xl">
                +
              </span>
            </summary>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              {item.answer}
            </p>
          </details>
        ))}
      </div>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
    </section>
  );
}
