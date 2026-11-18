import type { Metadata } from "next";
import { Suspense } from "react";
import { Glow } from "@/components/brand-shapes";
import { Button } from "@/components/button";
import { ContactForm, ContactFormWithParams } from "@/components/contact-form";
import { WhatsAppIcon } from "@/components/icons";
import { PageHeader } from "@/components/page-header";
import { Container } from "@/components/section";
import { site, whatsappUrl } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact",
  description: "Tell UndaNova about your website, app or system. We reply within 24 hours.",
};

const label = "text-sm font-semibold uppercase tracking-[0.18em] text-slate";

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
        intro="Tell us a bit about your project. No jargon needed — just what you want to get done."
      />
      <section aria-label="Contact form and details" className="bg-paper pb-20 md:pb-28">
        {/* The form overlaps the header's wave edge */}
        <Container className="-mt-12 grid gap-6 md:-mt-24 lg:grid-cols-[1fr_380px] lg:gap-8">
          <div className="relative rounded-3xl shadow-2xl shadow-ink/20">
            {/* The URL's ?service= is only known in the browser, so the pre-filled
                form renders there; the static page ships the same form without it. */}
            <Suspense fallback={<ContactForm />}>
              <ContactFormWithParams />
            </Suspense>
          </div>

          <aside
            aria-labelledby="contact-details"
            className="relative isolate overflow-hidden rounded-3xl bg-navy bg-dots p-6 text-white md:p-8 lg:self-start"
          >
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
                {/* TODO: city, Kenya — set site.location in lib/site.ts */}
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
    </>
  );
}
