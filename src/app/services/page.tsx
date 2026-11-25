/**
 * Services: minimal and calm. One section per service, then ways to work
 * together, the tools we use and the full FAQ.
 */
import type { Metadata } from "next";
import { Button } from "@/components/button";
import { CTABand } from "@/components/cta-band";
import { FaqList } from "@/components/faq";
import { ServiceIcon } from "@/components/icons";
import { PageHeader } from "@/components/page-header";
import { Container, Section, SectionHeading } from "@/components/section";
import { comingSoon, services } from "@/content/services";
import { engagements, faqs, stack } from "@/content/studio";

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
        title="What we build"
        photo="deskWhite"
        intro="Websites, systems and online shops for businesses, NGOs and schools. Pick what you need, or tell us the problem and we'll suggest the right fit."
      >
        <nav aria-label="Services on this page" className="mt-10">
          <ul className="flex flex-wrap justify-center gap-x-8 gap-y-2">
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

      {/* One section per service */}
      {services.map((service, i) => (
        <section
          key={service.slug}
          id={service.slug}
          aria-labelledby={`${service.slug}-title`}
          className={`scroll-mt-20 py-18 md:py-24 ${i % 2 ? "bg-paper" : "bg-white"}`}
        >
          <Container className="grid gap-12 lg:grid-cols-2 lg:gap-20">
            <div className="reveal">
              <ServiceIcon slug={service.slug} className="size-8 text-navy" />
              <h2 id={`${service.slug}-title`} className="caps mt-6 text-xl text-navy md:text-2xl">
                {service.title}
              </h2>
              <span aria-hidden className="mt-6 block h-px w-12 bg-navy/40" />
              <p className="mt-6 font-heading text-lg text-navy">{service.summary}</p>
              <p className="mt-4 text-ink/75">
                <span className="caps-sm text-[10px] text-ink/60">Who it&apos;s for · </span>
                {service.audience}
              </p>
              <Button href={`/contact?service=${service.slug}`} className="mt-8">
                Get a quote
              </Button>
            </div>
            <div className="reveal">
              <h3 className="caps-sm text-ink/60">What&apos;s included</h3>
              <ul className="mt-4 divide-y divide-mist border-y border-mist">
                {service.included.map((item) => (
                  <li key={item} className="flex gap-4 py-4">
                    <span aria-hidden className="mt-2.5 h-px w-4 shrink-0 bg-navy/50" />
                    <span className="text-ink/85">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Container>
        </section>
      ))}

      {/* Mobile apps, coming soon */}
      <Section tone="navy" id="apps" aria-labelledby="apps-title" className="scroll-mt-20 text-center">
        <p className="caps-sm text-white/70">Coming soon</p>
        <h2 id="apps-title" className="caps mt-4 text-2xl md:text-3xl">
          {comingSoon.title}
        </h2>
        <span aria-hidden className="mx-auto mt-6 block h-px w-12 bg-white/50" />
        <p className="mx-auto mt-6 max-w-lg text-white/85">{comingSoon.note}</p>
        <Button href={`/contact?service=${comingSoon.slug}`} tone="dark" variant="secondary" className="mt-8">
          Tell us your idea
        </Button>
      </Section>

      {/* Ways to work together */}
      <Section aria-labelledby="engage-title">
        <SectionHeading
          id="engage-title"
          title="Ways to work with us"
          intro="Every option starts with a free call and a written quote in KES."
        />
        <ul className="mt-14 grid gap-px bg-mist md:grid-cols-3">
          {engagements.map((e, i) => (
            <li
              key={e.title}
              className={`reveal flex flex-col p-8 md:p-10 ${i === 1 ? "bg-navy text-white" : "bg-white"}`}
            >
              <h3 className={`caps-sm ${i === 1 ? "text-white" : "text-navy"}`}>{e.title}</h3>
              <p className={`mt-3 text-sm ${i === 1 ? "text-white/80" : "text-ink/70"}`}>{e.bestFor}</p>
              <ul className="mt-6 flex-1 space-y-3 text-sm">
                {e.points.map((pt) => (
                  <li key={pt} className="flex gap-3">
                    <span
                      aria-hidden
                      className={`mt-2.5 h-px w-3 shrink-0 ${i === 1 ? "bg-white/60" : "bg-navy/50"}`}
                    />
                    {pt}
                  </li>
                ))}
              </ul>
              <Button href="/contact" tone={i === 1 ? "dark" : "light"} variant="secondary" className="mt-8 self-start">
                Ask about this
              </Button>
            </li>
          ))}
        </ul>
      </Section>

      {/* Tools we use */}
      <Section tone="paper" aria-labelledby="stack-title">
        <SectionHeading
          id="stack-title"
          title="Tools we use"
          intro="Modern, proven tools: fast, secure and easy to look after."
        />
        <dl className="mt-14 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {stack.map((g) => (
            <div key={g.title} className="border-t border-navy/20 pt-5">
              <dt className="caps-sm text-navy">{g.title}</dt>
              <dd className="mt-4">
                <ul className="space-y-2 text-sm text-ink/75">
                  {g.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </dd>
            </div>
          ))}
        </dl>
      </Section>

      {/* FAQ */}
      <Section id="faq" aria-labelledby="faq-title" className="scroll-mt-20">
        <div className="grid gap-12 lg:grid-cols-[0.8fr_2fr]">
          <div>
            <SectionHeading id="faq-title" title="Questions" align="left" />
            <p className="mt-6 text-ink/70">Can&apos;t find yours? Ask us on WhatsApp.</p>
          </div>
          <FaqList faqs={faqs} structuredData />
        </div>
      </Section>

      <CTABand title="Not sure what you need? Let's talk." />
    </>
  );
}
