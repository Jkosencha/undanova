"use client";

/**
 * A photo that settles in (a slight zoom out) when it scrolls into view and
 * drifts gently with the scroll. Fills its parent, which sets the size and
 * aspect ratio. Transform only, so the image is never hidden; off under
 * reduced motion.
 */
import { useScroll, useTransform } from "motion/react";
import * as m from "motion/react-m";
import Image, { type StaticImageData } from "next/image";
import { useRef } from "react";
import { photoTone } from "@/components/photo-background";

type Props = { src: StaticImageData; alt: string; sizes: string };

export function ParallaxImage({ src, alt, sizes }: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["-5%", "5%"]);

  return (
    <div ref={ref} className="absolute inset-0 overflow-hidden">
      <m.div style={{ y }} className="absolute -inset-y-[6%] inset-x-0">
        <m.div
          className="relative size-full"
          initial={{ scale: 1.1 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 1.4, ease: [0.2, 0.7, 0.2, 1] }}
        >
          <Image src={src} alt={alt} fill sizes={sizes} quality={60} placeholder="blur" className={photoTone} />
        </m.div>
      </m.div>
    </div>
  );
}
