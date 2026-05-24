import type { Metadata, Viewport } from "next";
import { Inter, Instrument_Serif } from "next/font/google";
import Script from "next/script";
import { TooltipProvider } from "@/components/ui/tooltip";
import { profile, socials } from "@/lib/data";
import { SITE_URL } from "@/lib/site";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

const instrumentSerif = Instrument_Serif({
  variable: "--font-instrument-serif",
  subsets: ["latin"],
  display: "swap",
  weight: "400",
  style: ["normal", "italic"],
});

const description = `${profile.role} at ${profile.company}, based in ${profile.location}. ${profile.tagline}`;
const titleSuffix = `${profile.name} · ${profile.role}`;

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: titleSuffix,
    template: `%s · ${profile.name}`,
  },
  description,
  authors: [{ name: profile.name }],
  creator: profile.name,
  keywords: [
    profile.name,
    "AI Engineer",
    "Machine Learning",
    "LLM",
    "Deriv",
    "Dubai",
    "UAE",
    "GITAM",
  ],
  openGraph: {
    type: "profile",
    locale: "en_US",
    url: SITE_URL,
    siteName: profile.name,
    title: titleSuffix,
    description,
  },
  twitter: {
    card: "summary_large_image",
    title: titleSuffix,
    description,
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  themeColor: "#fafafa",
  width: "device-width",
  initialScale: 1,
};

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: profile.name,
  jobTitle: profile.role,
  worksFor: {
    "@type": "Organization",
    name: profile.company,
    url: profile.companyUrl,
  },
  address: {
    "@type": "PostalAddress",
    addressLocality: profile.location,
  },
  url: SITE_URL,
  sameAs: socials
    .filter((s) => s.kind !== "email")
    .map((s) => s.href),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${instrumentSerif.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col bg-background text-foreground font-sans">
        <TooltipProvider>{children}</TooltipProvider>
        <Script
          id="person-jsonld"
          type="application/ld+json"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
      </body>
    </html>
  );
}
