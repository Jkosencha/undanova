"use client";

/**
 * The hero name rising up from behind the laptop. Transform only (always
 * visible above the lid); off under reduced motion. On a fresh load it waits
 * for the splash screen to lift first.
 */
import * as m from "motion/react-m";
import { useState } from "react";

// The splash lifts at about 1.05s and is clear by 1.65s.
const AFTER_SPLASH = 1.25;

export function RiseName({ text }: { text: string }) {
  // Read once in the browser; only the timing depends on it, not the markup.
  // performance.now() is the time since the page loaded, so arriving here
  // later (after the splash has gone) means no wait.
  const [delay] = useState(() => {
    if (typeof window === "undefined") return 0;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return 0; // no splash then
    return Math.max(0, AFTER_SPLASH - performance.now() / 1000);
  });

  return (
    <m.span
      className="inline-block"
      initial={{ y: "28%" }}
      animate={{ y: 0 }}
      transition={{ duration: 1.3, delay, ease: [0.2, 0.7, 0.2, 1] }}
    >
      {text}
    </m.span>
  );
}
