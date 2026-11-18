import type { Metadata } from "next";
import { PagePlaceholder } from "@/components/page-placeholder";

export const metadata: Metadata = {
  title: "About",
};

// Placeholder until Phase 5.
export default function Page() {
  return <PagePlaceholder title="About" phase={5} />;
}
