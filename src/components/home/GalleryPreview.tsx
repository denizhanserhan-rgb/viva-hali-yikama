import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Container } from "@/components/layout/Container";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { galleryItemCover, getFeaturedGalleryItems } from "@/content/gallery";

export function GalleryPreview() {
  const items = getFeaturedGalleryItems(6);
  if (items.length === 0) return null;

  return (
    <section className="section-pad bg-platinum relative overflow-hidden">
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="Galeri"
            title="Sahadan gerçek kareler"
            description="Kapıdan alımdan paketli teslimata kadar ekibimiz ve araçlarımız iş başında."
          />
        </Reveal>

        <div className="mt-14 grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-3">
          {items.map((item, index) => {
            const cover = galleryItemCover(item);
            return (
              <Reveal key={item.id} delay={index * 0.04}>
                <Link
                  href="/galeri"
                  className="group relative block aspect-[4/5] overflow-hidden rounded-2xl bg-navy-deep sm:aspect-[4/3]"
                >
                  <Image
                    src={cover.src}
                    alt={cover.alt}
                    fill
                    sizes="(max-width: 1024px) 50vw, 400px"
                    className="object-cover transition duration-500 group-hover:scale-[1.04]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-deep/80 via-transparent to-transparent opacity-90" />
                  <p className="absolute inset-x-0 bottom-0 p-4 text-sm font-medium text-white">
                    {item.title}
                  </p>
                </Link>
              </Reveal>
            );
          })}
        </div>

        <Reveal className="mt-10 flex justify-center">
          <Button href="/galeri" variant="primary">
            Tüm galeriyi görün
            <ArrowRight className="h-4 w-4" strokeWidth={1.5} />
          </Button>
        </Reveal>
      </Container>
    </section>
  );
}
