import type { Metadata, Viewport } from "next";
import { Hanken_Grotesk, Jost } from "next/font/google";
import { OrganizationJsonLd } from "@/components/json-ld";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { WhatsAppFloat } from "@/components/whatsapp-float";
import { site } from "@/lib/site";
import "./globals.css";

// Headings: a clean geometric sans, set in wide-tracked capitals for an elegant, minimal feel.
const display = Jost({ variable: "--font-display", subsets: ["latin"] });
// Body: warm and very readable at small sizes.
const body = Hanken_Grotesk({ variable: "--font-body", subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: "UndaNova Digital Labs | We build what's next",
    template: "%s | UndaNova",
  },
  description: site.description,
  openGraph: {
    type: "website",
    siteName: site.name,
    locale: "en_KE",
  },
};

export const viewport: Viewport = {
  // Brand deep teal-blue (#153A4C). Meta tags can't read CSS variables, so this is the one hex outside the theme.
  themeColor: "#153A4C",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${display.variable} ${body.variable} h-full antialiased`}>
      <body className="flex min-h-full flex-col">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:bg-navy focus:px-4 focus:py-2 focus:text-white"
        >
          Skip to content
        </a>
        <OrganizationJsonLd />
        <SiteHeader />
        <main id="main" className="flex flex-1 flex-col">
          {children}
        </main>
        <SiteFooter />
        <WhatsAppFloat />
        <a
          href="#main"
          aria-label="Back to top"
          className="to-top fixed bottom-4 left-4 z-30 size-11 items-center justify-center border border-navy/20 bg-white text-navy md:bottom-6 md:left-auto md:right-6"
        >
          <svg
            viewBox="0 0 24 24"
            aria-hidden
            className="size-5"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="m6 15 6-6 6 6" />
          </svg>
        </a>
      </body>
    </html>
  );
}
