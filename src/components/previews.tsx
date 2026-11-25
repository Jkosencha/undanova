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

/** A soft grey panel with a device illustration, like a screenshot thumbnail. */
export function PreviewPanel({ kind, className = "" }: { kind: PreviewKind; className?: string }) {
  const phone = kind === "shop" || kind === "app";
  return (
    <div
      aria-hidden
      className={`relative flex justify-center overflow-hidden bg-paper px-6 pt-8 ${phone ? "items-start" : "items-end"} ${className}`}
    >
      {phone ? (
        <PhoneFrame className="w-40 shrink-0 transition-transform duration-500 group-hover:-translate-y-1">
          {kind === "shop" ? <CheckoutScreen /> : <ChatScreen />}
        </PhoneFrame>
      ) : (
        <BrowserFrame className="w-full max-w-md -mb-px rounded-b-none border-mist transition-transform duration-500 group-hover:-translate-y-1">
          {kind === "website" && <WebsiteScreen />}
          {kind === "dashboard" && <DashboardScreen compact />}
          {kind === "support" && <StatusScreen />}
        </BrowserFrame>
      )}
    </div>
  );
}
