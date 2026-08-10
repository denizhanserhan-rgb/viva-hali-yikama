import { site } from "@/content/site";

export function buildWhatsAppUrl(message?: string): string {
  const phone = site.whatsapp.replace(/\D/g, "");
  const text = message ?? site.whatsappDefaultMessage;
  return `https://wa.me/${phone}?text=${encodeURIComponent(text)}`;
}

export function buildTelHref(phone: string = site.phone): string {
  return `tel:${phone.replace(/\s/g, "")}`;
}
