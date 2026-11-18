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
  title: string;
  intro?: string;
  /** Use "dark" inside navy sections. */
  tone?: "light" | "dark";
};

/** Standard h2 + optional intro line used at the top of a section. */
export function SectionHeading({ id, title, intro, tone = "light" }: SectionHeadingProps) {
  return (
    <div className="max-w-2xl">
      <h2 id={id} className={`text-3xl md:text-4xl ${tone === "dark" ? "text-white" : "text-navy"}`}>
        {title}
      </h2>
      {intro && (
        <p className={`mt-3 text-lg ${tone === "dark" ? "text-white/80" : "text-ink/70"}`}>{intro}</p>
      )}
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
