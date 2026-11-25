import Image from "next/image";
import deskMinimal from "@/assets/photos/desk-minimal.jpg";
import deskWhite from "@/assets/photos/desk-white.jpg";
import nairobiDay from "@/assets/photos/nairobi-day.jpg";
import whiteRoom from "@/assets/photos/white-room.jpg";

/**
 * Photos (Unsplash, free licence):
 * - whiteRoom: Pawel Czerwinski
 * - deskMinimal: Dhony Koswara
 * - deskWhite: Ihor Dvoretskyi
 * - nairobiDay: imsogabriel stock
 */
export const photos = {
  whiteRoom,
  deskMinimal,
  deskWhite,
  nairobiDay,
};

export type PhotoName = keyof typeof photos;

const veils = {
  /** For dark text on top: a soft white wash. */
  light: "bg-white/45",
  /** For white text on top: an Imperial Blue wash. */
  dark: "bg-navy/70",
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
export function PhotoBackground({ photo, veil = "light", priority = false, sizes = "100vw" }: PhotoBackgroundProps) {
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
