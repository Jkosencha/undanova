"use client";

import { type KeyboardEvent, type ReactNode, useId, useRef, useState } from "react";

export type Reason = {
  label: string;
  title: string;
  text: string;
  visual: ReactNode;
};

/**
 * "Why choose us" tabs (from the Ocean Crown reference): labelled dots on a line,
 * with an illustration and text for the selected reason. Follows the ARIA tabs
 * pattern: arrow keys move between tabs.
 */
export function ReasonTabs({ reasons }: { reasons: Reason[] }) {
  const [active, setActive] = useState(0);
  const tabs = useRef<(HTMLButtonElement | null)[]>([]);
  const base = useId().replace(/[^a-zA-Z0-9_-]/g, "");

  function onKeyDown(e: KeyboardEvent) {
    const last = reasons.length - 1;
    const next =
      e.key === "ArrowRight" ? (active === last ? 0 : active + 1)
      : e.key === "ArrowLeft" ? (active === 0 ? last : active - 1)
      : e.key === "Home" ? 0
      : e.key === "End" ? last
      : null;
    if (next === null) return;
    e.preventDefault();
    setActive(next);
    tabs.current[next]?.focus();
  }

  const reason = reasons[active];

  return (
    <div>
      <div className="relative mx-auto max-w-3xl">
        <span aria-hidden className="absolute left-[12%] right-[12%] top-[2.1rem] h-px bg-navy/20" />
        <div role="tablist" aria-label="Why choose UndaNova" className="relative grid grid-cols-4" onKeyDown={onKeyDown}>
          {reasons.map((r, i) => {
            const selected = i === active;
            return (
              <button
                key={r.label}
                ref={(el) => {
                  tabs.current[i] = el;
                }}
                id={`${base}-tab-${i}`}
                role="tab"
                type="button"
                aria-selected={selected}
                aria-controls={`${base}-panel`}
                tabIndex={selected ? 0 : -1}
                onClick={() => setActive(i)}
                className="group flex min-h-11 flex-col items-center gap-3 rounded-xl px-1 text-center"
              >
                <span
                  className={`text-xs font-medium leading-tight sm:text-sm ${selected ? "text-navy" : "text-ink/60 group-hover:text-navy"}`}
                >
                  {r.label}
                </span>
                <span
                  aria-hidden
                  className={`size-3.5 rounded-full border-2 transition-all ${
                    selected ? "scale-125 border-navy bg-plum ring-4 ring-plum/25" : "border-navy/30 bg-white"
                  }`}
                />
              </button>
            );
          })}
        </div>
      </div>

      <div
        id={`${base}-panel`}
        role="tabpanel"
        aria-labelledby={`${base}-tab-${active}`}
        className="mt-12 grid items-center gap-10 md:grid-cols-2 md:gap-16"
      >
        <div key={active} className="animate-rise">
          {reason.visual}
        </div>
        <div key={`t${active}`} className="animate-rise">
          <h3 className="text-[30px] text-navy md:text-4xl">{reason.title}</h3>
          <p className="mt-4 text-lg text-ink/75">{reason.text}</p>
        </div>
      </div>
    </div>
  );
}
