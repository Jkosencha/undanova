import type { ReactNode } from "react";
import { Container } from "@/components/section";

type PageHeaderProps = {
  title: ReactNode;
  intro?: ReactNode;
  /** Small caps line above the title. */
  eyebrow?: ReactNode;
  children?: ReactNode;
};

/** Quiet, centred title block at the top of inner pages. */
export function PageHeader({ title, intro, eyebrow, children }: PageHeaderProps) {
  return (
    <div className="border-b border-mist bg-paper">
      <Container className="py-20 text-center md:py-28">
        {eyebrow && <div className="caps-sm mb-5 text-ink/60">{eyebrow}</div>}
        <h1 className="caps mx-auto max-w-4xl text-3xl text-navy md:text-5xl">{title}</h1>
        <span aria-hidden className="mx-auto mt-7 block h-px w-12 bg-navy/40" />
        {intro && <p className="mx-auto mt-7 max-w-2xl text-lg text-ink/75">{intro}</p>}
        {children}
      </Container>
    </div>
  );
}
