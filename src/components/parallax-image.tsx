/**
 * A photo that settles in (a slight zoom out) as it scrolls into view and
 * drifts gently with the scroll. Fills its parent, which sets the size and
 * aspect ratio. Pure CSS scroll-driven animation (no JavaScript, see
 * `.parallax` in globals.css); transform only, so the image is never hidden.
 * Browsers without support, and reduced motion, show a still photo. Frames
 * around it must crop with `overflow-clip`, not `overflow-hidden`: a hidden
 * overflow makes a scroll container, and the photo then never moves.
 */
import Image, { type StaticImageData } from "next/image";
import { photoTone } from "@/components/photo-background";

type Props = { src: StaticImageData; alt: string; sizes: string };

export function ParallaxImage({ src, alt, sizes }: Props) {
  return (
    <div className="parallax absolute inset-0 overflow-clip">
      <div className="parallax-drift absolute inset-x-0 -inset-y-[6%]">
        <div className="parallax-settle relative size-full">
          <Image src={src} alt={alt} fill sizes={sizes} quality={60} placeholder="blur" className={photoTone} />
        </div>
      </div>
    </div>
  );
}
