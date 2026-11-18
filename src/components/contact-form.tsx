"use client";

import { type FormEvent, type ReactNode, startTransition, useActionState, useEffect, useRef, useState } from "react";
import { useSearchParams } from "next/navigation";
import { type ContactState, sendContactMessage } from "@/app/contact/actions";
import { buttonClasses } from "@/components/button";
import { TextLink } from "@/components/text-link";
import {
  budgetOptions,
  type ContactErrors,
  type ContactField,
  HONEYPOT_FIELD,
  readContactForm,
  serviceOptions,
  validateContact,
} from "@/lib/contact";

const inputClasses =
  "block w-full min-h-12 rounded-xl border border-slate bg-white px-4 py-3 text-base text-ink placeholder:text-ink/50 aria-[invalid=true]:border-2 aria-[invalid=true]:border-navy";

const fieldOrder: ContactField[] = ["name", "contact", "organisation", "service", "budget", "message"];

function Field({
  id,
  label,
  optional,
  error,
  hint,
  children,
}: {
  id: ContactField;
  label: string;
  optional?: boolean;
  error?: string;
  hint?: string;
  children: ReactNode;
}) {
  return (
    <div>
      <label htmlFor={id} className="block font-medium text-navy">
        {label}
        {optional && <span className="font-normal text-ink/70"> (optional)</span>}
      </label>
      {hint && (
        <p id={`${id}-hint`} className="mt-1 text-sm text-ink/70">
          {hint}
        </p>
      )}
      <div className="mt-2">{children}</div>
      {error && (
        <p id={`${id}-error`} className="mt-2 flex items-start gap-1.5 text-sm font-medium text-navy">
          <span aria-hidden className="mt-1.5 size-2 shrink-0 rounded-full bg-wave" />
          {error}
        </p>
      )}
    </div>
  );
}

const describedBy = (id: string, error?: string, hint?: boolean) =>
  [hint ? `${id}-hint` : "", error ? `${id}-error` : ""].filter(Boolean).join(" ") || undefined;

/** Reads ?service= from the URL so "Get a quote" buttons pre-fill the service. */
export function ContactFormWithParams() {
  const params = useSearchParams();
  const service = params.get("service") ?? "";
  const valid = serviceOptions.some((o) => o.value === service);
  return <ContactForm defaultService={valid ? service : ""} />;
}

export function ContactForm({ defaultService = "" }: { defaultService?: string }) {
  const [state, formAction, pending] = useActionState<ContactState, FormData>(sendContactMessage, { status: "idle" });
  const [clientErrors, setClientErrors] = useState<ContactErrors>({});
  const formRef = useRef<HTMLFormElement>(null);

  const errors = state.status === "invalid" ? { ...state.errors, ...clientErrors } : clientErrors;
  const values = state.status === "invalid" || state.status === "error" ? state.values : undefined;

  // If the server finds a problem the browser missed, move focus to the first bad field.
  useEffect(() => {
    if (state.status !== "invalid") return;
    const first = fieldOrder.find((f) => state.errors[f]);
    if (first) (formRef.current?.elements.namedItem(first) as HTMLElement | null)?.focus();
  }, [state]);

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const formData = new FormData(form);
    const found = validateContact(readContactForm(formData));
    setClientErrors(found);
    const first = fieldOrder.find((f) => found[f]);
    if (first) {
      (form.elements.namedItem(first) as HTMLElement | null)?.focus();
      return;
    }
    startTransition(() => formAction(formData));
  }

  if (state.status === "success") {
    return (
      <div role="status" className="rounded-3xl border border-slate/30 bg-white p-6 md:p-10">
        <h2 className="text-2xl text-navy">Thank you{state.name ? `, ${state.name.split(" ")[0]}` : ""}.</h2>
        <p className="mt-2 text-lg">We&apos;ve got your message and we&apos;ll reply within 24 hours.</p>
        <TextLink href="/work" className="mt-4">
          While you wait, see our work
        </TextLink>
      </div>
    );
  }

  return (
    <form
      ref={formRef}
      action={formAction}
      onSubmit={onSubmit}
      noValidate
      className="space-y-6 rounded-3xl border border-slate/30 bg-white p-6 md:p-10"
    >
      {state.status === "error" && (
        <div role="alert" className="rounded-xl bg-navy p-4 text-white">
          Sorry, your message didn&apos;t send. Please try again, or message us on WhatsApp.
        </div>
      )}

      <Field id="name" label="Name" error={errors.name}>
        <input
          id="name"
          name="name"
          type="text"
          autoComplete="name"
          required
          maxLength={100}
          defaultValue={values?.name}
          aria-invalid={!!errors.name}
          aria-describedby={describedBy("name", errors.name)}
          className={inputClasses}
        />
      </Field>

      <Field id="contact" label="Email or phone" error={errors.contact} hint="So we can get back to you.">
        <input
          id="contact"
          name="contact"
          type="text"
          autoComplete="email"
          required
          maxLength={150}
          defaultValue={values?.contact}
          aria-invalid={!!errors.contact}
          aria-describedby={describedBy("contact", errors.contact, true)}
          className={inputClasses}
        />
      </Field>

      <Field id="organisation" label="Organisation" optional error={errors.organisation}>
        <input
          id="organisation"
          name="organisation"
          type="text"
          autoComplete="organization"
          maxLength={150}
          defaultValue={values?.organisation}
          aria-invalid={!!errors.organisation}
          aria-describedby={describedBy("organisation", errors.organisation)}
          className={inputClasses}
        />
      </Field>

      <div className="grid gap-6 sm:grid-cols-2">
        <Field id="service" label="Service" error={errors.service}>
          <select
            id="service"
            name="service"
            required
            defaultValue={values?.service ?? defaultService}
            aria-invalid={!!errors.service}
            aria-describedby={describedBy("service", errors.service)}
            className={inputClasses}
          >
            <option value="" disabled>
              Choose a service
            </option>
            {serviceOptions.map((o) => (
              <option key={o.value} value={o.value}>
                {o.label}
              </option>
            ))}
          </select>
        </Field>

        <Field id="budget" label="Budget range" optional error={errors.budget}>
          <select
            id="budget"
            name="budget"
            defaultValue={values?.budget ?? ""}
            aria-invalid={!!errors.budget}
            aria-describedby={describedBy("budget", errors.budget)}
            className={inputClasses}
          >
            <option value="">Choose a range</option>
            {budgetOptions.map((o) => (
              <option key={o.value} value={o.value}>
                {o.label}
              </option>
            ))}
          </select>
        </Field>
      </div>

      <Field id="message" label="Message" error={errors.message} hint="What do you need, and by when?">
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          maxLength={5000}
          defaultValue={values?.message}
          aria-invalid={!!errors.message}
          aria-describedby={describedBy("message", errors.message, true)}
          className={inputClasses}
        />
      </Field>

      {/* Spam trap: hidden from people and screen readers; bots tend to fill it in. */}
      <div aria-hidden className="absolute -left-[9999px] size-px overflow-hidden">
        <label htmlFor={HONEYPOT_FIELD}>Leave this empty</label>
        <input id={HONEYPOT_FIELD} name={HONEYPOT_FIELD} type="text" tabIndex={-1} autoComplete="off" />
      </div>

      <button type="submit" disabled={pending} className={buttonClasses("primary", "light", "w-full sm:w-auto disabled:opacity-70")}>
        {pending ? "Sending…" : "Send message"}
      </button>
    </form>
  );
}
