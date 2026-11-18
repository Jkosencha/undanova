import { Button } from "@/components/button";
import { Card } from "@/components/card";
import { CTABand } from "@/components/cta-band";
import { ArrowIcon, CheckIcon } from "@/components/icons";
import { Section, SectionHeading } from "@/components/section";
import { TextLink } from "@/components/text-link";
import { WaveDivider } from "@/components/wave-divider";
import { WorkCard } from "@/components/work-card";
import { services } from "@/content/services";
import { featuredWork } from "@/content/work";

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
      <section className="bg-navy text-white" aria-labelledby="hero-title">
        <div className="mx-auto w-full max-w-[1200px] px-4 pt-16 sm:px-6 md:pt-24">
          <h1 id="hero-title" className="max-w-3xl text-[40px] md:text-[56px]">
            We build what&apos;s next.
          </h1>
          <p className="mt-5 max-w-2xl text-lg text-white/80 md:text-xl">
            UndaNova designs and builds websites, apps and business systems for growing businesses, NGOs and
            schools — fast, reliable and made for how Kenya works.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button href="/contact" tone="dark">
              Start a project
            </Button>
            <Button href="/work" tone="dark" variant="secondary">
              See our work
            </Button>
          </div>
        </div>
        <WaveDivider className="mt-12 md:mt-16" />
      </section>

      {/* 2. What we build */}
      <Section aria-labelledby="build-title">
        <SectionHeading id="build-title" title="What we build" intro="Practical software for the way your organisation works." />
        <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service) => (
            <li key={service.slug} className="flex">
              <Card href={`/services#${service.slug}`} className="flex w-full flex-col">
                <h3 className="text-xl text-navy">{service.title}</h3>
                <p className="mt-2 flex-1 text-ink/70">{service.summary}</p>
                <span className="mt-4 inline-flex items-center gap-1 font-medium text-navy">
                  Learn more <ArrowIcon className="size-4" />
                </span>
              </Card>
            </li>
          ))}
        </ul>
      </Section>

      {/* 3. Why UndaNova */}
      <Section tone="white" aria-labelledby="why-title">
        <SectionHeading id="why-title" title="Why UndaNova" />
        <ul className="mt-10 grid gap-8 sm:grid-cols-2">
          {reasons.map((reason) => (
            <li key={reason.title} className="flex gap-4">
              <CheckIcon className="size-6 shrink-0" />
              <div>
                <h3 className="text-xl text-navy">{reason.title}</h3>
                <p className="mt-1 text-ink/70">{reason.text}</p>
              </div>
            </li>
          ))}
        </ul>
      </Section>

      {/* 4. Featured work */}
      <Section aria-labelledby="work-title">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <SectionHeading id="work-title" title="Featured work" intro="A few of the projects we're working on." />
          <TextLink href="/work">
            See all our work <ArrowIcon className="size-4" />
          </TextLink>
        </div>
        <ul className="mt-10 grid gap-4 md:grid-cols-3">
          {featuredWork.map((item) => (
            <li key={item.slug} className="flex">
              <WorkCard item={item} />
            </li>
          ))}
        </ul>
      </Section>

      {/* 5. How we work */}
      <Section tone="white" aria-labelledby="process-title">
        <SectionHeading id="process-title" title="How we work" intro="Four clear steps, and you know what's happening at each one." />
        <ol className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, i) => (
            <li key={step.title}>
              <span
                aria-hidden
                className="inline-flex size-10 items-center justify-center rounded-full bg-navy font-heading text-lg text-white"
              >
                {i + 1}
              </span>
              <h3 className="mt-4 text-xl text-navy">{step.title}</h3>
              <p className="mt-1 text-ink/70">{step.text}</p>
            </li>
          ))}
        </ol>
      </Section>

      {/* 6. CTA band */}
      <CTABand />
    </>
  );
}
