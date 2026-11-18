/**
 * Details about how UndaNova works: FAQs, engagement models, tech stack and
 * commitments. TODO: Jennifer to confirm every answer and commitment here
 * before launch; they describe how the studio operates.
 */

export type Faq = { q: string; a: string };

export const faqs: Faq[] = [
  {
    q: "How much does a website or system cost?",
    a: "It depends on what you need, so we quote each project after a short free call. You get a clear written quote in Kenyan shillings before any work starts, with no surprise costs later.",
  },
  {
    q: "How long does it take?",
    a: "A business website usually takes 2 to 4 weeks. Online shops and NGO or school systems take longer, depending on the features. We agree a timeline with you up front and keep you updated every week.",
  },
  {
    q: "Can customers pay with M-Pesa?",
    a: "Yes. We connect your shop or system to M-Pesa so customers get a payment prompt on their phone and you see the payment straight away.",
  },
  {
    q: "Will I own my website and its data?",
    a: "Yes. Once the project is paid for, the code, the content and your data are yours. We hand over all the logins and can show your team how everything works.",
  },
  {
    q: "Can I update the content myself?",
    a: "Yes, if you'd like to. We can set up simple editing for things like prices, products and news, and show you how to use it. Or leave it to us with a support plan.",
  },
  {
    q: "Do you only work with clients in Nairobi?",
    a: "No. We work with organisations anywhere in Kenya, and beyond. Most of our work happens over WhatsApp, calls and video meetings, so location isn't a problem.",
  },
  {
    q: "What happens after launch?",
    a: "We don't build and disappear. Every project includes a period of support after launch, and you can choose a monthly plan for updates, backups, security and small changes.",
  },
  {
    q: "We already have a website. Can you fix or improve it?",
    a: "Usually, yes. Send us the link and tell us what isn't working. We'll look at it and tell you honestly whether to improve it or start fresh.",
  },
];

export type Engagement = { title: string; bestFor: string; points: string[] };

export const engagements: Engagement[] = [
  {
    title: "Fixed-scope project",
    bestFor: "A website, shop or system with a clear brief.",
    points: ["Written quote and timeline", "Design approval before we build", "Launch, training and handover"],
  },
  {
    title: "Monthly retainer",
    bestFor: "Growing products that need ongoing work.",
    points: ["A set number of days each month", "New features as you need them", "Priority on WhatsApp"],
  },
  {
    title: "Support plan",
    bestFor: "Keeping an existing site or system healthy.",
    points: ["Updates, backups and security", "Uptime monitoring", "Small changes included"],
  },
];

export type StackGroup = { title: string; items: string[] };

// TODO: confirm these match the tools UndaNova actually uses.
export const stack: StackGroup[] = [
  { title: "Websites & apps", items: ["Next.js", "React", "TypeScript", "Tailwind CSS"] },
  { title: "Systems & data", items: ["Node.js", "PostgreSQL", "PDF & CSV reports"] },
  { title: "Payments & messaging", items: ["M-Pesa (Daraja API)", "Africa's Talking SMS", "WhatsApp Business"] },
  { title: "Hosting & care", items: ["Vercel", "Daily backups", "Uptime monitoring"] },
];

export type Commitment = { title: string; text: string };

export const commitments: Commitment[] = [
  { title: "You own it", text: "Your code, content and data belong to you. We hand over every login." },
  {
    title: "Your data is protected",
    text: "We build with Kenya's Data Protection Act in mind and collect only what's needed.",
  },
  { title: "Clear quotes in KES", text: "A written price before we start. No hidden costs." },
  { title: "Weekly updates", text: "You always know where your project is and what's next." },
];
