import { cacheLife } from "next/cache";
import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/section";
import { InstagramIcon, LinkedInIcon, WhatsAppIcon } from "@/components/icons";
import { nav, site, whatsappUrl } from "@/lib/site";

// Cached and refreshed daily, so the © year stays current without making pages dynamic.
async function CurrentYear() {
  "use cache";
  cacheLife("days");
  return new Date().getFullYear();
}

export function SiteFooter() {
  const socials = [
    { label: "UndaNova on LinkedIn", href: site.social.linkedin, Icon: LinkedInIcon },
    { label: "UndaNova on Instagram", href: site.social.instagram, Icon: InstagramIcon },
  ].filter((s) => s.href);

  return (
    // Extra bottom padding on mobile so the floating WhatsApp button doesn't cover content.
    <footer className="bg-navy pb-24 pt-16 text-white md:pb-12">
      <Container>
        <div className="grid gap-10 md:grid-cols-[1.5fr_1fr_1fr]">
          <div>
            <Image
              src="/brand/undanova-logo-white.svg"
              alt="UndaNova"
              width={611}
              height={317}
              className="h-14 w-auto"
            />
            <p className="mt-4 font-heading text-xl">{site.tagline}</p>
          </div>

          <nav aria-label="Footer">
            <h2 className="text-sm font-semibold uppercase tracking-wider text-slate">Pages</h2>
            <ul className="mt-3">
              {nav.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="inline-flex min-h-11 items-center hover:underline">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <h2 className="text-sm font-semibold uppercase tracking-wider text-slate">Get in touch</h2>
            <ul className="mt-3">
              <li>
                <a href={`mailto:${site.email}`} className="inline-flex min-h-11 items-center hover:underline">
                  {site.email}
                </a>
              </li>
              <li>
                <a
                  href={whatsappUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex min-h-11 items-center gap-2 hover:underline"
                >
                  <WhatsAppIcon className="size-5" />
                  WhatsApp
                </a>
              </li>
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
                      className="inline-flex size-11 items-center justify-center rounded-full hover:bg-white/10"
                    >
                      <Icon className="size-5" />
                    </a>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>

        <p className="mt-12 border-t border-white/15 pt-6 text-sm text-slate">
          © <CurrentYear /> UndaNova. Made in Kenya.
        </p>
      </Container>
    </footer>
  );
}
