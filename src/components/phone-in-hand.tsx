import { type ReactNode, useId } from "react";
import { PhoneFrame } from "@/components/mockups";

/**
 * A phone held in a stylised hand (lilac-to-plum, like the mood board's satin),
 * for the Snapview-style heroes. Decorative: the wrapper is aria-hidden.
 * Fingers sit behind the phone; the palm and thumb sit in front of it.
 */
export function PhoneInHand({ children, className = "" }: { children: ReactNode; className?: string }) {
  // Strip characters useId may include that break url(#...) references.
  const id = `hand${useId().replace(/[^a-zA-Z0-9_-]/g, "")}`;
  const back = `${id}-back`;
  const front = `${id}-front`;
  return (
    <div aria-hidden className={`relative aspect-[300/460] w-full max-w-[320px] ${className}`}>
      <div className="absolute inset-0 rotate-[-9deg]">
        {/* Fingers, behind the phone */}
        <svg viewBox="0 0 300 460" className="absolute inset-0 h-full w-full">
          <defs>
            <linearGradient id={back} x1="0" y1="0" x2="1" y2="1">
              <stop offset="0" className="[stop-color:var(--color-lilac)]" />
              <stop offset="1" className="[stop-color:var(--color-plum)]" />
            </linearGradient>
          </defs>
          {[205, 240, 275, 310].map((y, i) => (
            <rect key={y} x={206} y={y} width={48 - i * 4} height={30} rx={15} fill={`url(#${back})`} />
          ))}
        </svg>

        {/* The phone */}
        <div className="absolute left-[22%] top-[3%] w-[56%]">
          <PhoneFrame className="w-full">{children}</PhoneFrame>
        </div>

        {/* Palm and thumb, in front of the phone */}
        <svg viewBox="0 0 300 460" className="absolute inset-0 h-full w-full drop-shadow-[0_-6px_18px_var(--color-night)]">
          <defs>
            <linearGradient id={front} x1="0" y1="0" x2="0.4" y2="1">
              <stop offset="0" className="[stop-color:var(--color-lilac)]" />
              <stop offset="0.55" className="[stop-color:var(--color-plum)]" />
              <stop offset="1" className="[stop-color:var(--color-plum)]" stopOpacity="0.85" />
            </linearGradient>
          </defs>
          <path
            d="M118 470 C 112 432, 120 404, 140 386 L 214 352 C 246 338, 286 344, 300 366 L 300 470 Z"
            fill={`url(#${front})`}
          />
          <path
            d="M74 300 C 60 312, 60 338, 72 356 L 132 438 C 146 456, 178 448, 176 422 L 150 340 C 138 304, 98 282, 74 300 Z"
            fill={`url(#${front})`}
          />
          <path d="M92 318 C 104 332, 118 352, 128 372" fill="none" className="stroke-white/30" strokeWidth={2} strokeLinecap="round" />
        </svg>
      </div>
    </div>
  );
}
