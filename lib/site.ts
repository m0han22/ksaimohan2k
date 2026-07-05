// Resolves the canonical site URL across local dev, Vercel preview/prod, and custom domain.
// Override priority (first match wins):
//   1. NEXT_PUBLIC_SITE_URL  (optional manual override, e.g. for a staging domain)
//   2. Production on Vercel   -> the canonical custom domain below
//   3. VERCEL_URL             (Vercel auto-sets this per preview deployment)
//   4. localhost:3000         (local dev fallback)

// The live custom domain. `www` is primary in Vercel; the bare domain 308-redirects to it.
const CANONICAL_URL = "https://www.ksaimohan2k.com";

function resolveSiteUrl(): string {
  if (process.env.NEXT_PUBLIC_SITE_URL) {
    return process.env.NEXT_PUBLIC_SITE_URL.replace(/\/$/, "");
  }
  if (process.env.VERCEL_ENV === "production") {
    return CANONICAL_URL;
  }
  if (process.env.VERCEL_URL) {
    return `https://${process.env.VERCEL_URL}`;
  }
  return "http://localhost:3000";
}

export const SITE_URL = resolveSiteUrl();
