"use client";

import { useState } from "react";
import { ArrowRight, Phone } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { Select } from "@/components/ui/Select";
import { regions } from "@/content/regions";
import { services } from "@/content/services";
import { site } from "@/content/site";
import {
  PHONE_PATTERN,
  PHONE_TITLE,
  buildTelHref,
  buildWhatsAppUrl,
} from "@/lib/whatsapp";
import { cn } from "@/lib/utils";

type ServiceRequestFormProps = {
  defaultRegion?: string;
  title?: string;
  description?: string;
  className?: string;
};

const OTHER_REGION = "diger";
function formatDay(value: string) {
  const date = new Date(`${value}T00:00:00`);
  if (Number.isNaN(date.getTime())) return value;
  return date.toLocaleDateString("tr-TR", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

export function ServiceRequestForm({
  defaultRegion = "corlu",
  title = "Ücretsiz servis talebi",
  description = "Formu doldurun; WhatsApp mesajınız hazır açılsın. Ekibimiz teyit edip alım gününü sizinle planlasın.",
  className,
}: ServiceRequestFormProps) {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [region, setRegion] = useState(defaultRegion);
  const [address, setAddress] = useState("");
  const [service, setService] = useState(services[0]?.slug ?? "hali-yikama");
  const [day, setDay] = useState("");
  const [note, setNote] = useState("");

  const regionLabel =
    regions.find((r) => r.slug === region)?.name ?? "Diğer";
  const serviceLabel =
    services.find((s) => s.slug === service)?.title ?? "Hizmet";

  const message = [
    "Merhaba Viva, ücretsiz servis talebi oluşturmak istiyorum.",
    `Ad Soyad: ${name || "—"}`,
    `Telefon: ${phone || "—"}`,
    `Bölge: ${regionLabel}`,
    address ? `Mahalle / Adres: ${address}` : null,
    `Hizmet: ${serviceLabel}`,
    day ? `Tercih edilen gün: ${formatDay(day)}` : null,
    note ? `Not: ${note}` : null,
  ]
    .filter(Boolean)
    .join("\n");

  return (
    <form
      className={cn(
        "rounded-[1.75rem] border border-slate-200/80 bg-white p-6 shadow-[0_30px_80px_-48px_rgba(0,26,51,0.4)] sm:p-8 lg:p-10",
        className,
      )}
      onSubmit={(e) => {
        e.preventDefault();
        window.open(buildWhatsAppUrl(message), "_blank", "noopener,noreferrer");
      }}
    >
      <h2 className="font-display text-2xl tracking-tight text-navy sm:text-3xl">
        {title}
      </h2>
      <p className="mt-2 max-w-lg text-sm leading-relaxed text-muted">
        {description}
      </p>

      <div className="mt-8 grid gap-5 sm:grid-cols-2">
        <Input
          label="Adınız Soyadınız"
          name="name"
          required
          autoComplete="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Adınız Soyadınız"
        />
        <Input
          label="Telefon"
          name="phone"
          type="tel"
          required
          autoComplete="tel"
          inputMode="tel"
          pattern={PHONE_PATTERN}
          title={PHONE_TITLE}
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          placeholder="05xx xxx xx xx"
        />
        <Select
          label="Bölge"
          name="region"
          value={region}
          onChange={(e) => setRegion(e.target.value)}
          options={[
            ...regions.map((r) => ({ value: r.slug, label: r.name })),
            { value: OTHER_REGION, label: "Diğer" },
          ]}
        />
        <Input
          label="Mahalle / Adres"
          name="address"
          autoComplete="street-address"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
          placeholder="Örn. Hıdırağa Mah."
        />
        <Select
          label="Hizmet"
          name="service"
          value={service}
          onChange={(e) => setService(e.target.value)}
          options={services.map((s) => ({ value: s.slug, label: s.title }))}
        />
        <Input
          label="Tercih edilen gün"
          name="day"
          type="date"
          value={day}
          onChange={(e) => setDay(e.target.value)}
        />
      </div>

      <label className="mt-5 block space-y-2">
        <span className="text-sm font-medium text-navy">Not (isteğe bağlı)</span>
        <textarea
          name="note"
          rows={4}
          value={note}
          onChange={(e) => setNote(e.target.value)}
          className="w-full rounded-xl border border-line bg-mist/40 px-4 py-3 text-[15px] text-ink outline-none transition focus:border-champagne/50 focus:bg-white focus:ring-2 focus:ring-champagne/20"
          placeholder="Halı sayısı, ölçü, leke durumu, uygun saat aralığı..."
        />
      </label>

      <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:items-center">
        <Button type="submit" size="lg" variant="champagne" className="w-full sm:w-auto">
          Servis Talebi Gönder
          <ArrowRight className="h-4 w-4" strokeWidth={1.5} />
        </Button>
        <a
          href={buildTelHref()}
          className="inline-flex items-center justify-center gap-2 text-sm font-medium text-navy transition hover:text-champagne"
        >
          <Phone className="h-4 w-4 text-champagne" strokeWidth={1.5} />
          veya hemen arayın: {site.phoneDisplay}
        </a>
      </div>
      <p className="mt-4 text-xs leading-relaxed text-muted">
        Bu form sipariş oluşturmaz; ekibimiz bilgilerinizi teyit etmek için size dönüş yapar.
      </p>
    </form>
  );
}
