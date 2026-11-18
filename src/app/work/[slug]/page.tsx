import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { CTABand } from "@/components/cta-band";
import { ArrowIcon } from "@/components/icons";
import { PageHeader } from "@/components/page-header";
import { Section } from "@/components/section";
import { TextLink } from "@/components/text-link";
import { StatusBadge } from "@/components/work-card";
import { work } from "@/content/work";

function getProject(slug: string) {
  return work.find((item) => item.slug === slug);
}

export function generateStaticParams() {
  return work.map((item) => ({ slug: item.slug }));
}

export async function generateMetadata(props: PageProps<"/work/[slug]">): Promise<Metadata> {
  const { slug } = await props.params;
  const project = getProject(slug);
  if (!project) return {};
  return { title: project.title, description: project.summary };
}

export default async function CaseStudyPage(props: PageProps<"/work/[slug]">) {
  const { slug } = await props.params;
  const project = getProject(slug);
  if (!project) notFound();

  const [hero, ...gallery] = project.images;
  const story = [
    { id: "problem", title: "The problem", text: project.problem },
    { id: "solution", title: "What we built", text: project.solution },
    { id: "result", title: "The result", text: project.results },
  ];

  return (
    <>
      <PageHeader
        title={project.title}
        intro={project.summary}
        eyebrow={
          <div className="flex flex-wrap items-center gap-2">
            <p className="text-sm font-medium text-ink/70">{project.category}</p>
            <StatusBadge status={project.status} />
          </div>
        }
      >
        <dl className="mt-6 flex gap-2 text-ink/80">
          <dt className="font-medium text-navy">Client:</dt>
          <dd>{project.client}</dd>
        </dl>
      </PageHeader>

      <Section tone="white" aria-label="Case study">
        {hero ? (
          <Image
            src={hero.src}
            alt={hero.alt}
            width={1200}
            height={675}
            sizes="(min-width: 1200px) 1152px, 100vw"
            priority
            className="aspect-video w-full rounded-xl border border-slate/20 object-cover"
          />
        ) : (
          // TODO: replace with a screenshot once Jennifer sends one.
          <div className="flex aspect-video w-full items-center justify-center rounded-xl bg-navy">
            <Image src="/brand/undanova-icon.svg" alt="" width={641} height={197} className="w-1/3 max-w-60" />
          </div>
        )}

        <div className="mx-auto mt-12 max-w-3xl space-y-10 md:mt-16">
          {story.map((part) => (
            <section key={part.id} aria-labelledby={part.id}>
              <h2 id={part.id} className="text-2xl text-navy md:text-3xl">
                {part.title}
              </h2>
              <p className="mt-3 text-lg">{part.text}</p>
            </section>
          ))}

          {project.stack.length > 0 && (
            <section aria-labelledby="stack">
              <h2 id="stack" className="text-2xl text-navy md:text-3xl">
                Built with
              </h2>
              <ul className="mt-4 flex flex-wrap gap-2">
                {project.stack.map((tech) => (
                  <li key={tech} className="rounded-full border border-slate/40 bg-paper px-3 py-1 text-sm font-medium text-navy">
                    {tech}
                  </li>
                ))}
              </ul>
            </section>
          )}
        </div>

        {gallery.length > 0 && (
          <ul className="mt-12 grid gap-4 md:mt-16 md:grid-cols-2">
            {gallery.map((image) => (
              <li key={image.src}>
                <Image
                  src={image.src}
                  alt={image.alt}
                  width={1200}
                  height={675}
                  sizes="(min-width: 768px) 50vw, 100vw"
                  className="aspect-video w-full rounded-xl border border-slate/20 object-cover"
                />
              </li>
            ))}
          </ul>
        )}

        <div className="mx-auto mt-12 max-w-3xl">
          <TextLink href="/work">
            <ArrowIcon className="size-4 rotate-180" /> All our work
          </TextLink>
        </div>
      </Section>

      <CTABand />
    </>
  );
}
