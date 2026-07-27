import { Metadata } from "next";
import Contact from "@/components/home/contact";
import { getDictionary } from "@/lib/get-dictionary";
import {
  languageAlternates,
  metadataBase,
  sharedOpenGraphImages,
} from "@/lib/seo";
import type { Locale } from "@/interfaces";

type Props = {
  params: Promise<{ locale: Locale }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const dict = getDictionary(locale);

  return {
    title: `${dict.navbar.contact} | João Alavarse`,
    description: dict.contact.description,
    metadataBase,
    alternates: {
      canonical: `/${locale}/contato`,
      languages: languageAlternates("/contato"),
    },
    openGraph: {
      title: `${dict.navbar.contact} | João Alavarse`,
      description: dict.contact.description,
      url: `/${locale}/contato`,
      type: "profile",
      siteName: "AlavarseDev",
      images: sharedOpenGraphImages,
    },
    twitter: {
      card: "summary_large_image",
      title: `${dict.navbar.contact} | João Alavarse`,
      description: dict.contact.description,
      images: sharedOpenGraphImages.map((image) => image.url),
    },
  };
}

export default function ContactPage({ params }: Props) {
  return (
    <main className="container mx-auto px-6">
      <Contact params={params} />
    </main>
  );
}
