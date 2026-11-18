/**
 * Home: "Digital Backbone" hero (light + bold headline, hexagon tiles), continued
 * by the "Ocean Crown" sections (overlapping capability strip, why-choose tabs,
 * a split feature section and a dark card grid). See CLAUDE.md §10.
 */
import type { ReactNode } from "react";
import { HeroWaves, WaveEdge } from "@/components/brand-shapes";
import { Button } from "@/components/button";
import { CTABand } from "@/components/cta-band";
import { HexTile } from "@/components/hexagon";
import { PhotoBackground } from "@/components/photo-background";
import {
  ArrowIcon,
  BoltIcon,
  ChatIcon,
  CheckIcon,
  ChevronDownIcon,
  CodeIcon,
  PenIcon,
  RefreshIcon,
  RocketIcon,
  SearchIcon,
  ServiceIcon,
} from "@/components/icons";
import {
  BrowserFrame,
  ChatScreen,
  DashboardScreen,
  PhoneFrame,
  StatusScreen,
  Toast,
  WebsiteScreen,
} from "@/components/mockups";
import { ReasonTabs, type Reason } from "@/components/reason-tabs";
import { Container, SectionHeading } from "@/components/section";
import { TextLink } from "@/components/text-link";
import { WorkCard } from "@/components/work-card";
import { services } from "@/content/services";
import { featuredWork } from "@/content/work";

const hexes = [
  ...services.map((s) => ({ href: `/services#${s.slug}`, title: s.title, slug: s.slug })),
  { href: "/saas", title: "Ready-made systems", slug: "mobile-apps" },
];

const capabilities = [
  {
    title: "M-Pesa",
    text: "Get paid on any phone",
    icon: <ServiceIcon slug="ecommerce-mpesa" className="size-7" />,
    highlight: true,
  },
  { title: "WhatsApp & SMS", text: "Reach customers", icon: <ChatIcon className="size-7" /> },
  {
    title: "Dashboards",
    text: "Reports in one click",
    icon: <ServiceIcon slug="ngo-school-systems" className="size-7" />,
  },
  { title: "Fast pages", text: "Even on slow data", icon: <BoltIcon className="size-7" /> },
  { title: "Support", text: "After launch", icon: <RefreshIcon className="size-7" /> },
];

/** Stacked "photo collage" from the Ocean Crown reference, with a device in front. */
function Collage({ children }: { children: ReactNode }) {
  return (
    <div aria-hidden className="relative mx-auto max-w-md pb-4 pl-4">
      <div className="absolute inset-0 -translate-x-4 translate-y-4 bg-lilac/60" />
      <div className="absolute inset-0 -translate-x-2 translate-y-2 bg-plum/40" />
      <div className="relative flex h-80 items-center justify-center overflow-hidden bg-satin p-6">{children}</div>
    </div>
  );
}

const reasons: Reason[] = [
  {
    label: "M-Pesa & WhatsApp",
    title: "Built for M-Pesa, SMS and WhatsApp",
    text: "Your customers pay, get updates and reach you the way they already do, with no new apps to learn.",
    visual: (
      <Collage>
        <PhoneFrame className="w-40">
          <ChatScreen />
        </PhoneFrame>
        <Toast
          className="absolute bottom-6 right-4"
          title="Payment received"
          text="KES 2,500 via M-Pesa"
          icon={<CheckIcon className="size-9" />}
        />
      </Collage>
    ),
  },
  {
    label: "Fast on any phone",
    title: "Fast on any phone, even on slow data",
    text: "Pages load quickly on mid-range Android phones and mobile data, so customers don't give up and leave.",
    visual: (
      <Collage>
        <BrowserFrame className="w-full">
          <WebsiteScreen />
        </BrowserFrame>
      </Collage>
    ),
  },
  {
    label: "We know NGOs",
    title: "We understand NGOs and small businesses from the inside",
    text: "We've worked in them, so we build for how they really run: the reports, the people and the budgets.",
    visual: (
      <Collage>
        <BrowserFrame className="w-full">
          <DashboardScreen compact />
        </BrowserFrame>
      </Collage>
    ),
  },
  {
    label: "Ongoing support",
    title: "Ongoing support, not build-and-disappear",
    text: "We stay on after launch to keep things secure, updated and working, and we're a WhatsApp message away.",
    visual: (
      <Collage>
        <BrowserFrame className="w-full">
          <StatusScreen />
        </BrowserFrame>
      </Collage>
    ),
  },
];

const steps = [
  { title: "Discover", text: "We learn how your organisation works and what you need.", Icon: SearchIcon },
  { title: "Design", text: "We plan the pages and screens, and you approve them before we build.", Icon: PenIcon },
  { title: "Build", text: "We build it, test it on real phones and show you progress as we go.", Icon: CodeIcon },
  {
    title: "Launch & support",
    text: "We put it live, show your team how to use it and keep it running.",
    Icon: RocketIcon,
  },
];

export default function Home() {
  return (
    <>
      {/* 1. Hero: Digital Backbone */}
      <section aria-labelledby="hero-title" className="relative isolate overflow-hidden bg-satin text-white">
        <PhotoBackground photo="nairobi" priority />
        <HeroWaves className="top-[38%] -z-10 h-48 opacity-70" />
        <Container className="pb-36 pt-14 text-center md:pb-48 md:pt-20">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-white/80">
            Software studio · Made in Kenya
          </p>
          <h1 id="hero-title" className="mx-auto mt-6 max-w-5xl text-[52px] leading-[1] sm:text-7xl lg:text-[96px]">
            <span className="font-extralight">We build </span>
            <span className="font-bold text-gradient-plum">what&apos;s next.</span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-white/85 md:text-xl">
            UndaNova designs and builds websites, apps and business systems for growing businesses, NGOs and schools.
            Fast, reliable and made for how Kenya works.
          </p>
          <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
            <Button href="/contact" tone="dark">
              Start a project
              <ArrowIcon className="size-4" />
            </Button>
            <Button href="/work" tone="dark" variant="secondary">
              See our work
            </Button>
          </div>
          <a
            href="#capabilities"
            aria-label="Scroll to what's built in"
            className="mx-auto mt-6 inline-flex size-11 animate-float items-center justify-center rounded-full text-white/80 hover:text-white"
          >
            <ChevronDownIcon className="size-6" />
          </a>

          {/* Hexagon tiles: 3 + 2 honeycomb on desktop, two columns on phones */}
          <nav aria-label="What we build" className="mx-auto mt-10 max-w-3xl">
            <ul className="grid grid-cols-2 gap-3 sm:gap-4 lg:hidden">
              {hexes.map((h, i) => (
                <li key={h.href} className={i === hexes.length - 1 ? "col-span-2 mx-auto w-1/2" : ""}>
                  <HexTile
                    href={h.href}
                    title={h.title}
                    variant={i % 2 ? "plum" : "blue"}
                    icon={<ServiceIcon slug={h.slug} className="size-6" />}
                  />
                </li>
              ))}
            </ul>
            <div className="hidden lg:block">
              <ul className="flex justify-center gap-3">
                {hexes.slice(0, 3).map((h, i) => (
                  <li key={h.href} className="w-[220px]">
                    <HexTile
                      href={h.href}
                      title={h.title}
                      variant={i % 2 ? "plum" : "blue"}
                      icon={<ServiceIcon slug={h.slug} className="size-7" />}
                    />
                  </li>
                ))}
              </ul>
              <ul className="-mt-12 flex justify-center gap-3">
                {hexes.slice(3).map((h, i) => (
                  <li key={h.href} className="w-[220px]">
                    <HexTile
                      href={h.href}
                      title={h.title}
                      variant={i % 2 ? "blue" : "plum"}
                      icon={<ServiceIcon slug={h.slug} className="size-7" />}
                    />
                  </li>
                ))}
              </ul>
            </div>
          </nav>
        </Container>
        <WaveEdge fill="paper" />
      </section>

      {/* 2. Capability strip overlapping the hero: Ocean Crown */}
      <section id="capabilities" aria-label="What's built in" className="relative z-10 -mt-16 scroll-mt-24 md:-mt-24">
        <Container>
          <ul className="grid grid-cols-2 overflow-hidden bg-white shadow-2xl shadow-navy/20 sm:grid-cols-3 lg:grid-cols-5">
            {capabilities.map((c) => (
              <li
                key={c.title}
                className={`flex flex-col items-center gap-2 border-b border-r border-slate/15 px-4 py-7 text-center ${
                  c.highlight ? "col-span-2 bg-navy text-white sm:col-span-1" : "text-navy"
                }`}
              >
                <span className={c.highlight ? "text-lilac" : "text-plum"}>{c.icon}</span>
                <span className="font-heading text-lg font-semibold">{c.title}</span>
                <span className={`text-sm ${c.highlight ? "text-white/80" : "text-ink/70"}`}>{c.text}</span>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      {/* 3. Why choose us: tabs with a collage */}
      <section aria-labelledby="why-title" className="bg-paper py-20 md:py-28">
        <Container>
          <SectionHeading id="why-title" title="Why choose UndaNova?" align="center" divider />
          <div className="mt-12">
            <ReasonTabs reasons={reasons} />
          </div>
        </Container>
      </section>

      {/* 4. Split section: a studio with a difference + featured work */}
      <section aria-labelledby="work-title" className="bg-white py-20 md:py-28">
        <Container className="grid gap-12 lg:grid-cols-[0.8fr_2fr] lg:gap-14">
          <div className="reveal">
            <h2 id="work-title" className="text-[36px] leading-[1.05] text-navy md:text-5xl">
              A studio with a difference. <span className="text-plum">Built in Kenya.</span>
            </h2>
            <p className="mt-5 text-lg text-ink/75">
              We&apos;re a small, focused team. You talk to the person building your project, and we build it to work
              for the people who&apos;ll use it.
            </p>
            <p className="mt-6 font-heading text-sm font-semibold uppercase tracking-[0.18em] text-navy">
              Jennifer Kosencha
            </p>
            <p className="text-sm text-ink/70">Founder, UndaNova</p>
            <TextLink href="/work" className="mt-4">
              See all our work <ArrowIcon className="size-4" />
            </TextLink>
          </div>
          <ul className="grid gap-5 md:grid-cols-3">
            {featuredWork.map((item) => (
              <li key={item.slug} className="reveal flex">
                <WorkCard item={item} />
              </li>
            ))}
          </ul>
        </Container>
      </section>

      {/* 5. Dark card grid: how we work */}
      <section
        aria-labelledby="process-title"
        className="relative isolate overflow-hidden bg-night py-20 text-white md:py-28"
      >
        <PhotoBackground photo="team" />
        <svg
          aria-hidden
          viewBox="0 0 641 197"
          className="absolute -right-24 top-1/2 -z-10 w-[640px] -translate-y-1/2 opacity-[0.06]"
        >
          <path
            d="M1 174C115.6 -24.3 249.4 -45.1 335.3 80.2C411.7 184.5 526.4 174.1 641 17.6C535.9 205.4 392.6 247.2 302.9 128.2C230.3 32.2 125.2 48.9 1 174Z"
            className="fill-white"
          />
        </svg>
        <Container className="grid items-center gap-12 lg:grid-cols-[0.8fr_1.6fr]">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-white/70">How we work</p>
            <h2 id="process-title" className="mt-4 text-[40px] leading-[1.02] md:text-6xl">
              Clear steps.
              <br />
              <span className="text-gradient-plum">No surprises.</span>
            </h2>
            <p className="mt-5 max-w-sm text-lg text-white/80">
              You always know what&apos;s happening, and what comes next.
            </p>
            <a
              href="/contact"
              aria-label="Start a project"
              className="mt-8 inline-flex size-14 items-center justify-center rounded-full bg-white text-navy transition-transform hover:translate-x-1"
            >
              <ArrowIcon className="size-5" />
            </a>
          </div>
          <ol className="grid gap-4 sm:grid-cols-2">
            {steps.map((step, i) => (
              <li
                key={step.title}
                className={`reveal border p-6 transition-colors ${
                  i === 0 ? "border-white bg-white/[0.06]" : "border-white/20 hover:border-white/60"
                }`}
              >
                <div className="flex items-center justify-between">
                  <step.Icon className="size-8 text-lilac" />
                  <span aria-hidden className="font-heading text-sm text-white/60">
                    Step {i + 1}
                  </span>
                </div>
                <h3 className="mt-5 text-sm font-semibold uppercase tracking-[0.18em]">{step.title}</h3>
                <p className="mt-2 text-white/80">{step.text}</p>
              </li>
            ))}
          </ol>
        </Container>
      </section>

      {/* 6. CTA band */}
      <CTABand from="night" />
    </>
  );
}
