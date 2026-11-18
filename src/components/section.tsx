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

type SectionProps = {
  children: ReactNode;
  tone?: Tone;
  id?: string;
  className?: string;
  "aria-labelledby"?: string;
};

/** A full-width page section with standard vertical padding (64px mobile / 96px desktop). */
export function Section({ children, tone = "paper", id, className = "", ...rest }: SectionProps) {
  return (
    <section id={id} className={`py-16 md:py-24 ${tones[tone]} ${className}`} {...rest}>
      <Container>{children}</Container>
    </section>
  );
}
