import type { Metadata } from "next";
import { Glow } from "@/components/brand-shapes";
import { Button } from "@/components/button";
import { CTABand } from "@/components/cta-band";
import { ArrowIcon, CheckIcon, ServiceIcon } from "@/components/icons";
import { PageHeader } from "@/components/page-header";
import { PreviewPanel, previewForService } from "@/components/previews";
import { Container } from "@/components/section";
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
        eyebrow="Services"
        title={
          <>
            <span className="font-light">Software that fits</span>{" "}
            <span className="font-bold text-gradient-wave">how you work.</span>
          </>
        }
        intro="Websites, systems and online shops for businesses, NGOs and schools. Pick what you need, or tell us the problem and we'll suggest the right fit."
      >
        <nav aria-label="Services on this page" className="mt-8">
          <ul className="flex flex-wrap gap-2">
            {services.map((service) => (
              <li key={service.slug}>
                <a
                  href={`#${service.slug}`}
                  className="inline-flex min-h-11 items-center gap-2 rounded-full border border-white/20 bg-white/5 px-4 text-sm font-medium text-white transition-colors hover:border-white/50 hover:bg-white/10"
                >
                  <ServiceIcon slug={service.slug} className="size-4" />
                  {service.title}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </PageHeader>

      <div className="bg-paper">
        {services.map((service, i) => {
          const flipped = i % 2 === 1;
          return (
            <section
              key={service.slug}
              id={service.slug}
              aria-labelledby={`${service.slug}-title`}
              className="scroll-mt-16 py-14 md:scroll-mt-20 md:py-20"
            >
              <Container>
                <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
                  <PreviewPanel
                    kind={previewForService(service.slug)}
                    className={`reveal h-72 sm:h-96 ${flipped ? "lg:order-2" : ""}`}
                  />
                  <div className="reveal">
                    <div className="flex items-center gap-4">
                      <span className="inline-flex size-12 items-center justify-center rounded-2xl bg-navy text-white">
                        <ServiceIcon slug={service.slug} className="size-6" />
                      </span>
                      <span aria-hidden className="font-heading text-5xl font-bold text-navy/10">
                        0{i + 1}
                      </span>
                    </div>
                    <h2 id={`${service.slug}-title`} className="mt-5 text-[34px] text-navy md:text-5xl">
                      {service.title}
                    </h2>
                    <p className="mt-3 text-xl font-medium text-navy">{service.summary}</p>
                    <p className="mt-4 text-ink/80">
                      <span className="font-semibold text-navy">Who it&apos;s for: </span>
                      {service.audience}
                    </p>
                    <h3 className="mt-6 text-sm font-semibold uppercase tracking-[0.18em] text-ink/60">
                      What&apos;s included
                    </h3>
                    <ul className="mt-4 grid gap-3 sm:grid-cols-2">
                      {service.included.map((item) => (
                        <li key={item} className="flex gap-3">
                          <CheckIcon className="mt-0.5 size-5 shrink-0" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                    <Button href={`/contact?service=${service.slug}`} className="mt-8 w-full sm:w-auto">
                      Get a quote
                      <ArrowIcon className="size-4" />
                    </Button>
                  </div>
                </div>
              </Container>
            </section>
          );
        })}

        <section aria-labelledby="apps-title" className="pb-8 pt-6 md:pb-12">
          <Container>
            <div className="reveal relative isolate grid items-center gap-8 overflow-hidden rounded-3xl bg-navy bg-dots p-8 text-white md:grid-cols-[1fr_auto] md:p-12">
              <Glow className="-right-20 -top-20 -z-10 size-80" />
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-white/70">Coming soon</p>
                <h2 id="apps-title" className="mt-3 text-[34px] md:text-5xl">
                  {comingSoon.title}
                </h2>
                <p className="mt-3 max-w-lg text-lg text-white/80">{comingSoon.note}</p>
                <Button href={`/contact?service=${comingSoon.slug}`} tone="dark" variant="secondary" className="mt-6">
                  Tell us your idea
                </Button>
              </div>
              <span aria-hidden className="hidden size-32 items-center justify-center rounded-[2rem] border border-white/15 bg-white/5 md:inline-flex">
                <ServiceIcon slug={comingSoon.slug} className="size-14 text-white" />
              </span>
            </div>
          </Container>
        </section>
      </div>

      <CTABand />
    </>
  );
}
