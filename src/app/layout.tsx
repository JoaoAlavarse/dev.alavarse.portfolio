import type { Metadata, Viewport } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
import { metadataBase, sharedOpenGraphImages, siteUrl } from "@/lib/seo";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "optional",
  adjustFontFallback: true,
});

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
    <html
      lang="pt-BR"
      className="dark scroll-smooth overflow-x-hidden"
      data-scroll-behavior="smooth"
    >
      <body
        className={`${geistSans.variable} flex min-h-screen flex-col overflow-x-hidden bg-background text-foreground antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
