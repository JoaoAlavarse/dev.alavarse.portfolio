import Link from "next/link";
import { Button } from "../ui/button";
import { Mail, MessageCircle, Check, Linkedin, Github } from "lucide-react";
import { getDictionary } from "@/lib/get-dictionary";
import type { Locale } from "@/interfaces";

export default async function Contact({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}) {
  const { locale } = await params;
  const dict = getDictionary(locale);
  return (
    <section className="py-32" id="contato">
      <div className="relative overflow-hidden rounded-2xl border border-border/50 bg-background/70 backdrop-blur-md p-8 md:p-14 shadow-xl">
        {/* Glow / background */}
        <div className="pointer-events-none absolute -top-24 -right-24 h-72 w-72 rounded-full bg-purple-500/20 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-blue-500/20 blur-3xl" />

        {/* Content */}
        <div className="relative">
          <h2 className="text-3xl font-bold tracking-tight sm:text-5xl bg-linear-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
            {dict.contact.title}
          </h2>

          <p className="mt-4 max-w-xl text-muted-foreground text-lg">
            {dict.contact.description}
          </p>

          {/* Benefits */}
          <ul className="mt-8 grid gap-3 text-sm text-muted-foreground sm:grid-cols-2">
            {dict.contact.benefits.map((benefit, index) => (
              <li key={index} className="flex items-center gap-2">
                <Check className="h-4 w-4 text-purple-400" />
                {benefit}
              </li>
            ))}
          </ul>

          {/* Divider */}
          <div className="my-10 h-px w-full bg-border/40" />

          {/* Actions */}
          <div className="flex flex-col sm:flex-row gap-4">
            <Button asChild size="lg" className="gap-2">
              <Link href="mailto:contato@alavarsedev.com.br">
                <Mail className="h-4 w-4" />
                {dict.contact.actions.email}
              </Link>
            </Button>

            <Button asChild size="lg" variant="outline" className="gap-2">
              <Link
                href="https://wa.me/5544999090699"
                target="_blank"
                rel="noopener noreferrer"
              >
                <MessageCircle className="h-4 w-4" />
                {dict.contact.actions.whatsapp}
              </Link>
            </Button>

            <Button asChild size="lg" variant="outline" className="gap-2">
              <Link
                href="https://www.linkedin.com/in/joao-alavarse/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Linkedin className="h-4 w-4" />
                {dict.contact.actions.linkedin}
              </Link>
            </Button>

            <Button asChild size="lg" variant="outline" className="gap-2">
              <Link
                href="https://github.com/JoaoAlavarse"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github className="h-4 w-4" />
                {dict.contact.actions.github}
              </Link>
            </Button>
          </div>

          <p className="mt-6 text-xs text-muted-foreground">
            {dict.contact.responseTime}
          </p>
        </div>
      </div>
    </section>
  );
}
