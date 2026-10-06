import type { Metadata } from "next";
import { Container } from "@/components/layout/Container";
import { CTABanner } from "@/components/home/CTABanner";
import { GalleryGrid } from "@/components/gallery/GalleryGrid";
import { PageHero } from "@/components/ui/PageHero";
import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";
import {
  StructuredData,
  breadcrumbSchema,
} from "@/components/seo/StructuredData";
import { galleryItemCover, galleryItems } from "@/content/gallery";
import { site } from "@/content/site";
import { SITE_URL } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Galeri | Çorlu Halı Yıkama Çalışmalarımız",
  description:
    "VİVA HALI YIKAMA galeri: Çorlu ve Ergene’de halı yıkama işlerimiz, servis araçlarımız ve ekibimizden gerçek fotoğraflar.",
  alternates: { canonical: "/galeri" },
};

export default function GalleryPage() {
  const gallerySchema = {
    "@context": "https://schema.org",
    "@type": "ImageGallery",
    name: `${site.name} galeri`,
    url: `${SITE_URL}/galeri`,
    image: galleryItems.map((item) => {
      const cover = galleryItemCover(item);
      return {
        "@type": "ImageObject",
        contentUrl: `${SITE_URL}${cover.src}`,
        name: item.title,
        description: cover.alt,
      };
    }),
  };

  return (
    <div className="bg-atmosphere">
      <StructuredData data={gallerySchema} />
      <StructuredData
        data={breadcrumbSchema([
          { name: "Ana Sayfa", path: "/" },
          { name: "Galeri", path: "/galeri" },
        ])}
      />

      <PageHero
        eyebrow="Galeri"
        title="Gerçek işler, gerçek fotoğraflar"
        description="Bu sayfadaki her fotoğraf kendi ekibimiz, araçlarımız ve müşterilerimizin halılarından. Stok görsel yok."
      />

      <section className="section-pad">
        <Container>
          <Reveal>
            <GalleryGrid items={galleryItems} />
          </Reveal>

          <Reveal className="mt-14">
            <div className="flex flex-col items-center gap-4 rounded-[1.5rem] border border-slate-200/70 bg-white px-6 py-8 text-center sm:px-10">
              <p className="font-display text-2xl tracking-tight text-navy">
                Sizin halınız da böyle tertemiz dönsün
              </p>
              <p className="max-w-md text-sm text-muted">
                Ücretsiz servisle kapınızdan alalım, tesisimizde yıkayıp paketli teslim edelim.
              </p>
              <Button href="/servis-cagir" variant="champagne">
                Servis Çağır
              </Button>
            </div>
          </Reveal>
        </Container>
      </section>

      <CTABanner />
    </div>
  );
}
