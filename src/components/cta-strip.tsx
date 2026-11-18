import { Button } from "@/components/button";
import { ArrowIcon } from "@/components/icons";
import { Container } from "@/components/section";

type CTAStripProps = {
  title?: string;
  text?: string;
  href?: string;
  label?: string;
};

/** Slim closing call to action above the footer (from the Snapview reference). */
export function CTAStrip({
  title = "Start your project today",
  text = "Tell us what you need. We reply within 24 hours.",
  href = "/contact",
  label = "Start a project",
}: CTAStripProps) {
  return (
    <section aria-labelledby="cta-strip-title" className="border-t border-slate/20 bg-white py-12 md:py-16">
      <Container className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
        <div>
          <h2 id="cta-strip-title" className="text-[30px] text-navy md:text-4xl">
            {title}
          </h2>
          <p className="mt-2 text-lg text-ink/70">{text}</p>
        </div>
        <Button href={href} className="w-full shrink-0 md:w-auto md:px-10 md:py-4 md:text-lg">
          {label}
          <ArrowIcon className="size-5" />
        </Button>
      </Container>
    </section>
  );
}
