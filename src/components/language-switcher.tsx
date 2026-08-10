import type { Locale } from "@/interfaces";

const locales: { label: string; code: Locale }[] = [
  { label: "PT", code: "pt" },
  { label: "EN", code: "en" },
  { label: "ES", code: "es" },
];

export function LanguageSwitcher({ currentLocale }: { currentLocale: Locale }) {
  return (
    <div className="flex min-h-8 gap-2">
      {locales.map((locale) => {
        const isActive = locale.code === currentLocale;

        return (
          <a
            key={locale.code}
            href={`/${locale.code}`}
            hrefLang={locale.code}
            data-locale-switch={locale.code}
            aria-current={isActive ? "page" : undefined}
            aria-label={`Alterar idioma para ${locale.label}`}
            className={`rounded px-2 py-1 text-sm font-medium ${
              isActive
                ? "bg-purple-700 text-white"
                : "bg-gray-200 text-gray-800 dark:bg-gray-700 dark:text-gray-200"
            }`}
          >
            {locale.label}
          </a>
        );
      })}
    </div>
  );
}

/** Tiny progressive enhancement: keep current path when switching locale. */
export function LanguageSwitcherScript() {
  return (
    <script
      dangerouslySetInnerHTML={{
        __html: `document.querySelectorAll("[data-locale-switch]").forEach(function(el){el.addEventListener("click",function(e){e.preventDefault();var l=el.getAttribute("data-locale-switch");if(!l)return;location.assign(location.pathname.replace(/^\\/(pt|en|es)/,"/"+l)+location.search+location.hash);});});`,
      }}
    />
  );
}
