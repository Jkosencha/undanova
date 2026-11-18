/**
 * Work: "Snapview" design: phone-in-hand hero, lilac band, project grid. See CLAUDE.md §10.
 */
import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/button";
import { CTAStrip } from "@/components/cta-strip";
import { ServiceIcon } from "@/components/icons";
import { Container, SectionHeading } from "@/components/section";
import { WorkCard } from "@/components/work-card";
import { WorkHero } from "@/components/work-hero";
import { ChatScreen } from "@/components/mockups";
import { work } from "@/content/work";

export const metadata: Metadata = {
  title: "Our work",
  description: "Websites, online stores and systems UndaNova is building for businesses and NGOs in Kenya.",
};

const kindIcon = { shop: "ecommerce-mpesa", dashboard: "ngo-school-systems", website: "business-websites" } as const;

export default function WorkPage() {
  return (
    <>
      <WorkHero screen={<ChatScreen />}>
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-white/80">Our work</p>
        <h1 className="mt-5 text-[44px] leading-[1.05] md:text-[64px]">
          <span className="font-extralight">Real projects for</span>{" "}
          <span className="font-bold text-gradient-plum">real organisations.</span>
        </h1>
        <p className="mt-5 max-w-lg text-lg text-white/85">
          Websites, online stores and systems we&apos;re building for businesses and NGOs.
        </p>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <Button href="#projects" tone="dark">
            See the projects
          </Button>
          <Button href="/contact" tone="dark" variant="secondary">
            Start yours
          </Button>
        </div>
      </WorkHero>

      {/* Lilac band: one link per project */}
      <nav aria-label="Projects" className="bg-lilac py-14 md:py-16">
        <Container>
          <ul className="grid gap-10 text-center sm:grid-cols-3">
            {work.map((item) => (
              <li key={item.slug}>
                <Link href={`/work/${item.slug}`} prefetch={false} className="group inline-flex flex-col items-center">
                  <span className="inline-flex size-16 items-center justify-center rounded-full border-2 border-navy/40 text-navy transition-colors group-hover:bg-navy group-hover:text-white">
                    <ServiceIcon slug={kindIcon[item.preview]} className="size-7" />
                  </span>
                  <span className="mt-4 text-sm font-semibold uppercase tracking-[0.18em] text-navy">{item.title}</span>
                  <span className="mt-1 text-navy/80">{item.category}</span>
                </Link>
              </li>
            ))}
          </ul>
        </Container>
      </nav>

      <section id="projects" aria-labelledby="projects-title" className="scroll-mt-20 bg-white py-20 md:py-28">
        <Container>
          <SectionHeading
            id="projects-title"
            title="Our projects"
            intro="What we're building, and who for."
            align="center"
            divider
          />
          <ul className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {work.map((item) => (
              <li key={item.slug} className="reveal flex">
                <WorkCard item={item} />
              </li>
            ))}
          </ul>
        </Container>
      </section>

      <CTAStrip title="Want results like these?" text="Tell us about your project. We reply within 24 hours." />
    </>
  );
}
