"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { buttonClasses } from "@/components/button";
import { CloseIcon, MenuIcon, WhatsAppIcon } from "@/components/icons";
import { Container } from "@/components/section";
import { hasWhatsapp, nav, site, whatsappUrl } from "@/lib/site";

// Small, wide-tracked caps with a thin underline on hover and on the current page.
const linkStyle =
  "relative py-2 font-heading text-[11px] font-medium uppercase tracking-[0.24em] text-ink transition-colors hover:text-navy " +
  "after:absolute after:inset-x-0 after:bottom-0 after:h-px after:origin-left after:scale-x-0 after:bg-navy after:transition-transform after:duration-300 " +
  "hover:after:scale-x-100 aria-[current=page]:text-navy aria-[current=page]:after:scale-x-100";

export function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const toggleRef = useRef<HTMLButtonElement>(null);

  const isActive = (href: string) => pathname === href || pathname.startsWith(`${href}/`);

  // Close the mobile menu with Escape and return focus to the toggle.
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpen(false);
        toggleRef.current?.focus();
      }
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <header className="sticky top-0 z-40 border-b border-mist bg-white/95">
      <Container className="flex h-16 items-center justify-between gap-6 md:h-20">
        <Link
          href="/"
          className="inline-flex min-h-11 items-center"
          aria-label="UndaNova home"
          onClick={() => setOpen(false)}
        >
          <Image
            src="/brand/undanova-logo-primary.svg"
            alt="UndaNova"
            width={1028}
            height={189}
            priority
            className="h-7 w-auto md:h-8"
          />
        </Link>

        {/* Desktop navigation */}
        <nav aria-label="Main" className="hidden items-center gap-10 lg:flex">
          <ul className="flex items-center gap-8">
            {nav.map((item) => (
              <li key={item.href}>
                <Link href={item.href} aria-current={isActive(item.href) ? "page" : undefined} className={linkStyle}>
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
          <Link href="/contact" className={buttonClasses("secondary", "light", "px-5")}>
            Start a Project
          </Link>
        </nav>

        {/* Mobile menu toggle */}
        <button
          ref={toggleRef}
          type="button"
          className="inline-flex size-11 items-center justify-center text-navy lg:hidden"
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <CloseIcon className="size-6" /> : <MenuIcon className="size-6" />}
        </button>
      </Container>

      {/* Mobile menu panel */}
      <nav
        id="mobile-menu"
        aria-label="Main"
        hidden={!open}
        className="absolute inset-x-0 top-full h-[calc(100dvh-4rem)] overflow-y-auto bg-white md:h-[calc(100dvh-5rem)] lg:hidden"
      >
        <Container className="py-8">
          <ul className="flex flex-col">
            {nav.map((item, i) => (
              <li key={item.href} className="animate-rise" style={{ animationDelay: `${i * 50}ms` }}>
                <Link
                  href={item.href}
                  aria-current={isActive(item.href) ? "page" : undefined}
                  onClick={() => setOpen(false)}
                  className="flex min-h-16 items-center border-b border-mist font-heading text-lg font-light uppercase tracking-[0.3em] text-ink aria-[current=page]:text-navy aria-[current=page]:font-normal"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
          <Link
            href="/contact"
            onClick={() => setOpen(false)}
            className={buttonClasses("primary", "light", "mt-10 w-full")}
          >
            Start a Project
          </Link>
          <div className={`mt-4 grid gap-3 ${hasWhatsapp ? "grid-cols-2" : ""}`}>
            {hasWhatsapp && (
              <a
                href={whatsappUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className={buttonClasses("secondary", "light", "w-full")}
              >
                <WhatsAppIcon className="size-4" />
                WhatsApp
              </a>
            )}
            <a href={`mailto:${site.email}`} className={buttonClasses("secondary", "light", "w-full")}>
              Email us
            </a>
          </div>
        </Container>
      </nav>
    </header>
  );
}
