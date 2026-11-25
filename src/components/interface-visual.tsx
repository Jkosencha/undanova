/**
 * Abstract, technology-inspired visuals: layered interface elements and
 * connected systems, drawn in HTML/CSS (no stock photos, nothing to download).
 * Decorative: rendered with aria-hidden. Numbers on screens are illustrative.
 */
import { BrowserFrame, ChatScreen, DashboardScreen, PhoneFrame, WebsiteScreen } from "@/components/mockups";

/** Three connected nodes: a simple picture of an automated workflow. */
function WorkflowCard({ className = "" }: { className?: string }) {
  const nodes = ["Form", "CRM", "Report"];
  return (
    <div className={`border border-mist bg-white p-4 shadow-lg shadow-ink/10 ${className}`}>
      <p className="caps-sm text-[9px] text-ink/60">Automated workflow</p>
      <div className="mt-3 flex items-center">
        {nodes.map((n, i) => (
          <div key={n} className="flex items-center">
            <span
              className={`inline-flex h-7 items-center border px-2.5 text-[10px] font-semibold ${
                i === 1 ? "border-navy bg-navy text-white" : "border-navy/30 text-navy"
              }`}
            >
              {n}
            </span>
            {i < nodes.length - 1 && <span className="h-px w-5 bg-navy/40 sm:w-7" />}
          </div>
        ))}
      </div>
    </div>
  );
}

function StatusCard({ className = "" }: { className?: string }) {
  return (
    <div className={`border border-mist bg-white px-4 py-3 shadow-lg shadow-ink/10 ${className}`}>
      <p className="caps-sm text-[9px] text-ink/60">Deployment</p>
      <p className="mt-1 flex items-center gap-2 text-xs font-semibold text-navy">
        <span className="size-1.5 bg-navy" />
        Live and running
      </p>
    </div>
  );
}

/** Hero composition: a dashboard, a website on a phone and floating system cards. */
export function InterfaceVisual({ className = "" }: { className?: string }) {
  return (
    <div aria-hidden className={`relative mx-auto aspect-[6/5] w-full max-w-[560px] ${className}`}>
      {/* Faint grid behind everything, like a design canvas */}
      <div className="absolute inset-[6%] border border-mist bg-[linear-gradient(var(--color-mist)_1px,transparent_1px),linear-gradient(90deg,var(--color-mist)_1px,transparent_1px)] bg-[size:40px_40px] opacity-70" />
      <BrowserFrame className="absolute right-0 top-[8%] w-[82%]">
        <DashboardScreen />
      </BrowserFrame>
      <div className="absolute bottom-0 left-[2%] w-[30%] max-w-[150px]">
        <PhoneFrame className="w-full">
          <WebsiteScreen />
        </PhoneFrame>
      </div>
      <WorkflowCard className="absolute bottom-[10%] right-[2%] sm:right-[4%]" />
      <StatusCard className="absolute left-[8%] top-0 hidden sm:block" />
    </div>
  );
}

/** Smaller composition for secondary sections: a website and a conversation. */
export function ConnectedVisual({ className = "" }: { className?: string }) {
  return (
    <div aria-hidden className={`relative mx-auto aspect-[5/4] w-full max-w-[480px] ${className}`}>
      <BrowserFrame className="absolute left-0 top-[6%] w-[78%]">
        <WebsiteScreen />
      </BrowserFrame>
      <div className="absolute bottom-0 right-[4%] w-[34%] max-w-[160px]">
        <PhoneFrame className="w-full">
          <ChatScreen />
        </PhoneFrame>
      </div>
      <WorkflowCard className="absolute bottom-[6%] left-[4%]" />
    </div>
  );
}
