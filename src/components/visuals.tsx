/**
 * Geometric project cover art, drawn in SVG, shown until a project has real
 * screenshots (a stock photo there could be mistaken for the client's product).
 * Decorative (aria-hidden).
 */
export type CoverKind = "website" | "shop" | "dashboard";

/** Geometric cover art for a project, until real screenshots are added. */
export function ProjectCover({ kind, className = "" }: { kind: CoverKind; className?: string }) {
  return (
    <div aria-hidden className={`overflow-hidden bg-paper ${className}`}>
      <svg viewBox="0 0 400 250" preserveAspectRatio="xMidYMid slice" className="h-full w-full">
        {kind === "shop" && (
          // Concentric rings: a marketplace drawing people in
          <g>
            {[110, 85, 60, 35].map((r, i) => (
              <circle
                key={r}
                cx="250"
                cy="125"
                r={r}
                className={`stroke-navy/40 ${i === 3 ? "fill-navy" : i === 1 ? "fill-lilac/50" : "fill-none"}`}
              />
            ))}
            <circle cx="250" cy="125" r="110" className="fill-none stroke-navy" strokeWidth="1.5" />
            <rect x="60" y="60" width="70" height="70" className="fill-plum" />
            <rect x="75" y="140" width="40" height="40" className="fill-none stroke-navy" strokeWidth="1.5" />
          </g>
        )}
        {kind === "dashboard" && (
          // Rising bars: records turning into reports
          <g>
            {[50, 80, 65, 110, 95, 140, 125].map((h, i) => (
              <rect
                key={i}
                x={60 + i * 42}
                y={200 - h}
                width="26"
                height={h}
                className={i === 5 ? "fill-plum" : i % 2 ? "fill-navy" : "fill-navy/70"}
              />
            ))}
            <path d="M40 200H370" className="stroke-navy" strokeWidth="1.5" />
            <path
              d="M73 140 L115 112 L157 128 L199 82 L241 98 L283 52 L325 70"
              fill="none"
              className="stroke-navy/40"
              strokeWidth="1.5"
              strokeDasharray="4 5"
            />
          </g>
        )}
        {kind === "website" && (
          // A grid of blocks: pages and content coming together
          <g>
            {Array.from({ length: 24 }, (_, i) => {
              const col = i % 8;
              const row = Math.floor(i / 8);
              const filled = [1, 2, 10, 13, 20, 21, 22].includes(i);
              return (
                <rect
                  key={i}
                  x={48 + col * 40}
                  y={50 + row * 52}
                  width="30"
                  height="40"
                  className={filled ? (i === 13 ? "fill-plum" : "fill-navy") : "fill-none stroke-navy/30"}
                  strokeWidth="1"
                />
              );
            })}
          </g>
        )}
      </svg>
    </div>
  );
}
