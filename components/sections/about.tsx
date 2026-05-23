import { AnimatedSection } from "@/components/animated-section";
import { profile } from "@/lib/data";

export function About() {
  return (
    <AnimatedSection
      id="about"
      aria-labelledby="about-heading"
      className="container-wide scroll-mt-20 py-20 sm:py-28"
    >
      <SectionLabel>About</SectionLabel>
      <h2
        id="about-heading"
        className="mt-3 max-w-3xl text-balance text-3xl font-semibold tracking-tight sm:text-4xl"
      >
        Systems over models.
      </h2>
      <div className="mt-8 grid max-w-3xl gap-5 text-base leading-relaxed text-muted-foreground sm:text-lg">
        {profile.about.map((p, i) => (
          <p key={i} className="text-pretty">
            {p}
          </p>
        ))}
      </div>
    </AnimatedSection>
  );
}

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground">
      {children}
    </p>
  );
}
