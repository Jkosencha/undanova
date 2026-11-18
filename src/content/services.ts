/**
 * The services UndaNova offers. The home page uses `title` and `summary`;
 * the Services page (Phase 3) adds the full details.
 */
export type Service = {
  slug: string;
  title: string;
  summary: string;
};

export const services: Service[] = [
  {
    slug: "business-websites",
    title: "Business websites",
    summary: "A fast, professional site that brings you customers.",
  },
  {
    slug: "ngo-school-systems",
    title: "NGO & school systems",
    summary: "Manage donors, beneficiaries, students and reports in one place.",
  },
  {
    slug: "ecommerce-mpesa",
    title: "E-commerce with M-Pesa",
    summary: "Sell online and get paid straight to M-Pesa.",
  },
  {
    slug: "support-maintenance",
    title: "Support & maintenance",
    summary: "We keep your site secure, updated and running.",
  },
];
