/**
 * UndaNova's services. The home page shows `title` and `summary`; the Services
 * page shows everything. Add a new service here and it appears everywhere
 * (home, services page, footer, contact form).
 */
export type Service = {
  slug: string;
  title: string;
  /** One sentence for the home page overview. */
  summary: string;
  /** Short description for the Services page. */
  description: string;
  /** The business value, in plain terms. */
  value: string;
  included: string[];
};

export const services: Service[] = [
  {
    slug: "web-development",
    title: "Web Development",
    summary:
      "Professional, responsive websites and web platforms designed to strengthen digital presence and support business growth.",
    description:
      "From a first business website to a full web platform, we design and build fast, responsive sites that work on every screen.",
    value: "A credible online presence that brings in enquiries and is simple to keep up to date.",
    included: [
      "Business and corporate websites",
      "Landing pages",
      "E-commerce websites",
      "Web portals",
      "Content-driven websites",
      "Website maintenance and optimization",
    ],
  },
  {
    slug: "custom-software",
    title: "Custom Software Development",
    summary:
      "Tailored applications and software solutions built around specific business requirements, workflows and operational challenges.",
    description:
      "When off-the-shelf tools don't fit, we build software around the way your organization actually works.",
    value: "Software that fits your processes, instead of processes bent to fit the software.",
    included: [
      "Custom web applications",
      "Internal business applications",
      "SaaS product development",
      "Client and member portals",
      "Workflow-based applications",
      "API development",
    ],
  },
  {
    slug: "business-systems",
    title: "Business Systems & Management Platforms",
    summary:
      "Digital systems that help organizations manage customers, inventory, operations, records and internal processes.",
    description:
      "Systems that bring customers, stock, bookings and records into one place, with the reports you need to run things well.",
    value: "Less time on spreadsheets and paperwork, and a clearer view of how the organization is doing.",
    included: [
      "Customer relationship management (CRM)",
      "Inventory management systems",
      "Administrative dashboards",
      "Booking and reservation systems",
      "Business management platforms",
      "Reporting and data management systems",
    ],
  },
  {
    slug: "ui-ux-design",
    title: "UI/UX Design",
    summary:
      "User-centered interface and experience design focused on usability, accessibility and intuitive digital experiences.",
    description:
      "We design interfaces people understand at a glance, tested and refined before a line of production code is written.",
    value: "Products that are easier to use, so more people finish what they came to do.",
    included: [
      "User interface design",
      "User experience research",
      "Wireframing and prototyping",
      "Responsive interface design",
      "Design systems",
      "Usability improvements",
    ],
  },
  {
    slug: "automation-integrations",
    title: "Automation & Integrations",
    summary:
      "Connecting digital tools, automating repetitive tasks and streamlining workflows through intelligent integrations.",
    description: "We connect the tools you already use and take repetitive work off your team's plate.",
    value: "Fewer manual steps, fewer errors and more time for the work that matters.",
    included: [
      "Workflow automation",
      "API integrations",
      "WhatsApp integrations",
      "Third-party software integrations",
      "Data synchronization",
      "Process optimization",
    ],
  },
  {
    slug: "digital-transformation",
    title: "Digital Transformation Consulting",
    summary:
      "Helping organizations identify opportunities to improve their operations and adopt appropriate digital technologies.",
    description:
      "We look at how your organization works today and help you decide where technology will make the biggest difference.",
    value: "A clear, realistic plan for going digital, with priorities that match your budget and goals.",
    included: [
      "Digital strategy",
      "Technology consultation",
      "Business process assessment",
      "Digitization of manual processes",
      "Technology adoption planning",
    ],
  },
];
