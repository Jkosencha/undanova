/**
 * Abstract, technology-inspired visuals drawn in SVG: no device mock-ups, no
 * stock photos, nothing to download. All decorative (aria-hidden).
 * Flowing-line animations live in globals.css (.flow) and stop on touch devices
 * and under reduced motion.
 */
import { useId } from "react";

const font = { fontFamily: "var(--font-display), system-ui, sans-serif" };

/** Clean ids from useId for SVG references. */
function useSvgId(prefix: string) {
  return `${prefix}${useId().replace(/[^a-zA-Z0-9_-]/g, "")}`;
}

const NODES = [
  { label: "Website", x: 30, y: 60, path: "M250 205 V80 H170" },
  { label: "Mobile", x: 430, y: 60, path: "M350 205 V80 H430" },
  { label: "Payments", x: 10, y: 220, path: "M240 240 H150" },
  { label: "CRM", x: 450, y: 220, path: "M360 240 H450" },
  { label: "Reports", x: 30, y: 380, path: "M250 275 V400 H170" },
  { label: "Automation", x: 430, y: 380, path: "M350 275 V400 H430" },
];

/** Hero: a central hub connected to the systems a business runs on. */
export function SystemDiagram({ className = "" }: { className?: string }) {
  const grid = useSvgId("grid");
  return (
    <svg aria-hidden viewBox="0 0 600 480" className={`h-auto w-full ${className}`}>
      <defs>
        <pattern id={grid} width="30" height="30" patternUnits="userSpaceOnUse">
          <path d="M30 0H0V30" fill="none" className="stroke-mist" strokeWidth="1" />
        </pattern>
      </defs>
      <rect width="600" height="480" fill={`url(#${grid})`} />

      {/* Connectors, with data flowing along them */}
      {NODES.map((n) => (
        <g key={n.label}>
          <path d={n.path} fill="none" className="stroke-navy/30" strokeWidth="1.5" />
          <path d={n.path} fill="none" className="flow stroke-plum" strokeWidth="2.5" strokeLinecap="square" />
        </g>
      ))}

      {/* Nodes */}
      {NODES.map((n, i) => (
        <g key={n.label} className="node">
          <rect x={n.x} y={n.y} width="140" height="40" className="fill-white stroke-navy" strokeWidth="1.5" />
          <rect x={n.x} y={n.y} width="6" height="40" className={i % 2 ? "fill-plum" : "fill-navy"} />
          <text
            x={n.x + 76}
            y={n.y + 25}
            textAnchor="middle"
            className="fill-navy"
            style={{ ...font, fontSize: 15, letterSpacing: "0.12em" }}
          >
            {n.label.toUpperCase()}
          </text>
        </g>
      ))}

      {/* Hub */}
      <rect x="230" y="195" width="140" height="90" className="fill-navy" />
      <rect x="222" y="187" width="156" height="106" fill="none" className="stroke-navy/25" strokeWidth="1" />
      <path d="M262 252c14-24 30-26 41-11 9 12 22 11 36-8-13 22-30 27-41 13-9-12-22-10-36 6z" className="fill-white" />
      <circle cx="334" cy="226" r="4" className="fill-lilac" />
      <text
        x="300"
        y="276"
        textAnchor="middle"
        className="fill-white"
        style={{ ...font, fontSize: 11, letterSpacing: "0.3em" }}
      >
        UNDANOVA
      </text>
    </svg>
  );
}

/** Three stacked planes: design, build, evolve. Used beside "why" and "who we are" copy. */
export function LayeredPlanes({ className = "" }: { className?: string }) {
  const layers = [
    { label: "Evolve", y: 40, fill: "fill-white", stroke: "stroke-navy" },
    { label: "Build", y: 150, fill: "fill-lilac/60", stroke: "stroke-navy" },
    { label: "Design", y: 260, fill: "fill-navy", stroke: "stroke-navy" },
  ];
  // An isometric-style plane: a rhombus 300 wide, 120 tall.
  const plane = (y: number) => `M250 ${y} L400 ${y + 60} L250 ${y + 120} L100 ${y + 60} Z`;
  return (
    <svg aria-hidden viewBox="0 0 600 420" className={`h-auto w-full ${className}`}>
      {/* Vertical guides */}
      <path d="M100 100V320M400 100V320M250 160V380" className="stroke-navy/20" strokeWidth="1" strokeDasharray="4 6" />
      {[...layers].reverse().map((l) => (
        <g key={l.label} className="plane">
          <path d={plane(l.y)} className={`${l.fill} ${l.stroke}`} strokeWidth="1.5" />
          <path d={`M400 ${l.y + 60} H470`} className="stroke-navy/40" strokeWidth="1" />
          <text x="478" y={l.y + 64} className="fill-navy" style={{ ...font, fontSize: 13, letterSpacing: "0.25em" }}>
            {l.label.toUpperCase()}
          </text>
        </g>
      ))}
      <rect x="244" y="94" width="12" height="12" className="fill-plum" transform="rotate(45 250 100)" />
    </svg>
  );
}

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
