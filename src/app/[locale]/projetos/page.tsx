import { redirect } from "next/navigation";
import type { Metadata } from "next";
import type { Locale } from "@/interfaces";

export const metadata: Metadata = {
  robots: {
    index: false,
    follow: true,
  },
};

export default async function ProjectsPage({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}) {
  const { locale } = await params;
  redirect(`/${locale}/cases`);
}
