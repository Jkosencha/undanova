import type { ReactNode } from "react";
import { PageHeader } from "@/components/page-header";
import { Container } from "@/components/section";

export type LegalSection = { id: string; title: string; body: ReactNode };

/** Shared layout for the privacy policy and terms: navy header, contents list, sections. */
export function LegalPage({
  title,
  intro,
  updated,
  sections,
}: {
  title: string;
  intro: string;
  updated: string;
  sections: LegalSection[];
}) {
  return (
    <>
      <PageHeader eyebrow="Legal" title={title} intro={intro} />
      <section className="bg-paper pb-20 md:pb-28">
        <Container className="grid gap-12 lg:grid-cols-[240px_1fr] lg:gap-16">
          <nav aria-label="On this page" className="lg:sticky lg:top-28 lg:self-start">
            <p className="font-mono text-xs font-medium uppercase tracking-[0.14em] text-ink/60">On this page</p>
            <ol className="mt-4 space-y-1 border-l border-navy/15">
              {sections.map((s, i) => (
                <li key={s.id}>
                  <a
                    href={`#${s.id}`}
                    className="-ml-px flex min-h-10 items-center gap-3 border-l-2 border-transparent pl-4 text-ink/75 hover:border-plum hover:text-navy"
                  >
                    <span className="font-mono text-xs text-plum">{String(i + 1).padStart(2, "0")}</span>
                    {s.title}
                  </a>
                </li>
              ))}
            </ol>
          </nav>
          <div className="max-w-3xl">
            <p className="border-l-4 border-plum bg-white p-5 text-ink/80">
              {/* TODO: have a Kenyan lawyer review this page before launch. */}
              <strong className="text-navy">Draft.</strong> This page is a plain-language draft and will be reviewed by
              a lawyer before the site launches. Last updated {updated}.
            </p>
            <div className="mt-10 space-y-12">
              {sections.map((s, i) => (
                <section key={s.id} id={s.id} aria-labelledby={`${s.id}-title`} className="scroll-mt-28">
                  <p className="font-mono text-xs text-plum">{String(i + 1).padStart(2, "0")}</p>
                  <h2 id={`${s.id}-title`} className="mt-1 text-2xl text-navy md:text-3xl">
                    {s.title}
                  </h2>
                  <div className="mt-4 space-y-4 text-lg text-ink/80 [&_li]:ml-5 [&_li]:list-disc [&_ul]:space-y-2">
                    {s.body}
                  </div>
                </section>
              ))}
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
