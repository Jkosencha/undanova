/**
 * Services: "Snapview" design: phone-in-hand hero, icon band, features arranged
 * around a phone, then full details for each service. See CLAUDE.md §10.
 */
import type { Metadata } from "next";
import { HeroWaves } from "@/components/brand-shapes";
import { Button } from "@/components/button";
import { CTAStrip } from "@/components/cta-strip";
import { BoltIcon, CheckIcon, RefreshIcon, ServiceIcon, WhatsAppIcon } from "@/components/icons";
import { CheckoutScreen } from "@/components/mockups";
import { PhoneInHand } from "@/components/phone-in-hand";
import { Container, SectionHeading } from "@/components/section";
import { comingSoon, services } from "@/content/services";
import { whatsappUrl } from "@/lib/site";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Business websites, NGO and school systems, e-commerce with M-Pesa, and support and maintenance from UndaNova.",
};

// TODO: confirm with Jennifer whether to add "Starting from" prices later. No prices for now.

const promises = [
  { title: "Mobile-first", text: "Designed for the phones your customers really use.", Icon: BoltIcon },
  { title: "M-Pesa ready", text: "Payments, SMS and WhatsApp built in where you need them.", Icon: CheckIcon },
  { title: "Support after launch", text: "We stay on to keep everything secure and running.", Icon: RefreshIcon },
];

const integrations = ["M-Pesa", "WhatsApp", "SMS", "Google Maps", "PDF & CSV reports"];

// Five features around the phone: the four services and mobile apps.
const around = [
  ...services.map((s) => ({ slug: s.slug, title: s.title, text: s.summary })),
  {
    slug: comingSoon.slug,
    title: comingSoon.title,
    text: comingSoon.note,
  },
];

function Feature({ item, align }: { item: (typeof around)[number]; align: "left" | "right" }) {
  return (
    <li className={`reveal flex gap-4 ${align === "right" ? "lg:flex-row-reverse lg:text-right" : ""}`}>
      <span className="inline-flex size-11 shrink-0 items-center justify-center rounded-full border border-navy/20 text-plum">
        <ServiceIcon slug={item.slug} className="size-5" />
      </span>
      <div>
        <a
          href={`#${item.slug === comingSoon.slug ? "apps" : item.slug}`}
          className="text-lg font-semibold text-navy hover:underline"
        >
          {item.title}
        </a>
        <p className="mt-1 text-sm text-ink/70">{item.text}</p>
      </div>
    </li>
  );
}

export default function ServicesPage() {
  return (
    <>
      {/* 1. Hero: text left, phone in hand right */}
      <section aria-labelledby="services-title" className="relative isolate overflow-hidden bg-satin text-white">
        <div aria-hidden className="absolute inset-0 -z-10 bg-dots opacity-40" />
        <HeroWaves className="bottom-0 -z-10 h-32 opacity-50" />
        <Container className="grid items-end gap-6 pt-14 md:grid-cols-[1.1fr_1fr] md:pt-20">
          <div className="pb-14 md:pb-24">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-white/80">Services</p>
            <h1 id="services-title" className="mt-5 text-[44px] leading-[1.05] md:text-[64px]">
              <span className="font-extralight">Software that fits</span>{" "}
              <span className="font-bold text-gradient-plum">how you work.</span>
            </h1>
            <p className="mt-5 max-w-lg text-lg text-white/85">
              Websites, systems and online shops for businesses, NGOs and schools. Pick what you need, or tell us the
              problem and we&apos;ll suggest the right fit.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button href="/contact" tone="dark">
                Get a quote
              </Button>
              <Button href="#what-we-build" tone="dark" variant="secondary">
                See services
              </Button>
            </div>
          </div>
          <PhoneInHand className="mx-auto -mb-16 w-64 sm:w-72 md:-mb-20 md:w-80">
            <CheckoutScreen />
          </PhoneInHand>
        </Container>
      </section>

      {/* 2. Icon band */}
      <section aria-label="What every project includes" className="relative bg-lilac py-14 md:py-16">
        <Container>
          <ul className="grid gap-10 text-center sm:grid-cols-3">
            {promises.map((p) => (
              <li key={p.title} className="reveal">
                <span className="mx-auto inline-flex size-16 items-center justify-center rounded-full border-2 border-navy/40 text-navy">
                  <p.Icon className="size-7" />
                </span>
                <h2 className="mt-4 text-sm font-semibold uppercase tracking-[0.18em] text-navy">{p.title}</h2>
                <p className="mx-auto mt-2 max-w-xs text-navy/80">{p.text}</p>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      {/* 3. What we build: features around a phone */}
      <section id="what-we-build" aria-labelledby="build-title" className="scroll-mt-20 bg-white py-20 md:py-28">
        <Container>
          <SectionHeading
            id="build-title"
            title="What we build"
            intro="Five ways we help. Tap one to see what's included."
            align="center"
            divider
          />
          <div className="mt-14 grid items-center gap-10 lg:grid-cols-[1fr_auto_1fr] lg:gap-14">
            <ul className="space-y-10">
              {around.slice(0, 3).map((item) => (
                <Feature key={item.slug} item={item} align="right" />
              ))}
            </ul>
            <div aria-hidden className="relative mx-auto hidden w-64 lg:block">
              <div className="absolute left-1/2 top-1/2 size-[22rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-paper" />
              <div className="relative aspect-[9/19] rounded-[2.6rem] border-[10px] border-navy bg-satin p-6 shadow-2xl shadow-navy/30">
                <div className="flex h-full flex-col items-center justify-center gap-4 text-center text-white">
                  <ServiceIcon slug="business-websites" className="size-10 text-lilac" />
                  <p className="font-heading text-2xl font-semibold">Built for your phone first</p>
                </div>
              </div>
            </div>
            <ul className="space-y-10">
              {around.slice(3).map((item) => (
                <Feature key={item.slug} item={item} align="left" />
              ))}
            </ul>
          </div>
        </Container>
      </section>

      {/* 4. Service details */}
      <div className="bg-paper">
        {services.map((service, i) => (
          <section
            key={service.slug}
            id={service.slug}
            aria-labelledby={`${service.slug}-title`}
            className={`scroll-mt-16 py-14 md:scroll-mt-20 md:py-20 ${i % 2 ? "bg-white" : ""}`}
          >
            <Container className="grid gap-10 lg:grid-cols-[1fr_1.1fr] lg:gap-16">
              <div className="reveal">
                <div className="flex items-center gap-4">
                  <span className="inline-flex size-12 items-center justify-center rounded-2xl bg-navy text-white">
                    <ServiceIcon slug={service.slug} className="size-6" />
                  </span>
                  {/* Drawn as CSS content: purely decorative, so it isn't part of the page text. */}
                  <span
                    aria-hidden
                    data-num={`0${i + 1}`}
                    className="font-heading text-5xl font-bold text-navy/10 before:content-[attr(data-num)]"
                  />
                </div>
                <h2 id={`${service.slug}-title`} className="mt-5 text-[34px] text-navy md:text-5xl">
                  {service.title}
                </h2>
                <p className="mt-3 text-xl font-medium text-navy">{service.summary}</p>
                <p className="mt-4 text-ink/80">
                  <span className="font-semibold text-navy">Who it&apos;s for: </span>
                  {service.audience}
                </p>
                <Button href={`/contact?service=${service.slug}`} className="mt-8 w-full sm:w-auto">
                  Get a quote
                </Button>
              </div>
              <div className="reveal rounded-3xl bg-satin p-7 text-white md:p-9">
                <h3 className="text-sm font-semibold uppercase tracking-[0.18em] text-white/70">
                  What&apos;s included
                </h3>
                <ul className="mt-5 grid gap-4 sm:grid-cols-2">
                  {service.included.map((item) => (
                    <li key={item} className="flex gap-3">
                      <span aria-hidden className="mt-2 size-2 shrink-0 rounded-full bg-lilac" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Container>
          </section>
        ))}
      </div>

      {/* 5. Satin band: mobile apps, coming soon */}
      <section
        id="apps"
        aria-labelledby="apps-title"
        className="relative isolate scroll-mt-20 overflow-hidden bg-satin-plum py-16 text-center text-white md:py-20"
      >
        {/* Navy veil keeps white text above AA contrast on the lighter plum. */}
        <div aria-hidden className="absolute inset-0 -z-10 bg-navy/40" />
        <Container>
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-white">Coming soon</p>
          <h2 id="apps-title" className="mt-4 text-[34px] md:text-5xl">
            {comingSoon.title}
          </h2>
          <span aria-hidden className="mx-auto mt-5 block h-0.5 w-14 rounded-full bg-white/70" />
          <p className="mx-auto mt-5 max-w-lg text-lg font-medium text-white">{comingSoon.note}</p>
          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <Button href={`/contact?service=${comingSoon.slug}`} tone="dark">
              Tell us your idea
            </Button>
            <Button href={whatsappUrl("Hi UndaNova, I have an app idea.")} tone="dark" variant="secondary">
              <WhatsAppIcon className="size-5" />
              WhatsApp us
            </Button>
          </div>
        </Container>
      </section>

      {/* 6. Works-with band */}
      <section aria-labelledby="works-with" className="bg-navy py-10">
        <Container className="flex flex-col items-center gap-6 md:flex-row md:justify-between">
          <h2 id="works-with" className="text-sm font-semibold uppercase tracking-[0.18em] text-white/70">
            Works with
          </h2>
          <ul className="flex flex-wrap justify-center gap-x-8 gap-y-3 md:justify-end">
            {integrations.map((name) => (
              <li key={name} className="font-heading text-xl font-semibold text-white/90">
                {name}
              </li>
            ))}
          </ul>
        </Container>
      </section>

      {/* 7. Closing strip */}
      <CTAStrip title="Not sure which service you need?" text="Tell us the problem. We'll suggest the right fit." />
    </>
  );
}
