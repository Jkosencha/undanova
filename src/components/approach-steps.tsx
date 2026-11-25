"use client";

/**
 * "Our approach" steps. On large screens the section holds in place while you
 * scroll and each step fills teal-blue in turn; on small screens it's a plain
 * list. Only colours change (no movement), so it also suits reduced motion.
 */
import { useMotionValueEvent, useScroll } from "motion/react";
import { type ReactNode, useRef, useState } from "react";

type Step = { title: string; text: string };

export function ApproachSteps({ steps, children }: { steps: Step[]; children: ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end end"] });
  useMotionValueEvent(scrollYProgress, "change", (v) => {
    setActive(Math.min(steps.length - 1, Math.floor(v * steps.length)));
  });

  return (
    <div ref={ref} className="relative lg:h-[260vh]">
      <div className="py-18 md:py-28 lg:sticky lg:top-20 lg:flex lg:h-[calc(100svh-5rem)] lg:flex-col lg:justify-center lg:py-0">
        {children}
        <ol className="reveal-stagger mt-16 grid gap-12 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
          {steps.map((step, i) => (
            <li
              key={step.title}
              data-active={i === active}
              className="group transition-colors duration-500 lg:border lg:border-navy/15 lg:p-8 lg:data-[active=true]:border-navy lg:data-[active=true]:bg-navy"
            >
              <span className="block font-heading text-4xl font-light text-navy transition-colors duration-500 lg:group-data-[active=true]:text-white">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="caps-sm mt-4 text-navy transition-colors duration-500 lg:group-data-[active=true]:text-white">
                {step.title}
              </h3>
              <p className="mt-3 text-sm text-ink transition-colors duration-500 lg:group-data-[active=true]:text-white/90">
                {step.text}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
}
