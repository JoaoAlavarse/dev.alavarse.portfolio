"use client";

import Image from "next/image";
import Link from "next/link";
import { Menu } from "lucide-react";
import { Button } from "./ui/button";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";
import { getDictionary } from "@/lib/get-dictionary";
import { LanguageSwitcher } from "./language-switcher";
import { ThemeToggle } from "./theme-toggle";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";
import { DialogTitle } from "@radix-ui/react-dialog";
import type { Locale } from "@/interfaces";

export function Navbar({ locale }: { locale: Locale }) {
  const dict = getDictionary(locale);
  const navItems = [
    { label: dict.navbar.home, href: `/${locale}` },
    { label: dict.navbar.projects, href: `/${locale}/projetos` },
    { label: dict.navbar.about, href: `/${locale}/sobre` },
    { label: dict.navbar.contact, href: `/${locale}#contato` },
  ];

  return (
    <header className="border-b">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4">
        {/* Logo */}
        <Link
          href={`/${locale}`}
          className="text-lg font-semibold flex gap-4 items-center"
        >
          <Image
            src="/logo.svg"
            alt="AlavarseDev Logo"
            width={52}
            height={52}
            priority
          />
          <Image
            src="/name-logo.svg"
            alt="AlavarseDev"
            width={140}
            height={32}
            priority
          />
        </Link>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-6">
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
          <ThemeToggle />
        </div>

        {/* Mobile */}
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon" className="md:hidden">
              <Menu className="h-5 w-5" />
            </Button>
          </SheetTrigger>

          <SheetContent side="right">
            <VisuallyHidden>
              <DialogTitle>{dict.navbar.openMenu}</DialogTitle>
            </VisuallyHidden>
            <nav className="flex flex-col gap-4 mt-8 p-4">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-lg font-medium"
                >
                  {item.label}
                </Link>
              ))}

              <div className="mt-4 flex items-center gap-4">
                <LanguageSwitcher currentLocale={locale} />
                <ThemeToggle />
              </div>
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
