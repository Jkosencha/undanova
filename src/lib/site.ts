/**
 * Site-wide details. Change contact info here and it updates everywhere.
 */
export const site = {
  name: "UndaNova",
  tagline: "We build what's next.",
  description:
    "UndaNova designs and builds websites, apps and business systems for growing businesses, NGOs and schools in Kenya.",
  // TODO: confirm domain (undanova.com or undanova.co.ke).
  url: "https://undanova.com",
  // TODO: Jennifer's business email address.
  email: "hello@undanova.com",
  // TODO: WhatsApp number in international format, digits only (e.g. 2547XXXXXXXX).
  whatsappNumber: "254700000000",
  // TODO: city, e.g. "Nairobi, Kenya".
  location: "Kenya",
  responseTime: "We reply within 24 hours",
  // TODO: keep this current (e.g. "Booking projects from February 2027"), or set to "" to hide it.
  availability: "Taking on new projects",
  // TODO: registered business name and number, once registered.
  legalName: "UndaNova",
  // TODO: social media links. Icons are hidden until a link is filled in.
  social: {
    linkedin: "",
    instagram: "",
  },
} as const;

export const nav = [
  { label: "Services", href: "/services" },
  { label: "Work", href: "/work" },
  { label: "SaaS", href: "/saas" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
] as const;

export function whatsappUrl(message?: string) {
  const base = `https://wa.me/${site.whatsappNumber}`;
  return message ? `${base}?text=${encodeURIComponent(message)}` : base;
}
