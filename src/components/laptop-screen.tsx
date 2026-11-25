"use client";

/**
 * What's on the hero laptop's screen: a small UndaNova page, laid out at a
 * fixed 1280 x 800 (the screen's 16:10) and projected onto the glass in true
 * perspective, so it sits on the screen like a real display at any size.
 *
 * The four glass corners are measured in the photo's own pixels (2400 x 1602).
 * The projection needs the frame's width in pixels, so it's measured here and
 * kept up to date as the window resizes. Until then the content stays hidden
 * (the glass is already filled, so nothing flashes).
 */
import Link from "next/link";
import { useLayoutEffect, useRef, useState } from "react";
import { site } from "@/lib/site";

const PHOTO_W = 2400;
const PHOTO_H = 1602;
const PAGE_W = 1280;
const PAGE_H = 800;

// Glass corners in photo pixels: top-left, top-right, bottom-right, bottom-left.
const glass = [
  [820, 781],
  [1584, 764],
  [1678, 1262],
  [893, 1326],
] as const;
// The fill sits slightly outside the glass so no wallpaper shows at the edges.
const fillPoints = "816,778 1587,760 1683,1269 888,1335";

/** CSS matrix3d that maps a PAGE_W x PAGE_H box onto the glass, at `scale` px per photo px. */
function projection(scale: number) {
  const [[x0, y0], [x1, y1], [x2, y2], [x3, y3]] = glass.map(([x, y]) => [x * scale, y * scale]);
  // Unit square to quadrilateral (Heckbert).
  const dx1 = x1 - x2;
  const dx2 = x3 - x2;
  const dx3 = x0 - x1 + x2 - x3;
  const dy1 = y1 - y2;
  const dy2 = y3 - y2;
  const dy3 = y0 - y1 + y2 - y3;
  const den = dx1 * dy2 - dx2 * dy1;
  const g = (dx3 * dy2 - dx2 * dy3) / den;
  const h = (dx1 * dy3 - dx3 * dy1) / den;
  const a = x1 - x0 + g * x1;
  const b = x3 - x0 + h * x3;
  const d = y1 - y0 + g * y1;
  const e = y3 - y0 + h * y3;
  // Scale from the unit square to the page size; CSS lists the matrix by columns.
  const m = [a / PAGE_W, d / PAGE_W, 0, g / PAGE_W, b / PAGE_H, e / PAGE_H, 0, h / PAGE_H, 0, 0, 1, 0, x0, y0, 0, 1];
  return `matrix3d(${m.join(",")})`;
}

// 2px borders: thin lines break up when the page is drawn at an angle.
const button =
  "inline-flex items-center justify-center border-2 px-10 py-6 font-heading text-[19px] font-medium uppercase leading-none tracking-[0.22em] transition-colors duration-300";

export function LaptopScreen() {
  const ref = useRef<HTMLDivElement>(null);
  const [transform, setTransform] = useState<string | null>(null);
  // Below 1024px the readable copy is below the photo, so the screen is
  // decoration: hidden from screen readers and keyboard focus.
  const [decorative, setDecorative] = useState(true);

  useLayoutEffect(() => {
    const frame = ref.current?.parentElement;
    if (!frame) return;
    const update = () => setTransform(projection(frame.clientWidth / PHOTO_W));
    update();
    const observer = new ResizeObserver(update);
    observer.observe(frame);
    const large = window.matchMedia("(min-width: 1024px)");
    const onChange = () => setDecorative(!large.matches);
    onChange();
    large.addEventListener("change", onChange);
    return () => {
      observer.disconnect();
      large.removeEventListener("change", onChange);
    };
  }, []);

  return (
    <div ref={ref} className="pointer-events-none absolute inset-0">
      <svg
        aria-hidden
        viewBox={`0 0 ${PHOTO_W} ${PHOTO_H}`}
        preserveAspectRatio="none"
        className="absolute inset-0 size-full"
      >
        <defs>
          <linearGradient id="hero-glass" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stopColor="#153a4c" />
            <stop offset="1" stopColor="#0b2430" />
          </linearGradient>
        </defs>
        <polygon points={fillPoints} fill="url(#hero-glass)" />
      </svg>

      <div
        aria-hidden={decorative || undefined}
        inert={decorative}
        style={{
          width: PAGE_W,
          height: PAGE_H,
          transformOrigin: "0 0",
          transform: transform ?? undefined,
          visibility: transform ? "visible" : "hidden",
        }}
        className="absolute left-0 top-0 flex flex-col px-[88px] pb-[84px] pt-[56px] text-white"
      >
        {/* A simple site bar, as decoration (the real navigation is in the header) */}
        <div aria-hidden className="flex items-center justify-between border-b-2 border-white/15 pb-7">
          <span className="font-heading text-[30px] tracking-tight">
            Unda<span className="font-semibold">Nova</span>
            <span className="text-steel">.</span>
          </span>
          <span className="caps-sm flex gap-10 text-[15px] text-white/70">
            <span>About</span>
            <span>Services</span>
            <span>Our Work</span>
            <span>Contact</span>
          </span>
        </div>

        {/* The message and actions */}
        <div className="flex flex-1 flex-col justify-center">
          <p className="caps-sm text-[19px] text-white/80">
            {site.name} {site.descriptor}
          </p>
          <p className="caps mt-6 font-heading text-[74px] leading-[1.15]">We build what&apos;s next.</p>
          <p className="mt-7 max-w-[900px] text-[30px] leading-relaxed text-white/85">
            We design and develop digital solutions that help businesses and organizations work smarter, operate better
            and move forward with technology.
          </p>
          <div className="pointer-events-auto mt-10 flex gap-5">
            <Link
              href="/contact"
              className={`${button} border-white bg-white text-navy hover:bg-transparent hover:text-white`}
            >
              Start a Project
            </Link>
            <Link href="/services" className={`${button} border-white/70 text-white hover:bg-white hover:text-navy`}>
              Explore Our Services
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
