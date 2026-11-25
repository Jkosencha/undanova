import type { Faq } from "@/content/studio";

type FaqListProps = {
  faqs: Faq[];
  /** Also output FAQPage structured data for Google. Use on one page only. */
  structuredData?: boolean;
};

/** Accordion of questions built on <details>, so it works without JavaScript. */
export function FaqList({ faqs, structuredData = false }: FaqListProps) {
  return (
    <>
      <div className="divide-y divide-mist border-y border-mist">
        {faqs.map((f, i) => (
          <details key={f.q} className="group" name="faq" open={i === 0}>
            <summary className="flex min-h-16 cursor-pointer list-none items-center justify-between gap-6 py-5 text-left font-heading text-lg font-normal text-navy marker:hidden [&::-webkit-details-marker]:hidden">
              <span className="flex items-baseline gap-4">
                <span aria-hidden className="text-xs font-semibold tracking-[0.2em] text-ink/50">
                  {String(i + 1).padStart(2, "0")}
                </span>
                {f.q}
              </span>
              <span
                aria-hidden
                className="relative inline-flex size-9 shrink-0 items-center justify-center border border-navy/25 transition-colors group-open:bg-navy group-open:text-white"
              >
                <span className="absolute h-px w-3.5 bg-current" />
                <span className="absolute h-3.5 w-px bg-current transition-transform duration-300 group-open:rotate-90 group-open:scale-y-0" />
              </span>
            </summary>
            <p className="max-w-3xl pb-6 pl-9 text-ink/75">{f.a}</p>
          </details>
        ))}
      </div>
      {structuredData && (
        <script
          type="application/ld+json"
          // Data is our own static content, serialised safely.
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              mainEntity: faqs.map((f) => ({
                "@type": "Question",
                name: f.q,
                acceptedAnswer: { "@type": "Answer", text: f.a },
              })),
            }).replace(/</g, "\\u003c"),
          }}
        />
      )}
    </>
  );
}
