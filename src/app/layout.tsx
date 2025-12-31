import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "AlavarseDev | Desenvolvedor Full Stack",
    template: "%s | AlavarseDev",
  },
  description:
    "João Alavarse, desenvolvedor Full Stack especializado em React, Tailwind, Java e Spring Boot. Projetos reais, performance e código limpo.",
  openGraph: {
    title: "AlavarseDev | Desenvolvedor Full Stack",
    description:
      "Projetos modernos em React, Java e Spring Boot. Veja soluções reais para web e mobile.",
    url: "https://alavarsedev.com.br",
    siteName: "AlavarseDev",
    images: [
      {
        url: "/web-app-manifest-512x512.png",
        width: 512,
        height: 512,
        alt: "AlavarseDev Portfolio",
      },
    ],
    locale: "pt_BR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "AlavarseDev | Desenvolvedor Full Stack",
    description:
      "Portfólio de desenvolvedor Full Stack com foco em React, Java e Spring Boot.",
    images: ["/web-app-manifest-512x512.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
  authors: [
    {
      name: "João Alavarse",
      url: "https://www.linkedin.com/in/joao-alavarse/",
    },
  ],
  keywords: [
    "desenvolvedor full stack",
    "desenvolvedor react",
    "desenvolvedor java",
    "spring boot",
    "next.js",
    "tailwind css",
    "portfólio desenvolvedor",
    "desenvolvedor react native"
  ],
  creator: "João Alavarse",
  publisher: "João Alavarse",
  applicationName: "AlavarseDev Portfolio",
  alternates: {
    canonical: "https://alavarsedev.com.br",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
