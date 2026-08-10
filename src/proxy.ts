import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const locales = ["pt", "en", "es"];
const defaultLocale = "pt";

const localeExemptPaths = new Set([
  "/manifest.json",
  "/manifest.webmanifest",
  "/robots.txt",
  "/sitemap.xml",
  "/favicon.ico",
  "/icon0.svg",
  "/icon1.png",
  "/apple-icon.png",
  "/opengraph-image",
]);

const isStaticAsset = (pathname: string) =>
  pathname.startsWith("/_next") ||
  pathname.startsWith("/assets") ||
  localeExemptPaths.has(pathname) ||
  pathname.endsWith(".ico") ||
  pathname.endsWith(".jpg") ||
  pathname.endsWith(".jpeg") ||
  pathname.endsWith(".png") ||
  pathname.endsWith(".webp") ||
  pathname.endsWith(".svg") ||
  pathname.endsWith(".xml") ||
  pathname.endsWith(".txt") ||
  pathname.endsWith(".webmanifest");

export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const url = request.nextUrl.clone();

  const localeFromLegacyProjectPath = locales.find((locale) =>
    pathname.startsWith(`/${locale}/projetos`),
  );

  if (localeFromLegacyProjectPath) {
    url.pathname = `/${localeFromLegacyProjectPath}/cases${pathname.replace(
      `/${localeFromLegacyProjectPath}/projetos`,
      "",
    )}`;
    return NextResponse.redirect(url, 308);
  }

  if (pathname === "/projetos" || pathname.startsWith("/projetos/")) {
    url.pathname = `/${defaultLocale}/cases${pathname.replace("/projetos", "")}`;
    return NextResponse.redirect(url, 308);
  }

  if (isStaticAsset(pathname)) {
    return NextResponse.next();
  }

  const pathnameHasLocale = locales.some(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`,
  );

  if (!pathnameHasLocale) {
    url.pathname = `/${defaultLocale}${pathname}`;
    return NextResponse.redirect(url, 308);
  }

  return NextResponse.next();
}
