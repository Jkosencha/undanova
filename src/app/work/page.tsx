import type { Metadata } from "next";
import { CTABand } from "@/components/cta-band";
import { PageHeader } from "@/components/page-header";
import { Container } from "@/components/section";
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
        eyebrow="Our work"
        title={
          <>
            <span className="font-light">Real projects for</span>{" "}
            <span className="font-bold text-gradient-wave">real organisations.</span>
          </>
        }
        intro="Websites, online stores and systems we're building for businesses and NGOs."
      />
      <section aria-label="Projects" className="bg-paper py-14 md:py-20">
        <Container>
          <ul className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {work.map((item) => (
              <li key={item.slug} className="reveal flex">
                <WorkCard item={item} headingLevel="h2" />
              </li>
            ))}
          </ul>
        </Container>
      </section>
      <CTABand />
    </>
  );
}
