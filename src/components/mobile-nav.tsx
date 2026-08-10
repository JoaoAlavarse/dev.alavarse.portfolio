import Link from "next/link";
import { Menu, X } from "lucide-react";
import { LanguageSwitcher } from "./language-switcher";
import type { Locale } from "@/interfaces";

type NavItem = {
  label: string;
  href: string;
};

type MobileNavProps = {
  locale: Locale;
  items: NavItem[];
  openLabel: string;
  closeLabel: string;
};

export function MobileNav({
  locale,
  items,
  openLabel,
  closeLabel,
}: MobileNavProps) {
  const menuId = "mobile-nav-toggle";

  return (
    <div className="md:hidden">
      <input id={menuId} type="checkbox" className="peer sr-only" />

      <label
        htmlFor={menuId}
        className="flex size-9 cursor-pointer items-center justify-center rounded-md hover:bg-accent peer-checked:invisible"
        aria-label={openLabel}
      >
        <Menu className="h-5 w-5" aria-hidden="true" />
      </label>

      <div className="pointer-events-none fixed inset-0 z-50 invisible opacity-0 transition peer-checked:pointer-events-auto peer-checked:visible peer-checked:opacity-100">
        <label
          htmlFor={menuId}
          className="absolute inset-0 bg-black/50"
          aria-label={closeLabel}
        />
        <div className="absolute inset-y-0 right-0 flex w-[min(100%,20rem)] flex-col border-l border-border bg-background p-4 shadow-xl">
          <div className="flex items-center justify-between">
            <p className="text-sm font-medium text-muted-foreground">
              {openLabel}
            </p>
            <label
              htmlFor={menuId}
              className="flex size-9 cursor-pointer items-center justify-center rounded-md hover:bg-accent"
              aria-label={closeLabel}
            >
              <X className="h-5 w-5" aria-hidden="true" />
            </label>
          </div>

          <nav className="mt-8 flex flex-col gap-4">
            {items.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-lg font-medium"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="mt-8">
            <LanguageSwitcher currentLocale={locale} />
          </div>
        </div>
      </div>
    </div>
  );
}
