/**
 * Contact form fields and validation, shared by the form (browser) and the
 * server action so both check exactly the same rules.
 */
import { services } from "@/content/services";

export const serviceOptions = [
  ...services.map((s) => ({ value: s.slug, label: s.title })),
  { value: "other", label: "Something else / not sure yet" },
];

export type ContactValues = {
  name: string;
  organisation: string;
  email: string;
  phone: string;
  service: string;
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
    organisation: get("organisation"),
    email: get("email"),
    phone: get("phone"),
    service: get("service"),
    message: get("message"),
  };
}

export function validateContact(values: ContactValues): ContactErrors {
  const errors: ContactErrors = {};

  if (values.name.length < 2) errors.name = "Please enter your name.";
  else if (values.name.length > 100) errors.name = "Please keep your name under 100 characters.";

  if (values.organisation.length > 150) errors.organisation = "Please keep this under 150 characters.";

  if (!values.email) errors.email = "Please enter your email address.";
  else if (!isEmail(values.email) || values.email.length > 150)
    errors.email = "That doesn't look like an email address.";

  if (values.phone && !isPhone(values.phone)) errors.phone = "That doesn't look like a phone number.";

  if (!serviceOptions.some((o) => o.value === values.service)) errors.service = "Please choose a service.";

  if (values.message.length < 10) errors.message = "Please tell us a little more (at least 10 characters).";
  else if (values.message.length > 5000) errors.message = "Please keep your description under 5,000 characters.";

  return errors;
}
