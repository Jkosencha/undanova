import type { ReactNode } from "react";
import { Eyebrow, Glow, HeroWaves, WaveEdge } from "@/components/brand-shapes";
import { PhotoBackground } from "@/components/photo-background";
import { Container } from "@/components/section";

type PageHeaderProps = {
  title: ReactNode;
  intro?: ReactNode;
  /** A string becomes a pill label; pass an element for anything custom. */
  eyebrow?: ReactNode;
  children?: ReactNode;
  /** Colour of the section that follows, for the curved edge. */
  next?: "paper" | "white";
};

/** Navy hero at the top of inner pages, matching the home page. */
export function PageHeader({ title, intro, eyebrow, children, next = "paper" }: PageHeaderProps) {
  return (
    <div className="relative isolate overflow-hidden bg-navy pb-24 pt-12 text-white md:pb-36 md:pt-20">
      <PhotoBackground photo="satin" priority />
      <Glow className="-left-32 -top-40 -z-10 size-[32rem]" />
      <Glow className="-right-40 top-10 -z-10 size-[26rem]" />
      <HeroWaves className="bottom-4 -z-10 h-28 opacity-70 md:h-40" />
      <Container>
        {eyebrow && (
          <div className="mb-6">{typeof eyebrow === "string" ? <Eyebrow tone="dark">{eyebrow}</Eyebrow> : eyebrow}</div>
        )}
        <h1 className="max-w-4xl text-[44px] leading-[1.05] md:text-[64px]">{title}</h1>
        {intro && <p className="mt-5 max-w-2xl text-lg text-white/80 md:text-xl">{intro}</p>}
        {children}
      </Container>
      <WaveEdge fill={next} />
    </div>
  );
}
