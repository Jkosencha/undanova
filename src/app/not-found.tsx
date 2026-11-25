import type { Metadata } from "next";
import { Button } from "@/components/button";
import { Container } from "@/components/section";

export const metadata: Metadata = {
  title: "Page not found",
};

export default function NotFound() {
  return (
    <section className="flex flex-1 items-center bg-paper py-28">
      <Container className="text-center">
        <p className="caps-sm text-ink/60">Error 404</p>
        <h1 className="caps mt-6 text-3xl text-navy md:text-5xl">This page wandered off.</h1>
        <span aria-hidden className="mx-auto mt-7 block h-px w-12 bg-navy/40" />
        <p className="mx-auto mt-7 max-w-md text-ink/75">
          The link may be old, or the address may have a typo. Try one of these instead.
        </p>
        <div className="mt-10 flex flex-col justify-center gap-3 sm:flex-row">
          <Button href="/">Go to the home page</Button>
          <Button href="/contact" variant="secondary">
            Contact us
          </Button>
        </div>
      </Container>
    </section>
  );
}
