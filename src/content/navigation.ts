export const mainNav = [
  { href: "/", label: "Ana Sayfa" },
  { href: "/hizmetler", label: "Hizmetler" },
  { href: "/hakkimizda", label: "Hakkımızda" },
  { href: "/iletisim", label: "İletişim" },
] as const;

export const footerNav = {
  services: [
    { href: "/hizmetler/hali-yikama", label: "Halı Yıkama" },
    { href: "/hizmetler/koltuk-yikama", label: "Koltuk Yıkama" },
    { href: "/hizmetler/stor-perde-yikama", label: "Stor & Perde" },
    { href: "/hizmetler/el-dokuma-antika-hali", label: "El Dokuma / Antika" },
    { href: "/hizmetler/yorgan-battaniye", label: "Yorgan & Battaniye" },
  ],
  company: [
    { href: "/hakkimizda", label: "Hakkımızda" },
    { href: "/hizmetler", label: "Hizmetler" },
    { href: "/iletisim", label: "Randevu Al" },
  ],
} as const;
