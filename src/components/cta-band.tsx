import { Glow, HeroWaves } from "@/components/brand-shapes";
import { Button } from "@/components/button";
import { WhatsAppIcon } from "@/components/icons";
import { Container } from "@/components/section";
import { whatsappUrl } from "@/lib/site";

type CTABandProps = {
  title?: string;
  text?: string;
  /** Colour of the section above, so the card straddles it and the navy footer. */
  from?: "paper" | "white";
};

/** Glowing navy card that sits half on the page and half on the footer. */
export function CTABand({
  title = "Have a project in mind? Let's talk.",
  text = "Tell us what you need and we'll get back to you within 24 hours.",
  from = "paper",
}: CTABandProps) {
  return (
    <section
      aria-labelledby="cta-title"
      className={`bg-gradient-to-b to-navy to-50% pt-8 md:pt-12 ${from === "white" ? "from-white from-50%" : "from-paper from-50%"}`}
    >
      <Container>
        <div className="reveal relative isolate overflow-hidden rounded-3xl border border-white/10 bg-navy bg-dots px-6 py-14 text-center text-white md:px-16 md:py-20">
          <Glow className="-left-24 -top-24 -z-10 size-96" />
          <Glow className="-bottom-32 -right-16 -z-10 size-[28rem]" />
          <HeroWaves className="bottom-0 -z-10 h-32 opacity-50" />
          <h2 id="cta-title" className="mx-auto max-w-2xl text-[34px] md:text-5xl">
            {title}
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-lg text-white/80">{text}</p>
          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <Button href={whatsappUrl("Hi UndaNova, I'd like to talk about a project.")} tone="dark">
              <WhatsAppIcon className="size-5" />
              Chat on WhatsApp
            </Button>
            <Button href="/contact" tone="dark" variant="secondary">
              Send a message
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
