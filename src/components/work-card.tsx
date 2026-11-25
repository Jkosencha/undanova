import Image from "next/image";
import { Card } from "@/components/card";
import { ProjectCover } from "@/components/visuals";
import type { WorkItem, WorkStatus } from "@/content/work";

export function StatusBadge({ status, tone = "light" }: { status: WorkStatus; tone?: "light" | "dark" }) {
  if (status !== "in-progress") return null;
  const styles = tone === "dark" ? "border-white/40 text-white" : "border-navy/30 text-navy";
  return <span className={`caps-sm inline-flex border px-2 py-1 text-[10px] ${styles}`}>In progress</span>;
}

type WorkCardProps = {
  item: WorkItem;
  headingLevel?: "h2" | "h3";
};

/** Project card: thumbnail, category, title and summary, linking to the case study. */
export function WorkCard({ item, headingLevel = "h3" }: WorkCardProps) {
  const Heading = headingLevel;
  const [cover] = item.images;
  return (
    <Card href={`/work/${item.slug}`} className="flex w-full flex-col overflow-hidden">
      {cover ? (
        <Image
          src={cover.src}
          alt=""
          width={800}
          height={500}
          sizes="(min-width: 768px) 33vw, 100vw"
          className="aspect-[16/10] w-full object-cover"
        />
      ) : (
        <ProjectCover kind={item.preview} className="aspect-[16/10] transition-transform duration-700 group-hover:scale-[1.03]" />
      )}
      <div className="flex flex-1 flex-col p-6">
        <div className="flex flex-wrap items-center gap-3">
          <p className="caps-sm text-[10px] text-ink/70">{item.concept ? "Concept project" : item.category}</p>
          <StatusBadge status={item.status} />
        </div>
        <Heading className="mt-3 font-heading text-xl font-normal text-navy">{item.title}</Heading>
        <p className="mt-2 flex-1 text-sm text-ink/70">{item.summary}</p>
        <span className="caps-sm mt-6 text-[10px] text-navy underline decoration-navy/30 underline-offset-8 transition-colors group-hover:decoration-navy">
          View project
        </span>
      </div>
    </Card>
  );
}
