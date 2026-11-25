/**
 * Home: minimal and elegant. Bright photo hero with spaced caps, a quiet row of
 * services, a text-and-photo split, a navy band of featured work, then steps,
 * commitments, questions and a calm call to action.
 */
import Image from "next/image";
import { Button } from "@/components/button";
import { CTABand } from "@/components/cta-band";
import { FaqList } from "@/components/faq";
import { ServiceIcon } from "@/components/icons";
import { PhotoBackground, photos } from "@/components/photo-background";
import { Container, Section, SectionHeading } from "@/components/section";
import { TextLink } from "@/components/text-link";
import { WorkCard } from "@/components/work-card";
import { services } from "@/content/services";
import { commitments, faqs } from "@/content/studio";
import { featuredWork } from "@/content/work";
import { site } from "@/lib/site";

const reasons = [
  {
    title: "Built for M-Pesa, SMS and WhatsApp",
    text: "Your customers pay, get updates and reach you the way they already do.",
  },
  {
    title: "Fast on any phone, even on slow data",
    text: "Pages load quickly on mid-range Android phones and mobile data.",
  },
  {
    title: "We understand NGOs and small businesses from the inside",
    text: "We've worked in them, so we build for how they really run.",
  },
  {
    title: "Ongoing support, not build-and-disappear",
    text: "We stay on after launch to keep things secure, updated and working.",
  },
];

const steps = [
  { title: "Discover", text: "We learn how your organisation works and what you need." },
  { title: "Design", text: "We plan the pages and screens, and you approve them before we build." },
  { title: "Build", text: "We build it, test it on real phones and show you progress as we go." },
  { title: "Launch & support", text: "We put it live, show your team how to use it and keep it running." },
];

export default function Home() {
  return (
    <>
      {/* 1. Hero */}
      <section
        aria-labelledby="hero-title"
        className="relative isolate flex min-h-[78svh] items-center overflow-hidden border-b border-mist"
      >
        <PhotoBackground photo="whiteRoom" veil="light" priority />
        <Container className="py-24 text-center">
          {site.availability && <p className="caps-sm text-ink/70">{site.availability}</p>}
          <p className="caps mt-5 text-xs text-ink/80 md:text-sm">Software studio · Made in Kenya</p>
          <h1
            id="hero-title"
            className="caps mx-auto mt-6 max-w-5xl text-3xl leading-snug text-navy sm:text-5xl lg:text-6xl"
          >
            We build what&apos;s next.
          </h1>
          <p className="mx-auto mt-8 max-w-xl text-ink/80 md:text-lg">
            UndaNova designs and builds websites, apps and business systems for growing businesses, NGOs and schools.
            Fast, reliable and made for how Kenya works.
          </p>
          <div className="mt-10 flex flex-col justify-center gap-3 sm:flex-row">
            <Button href="/contact">Start a project</Button>
            <Button href="/work" variant="secondary">
              See our work
            </Button>
          </div>
        </Container>
      </section>

      {/* 2. What we build */}
      <Section aria-labelledby="build-title">
        <SectionHeading id="build-title" title="What we build" />
        <ul className="mt-16 grid gap-12 text-center sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service) => (
            <li key={service.slug} className="reveal">
              <ServiceIcon slug={service.slug} className="mx-auto size-8 text-navy" />
              <h3 className="caps-sm mt-6 text-navy">{service.title}</h3>
              <p className="mx-auto mt-3 max-w-60 text-sm text-ink/70">{service.summary}</p>
              <TextLink href={`/services#${service.slug}`} className="mt-3 text-xs">
                Learn more
              </TextLink>
            </li>
          ))}
        </ul>
      </Section>

      {/* 3. Why UndaNova: text and photo */}
      <section aria-labelledby="why-title" className="bg-paper">
        <div className="grid lg:grid-cols-2">
          <div className="flex items-center px-5 py-18 sm:px-8 md:py-24 lg:pl-[max(2rem,calc((100vw-1200px)/2+2rem))] lg:pr-16">
            <div className="max-w-lg">
              <h2 id="why-title" className="caps text-2xl text-navy md:text-3xl">
                Why UndaNova
              </h2>
              <span aria-hidden className="mt-6 block h-px w-12 bg-navy/40" />
              <ul className="mt-8 space-y-6">
                {reasons.map((r) => (
                  <li key={r.title} className="reveal">
                    <h3 className="font-heading text-lg text-navy">{r.title}</h3>
                    <p className="mt-1 text-sm text-ink/70">{r.text}</p>
                  </li>
                ))}
              </ul>
              <Button href="/services" variant="secondary" className="mt-10">
                Our services
              </Button>
            </div>
          </div>
          <div className="relative min-h-80 lg:min-h-full">
            <Image
              src={photos.deskMinimal}
              alt="A calm, minimal desk with a laptop and notebooks"
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
              quality={60}
              placeholder="blur"
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* 4. Featured work: navy band */}
      <Section tone="navy" aria-labelledby="work-title">
        <SectionHeading
          id="work-title"
          title="Featured work"
          tone="dark"
          intro="A few of the projects we're working on."
        />
        <ul className="mt-14 grid gap-6 md:grid-cols-3">
          {featuredWork.map((item) => (
            <li key={item.slug} className="reveal flex">
              <WorkCard item={item} />
            </li>
          ))}
        </ul>
        <div className="mt-12 text-center">
          <Button href="/work" tone="dark" variant="secondary">
            All our work
          </Button>
        </div>
      </Section>

      {/* 5. How we work */}
      <Section aria-labelledby="process-title">
        <SectionHeading
          id="process-title"
          title="How we work"
          intro="Four clear steps, and you always know what comes next."
        />
        <ol className="mt-16 grid gap-12 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, i) => (
            <li key={step.title} className="reveal border-t border-navy/20 pt-6">
              <span className="font-heading text-3xl font-light text-navy/70">{String(i + 1).padStart(2, "0")}</span>
              <h3 className="caps-sm mt-4 text-navy">{step.title}</h3>
              <p className="mt-3 text-sm text-ink/70">{step.text}</p>
            </li>
          ))}
        </ol>
      </Section>

      {/* 6. Our promise */}
      <Section tone="paper" aria-labelledby="promise-title">
        <SectionHeading id="promise-title" title="Our promise" />
        <ul className="mt-14 grid gap-px bg-mist sm:grid-cols-2 lg:grid-cols-4">
          {commitments.map((c) => (
            <li key={c.title} className="reveal bg-white p-8 text-center">
              <h3 className="caps-sm text-navy">{c.title}</h3>
              <p className="mt-3 text-sm text-ink/70">{c.text}</p>
            </li>
          ))}
        </ul>
      </Section>

      {/* 7. Questions */}
      <Section aria-labelledby="faq-title">
        <Container className="grid gap-12 px-0! lg:grid-cols-[0.8fr_2fr]">
          <div>
            <SectionHeading id="faq-title" title="Good to know" align="left" />
            <TextLink href="/services#faq" className="mt-6 text-xs">
              All questions
            </TextLink>
          </div>
          <FaqList faqs={faqs.slice(0, 4)} />
        </Container>
      </Section>

      {/* 8. CTA */}
      <CTABand />
    </>
  );
}
