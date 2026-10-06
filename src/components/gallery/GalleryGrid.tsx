"use client";

import { useCallback, useEffect, useMemo, useState } from "react";
import { createPortal } from "react-dom";
import Image from "next/image";
import { ChevronLeft, ChevronRight, Expand, MapPin, X } from "lucide-react";
import { CompareSlider } from "@/components/ui/CompareSlider";
import {
  type GalleryCategory,
  type GalleryItem,
  type GalleryPhoto,
  galleryCategories,
} from "@/content/gallery";
import { regions } from "@/content/regions";
import { cn } from "@/lib/utils";

type GalleryGridProps = {
  items: GalleryItem[];
  showFilters?: boolean;
};

type Filter = "all" | GalleryCategory;

function regionName(slug?: string) {
  return slug ? regions.find((r) => r.slug === slug)?.name : undefined;
}

export function GalleryGrid({ items, showFilters = true }: GalleryGridProps) {
  const [filter, setFilter] = useState<Filter>("all");
  const [openId, setOpenId] = useState<string | null>(null);

  const categories = useMemo(() => {
    const used = new Set(items.map((i) => i.category));
    return galleryCategories.filter((c) => used.has(c.id));
  }, [items]);

  const visible = useMemo(
    () => (filter === "all" ? items : items.filter((i) => i.category === filter)),
    [items, filter],
  );

  const photos = useMemo(
    () => visible.filter((i): i is GalleryPhoto => i.kind === "photo"),
    [visible],
  );

  const openIndex = openId ? photos.findIndex((p) => p.id === openId) : -1;
  const openPhoto = openIndex >= 0 ? photos[openIndex] : null;

  const step = useCallback(
    (delta: number) => {
      if (openIndex < 0 || photos.length === 0) return;
      const next = (openIndex + delta + photos.length) % photos.length;
      setOpenId(photos[next].id);
    },
    [openIndex, photos],
  );

  useEffect(() => {
    if (!openPhoto) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpenId(null);
      if (e.key === "ArrowRight") step(1);
      if (e.key === "ArrowLeft") step(-1);
    };
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prevOverflow;
      window.removeEventListener("keydown", onKey);
    };
  }, [openPhoto, step]);

  return (
    <div>
      {showFilters && categories.length > 1 ? (
        <div className="mb-10 flex flex-wrap justify-center gap-2" role="tablist">
          {[{ id: "all" as const, label: "Tümü" }, ...categories].map((c) => (
            <button
              key={c.id}
              type="button"
              role="tab"
              aria-selected={filter === c.id}
              onClick={() => setFilter(c.id)}
              className={cn(
                "rounded-full border px-4 py-2 text-sm font-medium transition",
                filter === c.id
                  ? "border-navy bg-navy text-champagne-soft"
                  : "border-slate-200 bg-white text-navy hover:border-champagne/50",
              )}
            >
              {c.label}
            </button>
          ))}
        </div>
      ) : null}

      <div className="columns-1 gap-5 sm:columns-2 lg:columns-3">
        {visible.map((item) => {
          const place = regionName(item.region);
          return (
            <figure
              key={item.id}
              className="mb-5 break-inside-avoid overflow-hidden rounded-[1.25rem] border border-slate-200/70 bg-white shadow-[0_18px_44px_-36px_rgba(0,26,51,0.35)]"
            >
              {item.kind === "beforeAfter" ? (
                <CompareSlider
                  before={item.before}
                  after={item.after}
                  beforeAlt={item.beforeAlt}
                  afterAlt={item.afterAlt}
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 400px"
                  className="aspect-[4/3] rounded-none border-0"
                />
              ) : (
                <button
                  type="button"
                  onClick={() => setOpenId(item.id)}
                  className="group relative block w-full overflow-hidden"
                  aria-label={`${item.title} — büyüt`}
                >
                  <Image
                    src={item.src}
                    alt={item.alt}
                    width={item.width}
                    height={item.height}
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 400px"
                    className="h-auto w-full transition duration-500 group-hover:scale-[1.03]"
                  />
                  <span className="absolute right-3 top-3 flex h-9 w-9 items-center justify-center rounded-full bg-navy-deep/70 text-white opacity-0 backdrop-blur-sm transition group-hover:opacity-100">
                    <Expand className="h-4 w-4" strokeWidth={1.5} />
                  </span>
                </button>
              )}
              <figcaption className="px-5 py-4">
                <p className="font-display text-lg tracking-tight text-navy">{item.title}</p>
                <p className="mt-1 text-sm leading-relaxed text-muted">{item.caption}</p>
                {place ? (
                  <p className="mt-2 inline-flex items-center gap-1 text-xs font-medium text-champagne">
                    <MapPin className="h-3.5 w-3.5" strokeWidth={1.5} />
                    {place}
                  </p>
                ) : null}
              </figcaption>
            </figure>
          );
        })}
      </div>

      {openPhoto
        ? createPortal(
        <div
          className="fixed inset-0 z-[60] flex items-center justify-center bg-navy-deep/95 p-4 backdrop-blur-sm"
          role="dialog"
          aria-modal="true"
          aria-label={openPhoto.title}
          onClick={() => setOpenId(null)}
        >
          <button
            type="button"
            onClick={() => setOpenId(null)}
            className="absolute right-4 top-4 flex h-11 w-11 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white transition hover:bg-white/20"
            aria-label="Kapat"
          >
            <X className="h-5 w-5" />
          </button>

          {photos.length > 1 ? (
            <>
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  step(-1);
                }}
                className="absolute left-3 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white transition hover:bg-white/20 sm:left-6"
                aria-label="Önceki fotoğraf"
              >
                <ChevronLeft className="h-5 w-5" />
              </button>
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  step(1);
                }}
                className="absolute right-3 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white transition hover:bg-white/20 sm:right-6"
                aria-label="Sonraki fotoğraf"
              >
                <ChevronRight className="h-5 w-5" />
              </button>
            </>
          ) : null}

          <figure
            className="flex max-h-full max-w-5xl flex-col items-center"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={openPhoto.src}
              alt={openPhoto.alt}
              width={openPhoto.width}
              height={openPhoto.height}
              sizes="100vw"
              className="h-auto max-h-[78vh] w-auto rounded-xl object-contain"
              priority
            />
            <figcaption className="mt-4 max-w-xl text-center">
              <p className="font-display text-xl text-white">{openPhoto.title}</p>
              <p className="mt-1 text-sm text-white/60">{openPhoto.caption}</p>
              <p className="mt-2 text-xs text-white/35">
                {openIndex + 1} / {photos.length}
              </p>
            </figcaption>
          </figure>
        </div>,
            document.body,
          )
        : null}
    </div>
  );
}
