import { redirect } from "react-router";
import { defaultLanguage, isSupportedLanguage, type SupportedLanguage } from "./dictionary";

/**
 * Extracts the language code from a URL pathname.
 */
export function getLanguageFromPath(pathname: string): SupportedLanguage {
  const segments = pathname.split("/").filter(Boolean);
  const firstSegment = segments[0];

  if (firstSegment && isSupportedLanguage(firstSegment)) {
    return firstSegment;
  }

  return defaultLanguage;
}

/**
 * Detects the language from the request URL pathname.
 */
export function getLanguageFromRequest(request: Request): SupportedLanguage {
  const url = new URL(request.url);
  return getLanguageFromPath(url.pathname);
}

/**
 * Removes the language prefix from the pathname.
 * e.g., "/th/about" -> "/about"
 *       "/en" -> "/"
 */
export function stripLanguage(pathname: string): string {
  const segments = pathname.split("/").filter(Boolean);
  const firstSegment = segments[0];

  if (firstSegment && isSupportedLanguage(firstSegment)) {
    const remaining = segments.slice(1).join("/");
    return remaining ? `/${remaining}` : "/";
  }

  return pathname.startsWith("/") ? pathname : `/${pathname}`;
}

/**
 * Redirects to a target path with the correct language segment prepended.
 */
export function redirectWithLanguage(
  request: Request,
  targetPath: string,
  status = 302
) {
  const lang = getLanguageFromRequest(request);
  const cleanTarget = stripLanguage(targetPath);
  const localizedPath = cleanTarget === "/" ? `/${lang}` : `/${lang}${cleanTarget}`;
  
  return redirect(localizedPath, status);
}
