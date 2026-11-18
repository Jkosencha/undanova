import { Section } from "@/components/section";

/** Temporary page body used until each page is built in its phase. */
export function PagePlaceholder({ title, phase }: { title: string; phase: number }) {
  return (
    <Section className="flex-1">
      <h1 className="text-[40px] text-navy md:text-[56px]">{title}</h1>
      <p className="mt-4 max-w-xl text-lg text-ink/70">This page is coming in Phase {phase}.</p>
    </Section>
  );
}
