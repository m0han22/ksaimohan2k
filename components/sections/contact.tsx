import { ArrowUpRight } from "lucide-react";
import { AnimatedSection } from "@/components/animated-section";
import { buttonVariants } from "@/components/ui/button";
import { MailLink } from "@/components/mail-link";
import { SocialIcon } from "@/components/social-icon";
import { profile, socials } from "@/lib/data";
import { cn } from "@/lib/utils";

export function Contact() {
  return (
    <AnimatedSection
      id="contact"
      aria-labelledby="contact-heading"
      className="container-wide scroll-mt-20 py-24 sm:py-32"
    >
      <div className="rounded-2xl border border-border/70 bg-card p-8 sm:p-12">
        <p className="text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground">
          Contact
        </p>
        <h2
          id="contact-heading"
          className="mt-3 max-w-2xl text-balance text-3xl font-semibold tracking-tight sm:text-4xl"
        >
          Have an idea, a role, or just want to say hi?
        </h2>
        <div className="mt-8 flex flex-wrap items-center gap-3">
          <MailLink
            className={cn(
              buttonVariants({ variant: "default", size: "lg" }),
              "h-11 bg-accent-blue px-5 text-sm text-accent-blue-foreground hover:bg-accent-blue/90",
            )}
          >
            Say hi
            <ArrowUpRight className="ml-1 h-4 w-4" aria-hidden="true" />
          </MailLink>
          <ul className="flex items-center gap-1">
            {socials
              .filter((s) => s.kind !== "email")
              .map((s) => (
                <li key={s.kind}>
                  <a
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={s.label}
                    className="inline-flex h-10 w-10 items-center justify-center rounded-md text-muted-foreground transition-colors hover:bg-accent hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
                  >
                    <SocialIcon kind={s.kind} className="h-4 w-4" />
                  </a>
                </li>
              ))}
        </ul>
        </div>
      </div>
    </AnimatedSection>
  );
}
