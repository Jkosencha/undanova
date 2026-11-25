"use client";

/**
 * Hover preview for the "What We Do" list: the hovered service's photo follows
 * the cursor. Wraps the list (rows mark themselves with `data-service`).
 * Desktop with a mouse only; on touch screens the images are never loaded.
 * Decorative: the list itself carries all the content.
 */
import { AnimatePresence, useMotionValue, useSpring } from "motion/react";
import * as m from "motion/react-m";
import Image from "next/image";
import { type PointerEvent, type ReactNode, useState } from "react";
import { photos, photoTone, serviceImage } from "@/components/photo-background";

const W = 300;
const H = 225;

export function ServicePreview({ children }: { children: ReactNode }) {
  const [slug, setSlug] = useState<string | null>(null);
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const spring = { stiffness: 260, damping: 28, mass: 0.6 };
  const x = useSpring(mx, spring);
  const y = useSpring(my, spring);

  function onMove(e: PointerEvent<HTMLDivElement>) {
    if (e.pointerType !== "mouse") return;
    const box = e.currentTarget.getBoundingClientRect();
    // Beside the cursor, kept within the list so it never widens the page.
    const px = Math.min(e.clientX - box.left + 28, box.width - W);
    const py = e.clientY - box.top - H / 2;
    mx.set(px);
    my.set(py);
    const row = (e.target as HTMLElement).closest<HTMLElement>("[data-service]");
    const next = row?.dataset.service ?? null;
    if (!slug && next) {
      // Appear at the cursor rather than gliding in from the corner.
      x.jump(px);
      y.jump(py);
    }
    setSlug(next);
  }

  return (
    <div className="relative" onPointerMove={onMove} onPointerLeave={() => setSlug(null)}>
      {children}
      <m.div
        aria-hidden
        style={{ x, y, width: W, height: H }}
        className="pointer-events-none absolute left-0 top-0 z-20 hidden lg:pointer-fine:block"
      >
        <AnimatePresence>
          {slug && serviceImage[slug] && (
            <m.div
              key={slug}
              className="absolute inset-0 overflow-hidden shadow-xl shadow-night/30"
              initial={{ opacity: 0, scale: 0.92 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.96 }}
              transition={{ duration: 0.3, ease: [0.2, 0.7, 0.2, 1] }}
            >
              <Image
                src={photos[serviceImage[slug].photo]}
                alt=""
                fill
                sizes={`${W}px`}
                quality={60}
                placeholder="blur"
                className={photoTone}
              />
            </m.div>
          )}
        </AnimatePresence>
      </m.div>
    </div>
  );
}
