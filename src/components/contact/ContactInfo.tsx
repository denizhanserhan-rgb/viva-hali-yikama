import { ArrowUpRight } from "lucide-react";
import { site } from "@/content/site";
import { buildTelHref } from "@/lib/whatsapp";

export function ContactInfo() {
  return (
    <div className="relative flex h-full flex-col justify-between gap-12 overflow-hidden rounded-[1.75rem] border border-white/10 bg-navy-deep p-7 text-white shadow-[0_30px_80px_-48px_rgba(0,0,0,0.55)] sm:p-9 lg:p-10">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-20 top-0 h-56 w-56 rounded-full bg-champagne/12 blur-3xl" />
        <div className="absolute -right-16 bottom-10 h-48 w-48 rounded-full bg-royal/25 blur-3xl" />
        <div className="absolute inset-0 bg-[radial-gradient(rgba(255,255,255,0.04)_1px,transparent_1px)] [background-size:22px_22px] opacity-40" />
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-champagne/35 to-transparent" />
      </div>

      <div className="relative">
        <p className="text-[11px] font-medium uppercase tracking-[0.28em] text-champagne-soft">
          İletişim
        </p>
        <div className="mt-2 h-px w-10 bg-gradient-to-r from-champagne/80 to-transparent" />
        <h2
          className="mt-5 font-display text-3xl tracking-tight text-white sm:text-4xl"
          style={{
            textShadow:
              "0 2px 0 rgba(0,0,0,0.25), 0 12px 36px rgba(0,0,0,0.4)",
          }}
        >
          Bize ulaşın
        </h2>
        <p className="mt-4 max-w-md text-[15px] leading-relaxed text-white/55">
          Ücretsiz keşif ve randevu için bizi arayın veya formu doldurun.
          Aynı gün dönüş hedefliyoruz.
        </p>

        <dl className="mt-12 space-y-8">
          <div>
            <dt className="text-[11px] font-medium uppercase tracking-[0.24em] text-white/35">
              Telefon
            </dt>
            <dd className="mt-2">
              <a
                href={buildTelHref()}
                className="font-display text-xl tracking-tight text-champagne-soft transition hover:text-white sm:text-2xl"
                style={{ textShadow: "0 8px 28px rgba(0,0,0,0.45)" }}
              >
                {site.phoneDisplay}
              </a>
            </dd>
          </div>

          <div>
            <dt className="text-[11px] font-medium uppercase tracking-[0.24em] text-white/35">
              E-posta
            </dt>
            <dd className="mt-2">
              <a
                href={`mailto:${site.email}`}
                className="text-lg font-medium text-champagne-soft transition hover:text-white"
              >
                {site.email}
              </a>
            </dd>
          </div>

          <div>
            <dt className="text-[11px] font-medium uppercase tracking-[0.24em] text-white/35">
              Instagram
            </dt>
            <dd className="mt-2">
              <a
                href={site.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="text-lg font-medium text-champagne-soft transition hover:text-white"
              >
                @viva_hali_yikama
              </a>
            </dd>
          </div>

          <div>
            <dt className="text-[11px] font-medium uppercase tracking-[0.24em] text-white/35">
              Adres
            </dt>
            <dd className="mt-2 max-w-sm">
              <p className="text-[15px] font-medium leading-relaxed text-white/90">
                {site.address.line1}
              </p>
              <p className="mt-1 text-[15px] leading-relaxed text-white/50">
                {site.address.line2}
              </p>
              <a
                href={site.google.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-3 inline-flex items-center gap-1.5 text-sm font-medium text-white/80 transition hover:text-champagne-soft"
              >
                Haritada aç
                <ArrowUpRight className="h-3.5 w-3.5" strokeWidth={1.5} />
              </a>
            </dd>
          </div>

          <div>
            <dt className="text-[11px] font-medium uppercase tracking-[0.24em] text-white/35">
              Çalışma saatleri
            </dt>
            <dd className="mt-2 text-[15px] leading-relaxed text-white/85">
              <p>{site.hours.weekdays}</p>
              <p className="text-white/45">{site.hours.sunday}</p>
            </dd>
          </div>
        </dl>
      </div>

      <p className="relative border-t border-white/10 pt-6 text-sm text-white/40">
        Yanıt süresi: genellikle aynı gün
      </p>
    </div>
  );
}
