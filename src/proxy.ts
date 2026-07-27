import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const locales = ["pt", "en", "es"];
const defaultLocale = "pt";
const canonicalHost = "alavarsedev.com.br";

const isStaticAsset = (pathname: string) =>
  pathname.startsWith("/_next") ||
  pathname.startsWith("/assets") ||
  pathname.endsWith(".ico") ||
  pathname.endsWith(".jpg") ||
  pathname.endsWith(".jpeg") ||
  pathname.endsWith(".png") ||
  pathname.endsWith(".webp") ||
  pathname.endsWith(".svg") ||
  pathname.endsWith(".xml") ||
  pathname.endsWith(".txt");

export function proxy(request: NextRequest) {
  const { hostname, pathname } = request.nextUrl;
  const url = request.nextUrl.clone();

  const isProductionDomain =
    hostname === canonicalHost || hostname === `www.${canonicalHost}`;

  if (isProductionDomain) {
    url.protocol = "https:";
    url.hostname = canonicalHost;
  }

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
    return url.href === request.nextUrl.href
      ? NextResponse.next()
      : NextResponse.redirect(url, 308);
  }

  const pathnameHasLocale = locales.some(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`,
  );

  if (!pathnameHasLocale) {
    url.pathname = `/${defaultLocale}${pathname}`;
  }

  return url.href === request.nextUrl.href
    ? NextResponse.next()
    : NextResponse.redirect(url, 308);
}
