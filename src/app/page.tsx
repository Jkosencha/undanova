import { Eyebrow, Glow, HeroWaves, WaveEdge } from "@/components/brand-shapes";
import { Button } from "@/components/button";
import { Card } from "@/components/card";
import { CTABand } from "@/components/cta-band";
import { ArrowIcon, BoltIcon, ChatIcon, CheckIcon, HeartHandIcon, RefreshIcon, ServiceIcon } from "@/components/icons";
import { BrowserFrame, ChatScreen, CheckoutScreen, DashboardScreen, PhoneFrame, Toast } from "@/components/mockups";
import { PreviewPanel, previewForService } from "@/components/previews";
import { Accent, Container, Section, SectionHeading } from "@/components/section";
import { TextLink } from "@/components/text-link";
import { WorkCard } from "@/components/work-card";
import { services } from "@/content/services";
import { featuredWork } from "@/content/work";

const reasons = [
  {
    title: "Built for M-Pesa, SMS and WhatsApp",
    text: "Your customers pay, get updates and reach you the way they already do.",
    Icon: ChatIcon,
  },
  {
    title: "Fast on any phone, even on slow data",
    text: "Pages load quickly on mid-range Android phones and mobile data.",
    Icon: BoltIcon,
  },
  {
    title: "We understand NGOs and small businesses from the inside",
    text: "We've worked in them, so we build for how they really run.",
    Icon: HeartHandIcon,
  },
  {
    title: "Ongoing support, not build-and-disappear",
    text: "We stay on after launch to keep things secure, updated and working.",
    Icon: RefreshIcon,
  },
];

const steps = [
  { title: "Discover", text: "We learn how your organisation works and what you need." },
  { title: "Design", text: "We plan the pages and screens, and you approve them before we build." },
  { title: "Build", text: "We build it, test it on real phones and show you progress as we go." },
  { title: "Launch & support", text: "We put it live, show your team how to use it and keep it running." },
];

const promises = ["M-Pesa built in", "Fast on slow data", "Reply within 24 hours"];

// Bento layout for the four services: big website tile, tall shop tile, two small tiles.
const tileLayout: Record<string, string> = {
  "business-websites": "lg:col-span-2 lg:row-start-1",
  "ecommerce-mpesa": "lg:col-start-3 lg:row-span-2 lg:row-start-1",
  "ngo-school-systems": "lg:col-start-1 lg:row-start-2",
  "support-maintenance": "lg:col-start-2 lg:row-start-2",
};

function Reason({ reason, align }: { reason: (typeof reasons)[number]; align: "left" | "right" }) {
  return (
    <li className={`reveal flex gap-4 ${align === "right" ? "lg:flex-row-reverse lg:text-right" : ""}`}>
      <span className="inline-flex size-12 shrink-0 items-center justify-center rounded-2xl bg-navy text-white">
        <reason.Icon className="size-6" />
      </span>
      <div>
        <h3 className="text-xl text-navy">{reason.title}</h3>
        <p className="mt-1 text-ink/70">{reason.text}</p>
      </div>
    </li>
  );
}

export default function Home() {
  return (
    <>
      {/* 1. Hero */}
      <section aria-labelledby="hero-title" className="relative isolate overflow-hidden bg-navy bg-dots text-white">
        <Glow className="-left-40 -top-40 -z-10 size-[36rem]" />
        <Glow className="-right-32 top-1/3 -z-10 size-[30rem]" />
        <Container className="grid items-center gap-12 pb-32 pt-12 md:pb-44 md:pt-20 lg:grid-cols-[1.05fr_1fr]">
          <div>
            <Eyebrow tone="dark">Software studio · Made in Kenya</Eyebrow>
            <h1 id="hero-title" className="mt-6 text-[48px] leading-[1.02] sm:text-6xl lg:text-[80px]">
              <span className="font-light">We build</span>
              <br />
              <span className="font-bold text-gradient-wave">what&apos;s next.</span>
            </h1>
            <p className="mt-6 max-w-xl text-lg text-white/80 md:text-xl">
              UndaNova designs and builds websites, apps and business systems for growing businesses, NGOs and schools —
              fast, reliable and made for how Kenya works.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button href="/contact" tone="dark">
                Start a project
                <ArrowIcon className="size-4" />
              </Button>
              <Button href="/work" tone="dark" variant="secondary">
                See our work
              </Button>
            </div>
            <ul className="mt-10 flex flex-wrap gap-x-6 gap-y-3 text-sm text-white/80">
              {promises.map((p) => (
                <li key={p} className="flex items-center gap-2">
                  <CheckIcon className="size-5" />
                  {p}
                </li>
              ))}
            </ul>
          </div>

          {/* Devices: a dashboard in the browser, the shop on a phone, a payment toast */}
          <div aria-hidden className="relative mx-auto h-[380px] w-full max-w-[540px] animate-rise sm:h-[460px]">
            <BrowserFrame className="absolute right-0 top-4 w-[90%]">
              <DashboardScreen />
            </BrowserFrame>
            <div className="absolute bottom-0 left-0 w-[46%] max-w-[170px] animate-float sm:w-[34%]">
              <PhoneFrame className="w-full">
                <CheckoutScreen />
              </PhoneFrame>
            </div>
            <Toast
              className="absolute bottom-10 right-0 animate-float-delayed sm:bottom-16"
              title="Payment received"
              text="KES 2,500 via M-Pesa"
              icon={<CheckIcon className="size-9" />}
            />
          </div>
        </Container>
        <HeroWaves className="bottom-6 -z-10 h-40 md:h-56" />
        <WaveEdge fill="paper" />
      </section>

      {/* 2. What we build: bento grid */}
      <Section aria-labelledby="build-title">
        <SectionHeading
          id="build-title"
          eyebrow="Services"
          title={
            <>
              What we <Accent>build</Accent>
            </>
          }
          intro="Practical software for the way your organisation works."
        />
        <ul className="mt-12 grid auto-rows-auto gap-4 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <li key={service.slug} className={`reveal flex ${tileLayout[service.slug] ?? ""}`}>
              <Card href={`/services#${service.slug}`} className="flex w-full flex-col p-3">
                <PreviewPanel
                  kind={previewForService(service.slug)}
                  className={service.slug === "ecommerce-mpesa" ? "min-h-56 flex-1" : "h-56"}
                />
                <div className="flex items-start gap-4 px-3 pb-3 pt-5">
                  <span className="inline-flex size-11 shrink-0 items-center justify-center rounded-xl border border-navy/15 text-navy">
                    <ServiceIcon slug={service.slug} className="size-6" />
                  </span>
                  <div className="flex-1">
                    <h3 className="text-2xl text-navy">{service.title}</h3>
                    <p className="mt-1 text-ink/70">{service.summary}</p>
                  </div>
                  <ArrowIcon className="mt-2 size-5 shrink-0 text-navy transition-transform group-hover:translate-x-1" />
                </div>
              </Card>
            </li>
          ))}
        </ul>
      </Section>

      {/* 3. Why UndaNova: phone in the middle, reasons around it */}
      <Section tone="white" edge="navy" flipEdge aria-labelledby="why-title">
        <SectionHeading
          id="why-title"
          eyebrow="Why UndaNova"
          align="center"
          title={
            <>
              Made for how <Accent>Kenya</Accent> works
            </>
          }
        />
        <div className="mt-14 grid items-center gap-10 lg:grid-cols-[1fr_auto_1fr] lg:gap-14">
          <ul className="space-y-10">
            {reasons.slice(0, 2).map((r) => (
              <Reason key={r.title} reason={r} align="right" />
            ))}
          </ul>
          <div aria-hidden className="relative mx-auto w-56 sm:w-64">
            <div className="absolute left-1/2 top-1/2 -z-0 size-80 -translate-x-1/2 sm:size-96 -translate-y-1/2 rounded-full bg-paper" />
            <div className="absolute left-1/2 top-1/2 size-[17rem] -translate-x-1/2 sm:size-[19rem] -translate-y-1/2 rounded-full border border-dashed border-navy/20" />
            <PhoneFrame className="relative w-full">
              <ChatScreen />
            </PhoneFrame>
          </div>
          <ul className="space-y-10">
            {reasons.slice(2).map((r) => (
              <Reason key={r.title} reason={r} align="left" />
            ))}
          </ul>
        </div>
      </Section>

      {/* 4. Featured work (navy) */}
      <Section tone="navy" textured edge="paper" className="pt-12! md:pt-16!" aria-labelledby="work-title">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <SectionHeading
            id="work-title"
            tone="dark"
            eyebrow="Our work"
            title={
              <>
                Featured <Accent tone="dark">projects</Accent>
              </>
            }
            intro="A few of the projects we're working on."
          />
          <TextLink href="/work" tone="dark" className="shrink-0">
            See all our work <ArrowIcon className="size-4" />
          </TextLink>
        </div>
        <ul className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {featuredWork.map((item) => (
            <li key={item.slug} className="reveal flex">
              <WorkCard item={item} tone="dark" />
            </li>
          ))}
        </ul>
      </Section>

      {/* 5. How we work: numbered steps joined by a line */}
      <Section aria-labelledby="process-title">
        <SectionHeading
          id="process-title"
          eyebrow="How we work"
          align="center"
          title="Four clear steps"
          intro="You always know what's happening, and what comes next."
        />
        <ol className="relative mt-14 grid gap-10 lg:grid-cols-4 lg:gap-8">
          {/* Connecting line: vertical on mobile, horizontal on desktop */}
          <span aria-hidden className="absolute bottom-6 left-7 top-6 w-0.5 bg-navy/15 lg:hidden" />
          <span
            aria-hidden
            className="absolute left-[12.5%] right-[12.5%] top-7 hidden h-0.5 bg-gradient-to-r from-navy via-wave to-navy lg:block"
          />
          {steps.map((step, i) => (
            <li key={step.title} className="reveal relative flex gap-5 lg:flex-col lg:items-center lg:text-center">
              <span className="relative inline-flex size-14 shrink-0 items-center justify-center rounded-full bg-navy font-heading text-xl font-semibold text-white ring-8 ring-paper">
                {i + 1}
              </span>
              <div>
                <h3 className="text-2xl text-navy">{step.title}</h3>
                <p className="mt-1 text-ink/70">{step.text}</p>
              </div>
            </li>
          ))}
        </ol>
      </Section>

      {/* 6. CTA band */}
      <CTABand />
    </>
  );
}
