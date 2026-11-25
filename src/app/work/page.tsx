import type { Metadata } from "next";
import { CTABand } from "@/components/cta-band";
import { PageHeader } from "@/components/page-header";
import { Section, SectionHeading } from "@/components/section";
import { WorkCard } from "@/components/work-card";
import { work } from "@/content/work";

export const metadata: Metadata = {
  title: "Our Work",
  description:
    "Selected web development, custom software and business system projects by UndaNova, a digital solutions studio in Kenya.",
};

export default function WorkPage() {
  return (
    <>
      <PageHeader
        eyebrow="Our Work"
        title="Solutions in action."
        intro="Explore selected projects, digital experiences and solutions that demonstrate how technology can address practical challenges."
      />
      <Section aria-labelledby="selected-title">
        <SectionHeading id="selected-title" title="Selected Work" />
        <ul className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {work.map((item) => (
            <li key={item.slug} className="reveal flex">
              <WorkCard item={item} />
            </li>
          ))}
        </ul>
      </Section>
      <CTABand />
    </>
  );
}
