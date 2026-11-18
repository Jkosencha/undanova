import { NextResponse, type NextRequest } from "next/server";
import { work } from "@/content/work";

const slugs = new Set(work.map((item) => item.slug));

/**
 * Unknown case studies (/work/anything) would otherwise render the 404 page
 * with a 200 status, because the page has already started streaming. Rewriting
 * them to a path with no route makes Next.js send a real 404.
 */
export function proxy(request: NextRequest) {
  const slug = request.nextUrl.pathname.split("/")[2];
  if (slug && !slugs.has(decodeURIComponent(slug))) {
    return NextResponse.rewrite(new URL("/_unknown-case-study", request.url));
  }
  return NextResponse.next();
}

export const config = {
  matcher: "/work/:slug",
};
