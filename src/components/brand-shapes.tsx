/**
 * Decorative shapes built from the logo's wave. All are aria-hidden.
 */
import type { ReactNode } from "react";

// One wave period is 1200 units; the path repeats twice so it can drift by -50% and loop seamlessly.
const RIBBON = "M0 180 C200 60 400 60 600 150 S1000 300 1200 180 S1600 60 1800 150 S2200 300 2400 180";

/** Glowing wave ribbons that drift slowly across a navy section. */
export function HeroWaves({ className = "" }: { className?: string }) {
  return (
    <div aria-hidden className={`pointer-events-none absolute inset-x-0 overflow-hidden ${className}`}>
      <svg viewBox="0 0 2400 300" preserveAspectRatio="none" className="h-full w-[200%] animate-drift-slow">
        <path d={RIBBON} fill="none" className="stroke-wave/25" strokeWidth={26} vectorEffect="non-scaling-stroke" />
        <path d={RIBBON} fill="none" className="stroke-wave" strokeWidth={2.5} vectorEffect="non-scaling-stroke" />
      </svg>
      <svg
        viewBox="0 0 2400 300"
        preserveAspectRatio="none"
        className="absolute inset-0 h-full w-[200%] translate-y-6 animate-drift opacity-60"
      >
        <path d={RIBBON} fill="none" className="stroke-white/30" strokeWidth={1.5} vectorEffect="non-scaling-stroke" />
      </svg>
    </div>
  );
}

type Fill = "paper" | "white" | "navy";
const fills: Record<Fill, string> = { paper: "fill-paper", white: "fill-white", navy: "fill-navy" };

/**
 * Curved wave edge at the bottom of a section, filled with the next section's colour.
 * Place it as the last child of a `relative` section.
 */
export function WaveEdge({ fill, flip = false, className = "" }: { fill: Fill; flip?: boolean; className?: string }) {
  return (
    <svg
      aria-hidden
      viewBox="0 0 1440 100"
      preserveAspectRatio="none"
      className={`pointer-events-none absolute inset-x-0 bottom-[-1px] block h-10 w-full md:h-20 ${flip ? "-scale-x-100" : ""} ${className}`}
    >
      <path d="M0 64 C 260 6 520 4 760 44 S 1200 108 1440 30 V 100 H 0 Z" className={fills[fill]} />
    </svg>
  );
}

/** Small pill label above headings. */
export function Eyebrow({ children, tone = "light" }: { children: ReactNode; tone?: "light" | "dark" }) {
  const styles =
    tone === "dark" ? "border-white/20 bg-white/5 text-white/90" : "border-navy/15 bg-white text-navy";
  return (
    <span className={`inline-flex items-center gap-2 rounded-full border px-3.5 py-1.5 text-sm font-medium ${styles}`}>
      <span aria-hidden className="size-1.5 rounded-full bg-wave" />
      {children}
    </span>
  );
}

/** Soft blue glow blob for navy backgrounds. */
export function Glow({ className = "" }: { className?: string }) {
  return <div aria-hidden className={`pointer-events-none absolute glow-wave animate-glow ${className}`} />;
}
