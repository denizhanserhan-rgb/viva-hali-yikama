import { ArrowUpRight } from "lucide-react";
import { site } from "@/content/site";

export function MapEmbed() {
  const { lat, lng, mapsUrl } = site.google;
  const embedSrc = `https://www.google.com/maps?q=${lat},${lng}&z=15&hl=tr&output=embed`;

  return (
    <div className="overflow-hidden rounded-[1.75rem] border border-white/10 bg-navy-deep shadow-[0_40px_90px_-50px_rgba(0,0,0,0.55)]">
      <div className="relative">
        <iframe
          title="Viva Halı Yıkama konum"
          src={embedSrc}
          className="h-[24rem] w-full border-0 sm:h-[30rem]"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          allowFullScreen
        />
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-navy-deep via-navy-deep/70 to-transparent" />
      </div>

      <div className="relative flex flex-col gap-4 px-6 py-6 sm:flex-row sm:items-end sm:justify-between sm:px-8 sm:py-7">
        <div>
          <p className="text-[11px] font-medium uppercase tracking-[0.26em] text-champagne-soft">
            Adres
          </p>
          <p className="mt-2 max-w-xl font-display text-lg leading-snug tracking-tight text-white sm:text-xl">
            {site.address.line1}
          </p>
          <p className="mt-1 text-sm text-white/55">{site.address.line2}</p>
        </div>

        <a
          href={mapsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 self-start rounded-full bg-champagne px-5 py-2.5 text-sm font-semibold text-navy shadow-[0_14px_32px_-14px_rgba(196,165,116,0.7)] transition hover:brightness-110 sm:self-auto"
        >
          Haritada aç
          <ArrowUpRight className="h-4 w-4" strokeWidth={1.5} />
        </a>
      </div>
    </div>
  );
}
