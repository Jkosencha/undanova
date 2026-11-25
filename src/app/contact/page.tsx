/**
 * Contact: two panels. A teal-blue panel (over a toned photo) with the heading,
 * guidance on what to include and contact details; the inquiry form beside it.
 */
import type { Metadata } from "next";
import { Suspense } from "react";
import { Button } from "@/components/button";
import { ContactForm, ContactFormWithParams } from "@/components/contact-form";
import { InstagramIcon, LinkedInIcon, WhatsAppIcon } from "@/components/icons";
import { PhotoBackground } from "@/components/photo-background";
import { hasWhatsapp, site, whatsappUrl } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Start a project with UndaNova. Tell us about your website, software, business system or digital transformation idea.",
};

// Guidance only (not promises): what makes an inquiry easy to respond to.
const tips = [
  { title: "Your organization", text: "Who you are and what you do." },
  { title: "The challenge or idea", text: "What you'd like to build, fix or improve." },
  { title: "Timeline and budget", text: "Any dates or ranges you have in mind, if known." },
];

const label = "caps-sm text-[10px] text-white/70";

export default function ContactPage() {
  const socials = [
    { label: "LinkedIn", href: site.social.linkedin, Icon: LinkedInIcon },
    { label: "Instagram", href: site.social.instagram, Icon: InstagramIcon },
  ].filter((s) => s.href);

  return (
    <section aria-labelledby="contact-title" className="grid lg:min-h-[calc(100svh-5rem)] lg:grid-cols-[0.95fr_1.05fr]">
      {/* Left: heading, guidance and details */}
      <div className="relative isolate overflow-clip bg-navy px-5 py-20 text-white sm:px-8 md:py-24 lg:pl-[max(2rem,calc((100vw-1200px)/2+2rem))] lg:pr-16">
        <PhotoBackground photo="whiteMacbook" veil="deep" priority sizes="(min-width: 1024px) 48vw, 100vw" />
        <div className="max-w-md">
          <p className="caps-sm text-white/80">Contact</p>
          <h1 id="contact-title" className="headline mt-6 text-4xl md:text-5xl">
            Let&apos;s build something meaningful.
          </h1>
          <p className="mt-7 text-lg text-white/85">
            Have a project in mind, a business challenge to solve or an idea you&apos;d like to bring to life? We&apos;d
            love to hear about it.
          </p>

          <h2 className="caps-sm mt-12 text-white/80">What to include</h2>
          <ol className="mt-5 space-y-5">
            {tips.map((tip, i) => (
              <li key={tip.title} className="flex gap-4">
                <span className="font-heading text-2xl font-light leading-none text-steel">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span>
                  <span className="block font-heading text-white">{tip.title}</span>
                  <span className="block text-sm text-white/75">{tip.text}</span>
                </span>
              </li>
            ))}
          </ol>

          <dl className="mt-12 grid gap-6 border-t border-white/20 pt-8 sm:grid-cols-2">
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
              <div className="sm:col-span-2">
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
              variant="secondary"
              className="mt-8"
            >
              <WhatsAppIcon className="size-4" />
              Chat on WhatsApp
            </Button>
          )}
        </div>
      </div>

      {/* Right: the inquiry form */}
      <div className="bg-white px-5 py-20 sm:px-8 md:py-24 lg:pl-16 lg:pr-[max(2rem,calc((100vw-1200px)/2+2rem))]">
        <div className="max-w-xl">
          <h2 className="caps text-xl text-navy">Send an inquiry</h2>
          <p className="mt-3 text-ink">Tell us a little about your project and we&apos;ll get back to you by email.</p>
          <div className="mt-10">
            {/* The URL's ?service= is only known in the browser, so the pre-filled
                form renders there; the static page ships the same form without it. */}
            <Suspense fallback={<ContactForm />}>
              <ContactFormWithParams />
            </Suspense>
          </div>
        </div>
      </div>
    </section>
  );
}
