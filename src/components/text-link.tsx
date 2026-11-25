import Link from "next/link";
import type { ReactNode } from "react";

type TextLinkProps = {
  href: string;
  children: ReactNode;
  className?: string;
  /** "dark" for navy sections. */
  tone?: "light" | "dark";
};

/** Quiet link in small spaced caps with a thin underline that firms up on hover. */
export function TextLink({ href, children, className = "", tone = "light" }: TextLinkProps) {
  const color =
    tone === "dark"
      ? "text-white decoration-white/40 hover:decoration-white"
      : "text-navy decoration-navy/30 hover:decoration-navy";
  return (
    <Link
      href={href}
      className={`caps-sm inline-flex min-h-11 items-center gap-1.5 underline underline-offset-8 transition-colors ${color} ${className}`}
    >
      {children}
    </Link>
  );
}
