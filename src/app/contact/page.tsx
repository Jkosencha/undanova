import type { Metadata } from "next";
import { PagePlaceholder } from "@/components/page-placeholder";

export const metadata: Metadata = {
  title: "Contact",
};

// Placeholder until Phase 5.
export default function Page() {
  return <PagePlaceholder title="Let's build something." phase={5} />;
}
