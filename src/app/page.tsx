/**
 * Home: hero, introduction, what we do, why UndaNova, our approach, closing CTA.
 * Minimal and elegant: white and soft grey, spaced caps headings, interface visuals.
 */
import type { Metadata } from "next";
import { Button } from "@/components/button";
import { CTABand } from "@/components/cta-band";
import { ArrowIcon, ServiceIcon } from "@/components/icons";
import Link from "next/link";
import { Container, Section, SectionHeading } from "@/components/section";
import { LayeredPlanes, SystemDiagram } from "@/components/visuals";
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
            <p className="caps-sm text-ink/70">
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
          <SystemDiagram className="mx-auto max-w-[560px]" />
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
          {services.map((service, i) => (
            <li key={service.slug} className="reveal flex">
              <Link
                href={`/services#${service.slug}`}
                prefetch={false}
                className="group relative flex w-full flex-col bg-white p-8 transition-colors duration-500 hover:bg-navy md:p-10"
              >
                <div className="flex items-start justify-between">
                  <ServiceIcon
                    slug={service.slug}
                    className="size-8 text-navy transition-colors duration-500 group-hover:text-white"
                  />
                  <span className="text-xs font-semibold tracking-[0.2em] text-ink/70 transition-colors duration-500 group-hover:text-white/70">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </div>
                <h3 className="caps-sm mt-8 text-navy transition-colors duration-500 group-hover:text-white">
                  {service.title}
                </h3>
                <p className="mt-3 flex-1 text-sm text-ink/70 transition-colors duration-500 group-hover:text-white/80">
                  {service.summary}
                </p>
                <ArrowIcon className="mt-6 size-4 text-plum transition-transform duration-500 group-hover:translate-x-2 group-hover:text-white" />
              </Link>
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
          <LayeredPlanes className="mx-auto max-w-[460px]" />
        </div>
      </Section>

      {/* Our approach */}
      <Section tone="paper" aria-labelledby="approach-title">
        <SectionHeading id="approach-title" eyebrow="Our approach" title="From idea to implementation." />
        <ol className="relative mt-16 grid gap-12 sm:grid-cols-2 lg:grid-cols-4 lg:gap-10">
          <span aria-hidden className="absolute left-0 right-0 top-[7px] hidden h-px bg-navy/25 lg:block" />
          {approach.map((step, i) => (
            <li key={step.title} className="reveal relative">
              <span aria-hidden className="relative block size-3.5 rotate-45 bg-plum ring-4 ring-paper" />
              <span className="mt-8 block font-heading text-4xl font-light text-navy">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="caps-sm mt-4 text-navy">{step.title}</h3>
              <p className="mt-3 text-sm text-ink/75">{step.text}</p>
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
