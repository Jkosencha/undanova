import type { Metadata } from "next";
import { PagePlaceholder } from "@/components/page-placeholder";

export const metadata: Metadata = {
  title: "Work",
};

// Placeholder until Phase 4.
export default function Page() {
  return <PagePlaceholder title="Our work" phase={4} />;
}
