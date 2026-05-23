import Link from "next/link";
import { ArrowRight, MapPin } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { profile } from "@/lib/data";
import { cn } from "@/lib/utils";

export function Hero() {
  return (
    <section
      id="top"
      aria-labelledby="hero-heading"
      className="relative isolate"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,oklch(0.95_0_0)_0%,transparent_55%)]"
      />
      <svg
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 h-full w-full opacity-[0.04] mix-blend-multiply"
      >
        <filter id="hero-grain">
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.9"
            numOctaves="2"
            stitchTiles="stitch"
          />
        </filter>
        <rect width="100%" height="100%" filter="url(#hero-grain)" />
      </svg>

      <div className="container-wide flex min-h-[75svh] flex-col justify-center py-20 sm:py-24">
        <div className="flex items-center gap-2 text-xs uppercase tracking-[0.18em] text-muted-foreground">
          <span className="relative inline-flex h-1.5 w-1.5">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent-blue/60" />
            <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-accent-blue" />
          </span>
          <span>{profile.status}</span>
        </div>

        <h1
          id="hero-heading"
          className="mt-5 text-balance text-4xl font-semibold leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl"
        >
          {profile.name}
        </h1>

        <p className="mt-4 max-w-2xl text-pretty text-base text-muted-foreground sm:text-lg">
          {profile.role} at{" "}
          <a
            href={profile.companyUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="font-medium text-foreground underline-offset-4 hover:underline"
          >
            {profile.company}
          </a>
          <span className="mx-2 text-border">·</span>
          <span className="inline-flex items-center gap-1.5">
            <MapPin className="h-4 w-4" aria-hidden="true" />
            {profile.location}
          </span>
        </p>

        <p
          className="mt-10 max-w-3xl text-balance text-2xl leading-snug tracking-tight text-foreground sm:text-3xl lg:text-[2.5rem]"
          style={{ fontFamily: "var(--font-heading)" }}
        >
          {profile.tagline}
        </p>
        <p className="mt-4 max-w-2xl text-pretty text-base text-muted-foreground sm:text-lg">
          {profile.currentFocus}
        </p>

        <div className="mt-10 flex flex-wrap items-center gap-2">
          <Link
            href="#projects"
            className={cn(
              buttonVariants({ variant: "default", size: "lg" }),
              "h-11 px-5 text-sm",
            )}
          >
            See selected work
            <ArrowRight className="ml-1 h-4 w-4" aria-hidden="true" />
          </Link>
          <Link
            href="#contact"
            className="group inline-flex h-11 items-center gap-1.5 rounded-md px-3 text-sm font-medium text-foreground underline-offset-4 transition-colors hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
          >
            Get in touch
            <ArrowRight
              aria-hidden="true"
              className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5"
            />
          </Link>
        </div>
      </div>
    </section>
  );
}
