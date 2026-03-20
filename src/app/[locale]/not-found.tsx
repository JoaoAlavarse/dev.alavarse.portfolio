import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <main className="container mx-auto flex min-h-[60vh] flex-col items-center justify-center px-6 text-center">
      <h1 className="text-6xl font-bold bg-linear-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
        404
      </h1>
      <p className="mt-4 text-lg text-muted-foreground">
        The page you are looking for does not exist or has been moved.
      </p>
      <Button asChild className="mt-8" size="lg">
        <Link href="/pt">Back to home</Link>
      </Button>
    </main>
  );
}
