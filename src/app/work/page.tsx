import type { Metadata } from "next";
import { CTABand } from "@/components/cta-band";
import { PageHeader } from "@/components/page-header";
import { Section } from "@/components/section";
import { WorkCard } from "@/components/work-card";
import { work } from "@/content/work";

export const metadata: Metadata = {
  title: "Our work",
  description: "Websites, online stores and systems UndaNova is building for businesses and NGOs in Kenya.",
};

export default function WorkPage() {
  return (
    <>
      <PageHeader
        title="Our work"
        intro="Websites, online stores and systems we're building for businesses and NGOs."
      />
      <Section aria-label="Projects">
        <ul className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {work.map((item) => (
            <li key={item.slug} className="flex">
              <WorkCard item={item} headingLevel="h2" />
            </li>
          ))}
        </ul>
      </Section>
      <CTABand />
    </>
  );
}
