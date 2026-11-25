/**
 * Home hero: "UndaNova" set huge behind a laptop. Three layers share one frame
 * with the photo's exact aspect ratio (so they line up at every width): the
 * photo under a teal-blue wash, the name, then a cut-out of the laptop on top.
 * The frame is cropped top and bottom when the screen is short, using the same
 * maths as `object-position` (top: P% with translateY(-P%)).
 * The laptop's screen shows the message and actions (components/laptop-screen.tsx).
 * Photo: Dell on Unsplash (free licence); the cut-out is traced from it.
 */
import Image from "next/image";
import { Button } from "@/components/button";
import { LaptopScreen } from "@/components/laptop-screen";
import { Container } from "@/components/section";
import { RiseName } from "@/components/rise-name";
import heroLaptop from "@/assets/photos/hero-laptop.jpg";
import heroLaptopCutout from "@/assets/photos/hero-laptop-cutout.png";
import { site } from "@/lib/site";

export function HomeHero() {
  return (
    <section aria-labelledby="hero-title" className="bg-navy text-white">
      <div className="relative isolate h-[min(66.75vw,calc(100svh-5rem))] overflow-clip">
        <div className="absolute inset-x-0 top-[55%] aspect-[2000/1335] -translate-y-[55%] [container-type:inline-size]">
          <Image
            src={heroLaptop}
            alt=""
            fill
            priority
            sizes="100vw"
            quality={60}
            placeholder="blur"
            className="object-cover"
          />
          <div aria-hidden className="absolute inset-0 bg-gradient-to-b from-navy/70 via-navy/45 to-navy/30" />
          {/* The name: its lower part passes behind the laptop's lid (top edge at 46.7%). */}
          <h1
            id="hero-title"
            className="absolute inset-x-0 bottom-[45.5%] text-center font-heading text-[19cqw] font-normal leading-[0.8] tracking-[-0.03em]"
          >
            <RiseName text={site.name} />
            <span className="sr-only"> {site.descriptor}</span>
          </h1>
          <Image
            src={heroLaptopCutout}
            alt="A laptop on a terrace table showing the UndaNova website"
            fill
            loading="eager"
            sizes="100vw"
            quality={60}
            placeholder="blur"
            className="pointer-events-none object-cover"
          />
          <LaptopScreen />
        </div>
      </div>

      {/* Message and actions, readable size (on large screens they're on the laptop instead) */}
      <Container className="grid gap-8 py-12 md:py-16 lg:hidden">
        <div>
          <p className="caps-sm text-white/80">
            {site.name} {site.descriptor}
          </p>
          <p className="caps mt-5 font-heading text-3xl leading-snug md:text-4xl">We build what&apos;s next.</p>
        </div>
        <div>
          <p className="text-lg text-white/85">
            We design and develop digital solutions that help businesses and organizations work smarter, operate better
            and move forward with technology.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button href="/contact" tone="dark">
              Start a Project
            </Button>
            <Button href="/services" tone="dark" variant="secondary">
              Explore Our Services
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
