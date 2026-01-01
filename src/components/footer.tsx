import Link from "next/link";
import { Github, Linkedin, Mail } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-background/70 backdrop-blur-lg border-t border-white/10 py-10 mt-16">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        {/* Logo / Nome */}
        <div className="text-center md:text-left">
          <h2 className="text-2xl font-bold bg-linear-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
            João Alavarse
          </h2>
          <p className="text-sm text-muted-foreground mt-1">
            Desenvolvedor Full Stack
          </p>
        </div>

        {/* Separador decorativo */}
        <div className="hidden md:block h-px w-24 bg-linear-to-r from-purple-400 via-blue-400 to-pink-400 rounded-full" />

        {/* Links sociais */}
        <div className="flex gap-6">
          <Link href="https://github.com/JoaoAlavarse" target="_blank">
            <Github className="w-6 h-6 text-white hover:drop-shadow-[0_0_10px_rgba(128,0,255,0.8)] transition-all duration-300" />
          </Link>
          <Link href="https://www.linkedin.com/in/joao-alavarse/" target="_blank">
            <Linkedin className="w-6 h-6 text-white hover:drop-shadow-[0_0_10px_rgba(0,128,255,0.8)] transition-all duration-300" />
          </Link>
          <Link href="mailto:contato@alavarsedev.com.br">
            <Mail className="w-6 h-6 text-white hover:drop-shadow-[0_0_10px_rgba(255,0,128,0.8)] transition-all duration-300" />
          </Link>
        </div>
      </div>

      {/* Copyright */}
      <div className="mt-10 text-center text-sm text-muted-foreground relative">
        <span className="absolute left-1/2 -translate-x-1/2 top-1/2 h-px w-32 bg-linear-to-r from-purple-400 via-blue-400 to-pink-400 opacity-30"></span>
        <span className="relative z-10 bg-background/70 px-2">
          © {new Date().getFullYear()} João Alavarse. Todos os direitos reservados.
        </span>
      </div>
    </footer>
  );
}
