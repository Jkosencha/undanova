import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { CTABand } from "@/components/cta-band";
import { ArrowIcon } from "@/components/icons";
import { PageHeader } from "@/components/page-header";
import { PreviewPanel } from "@/components/previews";
import { Container } from "@/components/section";
import { TextLink } from "@/components/text-link";
import { StatusBadge, WorkCard } from "@/components/work-card";
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
  const more = work.filter((item) => item.slug !== project.slug).slice(0, 2);

  return (
    <>
      <PageHeader
        title={project.title}
        intro={project.summary}
        eyebrow={
          <div className="flex flex-wrap items-center gap-3">
            <span className="inline-flex items-center rounded-full border border-white/20 bg-white/5 px-3.5 py-1.5 text-sm font-medium text-white/90">
              {project.category}
            </span>
            <StatusBadge status={project.status} tone="dark" />
          </div>
        }
      />

      <div className="bg-paper pb-8">
        {/* Main image overlaps the header's wave edge */}
        <Container className="-mt-16 md:-mt-28">
          {hero ? (
            <Image
              src={hero.src}
              alt={hero.alt}
              width={1200}
              height={675}
              sizes="(min-width: 1200px) 1152px, 100vw"
              priority
              className="relative aspect-video w-full rounded-3xl border border-slate/20 object-cover shadow-2xl shadow-ink/30"
            />
          ) : (
            // TODO: replace with a screenshot once Jennifer sends one.
            <PreviewPanel kind={project.preview} className="relative h-72 shadow-2xl shadow-ink/30 sm:h-[28rem]" />
          )}
        </Container>

        <Container className="mt-14 grid gap-12 md:mt-20 lg:grid-cols-[1fr_300px] lg:gap-20">
          <div className="space-y-12">
            {story.map((part, i) => (
              <section key={part.id} aria-labelledby={part.id} className="reveal">
                <p aria-hidden className="font-heading text-sm font-semibold uppercase tracking-[0.18em] text-ink/60">
                  0{i + 1}
                </p>
                <h2 id={part.id} className="mt-2 text-[30px] text-navy md:text-4xl">
                  {part.title}
                </h2>
                <p className="mt-4 text-lg">{part.text}</p>
              </section>
            ))}
          </div>

          <aside aria-label="Project facts" className="lg:sticky lg:top-28 lg:self-start">
            <dl className="space-y-5 rounded-3xl border border-slate/25 bg-white p-6">
              <div>
                <dt className="text-sm font-semibold uppercase tracking-[0.18em] text-ink/60">Client</dt>
                <dd className="mt-1 text-lg font-medium text-navy">{project.client}</dd>
              </div>
              <div>
                <dt className="text-sm font-semibold uppercase tracking-[0.18em] text-ink/60">Service</dt>
                <dd className="mt-1 text-lg font-medium text-navy">{project.category}</dd>
              </div>
              <div>
                <dt className="text-sm font-semibold uppercase tracking-[0.18em] text-ink/60">Status</dt>
                <dd className="mt-1 text-lg font-medium text-navy">
                  {project.status === "live" ? "Live" : "In progress"}
                </dd>
              </div>
              {project.stack.length > 0 && (
                <div>
                  <dt className="text-sm font-semibold uppercase tracking-[0.18em] text-ink/60">Built with</dt>
                  <dd className="mt-2">
                    <ul className="flex flex-wrap gap-2">
                      {project.stack.map((tech) => (
                        <li key={tech} className="rounded-full border border-slate/40 bg-paper px-3 py-1 text-sm font-medium text-navy">
                          {tech}
                        </li>
                      ))}
                    </ul>
                  </dd>
                </div>
              )}
            </dl>
          </aside>
        </Container>

        {gallery.length > 0 && (
          <Container className="mt-14">
            <ul className="grid gap-4 md:grid-cols-2">
              {gallery.map((image) => (
                <li key={image.src}>
                  <Image
                    src={image.src}
                    alt={image.alt}
                    width={1200}
                    height={675}
                    sizes="(min-width: 768px) 50vw, 100vw"
                    className="aspect-video w-full rounded-3xl border border-slate/20 object-cover"
                  />
                </li>
              ))}
            </ul>
          </Container>
        )}

        {more.length > 0 && (
          <section aria-labelledby="more-title" className="mt-20 md:mt-28">
            <Container>
              <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
                <h2 id="more-title" className="text-[30px] text-navy md:text-4xl">
                  More projects
                </h2>
                <TextLink href="/work">
                  All our work <ArrowIcon className="size-4" />
                </TextLink>
              </div>
              <ul className="mt-8 grid gap-5 md:grid-cols-2">
                {more.map((item) => (
                  <li key={item.slug} className="flex">
                    <WorkCard item={item} />
                  </li>
                ))}
              </ul>
            </Container>
          </section>
        )}
      </div>

      <CTABand />
    </>
  );
}
