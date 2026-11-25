import type { ReactNode } from "react";

type Tone = "white" | "paper" | "navy";

const tones: Record<Tone, string> = {
  white: "bg-white text-ink",
  paper: "bg-paper text-ink",
  navy: "bg-navy text-white",
};

/** Centres content at the site's max width with mobile-first side padding. */
export function Container({ children, className = "" }: { children: ReactNode; className?: string }) {
  return <div className={`mx-auto w-full max-w-[1200px] px-5 sm:px-8 ${className}`}>{children}</div>;
}

type SectionHeadingProps = {
  id: string;
  title: ReactNode;
  intro?: string;
  /** Small caps line above the title. */
  eyebrow?: string;
  /** Use "dark" inside navy sections. */
  tone?: "light" | "dark";
  align?: "left" | "center";
};

/**
 * Section title in wide-tracked caps, with an optional eyebrow and intro.
 */
export function SectionHeading({ id, title, intro, eyebrow, tone = "light", align = "center" }: SectionHeadingProps) {
  const dark = tone === "dark";
  const center = align === "center";
  return (
    <div className={`max-w-2xl ${center ? "mx-auto text-center" : ""}`}>
      {eyebrow && <p className={`caps-sm mb-4 ${dark ? "text-white/60" : "text-ink"}`}>{eyebrow}</p>}
      <h2 id={id} className={`caps text-2xl md:text-3xl ${dark ? "text-white" : "text-navy"}`}>
        {title}
      </h2>
      {intro && <p className={`mt-6 ${dark ? "text-white/80" : "text-ink"}`}>{intro}</p>}
    </div>
  );
}

type SectionProps = {
  children: ReactNode;
  tone?: Tone;
  id?: string;
  className?: string;
  "aria-labelledby"?: string;
  "aria-label"?: string;
};

/** A full-width page section with generous vertical padding (72px mobile / 112px desktop). */
export function Section({ children, tone = "white", id, className = "", ...rest }: SectionProps) {
  return (
    <section id={id} className={`py-18 md:py-28 ${tones[tone]} ${className}`} {...rest}>
      <Container>{children}</Container>
    </section>
  );
}
