"use client";

import { useState } from "react";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { Select } from "@/components/ui/Select";
import { services } from "@/content/services";
import { PHONE_PATTERN, PHONE_TITLE, buildWhatsAppUrl } from "@/lib/whatsapp";

export function ContactForm() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [service, setService] = useState(services[0]?.slug ?? "hali-yikama");
  const [sqm, setSqm] = useState("");
  const [message, setMessage] = useState("");

  const serviceLabel =
    services.find((s) => s.slug === service)?.title ?? "Hizmet";

  const composed = [
    `Merhaba Viva, randevu istiyorum.`,
    `Ad: ${name || "—"}`,
    `Telefon: ${phone || "—"}`,
    `Hizmet: ${serviceLabel}`,
    sqm ? `m²: ${sqm}` : null,
    message ? `Not: ${message}` : null,
  ]
    .filter(Boolean)
    .join("\n");

  return (
    <div className="relative">
      <p className="mb-3 text-[11px] font-medium uppercase tracking-[0.28em] text-champagne-soft">
        Mesaj bırakın
      </p>

      <form
        className="rounded-[1.75rem] border border-slate-200/80 bg-white p-6 shadow-[0_30px_80px_-48px_rgba(0,26,51,0.4)] sm:p-8 lg:p-10"
        onSubmit={(e) => {
          e.preventDefault();
          window.open(buildWhatsAppUrl(composed), "_blank", "noopener,noreferrer");
        }}
      >
        <h2 className="font-display text-2xl tracking-tight text-navy sm:text-3xl">
          Size geri dönelim
        </h2>
        <p className="mt-2 max-w-md text-sm leading-relaxed text-muted">
          Formu doldurun; WhatsApp üzerinden mesajınız hazırlanır, ekibimiz
          size dönüş yapar.
        </p>

        <div className="mt-8 grid gap-5 sm:grid-cols-2">
          <Input
            label="Adınız Soyadınız"
            name="name"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Adınız Soyadınız"
          />
          <Input
            label="Telefon Numaranız"
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
            label="Hizmet"
            name="service"
            value={service}
            onChange={(e) => setService(e.target.value)}
            options={services.map((s) => ({ value: s.slug, label: s.title }))}
          />
          <Input
            label="Metrekare (opsiyonel)"
            name="sqm"
            type="number"
            min={1}
            value={sqm}
            onChange={(e) => setSqm(e.target.value)}
            placeholder="Örn. 15"
          />
        </div>

        <label className="mt-5 block space-y-2">
          <span className="text-sm font-medium text-navy">Mesajınız</span>
          <textarea
            name="message"
            rows={5}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="w-full rounded-xl border border-line bg-mist/40 px-4 py-3 text-[15px] text-ink outline-none transition focus:border-champagne/50 focus:bg-white focus:ring-2 focus:ring-champagne/20"
            placeholder="Adres, uygun gün/saat veya özel notlarınızı yazın..."
          />
        </label>

        <div className="mt-7 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <Button type="submit" size="lg" variant="champagne" className="w-full sm:w-auto">
            Mesajı Gönder
            <ArrowRight className="h-4 w-4" strokeWidth={1.5} />
          </Button>
          <p className="text-center text-xs leading-relaxed text-muted sm:max-w-[14rem] sm:text-left">
            Bilgileriniz yalnızca randevu ve dönüş için kullanılır.
          </p>
        </div>
      </form>
    </div>
  );
}
