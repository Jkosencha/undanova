/**
 * Splash screen, played on every full load of the site: the "U." mark on
 * teal-blue (the U fills up, the dot drops in), a short hold, then the whole
 * screen lifts away (about 3.5s). Moving between pages doesn't reload the
 * layout, so it doesn't replay then. Pure CSS (see "Splash" in globals.css),
 * so it clears itself even without JavaScript; off under reduced motion.
 * Decorative: hidden from screen readers and never blocks clicks.
 * Path: the icon, public/brand/undanova-icon.svg.
 */
export function Splash() {
  return (
    <div aria-hidden className="splash fixed inset-0 z-[100] flex items-center justify-center bg-navy">
      {/* The "U." mark: the U fills up from its base, then the dot drops in */}
      <svg viewBox="20 -470 530 490" className="w-[min(36vw,190px)] overflow-visible">
        <path
          className="splash-mark"
          fill="#fff"
          d="M225.28 7.04Q169.6 7.04 127.04 -16.64Q84.48 -40.32 60.48 -82.24Q36.48 -124.16 36.48 -177.92V-451.84H137.6V-172.16Q137.6 -145.28 149.12 -125.44Q160.64 -105.6 180.8 -95.04Q200.96 -84.48 225.28 -84.48Q250.88 -84.48 270.08 -95.04Q289.28 -105.6 300.48 -125.12Q311.68 -144.64 311.68 -171.52V-451.84H412.8V-177.28Q412.8 -123.52 389.12 -81.92Q365.44 -40.32 323.2 -16.64Q280.96 7.04 225.28 7.04Z"
        />
        <circle className="splash-dot" cx="480.8" cy="-38.96" r="46" fill="#8fb3c4" />
      </svg>
    </div>
  );
}
