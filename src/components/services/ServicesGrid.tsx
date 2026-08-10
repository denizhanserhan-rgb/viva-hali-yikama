import { Reveal } from "@/components/ui/Reveal";
import { ServiceCard } from "@/components/services/ServiceCard";
import { ServiceVipCard } from "@/components/services/ServiceVipCard";
import { services } from "@/content/services";
import { cn } from "@/lib/utils";

type ServicesGridProps = {
  className?: string;
  showVip?: boolean;
};

export function ServicesGrid({ className, showVip = true }: ServicesGridProps) {
  return (
    <div
      className={cn(
        "grid gap-5 sm:grid-cols-2 md:grid-cols-3",
        className,
      )}
    >
      {services.map((service, index) => (
        <Reveal key={service.slug} delay={index * 0.04}>
          <ServiceCard service={service} />
        </Reveal>
      ))}
      {showVip ? (
        <Reveal delay={services.length * 0.04}>
          <ServiceVipCard />
        </Reveal>
      ) : null}
    </div>
  );
}
