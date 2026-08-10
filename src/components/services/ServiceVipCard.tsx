import Link from "next/link";
import { ArrowUpRight, Building2, Check } from "lucide-react";
import { cn } from "@/lib/utils";

type ServiceVipCardProps = {
  className?: string;
};

export function ServiceVipCard({ className }: ServiceVipCardProps) {
  return (
    <Link
      href="/iletisim"
      className={cn(
        "group relative flex h-full flex-col overflow-hidden rounded-3xl bg-slate-900 p-7 text-white shadow-[0_10px_30px_rgba(0,0,0,0.12)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_40px_rgba(0,0,0,0.2)] sm:p-8",
        className,
      )}
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(500px_240px_at_100%_0%,rgba(196,165,116,0.22),transparent_55%)]" />

      <div className="relative inline-flex w-fit rounded-2xl bg-white/10 p-3 text-champagne">
        <Building2 className="h-5 w-5" strokeWidth={1.5} />
      </div>

      <h3 className="relative mt-5 font-display text-xl tracking-tight">
        Özel VIP & Kurumsal Hizmetler
      </h3>
      <p className="relative mt-2 text-sm leading-relaxed text-white/65">
        Ofis, otel, site yönetimi ve kurumlar için planlı alım–teslim takvimi,
        öncelikli randevu ve toplu tekstil çözümleri. Operasyonunuzu aksatmadan,
        tek muhatapla yönetilen profesyonel temizlik süreci.
      </p>

      <ul className="relative mt-5 space-y-2.5">
        {[
          "Öncelikli randevu ve esnek planlama",
          "Kurumsal faturalama ve süreç takibi",
          "Toplu halı / perde / oturma grubu çözümleri",
        ].map((item) => (
          <li
            key={item}
            className="flex items-start gap-2.5 text-sm text-white/75"
          >
            <Check
              className="mt-0.5 h-3.5 w-3.5 shrink-0 text-champagne"
              strokeWidth={1.75}
            />
            <span>{item}</span>
          </li>
        ))}
      </ul>

      <div className="relative mt-auto flex items-center justify-between gap-3 pt-7">
        <span className="text-xs font-medium tracking-wide text-champagne/80">
          Özel görüşme
        </span>
        <span className="inline-flex items-center gap-1.5 rounded-full bg-champagne px-4 py-2 text-sm font-medium text-navy transition duration-300 group-hover:brightness-110">
          Özel teklif alın
          <ArrowUpRight
            className="h-3.5 w-3.5 transition duration-300 group-hover:translate-x-1"
            strokeWidth={1.5}
          />
        </span>
      </div>
    </Link>
  );
}
