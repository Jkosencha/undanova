"use client";

/**
 * Motion setup: loads only the DOM animation features (keeps the bundle small;
 * `strict` stops the full `motion` component being used by mistake) and follows
 * the visitor's reduced-motion setting, which turns transform animations off.
 */
import { domAnimation, LazyMotion, MotionConfig } from "motion/react";
import type { ReactNode } from "react";

export function MotionProvider({ children }: { children: ReactNode }) {
  return (
    <LazyMotion features={domAnimation} strict>
      <MotionConfig reducedMotion="user">{children}</MotionConfig>
    </LazyMotion>
  );
}
