import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { PagePlaceholder } from "@/components/page-placeholder";
import { work } from "@/content/work";

export const metadata: Metadata = {
  title: "Case study",
};

// Placeholder until Phase 4 builds the case study template.
const slugs = work.map((item) => item.slug);

export function generateStaticParams() {
  return slugs.map((slug) => ({ slug }));
}

export default async function Page(props: PageProps<"/work/[slug]">) {
  const { slug } = await props.params;
  if (!slugs.includes(slug)) notFound();
  return <PagePlaceholder title={`Case study: ${slug}`} phase={4} />;
}
