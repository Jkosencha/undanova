import { cacheLife } from "next/cache";
import Image from "next/image";
import Link from "next/link";
import { HeroWaves } from "@/components/brand-shapes";
import { Button } from "@/components/button";
import { Container } from "@/components/section";
import { InstagramIcon, LinkedInIcon, WhatsAppIcon } from "@/components/icons";
import { services } from "@/content/services";
import { nav, site, whatsappUrl } from "@/lib/site";

// Cached and refreshed daily, so the © year stays current without making pages dynamic.
async function CurrentYear() {
  "use cache";
  cacheLife("days");
  return new Date().getFullYear();
}

const heading = "text-sm font-semibold uppercase tracking-[0.18em] text-slate";
const link = "inline-flex min-h-11 items-center text-white/85 transition-colors hover:text-white";

export function SiteFooter() {
  const socials = [
    { label: "UndaNova on LinkedIn", href: site.social.linkedin, Icon: LinkedInIcon },
    { label: "UndaNova on Instagram", href: site.social.instagram, Icon: InstagramIcon },
  ].filter((s) => s.href);

  return (
    // Extra bottom padding on mobile so the floating WhatsApp button doesn't cover content.
    <footer className="relative isolate overflow-hidden bg-navy pb-24 pt-16 text-white md:pb-10 md:pt-20">
      <HeroWaves className="top-0 -z-10 h-40 opacity-25" />
      <Container>
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-[1.6fr_1fr_0.8fr_1fr]">
          <div className="sm:col-span-2 lg:col-span-1">
            <Image
              src="/brand/undanova-logo-white.svg"
              alt="UndaNova"
              width={611}
              height={317}
              className="h-16 w-auto"
            />
            <p className="mt-5 font-heading text-3xl font-semibold">{site.tagline}</p>
            <p className="mt-2 max-w-sm text-white/75">
              Websites, apps and business systems for growing businesses, NGOs and schools.
            </p>
            <Button href={whatsappUrl()} tone="dark" className="mt-6">
              <WhatsAppIcon className="size-5" />
              Chat on WhatsApp
            </Button>
          </div>

          <nav aria-labelledby="footer-services">
            <h2 id="footer-services" className={heading}>
              Services
            </h2>
            <ul className="mt-3">
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
            <ul className="mt-3">
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
            <ul className="mt-3">
              <li>
                <a href={`mailto:${site.email}`} className={link}>
                  {site.email}
                </a>
              </li>
              <li>
                <a href={whatsappUrl()} target="_blank" rel="noopener noreferrer" className={`${link} gap-2`}>
                  <WhatsAppIcon className="size-5" />
                  WhatsApp
                </a>
              </li>
              <li className="flex min-h-11 items-center text-white/85">{site.location}</li>
            </ul>
            {socials.length > 0 && (
              <ul className="mt-2 flex gap-2">
                {socials.map(({ label, href, Icon }) => (
                  <li key={label}>
                    <a
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={label}
                      className="inline-flex size-11 items-center justify-center rounded-full border border-white/20 hover:bg-white/10"
                    >
                      <Icon className="size-5" />
                    </a>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-2 border-t border-white/15 pt-6 text-sm text-slate sm:flex-row sm:justify-between">
          <p>
            © <CurrentYear /> UndaNova. Made in Kenya.
          </p>
          <p>{site.responseTime}.</p>
        </div>
      </Container>
    </footer>
  );
}
