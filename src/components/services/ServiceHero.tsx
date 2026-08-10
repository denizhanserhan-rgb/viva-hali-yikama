import type { Service } from "@/types/service";
import { PageHero } from "@/components/ui/PageHero";
import { Button } from "@/components/ui/Button";
import { buildTelHref, buildWhatsAppUrl } from "@/lib/whatsapp";
import { MessageCircle, Phone } from "lucide-react";

export function ServiceHero({ service }: { service: Service }) {
  return (
    <PageHero
      eyebrow="Hizmet"
      title={service.title}
      description={service.description}
      actions={
        <>
          <Button href={buildTelHref()} size="lg" variant="champagne">
            <Phone className="h-4 w-4" strokeWidth={1.5} />
            Hemen Ara
          </Button>
          <Button
            href={buildWhatsAppUrl(
              `Merhaba Viva, ${service.title} hakkında bilgi / randevu istiyorum.`,
            )}
            size="lg"
            variant="ghost"
            target="_blank"
            rel="noopener noreferrer"
          >
            <MessageCircle className="h-4 w-4" strokeWidth={1.5} />
            WhatsApp
          </Button>
        </>
      }
    />
  );
}
