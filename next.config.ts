import type { NextConfig } from "next";

// Basic security headers for every response.
const securityHeaders = [
  // Stop browsers guessing content types.
  { key: "X-Content-Type-Options", value: "nosniff" },
  // Don't allow the site to be embedded in frames on other sites (clickjacking).
  { key: "X-Frame-Options", value: "DENY" },
  // Send only the origin when linking to other sites.
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  // The site doesn't use these browser features, so switch them off.
  { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=(), browsing-topics=()" },
  // Always use HTTPS once visited (one year).
  { key: "Strict-Transport-Security", value: "max-age=31536000" },
];

const nextConfig: NextConfig = {
  cacheComponents: true,
  poweredByHeader: false,
  headers() {
    return [{ source: "/:path*", headers: securityHeaders }];
  },
  images: {
    // Photos use quality 60 (lighter on mobile data); 75 is the Next.js default for everything else.
    qualities: [60, 75],
  },
  partialPrefetching: true,
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
};

export default nextConfig;
