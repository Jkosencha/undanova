import Image from "next/image";
import { Card } from "@/components/card";
import { ArrowIcon } from "@/components/icons";
import { PreviewPanel } from "@/components/previews";
import type { WorkItem, WorkStatus } from "@/content/work";

export function StatusBadge({ status, tone = "light" }: { status: WorkStatus; tone?: "light" | "dark" }) {
  if (status !== "in-progress") return null;
  const styles = tone === "dark" ? "border-white/25 bg-white/10 text-white" : "border-navy/20 bg-paper text-navy";
  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-full border px-2.5 py-0.5 text-xs font-medium ${styles}`}
    >
      <span aria-hidden className="size-1.5 animate-glow rounded-full bg-wave" />
      In progress
    </span>
  );
}

type WorkCardProps = {
  item: WorkItem;
  headingLevel?: "h2" | "h3";
  /** "dark" for navy sections. */
  tone?: "light" | "dark";
};

/** Project card with a preview, linking to its case study. */
export function WorkCard({ item, headingLevel = "h3", tone = "light" }: WorkCardProps) {
  const Heading = headingLevel;
  const dark = tone === "dark";
  const [cover] = item.images;
  return (
    <Card href={`/work/${item.slug}`} tone={tone} className="flex w-full flex-col p-3">
      {cover ? (
        <Image
          src={cover.src}
          alt=""
          width={800}
          height={500}
          sizes="(min-width: 768px) 33vw, 100vw"
          className="aspect-[16/10] w-full rounded-2xl object-cover"
        />
      ) : (
        <PreviewPanel kind={item.preview} className="aspect-[16/10]" />
      )}
      <div className="flex flex-1 flex-col px-3 pb-3 pt-5">
        <div className="flex flex-wrap items-center gap-2">
          <p className={`text-sm font-medium ${dark ? "text-white/70" : "text-ink/70"}`}>{item.category}</p>
          <StatusBadge status={item.status} tone={tone} />
        </div>
        <Heading className={`mt-2 text-2xl ${dark ? "text-white" : "text-navy"}`}>{item.title}</Heading>
        <p className={`mt-2 flex-1 ${dark ? "text-white/75" : "text-ink/70"}`}>{item.summary}</p>
        <span className={`mt-5 inline-flex items-center gap-1.5 font-medium ${dark ? "text-white" : "text-navy"}`}>
          View project <ArrowIcon className="size-4 transition-transform group-hover:translate-x-1" />
        </span>
      </div>
    </Card>
  );
}
