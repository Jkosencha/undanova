import Link from "next/link";
import type { ReactNode } from "react";

// Pointy-top hexagon.
const HEX = "[clip-path:polygon(50%_0,100%_25%,100%_75%,50%_100%,0_75%,0_25%)]";

type HexTileProps = {
  href: string;
  title: string;
  icon: ReactNode;
  /** Alternate background for a honeycomb pattern. */
  variant?: "blue" | "plum";
  className?: string;
};

/**
 * Hexagon link tile (from the Digital Backbone reference). The link itself stays
 * rectangular so its focus ring isn't clipped; only the visual is hexagonal.
 */
export function HexTile({ href, title, icon, variant = "blue", className = "" }: HexTileProps) {
  const bg = variant === "plum" ? "bg-satin-plum" : "bg-satin";
  return (
    <Link href={href} prefetch={false} className={`group block rounded-2xl ${className}`}>
      <span
        className={`relative flex aspect-[1/1.1547] w-full flex-col items-center justify-center gap-3 px-6 text-center text-white transition-transform duration-300 group-hover:scale-[1.04] ${HEX} ${bg}`}
      >
        <span className="relative inline-flex size-12 items-center justify-center rounded-full border border-white/40 sm:size-14">
          {icon}
        </span>
        <span className="relative font-heading text-base font-semibold leading-tight sm:text-xl">{title}</span>
        <span className="relative hidden whitespace-nowrap rounded-full border border-white/60 px-3 py-1 text-xs font-semibold uppercase tracking-wider transition-colors group-hover:bg-white group-hover:text-navy sm:inline-block">
          Learn more
        </span>
      </span>
    </Link>
  );
}
