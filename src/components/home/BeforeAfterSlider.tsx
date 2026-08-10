"use client";

import { useCallback, useRef, useState } from "react";
import Image from "next/image";
import { ArrowLeftRight } from "lucide-react";
import { Container } from "@/components/layout/Container";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function BeforeAfterSlider() {
  const [position, setPosition] = useState(52);
  const dragging = useRef(false);
  const frameRef = useRef<HTMLDivElement>(null);

  const updateFromClientX = useCallback((clientX: number) => {
    const el = frameRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const next = ((clientX - rect.left) / rect.width) * 100;
    setPosition(Math.min(96, Math.max(4, next)));
  }, []);

  return (
    <section className="section-pad relative overflow-hidden bg-section-soft">
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="Önce / Sonra"
            eyebrowPill
            title="Yıkama kalitesini kaydırarak görün"
            description="Kirli halıdan tertemiz sonuca giden farkı kaydırarak keşfedin."
          />
        </Reveal>

        <Reveal className="mt-14" delay={0.06}>
          <div
            ref={frameRef}
            className="relative mx-auto aspect-[4/5] max-w-2xl touch-none overflow-hidden rounded-3xl border border-slate-100 bg-navy shadow-[0_30px_60px_-36px_rgba(0,26,51,0.4)] select-none sm:aspect-[5/4] sm:max-w-4xl"
            onPointerDown={(e) => {
              dragging.current = true;
              e.currentTarget.setPointerCapture(e.pointerId);
              updateFromClientX(e.clientX);
            }}
            onPointerMove={(e) => {
              if (!dragging.current) return;
              updateFromClientX(e.clientX);
            }}
            onPointerUp={() => {
              dragging.current = false;
            }}
            onPointerCancel={() => {
              dragging.current = false;
            }}
            role="slider"
            aria-valuemin={0}
            aria-valuemax={100}
            aria-valuenow={Math.round(position)}
            aria-label="Önce ve sonra karşılaştırma kaydırıcısı"
            tabIndex={0}
            onKeyDown={(e) => {
              if (e.key === "ArrowLeft") setPosition((p) => Math.max(4, p - 3));
              if (e.key === "ArrowRight") setPosition((p) => Math.min(96, p + 3));
            }}
          >
            {/* After = clean carpet */}
            <Image
              src="/images/carpet-after.png"
              alt="Yıkama sonrası temiz halı"
              fill
              className="object-cover object-center"
              sizes="(max-width: 1024px) 100vw, 1100px"
              priority
            />
            <span className="absolute right-4 top-4 z-[5] rounded-full bg-black/55 px-3 py-1 text-xs font-medium tracking-wide text-white backdrop-blur-sm">
              Sonra
            </span>

            {/* Before = dirty carpet (clipped) */}
            <div
              className="absolute inset-0 overflow-hidden"
              style={{ clipPath: `inset(0 ${100 - position}% 0 0)` }}
            >
              <Image
                src="/images/carpet-before.png"
                alt="Yıkama öncesi kirli halı"
                fill
                className="object-cover object-center"
                sizes="(max-width: 1024px) 100vw, 1100px"
              />
              <span className="absolute left-4 top-4 rounded-full bg-black/55 px-3 py-1 text-xs font-medium tracking-wide text-white backdrop-blur-sm">
                Önce
              </span>
            </div>

            <div
              className="absolute inset-y-0 z-10 w-px -translate-x-1/2 bg-white"
              style={{ left: `${position}%` }}
            >
              <div className="absolute left-1/2 top-1/2 flex h-12 w-12 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-champagne text-navy shadow-lg">
                <ArrowLeftRight className="h-4 w-4" strokeWidth={1.5} />
              </div>
            </div>
          </div>
          <p className="mt-5 text-center text-sm text-muted">
            Kaydırıcıyı sürükleyerek kirli ve temiz halıyı karşılaştırın.
          </p>
        </Reveal>
      </Container>
    </section>
  );
}
