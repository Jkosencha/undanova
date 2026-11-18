/**
 * SaaS: "Equinox" design: dark page, pill badge, serif-italic accent word,
 * glowing ribbon, trust row and glass product cards. See CLAUDE.md §10.
 * TODO: all product wording is placeholder (src/content/saas.ts).
 */
import type { Metadata } from "next";
import { useId } from "react";
import { Button } from "@/components/button";
import { CTABand } from "@/components/cta-band";
import { ArrowIcon, CheckIcon, RefreshIcon, ServiceIcon } from "@/components/icons";
import { Container } from "@/components/section";
import { TextLink } from "@/components/text-link";
import { saasProducts } from "@/content/saas";

export const metadata: Metadata = {
  title: "Ready-made systems",
  description: "NGO, POS and restaurant systems from UndaNova: ready-made software you can sign up for. Coming soon.",
};

const trust = [
  { label: "Built for Kenya", Icon: CheckIcon },
  { label: "M-Pesa ready", Icon: () => <ServiceIcon slug="ecommerce-mpesa" className="size-4" /> },
  { label: "Support included", Icon: RefreshIcon },
];

const productIcon: Record<string, string> = {
  "ngo-system": "ngo-school-systems",
  "pos-system": "ecommerce-mpesa",
  "restaurant-system": "business-websites",
};

/** The glowing satin ribbon behind the hero (static SVG: cheap to paint). */
function Ribbon() {
  const id = `rb${useId().replace(/[^a-zA-Z0-9_-]/g, "")}`;
  return (
    <svg aria-hidden viewBox="0 0 1200 420" preserveAspectRatio="xMidYMid slice" className="h-full w-full">
      <defs>
        <linearGradient id={`${id}a`} x1="0" y1="0" x2="1" y2="0.4">
          <stop offset="0" className="[stop-color:var(--color-navy)]" />
          <stop offset="0.45" className="[stop-color:var(--color-plum)]" />
          <stop offset="0.7" className="[stop-color:var(--color-lilac)]" />
          <stop offset="1" className="[stop-color:var(--color-navy)]" />
        </linearGradient>
        <linearGradient id={`${id}b`} x1="0" y1="1" x2="1" y2="0">
          <stop offset="0" className="[stop-color:var(--color-plum)]" stopOpacity="0" />
          <stop offset="0.5" className="[stop-color:var(--color-lilac)]" stopOpacity="0.9" />
          <stop offset="1" className="[stop-color:var(--color-plum)]" stopOpacity="0" />
        </linearGradient>
        <filter id={`${id}blur`} x="-10%" y="-30%" width="120%" height="160%">
          <feGaussianBlur stdDeviation="22" />
        </filter>
      </defs>
      {/* Soft glow underneath */}
      <path
        d="M-50 300 C 200 120, 420 80, 620 220 S 1000 360, 1250 120 L 1250 220 C 1000 420, 800 380, 620 290 S 200 220, -50 380 Z"
        fill={`url(#${id}a)`}
        opacity="0.55"
        filter={`url(#${id}blur)`}
      />
      {/* The ribbon */}
      <path
        d="M-50 300 C 200 120, 420 80, 620 220 S 1000 360, 1250 120 L 1250 170 C 1000 400, 800 360, 620 270 S 200 190, -50 350 Z"
        fill={`url(#${id}a)`}
        opacity="0.9"
      />
      {/* Highlights */}
      <path
        d="M-50 300 C 200 120, 420 80, 620 220 S 1000 360, 1250 120"
        fill="none"
        stroke={`url(#${id}b)`}
        strokeWidth="3"
      />
      <path
        d="M-50 350 C 200 190, 420 170, 620 270 S 1000 400, 1250 170"
        fill="none"
        className="stroke-white/20"
        strokeWidth="1.5"
      />
    </svg>
  );
}

export default function SaasPage() {
  return (
    <div className="bg-night text-white">
      {/* 1. Hero */}
      <section aria-labelledby="saas-title" className="relative isolate overflow-hidden pt-14 md:pt-20">
        <div aria-hidden className="absolute inset-x-0 top-0 -z-10 h-[34rem] bg-satin opacity-60" />
        <Container className="text-center">
          <a
            href="#products"
            className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 p-1 pr-3 text-sm text-white/90 hover:bg-white/10"
          >
            <span className="rounded-full bg-plum px-2.5 py-0.5 text-xs font-semibold text-white">New</span>
            Ready-made systems are coming
            <ArrowIcon className="size-3.5" />
          </a>
          <h1 id="saas-title" className="mx-auto mt-7 max-w-4xl text-[44px] leading-[1.05] md:text-7xl">
            Run your business with{" "}
            <span className="font-serif font-normal tracking-normal text-lilac">ready-made systems</span>
          </h1>
          {/* TODO: placeholder intro: Jennifer to confirm. */}
          <p className="mx-auto mt-6 max-w-2xl text-lg text-white/80">
            Software for NGOs, shops and restaurants that you sign up for and start using, with no custom build needed.
            Built in Kenya, with M-Pesa where it matters.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button href="/contact?service=ngo-system" tone="dark">
              Join the waitlist
            </Button>
            <TextLink href="/contact" tone="dark">
              Ask for a demo <ArrowIcon className="size-4" />
            </TextLink>
          </div>
          <ul className="mx-auto mt-12 flex max-w-2xl flex-col items-center justify-center gap-4 text-sm text-white/85 sm:flex-row sm:gap-0 sm:divide-x sm:divide-white/15">
            {trust.map(({ label, Icon }) => (
              <li key={label} className="flex items-center gap-3 sm:px-6">
                <span className="inline-flex size-8 items-center justify-center rounded-lg border border-white/15 bg-white/5">
                  <Icon className="size-4" />
                </span>
                {label}
              </li>
            ))}
          </ul>
        </Container>
        <div className="relative -mt-4 h-64 sm:h-80 md:-mt-10 md:h-[26rem]">
          <Ribbon />
        </div>
      </section>

      {/* 2. Products as glass cards */}
      <section
        id="products"
        aria-labelledby="products-title"
        className="scroll-mt-20 border-t border-white/10 py-20 md:py-28"
      >
        <Container>
          <div className="text-center">
            <span className="inline-flex rounded-full border border-white/15 bg-white/5 px-3.5 py-1 text-sm text-white/85">
              Why UndaNova systems
            </span>
            <h2 id="products-title" className="mx-auto mt-5 max-w-3xl text-[36px] leading-[1.05] md:text-5xl">
              Everything you need, in{" "}
              <span className="font-serif font-normal tracking-normal text-lilac">one place</span>
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-white/75">
              Three systems, each built for how Kenyan organisations really work.
            </p>
          </div>

          <ul className="mt-14 grid gap-5 md:grid-cols-3">
            {saasProducts.map((product) => (
              <li
                key={product.slug}
                className="reveal group relative flex flex-col overflow-hidden border border-white/10 bg-gradient-to-b from-navy/80 to-night p-7 transition-colors hover:border-plum/60"
              >
                <div aria-hidden className="absolute -right-16 -top-16 size-48 rounded-full glow-plum opacity-60" />
                <span className="relative inline-flex size-14 items-center justify-center rounded-2xl bg-gradient-to-br from-plum to-navy text-white shadow-lg shadow-plum/30">
                  <ServiceIcon slug={productIcon[product.slug]} className="size-7" />
                </span>
                <h3 className="relative mt-6 text-2xl">{product.title}</h3>
                <p className="relative mt-2 font-medium text-lilac">{product.tagline}</p>
                <p className="relative mt-3 text-white/75">{product.description}</p>
                <ul className="relative mt-5 space-y-2 text-sm text-white/80">
                  {product.features.map((f) => (
                    <li key={f} className="flex gap-2">
                      <span aria-hidden className="mt-2 size-1.5 shrink-0 rounded-full bg-lilac" />
                      {f}
                    </li>
                  ))}
                </ul>
                <TextLink href={`/contact?service=${product.slug}`} tone="dark" className="relative mt-6">
                  Join the waitlist <ArrowIcon className="size-4" />
                </TextLink>
              </li>
            ))}
          </ul>

          <div className="mt-12 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button href="/contact" tone="dark">
              Talk to us
            </Button>
            <TextLink href="/services" tone="dark">
              Need something custom? See our services <ArrowIcon className="size-4" />
            </TextLink>
          </div>
        </Container>
      </section>

      <CTABand from="night" />
    </div>
  );
}
