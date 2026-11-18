/**
 * Case study: "Snapview" design: phone-in-hand hero, lilac facts band, story. See CLAUDE.md §10.
 */
import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { Button } from "@/components/button";
import { CTAStrip } from "@/components/cta-strip";
import { ArrowIcon, CheckIcon, ServiceIcon } from "@/components/icons";
import { Container, SectionHeading } from "@/components/section";
import { TextLink } from "@/components/text-link";
import { StatusBadge, WorkCard } from "@/components/work-card";
import { previewScreen, WorkHero } from "@/components/work-hero";
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

// Which service a project's kind maps to, for icons and the pre-filled contact form.
const serviceFor = { shop: "ecommerce-mpesa", dashboard: "ngo-school-systems", website: "business-websites" } as const;

export default async function CaseStudyPage(props: PageProps<"/work/[slug]">) {
  const { slug } = await props.params;
  const project = getProject(slug);
  if (!project) notFound();

  const service = serviceFor[project.preview];
  const story = [
    { id: "problem", title: "The problem", text: project.problem },
    { id: "solution", title: "What we built", text: project.solution },
    { id: "result", title: "The result", text: project.results },
  ];
  const facts = [
    { label: "Client", value: project.client, icon: <CheckIcon className="size-7" /> },
    { label: "Service", value: project.category, icon: <ServiceIcon slug={service} className="size-7" /> },
    {
      label: "Status",
      value: project.status === "live" ? "Live" : "In progress",
      icon: <ServiceIcon slug="support-maintenance" className="size-7" />,
    },
  ];
  const more = work.filter((item) => item.slug !== project.slug).slice(0, 2);

  return (
    <>
      <WorkHero screen={previewScreen(project.preview)}>
        <div className="flex flex-wrap items-center gap-3">
          <span className="inline-flex items-center rounded-full border border-white/25 bg-white/5 px-3.5 py-1.5 text-sm font-medium">
            {project.category}
          </span>
          <StatusBadge status={project.status} tone="dark" />
        </div>
        <h1 className="mt-5 text-[44px] font-bold leading-[1.05] md:text-[64px]">{project.title}</h1>
        <p className="mt-5 max-w-lg text-lg text-white/85">{project.summary}</p>
        <Button href={`/contact?service=${service}`} tone="dark" className="mt-8">
          Start a similar project
          <ArrowIcon className="size-4" />
        </Button>
      </WorkHero>

      {/* Lilac facts band */}
      <section aria-label="Project facts" className="bg-lilac py-14 md:py-16">
        <Container>
          <dl className="grid gap-10 text-center sm:grid-cols-3">
            {facts.map((f) => (
              <div key={f.label}>
                <span
                  aria-hidden
                  className="mx-auto inline-flex size-16 items-center justify-center rounded-full border-2 border-navy/40 text-navy"
                >
                  {f.icon}
                </span>
                <dt className="mt-4 text-sm font-mono font-medium uppercase tracking-[0.14em] text-navy">{f.label}</dt>
                <dd className="mt-1 text-lg text-navy/85">{f.value}</dd>
              </div>
            ))}
          </dl>
        </Container>
      </section>

      {/* The story */}
      <section aria-label="Case study" className="bg-white py-20 md:py-28">
        <Container className="max-w-3xl space-y-16">
          {story.map((part) => (
            <div key={part.id} className="reveal text-center">
              <SectionHeading id={part.id} title={part.title} align="center" divider />
              <p className="mx-auto mt-6 max-w-2xl text-lg text-ink/80">{part.text}</p>
            </div>
          ))}

          {project.stack.length > 0 && (
            <div className="text-center">
              <SectionHeading id="stack" title="Built with" align="center" divider />
              <ul className="mt-6 flex flex-wrap justify-center gap-2">
                {project.stack.map((tech) => (
                  <li
                    key={tech}
                    className="rounded-full border border-navy/20 bg-paper px-4 py-1.5 text-sm font-medium text-navy"
                  >
                    {tech}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </Container>

        {project.images.length > 0 && (
          <Container className="mt-16">
            <ul className="grid gap-4 md:grid-cols-2">
              {project.images.map((image, i) => (
                <li key={image.src} className={i === 0 ? "md:col-span-2" : ""}>
                  <Image
                    src={image.src}
                    alt={image.alt}
                    width={1200}
                    height={675}
                    sizes={i === 0 ? "(min-width: 1200px) 1152px, 100vw" : "(min-width: 768px) 50vw, 100vw"}
                    className="aspect-video w-full border border-slate/20 object-cover"
                  />
                </li>
              ))}
            </ul>
          </Container>
        )}
      </section>

      {more.length > 0 && (
        <section aria-labelledby="more-title" className="bg-paper py-20 md:py-24">
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

      <CTAStrip title="Have a project like this?" text="Tell us what you need. We reply within 24 hours." />
    </>
  );
}
