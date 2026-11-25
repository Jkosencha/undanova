import type { Metadata } from "next";
import { Button } from "@/components/button";
import { PhotoBackground } from "@/components/photo-background";
import { Container } from "@/components/section";

export const metadata: Metadata = {
  title: "Page not found",
};

export default function NotFound() {
  return (
    <section className="relative isolate flex flex-1 items-center overflow-hidden bg-navy py-28 text-white">
      <PhotoBackground photo="pathSunset" veil="dark" priority />
      <Container className="text-center">
        <p className="caps-sm text-white/80">Error 404</p>
        <h1 className="caps mt-6 text-3xl md:text-5xl">This page wandered off.</h1>
        <span aria-hidden className="mx-auto mt-7 block size-2.5 rounded-full bg-steel" />
        <p className="mx-auto mt-7 max-w-md text-white/85">
          The link may be old, or the address may have a typo. Try one of these instead.
        </p>
        <div className="mt-10 flex flex-col justify-center gap-3 sm:flex-row">
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
