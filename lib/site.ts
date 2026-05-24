// Resolves the canonical site URL across local dev, Vercel preview/prod, and custom domain.
// Override priority (first match wins):
//   1. NEXT_PUBLIC_SITE_URL  (set this in Vercel env when you add a custom domain like https://saimohan.dev)
//   2. VERCEL_PROJECT_PRODUCTION_URL  (Vercel auto-sets to your *.vercel.app production URL)
//   3. VERCEL_URL  (Vercel auto-sets to the per-deployment preview URL)
//   4. localhost:3000  (local dev fallback)

function resolveSiteUrl(): string {
  if (process.env.NEXT_PUBLIC_SITE_URL) {
    return process.env.NEXT_PUBLIC_SITE_URL.replace(/\/$/, "");
  }
  if (process.env.VERCEL_PROJECT_PRODUCTION_URL) {
    return `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`;
  }
  if (process.env.VERCEL_URL) {
    return `https://${process.env.VERCEL_URL}`;
  }
  return "http://localhost:3000";
}

export const SITE_URL = resolveSiteUrl();
