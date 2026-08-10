import type { ReactNode } from "react";
import Image from "next/image";
import { Container } from "@/components/layout/Container";
import { Reveal } from "@/components/ui/Reveal";
import { cn } from "@/lib/utils";

type PageHeroProps = {
  eyebrow: string;
  title: string;
  description?: string;
  actions?: ReactNode;
  align?: "left" | "center";
  className?: string;
};

export function PageHero({
  eyebrow,
  title,
  description,
  actions,
  align = "left",
  className,
}: PageHeroProps) {
  return (
    <section
      className={cn(
        "relative isolate overflow-hidden bg-navy-deep text-white",
        className,
      )}
    >
      {/* Facility atmosphere — like a branded title banner */}
      <div className="absolute inset-0">
        <Image
          src="/videos/hero-poster.jpg"
          alt=""
          fill
          priority
          className="scale-105 object-cover object-center opacity-45 blur-[2px]"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-navy-deep/55" />
        <div className="absolute inset-0 bg-gradient-to-r from-navy-deep via-navy-deep/88 to-navy/55" />
        <div className="absolute inset-0 bg-gradient-to-t from-navy-deep via-transparent to-navy-deep/50" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_55%_at_20%_30%,rgba(196,165,116,0.16),transparent_60%)]" />
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-champagne/45 to-transparent" />
        <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      </div>

      <Container
        className={cn(
          "relative pb-24 pt-32 sm:pb-32 sm:pt-40",
          align === "center" && "text-center",
        )}
      >
        <Reveal>
          <p
            className={cn(
              "text-[11px] font-medium uppercase tracking-[0.3em] text-champagne-soft",
              align === "center" && "mx-auto",
            )}
            style={{
              textShadow:
                "0 2px 12px rgba(196,165,116,0.4), 0 4px 20px rgba(0,0,0,0.45)",
            }}
          >
            {eyebrow}
          </p>
          <div
            className={cn(
              "mt-3 h-px w-12 bg-gradient-to-r from-champagne/80 to-transparent shadow-[0_0_14px_rgba(196,165,116,0.5)]",
              align === "center" && "mx-auto",
            )}
          />

          <h1
            className={cn(
              "mt-6 max-w-3xl font-display text-4xl leading-[1.05] tracking-tight sm:text-5xl md:text-6xl",
              align === "center" && "mx-auto",
            )}
            style={{
              textShadow:
                "0 2px 0 rgba(0,0,0,0.3), 0 14px 44px rgba(0,0,0,0.55), 0 0 56px rgba(196,165,116,0.14)",
            }}
          >
            {title}
          </h1>

          {description ? (
            <p
              className={cn(
                "mt-6 max-w-2xl text-base leading-relaxed text-white/70 sm:text-lg",
                align === "center" && "mx-auto",
              )}
              style={{ textShadow: "0 8px 28px rgba(0,0,0,0.45)" }}
            >
              {description}
            </p>
          ) : null}

          {actions ? (
            <div
              className={cn(
                "mt-10 flex flex-wrap gap-3",
                align === "center" && "justify-center",
              )}
            >
              {actions}
            </div>
          ) : null}
        </Reveal>
      </Container>
    </section>
  );
}
