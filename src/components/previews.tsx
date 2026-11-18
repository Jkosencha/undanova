/**
 * Illustration panels for services and projects, built from the mock-ups.
 * Decorative: always rendered with aria-hidden.
 */
import {
  BrowserFrame,
  ChatScreen,
  CheckoutScreen,
  DashboardScreen,
  PhoneFrame,
  StatusScreen,
  WebsiteScreen,
} from "@/components/mockups";

export type PreviewKind = "website" | "shop" | "dashboard" | "support" | "app";

/** A navy panel with a device illustration centred in it. */
export function PreviewPanel({ kind, className = "" }: { kind: PreviewKind; className?: string }) {
  const phone = kind === "shop" || kind === "app";
  return (
    <div
      aria-hidden
      className={`relative isolate flex justify-center overflow-hidden rounded-2xl bg-navy bg-dots px-6 pt-8 ${phone ? "items-start" : "items-end"} ${className}`}
    >
      <div className="pointer-events-none absolute left-1/2 top-1/2 -z-10 size-72 -translate-x-1/2 -translate-y-1/2 glow-plum opacity-70" />
      {phone ? (
        <PhoneFrame className="w-44 shrink-0 transition-transform duration-500 group-hover:-translate-y-2">
          {kind === "shop" ? <CheckoutScreen /> : <ChatScreen />}
        </PhoneFrame>
      ) : (
        <BrowserFrame className="w-full max-w-md -mb-px rounded-b-none transition-transform duration-500 group-hover:-translate-y-2">
          {kind === "website" && <WebsiteScreen />}
          {kind === "dashboard" && <DashboardScreen compact />}
          {kind === "support" && <StatusScreen />}
        </BrowserFrame>
      )}
    </div>
  );
}
