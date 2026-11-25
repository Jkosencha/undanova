/**
 * Home hero: "UndaNova" set huge behind a laptop. Three layers share one frame
 * with the photo's exact aspect ratio (so they line up at every width): the
 * photo under a teal-blue wash, the name, then a cut-out of the laptop on top.
 * The frame is cropped top and bottom when the screen is short, using the same
 * maths as `object-position` (top: P% with translateY(-P%)).
 * The laptop's screen shows the message and actions (see LaptopScreen).
 * Photo: Dell on Unsplash (free licence); the cut-out is traced from it.
 */
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/button";
import { Container } from "@/components/section";
import { RiseName } from "@/components/rise-name";
import heroLaptop from "@/assets/photos/hero-laptop.jpg";
import heroLaptopCutout from "@/assets/photos/hero-laptop-cutout.png";
import { site } from "@/lib/site";

export function HomeHero() {
  return (
    <section aria-labelledby="hero-title" className="bg-navy text-white">
      <div className="relative isolate h-[min(66.75vw,calc(100svh-5rem))] overflow-clip">
        <div className="absolute inset-x-0 top-[55%] aspect-[2000/1335] -translate-y-[55%] [container-type:inline-size]">
          <Image
            src={heroLaptop}
            alt=""
            fill
            priority
            sizes="100vw"
            quality={60}
            placeholder="blur"
            className="object-cover"
          />
          <div aria-hidden className="absolute inset-0 bg-gradient-to-b from-navy/70 via-navy/45 to-navy/30" />
          {/* The name: its lower part passes behind the laptop's lid (top edge at 46.7%). */}
          <h1
            id="hero-title"
            className="absolute inset-x-0 bottom-[45.5%] text-center font-heading text-[19cqw] font-normal leading-[0.8] tracking-[-0.03em]"
          >
            <RiseName text={site.name} />
            <span className="sr-only"> {site.descriptor}</span>
          </h1>
          <Image
            src={heroLaptopCutout}
            alt="A laptop on a terrace table showing the UndaNova website"
            fill
            loading="eager"
            sizes="100vw"
            quality={60}
            placeholder="blur"
            className="pointer-events-none object-cover"
          />
          <LaptopScreen />
        </div>
      </div>

      {/* Message and actions, readable size (on large screens they're on the laptop instead) */}
      <Container className="grid gap-8 py-12 md:py-16 lg:hidden">
        <div>
          <p className="caps-sm text-white/80">
            {site.name} {site.descriptor}
          </p>
          <p className="caps mt-5 font-heading text-3xl leading-snug md:text-4xl">We build what&apos;s next.</p>
        </div>
        <div>
          <p className="text-lg text-white/85">
            We design and develop digital solutions that help businesses and organizations work smarter, operate better
            and move forward with technology.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button href="/contact" tone="dark">
              Start a Project
            </Button>
            <Button href="/services" tone="dark" variant="secondary">
              Explore Our Services
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}

/*
 * The laptop's screen, in the photo's own pixels (2400 x 1602). The glass is
 * filled with the brand gradient, then the content is laid on it: placed at
 * the top-left corner and skewed so its edges follow the screen's top and left
 * edges (the right edge leans slightly more in the photo, so content keeps
 * clear of it).
 */
const glass = { tl: [820, 781], tr: [1584, 764], br: [1678, 1262], bl: [893, 1326] } as const;
const PW = 2400;
const PH = 1602;
const [tlx, tly] = glass.tl;
const ux = glass.tr[0] - tlx; // top edge
const uy = glass.tr[1] - tly;
const vx = glass.bl[0] - tlx; // left edge
const vy = glass.bl[1] - tly;
const screenBox = {
  left: `${(tlx / PW) * 100}%`,
  top: `${(tly / PH) * 100}%`,
  width: `${(ux / PW) * 100}%`,
  height: `${(vy / PH) * 100}%`,
  transform: `matrix(1, ${uy / ux}, ${vx / vy}, 1, 0, 0)`,
  transformOrigin: "0 0",
};
// Slightly larger than the glass so no wallpaper shows at the edges. Padding
// inside the screen uses cqw (frame width): % padding would be % of the frame.
const glassPoints = "816,778 1587,760 1683,1269 888,1335";

function LaptopScreen() {
  return (
    <>
      <svg
        aria-hidden
        viewBox={`0 0 ${PW} ${PH}`}
        preserveAspectRatio="none"
        className="pointer-events-none absolute inset-0 size-full"
      >
        <defs>
          <linearGradient id="hero-glass" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stopColor="#153a4c" />
            <stop offset="1" stopColor="#0b2430" />
          </linearGradient>
        </defs>
        <polygon points={glassPoints} fill="url(#hero-glass)" />
      </svg>

      {/* Large screens: the real message and actions */}
      <div
        style={screenBox}
        className="absolute hidden flex-col justify-center pb-[2.6cqw] pl-[2.6cqw] pr-[4.5cqw] pt-[1.6cqw] lg:flex"
      >
        <p className="caps-sm text-[max(9px,0.6cqw)] text-white/80">
          {site.name} {site.descriptor}
        </p>
        <p className="caps mt-[4%] font-heading text-[max(18px,1.9cqw)] leading-snug">We build what&apos;s next.</p>
        <p className="mt-[4%] text-[max(11px,0.82cqw)] leading-relaxed text-white/85">
          We design and develop digital solutions that help businesses and organizations work smarter, operate better
          and move forward with technology.
        </p>
        <div className="mt-[6%] flex gap-[3%]">
          <Link href="/contact" className={screenButton.primary}>
            Start a Project
          </Link>
          <Link href="/services" className={screenButton.secondary}>
            Explore Our Services
          </Link>
        </div>
      </div>

      {/* Smaller screens: the same look, as decoration (the readable version is below the photo) */}
      <div
        aria-hidden
        style={screenBox}
        className="pointer-events-none absolute flex flex-col justify-center pb-[3cqw] pl-[2.8cqw] pr-[4.5cqw] lg:hidden"
      >
        <span className="caps-sm text-[0.75cqw] text-white/80">
          {site.name} {site.descriptor}
        </span>
        <span className="caps mt-[4%] font-heading text-[2.3cqw] leading-snug">We build what&apos;s next.</span>
      </div>
    </>
  );
}

const screenBase =
  "inline-flex items-center justify-center whitespace-nowrap border px-[1.1em] py-[0.9em] font-heading text-[max(9px,0.58cqw)] font-medium uppercase leading-none tracking-[0.2em] transition-colors duration-300";
const screenButton = {
  primary: `${screenBase} border-white bg-white text-navy hover:bg-transparent hover:text-white`,
  secondary: `${screenBase} border-white/70 text-white hover:bg-white hover:text-navy`,
};
