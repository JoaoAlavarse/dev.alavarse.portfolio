import Link from "next/link";
import { Github, Linkedin, Mail } from "lucide-react";
import { getDictionary } from "@/lib/get-dictionary";
import type { Locale } from "@/interfaces";

export function Footer({ locale }: { locale: Locale }) {
  const dict = getDictionary(locale);

  return (
    <footer className="bg-background/70 backdrop-blur-lg border-t border-border py-10 mt-16">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 items-start px-6">
        <div className="text-center md:text-left">
          <h2 className="text-2xl font-bold bg-linear-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
            João Alavarse
          </h2>
          <p className="text-sm text-muted-foreground mt-1">
            {dict.footer.role}
          </p>
        </div>

        <nav className="flex flex-col items-center gap-2 text-sm text-muted-foreground">
          <Link href={`/${locale}`} className="hover:text-foreground transition">
            {dict.navbar.home}
          </Link>
          <Link href={`/${locale}/projetos`} className="hover:text-foreground transition">
            {dict.navbar.projects}
          </Link>
          <Link href={`/${locale}/sobre`} className="hover:text-foreground transition">
            {dict.navbar.about}
          </Link>
        </nav>

        <div className="flex justify-center md:justify-end gap-6">
          <Link href="https://github.com/JoaoAlavarse" target="_blank" aria-label="GitHub">
            <Github className="w-6 h-6 text-foreground hover:drop-shadow-[0_0_10px_rgba(128,0,255,0.8)] transition-all duration-300" />
          </Link>
          <Link href="https://www.linkedin.com/in/joao-alavarse/" target="_blank" aria-label="LinkedIn">
            <Linkedin className="w-6 h-6 text-foreground hover:drop-shadow-[0_0_10px_rgba(0,128,255,0.8)] transition-all duration-300" />
          </Link>
          <Link href="mailto:contato@alavarsedev.com.br" aria-label="Email">
            <Mail className="w-6 h-6 text-foreground hover:drop-shadow-[0_0_10px_rgba(255,0,128,0.8)] transition-all duration-300" />
          </Link>
        </div>
      </div>

      <div className="mt-10 text-center text-sm text-muted-foreground relative">
        <span className="absolute left-1/2 -translate-x-1/2 top-1/2 h-px w-32 bg-linear-to-r from-purple-400 via-blue-400 to-pink-400 opacity-30"></span>
        <span className="relative z-10 bg-background/70 px-2">
          © {new Date().getFullYear()} João Alavarse. {dict.footer.copyright}
        </span>
      </div>
    </footer>
  );
}
