import { WhatsAppIcon } from "@/components/icons";
import { whatsappUrl } from "@/lib/site";

/** Floating WhatsApp button, mobile only. */
export function WhatsAppFloat() {
  return (
    <a
      href={whatsappUrl("Hi UndaNova, I'd like to talk about a project.")}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with UndaNova on WhatsApp"
      className="fixed right-4 z-30 inline-flex size-14 items-center justify-center rounded-full bg-navy text-white shadow-lg ring-1 ring-white/20 md:hidden"
      style={{ bottom: "max(1rem, env(safe-area-inset-bottom))" }}
    >
      <WhatsAppIcon className="size-7" />
    </a>
  );
}
