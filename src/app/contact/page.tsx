import type { Metadata } from "next";
import { Suspense } from "react";
import { Button } from "@/components/button";
import { ContactForm, ContactFormWithParams } from "@/components/contact-form";
import { FaqList } from "@/components/faq";
import { WhatsAppIcon } from "@/components/icons";
import { PageHeader } from "@/components/page-header";
import { Container, SectionHeading } from "@/components/section";
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

const label = "caps-sm text-[10px] text-white/60";

export default function ContactPage() {
  return (
    <>
      <PageHeader
        eyebrow="Contact"
        title="Let's build something."
        intro="Tell us a bit about your project. No jargon needed. Just tell us what you want to get done."
      />
      <section aria-label="Contact form and details" className="bg-white py-18 md:py-24">
        <Container className="grid gap-8 lg:grid-cols-[1fr_380px] lg:gap-12">
          <div>
            {/* The URL's ?service= is only known in the browser, so the pre-filled
                form renders there; the static page ships the same form without it. */}
            <Suspense fallback={<ContactForm />}>
              <ContactFormWithParams />
            </Suspense>
          </div>

          <aside aria-labelledby="contact-details" className="bg-navy p-8 text-white md:p-10 lg:self-start">
            <h2 id="contact-details" className="caps text-xl">
              Prefer to chat?
            </h2>
            <p className="mt-2 text-white/80">Message us on WhatsApp. It&apos;s often the quickest way.</p>
            <Button
              href={whatsappUrl("Hi UndaNova, I'd like to talk about a project.")}
              tone="dark"
              className="mt-6 w-full"
            >
              <WhatsAppIcon className="size-4" />
              Chat on WhatsApp
            </Button>

            <dl className="mt-8 space-y-5 border-t border-white/15 pt-8">
              <div>
                <dt className={label}>Email</dt>
                <dd className="mt-1">
                  <a
                    href={`mailto:${site.email}`}
                    className="text-white underline decoration-white/40 underline-offset-4 hover:decoration-white"
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
                <dd className="mt-1 text-white/90">{site.responseTime}</dd>
              </div>
            </dl>
          </aside>
        </Container>
      </section>

      {/* What happens next */}
      <section aria-labelledby="next-title" className="border-t border-mist bg-paper py-18 md:py-24">
        <Container className="grid gap-14 lg:grid-cols-2 lg:gap-20">
          <div>
            <SectionHeading id="next-title" eyebrow="After you send it" title="What happens next" align="left" />
            <ol className="relative mt-10 space-y-8 border-l border-navy/20 pl-8">
              {nextSteps.map((step, i) => (
                <li key={step.title} className="reveal relative">
                  <span className="absolute -left-[2.6rem] top-0 inline-flex size-5 items-center justify-center bg-navy text-[10px] text-white">
                    {i + 1}
                  </span>
                  <h3 className="font-heading text-lg text-navy">{step.title}</h3>
                  <p className="mt-1 text-ink/75">{step.text}</p>
                </li>
              ))}
            </ol>
          </div>
          <div>
            <p className="caps-sm text-ink/60">Quick answers</p>
            <div className="mt-6">
              <FaqList faqs={faqs.filter((f) => contactFaqs.includes(f.q))} />
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
