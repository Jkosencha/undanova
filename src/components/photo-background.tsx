import Image from "next/image";
import circuit from "@/assets/photos/circuit.jpg";
import codeCloseup from "@/assets/photos/code-closeup.jpg";
import codeScreens from "@/assets/photos/code-screens.jpg";
import deskLamp from "@/assets/photos/desk-lamp.jpg";
import keyboardBacklit from "@/assets/photos/keyboard-backlit.jpg";
import keyboardDark from "@/assets/photos/keyboard-dark.jpg";
import laptopCode from "@/assets/photos/laptop-code.jpg";
import laptopKeyboard from "@/assets/photos/laptop-keyboard.jpg";

/**
 * Technology photography (Unsplash, free licence; no people, no abstract lines):
 * circuit: Yogesh Phuyal · codeCloseup: Timothy Cuenat · codeScreens: Jakub Żerdzicki
 * deskLamp: Clint Patterson · keyboardBacklit: Jepretualang · keyboardDark: Robbin Grimm
 * laptopCode: AltumCode · laptopKeyboard: Igor Omilaev
 *
 * Every photo is shown in black and white (the `grayscale` class) so it takes on the
 * brand palette from the deep teal-blue wash, instead of its own colours.
 */
export const photos = {
  circuit,
  codeCloseup,
  codeScreens,
  deskLamp,
  keyboardBacklit,
  keyboardDark,
  laptopCode,
  laptopKeyboard,
};

/** Classes for a brand-toned photo: black and white, so the teal-blue wash colours it. */
export const photoTone = "object-cover grayscale";

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
        className={photoTone}
      />
      {veil !== "none" && <div className={`absolute inset-0 ${veils[veil]}`} />}
    </div>
  );
}
