import { Button } from "@/components/button";
import { WhatsAppIcon } from "@/components/icons";
import { Section } from "@/components/section";
import { whatsappUrl } from "@/lib/site";

type CTABandProps = {
  title?: string;
  text?: string;
};

export function CTABand({
  title = "Have a project in mind? Let's talk.",
  text = "Tell us what you need and we'll get back to you within 24 hours.",
}: CTABandProps) {
  return (
    <Section tone="navy" aria-labelledby="cta-title">
      <div className="max-w-2xl">
        <h2 id="cta-title" className="text-3xl md:text-4xl">
          {title}
        </h2>
        <p className="mt-4 text-lg text-white/80">{text}</p>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <Button href={whatsappUrl("Hi UndaNova, I'd like to talk about a project.")} tone="dark">
            <WhatsAppIcon className="size-5" />
            Chat on WhatsApp
          </Button>
          <Button href="/contact" tone="dark" variant="secondary">
            Send a message
          </Button>
        </div>
      </div>
    </Section>
  );
}
