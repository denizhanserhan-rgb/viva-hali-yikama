import { cn } from "@/lib/utils";

type InstagramIconProps = {
  className?: string;
  strokeWidth?: number;
};

/** Simple Instagram glyph (lucide dropped brand icons). */
export function InstagramIcon({ className, strokeWidth = 1.5 }: InstagramIconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={cn("h-4 w-4", className)}
      aria-hidden
    >
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="0.8" fill="currentColor" stroke="none" />
    </svg>
  );
}
