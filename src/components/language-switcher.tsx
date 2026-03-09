"use client";

import { usePathname, useRouter } from "next/navigation";

type Locale = "pt" | "en" | "es";

const locales: { label: string; code: Locale }[] = [
  { label: "PT", code: "pt" },
  { label: "EN", code: "en" },
  { label: "ES", code: "es" },
];

export function LanguageSwitcher({ currentLocale }: { currentLocale: Locale }) {
  const router = useRouter();
  const pathname = usePathname();

  const handleChange = (locale: Locale) => {
    const newPath = pathname.replace(/^\/(pt|en|es)/, `/${locale}`);
    router.push(newPath);
  };

  return (
    <div className="flex gap-2">
      {locales.map((locale) => (
        <button
          key={locale.code}
          onClick={() => handleChange(locale.code)}
          className={`px-2 py-1 rounded ${
            locale.code === currentLocale
              ? "bg-purple-400 text-white"
              : "bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200"
          }`}
        >
          {locale.label}
        </button>
      ))}
    </div>
  );
}