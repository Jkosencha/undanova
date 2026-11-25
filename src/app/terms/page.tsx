import type { Metadata } from "next";
import { LegalPage } from "@/components/legal-page";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "The terms for using the UndaNova website.",
};

// TODO: Kenyan lawyer to review. Project work is covered by a separate signed agreement.
export default function TermsPage() {
  return (
    <LegalPage
      title="Terms of Service"
      intro="The simple rules for using this website."
      updated="18 November 2026"
      sections={[
        {
          id: "about",
          title: "About these terms",
          body: (
            <p>
              These terms cover your use of this website, run by {site.legalName}. Work we do for clients is covered by
              a separate written agreement signed before the project starts.
            </p>
          ),
        },
        {
          id: "content",
          title: "Website content",
          body: (
            <p>
              We try to keep everything on this site accurate and up to date, but it&apos;s for general information.
              Project details, timelines and prices are only confirmed in a written quote.
            </p>
          ),
        },
        {
          id: "ip",
          title: "Our name and designs",
          body: (
            <p>
              The UndaNova name, logo and website design belong to us. Please don&apos;t copy them without permission.
              Client project names and screenshots are shown with their permission.
            </p>
          ),
        },
        {
          id: "links",
          title: "Links to other sites",
          body: (
            <p>We sometimes link to other websites, like WhatsApp. We&apos;re not responsible for their content.</p>
          ),
        },
        {
          id: "law",
          title: "Governing law",
          body: <p>These terms are governed by the laws of Kenya.</p>,
        },
        {
          id: "contact",
          title: "Questions",
          body: (
            <p>
              Email{" "}
              <a className="text-navy underline decoration-plum" href={`mailto:${site.email}`}>
                {site.email}
              </a>{" "}
              and we&apos;ll be happy to help.
            </p>
          ),
        },
      ]}
    />
  );
}
