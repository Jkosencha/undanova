/**
 * Thin decorative wave taken from the logo's motif. Use sparingly (CLAUDE.md §3).
 * "white" is for navy sections, "wave" for light ones.
 */
export function WaveDivider({ color = "white", className = "" }: { color?: "white" | "wave"; className?: string }) {
  const stroke = color === "white" ? "stroke-white/20" : "stroke-wave/50";
  const dot = color === "white" ? "fill-wave" : "fill-wave/70";
  return (
    <svg
      viewBox="0 0 1200 80"
      aria-hidden
      focusable={false}
      className={`block h-auto w-full ${className}`}
    >
      <path
        d="M0 70 C 180 0, 360 0, 540 40 S 900 90, 1110 22"
        fill="none"
        strokeWidth={2}
        vectorEffect="non-scaling-stroke"
        className={stroke}
      />
      <circle cx="1150" cy="12" r="6" className={dot} />
    </svg>
  );
}
