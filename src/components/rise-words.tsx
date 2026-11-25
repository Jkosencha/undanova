"use client";

/**
 * Words that rise into place one after another. Transform only: the text is
 * fully visible from the first paint (good for contrast and loading speed),
 * it just settles upwards. Off under reduced motion.
 */
import * as m from "motion/react-m";

export function RiseWords({ text, delay = 0 }: { text: string; delay?: number }) {
  const words = text.split(" ");
  return words.map((word, i) => (
    <span key={i}>
      <m.span
        className="inline-block"
        initial={{ y: "0.45em" }}
        animate={{ y: 0 }}
        transition={{ duration: 0.9, delay: delay + i * 0.09, ease: [0.2, 0.7, 0.2, 1] }}
      >
        {word}
      </m.span>
      {i < words.length - 1 && " "}
    </span>
  ));
}
