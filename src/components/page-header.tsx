import type { ReactNode } from "react";
import { Container } from "@/components/section";

type PageHeaderProps = {
  title: string;
  intro?: ReactNode;
  /** Optional small line above the title, e.g. a category. */
  eyebrow?: ReactNode;
  children?: ReactNode;
};

/** The H1 block at the top of inner pages. */
export function PageHeader({ title, intro, eyebrow, children }: PageHeaderProps) {
  return (
    <div className="border-b border-slate/20 bg-paper pb-12 pt-12 md:pb-16 md:pt-20">
      <Container>
        {eyebrow && <div className="mb-4">{eyebrow}</div>}
        <h1 className="max-w-3xl text-[40px] text-navy md:text-[56px]">{title}</h1>
        {intro && <p className="mt-4 max-w-2xl text-lg text-ink/70 md:text-xl">{intro}</p>}
        {children}
      </Container>
    </div>
  );
}
