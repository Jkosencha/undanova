/**
 * Endless scrolling strip of words. The list is repeated so the track can slide
 * by half and loop; the copy is hidden from screen readers. Pauses on hover and
 * stops entirely with reduced motion (see globals.css).
 */
export function Marquee({ items, label }: { items: string[]; label: string }) {
  const row = (hidden: boolean) => (
    <ul aria-hidden={hidden || undefined} className="flex shrink-0 items-center gap-10 pr-10">
      {items.map((item) => (
        <li key={item} className="flex items-center gap-10 whitespace-nowrap">
          <span className="font-heading text-3xl font-light text-navy md:text-5xl">{item}</span>
          <svg aria-hidden viewBox="0 0 40 16" className="w-10 shrink-0 text-plum">
            <path
              d="M1 12C8 2 15 1 20 7s12 7 19-4"
              fill="none"
              stroke="currentColor"
              strokeWidth={2.5}
              strokeLinecap="round"
            />
          </svg>
        </li>
      ))}
    </ul>
  );
  return (
    <section aria-label={label} className="overflow-hidden border-y border-navy/10 bg-paper py-8 md:py-10">
      <div className="flex w-max animate-marquee hover:[animation-play-state:paused]">
        {row(false)}
        {row(true)}
      </div>
    </section>
  );
}
