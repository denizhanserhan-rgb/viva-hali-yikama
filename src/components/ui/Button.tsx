import Link from "next/link";
import { cn } from "@/lib/utils";

type ButtonVariant =
  | "primary"
  | "secondary"
  | "ghost"
  | "whatsapp"
  | "outline"
  | "soft"
  | "champagne";
type ButtonSize = "sm" | "md" | "lg";

const variants: Record<ButtonVariant, string> = {
  primary:
    "bg-navy text-white hover:bg-navy-deep shadow-[0_14px_32px_-16px_rgba(0,26,51,0.5)]",
  secondary:
    "bg-royal text-white hover:bg-royal-bright shadow-[0_12px_28px_-14px_rgba(28,74,122,0.45)]",
  champagne:
    "bg-champagne text-navy shadow-[0_14px_32px_-14px_rgba(0,26,51,0.35)] hover:brightness-110",
  ghost:
    "border border-white/25 bg-white/8 text-white backdrop-blur-md hover:bg-white/14 hover:border-white/40",
  soft:
    "border border-white/20 bg-white/10 text-white backdrop-blur-md hover:bg-white/16",
  whatsapp:
    "border border-line bg-surface text-navy hover:border-navy/20 hover:bg-mist/80",
  outline:
    "border border-line bg-surface text-navy hover:border-navy/20 hover:bg-mist/80",
};

const sizes: Record<ButtonSize, string> = {
  sm: "h-10 px-4 text-sm",
  md: "h-11 px-5 text-sm",
  lg: "h-12 px-7 text-[15px]",
};

type CommonProps = {
  variant?: ButtonVariant;
  size?: ButtonSize;
  className?: string;
  children: React.ReactNode;
};

type ButtonAsButton = CommonProps &
  React.ButtonHTMLAttributes<HTMLButtonElement> & { href?: undefined };

type ButtonAsLink = CommonProps & {
  href: string;
  target?: string;
  rel?: string;
  "aria-label"?: string;
};

export function Button({
  variant = "primary",
  size = "md",
  className,
  children,
  ...props
}: ButtonAsButton | ButtonAsLink) {
  const classes = cn(
    "inline-flex items-center justify-center gap-2 rounded-full font-medium tracking-tight transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-champagne/35 focus-visible:ring-offset-2 active:scale-[0.985]",
    variants[variant],
    sizes[size],
    className,
  );

  if ("href" in props && props.href) {
    const { href, target, rel, "aria-label": ariaLabel } = props;
    return (
      <Link
        href={href}
        target={target}
        rel={rel}
        aria-label={ariaLabel}
        className={classes}
      >
        {children}
      </Link>
    );
  }

  const buttonProps = props as ButtonAsButton;
  return (
    <button className={classes} {...buttonProps}>
      {children}
    </button>
  );
}
