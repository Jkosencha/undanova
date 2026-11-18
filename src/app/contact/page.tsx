import type { Metadata } from "next";
import { Suspense } from "react";
import { Button } from "@/components/button";
import { ContactForm, ContactFormWithParams } from "@/components/contact-form";
import { WhatsAppIcon } from "@/components/icons";
import { PageHeader } from "@/components/page-header";
import { Section } from "@/components/section";
import { site, whatsappUrl } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact",
  description: "Tell UndaNova about your website, app or system. We reply within 24 hours.",
};

export default function ContactPage() {
  return (
    <>
      <PageHeader
        title="Let's build something."
        intro="Tell us a bit about your project. No jargon needed — just what you want to get done."
      />
      <Section aria-label="Contact form and details">
        <div className="grid gap-10 lg:grid-cols-[1fr_360px] lg:gap-16">
          {/* The URL's ?service= is only known in the browser, so the pre-filled
              form renders there; the static page ships the same form without it. */}
          <Suspense fallback={<ContactForm />}>
            <ContactFormWithParams />
          </Suspense>

          <aside aria-labelledby="contact-details" className="lg:pt-2">
            <h2 id="contact-details" className="text-2xl text-navy">
              Prefer to chat?
            </h2>
            <p className="mt-2 text-ink/80">Message us on WhatsApp. It&apos;s often the quickest way.</p>
            <Button href={whatsappUrl("Hi UndaNova, I'd like to talk about a project.")} className="mt-5 w-full sm:w-auto">
              <WhatsAppIcon className="size-5" />
              Chat on WhatsApp
            </Button>

            <dl className="mt-8 space-y-5 border-t border-slate/30 pt-8">
              <div>
                <dt className="text-sm font-semibold uppercase tracking-wider text-ink/70">Email</dt>
                <dd className="mt-1">
                  <a
                    href={`mailto:${site.email}`}
                    className="font-medium text-navy underline decoration-wave decoration-2 underline-offset-4 hover:decoration-navy"
                  >
                    {site.email}
                  </a>
                </dd>
              </div>
              <div>
                <dt className="text-sm font-semibold uppercase tracking-wider text-ink/70">Location</dt>
                {/* TODO: city, Kenya — set site.location in lib/site.ts */}
                <dd className="mt-1">{site.location}</dd>
              </div>
              <div>
                <dt className="text-sm font-semibold uppercase tracking-wider text-ink/70">Response time</dt>
                <dd className="mt-1">{site.responseTime}</dd>
              </div>
            </dl>
          </aside>
        </div>
      </Section>
    </>
  );
}
