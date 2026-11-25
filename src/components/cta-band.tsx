import { Button } from "@/components/button";
import { WhatsAppIcon } from "@/components/icons";
import { PhotoBackground } from "@/components/photo-background";
import { Container } from "@/components/section";
import { hasWhatsapp, whatsappUrl } from "@/lib/site";

type CTABandProps = {
  title?: string;
  text?: string;
  /** Main button label (links to the contact page). */
  label?: string;
};

/** Closing call to action over a blueprint-grid photo: spaced caps title and a clear next step. */
export function CTABand({
  title = "Have an idea worth building?",
  text = "Let's turn your business challenges and ideas into practical digital solutions.",
  label = "Start a Project",
}: CTABandProps) {
  return (
    <section
      aria-labelledby="cta-title"
      className="relative isolate overflow-hidden bg-navy py-24 text-center text-white md:py-32"
    >
      <PhotoBackground photo="lakeSunset" veil="dark" />
      <Container>
        <h2 id="cta-title" className="caps mx-auto max-w-3xl text-2xl md:text-3xl">
          {title}
        </h2>
        <p className="mx-auto mt-6 max-w-xl text-white/80">{text}</p>
        <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
          <Button href="/contact" tone="dark">
            {label}
          </Button>
          {/* Shown only once an official WhatsApp number is set in lib/site.ts. */}
          {hasWhatsapp && (
            <Button
              href={whatsappUrl("Hi UndaNova, I'd like to talk about a project.")}
              tone="dark"
              variant="secondary"
            >
              <WhatsAppIcon className="size-4" />
              Chat on WhatsApp
            </Button>
          )}
        </div>
      </Container>
    </section>
  );
}
