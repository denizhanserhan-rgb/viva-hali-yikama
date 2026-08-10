import Image from "next/image";
import type { Metadata } from "next";
import { Container } from "@/components/layout/Container";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { PageHero } from "@/components/ui/PageHero";
import { Stats } from "@/components/about/Stats";
import { Values } from "@/components/about/Values";
import { CTABanner } from "@/components/home/CTABanner";
import { Button } from "@/components/ui/Button";
import { aboutContent } from "@/content/about";
import { site } from "@/content/site";
import { buildTelHref } from "@/lib/whatsapp";

export const metadata: Metadata = {
  title: "Hakkımızda",
  description:
    "VİVA HALI YIKAMA: hijyen, zamanında teslimat ve doğa dostu ürünlerle premium temizlik.",
};

export default function AboutPage() {
  const a = aboutContent;

  return (
    <div className="bg-atmosphere">
      <PageHero
        eyebrow={a.eyebrow}
        title={a.title}
        description={a.lead}
        actions={
          <>
            <Button href={buildTelHref()} size="lg" variant="champagne">
              Hemen Ara
            </Button>
            <Button href="/iletisim" size="lg" variant="ghost">
              Randevu Al
            </Button>
          </>
        }
      />

      <section className="section-pad">
        <Container>
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
            <Reveal>
              <div className="relative aspect-[4/5] overflow-hidden rounded-3xl border border-slate-100 bg-navy shadow-[0_30px_60px_-36px_rgba(0,26,51,0.35)]">
                <Image
                  src="/logo/viva-logo.png"
                  alt="Viva Halı Yıkama tesis"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 560px"
                  priority
                />
              </div>
            </Reveal>
            <Reveal delay={0.08}>
              <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-champagne">
                Hikayemiz
              </p>
              <h2 className="mt-4 font-display text-3xl tracking-tight text-navy sm:text-4xl">
                Özenle yıkanır, özenle teslim edilir
              </h2>
              <div className="mt-6 space-y-4 text-base leading-relaxed text-muted">
                {a.paragraphs.map((p) => (
                  <p key={p.slice(0, 24)}>{p}</p>
                ))}
                <p className="font-display text-xl italic text-navy">
                  {site.slogan}
                </p>
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      <Stats />

      <section className="section-pad">
        <Container>
          <div className="grid gap-5 lg:grid-cols-2">
            <Reveal>
              <div className="h-full rounded-3xl border border-slate-100 bg-white p-8 sm:p-10">
                <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-champagne">
                  Misyon
                </p>
                <h2 className="mt-4 font-display text-2xl text-navy sm:text-3xl">
                  {a.mission.title}
                </h2>
                <p className="mt-4 text-muted leading-relaxed">{a.mission.text}</p>
              </div>
            </Reveal>
            <Reveal delay={0.06}>
              <div className="h-full rounded-3xl bg-navy p-8 text-white sm:p-10">
                <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-champagne">
                  Vizyon
                </p>
                <h2 className="mt-4 font-display text-2xl sm:text-3xl">
                  {a.vision.title}
                </h2>
                <p className="mt-4 text-white/65 leading-relaxed">{a.vision.text}</p>
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      <section className="section-pad relative overflow-hidden bg-platinum">
        <Container className="relative">
          <Reveal>
            <SectionHeading
              eyebrow="Yolculuğumuz"
              eyebrowPill
              title="Güveni adım adım inşa ediyoruz"
              description="Operasyonumuzun her aşaması aynı kalite disipliniyle yönetilir."
            />
          </Reveal>
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {a.milestones.map((item, index) => (
              <Reveal key={item.title} delay={index * 0.05}>
                <div className="relative h-full rounded-3xl border border-slate-100 bg-white p-7">
                  <p className="font-display text-4xl text-champagne/40">
                    {item.year}
                  </p>
                  <h3 className="mt-4 font-display text-xl text-navy">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted">
                    {item.text}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <section className="section-pad">
        <Container>
          <Reveal>
            <SectionHeading
              eyebrow="Tesis yaklaşımımız"
              title="Profesyonel altyapı, özenli sonuç"
              description="Makine parkumuz ve kontrol süreçlerimiz premium sonucu mümkün kılar."
            />
          </Reveal>
          <div className="mt-14 grid gap-5 sm:grid-cols-2">
            {a.facility.map((item, index) => (
              <Reveal key={item.title} delay={index * 0.05}>
                <div className="rounded-3xl border border-slate-100 bg-white p-8">
                  <h3 className="font-display text-xl text-navy">{item.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted">
                    {item.text}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <Values />
      <CTABanner />
    </div>
  );
}
