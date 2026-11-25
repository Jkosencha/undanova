/**
 * Services: a photo-led section per service (alternating sides) with its
 * description, business value, what's included and a call to action.
 */
import type { Metadata } from "next";
import { Button } from "@/components/button";
import { CTABand } from "@/components/cta-band";
import { ArrowIcon, CheckIcon, ServiceIcon } from "@/components/icons";
import { PageHeader } from "@/components/page-header";
import { ParallaxImage } from "@/components/parallax-image";
import { photos, serviceImage } from "@/components/photo-background";
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
        photo="cafeCode"
        intro="Every organization has different needs. Our services are designed to provide flexible technology solutions that address specific challenges, improve efficiency and support digital growth."
      />

      {services.map((service, i) => {
        const flipped = i % 2 === 1;
        const image = serviceImage[service.slug];
        return (
          <section
            key={service.slug}
            id={service.slug}
            aria-labelledby={`${service.slug}-title`}
            className={`scroll-mt-20 py-18 md:py-28 ${flipped ? "bg-paper" : "bg-white"}`}
          >
            <Container className="grid items-center gap-12 lg:grid-cols-[1fr_1.15fr] lg:gap-20">
              {/* Photo with a large number */}
              <div className={`reveal relative ${flipped ? "lg:order-2" : ""}`}>
                <div className="relative aspect-[4/3] overflow-hidden">
                  {image && (
                    <ParallaxImage src={photos[image.photo]} alt={image.alt} sizes="(min-width: 1024px) 520px, 100vw" />
                  )}
                  <div
                    aria-hidden
                    className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-navy/80 to-transparent"
                  />
                  <span
                    aria-hidden
                    className="absolute bottom-4 left-6 font-heading text-7xl font-extralight text-white/90 md:text-8xl"
                  >
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="reveal">
                <ServiceIcon slug={service.slug} className="size-7 text-navy" />
                <h2 id={`${service.slug}-title`} className="caps mt-6 text-xl leading-relaxed text-navy md:text-2xl">
                  {service.title}
                </h2>
                <p className="mt-5 text-lg text-ink">{service.description}</p>

                <div className="mt-8 bg-navy px-6 py-5 text-white">
                  <p className="caps-sm text-[10px] text-white/70">Business value</p>
                  <p className="mt-2 font-heading text-lg leading-snug">{service.value}</p>
                </div>

                <h3 className="caps-sm mt-8 text-ink">What&apos;s included</h3>
                <ul className="mt-4 grid gap-x-8 gap-y-3 sm:grid-cols-2">
                  {service.included.map((item) => (
                    <li key={item} className="flex gap-3 text-ink">
                      <CheckIcon className="mt-1 size-4 shrink-0 text-navy" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                <Button href={`/contact?service=${service.slug}`} className="mt-10">
                  Discuss your project
                  <ArrowIcon className="size-3.5" />
                </Button>
              </div>
            </Container>
          </section>
        );
      })}

      <CTABand
        title="Not sure which service you need?"
        text="Tell us about the challenge. We'll help you find the right approach."
        label="Request a Consultation"
      />
    </>
  );
}
