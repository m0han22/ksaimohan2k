import { ArrowUpRight } from "lucide-react";
import { AnimatedSection } from "@/components/animated-section";
import { posts } from "@/lib/data";

function formatDate(iso: string): string {
  const d = new Date(iso);
  return d.toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
}

export function Writing() {
  return (
    <AnimatedSection
      id="writing"
      aria-labelledby="writing-heading"
      className="container-wide scroll-mt-20 py-20 sm:py-28"
    >
      <p className="text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground">
        Writing
      </p>
      <h2
        id="writing-heading"
        className="mt-3 text-4xl tracking-tight sm:text-5xl"
      >
        Notes on what I'm learning.
      </h2>
      <p className="mt-4 max-w-2xl text-pretty text-muted-foreground">
        Short essays on AI engineering, data infrastructure, and the messy parts
        of shipping production systems.
      </p>

      <ul className="mt-12 divide-y divide-border/70 border-y border-border/70">
        {posts.map((post) => {
          const href = post.url ?? `#${post.slug}`;
          return (
            <li key={post.slug}>
              <a
                href={href}
                {...(post.url
                  ? { target: "_blank", rel: "noopener noreferrer" }
                  : {})}
                className="group grid items-baseline gap-3 py-5 transition-colors hover:bg-accent/40 focus-visible:bg-accent/40 focus-visible:outline-none sm:grid-cols-[120px_1fr_auto] sm:gap-6 sm:py-6"
              >
                <time
                  dateTime={post.date}
                  className="text-sm text-muted-foreground sm:pt-1"
                >
                  {formatDate(post.date)}
                </time>
                <div>
                  <h3 className="text-xl tracking-tight text-foreground transition-colors group-hover:text-accent-blue">
                    {post.title}
                  </h3>
                  <p className="mt-1.5 text-pretty text-sm text-muted-foreground">
                    {post.excerpt}
                  </p>
                </div>
                <div className="flex items-center gap-3 text-sm text-muted-foreground sm:justify-end sm:pt-1">
                  <span className="hidden sm:inline">{post.readingTime}</span>
                  <ArrowUpRight
                    aria-hidden="true"
                    className="hidden h-4 w-4 transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-foreground sm:block"
                  />
                </div>
              </a>
            </li>
          );
        })}
      </ul>
    </AnimatedSection>
  );
}
