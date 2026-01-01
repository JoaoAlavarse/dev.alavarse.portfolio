import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Hero() {
  return (
    <section className="relative flex min-h-[85vh] items-center" id="sobre">
      <div className="grid w-full gap-12 md:grid-cols-2 items-center">
        {/* TEXTO */}
        <div>
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
            Olá, eu sou{" "}
            <span className="bg-linear-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
              João Alavarse
            </span>{" "}
          </h1>

          <p className="mt-6 max-w-xl text-lg text-muted-foreground">
            Desenvolvedor Full Stack com foco em aplicações modernas,
            performáticas e bem arquitetadas usando React, React Native e Java
            com Spring Boot.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <Button asChild size="lg">
              <Link href="/sobre">
                Me conheça <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>

            <Button asChild size="lg" variant="outline">
              <Link href="#contato">Entrar em contato</Link>
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
              src="/joao-alavarse.jpg"
              alt="Foto de João Alavarse"
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
