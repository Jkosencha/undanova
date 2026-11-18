import type { Metadata, Viewport } from "next";
import { Bricolage_Grotesque, Hanken_Grotesk, IBM_Plex_Mono, Instrument_Serif } from "next/font/google";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { WhatsAppFloat } from "@/components/whatsapp-float";
import { site } from "@/lib/site";
import "./globals.css";

// Headings: a characterful grotesque with ink traps (variable, 200-800).
const display = Bricolage_Grotesque({ variable: "--font-display", subsets: ["latin"] });
// Body: warm and very readable at small sizes.
const body = Hanken_Grotesk({ variable: "--font-body", subsets: ["latin"] });
// Accent words in headings.
const serif = Instrument_Serif({ variable: "--font-accent", subsets: ["latin"], weight: "400", style: "italic" });
// Small technical labels (step numbers, status tags). Not preloaded: never above the fold's main text.
const mono = IBM_Plex_Mono({ variable: "--font-code", subsets: ["latin"], weight: ["400", "500"], preload: false });

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: "UndaNova | We build what's next",
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
  // Imperial Blue (#001D51). Meta tags can't read CSS variables, so this is the one hex outside the theme.
  themeColor: "#001D51",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${display.variable} ${body.variable} ${serif.variable} ${mono.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded-full focus:bg-navy focus:px-4 focus:py-2 focus:text-white"
        >
          Skip to content
        </a>
        {/* Reading progress, driven by scroll in CSS */}
        <div
          aria-hidden
          className="scroll-progress fixed inset-x-0 top-0 z-50 h-0.5 bg-gradient-to-r from-plum via-lilac to-white"
        />
        <SiteHeader />
        <main id="main" className="flex flex-1 flex-col">
          {children}
        </main>
        <SiteFooter />
        <WhatsAppFloat />
        <a
          href="#main"
          aria-label="Back to top"
          className="to-top fixed bottom-4 left-4 z-30 size-12 items-center justify-center rounded-full border border-white/20 bg-navy text-white shadow-lg shadow-navy/30 md:bottom-6 md:left-auto md:right-6"
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
