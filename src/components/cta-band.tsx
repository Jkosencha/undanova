import { Button } from "@/components/button";
import { WhatsAppIcon } from "@/components/icons";
import { Container } from "@/components/section";
import { whatsappUrl } from "@/lib/site";

type CTABandProps = {
  title?: string;
  text?: string;
};

/** Calm closing call to action: spaced caps title, two outlined buttons. */
export function CTABand({
  title = "Have a project in mind? Let's talk.",
  text = "Tell us what you need and we'll get back to you within 24 hours.",
}: CTABandProps) {
  return (
    <section aria-labelledby="cta-title" className="border-t border-mist bg-white py-20 text-center md:py-28">
      <Container>
        <h2 id="cta-title" className="caps mx-auto max-w-3xl text-2xl text-navy md:text-3xl">
          {title}
        </h2>
        <span aria-hidden className="mx-auto mt-6 block h-px w-12 bg-navy/40" />
        <p className="mx-auto mt-6 max-w-xl text-ink/70">{text}</p>
        <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
          <Button href={whatsappUrl("Hi UndaNova, I'd like to talk about a project.")} variant="secondary">
            <WhatsAppIcon className="size-4" />
            Chat on WhatsApp
          </Button>
          <Button href="/contact">Send a message</Button>
        </div>
      </Container>
    </section>
  );
}
