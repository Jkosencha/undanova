import type { Metadata } from "next";
import { Glow, HeroWaves } from "@/components/brand-shapes";
import { Button } from "@/components/button";
import { Container } from "@/components/section";

export const metadata: Metadata = {
  title: "Page not found",
};

export default function NotFound() {
  return (
    <section className="relative isolate flex flex-1 items-center overflow-hidden bg-navy bg-dots py-24 text-white md:py-32">
      <Glow className="-left-32 -top-32 -z-10 size-[30rem]" />
      <Glow className="-bottom-40 right-0 -z-10 size-[30rem]" />
      <HeroWaves className="bottom-8 -z-10 h-48" />
      <Container>
        <p aria-hidden className="font-heading text-[120px] font-bold leading-none text-gradient-plum md:text-[180px]">
          404
        </p>
        <h1 className="mt-4 text-[44px] leading-[1.05] md:text-[64px]">This page wandered off.</h1>
        <p className="mt-4 max-w-xl text-lg text-white/80">
          The link may be old, or the address may have a typo. Try one of these instead.
        </p>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <Button href="/" tone="dark">
            Go to the home page
          </Button>
          <Button href="/contact" tone="dark" variant="secondary">
            Contact us
          </Button>
        </div>
      </Container>
    </section>
  );
}
