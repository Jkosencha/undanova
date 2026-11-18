import Link from "next/link";
import type { ComponentProps, ReactNode } from "react";

type Variant = "primary" | "secondary";
/** "light" for paper/white sections, "dark" for navy sections. */
type Tone = "light" | "dark";

const styles: Record<Tone, Record<Variant, string>> = {
  light: {
    primary: "bg-navy text-white hover:bg-navy/90",
    secondary: "border border-navy text-navy hover:bg-navy/5",
  },
  dark: {
    primary: "bg-white text-navy hover:bg-white/90",
    secondary: "border border-white text-white hover:bg-white/10",
  },
};

export function buttonClasses(variant: Variant = "primary", tone: Tone = "light", className = "", glow = false) {
  return [
    "inline-flex min-h-11 items-center justify-center gap-2 rounded-full px-6 py-2.5",
    "text-base font-medium leading-tight transition-colors",
    glow ? "border-glow text-navy shadow-lg shadow-plum/30 hover:shadow-plum/50" : styles[tone][variant],
    className,
  ].join(" ");
}

type CommonProps = {
  /** Animated glowing border (white button with navy text). For one key action per screen. */
  glow?: boolean;
  variant?: Variant;
  tone?: Tone;
  className?: string;
  children: ReactNode;
};

type LinkButtonProps = CommonProps & { href: string } & Omit<ComponentProps<"a">, "href" | "className">;
type NativeButtonProps = CommonProps & { href?: undefined } & Omit<ComponentProps<"button">, "className">;

export function Button(props: LinkButtonProps | NativeButtonProps) {
  const { variant, tone, className, glow, children, ...rest } = props;
  const classes = buttonClasses(variant, tone, className, glow);

  if (rest.href !== undefined) {
    const { href, ...anchorProps } = rest as LinkButtonProps;
    if (/^(https?:|mailto:|tel:)/.test(href)) {
      const external = href.startsWith("http");
      return (
        <a
          href={href}
          className={classes}
          {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
          {...anchorProps}
        >
          {children}
        </a>
      );
    }
    return (
      <Link href={href} className={classes} {...anchorProps}>
        {children}
      </Link>
    );
  }

  const { type = "button", ...buttonProps } = rest as NativeButtonProps;
  return (
    <button type={type} className={classes} {...buttonProps}>
      {children}
    </button>
  );
}
