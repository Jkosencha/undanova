/**
 * Device mock-ups and UI illustrations, drawn in HTML/CSS (no images to download).
 * All are decorative: wrap them in an element with aria-hidden.
 * Numbers and names on the screens are illustrative only.
 */
import type { ReactNode } from "react";

export function PhoneFrame({ children, className = "" }: { children: ReactNode; className?: string }) {
  return (
    <div
      className={`relative aspect-[9/19] rounded-[2.4rem] border border-navy/10 bg-navy p-2 shadow-xl shadow-ink/15 ${className}`}
    >
      <div className="absolute left-1/2 top-3.5 z-10 h-4 w-20 -translate-x-1/2 rounded-full bg-navy" />
      <div className="relative h-full w-full overflow-hidden rounded-[1.9rem] bg-paper">{children}</div>
    </div>
  );
}

export function BrowserFrame({ children, className = "" }: { children: ReactNode; className?: string }) {
  return (
    <div className={`overflow-hidden rounded-xl border border-mist bg-white shadow-xl shadow-ink/10 ${className}`}>
      <div className="flex items-center gap-1.5 border-b border-slate/20 bg-paper px-3 py-2">
        <span className="size-2 rounded-full bg-slate/50" />
        <span className="size-2 rounded-full bg-slate/50" />
        <span className="size-2 rounded-full bg-slate/50" />
        <span className="ml-3 h-3.5 flex-1 rounded-full bg-white" />
      </div>
      {children}
    </div>
  );
}

/** Online shop checkout ending in an M-Pesa payment prompt. */
export function CheckoutScreen() {
  return (
    <div className="flex h-full flex-col px-4 pb-4 pt-10 text-[10px] text-ink">
      <p className="font-heading text-sm text-navy">Your cart</p>
      <div className="mt-3 space-y-2">
        {[
          ["Kiondo basket", "1,800"],
          ["Kikoi scarf", "700"],
        ].map(([item, price]) => (
          <div key={item} className="flex items-center gap-2 rounded-lg bg-white p-2">
            <span className="size-7 rounded-md bg-navy/10" />
            <span className="flex-1 font-medium">{item}</span>
            <span>KES {price}</span>
          </div>
        ))}
      </div>
      <div className="mt-3 flex justify-between border-t border-slate/30 pt-2 font-semibold">
        <span>Total</span>
        <span>KES 2,500</span>
      </div>
      <div className="mt-4 rounded-xl bg-navy p-3 text-white">
        <p className="text-[9px] uppercase tracking-wider text-white/70">M-Pesa payment</p>
        <p className="mt-1 font-medium">Pay KES 2,500?</p>
        <div className="mt-2 flex gap-1">
          {[0, 1, 2, 3].map((i) => (
            <span key={i} className="h-5 flex-1 rounded bg-white/15" />
          ))}
        </div>
        <span className="mt-2 block rounded-full bg-white py-1.5 text-center font-semibold text-navy">Enter PIN</span>
      </div>
    </div>
  );
}

/** Admin dashboard with stats and a bar chart. */
export function DashboardScreen({ compact = false }: { compact?: boolean }) {
  const bars = [40, 62, 48, 75, 58, 88, 70];
  return (
    <div className="flex gap-3 bg-white p-3 text-[10px] text-ink">
      {!compact && (
        <div className="hidden w-20 shrink-0 space-y-2 sm:block">
          <span className="block h-3 w-14 rounded bg-navy" />
          {[0, 1, 2, 3].map((i) => (
            <span key={i} className={`block h-2.5 rounded ${i === 0 ? "bg-plum/40" : "bg-slate/25"}`} />
          ))}
        </div>
      )}
      <div className="min-w-0 flex-1">
        <div className="grid grid-cols-3 gap-2">
          {[
            ["Orders", "48"],
            ["Paid", "KES 126k"],
            ["Reports", "12"],
          ].map(([label, value]) => (
            <div key={label} className="rounded-lg border border-slate/20 p-2">
              <p className="text-[8px] uppercase tracking-wider text-ink/70">{label}</p>
              <p className="mt-0.5 font-heading text-sm text-navy">{value}</p>
            </div>
          ))}
        </div>
        <div className="mt-3 flex h-20 items-end gap-1.5 rounded-lg border border-slate/20 p-2">
          {bars.map((h, i) => (
            <span
              key={i}
              style={{ height: `${h}%` }}
              className={`flex-1 rounded-t ${i === bars.length - 2 ? "bg-plum" : "bg-navy/80"}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

/** A business website: nav, hero and content blocks. */
export function WebsiteScreen() {
  return (
    <div className="bg-white text-[10px]">
      <div className="flex items-center justify-between px-3 py-2">
        <span className="h-2.5 w-12 rounded bg-navy" />
        <span className="flex gap-1.5">
          {[0, 1, 2].map((i) => (
            <span key={i} className="h-1.5 w-6 rounded bg-slate/40" />
          ))}
        </span>
      </div>
      <div className="bg-navy px-3 py-4">
        <span className="block h-3 w-2/3 rounded bg-white" />
        <span className="mt-1.5 block h-2 w-1/2 rounded bg-white/50" />
        <span className="mt-3 block h-4 w-16 rounded-full bg-plum" />
      </div>
      <div className="grid grid-cols-3 gap-2 p-3">
        {[0, 1, 2].map((i) => (
          <span key={i} className="h-10 rounded-md bg-paper" />
        ))}
      </div>
    </div>
  );
}

/** Customer updates over WhatsApp and SMS. */
export function ChatScreen() {
  return (
    <div className="flex h-full flex-col gap-2 bg-paper px-3 pb-4 pt-10 text-[10px]">
      <div className="mb-1 flex items-center gap-2 border-b border-slate/25 pb-2">
        <span className="size-6 rounded-full bg-navy" />
        <span className="font-heading text-xs text-navy">Your shop</span>
      </div>
      <p className="max-w-[80%] self-end rounded-xl rounded-br-sm bg-navy px-3 py-2 text-white">
        Hi! Is the kiondo basket still available?
      </p>
      <p className="max-w-[85%] rounded-xl rounded-bl-sm bg-white px-3 py-2">Yes! Order here and pay with M-Pesa 👇</p>
      <p className="max-w-[85%] rounded-xl rounded-bl-sm bg-white px-3 py-2">
        ✅ Payment received. Your order #1042 ships today.
      </p>
      <p className="max-w-[85%] self-end rounded-xl rounded-br-sm bg-navy px-3 py-2 text-white">Asante sana!</p>
      <div className="mt-auto rounded-lg border border-slate/30 bg-white px-3 py-2 text-ink/70">
        <span className="font-semibold text-navy">SMS · </span>Your order is out for delivery.
      </div>
    </div>
  );
}

/** Small floating notification used around the hero devices. */
export function Toast({
  title,
  text,
  icon,
  className = "",
}: {
  title: string;
  text: string;
  icon: ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`flex items-center gap-3 rounded-2xl border border-slate/20 bg-white px-4 py-3 text-left shadow-lg shadow-ink/10 ${className}`}
    >
      <span className="inline-flex size-9 shrink-0 items-center justify-center rounded-full bg-plum text-white">
        {icon}
      </span>
      <span>
        <span className="block text-sm font-semibold text-navy">{title}</span>
        <span className="block text-xs text-ink/70">{text}</span>
      </span>
    </div>
  );
}

/** Uptime/status board for the support service. */
export function StatusScreen() {
  return (
    <div className="space-y-2 bg-white p-3 text-[10px]">
      {["Website", "Backups", "Security updates"].map((label) => (
        <div key={label} className="flex items-center justify-between rounded-lg border border-slate/20 px-3 py-2">
          <span className="font-medium text-ink">{label}</span>
          <span className="inline-flex items-center gap-1.5 font-semibold text-navy">
            <span className="size-2 rounded-full bg-plum" /> OK
          </span>
        </div>
      ))}
      <div className="flex h-8 items-end gap-0.5 px-1">
        {Array.from({ length: 30 }, (_, i) => (
          <span key={i} className="h-full flex-1 rounded-sm bg-plum/70" />
        ))}
      </div>
    </div>
  );
}
