import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { metadataBase, sharedOpenGraphImages, siteUrl } from "@/lib/seo";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
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
    <html lang="pt-BR" className="dark scroll-smooth overflow-x-hidden">
      <body
        className={`${geistSans.variable} ${geistMono.variable} min-h-screen overflow-x-hidden bg-background text-foreground antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
