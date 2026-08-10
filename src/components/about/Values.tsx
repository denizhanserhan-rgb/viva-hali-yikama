import { Droplets, Leaf, ShieldCheck, Truck } from "lucide-react";
import { Container } from "@/components/layout/Container";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { trustPillars } from "@/content/site";

const icons = {
  "deep-clean": Droplets,
  hygiene: ShieldCheck,
  delivery: Truck,
  eco: Leaf,
} as const;

export function Values() {
  return (
    <section className="section-pad">
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="Değerlerimiz"
            title="Her işte aynı standart"
            description="Marka vaatlerimiz yalnızca slogan değil; operasyonumuzun dört temel taşı."
          />
        </Reveal>
        <div className="mt-14 grid gap-5 sm:grid-cols-2">
          {trustPillars.map((pillar, index) => {
            const Icon = icons[pillar.id];
            return (
              <Reveal key={pillar.id} delay={index * 0.05}>
                <div className="rounded-3xl border border-slate-100 bg-white p-7">
                  <div className="flex h-11 w-11 items-center justify-center rounded-full bg-navy text-white">
                    <Icon className="h-5 w-5" strokeWidth={1.5} />
                  </div>
                  <h3 className="mt-5 font-display text-xl text-navy">{pillar.title}</h3>
                  <p className="mt-2 text-sm text-muted">{pillar.description}</p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
