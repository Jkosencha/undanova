/**
 * Selected work. Only real, verified projects go here: no invented clients,
 * outcomes or statistics. Leave a field empty ("" or []) until it's confirmed;
 * empty fields are simply not shown on the site.
 */
export type WorkStatus = "live" | "in-progress";

export type WorkImage = {
  src: string;
  alt: string;
};

export type WorkItem = {
  slug: string;
  title: string;
  /** Client name, if the client is happy to be named. */
  client: string;
  category: string;
  /** Short description for cards. */
  summary: string;
  problem: string;
  solution: string;
  results: string;
  /** Technologies used, where verified. */
  stack: string[];
  images: WorkImage[];
  status: WorkStatus;
  /** Set true for a clearly labelled concept or demonstration project. */
  concept?: boolean;
  /** Illustration shown until real screenshots are added. */
  preview: "website" | "shop" | "dashboard";
};

export const work: WorkItem[] = [
  {
    slug: "nula-leer",
    title: "Nula Leer online store",
    client: "Nula Leer",
    category: "Web Development · E-commerce",
    summary: "An online store where customers can browse products, order and pay.",
    problem: "", // TODO: the problem addressed (verified)
    solution: "", // TODO: the solution delivered (verified)
    results: "", // TODO: results, once there are real ones
    stack: [], // TODO: technologies used
    images: [], // TODO: screenshots
    status: "in-progress",
    preview: "shop",
  },
  {
    slug: "ngo-management-system",
    title: "NGO management system",
    client: "", // TODO: NGO name, if they're happy to be named
    category: "Business Systems",
    summary: "A management system for an NGO's records, people and reports.",
    problem: "",
    solution: "",
    results: "",
    stack: [],
    images: [],
    status: "in-progress",
    preview: "dashboard",
  },
  {
    slug: "anika",
    title: "ANIKA",
    client: "ANIKA",
    category: "Web Development",
    summary: "A website and dashboard for ANIKA.",
    problem: "",
    solution: "",
    results: "",
    stack: [],
    images: [],
    status: "in-progress", // TODO: confirm whether ANIKA is live or in progress.
    preview: "website",
  },
];
