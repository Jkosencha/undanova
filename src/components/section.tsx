import type { ReactNode } from "react";

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
  /** Wrap a word in <Accent> to light it up. */
  title: ReactNode;
  intro?: string;
  eyebrow?: string;
  /** Use "dark" inside navy sections. */
  tone?: "light" | "dark";
  align?: "left" | "center";
};

/** Highlights part of a heading: wave underline on light sections, gradient on navy. */
export function Accent({ children, tone = "light" }: { children: ReactNode; tone?: "light" | "dark" }) {
  if (tone === "dark") return <span className="text-gradient-wave">{children}</span>;
  return (
    <span className="underline decoration-wave decoration-[0.12em] underline-offset-[0.18em]">{children}</span>
  );
}

/** Standard section heading: optional pill label, h2 and intro line. */
export function SectionHeading({ id, title, intro, eyebrow, tone = "light", align = "left" }: SectionHeadingProps) {
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
      {intro && <p className={`mt-4 text-lg md:text-xl ${dark ? "text-white/80" : "text-ink/70"}`}>{intro}</p>}
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

/** A full-width page section with standard vertical padding (64px mobile / 96px desktop). */
export function Section({ children, tone = "paper", id, className = "", ...rest }: SectionProps) {
  return (
    <section id={id} className={`py-16 md:py-24 ${tones[tone]} ${className}`} {...rest}>
      <Container>{children}</Container>
    </section>
  );
}
