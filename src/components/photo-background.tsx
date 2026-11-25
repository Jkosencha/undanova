import Image from "next/image";
import cafeCode from "@/assets/photos/cafe-code.jpg";
import circuit from "@/assets/photos/circuit.jpg";
import codeSunset from "@/assets/photos/code-sunset.jpg";
import lakeSunset from "@/assets/photos/lake-sunset.jpg";
import nightBalcony from "@/assets/photos/night-balcony.jpg";
import pathSunset from "@/assets/photos/path-sunset.jpg";
import posCafe from "@/assets/photos/pos-cafe.jpg";
import terraceView from "@/assets/photos/terrace-view.jpg";
import valleySunset from "@/assets/photos/valley-sunset.jpg";

/**
 * Photos, in natural colour. All are UndaNova's own, except `circuit`
 * (Yogesh Phuyal, Unsplash free licence). Screens showing code, desktop files
 * or personal names are blurred, and metadata (including location) is removed.
 */
export const photos = {
  cafeCode,
  circuit,
  codeSunset,
  lakeSunset,
  nightBalcony,
  pathSunset,
  posCafe,
  terraceView,
  valleySunset,
};

/** Classes for photos shown on their own (natural colour). */
export const photoTone = "object-cover";

export type PhotoName = keyof typeof photos;

const veils = {
  /** For white text on top: a deep teal-blue wash, darker at the bottom where text sits. */
  dark: "bg-gradient-to-b from-navy/55 via-navy/60 to-navy/80",
  /** A lighter wash where only large text sits on top. */
  medium: "bg-gradient-to-b from-navy/35 via-navy/45 to-navy/70",
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
        className={photoTone}
      />
      {veil !== "none" && <div className={`absolute inset-0 ${veils[veil]}`} />}
    </div>
  );
}
