import { cacheLife } from "next/cache";
import Image from "next/image";
import Link from "next/link";
import { InstagramIcon, LinkedInIcon, WhatsAppIcon } from "@/components/icons";
import { Container } from "@/components/section";
import { services } from "@/content/services";
import { hasWhatsapp, nav, site, whatsappUrl } from "@/lib/site";

// Cached and refreshed daily, so the © year stays current without making pages dynamic.
async function CurrentYear() {
  "use cache";
  cacheLife("days");
  return new Date().getFullYear();
}

const heading = "caps-sm text-white/60";
const link = "inline-flex min-h-10 items-center text-sm text-white/80 transition-colors hover:text-white";

export function SiteFooter() {
  const socials = [
    { label: "UndaNova on LinkedIn", href: site.social.linkedin, Icon: LinkedInIcon },
    { label: "UndaNova on Instagram", href: site.social.instagram, Icon: InstagramIcon },
  ].filter((s) => s.href);

  return (
    // Extra bottom padding on mobile so the floating WhatsApp button doesn't cover content.
    <footer className="overflow-x-clip border-t border-white/15 bg-navy pb-24 pt-16 text-white md:pb-0 md:pt-20">
      <Container>
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-[1.5fr_1fr_0.8fr_1fr]">
          <div className="sm:col-span-2 lg:col-span-1">
            <Image
              src="/brand/undanova-logo-white.svg"
              alt="UndaNova"
              width={1028}
              height={189}
              className="h-8 w-auto"
            />
            <p className="caps mt-6 text-sm text-white/90">{site.tagline}</p>
            <p className="mt-3 max-w-xs text-sm text-white/70">{site.description}</p>
          </div>

          <nav aria-labelledby="footer-services">
            <h2 id="footer-services" className={heading}>
              Services
            </h2>
            <ul className="mt-4">
              {services.map((service) => (
                <li key={service.slug}>
                  <Link href={`/services#${service.slug}`} prefetch={false} className={link}>
                    {service.title}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <nav aria-labelledby="footer-pages">
            <h2 id="footer-pages" className={heading}>
              Pages
            </h2>
            <ul className="mt-4">
              {nav.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} prefetch={false} className={link}>
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <h2 className={heading}>Get in touch</h2>
            <ul className="mt-4">
              <li>
                <a href={`mailto:${site.email}`} className={link}>
                  {site.email}
                </a>
              </li>
              {hasWhatsapp && (
                <li>
                  <a href={whatsappUrl()} target="_blank" rel="noopener noreferrer" className={`${link} gap-2`}>
                    <WhatsAppIcon className="size-4" />
                    WhatsApp
                  </a>
                </li>
              )}
              <li className="flex min-h-10 items-center text-sm text-white/80">{site.location}</li>
            </ul>
            {socials.length > 0 && (
              <ul className="mt-3 flex gap-2">
                {socials.map(({ label, href, Icon }) => (
                  <li key={label}>
                    <a
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={label}
                      className="inline-flex size-10 items-center justify-center border border-white/25 hover:bg-white hover:text-navy"
                    >
                      <Icon className="size-4" />
                    </a>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
      </Container>

      <div className="mt-16 border-t border-white/10 bg-night py-5 text-xs text-white/70">
        <Container className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
          <p className="tracking-[0.08em]">
            © <CurrentYear /> UndaNova. All rights reserved.
          </p>
          <ul className="flex gap-6">
            <li>
              <Link href="/privacy" prefetch={false} className="inline-flex min-h-10 items-center hover:text-white">
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link href="/terms" prefetch={false} className="inline-flex min-h-10 items-center hover:text-white">
                Terms of Service
              </Link>
            </li>
          </ul>
        </Container>
      </div>
    </footer>
  );
}
