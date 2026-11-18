import Image from "next/image";
import nairobiNight from "@/assets/photos/nairobi-night.jpg";
import satin from "@/assets/photos/satin.jpg";
import teamLaptop from "@/assets/photos/team-laptop.jpg";

/**
 * Full-bleed photo behind a section, with a navy tint so white text stays readable.
 * Photos are from Unsplash (free licence); credits are in README.md.
 * Place inside a `relative isolate overflow-hidden` element.
 */
const photos = {
  nairobi: nairobiNight,
  satin,
  team: teamLaptop,
};

const tints = {
  /** Strong: for headings and body text on top. */
  strong: "bg-gradient-to-b from-navy/85 via-navy/75 to-night/90",
  /** Lighter: for areas with only large text. */
  soft: "bg-gradient-to-br from-navy/70 via-navy/45 to-night/80",
};

type PhotoBackgroundProps = {
  photo: keyof typeof photos;
  tint?: keyof typeof tints;
  /** Set on the first photo of a page so it loads straight away. */
  priority?: boolean;
  /** How wide the photo shows, for picking the right file size. */
  sizes?: string;
};

export function PhotoBackground({ photo, tint = "strong", priority = false, sizes = "100vw" }: PhotoBackgroundProps) {
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
      <Image
        src={photos[photo]}
        alt=""
        fill
        sizes={sizes}
        quality={60}
        priority={priority}
        placeholder="blur"
        className="object-cover"
      />
      <div className={`absolute inset-0 ${tints[tint]}`} />
      {/* A touch of Dusty Plum, as in the mood board */}
      <div className="absolute inset-0 bg-[radial-gradient(80%_60%_at_15%_10%,color-mix(in_srgb,var(--color-plum)_35%,transparent),transparent_70%)]" />
    </div>
  );
}
