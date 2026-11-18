/**
 * UndaNova projects. Used by the home page (featured work) and the Work pages.
 * TODO: case study details and screenshots for each project, from Jennifer.
 */
export type WorkStatus = "live" | "in-progress";

export type WorkImage = {
  src: string;
  alt: string;
};

export type WorkItem = {
  slug: string;
  title: string;
  client: string;
  category: string;
  summary: string;
  problem: string;
  solution: string;
  results: string;
  stack: string[];
  images: WorkImage[];
  status: WorkStatus;
};

export const work: WorkItem[] = [
  {
    slug: "nula-leer",
    title: "Nula Leer online store",
    client: "Nula Leer",
    category: "E-commerce with M-Pesa",
    // TODO: one-sentence summary from Jennifer.
    summary: "An online store where customers can browse, order and pay with M-Pesa.",
    problem: "TODO: the problem the client had.",
    solution: "TODO: what UndaNova built.",
    results: "TODO: the result so far.",
    stack: [], // TODO: tech stack
    images: [], // TODO: screenshots
    status: "in-progress",
  },
  {
    slug: "ngo-management-system",
    title: "NGO management system",
    client: "TODO: NGO name",
    category: "NGO systems",
    // TODO: one-sentence summary from Jennifer.
    summary: "One system for an NGO to manage its records, people and reports.",
    problem: "TODO: the problem the client had.",
    solution: "TODO: what UndaNova built.",
    results: "TODO: the result so far.",
    stack: [], // TODO: tech stack
    images: [], // TODO: screenshots
    status: "in-progress",
  },
  {
    slug: "anika",
    title: "ANIKA",
    client: "ANIKA",
    category: "Website & dashboard",
    // TODO: summary from Jennifer.
    summary: "A website and dashboard for ANIKA.",
    problem: "TODO: the problem the client had.",
    solution: "TODO: what UndaNova built.",
    results: "TODO: the result so far.",
    stack: [], // TODO: tech stack
    images: [], // TODO: screenshots
    status: "in-progress", // TODO: confirm whether ANIKA is live or in progress.
  },
];

export const featuredWork = work.slice(0, 3);
