import type { Metadata } from "next";
import Image from "next/image";
import { CTABand } from "@/components/cta-band";
import { ServiceIcon } from "@/components/icons";
import { photos } from "@/components/photo-background";
import { Container, Section, SectionHeading } from "@/components/section";

export const metadata: Metadata = {
  title: "About",
  description:
    "UndaNova is a Kenyan software studio founded by Jennifer Kosencha, building practical software for businesses, NGOs and schools.",
};

const highlights = [
  {
    label: "Software developer",
    title: "Trained at Moringa School",
    text: "Building for the people who'll actually use the software.",
    icon: "business-websites",
  },
  {
    label: "NGO experience",
    title: "I've seen how NGOs work",
    text: "Through the Hands of Namelok Initiative: the spreadsheets, the paperwork, the reports done by hand.",
    icon: "ngo-school-systems",
  },
  {
    label: "Small business owner",
    title: "I know what it takes",
    text: "Finding customers, getting paid and keeping going, from running a small business myself.",
    icon: "ecommerce-mpesa",
  },
];

const values = [
  { title: "Practical over flashy", text: "We build what helps you run your business, not what looks clever." },
  {
    title: "Built for local realities",
    text: "M-Pesa, WhatsApp, patchy networks and budget phones are where we start.",
  },
  { title: "Honest timelines", text: "We tell you how long things will really take, and keep you updated." },
  { title: "Long-term support", text: "We're still here after launch, keeping things running." },
];

const words = [
  { word: "unda", lang: "Swahili", meaning: "to create, to build" },
  { word: "nova", lang: "Latin", meaning: "new" },
  { word: "unda nova", lang: "Latin", meaning: "a new wave" },
];

const audiences = ["Businesses", "NGOs", "Schools", "Online shops"];

export default function AboutPage() {
  return (
    <>
      {/* Header */}
      <div className="border-b border-mist bg-paper">
        <Container className="py-20 text-center md:py-28">
          <p className="caps-sm text-ink/60">About UndaNova</p>
          <h1 className="caps mx-auto mt-5 max-w-4xl text-2xl leading-relaxed text-navy md:text-4xl md:leading-relaxed">
            Hi, I&apos;m Jennifer. I build software that works for real businesses.
          </h1>
          <span aria-hidden className="mx-auto mt-7 block h-px w-12 bg-navy/40" />
          <p className="mx-auto mt-7 max-w-2xl text-lg text-ink/75">
            UndaNova is a Kenyan software studio making practical websites, apps and systems for businesses, NGOs and
            schools.
          </p>
        </Container>
      </div>

      {/* Story: photo and text */}
      <section aria-labelledby="story-title" className="bg-white">
        <div className="grid lg:grid-cols-2">
          <div className="relative min-h-80 lg:min-h-full">
            {/* TODO: replace with Jennifer's photo. */}
            <Image
              src={photos.deskWhite}
              alt="A bright, tidy workspace with a laptop"
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
              quality={60}
              placeholder="blur"
              className="object-cover"
            />
          </div>
          <div className="flex items-center px-5 py-18 sm:px-8 md:py-24 lg:pl-16 lg:pr-[max(2rem,calc((100vw-1200px)/2+2rem))]">
            <div className="max-w-lg">
              <SectionHeading id="story-title" title="My story" align="left" />
              {/* TODO: Jennifer to confirm or rewrite this draft story. */}
              <div className="mt-8 space-y-4 text-ink/80">
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
                  That&apos;s what UndaNova is for: practical websites, apps and systems that fit how businesses, NGOs
                  and schools in Kenya really work.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Highlights */}
      <Section tone="paper" aria-label="Background">
        <ul className="grid gap-12 text-center md:grid-cols-3">
          {highlights.map((h) => (
            <li key={h.title} className="reveal">
              <ServiceIcon slug={h.icon} className="mx-auto size-8 text-navy" />
              <p className="caps-sm mt-6 text-[10px] text-ink/60">{h.label}</p>
              <h2 className="mt-2 font-heading text-lg text-navy">{h.title}</h2>
              <p className="mx-auto mt-3 max-w-xs text-sm text-ink/70">{h.text}</p>
            </li>
          ))}
        </ul>
      </Section>

      {/* The name */}
      <Section tone="navy" aria-labelledby="name-title" className="text-center">
        <p className="caps-sm text-white/60">The name</p>
        <h2 id="name-title" className="caps mt-5 text-4xl md:text-6xl">
          UndaNova
        </h2>
        <span aria-hidden className="mx-auto mt-7 block h-px w-12 bg-white/50" />
        <dl className="mx-auto mt-12 grid max-w-4xl gap-10 md:grid-cols-3">
          {words.map((w) => (
            <div key={w.word}>
              <dt className="font-heading text-xl italic">{w.word}</dt>
              <dd className="mt-2 text-sm text-white/80">
                <span className="caps-sm block text-[10px] text-white/60">{w.lang}</span>
                <span className="mt-1 block">{w.meaning}</span>
              </dd>
            </div>
          ))}
        </dl>
        <p className="mx-auto mt-12 max-w-2xl text-white/85">
          <em>Unda</em> is Swahili for &lsquo;create&rsquo;. <em>Nova</em> is Latin for &lsquo;new&rsquo;. Together,
          UndaNova means creating something new. And in Latin, <em>unda nova</em> means &lsquo;new wave&rsquo;.
          That&apos;s what we want to bring to African businesses.
        </p>
      </Section>

      {/* Values */}
      <Section aria-labelledby="values-title">
        <SectionHeading id="values-title" title="What we believe" />
        <ul className="mt-14 grid gap-px bg-mist sm:grid-cols-2 lg:grid-cols-4">
          {values.map((v) => (
            <li key={v.title} className="reveal bg-white p-8 text-center">
              <h3 className="caps-sm text-navy">{v.title}</h3>
              <p className="mt-3 text-sm text-ink/70">{v.text}</p>
            </li>
          ))}
        </ul>
      </Section>

      {/* Who we build for */}
      <section aria-labelledby="for-title" className="border-t border-mist bg-paper py-14">
        <Container className="text-center">
          <h2 id="for-title" className="caps-sm text-ink/60">
            Who we build for
          </h2>
          <ul className="mt-6 flex flex-wrap justify-center gap-x-12 gap-y-3">
            {audiences.map((a) => (
              <li key={a} className="caps text-sm text-navy">
                {a}
              </li>
            ))}
          </ul>
        </Container>
      </section>

      <CTABand />
    </>
  );
}
