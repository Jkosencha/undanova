import Link from "next/link";
import type { ComponentProps, ReactNode } from "react";

type Variant = "primary" | "secondary";
/** "light" for paper/white sections, "dark" for navy sections. */
type Tone = "light" | "dark";

// Thin rectangular buttons with small, wide-tracked caps.
const styles: Record<Tone, Record<Variant, string>> = {
  light: {
    primary: "border border-navy bg-navy text-white hover:bg-white hover:text-navy",
    secondary: "border border-navy text-navy hover:bg-navy hover:text-white",
  },
  dark: {
    primary: "border border-white bg-white text-navy hover:bg-transparent hover:text-white",
    secondary: "border border-white/70 text-white hover:bg-white hover:text-navy",
  },
};

export function buttonClasses(variant: Variant = "primary", tone: Tone = "light", className = "") {
  return [
    "inline-flex min-h-11 items-center justify-center gap-2 px-7 py-3",
    "font-heading text-xs font-medium uppercase leading-none tracking-[0.22em] transition-colors duration-300",
    styles[tone][variant],
    className,
  ].join(" ");
}

type CommonProps = {
  variant?: Variant;
  tone?: Tone;
  className?: string;
  children: ReactNode;
};

type LinkButtonProps = CommonProps & { href: string } & Omit<ComponentProps<"a">, "href" | "className">;
type NativeButtonProps = CommonProps & { href?: undefined } & Omit<ComponentProps<"button">, "className">;

export function Button(props: LinkButtonProps | NativeButtonProps) {
  const { variant, tone, className, children, ...rest } = props;
  const classes = buttonClasses(variant, tone, className);

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
