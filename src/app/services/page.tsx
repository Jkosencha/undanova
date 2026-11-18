import type { Metadata } from "next";
import { PagePlaceholder } from "@/components/page-placeholder";

export const metadata: Metadata = {
  title: "Services",
};

// Placeholder until Phase 3.
export default function Page() {
  return <PagePlaceholder title="Services" phase={3} />;
}
