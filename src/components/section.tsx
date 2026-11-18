import type { ReactNode } from "react";
import { Glow, WaveEdge } from "@/components/brand-shapes";

type Tone = "paper" | "white" | "navy";

const tones: Record<Tone, string> = {
  paper: "bg-paper text-ink",
  white: "bg-white text-ink",
  navy: "bg-navy text-white",
};

/** Centres content at the site's max width with mobile-first side padding. */
export function Container({ children, className = "" }: { children: ReactNode; className?: string }) {
  return <div className={`mx-auto w-full max-w-[1200px] px-4 sm:px-6 ${className}`}>{children}</div>;
}

type SectionHeadingProps = {
  id: string;
  title: ReactNode;
  intro?: string;
  eyebrow?: string;
  /** Use "dark" inside navy sections. */
  tone?: "light" | "dark";
  align?: "left" | "center";
  /** Short plum line under the title. */
  divider?: boolean;
};

/** Standard section heading: optional pill label, h2 and intro line. */
export function SectionHeading({
  id,
  title,
  intro,
  eyebrow,
  tone = "light",
  align = "left",
  divider = false,
}: SectionHeadingProps) {
  const dark = tone === "dark";
  return (
    <div className={`max-w-2xl ${align === "center" ? "mx-auto text-center" : ""}`}>
      {eyebrow && (
        <p
          className={`mb-4 text-sm font-semibold uppercase tracking-[0.18em] ${dark ? "text-white/70" : "text-ink/60"}`}
        >
          {eyebrow}
        </p>
      )}
      <h2 id={id} className={`text-[34px] md:text-5xl ${dark ? "text-white" : "text-navy"}`}>
        {title}
      </h2>
      {divider && (
        <span
          aria-hidden
          className={`mt-5 block h-0.5 w-14 rounded-full bg-plum ${align === "center" ? "mx-auto" : ""}`}
        />
      )}
      {intro && <p className={`mt-4 text-lg md:text-xl ${dark ? "text-white/80" : "text-ink/70"}`}>{intro}</p>}
    </div>
  );
}

type SectionProps = {
  children: ReactNode;
  tone?: Tone;
  id?: string;
  className?: string;
  /** Curved wave edge into the next section, filled with its colour. */
  edge?: Tone;
  /** Flip the wave edge horizontally, for variety between sections. */
  flipEdge?: boolean;
  /** Navy only: dot grid and a soft glow. */
  textured?: boolean;
  "aria-labelledby"?: string;
  "aria-label"?: string;
};

/**
 * A full-width page section with standard vertical padding (64px mobile / 96px desktop),
 * plus extra bottom room when it ends in a wave edge.
 */
export function Section({
  children,
  tone = "paper",
  id,
  className = "",
  edge,
  flipEdge = false,
  textured = false,
  ...rest
}: SectionProps) {
  return (
    <section
      id={id}
      className={`relative isolate overflow-hidden pt-16 md:pt-24 ${edge ? "pb-28 md:pb-40" : "pb-16 md:pb-24"} ${tones[tone]} ${className}`}
      {...rest}
    >
      {textured && <Glow className="-right-40 top-0 -z-10 size-[34rem]" />}
      <Container>{children}</Container>
      {edge && <WaveEdge fill={edge} flip={flipEdge} />}
    </section>
  );
}
