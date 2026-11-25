/**
 * Services: one section per service with a description, its business value,
 * what's included and a call to action.
 */
import type { Metadata } from "next";
import { Button } from "@/components/button";
import { CTABand } from "@/components/cta-band";
import { ServiceIcon } from "@/components/icons";
import { PageHeader } from "@/components/page-header";
import { Container } from "@/components/section";
import { services } from "@/content/services";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Web development, custom software development, business management systems, UI/UX design, automation and digital transformation services in Kenya.",
};

export default function ServicesPage() {
  return (
    <>
      <PageHeader
        eyebrow="Services"
        title="Digital solutions for real-world challenges."
        intro="Every organization has different needs. Our services are designed to provide flexible technology solutions that address specific challenges, improve efficiency and support digital growth."
      >
        <nav aria-label="Services on this page" className="mt-10">
          <ul className="flex flex-wrap justify-center gap-x-8 gap-y-1">
            {services.map((service) => (
              <li key={service.slug}>
                <a
                  href={`#${service.slug}`}
                  className="caps-sm inline-flex min-h-11 items-center text-[10px] text-navy underline decoration-navy/30 underline-offset-8 hover:decoration-navy"
                >
                  {service.title}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </PageHeader>

      {services.map((service, i) => (
        <section
          key={service.slug}
          id={service.slug}
          aria-labelledby={`${service.slug}-title`}
          className={`scroll-mt-20 py-18 md:py-24 ${i % 2 ? "bg-paper" : "bg-white"}`}
        >
          <Container className="grid gap-12 lg:grid-cols-2 lg:gap-20">
            <div className="reveal">
              <div className="flex items-center gap-4">
                <ServiceIcon slug={service.slug} className="size-8 text-navy" />
                <span aria-hidden className="text-xs font-semibold tracking-[0.2em] text-ink/50">
                  {String(i + 1).padStart(2, "0")}
                </span>
              </div>
              <h2 id={`${service.slug}-title`} className="caps mt-6 text-xl leading-relaxed text-navy md:text-2xl">
                {service.title}
              </h2>
              <span aria-hidden className="mt-6 block h-px w-12 bg-navy/40" />
              <p className="mt-6 text-ink/80">{service.description}</p>
              <p className="mt-5 border-l-2 border-navy pl-4 text-ink/80">
                <span className="caps-sm block text-[10px] text-ink/60">Business value</span>
                <span className="mt-1 block font-heading text-lg text-navy">{service.value}</span>
              </p>
              <Button href={`/contact?service=${service.slug}`} className="mt-8">
                Discuss your project
              </Button>
            </div>
            <div className="reveal">
              <h3 className="caps-sm text-ink/60">What&apos;s included</h3>
              <ul className="mt-4 divide-y divide-mist border-y border-mist">
                {service.included.map((item) => (
                  <li key={item} className="flex gap-4 py-4">
                    <span aria-hidden className="mt-3 h-px w-4 shrink-0 bg-navy/50" />
                    <span className="text-ink/85">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Container>
        </section>
      ))}

      <CTABand
        title="Not sure which service you need?"
        text="Tell us about the challenge. We'll help you find the right approach."
        label="Request a Consultation"
      />
    </>
  );
}
