import { site } from "@/content/site";

export function buildWhatsAppUrl(message?: string): string {
  const phone = site.whatsapp.replace(/\D/g, "");
  const text = message ?? site.whatsappDefaultMessage;
  return `https://wa.me/${phone}?text=${encodeURIComponent(text)}`;
}

export const PHONE_PATTERN = "(?:\\D*\\d){10,}\\D*";
export const PHONE_TITLE =
  "Lütfen geçerli bir telefon numarası girin (örn. 0530 123 45 67)";

export function buildTelHref(phone: string = site.phone): string {
  return `tel:${phone.replace(/\s/g, "")}`;
}
