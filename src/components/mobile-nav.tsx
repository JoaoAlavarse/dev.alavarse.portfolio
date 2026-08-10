"use client";

import { useEffect, useId, useState } from "react";
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
  const [open, setOpen] = useState(false);
  const titleId = useId();

  useEffect(() => {
    if (!open) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };

    window.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [open]);

  return (
    <>
      <button
        type="button"
        className="inline-flex size-9 items-center justify-center rounded-md hover:bg-accent"
        aria-label={open ? closeLabel : openLabel}
        aria-expanded={open}
        aria-controls={titleId}
        onClick={() => setOpen(true)}
      >
        <Menu className="h-5 w-5" aria-hidden="true" />
      </button>

      {open && (
        <div className="fixed inset-0 z-50" role="dialog" aria-modal="true">
          <button
            type="button"
            className="absolute inset-0 bg-black/50"
            aria-label={closeLabel}
            onClick={() => setOpen(false)}
          />
          <div
            id={titleId}
            className="absolute inset-y-0 right-0 flex w-[min(100%,20rem)] flex-col border-l border-border bg-background p-4 shadow-xl"
          >
            <div className="flex items-center justify-between">
              <p className="text-sm font-medium text-muted-foreground">
                {openLabel}
              </p>
              <button
                type="button"
                className="inline-flex size-9 items-center justify-center rounded-md hover:bg-accent"
                aria-label={closeLabel}
                onClick={() => setOpen(false)}
              >
                <X className="h-5 w-5" aria-hidden="true" />
              </button>
            </div>

            <nav className="mt-8 flex flex-col gap-4">
              {items.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-lg font-medium"
                  onClick={() => setOpen(false)}
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
      )}
    </>
  );
}
