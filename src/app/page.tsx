import { Hero } from "@/components/hero";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <main className="relative mx-auto max-w-6xl px-4">
      <div className="pointer-events-none absolute -top-24 -left-24 h-96 w-96 rounded-full bg-purple-500/20 blur-3xl" />
      <div className="pointer-events-none absolute bottom-0 left-1/4 h-80 w-80 rounded-full bg-pink-500/20 blur-3xl" />

      <Hero />

      {/* PROJETOS */}
      <section className="py-24">
        <div className="mb-10">
          <h2 className="text-4xl font-bold tracking-tight sm:text-5xl bg-linear-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent leading-tight sm:leading-snug">
            Projetos
          </h2>
          <p className="text-muted-foreground mt-2">
            Alguns projetos que desenvolvi recentemente
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {/* Card placeholder */}
          {[1, 2, 3].map((item) => (
            <div
              key={item}
              className="rounded-xl border p-5 hover:border-foreground/30 transition"
            >
              <h3 className="font-medium text-lg">Projeto em destaque</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Descrição curta do projeto, problema resolvido e stack usada.
              </p>

              <Link
                href="/projetos"
                className="mt-4 inline-block text-sm font-medium hover:underline"
              >
                Ver detalhes →
              </Link>
            </div>
          ))}
        </div>

        <div className="mt-10">
          <Button asChild variant="secondary">
            <Link href="/projetos">Ver todos os projetos</Link>
          </Button>
        </div>
      </section>

      {/* CONTATO */}
      <section className="py-24">
        <div className="rounded-2xl border border-border/50 bg-background/60 backdrop-blur-md p-8 md:p-12 shadow-xl">
          <h2 className="text-3xl font-bold tracking-tight sm:text-5xl bg-linear-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent leading-tight sm:leading-snug">
            Vamos conversar?
          </h2>

          <p className="mt-4 max-w-xl text-muted-foreground">
            Se você tem uma ideia, projeto ou precisa de ajuda com
            desenvolvimento, fique à vontade para entrar em contato.
          </p>

          <Button asChild size="lg" className="mt-6">
            <Link href="/contato">Ir para contato</Link>
          </Button>
        </div>
      </section>
    </main>
  );
}
