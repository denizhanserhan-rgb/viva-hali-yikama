import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, MapPin } from "lucide-react";
import { Container } from "@/components/layout/Container";
import { CTABanner } from "@/components/home/CTABanner";
import { PageHero } from "@/components/ui/PageHero";
import { Reveal } from "@/components/ui/Reveal";
import {
  StructuredData,
  breadcrumbSchema,
} from "@/components/seo/StructuredData";
import { regions } from "@/content/regions";

export const metadata: Metadata = {
  title: "Hizmet Bölgeleri | Çorlu, Ergene, Çerkezköy, Kapaklı",
  description:
    "VİVA HALI YIKAMA hizmet bölgeleri: Çorlu, Ergene, Çerkezköy ve Kapaklı. Tüm mahallelere ücretsiz halı yıkama servisi.",
  alternates: { canonical: "/bolgeler" },
};

export default function RegionsPage() {
  return (
    <div className="bg-atmosphere">
      <StructuredData
        data={breadcrumbSchema([
          { name: "Ana Sayfa", path: "/" },
          { name: "Bölgeler", path: "/bolgeler" },
        ])}
      />
      <PageHero
        eyebrow="Hizmet bölgeleri"
        title="Çorlu ve çevresinde ücretsiz servis"
        description="Ergene’deki tesisimizden Çorlu, Çerkezköy ve Kapaklı’ya kapıdan alım ve kapıya teslim. Bölgenizi seçin, mahalle detaylarını görün."
      />

      <section className="section-pad">
        <Container>
          <div className="grid gap-6 sm:grid-cols-2">
            {regions.map((region, index) => (
              <Reveal key={region.slug} delay={index * 0.05}>
                <Link
                  href={`/bolgeler/${region.slug}`}
                  className="group flex h-full flex-col rounded-[1.5rem] border border-slate-200/70 bg-white p-7 shadow-[0_24px_60px_-44px_rgba(0,26,51,0.3)] transition hover:-translate-y-0.5 hover:border-champagne/40 sm:p-8"
                >
                  <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-navy text-champagne">
                    <MapPin className="h-5 w-5" strokeWidth={1.5} />
                  </span>
                  <h2 className="mt-6 font-display text-2xl tracking-tight text-navy sm:text-3xl">
                    {region.name} Halı Yıkama
                  </h2>
                  <p className="mt-3 text-sm leading-relaxed text-muted">
                    {region.intro}
                  </p>
                  <p className="mt-5 text-xs leading-relaxed text-slate-500">
                    {region.neighborhoods.slice(0, 6).join(" · ")}
                    {region.neighborhoods.length > 6 ? " ve diğerleri" : ""}
                  </p>
                  <span className="mt-auto inline-flex items-center gap-2 pt-6 text-sm font-semibold text-navy transition group-hover:text-champagne">
                    Bölge detayı
                    <ArrowRight className="h-4 w-4" strokeWidth={1.5} />
                  </span>
                </Link>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <CTABanner />
    </div>
  );
}
