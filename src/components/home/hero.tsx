import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { getDictionary } from "@/lib/get-dictionary";

export async function Hero({ params }: { params: Promise<{ locale: "pt" | "en" | "es" }> }) {
  const { locale } = await params;
  const dict = getDictionary(locale);

  return (
    <section className="relative flex min-h-[85vh] items-center" id="sobre">
      <div className="grid w-full gap-12 md:grid-cols-2 items-center">
        {/* TEXTO */}
        <div>
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
            <span className="bg-linear-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
              {dict.hero.name}
            </span>{" "}
          </h1>

          <p className="mt-6 max-w-xl text-lg text-muted-foreground">
            {dict.hero.description}
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <Button asChild size="lg">
              <Link href={`/${locale}/sobre`}>
                {dict.hero.actions.about} <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>

            <Button asChild size="lg" variant="outline">
              <Link href="#contato">{dict.hero.actions.contact}</Link>
            </Button>
          </div>
        </div>

        {/* FOTO */}
        <div className="relative flex justify-center">
          {/* Glow */}
          <div className="absolute -inset-4 rounded-full bg-linear-to-tr from-purple-500/30 via-blue-500/20 to-pink-500/30 blur-3xl" />

          {/* Glass frame */}
          <div className="relative rounded-2xl bg-background/60 backdrop-blur-lg border border-white/10 p-2 shadow-xl">
            <Image
              src="/joao-alavarse.jpeg"
              alt={dict.hero.imageAlt}
              width={360}
              height={450}
              className="rounded-xl object-cover grayscale hover:grayscale-0 transition duration-300"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
