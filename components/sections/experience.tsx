import { type ReactNode } from "react";
import { ArrowUpRight } from "lucide-react";
import { AnimatedSection } from "@/components/animated-section";
import {
  certifications,
  education,
  experience,
  research,
  scholarUrl,
  socials,
} from "@/lib/data";
import { cn } from "@/lib/utils";

function formatRange(start: string, end: string): string {
  if (end === "Present") return "Now";
  const endShort = end.length === 4 ? end.slice(-2) : end;
  return `${start}-${endShort}`;
}

type Row = {
  range: string;
  current?: boolean;
  primary: string;
  secondary?: string;
  secondaryHref?: string;
  right?: ReactNode;
};

function RowItem({ row }: { row: Row }) {
  return (
    <li className="grid grid-cols-[64px_1fr] items-baseline gap-x-4 gap-y-1 py-4 sm:grid-cols-[80px_1fr_auto] sm:items-center sm:gap-x-8 sm:py-5">
      <span
        className={cn(
          "text-sm tabular-nums",
          row.current
            ? "font-medium text-accent-blue"
            : "text-muted-foreground",
        )}
      >
        {row.range}
      </span>
      <span className="text-[15px] leading-snug">
        <span className="text-foreground">{row.primary}</span>
        {row.secondary ? (
          <>
            <span className="mx-2 text-border">·</span>
            {row.secondaryHref ? (
              <a
                href={row.secondaryHref}
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground underline-offset-4 hover:underline"
              >
                {row.secondary}
              </a>
            ) : (
              <span className="text-foreground">{row.secondary}</span>
            )}
          </>
        ) : null}
      </span>
      {row.right ? (
        <span className="col-start-2 text-sm text-muted-foreground sm:col-start-3 sm:text-right">
          {row.right}
        </span>
      ) : null}
    </li>
  );
}

function Block({
  label,
  rows,
  action,
  className,
}: {
  label: string;
  rows: Row[];
  action?: ReactNode;
  className?: string;
}) {
  return (
    <div className={className}>
      <div className="flex items-baseline justify-between gap-4">
        <p className="text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground">
          {label}
        </p>
        {action}
      </div>
      <ul className="mt-4 divide-y divide-border/60 border-y border-border/60">
        {rows.map((row, i) => (
          <RowItem key={`${row.primary}-${row.range}-${i}`} row={row} />
        ))}
      </ul>
    </div>
  );
}

function ExternalLink({
  href,
  children,
}: {
  href: string;
  children: ReactNode;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="group inline-flex items-center gap-1 text-xs text-muted-foreground transition-colors hover:text-foreground focus-visible:text-foreground focus-visible:outline-none"
    >
      {children}
      <ArrowUpRight
        aria-hidden="true"
        className="h-3 w-3 transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
      />
    </a>
  );
}

export function Experience() {
  const linkedin = socials.find((s) => s.kind === "linkedin");

  const experienceRows: Row[] = experience.map((role) => ({
    range: formatRange(role.start, role.end),
    current: role.end === "Present",
    primary: role.title,
    secondary: role.company,
    secondaryHref: role.companyUrl,
    right: role.location,
  }));

  const educationRows: Row[] = education.map((e) => ({
    range: formatRange(e.start, e.end),
    primary: e.field ? `${e.degree}, ${e.field}` : e.degree,
    secondary: e.school,
    right: e.location,
  }));

  const researchRows: Row[] = research.map((r) => ({
    range: r.year,
    primary: r.title,
    secondary: r.venue,
  }));

  const certificationRows: Row[] = certifications.map((c) => ({
    range: c.year,
    primary: c.name,
    secondary: c.issuer,
    right: c.url ? (
      <ExternalLink href={c.url}>Verify</ExternalLink>
    ) : undefined,
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
        {experienceRows.map((row, i) => (
          <RowItem key={`exp-${row.primary}-${i}`} row={row} />
        ))}
      </ul>

      <Block label="Education" rows={educationRows} className="mt-14" />

      <Block
        label="Research"
        rows={researchRows}
        action={
          <ExternalLink href={scholarUrl}>View on Google Scholar</ExternalLink>
        }
        className="mt-14"
      />

      <Block label="Certifications" rows={certificationRows} className="mt-14" />

      {linkedin ? (
        <div className="mt-8 flex justify-end">
          <ExternalLink href={linkedin.href}>
            Full resume on LinkedIn
          </ExternalLink>
        </div>
      ) : null}
    </AnimatedSection>
  );
}
