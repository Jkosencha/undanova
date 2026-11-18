/**
 * About: "Modall" design: a dark rounded hero card holding a bento of tiles,
 * then a white panel with the story, illustrated cards and the name. See CLAUDE.md §10.
 */
import type { Metadata } from "next";
import Image from "next/image";
import type { ReactNode } from "react";
import { Button } from "@/components/button";
import {
  ArrowIcon,
  BoltIcon,
  CheckIcon,
  HeartHandIcon,
  RefreshIcon,
  ServiceIcon,
  WhatsAppIcon,
} from "@/components/icons";
import { Container } from "@/components/section";
import { TextLink } from "@/components/text-link";
import { whatsappUrl } from "@/lib/site";

export const metadata: Metadata = {
  title: "About",
  description:
    "UndaNova is a Kenyan software studio founded by Jennifer Kosencha, building practical software for businesses, NGOs and schools.",
};

const values = [
  { title: "Practical over flashy", text: "What helps you run your business.", Icon: CheckIcon },
  { title: "Built for local realities", text: "M-Pesa, WhatsApp, budget phones.", Icon: BoltIcon },
  { title: "Honest timelines", text: "Real dates, regular updates.", Icon: HeartHandIcon },
  { title: "Long-term support", text: "Still here after launch.", Icon: RefreshIcon },
];

const integrations = [
  { label: "M-Pesa", pos: "left-1/2 top-1 -translate-x-1/2" },
  { label: "WhatsApp", pos: "right-0 top-1/3" },
  { label: "SMS", pos: "bottom-3 right-6" },
  { label: "Maps", pos: "bottom-3 left-6" },
  { label: "Reports", pos: "left-0 top-1/3" },
];

const audiences = [
  { label: "Businesses", slug: "business-websites" },
  { label: "NGOs", slug: "ngo-school-systems" },
  { label: "Schools", slug: "ngo-school-systems" },
  { label: "Online shops", slug: "ecommerce-mpesa" },
];

const words = [
  { word: "unda", lang: "Swahili", meaning: "to create, to build" },
  { word: "nova", lang: "Latin", meaning: "new" },
  { word: "unda nova", lang: "Latin", meaning: "a new wave" },
];

/** Dark bento tile. */
function Tile({ children, className = "" }: { children: ReactNode; className?: string }) {
  return (
    <div
      className={`relative overflow-hidden rounded-3xl border border-white/10 bg-night/60 p-5 text-left ${className}`}
    >
      {children}
    </div>
  );
}

/** Light illustrated story card. */
function StoryCard({
  art,
  label,
  title,
  children,
}: {
  art: ReactNode;
  label: string;
  title: string;
  children: ReactNode;
}) {
  return (
    <article className="reveal flex flex-col overflow-hidden rounded-3xl border border-slate/25 bg-white">
      <div aria-hidden className="relative h-48 overflow-hidden bg-paper bg-dots-navy">
        {art}
      </div>
      <div className="flex-1 p-6">
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-ink/60">{label}</p>
        <h3 className="mt-2 text-2xl text-navy">{title}</h3>
        <div className="mt-3 text-ink/75">{children}</div>
      </div>
    </article>
  );
}

export default function AboutPage() {
  return (
    <div className="bg-night px-2 pb-2 pt-4 sm:px-4 md:pt-6">
      {/* 1. Dark rounded hero card with the bento */}
      <section
        aria-labelledby="about-title"
        className="relative isolate mx-auto max-w-[1320px] overflow-hidden rounded-[2rem] border border-white/10 bg-satin text-white md:rounded-[2.5rem]"
      >
        <div aria-hidden className="absolute inset-0 -z-10 bg-lines" />
        <div className="px-5 pb-6 pt-14 text-center md:px-10 md:pb-10 md:pt-20">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-white/80">About UndaNova</p>
          <h1
            id="about-title"
            className="mx-auto mt-5 max-w-4xl text-[40px] font-bold italic leading-[1.05] md:text-6xl"
          >
            Hi, I&apos;m Jennifer. I build software that works for real businesses.
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-lg text-white/85">
            UndaNova is a Kenyan software studio making practical websites, apps and systems for businesses, NGOs and
            schools.
          </p>
          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <Button href="/contact" tone="dark">
              Work with me
              <ArrowIcon className="size-4" />
            </Button>
            <Button href={whatsappUrl("Hi Jennifer!")} tone="dark" variant="secondary">
              <WhatsAppIcon className="size-5" />
              Say hello
            </Button>
          </div>

          {/* Bento */}
          <div className="mt-14 grid gap-4 md:grid-cols-2 lg:grid-cols-[1fr_1.2fr_1.2fr_1fr]">
            {/* UndaNova explained */}
            <Tile className="flex min-h-72 flex-col lg:row-span-2">
              <h2 className="text-2xl font-semibold leading-tight">
                UndaNova
                <br />
                explained
              </h2>
              <svg aria-hidden viewBox="0 0 200 160" className="my-4 w-full flex-1" preserveAspectRatio="none">
                {[0, 14, 28, 42, 56].map((o, i) => (
                  <path
                    key={o}
                    d={`M0 ${110 - o} C 50 ${30 - o}, 100 ${30 - o}, 120 ${80 - o} S 170 ${140 - o}, 200 ${60 - o}`}
                    fill="none"
                    className={i === 2 ? "stroke-plum" : "stroke-white/25"}
                    strokeWidth={i === 2 ? 2.5 : 1}
                  />
                ))}
              </svg>
              <a
                href="/services"
                className="flex items-center gap-3 rounded-2xl border border-white/15 bg-white/5 p-2 pr-4 text-sm font-medium hover:bg-white/10"
              >
                <span className="inline-flex size-9 items-center justify-center rounded-full bg-white text-navy">
                  <ArrowIcon className="size-4" />
                </span>
                See what we build
              </a>
            </Tile>

            {/* Values list */}
            <div className="grid gap-3 lg:row-span-2">
              {values.map((v) => (
                <Tile key={v.title} className="flex items-center gap-4 p-4!">
                  <span className="inline-flex size-10 shrink-0 items-center justify-center rounded-xl bg-white text-navy">
                    <v.Icon className="size-5" />
                  </span>
                  <span>
                    <span className="block font-heading font-semibold">{v.title}</span>
                    <span className="block text-sm text-white/75">{v.text}</span>
                  </span>
                </Tile>
              ))}
            </div>

            {/* Works with: orbit */}
            <Tile className="flex flex-col">
              <div aria-hidden className="relative mx-auto h-44 w-full max-w-64">
                <span className="absolute left-1/2 top-1/2 size-40 -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/15" />
                <span className="absolute left-1/2 top-1/2 size-24 -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/20" />
                <span className="absolute left-1/2 top-1/2 inline-flex size-14 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-2xl bg-navy ring-1 ring-white/20">
                  <Image src="/brand/undanova-icon.svg" alt="" width={641} height={197} className="w-9" />
                </span>
                {integrations.map((it) => (
                  <span
                    key={it.label}
                    className={`absolute rounded-full bg-white px-2.5 py-1 text-xs font-semibold text-navy ${it.pos}`}
                  >
                    {it.label}
                  </span>
                ))}
              </div>
              <p className="mt-3 font-heading text-lg font-semibold">Works with what you already use.</p>
            </Tile>

            {/* The name */}
            <Tile className="flex flex-col lg:row-span-2">
              <h2 className="text-2xl font-semibold">The name</h2>
              <p className="text-sm text-white/75">More than a name.</p>
              <svg aria-hidden viewBox="0 0 160 160" className="mx-auto my-4 w-40 flex-1">
                {[70, 56, 42, 28].map((r, i) => (
                  <circle
                    key={r}
                    cx="80"
                    cy="80"
                    r={r}
                    fill="none"
                    className={i === 1 ? "stroke-plum" : "stroke-white/25"}
                    strokeWidth={i === 1 ? 6 : 4}
                    strokeDasharray={`${r * 3.2} ${r * 3}`}
                    strokeLinecap="round"
                  />
                ))}
              </svg>
              <p className="font-heading text-xl">
                <span className="font-light">Unda</span> + <span className="font-bold">Nova</span>
              </p>
              <p className="text-sm text-white/75">Create something new.</p>
            </Tile>

            {/* Support toggle */}
            <Tile className="flex items-center justify-between gap-4">
              <span>
                <span className="block font-heading font-semibold">Support after launch</span>
                <span className="block text-sm text-white/75">Always on.</span>
              </span>
              <span aria-hidden className="relative inline-flex h-7 w-12 shrink-0 rounded-full bg-plum">
                <span className="absolute right-1 top-1 size-5 rounded-full bg-white" />
              </span>
            </Tile>
          </div>
        </div>
      </section>

      {/* 2. White panel */}
      <div className="mx-auto mt-2 max-w-[1320px] overflow-hidden rounded-[2rem] bg-white sm:mt-4 md:rounded-[2.5rem]">
        <section aria-labelledby="for-title" className="border-b border-slate/20 py-10">
          <Container>
            <h2 id="for-title" className="text-center text-sm font-semibold uppercase tracking-[0.18em] text-ink/60">
              Who we build for
            </h2>
            <ul className="mt-6 flex flex-wrap items-center justify-center gap-x-10 gap-y-4">
              {audiences.map((a) => (
                <li key={a.label} className="flex items-center gap-2 font-heading text-xl font-semibold text-navy">
                  <ServiceIcon slug={a.slug} className="size-6 text-plum" />
                  {a.label}
                </li>
              ))}
            </ul>
          </Container>
        </section>

        <section aria-labelledby="story-title" className="py-16 md:py-24">
          <Container>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-ink/60">My story</p>
            <h2 id="story-title" className="mt-3 border-l-4 border-plum pl-4 text-[34px] text-navy md:text-5xl">
              Why I started UndaNova
            </h2>
            {/* TODO: Jennifer to confirm or rewrite this draft story. */}
            <p className="mt-5 max-w-2xl text-lg text-ink/75">
              I started UndaNova to build the kind of software I wished the organisations around me had.
            </p>

            <div className="mt-12 grid gap-5 md:grid-cols-3">
              <StoryCard
                label="Software developer"
                title="Trained at Moringa School"
                art={
                  <div className="absolute inset-0 flex items-center justify-center gap-5">
                    {/* TODO: replace with Jennifer's photo (e.g. public/about/jennifer.jpg via next/image). */}
                    <span className="inline-flex size-16 items-center justify-center rounded-full bg-satin font-heading text-2xl font-bold text-white ring-4 ring-white">
                      J
                    </span>
                    <span className="h-px w-10 bg-navy/30" />
                    <span className="inline-flex size-12 items-center justify-center rounded-2xl bg-navy">
                      <Image src="/brand/undanova-icon.svg" alt="" width={641} height={197} className="w-8" />
                    </span>
                    <span className="h-px w-10 bg-navy/30" />
                    <span className="inline-flex size-16 items-center justify-center rounded-full bg-satin-plum text-white ring-4 ring-white">
                      <ServiceIcon slug="ngo-school-systems" className="size-7" />
                    </span>
                  </div>
                }
              >
                I&apos;m a software developer, trained at Moringa School, building for the people who&apos;ll actually
                use the software.
              </StoryCard>

              <StoryCard
                label="NGO experience"
                title="I've seen how NGOs work"
                art={
                  <div className="absolute inset-0 flex items-end justify-center gap-2 px-10 pb-8">
                    {[45, 70, 55, 90, 65, 80].map((h, i) => (
                      <span
                        key={i}
                        style={{ height: `${h}%` }}
                        className={`flex-1 rounded-t-lg ${i === 3 ? "bg-plum" : "bg-navy/80"}`}
                      />
                    ))}
                  </div>
                }
              >
                Through the Hands of Namelok Initiative, I&apos;ve seen how much time NGOs lose to spreadsheets,
                paperwork and reports put together by hand.
              </StoryCard>

              <StoryCard
                label="Small business owner"
                title="I know what it takes"
                art={
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="absolute size-36 rounded-full border border-navy/15" />
                    <span className="absolute size-24 rounded-full border border-navy/20" />
                    <span className="relative inline-flex size-14 items-center justify-center rounded-full bg-navy text-white">
                      <ServiceIcon slug="ecommerce-mpesa" className="size-6" />
                    </span>
                    {["Customers", "M-Pesa", "Stock"].map((t, i) => (
                      <span
                        key={t}
                        className={`absolute rounded-full bg-white px-2.5 py-1 text-xs font-semibold text-navy shadow-md shadow-navy/10 ${
                          ["left-6 top-8", "right-6 top-12", "bottom-6 left-1/2 -translate-x-1/2"][i]
                        }`}
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                }
              >
                From running a small business myself, I know what it takes to find customers, get paid and keep going.
              </StoryCard>
            </div>

            <p className="mt-10 max-w-3xl text-xl text-navy">
              That&apos;s what UndaNova is for: practical websites, apps and systems that fit how businesses, NGOs and
              schools in Kenya really work.
            </p>
          </Container>
        </section>

        {/* 3. The name, in three columns with a left border */}
        <section aria-labelledby="name-title" className="border-t border-slate/20 bg-paper py-16 md:py-20">
          <Container>
            <h2 id="name-title" className="text-[34px] leading-none text-navy md:text-6xl">
              <span className="font-extralight">Unda</span>
              <span className="font-bold">Nova</span>
            </h2>
            <dl className="mt-10 grid gap-8 md:grid-cols-3">
              {words.map((w) => (
                <div key={w.word} className="border-l-2 border-navy pl-5">
                  <dt className="font-heading text-2xl font-semibold italic text-navy">{w.word}</dt>
                  <dd className="mt-2">
                    <span className="block text-xs font-semibold uppercase tracking-[0.18em] text-ink/60">
                      {w.lang}
                    </span>
                    <span className="block text-lg text-ink/80">{w.meaning}</span>
                  </dd>
                </div>
              ))}
            </dl>
            <p className="mt-10 max-w-3xl text-lg text-ink/80">
              <em>Unda</em> is Swahili for &lsquo;create&rsquo;. <em>Nova</em> is Latin for &lsquo;new&rsquo;. Together,
              UndaNova means creating something new. And in Latin, <em>unda nova</em> means &lsquo;new wave&rsquo;.
              That&apos;s what we want to bring to African businesses.
            </p>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
              <Button href="/contact">
                Have a project in mind? Let&apos;s talk
                <ArrowIcon className="size-4" />
              </Button>
              <TextLink href="/work">See our work</TextLink>
            </div>
          </Container>
        </section>
      </div>
    </div>
  );
}
