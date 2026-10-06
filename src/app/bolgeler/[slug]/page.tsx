import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight, Check, MapPin } from "lucide-react";
import { Container } from "@/components/layout/Container";
import { ServiceRequestForm } from "@/components/forms/ServiceRequestForm";
import { PageHero } from "@/components/ui/PageHero";
import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";
import {
  StructuredData,
  breadcrumbSchema,
  faqSchema,
} from "@/components/seo/StructuredData";
import { GalleryGrid } from "@/components/gallery/GalleryGrid";
import { getGalleryItemsByRegion } from "@/content/gallery";
import { getAllRegionSlugs, getRegionBySlug, regions } from "@/content/regions";
import { services } from "@/content/services";
import { site } from "@/content/site";
import { DEFAULT_OG_IMAGE, SITE_URL } from "@/lib/constants";
import { buildTelHref } from "@/lib/whatsapp";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return getAllRegionSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const region = getRegionBySlug(slug);
  if (!region) return {};
  return {
    title: { absolute: region.seoTitle },
    description: region.seoDescription,
    alternates: { canonical: `/bolgeler/${region.slug}` },
    openGraph: {
      title: region.seoTitle,
      description: region.seoDescription,
      url: `/bolgeler/${region.slug}`,
      images: [DEFAULT_OG_IMAGE],
    },
  };
}

export default async function RegionPage({ params }: Props) {
  const { slug } = await params;
  const region = getRegionBySlug(slug);
  if (!region) notFound();

  const otherRegions = regions.filter((r) => r.slug !== region.slug);
  const regionGallery = getGalleryItemsByRegion(region.slug);

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: "Halı Yıkama",
    name: `${region.name} Halı Yıkama`,
    description: region.seoDescription,
    url: `${SITE_URL}/bolgeler/${region.slug}`,
    areaServed: {
      "@type": "City",
      name: region.name,
      containedInPlace: { "@type": "AdministrativeArea", name: "Tekirdağ" },
    },
    provider: {
      "@type": "DryCleaningOrLaundry",
      "@id": `${SITE_URL}/#business`,
      name: site.name,
      telephone: site.phone,
    },
  };

  return (
    <div className="bg-atmosphere">
      <StructuredData data={serviceSchema} />
      <StructuredData data={faqSchema(region.faqs)} />
      <StructuredData
        data={breadcrumbSchema([
          { name: "Ana Sayfa", path: "/" },
          { name: "Bölgeler", path: "/bolgeler" },
          { name: `${region.name} Halı Yıkama`, path: `/bolgeler/${region.slug}` },
        ])}
      />

      <PageHero
        eyebrow={`${region.name} · Tekirdağ`}
        title={region.heading}
        description={region.intro}
        actions={
          <>
            <Button href="#servis-formu" size="lg" variant="champagne">
              Ücretsiz Servis Çağır
            </Button>
            <Button href={buildTelHref()} size="lg" variant="ghost">
              {site.phoneDisplay}
            </Button>
          </>
        }
      />

      <section className="section-pad">
        <Container>
          <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
            <Reveal className="lg:col-span-7">
              <p className="text-[11px] font-medium uppercase tracking-[0.26em] text-champagne">
                {region.name} hizmeti
              </p>
              <div className="mt-2 h-px w-10 bg-gradient-to-r from-champagne/70 to-transparent" />
              <h2 className="mt-5 font-display text-3xl tracking-tight text-navy sm:text-4xl">
                {region.locative} profesyonel halı yıkama
              </h2>
              <div className="mt-6 space-y-4">
                {region.paragraphs.map((p) => (
                  <p
                    key={p.slice(0, 40)}
                    className="text-[15px] leading-relaxed text-muted sm:text-base"
                  >
                    {p}
                  </p>
                ))}
              </div>
            </Reveal>

            <Reveal className="lg:col-span-5" delay={0.06}>
              <div className="rounded-[1.5rem] border border-slate-200/70 bg-white p-7 shadow-[0_24px_60px_-40px_rgba(0,26,51,0.25)] sm:p-8">
                <p className="text-[11px] font-medium uppercase tracking-[0.24em] text-slate-400">
                  Neden {region.locative} Viva?
                </p>
                <ul className="mt-5 space-y-3">
                  {region.highlights.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-2.5 text-sm leading-relaxed text-navy"
                    >
                      <Check
                        className="mt-0.5 h-4 w-4 shrink-0 text-champagne"
                        strokeWidth={1.75}
                      />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      <section className="section-pad relative overflow-hidden bg-navy-deep text-white">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_70%_55%_at_10%_0%,rgba(196,165,116,0.14),transparent_60%)]" />
        <Container className="relative">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
            <Reveal>
              <p className="text-[11px] font-medium uppercase tracking-[0.28em] text-champagne-soft">
                Mahalleler
              </p>
              <h2 className="mt-4 font-display text-3xl tracking-tight sm:text-4xl">
                {region.locative} hizmet verdiğimiz mahalleler
              </h2>
              <ul className="mt-8 flex flex-wrap gap-2.5">
                {region.neighborhoods.map((n) => (
                  <li
                    key={n}
                    className="inline-flex items-center gap-1.5 rounded-full border border-white/12 bg-white/[0.05] px-3.5 py-1.5 text-sm text-white/80"
                  >
                    <MapPin className="h-3.5 w-3.5 text-champagne" strokeWidth={1.5} />
                    {n}
                  </li>
                ))}
              </ul>
              <p className="mt-6 text-sm leading-relaxed text-white/50">
                Listede olmayan bir mahalle veya köydeyseniz bizi arayın; büyük
                ihtimalle rotamızdasınız.
              </p>
            </Reveal>

            <Reveal delay={0.06}>
              <p className="text-[11px] font-medium uppercase tracking-[0.28em] text-champagne-soft">
                Hizmetler
              </p>
              <h2 className="mt-4 font-display text-3xl tracking-tight sm:text-4xl">
                {region.locative} sunduğumuz hizmetler
              </h2>
              <ul className="mt-8 grid gap-3 sm:grid-cols-2">
                {services.map((s) => (
                  <li key={s.slug}>
                    <Link
                      href={`/hizmetler/${s.slug}`}
                      className="group flex items-center justify-between gap-3 rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-3.5 text-sm font-medium text-white/85 transition hover:border-champagne/40 hover:text-white"
                    >
                      {region.name} {s.title}
                      <ArrowRight
                        className="h-4 w-4 text-champagne transition group-hover:translate-x-0.5"
                        strokeWidth={1.5}
                      />
                    </Link>
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </Container>
      </section>

      <section id="servis-formu" className="section-pad scroll-mt-24">
        <Container>
          <div className="grid gap-10 lg:grid-cols-12 lg:gap-14">
            <Reveal className="lg:col-span-5">
              <p className="text-[11px] font-medium uppercase tracking-[0.26em] text-champagne">
                {region.name} servis
              </p>
              <h2 className="mt-4 font-display text-3xl tracking-tight text-navy sm:text-4xl">
                Ücretsiz kapıdan alım için yazın
              </h2>
              <p className="mt-4 text-[15px] leading-relaxed text-muted">
                Adresinizi ve halı bilgisini paylaşın; {region.name} rotamıza
                uygun günü birlikte netleştirelim.
              </p>

              <div className="mt-10 space-y-3">
                {region.faqs.map((item) => (
                  <details
                    key={item.question}
                    className="group rounded-2xl border border-slate-200/60 bg-white/90 px-5 py-4"
                  >
                    <summary className="cursor-pointer list-none text-sm font-semibold text-navy marker:content-none">
                      <span className="flex items-center justify-between gap-4">
                        {item.question}
                        <span className="text-champagne transition group-open:rotate-45">
                          +
                        </span>
                      </span>
                    </summary>
                    <p className="mt-3 text-sm leading-relaxed text-muted">
                      {item.answer}
                    </p>
                  </details>
                ))}
              </div>
            </Reveal>

            <Reveal className="lg:col-span-7" delay={0.06}>
              <ServiceRequestForm
                defaultRegion={region.slug}
                title={`${region.name} servis talebi`}
              />
            </Reveal>
          </div>
        </Container>
      </section>

      {regionGallery.length > 0 ? (
        <section className="section-pad bg-platinum">
          <Container>
            <Reveal>
              <p className="text-[11px] font-medium uppercase tracking-[0.26em] text-champagne">
                {region.name} galerisi
              </p>
              <h2 className="mt-4 font-display text-3xl tracking-tight text-navy sm:text-4xl">
                {region.locative} yaptığımız işler
              </h2>
            </Reveal>
            <div className="mt-10">
              <GalleryGrid items={regionGallery} showFilters={false} />
            </div>
          </Container>
        </section>
      ) : null}

      <section className={`pb-24 sm:pb-32 ${regionGallery.length > 0 ? "pt-16" : ""}`}>
        <Container>
          <Reveal>
            <p className="text-[11px] font-medium uppercase tracking-[0.26em] text-champagne">
              Diğer bölgeler
            </p>
            <div className="mt-5 flex flex-wrap gap-3">
              {otherRegions.map((r) => (
                <Link
                  key={r.slug}
                  href={`/bolgeler/${r.slug}`}
                  className="rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-navy transition hover:border-champagne/50 hover:text-champagne"
                >
                  {r.name} Halı Yıkama
                </Link>
              ))}
            </div>
          </Reveal>
        </Container>
      </section>
    </div>
  );
}
