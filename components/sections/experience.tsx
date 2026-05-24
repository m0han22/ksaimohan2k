import { ArrowUpRight } from "lucide-react";
import { AnimatedSection } from "@/components/animated-section";
import { education, experience, socials } from "@/lib/data";
import { cn } from "@/lib/utils";

function formatRange(start: string, end: string): string {
  if (end === "Present") return "Now";
  const endShort = end.length === 4 ? end.slice(-2) : end;
  return `${start}-${endShort}`;
}

type Row = {
  range: string;
  isCurrent: boolean;
  primary: string;
  primaryHref?: string;
  secondary: string;
  location: string;
};

function Row({ row }: { row: Row }) {
  return (
    <li className="grid grid-cols-[64px_1fr] items-baseline gap-x-4 gap-y-1 py-4 sm:grid-cols-[80px_1fr_auto] sm:items-center sm:gap-x-8 sm:py-5">
      <span
        className={cn(
          "text-sm tabular-nums",
          row.isCurrent
            ? "font-medium text-accent-blue"
            : "text-muted-foreground",
        )}
      >
        {row.range}
      </span>
      <span className="text-[15px] leading-snug">
        <span className="text-foreground">{row.primary}</span>
        <span className="mx-2 text-border">·</span>
        {row.primaryHref ? (
          <a
            href={row.primaryHref}
            target="_blank"
            rel="noopener noreferrer"
            className="text-foreground underline-offset-4 hover:underline"
          >
            {row.secondary}
          </a>
        ) : (
          <span className="text-foreground">{row.secondary}</span>
        )}
      </span>
      <span className="col-start-2 text-sm text-muted-foreground sm:col-start-3 sm:text-right">
        {row.location}
      </span>
    </li>
  );
}

export function Experience() {
  const linkedin = socials.find((s) => s.kind === "linkedin");

  const experienceRows: Row[] = experience.map((role) => ({
    range: formatRange(role.start, role.end),
    isCurrent: role.end === "Present",
    primary: role.title,
    primaryHref: role.companyUrl,
    secondary: role.company,
    location: role.location ?? "",
  }));

  const educationRows: Row[] = education.map((e) => ({
    range: formatRange(e.start, e.end),
    isCurrent: false,
    primary: e.field ? `${e.degree}, ${e.field}` : e.degree,
    secondary: e.school,
    location: e.location ?? "",
  }));

  return (
    <AnimatedSection
      id="experience"
      aria-labelledby="experience-heading"
      className="container-wide scroll-mt-20 py-20 sm:py-28"
    >
      <p className="text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground">
        Experience
      </p>
      <h2
        id="experience-heading"
        className="mt-3 text-4xl tracking-tight sm:text-5xl"
      >
        Where I've worked.
      </h2>

      <ul className="mt-10 divide-y divide-border/60 border-y border-border/60">
        {experienceRows.map((row) => (
          <Row key={`${row.primary}-${row.range}`} row={row} />
        ))}
      </ul>

      <p className="mt-14 text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground">
        Education
      </p>
      <ul className="mt-4 divide-y divide-border/60 border-y border-border/60">
        {educationRows.map((row) => (
          <Row key={`${row.primary}-${row.range}`} row={row} />
        ))}
      </ul>

      {linkedin ? (
        <div className="mt-6 flex justify-end">
          <a
            href={linkedin.href}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-1 text-sm text-muted-foreground transition-colors hover:text-foreground focus-visible:text-foreground focus-visible:outline-none"
          >
            Full resume on LinkedIn
            <ArrowUpRight
              aria-hidden="true"
              className="h-3.5 w-3.5 transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
            />
          </a>
        </div>
      ) : null}
    </AnimatedSection>
  );
}
