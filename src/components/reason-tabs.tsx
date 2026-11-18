import type { ReactNode } from "react";

export type Reason = {
  label: string;
  title: string;
  text: string;
  visual: ReactNode;
};

/**
 * "Why choose us" switcher (from the Ocean Crown reference): labelled dots on a
 * line, with an illustration and text for the selected reason.
 *
 * Built with native radio buttons and CSS (`group-has-[...:checked]`), so it needs
 * no JavaScript: arrow keys move between options, and screen readers announce a
 * radio group. Supports up to four reasons (the selectors are written out below).
 */
const show = [
  "group-has-[#reason-0:checked]/reasons:grid",
  "group-has-[#reason-1:checked]/reasons:grid",
  "group-has-[#reason-2:checked]/reasons:grid",
  "group-has-[#reason-3:checked]/reasons:grid",
];
const selectedLabel = [
  "group-has-[#reason-0:checked]/reasons:text-navy",
  "group-has-[#reason-1:checked]/reasons:text-navy",
  "group-has-[#reason-2:checked]/reasons:text-navy",
  "group-has-[#reason-3:checked]/reasons:text-navy",
];
const selectedDot = [
  "group-has-[#reason-0:checked]/reasons:scale-125 group-has-[#reason-0:checked]/reasons:border-navy group-has-[#reason-0:checked]/reasons:bg-plum group-has-[#reason-0:checked]/reasons:ring-4",
  "group-has-[#reason-1:checked]/reasons:scale-125 group-has-[#reason-1:checked]/reasons:border-navy group-has-[#reason-1:checked]/reasons:bg-plum group-has-[#reason-1:checked]/reasons:ring-4",
  "group-has-[#reason-2:checked]/reasons:scale-125 group-has-[#reason-2:checked]/reasons:border-navy group-has-[#reason-2:checked]/reasons:bg-plum group-has-[#reason-2:checked]/reasons:ring-4",
  "group-has-[#reason-3:checked]/reasons:scale-125 group-has-[#reason-3:checked]/reasons:border-navy group-has-[#reason-3:checked]/reasons:bg-plum group-has-[#reason-3:checked]/reasons:ring-4",
];
const focusRing = [
  "group-has-[#reason-0:focus-visible]/reasons:outline-2",
  "group-has-[#reason-1:focus-visible]/reasons:outline-2",
  "group-has-[#reason-2:focus-visible]/reasons:outline-2",
  "group-has-[#reason-3:focus-visible]/reasons:outline-2",
];

export function ReasonTabs({ reasons }: { reasons: Reason[] }) {
  const items = reasons.slice(0, 4);
  return (
    <fieldset className="group/reasons">
      <legend className="sr-only">Why choose UndaNova</legend>

      <div className="relative mx-auto max-w-3xl">
        <span aria-hidden className="absolute left-[12%] right-[12%] top-[2.1rem] h-px bg-navy/20" />
        <div className="relative grid grid-cols-4">
          {items.map((r, i) => (
            <label
              key={r.label}
              htmlFor={`reason-${i}`}
              className={`flex min-h-11 cursor-pointer flex-col items-center gap-3 rounded-xl px-1 text-center outline-offset-4 outline-plum ${focusRing[i]}`}
            >
              <input type="radio" name="reason" id={`reason-${i}`} defaultChecked={i === 0} className="sr-only" />
              <span
                className={`text-xs font-medium leading-tight text-ink/60 hover:text-navy sm:text-sm ${selectedLabel[i]}`}
              >
                {r.label}
              </span>
              <span
                aria-hidden
                className={`size-3.5 rounded-full border-2 border-navy/30 bg-white ring-plum/25 transition-all ${selectedDot[i]}`}
              />
            </label>
          ))}
        </div>
      </div>

      {items.map((r, i) => (
        <div key={r.label} className={`mt-12 hidden items-center gap-10 md:grid-cols-2 md:gap-16 ${show[i]}`}>
          <div className="animate-rise">{r.visual}</div>
          <div className="animate-rise">
            <h3 className="text-[30px] text-navy md:text-4xl">{r.title}</h3>
            <p className="mt-4 text-lg text-ink/75">{r.text}</p>
          </div>
        </div>
      ))}
    </fieldset>
  );
}
