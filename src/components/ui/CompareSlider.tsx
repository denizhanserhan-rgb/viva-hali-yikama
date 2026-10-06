"use client";

import { useCallback, useRef, useState } from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";

type CompareSliderProps = {
  before: string;
  after: string;
  beforeAlt: string;
  afterAlt: string;
  sizes: string;
  priority?: boolean;
  className?: string;
};

export function CompareSlider({
  before,
  after,
  beforeAlt,
  afterAlt,
  sizes,
  priority,
  className,
}: CompareSliderProps) {
  const [position, setPosition] = useState(55);
  const dragging = useRef(false);
  const frameRef = useRef<HTMLDivElement>(null);

  const updateFromClientX = useCallback((clientX: number) => {
    const el = frameRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const next = ((clientX - rect.left) / rect.width) * 100;
    setPosition(Math.min(98, Math.max(2, next)));
  }, []);

  return (
    <div
      ref={frameRef}
      className={cn(
        "relative w-full cursor-ew-resize touch-none select-none overflow-hidden rounded-[1.25rem] border border-champagne/25 bg-navy-deep outline-none focus-visible:ring-2 focus-visible:ring-champagne/60",
        className,
      )}
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
        if (e.key === "ArrowLeft") setPosition((p) => Math.max(2, p - 3));
        if (e.key === "ArrowRight") setPosition((p) => Math.min(98, p + 3));
      }}
    >
      <Image
        src={after}
        alt={afterAlt}
        fill
        draggable={false}
        className="pointer-events-none object-cover"
        sizes={sizes}
        priority={priority}
      />

      <div
        className="pointer-events-none absolute inset-0 overflow-hidden"
        style={{ clipPath: `inset(0 ${100 - position}% 0 0)` }}
      >
        <Image
          src={before}
          alt={beforeAlt}
          fill
          draggable={false}
          className="object-cover"
          sizes={sizes}
        />
      </div>

      <div
        className="pointer-events-none absolute inset-y-0 z-10 w-px bg-champagne shadow-[0_0_18px_rgba(196,165,116,0.7)]"
        style={{ left: `${position}%` }}
      >
        <div className="absolute left-1/2 top-1/2 flex h-12 w-12 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-champagne/55 bg-navy-deep/95 text-champagne shadow-[0_10px_28px_rgba(0,0,0,0.5)] backdrop-blur-sm">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <path
              d="M8 12H4m0 0l3-3m-3 3l3 3M16 12h4m0 0l-3-3m3 3l-3 3"
              stroke="currentColor"
              strokeWidth="1.6"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </div>

      <span className="pointer-events-none absolute left-4 top-4 z-10 rounded-full border border-white/15 bg-navy-deep/80 px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.18em] text-white/90 backdrop-blur-sm">
        Önce
      </span>
      <span className="pointer-events-none absolute right-4 top-4 z-10 rounded-full border border-champagne/40 bg-navy-deep/80 px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.18em] text-champagne backdrop-blur-sm">
        Sonra
      </span>
    </div>
  );
}
