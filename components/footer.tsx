import { profile, socials } from "@/lib/data";
import { MailLink } from "@/components/mail-link";
import { SocialIcon } from "@/components/social-icon";

const socialButtonClass =
  "inline-flex h-9 w-9 items-center justify-center rounded-md text-muted-foreground transition-colors hover:bg-accent hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background";

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="mt-24 border-t border-border/60">
      <div className="container-wide flex flex-col items-start justify-between gap-4 py-8 sm:flex-row sm:items-center">
        <p className="text-sm text-muted-foreground">
          © {year} {profile.name}.
        </p>
        <ul className="flex items-center gap-1">
          {socials.map((s) => (
            <li key={s.kind}>
              {s.kind === "email" ? (
                <MailLink aria-label={s.label} className={socialButtonClass}>
                  <SocialIcon kind={s.kind} className="h-4 w-4" />
                </MailLink>
              ) : (
                <a
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className={socialButtonClass}
                >
                  <SocialIcon kind={s.kind} className="h-4 w-4" />
                </a>
              )}
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
}
