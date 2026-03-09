import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"

const locales = ["pt", "en", "es"]
const defaultLocale = "pt"

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Ignore assets e arquivos estáticos
  if (
    pathname.startsWith("/_next") ||
    pathname.startsWith("/assets") ||
    pathname.endsWith(".ico") ||
    pathname.endsWith(".jpg") ||
    pathname.endsWith(".jpeg") ||
    pathname.endsWith(".png") ||
    pathname.endsWith(".webp") ||
    pathname.endsWith(".svg") ||
    pathname.endsWith(".xml") ||
    pathname.endsWith(".txt")
  ) {
    return NextResponse.next(); // garantir que continue
  }

  // Se já tem locale, não redireciona
  const pathnameHasLocale = locales.some((locale) =>
    pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  );
  if (pathnameHasLocale) return NextResponse.next();

  // Caso contrário, redireciona para defaultLocale
  const url = request.nextUrl.clone();
  url.pathname = `/${defaultLocale}${pathname}`;
  return NextResponse.redirect(url);
}