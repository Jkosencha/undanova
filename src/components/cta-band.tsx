import { Button } from "@/components/button";
import { WhatsAppIcon } from "@/components/icons";
import { Container } from "@/components/section";
import { hasWhatsapp, whatsappUrl } from "@/lib/site";

type CTABandProps = {
  title?: string;
  text?: string;
  /** Main button label (links to the contact page). */
  label?: string;
};

/** Closing call to action on a navy band with a faint grid: spaced caps title and a clear next step. */
export function CTABand({
  title = "Have an idea worth building?",
  text = "Let's turn your business challenges and ideas into practical digital solutions.",
  label = "Start a Project",
}: CTABandProps) {
  return (
    <section
      aria-labelledby="cta-title"
      className="bg-navy bg-[linear-gradient(color-mix(in_srgb,var(--color-white)_6%,transparent)_1px,transparent_1px),linear-gradient(90deg,color-mix(in_srgb,var(--color-white)_6%,transparent)_1px,transparent_1px)] bg-[size:48px_48px] py-20 text-center text-white md:py-28"
    >
      <Container>
        <h2 id="cta-title" className="caps mx-auto max-w-3xl text-2xl md:text-3xl">
          {title}
        </h2>
        <span aria-hidden className="mx-auto mt-6 block size-2.5 rotate-45 bg-plum" />
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
