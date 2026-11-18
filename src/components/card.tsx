import Link from "next/link";
import type { ReactNode } from "react";

type CardProps = {
  children: ReactNode;
  /** When set, the whole card becomes a link. */
  href?: string;
  className?: string;
};

const base = "block rounded-xl border border-slate/25 bg-white p-6";

export function Card({ children, href, className = "" }: CardProps) {
  if (href) {
    return (
      // No viewport prefetch: a page of cards would otherwise download every linked
      // page up front, costing mobile data and main-thread time. Pages still load on tap.
      <Link href={href} prefetch={false} className={`${base} transition-colors hover:border-navy/40 ${className}`}>
        {children}
      </Link>
    );
  }
  return <div className={`${base} ${className}`}>{children}</div>;
}
