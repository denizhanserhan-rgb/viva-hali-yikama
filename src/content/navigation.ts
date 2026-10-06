export const mainNav = [
  { href: "/", label: "Ana Sayfa" },
  { href: "/hizmetler", label: "Hizmetler" },
  { href: "/bolgeler", label: "Bölgeler" },
  { href: "/galeri", label: "Galeri" },
  { href: "/blog", label: "Blog" },
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
  regions: [
    { href: "/bolgeler/corlu", label: "Çorlu Halı Yıkama" },
    { href: "/bolgeler/ergene", label: "Ergene Halı Yıkama" },
    { href: "/bolgeler/cerkezkoy", label: "Çerkezköy Halı Yıkama" },
    { href: "/bolgeler/kapakli", label: "Kapaklı Halı Yıkama" },
  ],
  company: [
    { href: "/hakkimizda", label: "Hakkımızda" },
    { href: "/galeri", label: "Galeri" },
    { href: "/blog", label: "Blog" },
    { href: "/servis-cagir", label: "Servis Çağır" },
    { href: "/iletisim", label: "İletişim" },
  ],
} as const;
