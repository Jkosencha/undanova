/**
 * About: UndaNova as a brand and organization (no founder biography or personal story).
 */
import type { Metadata } from "next";
import { CTABand } from "@/components/cta-band";
import { InterfaceVisual } from "@/components/interface-visual";
import { PageHeader } from "@/components/page-header";
import { Section, SectionHeading } from "@/components/section";
import { mission, values, vision } from "@/content/studio";

export const metadata: Metadata = {
  title: "About",
  description:
    "UndaNova is a digital solutions studio in Kenya building software, platforms and technology solutions that help organizations operate more effectively.",
};

export default function AboutPage() {
  return (
    <>
      <PageHeader eyebrow="About UndaNova" title="Building a more connected digital future." />

      {/* Who we are */}
      <Section aria-labelledby="who-title">
        <div className="grid items-center gap-14 lg:grid-cols-2 lg:gap-20">
          <div>
            <SectionHeading id="who-title" title="Who we are" align="left" />
            <div className="mt-8 space-y-5 text-ink/80">
              <p>
                UndaNova is a digital solutions studio driven by the belief that technology should be accessible,
                purposeful and useful.
              </p>
              <p>
                The studio exists to bridge the gap between real-world challenges and digital possibilities by creating
                software, platforms and technology solutions that help organizations operate more effectively.
              </p>
              <p>
                From establishing a digital presence to developing custom applications and streamlining business
                operations, UndaNova focuses on delivering solutions that combine functionality, thoughtful design and
                practical value.
              </p>
            </div>
          </div>
          <InterfaceVisual />
        </div>
      </Section>

      {/* Mission and vision */}
      <section aria-label="Mission and vision" className="grid md:grid-cols-2">
        <div className="bg-navy px-5 py-18 text-white sm:px-8 md:py-24 md:pl-[max(2rem,calc((100vw-1200px)/2+2rem))] md:pr-16">
          <h2 className="caps-sm text-white/70">Our Mission</h2>
          <p className="mt-6 max-w-md font-heading text-xl leading-relaxed md:text-2xl">{mission}</p>
        </div>
        <div className="bg-paper px-5 py-18 sm:px-8 md:py-24 md:pl-16 md:pr-[max(2rem,calc((100vw-1200px)/2+2rem))]">
          <h2 className="caps-sm text-ink/70">Our Vision</h2>
          <p className="mt-6 max-w-md font-heading text-xl leading-relaxed text-navy md:text-2xl">{vision}</p>
        </div>
      </section>

      {/* Values */}
      <Section aria-labelledby="values-title">
        <SectionHeading id="values-title" title="Our Values" />
        <ul className="mt-14 grid gap-px bg-mist sm:grid-cols-2 lg:grid-cols-5">
          {values.map((v) => (
            <li key={v.title} className="reveal bg-white p-8 text-center">
              <h3 className="caps-sm text-navy">{v.title}</h3>
              <p className="mt-3 text-sm text-ink/70">{v.text}</p>
            </li>
          ))}
        </ul>
      </Section>

      <CTABand />
    </>
  );
}
