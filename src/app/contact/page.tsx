import type { Metadata } from "next";
import { Suspense } from "react";
import { Glow } from "@/components/brand-shapes";
import { PhotoBackground } from "@/components/photo-background";
import { Button } from "@/components/button";
import { ContactForm, ContactFormWithParams } from "@/components/contact-form";
import { FaqList } from "@/components/faq";
import { WhatsAppIcon } from "@/components/icons";
import { PageHeader } from "@/components/page-header";
import { Container } from "@/components/section";
import { faqs } from "@/content/studio";
import { site, whatsappUrl } from "@/lib/site";

const nextSteps = [
  { title: "We reply within 24 hours", text: "On WhatsApp, email or a call, whichever you prefer." },
  { title: "A free 30-minute call", text: "We talk through what you need, your timeline and your budget." },
  { title: "A clear written quote", text: "In KES, with what's included and when it'll be ready. No obligation." },
];

// TODO: Jennifer to confirm the call length and these answers.
const contactFaqs = [
  "How much does a website or system cost?",
  "How long does it take?",
  "Do you only work with clients in Nairobi?",
];

export const metadata: Metadata = {
  title: "Contact",
  description: "Tell UndaNova about your website, app or system. We reply within 24 hours.",
};

const label = "text-sm font-mono font-medium uppercase tracking-[0.14em] text-slate";

export default function ContactPage() {
  return (
    <>
      <PageHeader
        eyebrow="Contact"
        title={
          <>
            <span className="font-light">Let&apos;s build</span>{" "}
            <span className="font-bold text-gradient-plum">something.</span>
          </>
        }
        intro="Tell us a bit about your project. No jargon needed. Just tell us what you want to get done."
      />
      <section aria-label="Contact form and details" className="bg-paper pb-20 md:pb-28">
        {/* The form overlaps the header's wave edge */}
        <Container className="-mt-12 grid gap-6 md:-mt-24 lg:grid-cols-[1fr_380px] lg:gap-8">
          <div className="relative shadow-2xl shadow-ink/20">
            {/* The URL's ?service= is only known in the browser, so the pre-filled
                form renders there; the static page ships the same form without it. */}
            <Suspense fallback={<ContactForm />}>
              <ContactFormWithParams />
            </Suspense>
          </div>

          <aside
            aria-labelledby="contact-details"
            className="relative isolate overflow-hidden bg-navy p-6 text-white md:p-8 lg:self-start"
          >
            <PhotoBackground photo="satin" sizes="(min-width: 1024px) 380px, 100vw" />
            <Glow className="-right-24 -top-24 -z-10 size-72" />
            <h2 id="contact-details" className="text-3xl">
              Prefer to chat?
            </h2>
            <p className="mt-2 text-white/80">Message us on WhatsApp. It&apos;s often the quickest way.</p>
            <Button
              href={whatsappUrl("Hi UndaNova, I'd like to talk about a project.")}
              tone="dark"
              className="mt-6 w-full"
            >
              <WhatsAppIcon className="size-5" />
              Chat on WhatsApp
            </Button>

            <dl className="mt-8 space-y-5 border-t border-white/15 pt-8">
              <div>
                <dt className={label}>Email</dt>
                <dd className="mt-1">
                  <a
                    href={`mailto:${site.email}`}
                    className="font-medium text-white underline decoration-plum decoration-2 underline-offset-4 hover:decoration-white"
                  >
                    {site.email}
                  </a>
                </dd>
              </div>
              <div>
                <dt className={label}>Location</dt>
                {/* TODO: city, Kenya: set site.location in lib/site.ts */}
                <dd className="mt-1 text-white/90">{site.location}</dd>
              </div>
              <div>
                <dt className={label}>Response time</dt>
                <dd className="mt-1 inline-flex items-center gap-2 text-white/90">
                  <span aria-hidden className="size-2 animate-glow rounded-full bg-plum" />
                  {site.responseTime}
                </dd>
              </div>
            </dl>
          </aside>
        </Container>
      </section>

      {/* What happens next */}
      <section aria-labelledby="next-title" className="bg-white py-20 md:py-24">
        <Container className="grid gap-14 lg:grid-cols-2 lg:gap-20">
          <div>
            <p className="font-mono text-sm font-medium uppercase tracking-[0.14em] text-ink/60">After you send it</p>
            <h2 id="next-title" className="mt-4 text-[34px] leading-[1.05] text-navy md:text-5xl">
              What happens <span className="font-serif font-normal tracking-normal text-plum">next</span>
            </h2>
            <ol className="relative mt-10 space-y-8 border-l border-navy/20 pl-8">
              {nextSteps.map((step, i) => (
                <li key={step.title} className="reveal relative">
                  <span className="absolute -left-[2.6rem] top-0 inline-flex size-5 items-center justify-center bg-navy font-mono text-[10px] text-white">
                    {i + 1}
                  </span>
                  <h3 className="text-xl text-navy">{step.title}</h3>
                  <p className="mt-1 text-ink/75">{step.text}</p>
                </li>
              ))}
            </ol>
          </div>
          <div>
            <p className="font-mono text-sm font-medium uppercase tracking-[0.14em] text-ink/60">Quick answers</p>
            <div className="mt-6">
              <FaqList faqs={faqs.filter((f) => contactFaqs.includes(f.q))} />
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
