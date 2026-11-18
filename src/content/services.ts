/**
 * The services UndaNova offers. The home page uses `title` and `summary`;
 * the Services page shows everything.
 */
export type Service = {
  slug: string;
  title: string;
  summary: string;
  /** Who the service is for, in one or two sentences. */
  audience: string;
  included: string[];
};

export const services: Service[] = [
  {
    slug: "business-websites",
    title: "Business websites",
    summary: "A fast, professional site that brings you customers.",
    audience:
      "For shops, clinics, consultants and service businesses that need to look professional online and make it easy for customers to get in touch.",
    included: [
      "Up to about 6 pages",
      "Mobile-first design that works on any phone",
      "Contact form and WhatsApp button",
      "Google Maps so customers can find you",
      "Basic SEO so you show up on Google",
      "Hosting set up for you",
    ],
  },
  {
    slug: "ngo-school-systems",
    title: "NGO & school systems",
    summary: "Manage donors, beneficiaries, students and reports in one place.",
    audience:
      "For NGOs and schools still running on spreadsheets and paper, who need their records in one safe place and reports without the late nights.",
    included: [
      "Custom dashboards that show what matters at a glance",
      "User roles, so admins and staff see the right things",
      "Records management for donors, beneficiaries or students",
      "Reports exported to PDF and CSV",
      "SMS notifications",
    ],
  },
  {
    slug: "ecommerce-mpesa",
    title: "E-commerce with M-Pesa",
    summary: "Sell online and get paid straight to M-Pesa.",
    audience:
      "For businesses selling on WhatsApp or Instagram that want a proper online shop, with orders and payments handled for them.",
    included: [
      "Product catalogue",
      "Shopping cart and orders",
      "M-Pesa checkout: customers get a payment prompt on their phone (STK Push)",
      "Order notifications for you and your customers",
      "Admin dashboard to manage products and orders",
    ],
  },
  {
    slug: "support-maintenance",
    title: "Support & maintenance",
    summary: "We keep your site secure, updated and running.",
    audience:
      "For anyone with a website or system already live, whether we built it or not, who wants someone reliable looking after it.",
    included: [
      "Monthly plans",
      "Software updates",
      "Regular backups",
      "Security checks",
      "Small changes and content updates",
      "Uptime monitoring, so we know if your site goes down",
    ],
  },
];

/** Not offered yet; shown as a short note on the Services page and in the contact form. */
export const comingSoon = {
  slug: "mobile-apps",
  title: "Mobile apps",
  note: "Coming soon — ask us about your app idea.",
};
