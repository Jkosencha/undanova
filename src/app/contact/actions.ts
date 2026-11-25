"use server";

import {
  type ContactErrors,
  type ContactValues,
  HONEYPOT_FIELD,
  isEmail,
  readContactForm,
  serviceOptions,
  validateContact,
} from "@/lib/contact";
import { site } from "@/lib/site";

export type ContactState =
  | { status: "idle" }
  | { status: "success"; name: string }
  | { status: "invalid"; errors: ContactErrors; values: ContactValues }
  | { status: "error"; values: ContactValues };

const labelFor = (options: { value: string; label: string }[], value: string) =>
  options.find((o) => o.value === value)?.label ?? "Not given";

function formatEmail(v: ContactValues) {
  return [
    `Name: ${v.name}`,
    `Organization: ${v.organisation || "Not given"}`,
    `Email: ${v.email}`,
    `Phone: ${v.phone || "Not given"}`,
    `Service of interest: ${labelFor(serviceOptions, v.service)}`,
    "",
    "Project description:",
    "",
    v.message,
  ].join("\n");
}

export async function sendContactMessage(_prev: ContactState, formData: FormData): Promise<ContactState> {
  const values = readContactForm(formData);

  // Spam trap: bots fill in the hidden field. Pretend it worked and send nothing.
  const honeypot = formData.get(HONEYPOT_FIELD);
  if (typeof honeypot === "string" && honeypot.trim() !== "") {
    return { status: "success", name: values.name };
  }

  const errors = validateContact(values);
  if (Object.keys(errors).length > 0) {
    return { status: "invalid", errors, values };
  }

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    // No key yet (e.g. local development): log it so nothing is lost, and still show success.
    console.log("[contact] RESEND_API_KEY not set. Submission:\n" + formatEmail(values));
    return { status: "success", name: values.name };
  }

  try {
    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: process.env.CONTACT_FROM_EMAIL || "UndaNova website <onboarding@resend.dev>",
        to: [process.env.CONTACT_TO_EMAIL || site.email],
        reply_to: isEmail(values.email) ? values.email : undefined,
        subject: `New inquiry from ${values.name}${values.organisation ? ` (${values.organisation})` : ""}`,
        text: formatEmail(values),
      }),
    });

    if (!res.ok) {
      console.error("[contact] Resend error", res.status, await res.text());
      return { status: "error", values };
    }
    return { status: "success", name: values.name };
  } catch (error) {
    console.error("[contact] Failed to send", error);
    return { status: "error", values };
  }
}
