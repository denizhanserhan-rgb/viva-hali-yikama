import Link from "next/link";
import {
  Armchair,
  BedDouble,
  Layers,
  ScrollText,
  Sparkles,
  ArrowUpRight,
  Check,
} from "lucide-react";
import type { Service } from "@/types/service";
import { cn } from "@/lib/utils";

const iconMap = {
  carpet: Layers,
  sofa: Armchair,
  curtain: ScrollText,
  antique: Sparkles,
  blanket: BedDouble,
} as const;

type ServiceCardProps = {
  service: Service;
  className?: string;
};

export function ServiceCard({ service, className }: ServiceCardProps) {
  const Icon = iconMap[service.icon];

  return (
    <Link
      href={`/hizmetler/${service.slug}`}
      className={cn(
        "group relative flex h-full flex-col rounded-3xl border border-slate-200/60 bg-white p-7 shadow-[0_10px_30px_rgba(0,0,0,0.04)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_40px_rgba(0,0,0,0.08)] sm:p-8",
        className,
      )}
    >
      {service.badge ? (
        <span className="absolute right-4 top-4 rounded-full bg-navy px-2.5 py-1 text-[10px] font-semibold tracking-wide text-champagne">
          {service.badge}
        </span>
      ) : null}

      <div className="inline-flex w-fit rounded-2xl bg-slate-100 p-3 text-navy transition-colors duration-300 group-hover:bg-mist group-hover:text-champagne">
        <Icon className="h-5 w-5" strokeWidth={1.5} />
      </div>

      <h3
        className={cn(
          "mt-5 font-display text-xl tracking-tight text-navy",
          service.badge && "pr-16",
        )}
      >
        {service.title}
      </h3>
      <p className="mt-2 text-sm leading-relaxed text-muted">{service.summary}</p>

      <ul className="mt-5 space-y-2.5">
        {service.highlights.map((item) => (
          <li key={item} className="flex items-start gap-2.5 text-sm text-navy/80">
            <Check
              className="mt-0.5 h-3.5 w-3.5 shrink-0 text-champagne"
              strokeWidth={1.75}
            />
            <span>{item}</span>
          </li>
        ))}
      </ul>

      <div className="mt-auto flex items-end justify-between gap-3 pt-7">
        <span className="text-xs font-medium tracking-wide text-slate-400">
          {service.hint}
        </span>
        <span className="inline-flex items-center gap-1.5 text-sm font-medium text-navy">
          Detaylı Bilgi
          <ArrowUpRight
            className="h-3.5 w-3.5 transition duration-300 group-hover:translate-x-1"
            strokeWidth={1.5}
          />
        </span>
      </div>
    </Link>
  );
}
