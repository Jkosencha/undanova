import type { Metadata } from "next";
import Image from "next/image";
import { Glow, HeroWaves, WaveEdge } from "@/components/brand-shapes";
import { Card } from "@/components/card";
import { CTABand } from "@/components/cta-band";
import { BoltIcon, CheckIcon, HeartHandIcon, RefreshIcon } from "@/components/icons";
import { Toast } from "@/components/mockups";
import { PageHeader } from "@/components/page-header";
import { Container, Section, SectionHeading } from "@/components/section";

export const metadata: Metadata = {
  title: "About",
  description:
    "UndaNova is a Kenyan software studio founded by Jennifer Kosencha, building practical software for businesses, NGOs and schools.",
};

const values = [
  {
    title: "Practical over flashy",
    text: "We build what helps you run your business, not what looks clever.",
    Icon: CheckIcon,
  },
  {
    title: "Built for local realities",
    text: "M-Pesa, WhatsApp, patchy networks and budget phones are where we start.",
    Icon: BoltIcon,
  },
  {
    title: "Honest timelines",
    text: "We tell you how long things will really take, and keep you updated.",
    Icon: HeartHandIcon,
  },
  { title: "Long-term support", text: "We're still here after launch, keeping things running.", Icon: RefreshIcon },
];

const words = [
  { word: "unda", lang: "Swahili", meaning: "to create, to build" },
  { word: "nova", lang: "Latin", meaning: "new" },
  { word: "unda nova", lang: "Latin", meaning: "a new wave" },
];

export default function AboutPage() {
  return (
    <>
      <PageHeader
        eyebrow="About UndaNova"
        next="white"
        title={
          <>
            <span className="font-light">Hi, I&apos;m Jennifer —</span>{" "}
            <span className="font-bold text-gradient-wave">I build software that works for real businesses.</span>
          </>
        }
      />

      <section aria-labelledby="story-title" className="bg-white py-14 md:py-24">
        <Container className="grid items-center gap-14 md:grid-cols-[minmax(0,380px)_1fr] md:gap-20">
          <div className="reveal relative mx-auto w-full max-w-80 md:max-w-none">
            <div aria-hidden className="absolute -bottom-4 -right-4 h-full w-full rounded-3xl bg-wave/15" />
            {/* TODO: replace with Jennifer's photo (e.g. public/about/jennifer.jpg via next/image). */}
            <div className="relative isolate flex aspect-[4/5] items-center justify-center overflow-hidden rounded-3xl bg-navy bg-dots">
              <Glow className="left-1/2 top-1/2 -z-10 size-72 -translate-x-1/2 -translate-y-1/2" />
              <Image src="/brand/undanova-icon.svg" alt="" width={641} height={197} className="w-1/2" />
            </div>
            <div aria-hidden className="absolute -bottom-6 -left-4 animate-float sm:-left-8">
              <Toast title="Jennifer Kosencha" text="Founder, UndaNova" icon={<CheckIcon className="size-9" />} />
            </div>
          </div>

          <div className="reveal max-w-2xl">
            <SectionHeading id="story-title" eyebrow="My story" title="Why I started UndaNova" />
            {/* TODO: Jennifer to confirm or rewrite this draft story. */}
            <div className="mt-6 space-y-4 text-lg">
              <p>
                I&apos;m a software developer, trained at Moringa School. I started UndaNova to build the kind of
                software I wished the organisations around me had.
              </p>
              <p>
                Through the Hands of Namelok Initiative, I&apos;ve seen how much time NGOs lose to spreadsheets,
                paperwork and reports put together by hand. And from running a small business myself, I know what it
                takes to find customers, get paid and keep going.
              </p>
              <p>
                That&apos;s what UndaNova is for: practical websites, apps and systems that fit how businesses, NGOs and
                schools in Kenya really work.
              </p>
            </div>
          </div>
        </Container>
      </section>

      <section
        aria-labelledby="name-title"
        className="relative isolate overflow-hidden bg-navy bg-dots pb-28 pt-20 text-white md:pb-40 md:pt-28"
      >
        <WaveEdge fill="white" flip className="bottom-auto! top-[-1px] rotate-180" />
        <Glow className="-left-40 top-1/4 -z-10 size-[32rem]" />
        <HeroWaves className="bottom-10 -z-10 h-40 opacity-60" />
        <Container>
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-white/70">The name</p>
          <h2 id="name-title" className="mt-4 text-[64px] leading-none sm:text-8xl lg:text-[140px]">
            <span className="font-light">Unda</span>
            <span className="font-bold text-gradient-wave">Nova</span>
          </h2>
          <dl className="mt-10 grid gap-4 md:grid-cols-3">
            {words.map((w) => (
              <div key={w.word} className="reveal rounded-3xl border border-white/10 bg-white/[0.04] p-6">
                <dt className="font-heading text-2xl font-semibold italic">{w.word}</dt>
                <dd className="mt-2 text-white/80">
                  <span className="text-sm uppercase tracking-[0.18em] text-white/60">{w.lang}</span>
                  <br />
                  <span className="text-lg">{w.meaning}</span>
                </dd>
              </div>
            ))}
          </dl>
          <p className="mt-10 max-w-3xl text-xl text-white/85 md:text-2xl">
            <em>Unda</em> is Swahili for &lsquo;create&rsquo;. <em>Nova</em> is Latin for &lsquo;new&rsquo;. Together,
            UndaNova means creating something new — and in Latin, <em>unda nova</em> means &lsquo;new wave&rsquo;.
            That&apos;s what we want to bring to African businesses.
          </p>
        </Container>
        <WaveEdge fill="paper" />
      </section>

      <Section aria-labelledby="values-title">
        <SectionHeading id="values-title" eyebrow="Our values" title="What we believe" />
        <ul className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {values.map((value, i) => (
            <li key={value.title} className="reveal flex">
              <Card className="w-full p-6">
                <div className="flex items-center justify-between">
                  <span className="inline-flex size-12 items-center justify-center rounded-2xl bg-navy text-white">
                    <value.Icon className="size-6" />
                  </span>
                  <span aria-hidden className="font-heading text-4xl font-bold text-navy/10">
                    0{i + 1}
                  </span>
                </div>
                <h3 className="mt-6 text-2xl text-navy">{value.title}</h3>
                <p className="mt-2 text-ink/70">{value.text}</p>
              </Card>
            </li>
          ))}
        </ul>
      </Section>

      <CTABand />
    </>
  );
}
