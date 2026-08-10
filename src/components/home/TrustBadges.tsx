import { Droplets, Leaf, ShieldCheck, Truck } from "lucide-react";
import { Container } from "@/components/layout/Container";
import { Reveal } from "@/components/ui/Reveal";
import { trustPillars } from "@/content/site";

const icons = {
  "deep-clean": Droplets,
  hygiene: ShieldCheck,
  delivery: Truck,
  eco: Leaf,
} as const;

export function TrustBadges() {
  return (
    <section className="relative z-10 -mt-10 pb-4">
      <Container>
        <Reveal>
          <div className="grid gap-8 rounded-3xl border border-slate-100 bg-white px-6 py-9 shadow-[0_24px_60px_-36px_rgba(0,26,51,0.18)] sm:grid-cols-2 sm:gap-6 lg:grid-cols-4 lg:px-10">
            {trustPillars.map((pillar) => {
              const Icon = icons[pillar.id];
              return (
                <div key={pillar.id} className="flex items-start gap-3.5">
                  <Icon
                    className="mt-0.5 h-4 w-4 shrink-0 text-champagne"
                    strokeWidth={1.5}
                  />
                  <div>
                    <p className="text-sm font-semibold tracking-tight text-navy">
                      {pillar.title}
                    </p>
                    <p className="mt-1 text-sm leading-snug text-muted">
                      {pillar.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
