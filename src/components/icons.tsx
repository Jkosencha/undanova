/**
 * Icons. Interface and service icons come from Lucide; brand marks from
 * Simple Icons (LinkedIn's official glyph is kept inline, as Simple Icons no
 * longer ships it). All are decorative: pair them with visible text or a label.
 */
import {
  ArrowRight,
  Check,
  CodeXml,
  Globe,
  LayoutDashboard,
  type LucideIcon,
  type LucideProps,
  Menu,
  PenTool,
  TrendingUp,
  Workflow,
  X,
} from "lucide-react";
import type { SVGProps } from "react";
import { siInstagram, siWhatsapp } from "simple-icons";

type IconProps = SVGProps<SVGSVGElement>;

function BrandIcon({ path, ...props }: IconProps & { path: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden focusable={false} {...props}>
      <path d={path} />
    </svg>
  );
}

export const WhatsAppIcon = (props: IconProps) => <BrandIcon path={siWhatsapp.path} {...props} />;
export const InstagramIcon = (props: IconProps) => <BrandIcon path={siInstagram.path} {...props} />;
export const LinkedInIcon = (props: IconProps) => (
  <BrandIcon
    path="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 1 1 0-4.125 2.062 2.062 0 0 1 0 4.125zM7.119 20.452H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"
    {...props}
  />
);

const ui = (Icon: LucideIcon, strokeWidth = 2) =>
  function UiIcon(props: LucideProps) {
    return <Icon aria-hidden focusable={false} strokeWidth={strokeWidth} {...props} />;
  };

export const MenuIcon = ui(Menu, 1.75);
export const CloseIcon = ui(X, 1.75);
export const ArrowIcon = ui(ArrowRight);
export const CheckIcon = ui(Check, 2.25);

const serviceIcons: Record<string, LucideIcon> = {
  "web-development": Globe,
  "custom-software": CodeXml,
  "business-systems": LayoutDashboard,
  "ui-ux-design": PenTool,
  "automation-integrations": Workflow,
  "digital-transformation": TrendingUp,
};

/** Icon for each service, keyed by the service slug. */
export function ServiceIcon({ slug, ...props }: LucideProps & { slug: string }) {
  const Icon = serviceIcons[slug] ?? Globe;
  return <Icon aria-hidden focusable={false} strokeWidth={1.5} {...props} />;
}
