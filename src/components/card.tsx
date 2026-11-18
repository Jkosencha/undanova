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
      <Link href={href} className={`${base} transition-colors hover:border-navy/40 ${className}`}>
        {children}
      </Link>
    );
  }
  return <div className={`${base} ${className}`}>{children}</div>;
}
