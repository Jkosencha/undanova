/**
 * SaaS: ready-made systems, in the minimal design.
 * TODO: all product wording is placeholder (src/content/saas.ts).
 */
import type { Metadata } from "next";
import { Button } from "@/components/button";
import { Card } from "@/components/card";
import { CTABand } from "@/components/cta-band";
import { ServiceIcon } from "@/components/icons";
import { PageHeader } from "@/components/page-header";
import { Section, SectionHeading } from "@/components/section";
import { saasProducts } from "@/content/saas";

export const metadata: Metadata = {
  title: "Ready-made systems",
  description: "NGO, POS and restaurant systems from UndaNova: ready-made software you can sign up for. Coming soon.",
};

// TODO: confirm these promises for the ready-made systems.
const trust = ["Built for Kenya", "M-Pesa ready", "Support included"];

const productIcon: Record<string, string> = {
  "ngo-system": "ngo-school-systems",
  "pos-system": "ecommerce-mpesa",
  "restaurant-system": "business-websites",
};

export default function SaasPage() {
  return (
    <>
      <PageHeader
        eyebrow="Ready-made systems · Coming soon"
        title="Software you can start using"
        // TODO: placeholder intro, Jennifer to confirm.
        intro="Systems for NGOs, shops and restaurants that you sign up for and start using, with no custom build needed. Built in Kenya, with M-Pesa where it matters."
      >
        <ul className="mt-10 flex flex-wrap justify-center gap-x-10 gap-y-3">
          {trust.map((t) => (
            <li key={t} className="caps-sm text-[10px] text-navy">
              {t}
            </li>
          ))}
        </ul>
      </PageHeader>

      <Section id="products" aria-labelledby="products-title">
        <SectionHeading
          id="products-title"
          title="Three systems"
          intro="Each one built for how Kenyan organisations really work."
        />
        <ul className="mt-14 grid gap-6 md:grid-cols-3">
          {saasProducts.map((product) => (
            <li key={product.slug} className="reveal flex">
              <Card className="flex w-full flex-col p-8">
                <ServiceIcon slug={productIcon[product.slug]} className="size-8 text-navy" />
                <h3 className="caps mt-6 text-lg text-navy">{product.title}</h3>
                <p className="mt-3 font-heading text-navy">{product.tagline}</p>
                <p className="mt-3 text-sm text-ink/70">{product.description}</p>
                <ul className="mt-6 flex-1 space-y-2 border-t border-mist pt-6 text-sm text-ink/75">
                  {product.features.map((f) => (
                    <li key={f} className="flex gap-3">
                      <span aria-hidden className="mt-2.5 h-px w-3 shrink-0 bg-navy/50" />
                      {f}
                    </li>
                  ))}
                </ul>
                <Button href={`/contact?service=${product.slug}`} variant="secondary" className="mt-8 self-start">
                  Join the waitlist
                </Button>
              </Card>
            </li>
          ))}
        </ul>
        <p className="mt-12 text-center text-ink/70">
          Need something made just for you?{" "}
          <a
            href="/services"
            className="text-navy underline decoration-navy/30 underline-offset-4 hover:decoration-navy"
          >
            See our custom services
          </a>
          .
        </p>
      </Section>

      <CTABand title="Want early access? Let's talk." />
    </>
  );
}
