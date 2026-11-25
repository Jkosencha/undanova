"use client";

/**
 * The hero name rising up from behind the laptop. Transform only (always
 * visible above the lid); off under reduced motion.
 */
import * as m from "motion/react-m";

export function RiseName({ text }: { text: string }) {
  return (
    <m.span
      className="inline-block"
      initial={{ y: "28%" }}
      animate={{ y: 0 }}
      transition={{ duration: 1.3, ease: [0.2, 0.7, 0.2, 1] }}
    >
      {text}
    </m.span>
  );
}
