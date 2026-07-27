import Link from "next/link";
import type { Metadata } from "next";
import { Button } from "@/components/ui/button";
import { metadataBase } from "@/lib/seo";

export const metadata: Metadata = {
  metadataBase,
  title: "Página não encontrada | AlavarseDev",
  robots: {
    index: false,
    follow: true,
  },
};

export default function GlobalNotFound() {
  return (
    <main className="container mx-auto flex min-h-screen flex-col items-center justify-center px-6 text-center">
      <h1 className="bg-linear-to-r from-purple-400 to-blue-400 bg-clip-text text-6xl font-bold text-transparent">
        404
      </h1>
      <p className="mt-4 text-lg text-muted-foreground">
        Página não encontrada ou movida.
      </p>
      <Button asChild className="mt-8" size="lg">
        <Link href="/pt">Voltar ao início</Link>
      </Button>
    </main>
  );
}
