import Image from "next/image";
import analyticsLaptop from "@/assets/photos/analytics-laptop.jpg";
import cafeCode from "@/assets/photos/cafe-code.jpg";
import codeDesk from "@/assets/photos/code-desk.jpg";
import codeSunset from "@/assets/photos/code-sunset.jpg";
import deskLamp from "@/assets/photos/desk-lamp.jpg";
import lakeSunset from "@/assets/photos/lake-sunset.jpg";
import metricsScreen from "@/assets/photos/metrics-screen.jpg";
import openOffice from "@/assets/photos/open-office.jpg";
import pathSunset from "@/assets/photos/path-sunset.jpg";
import stickyBoard from "@/assets/photos/sticky-board.jpg";
import studioDesk from "@/assets/photos/studio-desk.jpg";
import valleySunset from "@/assets/photos/valley-sunset.jpg";
import websiteImac from "@/assets/photos/website-imac.jpg";
import whiteDesk from "@/assets/photos/white-desk.jpg";

/**
 * Photos, in natural colour, with metadata (including location) removed.
 * Page headers and calls to action use UndaNova's own photos (screens showing
 * code, desktop files or personal names are blurred). Body images are free
 * Unsplash photos: studioDesk (Lasse Jensen), whiteDesk (Andrew Neel),
 * websiteImac (Annie Spratt), codeDesk (Rich Tervet), analyticsLaptop
 * (Luke Chesser), stickyBoard (Paymo), metricsScreen (Stephen Dawson),
 * openOffice (Madeline Liu) and deskLamp (Iewek Gnos, on Contact).
 */
export const photos = {
  analyticsLaptop,
  cafeCode,
  codeDesk,
  codeSunset,
  deskLamp,
  lakeSunset,
  metricsScreen,
  openOffice,
  pathSunset,
  stickyBoard,
  studioDesk,
  valleySunset,
  websiteImac,
  whiteDesk,
};

/** Classes for photos shown on their own (natural colour). */
export const photoTone = "object-cover";

export type PhotoName = keyof typeof photos;

/** A photo for each service, keyed by the service slug (Services page and the Home preview). */
export const serviceImage: Record<string, { photo: PhotoName; alt: string }> = {
  "web-development": { photo: "websiteImac", alt: "A desktop computer showing a website on a wooden desk" },
  "custom-software": { photo: "codeDesk", alt: "A laptop showing code on a white desk beside a lamp" },
  "business-systems": { photo: "analyticsLaptop", alt: "A laptop showing an analytics dashboard with charts" },
  "ui-ux-design": { photo: "stickyBoard", alt: "Sticky notes arranged in columns on a whiteboard" },
  "automation-integrations": { photo: "metricsScreen", alt: "A screen showing live performance metrics" },
  "digital-transformation": { photo: "openOffice", alt: "A modern open-plan office with workstations" },
};

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

/** Full-bleed photo behind a section. Place inside a `relative isolate overflow-clip` element. */
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
