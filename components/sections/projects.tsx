import { ArrowUpRight } from "lucide-react";
import { AnimatedSection } from "@/components/animated-section";
import { Badge } from "@/components/ui/badge";
import { projects } from "@/lib/data";

export function Projects() {
  return (
    <AnimatedSection
      id="projects"
      aria-labelledby="projects-heading"
      className="container-wide scroll-mt-20 py-20 sm:py-28"
    >
      <p className="text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground">
        Selected work
      </p>
      <h2
        id="projects-heading"
        className="mt-3 text-4xl tracking-tight sm:text-5xl"
      >
        Things I've shipped.
      </h2>

      <ul className="mt-12 grid gap-4 sm:grid-cols-2">
        {projects.map((p) => {
          const href = p.url ?? p.repo;
          const Wrapper = href ? "a" : "div";
          const wrapperProps = href
            ? {
                href,
                target: "_blank",
                rel: "noopener noreferrer",
                "aria-label": `${p.title} — opens in a new tab`,
              }
            : {};
          return (
            <li key={p.title}>
              <Wrapper
                {...wrapperProps}
                className="group relative flex h-full flex-col rounded-xl border border-border/70 bg-card p-6 transition-all duration-200 hover:border-foreground/30 hover:shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
              >
                <div className="flex items-start justify-between gap-4">
                  <h3 className="text-xl tracking-tight">
                    {p.title}
                  </h3>
                  {href ? (
                    <ArrowUpRight
                      aria-hidden="true"
                      className="h-4 w-4 shrink-0 text-muted-foreground transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-foreground"
                    />
                  ) : null}
                </div>
                <p className="mt-2 text-sm text-muted-foreground">{p.year}</p>
                <p className="mt-4 text-pretty text-sm leading-relaxed text-muted-foreground">
                  {p.description}
                </p>
                <ul className="mt-5 flex flex-wrap gap-1.5">
                  {p.tags.map((t) => (
                    <li key={t}>
                      <Badge variant="secondary" className="font-normal">
                        {t}
                      </Badge>
                    </li>
                  ))}
                </ul>
              </Wrapper>
            </li>
          );
        })}
      </ul>
    </AnimatedSection>
  );
}
