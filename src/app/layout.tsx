import type { Metadata, Viewport } from "next";
import "./globals.css";
import { metadataBase, sharedOpenGraphImages, siteUrl } from "@/lib/seo";

export const metadata: Metadata = {
  metadataBase,
  title: {
    default: "João Alavarse | Engenharia de Software",
    template: "%s",
  },
  openGraph: {
    siteName: "AlavarseDev",
    images: sharedOpenGraphImages,
  },
  twitter: {
    card: "summary_large_image",
    images: sharedOpenGraphImages.map((image) => image.url),
  },
  alternates: {
    canonical: siteUrl,
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR" suppressHydrationWarning className="scroll-smooth overflow-x-hidden">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
      </head>
      <body className="min-h-screen overflow-x-hidden bg-background text-foreground antialiased">
        {children}
      </body>
    </html>
  );
}
