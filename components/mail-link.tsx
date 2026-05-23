"use client";

import { type AnchorHTMLAttributes, type ReactNode, useEffect, useState } from "react";

const EMAIL_LOCAL = "mohancricket4";
const EMAIL_DOMAIN_PARTS = ["gmail", "com"];

type MailLinkProps = Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "href"> & {
  children: ReactNode;
  fallbackHref?: string;
};

export function MailLink({
  children,
  fallbackHref = "#contact",
  onClick,
  ...rest
}: MailLinkProps) {
  const [href, setHref] = useState<string | undefined>(undefined);

  useEffect(() => {
    setHref(`mailto:${EMAIL_LOCAL}@${EMAIL_DOMAIN_PARTS.join(".")}`);
  }, []);

  return (
    <a
      href={href ?? fallbackHref}
      onClick={(e) => {
        if (!href) e.preventDefault();
        onClick?.(e);
      }}
      {...rest}
    >
      {children}
    </a>
  );
}
