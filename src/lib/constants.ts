export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") ||
  "https://vivahaliyikama.com";

export const DEFAULT_OG_IMAGE = {
  url: "/opengraph-image.jpg",
  width: 1200,
  height: 630,
  alt: "VİVA HALI YIKAMA ekibi ve servis araçları – Çorlu ve Ergene’de halı yıkama",
};
