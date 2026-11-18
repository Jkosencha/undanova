import type { ReactNode } from "react";
import { HeroWaves } from "@/components/brand-shapes";
import { ChatScreen, CheckoutScreen, DashboardScreen, WebsiteScreen } from "@/components/mockups";
import { PhoneInHand } from "@/components/phone-in-hand";
import { Container } from "@/components/section";
import type { WorkItem } from "@/content/work";

/** Phone screen matching a project's preview kind. */
export function previewScreen(kind: WorkItem["preview"] | "chat") {
  if (kind === "shop") return <CheckoutScreen />;
  if (kind === "dashboard") return <DashboardScreen compact />;
  if (kind === "website") return <WebsiteScreen />;
  return <ChatScreen />;
}

/** Snapview-style hero for the Work pages: text left, phone in hand right. */
export function WorkHero({ children, screen }: { children: ReactNode; screen: ReactNode }) {
  return (
    <section className="relative isolate overflow-hidden bg-satin text-white">
      <div aria-hidden className="absolute inset-0 -z-10 bg-dots opacity-40" />
      <HeroWaves className="bottom-0 -z-10 h-32 opacity-50" />
      <Container className="grid items-end gap-6 pt-14 md:grid-cols-[1.1fr_1fr] md:pt-20">
        <div className="pb-14 md:pb-24">{children}</div>
        <PhoneInHand className="mx-auto -mb-16 w-64 sm:w-72 md:-mb-20 md:w-80">{screen}</PhoneInHand>
      </Container>
    </section>
  );
}
