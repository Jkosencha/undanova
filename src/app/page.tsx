/**
 * Home: hero, introduction, what we do, why UndaNova, our approach, closing CTA.
 * Minimal and elegant: white and soft grey, spaced caps headings, photography.
 */
import type { Metadata } from "next";
import Link from "next/link";
import { ApproachSteps } from "@/components/approach-steps";
import { Button } from "@/components/button";
import { CTABand } from "@/components/cta-band";
import { HomeHero } from "@/components/home-hero";
import { ArrowIcon, ServiceIcon } from "@/components/icons";
import { ParallaxImage } from "@/components/parallax-image";
import { photos } from "@/components/photo-background";
import { ServicePreview } from "@/components/service-preview";
import { Container, Section, SectionHeading } from "@/components/section";
import { services } from "@/content/services";
import { approach, differentiators } from "@/content/studio";

export const metadata: Metadata = {
  title: { absolute: "UndaNova Digital Labs | Software development and digital solutions in Kenya" },
  description:
    "UndaNova is a software development and digital solutions studio in Kenya: web development, custom software, business systems, UI/UX design, automation and digital transformation.",
};

export default function Home() {
  return (
    <>
      <HomeHero />

      {/* Introduction */}
      <Section aria-labelledby="intro-title">
        <div className="mx-auto max-w-3xl text-center">
          <SectionHeading id="intro-title" title="Technology built around real-world needs." />
          <div className="reveal mt-8 space-y-5 text-lg text-ink">
            <p>
              At UndaNova, we believe technology should do more than look impressive. It should solve problems, simplify
              processes and create meaningful opportunities.
            </p>
            <p>
              We partner with businesses and organizations to design and build digital solutions that make everyday
              operations more efficient and ideas more achievable.
            </p>
          </div>
        </div>
      </Section>

      {/* What we do: sticky intro beside an editorial list of services */}
      <Section tone="paper" aria-labelledby="services-title">
        <div className="grid gap-12 lg:grid-cols-[0.85fr_2fr] lg:gap-16">
          <div className="lg:sticky lg:top-32 lg:self-start">
            <SectionHeading
              id="services-title"
              eyebrow="Services"
              title="What We Do"
              intro="Six ways we help organizations build, improve and grow with technology."
              align="left"
            />
            <Button href="/services" variant="secondary" className="reveal-left mt-10">
              Explore All Services
            </Button>
          </div>
          <ServicePreview>
            <ol className="border-t border-navy/15">
              {services.map((service, i) => (
                <li key={service.slug} data-service={service.slug} className="reveal-right border-b border-navy/15">
                  <Link
                    href={`/services#${service.slug}`}
                    prefetch={false}
                    className="group relative isolate grid grid-cols-[auto_1fr_auto] items-start gap-x-5 gap-y-2 px-2 py-7 sm:gap-x-8 sm:px-6 md:py-8"
                  >
                    {/* Teal fill that sweeps in from the left on hover */}
                    <span
                      aria-hidden
                      className="absolute inset-0 -z-10 origin-left scale-x-0 bg-navy transition-transform duration-500 ease-out group-hover:scale-x-100 group-focus-visible:scale-x-100"
                    />
                    <span className="pt-1 font-heading text-sm text-ink transition-colors duration-500 group-hover:text-white/70">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span>
                      <span className="flex items-center gap-3">
                        <ServiceIcon
                          slug={service.slug}
                          className="size-6 shrink-0 text-navy transition-colors duration-500 group-hover:text-steel"
                        />
                        <h3 className="caps text-base text-navy transition-colors duration-500 group-hover:text-white md:text-lg">
                          {service.title}
                        </h3>
                      </span>
                      <p className="mt-3 max-w-xl text-sm text-ink transition-colors duration-500 group-hover:text-white/85">
                        {service.summary}
                      </p>
                    </span>
                    <ArrowIcon className="mt-1.5 size-5 text-navy transition-all duration-500 group-hover:translate-x-1 group-hover:text-white" />
                  </Link>
                </li>
              ))}
            </ol>
          </ServicePreview>
        </div>
      </Section>

      {/* Why UndaNova */}
      <Section aria-labelledby="why-title">
        <div className="grid items-center gap-14 lg:grid-cols-2 lg:gap-20">
          <div>
            <SectionHeading
              id="why-title"
              eyebrow="Why UndaNova?"
              title="Practical innovation. Meaningful impact."
              align="left"
            />
            <p className="reveal-left mt-6 text-ink">
              Technology should create value, not unnecessary complexity. UndaNova approaches every project with a focus
              on understanding the problem, identifying the right solution and delivering technology that serves a clear
              purpose.
            </p>
            <ul className="mt-8 divide-y divide-mist border-y border-mist">
              {differentiators.map((d) => (
                <li key={d.title} className="reveal-left py-5">
                  <h3 className="font-heading text-lg text-navy">{d.title}</h3>
                  <p className="mt-1 text-sm text-ink">{d.text}</p>
                </li>
              ))}
            </ul>
          </div>
          <div className="reveal-right mx-auto w-full max-w-[520px]">
            <div className="relative aspect-[4/5] overflow-clip">
              <ParallaxImage
                src={photos.studioDesk}
                alt="A tidy wooden desk with a laptop on a stand, a keyboard and a lamp"
                sizes="(min-width: 1024px) 520px, 100vw"
              />
            </div>
          </div>
        </div>
      </Section>

      {/* Our approach: holds in place on large screens while each step lights up */}
      <section aria-labelledby="approach-title" className="bg-paper text-ink">
        <Container>
          <ApproachSteps steps={approach}>
            <SectionHeading id="approach-title" eyebrow="Our approach" title="From idea to implementation." />
          </ApproachSteps>
        </Container>
      </section>

      {/* Closing CTA */}
      <CTABand
        title="Have an idea worth building?"
        text="Let's turn your business challenges and ideas into practical digital solutions."
        label="Let's Talk"
      />
    </>
  );
}
