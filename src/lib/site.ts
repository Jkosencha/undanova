/**
 * Site-wide details. Change contact info here and it updates everywhere.
 * Only verified, official details go here (see the content guidelines).
 */
export const site = {
  name: "UndaNova",
  descriptor: "Digital Labs",
  tagline: "We build what's next.",
  description:
    "UndaNova is a digital solutions studio designing and building practical software, digital platforms and technology solutions for businesses and organizations.",
  // TODO: confirm the domain (undanova.com or undanova.co.ke).
  url: "https://undanova.com",
  // TODO: replace with the verified official UndaNova email address.
  email: "hello@undanova.com",
  // Official WhatsApp/phone number in international format, digits only (e.g. 2547XXXXXXXX).
  // Leave empty until an official business number is available: WhatsApp buttons stay hidden until then.
  whatsappNumber: "",
  location: "Kenya",
  // TODO: registered business name, once registered.
  legalName: "UndaNova",
  // Verified official profiles only. Icons are hidden until a link is filled in.
  social: {
    linkedin: "",
    instagram: "",
  },
} as const;

/** True once an official WhatsApp number is set. */
export const hasWhatsapp = site.whatsappNumber.length > 0;

export const nav = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Our Work", href: "/work" },
  { label: "Contact", href: "/contact" },
] as const;

export function whatsappUrl(message?: string) {
  const base = `https://wa.me/${site.whatsappNumber}`;
  return message ? `${base}?text=${encodeURIComponent(message)}` : base;
}
