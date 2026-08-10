"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import type { Locale } from "@/interfaces";

const locales: { label: string; code: Locale }[] = [
  { label: "PT", code: "pt" },
  { label: "EN", code: "en" },
  { label: "ES", code: "es" },
];

export function LanguageSwitcher({ currentLocale }: { currentLocale: Locale }) {
  const pathname = usePathname();
  const suffix = pathname.replace(/^\/(pt|en|es)/, "") || "";

  return (
    <div className="flex min-h-8 gap-2">
      {locales.map((locale) => {
        const isActive = locale.code === currentLocale;

        return (
          <Link
            key={locale.code}
            href={`/${locale.code}${suffix}`}
            hrefLang={locale.code}
            prefetch={false}
            aria-current={isActive ? "page" : undefined}
            aria-label={`Alterar idioma para ${locale.label}`}
            className={`rounded px-2 py-1 ${
              isActive
                ? "bg-purple-400 text-white"
                : "bg-gray-200 text-gray-800 dark:bg-gray-700 dark:text-gray-200"
            }`}
          >
            {locale.label}
          </Link>
        );
      })}
    </div>
  );
}
