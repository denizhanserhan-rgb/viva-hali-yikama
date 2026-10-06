import Link from "next/link";
import { ArrowRight, MapPin } from "lucide-react";
import { Container } from "@/components/layout/Container";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { regions } from "@/content/regions";

export function ServiceAreas() {
  return (
    <section className="section-pad">
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="Hizmet bölgeleri"
            title="Çorlu ve çevresinde ücretsiz servis"
            description="Ergene’deki tesisimizden Çorlu, Çerkezköy ve Kapaklı’ya kapıdan alım ve kapıya teslim. Bölge sayfasından mahalle detayına inebilirsiniz."
          />
        </Reveal>
        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {regions.map((region, index) => (
            <Reveal key={region.slug} delay={index * 0.05}>
              <Link
                href={`/bolgeler/${region.slug}`}
                className="group flex h-full flex-col rounded-2xl border border-slate-200/70 bg-white p-6 shadow-[0_18px_44px_-36px_rgba(0,26,51,0.35)] transition hover:-translate-y-0.5 hover:border-champagne/40"
              >
                <MapPin className="h-5 w-5 text-champagne" strokeWidth={1.5} />
                <h3 className="mt-4 font-display text-xl tracking-tight text-navy">
                  {region.name} Halı Yıkama
                </h3>
                <p className="mt-2 text-xs leading-relaxed text-muted">
                  {region.neighborhoods.slice(0, 4).join(" · ")}
                </p>
                <span className="mt-auto inline-flex items-center gap-1.5 pt-5 text-sm font-semibold text-navy transition group-hover:text-champagne">
                  Detay
                  <ArrowRight className="h-4 w-4" strokeWidth={1.5} />
                </span>
              </Link>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
