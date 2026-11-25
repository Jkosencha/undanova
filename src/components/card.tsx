import Link from "next/link";
import type { ReactNode } from "react";

type CardProps = {
  children: ReactNode;
  /** When set, the whole card becomes a link. */
  href?: string;
  className?: string;
};

const base = "border border-mist bg-white";

/** Square, hairline-bordered card. Linked cards darken their border on hover. */
export function Card({ children, href, className = "" }: CardProps) {
  if (href) {
    return (
      // No viewport prefetch: a page of cards would otherwise download every linked
      // page up front, costing mobile data. Pages still load on tap.
      <Link
        href={href}
        prefetch={false}
        className={`group block transition-colors duration-300 hover:border-navy/40 ${base} ${className}`}
      >
        {children}
      </Link>
    );
  }
  return <div className={`${base} ${className}`}>{children}</div>;
}
