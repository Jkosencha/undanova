/**
 * Contact form fields and validation, shared by the form (browser) and the
 * server action so both check exactly the same rules.
 */
import { saasProducts } from "@/content/saas";
import { comingSoon, services } from "@/content/services";

export const serviceOptions = [
  ...services.map((s) => ({ value: s.slug, label: s.title })),
  { value: comingSoon.slug, label: comingSoon.title },
  ...saasProducts.map((p) => ({ value: p.slug, label: `${p.title} (ready-made)` })),
  { value: "other", label: "Something else / not sure" },
];

export const budgetOptions = [
  { value: "under-50k", label: "Under KES 50k" },
  { value: "50k-150k", label: "KES 50k–150k" },
  { value: "150k-500k", label: "KES 150k–500k" },
  { value: "500k-plus", label: "KES 500k+" },
  { value: "not-sure", label: "Not sure" },
];

export type ContactValues = {
  name: string;
  contact: string;
  organisation: string;
  service: string;
  budget: string;
  message: string;
};

export type ContactField = keyof ContactValues;
export type ContactErrors = Partial<Record<ContactField, string>>;

/** Name of the hidden spam-trap field. Real people never fill it in. */
export const HONEYPOT_FIELD = "website";

const EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function isEmail(value: string) {
  return EMAIL.test(value);
}

function isPhone(value: string) {
  if (!/^[+\d\s()-]+$/.test(value)) return false;
  const digits = value.replace(/\D/g, "");
  return digits.length >= 9 && digits.length <= 15;
}

export function readContactForm(formData: FormData): ContactValues {
  const get = (key: string) => {
    const value = formData.get(key);
    return typeof value === "string" ? value.trim() : "";
  };
  return {
    name: get("name"),
    contact: get("contact"),
    organisation: get("organisation"),
    service: get("service"),
    budget: get("budget"),
    message: get("message"),
  };
}

export function validateContact(values: ContactValues): ContactErrors {
  const errors: ContactErrors = {};

  if (values.name.length < 2) errors.name = "Please enter your name.";
  else if (values.name.length > 100) errors.name = "Please keep your name under 100 characters.";

  if (!values.contact) errors.contact = "Please enter an email address or phone number.";
  else if (!isEmail(values.contact) && !isPhone(values.contact))
    errors.contact = "That doesn't look like an email address or phone number.";

  if (values.organisation.length > 150) errors.organisation = "Please keep this under 150 characters.";

  if (!serviceOptions.some((o) => o.value === values.service)) errors.service = "Please choose a service.";

  if (values.budget && !budgetOptions.some((o) => o.value === values.budget))
    errors.budget = "Please choose a budget range.";

  if (values.message.length < 10) errors.message = "Please tell us a little more (at least 10 characters).";
  else if (values.message.length > 5000) errors.message = "Please keep your message under 5,000 characters.";

  return errors;
}
