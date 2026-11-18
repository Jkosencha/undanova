import { Card } from "@/components/card";
import { ArrowIcon } from "@/components/icons";
import type { WorkItem, WorkStatus } from "@/content/work";

export function StatusBadge({ status }: { status: WorkStatus }) {
  if (status !== "in-progress") return null;
  return (
    <span className="rounded-full border border-navy/20 bg-paper px-2.5 py-0.5 text-xs font-medium text-navy">
      In progress
    </span>
  );
}

/** Project card linking to its case study. `headingLevel` keeps the page outline correct. */
export function WorkCard({ item, headingLevel = "h3" }: { item: WorkItem; headingLevel?: "h2" | "h3" }) {
  const Heading = headingLevel;
  return (
    <Card href={`/work/${item.slug}`} className="flex w-full flex-col">
      <div className="flex flex-wrap items-center gap-2">
        <p className="text-sm font-medium text-ink/70">{item.category}</p>
        <StatusBadge status={item.status} />
      </div>
      <Heading className="mt-3 text-xl text-navy">{item.title}</Heading>
      <p className="mt-2 flex-1 text-ink/70">{item.summary}</p>
      <span className="mt-4 inline-flex items-center gap-1 font-medium text-navy">
        View project <ArrowIcon className="size-4" />
      </span>
    </Card>
  );
}
