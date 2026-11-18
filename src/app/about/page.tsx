import type { Metadata } from "next";
import Image from "next/image";
import { CTABand } from "@/components/cta-band";
import { PageHeader } from "@/components/page-header";
import { Section, SectionHeading } from "@/components/section";
import { WaveDivider } from "@/components/wave-divider";

export const metadata: Metadata = {
  title: "About",
  description:
    "UndaNova is a Kenyan software studio founded by Jennifer Kosencha, building practical software for businesses, NGOs and schools.",
};

const values = [
  { title: "Practical over flashy", text: "We build what helps you run your business, not what looks clever." },
  { title: "Built for local realities", text: "M-Pesa, WhatsApp, patchy networks and budget phones are where we start." },
  { title: "Honest timelines", text: "We tell you how long things will really take, and keep you updated." },
  { title: "Long-term support", text: "We're still here after launch, keeping things running." },
];

export default function AboutPage() {
  return (
    <>
      <PageHeader title="Hi, I'm Jennifer — I build software that works for real businesses." />

      <Section tone="white" aria-labelledby="story-title">
        <div className="grid gap-10 md:grid-cols-[320px_1fr] md:gap-16">
          {/* TODO: replace with Jennifer's photo (e.g. public/about/jennifer.jpg via next/image). */}
          <div className="flex aspect-[4/5] w-full max-w-80 items-center justify-center rounded-xl bg-navy">
            <Image src="/brand/undanova-icon.svg" alt="" width={641} height={197} className="w-1/2" />
          </div>

          <div className="max-w-2xl">
            <h2 id="story-title" className="text-3xl text-navy md:text-4xl">
              My story
            </h2>
            {/* TODO: Jennifer to confirm or rewrite this draft story. */}
            <div className="mt-4 space-y-4 text-lg">
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
      </Section>

      <section className="bg-navy text-white" aria-labelledby="name-title">
        <div className="mx-auto w-full max-w-[1200px] px-4 py-16 sm:px-6 md:py-24">
          <div className="max-w-3xl">
            <h2 id="name-title" className="text-3xl md:text-4xl">
              The name
            </h2>
            <p className="mt-4 text-lg text-white/85 md:text-xl">
              <em>Unda</em> is Swahili for &lsquo;create&rsquo;. <em>Nova</em> is Latin for &lsquo;new&rsquo;. Together,
              UndaNova means creating something new — and in Latin, <em>unda nova</em> means &lsquo;new wave&rsquo;.
              That&apos;s what we want to bring to African businesses.
            </p>
          </div>
        </div>
        <WaveDivider />
      </section>

      <Section aria-labelledby="values-title">
        <SectionHeading id="values-title" title="What we believe" />
        <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {values.map((value) => (
            <li key={value.title} className="rounded-xl border border-slate/25 bg-white p-6">
              <h3 className="text-xl text-navy">{value.title}</h3>
              <p className="mt-2 text-ink/70">{value.text}</p>
            </li>
          ))}
        </ul>
      </Section>

      <CTABand />
    </>
  );
}
