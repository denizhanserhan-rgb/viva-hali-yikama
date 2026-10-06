import { Container } from "@/components/layout/Container";
import { CompareSlider } from "@/components/ui/CompareSlider";
import { Reveal } from "@/components/ui/Reveal";

export function BeforeAfterSlider() {
  return (
    <section className="relative overflow-hidden bg-navy-deep py-16 md:py-20">
      <div
        className="pointer-events-none absolute inset-0"
        aria-hidden="true"
        style={{
          backgroundImage:
            "radial-gradient(ellipse 55% 45% at 80% 20%, rgba(196,165,116,0.12), transparent 55%), radial-gradient(ellipse 40% 35% at 10% 80%, rgba(196,165,116,0.06), transparent 50%)",
        }}
      />

      <Container className="relative">
        <Reveal>
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-[0.7rem] font-bold uppercase tracking-[0.24em] text-champagne">
              Önce / Sonra
            </p>
            <h2 className="mt-3 font-display text-[2.1rem] tracking-[-0.028em] text-white md:text-[2.85rem]">
              Halıdaki farkı kaydırarak görün
            </h2>
            <p className="mx-auto mt-4 max-w-lg text-[1.02rem] leading-relaxed text-white/65">
              Kirli yüzeyden yenilenmiş dokuya — sürükleyerek sonucu keşfedin.
            </p>
          </div>
        </Reveal>

        <Reveal className="mx-auto mt-10 max-w-4xl md:mt-12" delay={0.06}>
          <CompareSlider
            before="/images/carpet-before.png"
            after="/images/carpet-after.png"
            beforeAlt="Yıkama öncesi kirli halı"
            afterAlt="Yıkama sonrası temiz halı"
            sizes="(max-width: 1024px) 100vw, 900px"
            className="aspect-[16/10] shadow-[0_28px_70px_rgba(0,10,20,0.45)]"
          />
          <p className="mt-4 text-center text-xs text-white/45">
            Kaydırıcıyı sürükleyerek önce ve sonra görüntüyü karşılaştırın.
          </p>
        </Reveal>
      </Container>
    </section>
  );
}
