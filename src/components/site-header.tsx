"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { buttonClasses } from "@/components/button";
import { Container } from "@/components/section";
import { CloseIcon, MenuIcon } from "@/components/icons";
import { nav } from "@/lib/site";

const activeLink =
  "aria-[current=page]:text-white aria-[current=page]:underline aria-[current=page]:decoration-wave aria-[current=page]:decoration-2 aria-[current=page]:underline-offset-8";

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
    <header className="sticky top-0 z-40 border-b border-white/10 bg-navy/95 text-white">
      <Container className="flex h-16 items-center justify-between gap-4 md:h-20">
        <Link
          href="/"
          className="inline-flex min-h-11 items-center"
          aria-label="UndaNova home"
          onClick={() => setOpen(false)}
        >
          <Image
            src="/brand/undanova-logo-white.svg"
            alt="UndaNova"
            width={611}
            height={317}
            priority
            className="h-11 w-auto md:h-14"
          />
        </Link>

        {/* Desktop navigation */}
        <nav aria-label="Main" className="hidden items-center gap-8 md:flex">
          <ul className="flex items-center gap-7">
            {nav.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  aria-current={isActive(item.href) ? "page" : undefined}
                  className={`py-2 font-medium text-white/80 transition-colors hover:text-white ${activeLink}`}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
          <Link href="/contact" className={buttonClasses("primary", "dark")}>
            Start a project
          </Link>
        </nav>

        {/* Mobile menu toggle */}
        <button
          ref={toggleRef}
          type="button"
          className="inline-flex size-11 items-center justify-center rounded-full text-white hover:bg-white/10 md:hidden"
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
        className="absolute inset-x-0 top-full h-[calc(100dvh-4rem)] overflow-y-auto bg-navy bg-dots md:hidden"
      >
        <Container className="py-6">
          <ul className="flex flex-col">
            {nav.map((item, i) => (
              <li key={item.href} className="animate-rise" style={{ animationDelay: `${i * 60}ms` }}>
                <Link
                  href={item.href}
                  aria-current={isActive(item.href) ? "page" : undefined}
                  onClick={() => setOpen(false)}
                  className={`flex min-h-16 items-center border-b border-white/10 font-heading text-3xl text-white/85 ${activeLink}`}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
          <Link
            href="/contact"
            onClick={() => setOpen(false)}
            className={buttonClasses("primary", "dark", "mt-8 w-full")}
          >
            Start a project
          </Link>
        </Container>
      </nav>
    </header>
  );
}
