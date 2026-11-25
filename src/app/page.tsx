/**
 * Home: hero, introduction, what we do, why UndaNova, our approach, closing CTA.
 * Minimal and elegant: white and soft grey, spaced caps headings, interface visuals.
 */
import type { Metadata } from "next";
import { Button } from "@/components/button";
import { CTABand } from "@/components/cta-band";
import { ServiceIcon } from "@/components/icons";
import { ConnectedVisual, InterfaceVisual } from "@/components/interface-visual";
import { Container, Section, SectionHeading } from "@/components/section";
import { services } from "@/content/services";
import { approach, differentiators } from "@/content/studio";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: { absolute: "UndaNova Digital Labs | Software development and digital solutions in Kenya" },
  description:
    "UndaNova is a software development and digital solutions studio in Kenya: web development, custom software, business systems, UI/UX design, automation and digital transformation.",
};

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section aria-labelledby="hero-title" className="border-b border-mist bg-white">
        <Container className="grid items-center gap-14 py-18 md:py-24 lg:grid-cols-[1fr_1.05fr] lg:gap-16">
          <div className="text-center lg:text-left">
            <p className="caps-sm text-ink/60">
              {site.name} {site.descriptor}
            </p>
            <h1 id="hero-title" className="caps mt-6 text-4xl leading-snug text-navy sm:text-5xl lg:text-6xl">
              We build what&apos;s next.
            </h1>
            <span aria-hidden className="mx-auto mt-8 block h-px w-12 bg-navy/40 lg:mx-0" />
            <p className="mx-auto mt-8 max-w-xl text-lg text-ink/75 lg:mx-0">
              We design and develop digital solutions that help businesses and organizations work smarter, operate
              better and move forward with technology.
            </p>
            <div className="mt-10 flex flex-col justify-center gap-3 sm:flex-row lg:justify-start">
              <Button href="/contact">Start a Project</Button>
              <Button href="/services" variant="secondary">
                Explore Our Services
              </Button>
            </div>
          </div>
          <InterfaceVisual />
        </Container>
      </section>

      {/* Introduction */}
      <Section aria-labelledby="intro-title">
        <div className="mx-auto max-w-3xl text-center">
          <SectionHeading id="intro-title" title="Technology built around real-world needs." />
          <div className="mt-8 space-y-5 text-lg text-ink/75">
            <p>
              At UndaNova, we believe technology should do more than look impressive. It should solve problems, simplify
              processes and create meaningful opportunities.
            </p>
            <p>
              We partner with businesses and organizations to design and build digital solutions that make everyday
              operations more efficient and ideas more achievable.
            </p>
          </div>
        </div>
      </Section>

      {/* What we do */}
      <Section tone="paper" aria-labelledby="services-title">
        <SectionHeading id="services-title" title="What We Do" />
        <ul className="mt-16 grid gap-px bg-mist sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <li key={service.slug} className="reveal bg-white p-8 md:p-10">
              <ServiceIcon slug={service.slug} className="size-8 text-navy" />
              <h3 className="caps-sm mt-6 text-navy">{service.title}</h3>
              <p className="mt-3 text-sm text-ink/70">{service.summary}</p>
            </li>
          ))}
        </ul>
        <div className="mt-12 text-center">
          <Button href="/services" variant="secondary">
            Explore All Services
          </Button>
        </div>
      </Section>

      {/* Why UndaNova */}
      <Section aria-labelledby="why-title">
        <div className="grid items-center gap-14 lg:grid-cols-2 lg:gap-20">
          <div>
            <SectionHeading
              id="why-title"
              eyebrow="Why UndaNova?"
              title="Practical innovation. Meaningful impact."
              align="left"
            />
            <p className="mt-6 text-ink/75">
              Technology should create value, not unnecessary complexity. UndaNova approaches every project with a focus
              on understanding the problem, identifying the right solution and delivering technology that serves a clear
              purpose.
            </p>
            <ul className="mt-8 divide-y divide-mist border-y border-mist">
              {differentiators.map((d) => (
                <li key={d.title} className="reveal py-5">
                  <h3 className="font-heading text-lg text-navy">{d.title}</h3>
                  <p className="mt-1 text-sm text-ink/70">{d.text}</p>
                </li>
              ))}
            </ul>
          </div>
          <ConnectedVisual />
        </div>
      </Section>

      {/* Our approach */}
      <Section tone="navy" aria-labelledby="approach-title">
        <SectionHeading id="approach-title" eyebrow="Our approach" title="From idea to implementation." tone="dark" />
        <ol className="mt-16 grid gap-12 sm:grid-cols-2 lg:grid-cols-4">
          {approach.map((step, i) => (
            <li key={step.title} className="reveal border-t border-white/25 pt-6">
              <span className="font-heading text-3xl font-light text-white/80">{String(i + 1).padStart(2, "0")}</span>
              <h3 className="caps-sm mt-4 text-white">{step.title}</h3>
              <p className="mt-3 text-sm text-white/75">{step.text}</p>
            </li>
          ))}
        </ol>
      </Section>

      {/* Closing CTA */}
      <CTABand
        title="Have an idea worth building?"
        text="Let's turn your business challenges and ideas into practical digital solutions."
        label="Let's Talk"
      />
    </>
  );
}
