import type { Metadata } from "next";
import { Suspense } from "react";
import { Button } from "@/components/button";
import { ContactForm, ContactFormWithParams } from "@/components/contact-form";
import { InstagramIcon, LinkedInIcon, WhatsAppIcon } from "@/components/icons";
import { PageHeader } from "@/components/page-header";
import { Container } from "@/components/section";
import { hasWhatsapp, site, whatsappUrl } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Start a project with UndaNova. Tell us about your website, software, business system or digital transformation idea.",
};

const label = "caps-sm text-[10px] text-white/60";

export default function ContactPage() {
  const socials = [
    { label: "LinkedIn", href: site.social.linkedin, Icon: LinkedInIcon },
    { label: "Instagram", href: site.social.instagram, Icon: InstagramIcon },
  ].filter((s) => s.href);

  return (
    <>
      <PageHeader
        eyebrow="Contact"
        title="Let's build something meaningful."
        intro="Have a project in mind, a business challenge to solve or an idea you'd like to bring to life? We'd love to hear about it."
      />
      <section aria-label="Contact form and details" className="bg-white py-18 md:py-24">
        <Container className="grid gap-8 lg:grid-cols-[1fr_360px] lg:gap-12">
          <div>
            {/* The URL's ?service= is only known in the browser, so the pre-filled
                form renders there; the static page ships the same form without it. */}
            <Suspense fallback={<ContactForm />}>
              <ContactFormWithParams />
            </Suspense>
          </div>

          <aside aria-labelledby="contact-details" className="bg-navy p-8 text-white md:p-10 lg:self-start">
            <h2 id="contact-details" className="caps text-lg">
              Other ways to reach us
            </h2>
            <dl className="mt-8 space-y-6">
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
                <dd className="mt-1 text-white/90">{site.location}</dd>
              </div>
              {socials.length > 0 && (
                <div>
                  <dt className={label}>Social</dt>
                  <dd className="mt-2 flex gap-2">
                    {socials.map(({ label: name, href, Icon }) => (
                      <a
                        key={name}
                        href={href}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`UndaNova on ${name}`}
                        className="inline-flex size-10 items-center justify-center border border-white/30 hover:bg-white hover:text-navy"
                      >
                        <Icon className="size-4" />
                      </a>
                    ))}
                  </dd>
                </div>
              )}
            </dl>
            {/* Shown only once an official WhatsApp number is set in lib/site.ts. */}
            {hasWhatsapp && (
              <Button
                href={whatsappUrl("Hi UndaNova, I'd like to talk about a project.")}
                tone="dark"
                className="mt-8 w-full"
              >
                <WhatsAppIcon className="size-4" />
                Chat on WhatsApp
              </Button>
            )}
          </aside>
        </Container>
      </section>
    </>
  );
}
