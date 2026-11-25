import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { Button } from "@/components/button";
import { CTABand } from "@/components/cta-band";
import { PageHeader } from "@/components/page-header";
import { Container, Section, SectionHeading } from "@/components/section";
import { TextLink } from "@/components/text-link";
import { ProjectCover } from "@/components/visuals";
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

// Which service a project's kind maps to, for the pre-filled contact form.
const serviceFor = { shop: "web-development", dashboard: "business-systems", website: "web-development" } as const;

export default async function CaseStudyPage(props: PageProps<"/work/[slug]">) {
  const { slug } = await props.params;
  const project = getProject(slug);
  if (!project) notFound();

  const [hero, ...gallery] = project.images;
  // Only verified details are shown: empty fields are left out.
  const facts = [
    { label: "Client", value: project.client },
    { label: "Category", value: project.category },
    { label: "Status", value: project.status === "live" ? "Live" : "In progress" },
  ].filter((f) => f.value);
  const story = [
    { id: "problem", title: "Problem addressed", text: project.problem },
    { id: "solution", title: "Solution delivered", text: project.solution },
    { id: "result", title: "The result", text: project.results },
  ].filter((s) => s.text);
  const more = work.filter((item) => item.slug !== project.slug).slice(0, 2);

  return (
    <>
      <PageHeader
        title={project.title}
        intro={project.summary}
        eyebrow={
          <span className="inline-flex flex-wrap items-center justify-center gap-3">
            {project.concept ? "Concept project" : project.category}
            <StatusBadge status={project.status} />
          </span>
        }
      >
        <Button href={`/contact?service=${serviceFor[project.preview]}`} className="mt-10">
          Start a similar project
        </Button>
      </PageHeader>

      {/* Main image (or an illustration until screenshots are added) and key facts */}
      <Section aria-label="Project overview">
        {hero ? (
          <Image
            src={hero.src}
            alt={hero.alt}
            width={1200}
            height={675}
            sizes="(min-width: 1200px) 1136px, 100vw"
            priority
            className="aspect-video w-full border border-mist object-cover"
          />
        ) : (
          <ProjectCover kind={project.preview} className="h-72 border border-mist sm:h-[28rem]" />
        )}
        <dl className={`mt-12 grid gap-8 text-center ${facts.length === 3 ? "sm:grid-cols-3" : "sm:grid-cols-2"}`}>
          {facts.map((f) => (
            <div key={f.label} className="border-t border-navy/20 pt-5">
              <dt className="caps-sm text-ink">{f.label}</dt>
              <dd className="mt-2 font-heading text-lg text-navy">{f.value}</dd>
            </div>
          ))}
        </dl>
      </Section>

      {/* The story, once verified details are available */}
      <Section tone="paper" aria-label="Case study">
        <Container className="max-w-3xl space-y-16 px-0!">
          {story.length > 0 ? (
            story.map((part) => (
              <div key={part.id} className="reveal text-center">
                <SectionHeading id={part.id} title={part.title} />
                <p className="mx-auto mt-6 max-w-2xl text-lg text-ink">{part.text}</p>
              </div>
            ))
          ) : (
            <p className="text-center text-lg text-ink">
              This project is in progress. A full write-up will follow once it&apos;s complete.
            </p>
          )}
          {project.stack.length > 0 && (
            <div className="text-center">
              <SectionHeading id="stack" title="Technologies used" />
              <ul className="mt-6 flex flex-wrap justify-center gap-2">
                {project.stack.map((tech) => (
                  <li key={tech} className="caps-sm border border-navy/25 px-3 py-2 text-[10px] text-navy">
                    {tech}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </Container>
      </Section>

      {gallery.length > 0 && (
        <Section aria-label="Screenshots">
          <ul className="grid gap-6 md:grid-cols-2">
            {gallery.map((image) => (
              <li key={image.src}>
                <Image
                  src={image.src}
                  alt={image.alt}
                  width={1200}
                  height={675}
                  sizes="(min-width: 768px) 50vw, 100vw"
                  className="aspect-video w-full border border-mist object-cover"
                />
              </li>
            ))}
          </ul>
        </Section>
      )}

      {more.length > 0 && (
        <Section aria-labelledby="more-title">
          <SectionHeading id="more-title" title="More work" />
          <ul className="mt-14 grid gap-6 md:grid-cols-2">
            {more.map((item) => (
              <li key={item.slug} className="flex">
                <WorkCard item={item} />
              </li>
            ))}
          </ul>
          <div className="mt-10 text-center">
            <TextLink href="/work">All projects</TextLink>
          </div>
        </Section>
      )}

      <CTABand />
    </>
  );
}
