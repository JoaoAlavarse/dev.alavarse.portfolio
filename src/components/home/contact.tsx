import Link from "next/link";
import { Button } from "../ui/button";
import { Mail, MessageCircle, Check, Linkedin, Github } from "lucide-react";

export default function Contact() {
  return (
    <section className="py-32" id="contato">
      <div className="relative overflow-hidden rounded-2xl border border-border/50 bg-background/70 backdrop-blur-md p-8 md:p-14 shadow-xl">

        {/* Glow / background */}
        <div className="pointer-events-none absolute -top-24 -right-24 h-72 w-72 rounded-full bg-purple-500/20 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-blue-500/20 blur-3xl" />

        {/* Content */}
        <div className="relative">
          <h2 className="text-3xl font-bold tracking-tight sm:text-5xl bg-linear-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
            Vamos conversar?
          </h2>

          <p className="mt-4 max-w-xl text-muted-foreground text-lg">
            Se você tem uma ideia ou precisa de alguém para tirar seu projeto do papel,
            posso te ajudar do planejamento ao deploy.
          </p>

          {/* Benefits */}
          <ul className="mt-8 grid gap-3 text-sm text-muted-foreground sm:grid-cols-2">
            <li className="flex items-center gap-2">
              <Check className="h-4 w-4 text-purple-400" />
              Arquitetura e boas práticas
            </li>
            <li className="flex items-center gap-2">
              <Check className="h-4 w-4 text-purple-400" />
              Frontend e backend completos
            </li>
            <li className="flex items-center gap-2">
              <Check className="h-4 w-4 text-purple-400" />
              APIs performáticas e seguras
            </li>
            <li className="flex items-center gap-2">
              <Check className="h-4 w-4 text-purple-400" />
              Comunicação clara e rápida
            </li>
          </ul>

          {/* Divider */}
          <div className="my-10 h-px w-full bg-border/40" />

          {/* Actions */}
          <div className="flex flex-col sm:flex-row gap-4">
            <Button asChild size="lg" className="gap-2">
              <Link href="mailto:contato@alavarsedev.com">
                <Mail className="h-4 w-4" />
                Enviar e-mail
              </Link>
            </Button>

            <Button asChild size="lg" variant="outline" className="gap-2">
              <Link
                href="https://wa.me/5544999090699"
                target="_blank"
                rel="noopener noreferrer"
              >
                <MessageCircle className="h-4 w-4" />
                WhatsApp
              </Link>
            </Button>

            <Button asChild size="lg" variant="outline" className="gap-2">
              <Link
                href="https://www.linkedin.com/in/joao-alavarse/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Linkedin className="h-4 w-4" />
                LinkedIn
              </Link>
            </Button>

            <Button asChild size="lg" variant="outline" className="gap-2">
              <Link
                href="https://github.com/JoaoAlavarse"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github className="h-4 w-4" />
                GitHub
              </Link>
            </Button>
          </div>

          <p className="mt-6 text-xs text-muted-foreground">
            Respondo normalmente em até 24 horas.
          </p>
        </div>
      </div>
    </section>
  );
}
