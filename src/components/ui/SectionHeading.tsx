import { cn } from "@/lib/utils";

type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  light?: boolean;
  /** Soft blue oval pill behind eyebrow (Platin Lüks) */
  eyebrowPill?: boolean;
  className?: string;
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
  light = false,
  eyebrowPill = false,
  className,
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "max-w-2xl",
        align === "center" ? "mx-auto text-center" : "text-left",
        className,
      )}
    >
      {eyebrow ? (
        eyebrowPill && !light ? (
          <p className="mb-5">
            <span className="inline-flex items-center rounded-full bg-sky-100/70 px-3.5 py-1.5 text-[11px] font-semibold uppercase tracking-[0.22em] text-sky-800/80 ring-1 ring-sky-200/60">
              {eyebrow}
            </span>
          </p>
        ) : (
          <p
            className={cn(
              "mb-5 text-[11px] font-semibold uppercase tracking-[0.24em]",
              light ? "text-champagne-soft" : "text-champagne",
            )}
          >
            {eyebrow}
          </p>
        )
      ) : null}
      <h2
        className={cn(
          "font-display text-[2.15rem] leading-[1.12] tracking-tight sm:text-[2.75rem]",
          light ? "text-white" : "text-navy",
        )}
      >
        {title}
      </h2>
      {description ? (
        <p
          className={cn(
            "mt-5 text-[15px] leading-relaxed sm:text-base",
            light ? "text-white/60" : "text-muted",
          )}
        >
          {description}
        </p>
      ) : null}
    </div>
  );
}
