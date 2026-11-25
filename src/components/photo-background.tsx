import Image from "next/image";
import blueprintGrid from "@/assets/photos/blueprint-grid.jpg";
import circuit from "@/assets/photos/circuit.jpg";
import codeCloseup from "@/assets/photos/code-closeup.jpg";
import codeScreens from "@/assets/photos/code-screens.jpg";
import curves from "@/assets/photos/curves.jpg";
import lightLines from "@/assets/photos/light-lines.jpg";
import network from "@/assets/photos/network.jpg";
import sphere from "@/assets/photos/sphere.jpg";

/**
 * Technology photography (Unsplash, free licence; no people, no offices):
 * sphere: Christian Boragine · codeCloseup: Timothy Cuenat · network: Conny Schneider
 * curves: Hassaan Here · circuit: Yogesh Phuyal · codeScreens: Jakub Żerdzicki
 * lightLines: Declan Sun · blueprintGrid: Claudio Guglieri
 */
export const photos = {
  sphere,
  codeCloseup,
  network,
  curves,
  circuit,
  codeScreens,
  lightLines,
  blueprintGrid,
};

export type PhotoName = keyof typeof photos;

const veils = {
  /** For white text on top: a deep teal-blue brand wash. */
  dark: "bg-navy/75",
  /** A lighter navy wash where only large text sits on top. */
  medium: "bg-navy/55",
  none: "",
};

type PhotoBackgroundProps = {
  photo: PhotoName;
  veil?: keyof typeof veils;
  /** Set on the first photo of a page so it loads straight away. */
  priority?: boolean;
  /** How wide the photo shows, for picking the right file size. */
  sizes?: string;
};

/** Full-bleed photo behind a section. Place inside a `relative isolate overflow-hidden` element. */
export function PhotoBackground({ photo, veil = "dark", priority = false, sizes = "100vw" }: PhotoBackgroundProps) {
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
      {veil !== "none" && <div className={`absolute inset-0 ${veils[veil]}`} />}
    </div>
  );
}
