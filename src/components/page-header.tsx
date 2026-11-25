import type { ReactNode } from "react";
import { PhotoBackground, type PhotoName } from "@/components/photo-background";
import { Container } from "@/components/section";

type PageHeaderProps = {
  title: ReactNode;
  intro?: ReactNode;
  /** Small caps line above the title. */
  eyebrow?: ReactNode;
  children?: ReactNode;
  /** Optional photo banner behind the title (washed light, dark text on top). */
  photo?: PhotoName;
};

/** Quiet, centred title block at the top of inner pages. */
export function PageHeader({ title, intro, eyebrow, children, photo }: PageHeaderProps) {
  return (
    <div className={`relative isolate overflow-hidden border-b border-mist ${photo ? "" : "bg-paper"}`}>
      {photo && <PhotoBackground photo={photo} veil="soft" priority />}
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
