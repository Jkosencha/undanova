import type { Metadata } from "next";
import { Button } from "@/components/button";
import { CTABand } from "@/components/cta-band";
import { CheckIcon } from "@/components/icons";
import { PageHeader } from "@/components/page-header";
import { Section } from "@/components/section";
import { comingSoon, services } from "@/content/services";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Business websites, NGO and school systems, e-commerce with M-Pesa, and support and maintenance from UndaNova.",
};

// TODO: confirm with Jennifer whether to add "Starting from" prices later. No prices for now.

export default function ServicesPage() {
  return (
    <>
      <PageHeader
        title="What we build"
        intro="Websites, systems and online shops for businesses, NGOs and schools. Pick what you need, or tell us the problem and we'll suggest the right fit."
      >
        <nav aria-label="Services on this page" className="mt-8">
          <ul className="flex flex-wrap gap-2">
            {services.map((service) => (
              <li key={service.slug}>
                <a
                  href={`#${service.slug}`}
                  className="inline-flex min-h-11 items-center rounded-full border border-navy/20 bg-white px-4 text-sm font-medium text-navy hover:border-navy/50"
                >
                  {service.title}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </PageHeader>

      {services.map((service, i) => (
        <Section
          key={service.slug}
          id={service.slug}
          tone={i % 2 === 0 ? "white" : "paper"}
          aria-labelledby={`${service.slug}-title`}
          className="scroll-mt-16 md:scroll-mt-20"
        >
          <div className="grid gap-8 md:grid-cols-2 md:gap-16">
            <div>
              <h2 id={`${service.slug}-title`} className="text-3xl text-navy md:text-4xl">
                {service.title}
              </h2>
              <p className="mt-3 text-lg font-medium text-navy">{service.summary}</p>
              <h3 className="mt-6 text-sm font-semibold uppercase tracking-wider text-ink/70">Who it&apos;s for</h3>
              <p className="mt-2 text-ink/80">{service.audience}</p>
              <Button href={`/contact?service=${service.slug}`} className="mt-8 hidden md:inline-flex">
                Get a quote
              </Button>
            </div>
            <div>
              <h3 className="text-sm font-semibold uppercase tracking-wider text-ink/70">What&apos;s included</h3>
              <ul className="mt-4 space-y-3">
                {service.included.map((item) => (
                  <li key={item} className="flex gap-3">
                    <CheckIcon className="mt-0.5 size-5 shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              {/* On mobile the button sits after the list, so people read what's included first. */}
              <Button href={`/contact?service=${service.slug}`} className="mt-8 w-full md:hidden">
                Get a quote
              </Button>
            </div>
          </div>
        </Section>
      ))}

      <Section tone={services.length % 2 === 0 ? "white" : "paper"} aria-labelledby="apps-title">
        <div className="rounded-xl border border-dashed border-slate/50 p-6 md:p-8">
          <h2 id="apps-title" className="text-2xl text-navy">
            {comingSoon.title}
          </h2>
          <p className="mt-2 text-ink/80">{comingSoon.note}</p>
          <Button href={`/contact?service=${comingSoon.slug}`} variant="secondary" className="mt-6">
            Tell us your idea
          </Button>
        </div>
      </Section>

      <CTABand />
    </>
  );
}
