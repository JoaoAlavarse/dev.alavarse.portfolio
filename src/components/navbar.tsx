import Image from "next/image";
import Link from "next/link";
import { getDictionary } from "@/lib/get-dictionary";
import { LanguageSwitcher } from "./language-switcher";
import { MobileNav } from "./mobile-nav";
import type { Locale } from "@/interfaces";

export function Navbar({ locale }: { locale: Locale }) {
  const dict = getDictionary(locale);
  const navItems = [
    { label: dict.navbar.home, href: `/${locale}` },
    { label: dict.navbar.experience, href: `/${locale}/experiencia` },
    { label: dict.navbar.projects, href: `/${locale}/cases` },
    { label: dict.navbar.about, href: `/${locale}/sobre` },
    { label: dict.navbar.contact, href: `/${locale}/contato` },
  ];

  return (
    <header className="border-b">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4">
        <Link
          href={`/${locale}`}
          className="flex h-10 shrink-0 items-center gap-3"
        >
          {/* logo.svg is 357×243 — reserve exact aspect to avoid CLS */}
          <span
            className="relative block shrink-0 overflow-hidden"
            style={{ width: 53, height: 36 }}
          >
            <Image
              src="/logo.svg"
              alt="AlavarseDev Logo"
              width={53}
              height={36}
              sizes="53px"
              className="h-full w-full object-contain"
              style={{ width: 53, height: 36 }}
              priority
            />
          </span>
          {/* name-logo.svg is 626×136 */}
          <span
            className="relative hidden shrink-0 overflow-hidden sm:block"
            style={{ width: 128, height: 28 }}
          >
            <Image
              src="/name-logo.svg"
              alt="AlavarseDev"
              width={128}
              height={28}
              sizes="128px"
              className="h-full w-full object-contain"
              style={{ width: 128, height: 28 }}
              priority
            />
          </span>
        </Link>

        <div className="hidden min-h-9 items-center gap-6 md:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-md font-bold text-muted-foreground hover:text-foreground"
            >
              {item.label}
            </Link>
          ))}

          <LanguageSwitcher currentLocale={locale} />
        </div>

        <div className="flex h-9 w-9 items-center justify-center md:hidden">
          <MobileNav
            locale={locale}
            items={navItems}
            openLabel={dict.navbar.openMenu}
            closeLabel={dict.navbar.closeMenu}
          />
        </div>
      </div>
    </header>
  );
}
