import type { Metadata } from "next";
import { LegalPage } from "@/components/legal-page";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Privacy policy",
  description: "How UndaNova collects, uses and protects your personal data.",
};

// TODO: Kenyan lawyer to review; confirm whether UndaNova must register with the ODPC.
export default function PrivacyPage() {
  return (
    <LegalPage
      title="Privacy policy"
      intro="What we collect when you contact us, why, and how we keep it safe."
      updated="18 November 2026"
      sections={[
        {
          id: "who",
          title: "Who we are",
          body: (
            <p>
              {site.legalName} is a software studio in {site.location}. We are responsible for the personal data you
              share through this website, under Kenya&apos;s Data Protection Act, 2019. You can reach us at{" "}
              <a className="text-navy underline decoration-plum" href={`mailto:${site.email}`}>
                {site.email}
              </a>
              .
            </p>
          ),
        },
        {
          id: "collect",
          title: "What we collect",
          body: (
            <>
              <p>When you use our contact form, we collect:</p>
              <ul>
                <li>your name and your email address or phone number</li>
                <li>
                  your organisation, the service you&apos;re interested in and your budget range, if you give them
                </li>
                <li>your message</li>
              </ul>
              <p>We don&apos;t use advertising trackers, and we don&apos;t sell your data.</p>
            </>
          ),
        },
        {
          id: "use",
          title: "How we use it",
          body: (
            <p>
              Only to reply to your enquiry, prepare a quote and, if we work together, deliver your project. We
              won&apos;t add you to a mailing list without asking.
            </p>
          ),
        },
        {
          id: "share",
          title: "Who we share it with",
          body: (
            <>
              <p>We use a small number of trusted services to run this website:</p>
              <ul>
                <li>Vercel, which hosts the website</li>
                <li>Resend, which delivers contact form messages to our inbox</li>
              </ul>
              <p>These services may process data outside Kenya. We only use providers with appropriate safeguards.</p>
            </>
          ),
        },
        {
          id: "keep",
          title: "How long we keep it",
          body: (
            <p>
              We keep enquiries for up to 12 months, or for as long as we&apos;re working together, then delete them.
            </p>
          ),
        },
        {
          id: "rights",
          title: "Your rights",
          body: (
            <p>
              You can ask to see, correct or delete the personal data we hold about you, or object to how we use it.
              Email us and we&apos;ll respond within 7 days. You can also complain to the Office of the Data Protection
              Commissioner (ODPC).
            </p>
          ),
        },
      ]}
    />
  );
}
