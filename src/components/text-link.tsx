import Link from "next/link";
import type { ReactNode } from "react";

/**
 * Inline text link: navy text with a wave underline. `wave` is too light for
 * small text (contrast below AA), so it's only used for the underline.
 */
export function TextLink({ href, children, className = "" }: { href: string; children: ReactNode; className?: string }) {
  return (
    <Link
      href={href}
      className={`inline-flex min-h-11 items-center gap-1 font-medium text-navy underline decoration-wave decoration-2 underline-offset-4 hover:decoration-navy ${className}`}
    >
      {children}
    </Link>
  );
}
