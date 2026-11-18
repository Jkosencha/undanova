import type { Metadata } from "next";
import { Button } from "@/components/button";
import { Section } from "@/components/section";
import { WaveDivider } from "@/components/wave-divider";

export const metadata: Metadata = {
  title: "Page not found",
};

export default function NotFound() {
  return (
    <Section className="flex flex-1 flex-col justify-center">
      <WaveDivider color="wave" className="mb-10 max-w-md" />
      <p className="font-heading text-lg text-ink/70">404</p>
      <h1 className="mt-2 text-[40px] text-navy md:text-[56px]">This page wandered off.</h1>
      <p className="mt-4 max-w-xl text-lg text-ink/70">
        The link may be old, or the address may have a typo. Try one of these instead.
      </p>
      <div className="mt-8 flex flex-col gap-3 sm:flex-row">
        <Button href="/">Go to the home page</Button>
        <Button href="/contact" variant="secondary">
          Contact us
        </Button>
      </div>
    </Section>
  );
}
