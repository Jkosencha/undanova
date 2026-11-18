import Link from "next/link";
import type { ReactNode } from "react";

type TextLinkProps = {
  href: string;
  children: ReactNode;
  className?: string;
  /** "dark" for navy sections. */
  tone?: "light" | "dark";
};

/**
 * Inline text link with a wave underline. `wave` is too light for small text
 * (contrast below AA), so the text itself is navy (or white on navy).
 */
export function TextLink({ href, children, className = "", tone = "light" }: TextLinkProps) {
  const color = tone === "dark" ? "text-white hover:decoration-white" : "text-navy hover:decoration-navy";
  return (
    <Link
      href={href}
      className={`inline-flex min-h-11 items-center gap-1 font-medium underline decoration-wave decoration-2 underline-offset-4 ${color} ${className}`}
    >
      {children}
    </Link>
  );
}
