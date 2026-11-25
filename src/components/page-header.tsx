import type { ReactNode } from "react";
import { PhotoBackground, type PhotoName } from "@/components/photo-background";
import { Container } from "@/components/section";

type PageHeaderProps = {
  title: ReactNode;
  intro?: ReactNode;
  /** Small caps line above the title. */
  eyebrow?: ReactNode;
  children?: ReactNode;
  /** Photo banner behind the title (navy wash, white text). Without it, a quiet grey header. */
  photo?: PhotoName;
};

/** Centred title block at the top of inner pages. */
export function PageHeader({ title, intro, eyebrow, children, photo }: PageHeaderProps) {
  const dark = Boolean(photo);
  return (
    <div
      className={`relative isolate overflow-hidden ${dark ? "bg-navy text-white" : "border-b border-mist bg-paper"}`}
    >
      {photo && <PhotoBackground photo={photo} priority />}
      <Container className="py-24 text-center md:py-32">
        {eyebrow && <div className={`caps-sm mb-5 ${dark ? "text-white/80" : "text-ink/70"}`}>{eyebrow}</div>}
        <h1 className={`caps mx-auto max-w-4xl text-3xl leading-snug md:text-5xl ${dark ? "" : "text-navy"}`}>
          {title}
        </h1>
        <span aria-hidden className="mx-auto mt-7 block size-2.5 rotate-45 bg-plum" />
        {intro && (
          <p className={`mx-auto mt-7 max-w-2xl text-lg ${dark ? "text-white/85" : "text-ink/75"}`}>{intro}</p>
        )}
        {children}
      </Container>
    </div>
  );
}
