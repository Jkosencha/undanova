/**
 * Ready-made systems (SaaS) shown on /saas.
 * TODO: all wording here is placeholder: Jennifer to supply product details,
 * features, pricing model and launch status for each system.
 */
export type SaasProduct = {
  slug: string;
  title: string;
  tagline: string;
  description: string;
  features: string[];
};

export const saasProducts: SaasProduct[] = [
  {
    slug: "ngo-system",
    title: "NGO system",
    tagline: "Donors, beneficiaries and reports in one place.",
    description: "TODO: what the NGO system does and who it's for.",
    features: ["TODO: feature one", "TODO: feature two", "TODO: feature three"],
  },
  {
    slug: "pos-system",
    title: "POS system",
    tagline: "Sell in-store and track stock, with M-Pesa built in.",
    description: "TODO: what the POS system does and who it's for.",
    features: ["TODO: feature one", "TODO: feature two", "TODO: feature three"],
  },
  {
    slug: "restaurant-system",
    title: "Restaurant system",
    tagline: "Orders, tables and payments from one screen.",
    description: "TODO: what the restaurant system does and who it's for.",
    features: ["TODO: feature one", "TODO: feature two", "TODO: feature three"],
  },
];
