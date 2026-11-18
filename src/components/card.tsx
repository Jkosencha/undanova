import Link from "next/link";
import type { ReactNode } from "react";

type CardProps = {
  children: ReactNode;
  /** When set, the whole card becomes a link that lifts on hover. */
  href?: string;
  /** "dark" is a glass card for navy sections. */
  tone?: "light" | "dark";
  className?: string;
};

const tones = {
  light: { base: "border-slate/25 bg-white", hover: "hover:border-navy/40" },
  dark: { base: "border-white/10 bg-white/[0.04]", hover: "hover:border-plum/60 hover:bg-white/[0.08]" },
};

export function Card({ children, href, tone = "light", className = "" }: CardProps) {
  const base = ` border ${tones[tone].base}`;
  if (href) {
    return (
      // No viewport prefetch: a page of cards would otherwise download every linked
      // page up front, costing mobile data and main-thread time. Pages still load on tap.
      <Link
        href={href}
        prefetch={false}
        className={`group block transition-all duration-300 hover:-translate-y-1 ${base} ${tones[tone].hover} ${className}`}
      >
        {children}
      </Link>
    );
  }
  return <div className={`${base} ${className}`}>{children}</div>;
}
