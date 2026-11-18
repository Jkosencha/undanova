import { site } from "@/lib/site";

/** Organisation details for search engines (schema.org ProfessionalService). */
export function OrganizationJsonLd() {
  const sameAs = Object.values(site.social).filter(Boolean);
  const data = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: site.name,
    legalName: site.legalName,
    slogan: site.tagline,
    description: site.description,
    url: site.url,
    logo: `${site.url}/brand/undanova-logo-primary.svg`,
    image: `${site.url}/opengraph-image.png`,
    email: site.email,
    founder: { "@type": "Person", name: "Jennifer Kosencha" },
    areaServed: { "@type": "Country", name: "Kenya" },
    address: { "@type": "PostalAddress", addressCountry: "KE", addressLocality: site.location },
    ...(sameAs.length > 0 ? { sameAs } : {}),
  };
  return (
    <script
      type="application/ld+json"
      // Static site config, serialised safely.
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, "\\u003c") }}
    />
  );
}
