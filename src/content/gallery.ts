export type GalleryCategory = "servis" | "hali" | "koltuk" | "perde" | "tesis";

export const galleryCategories: { id: GalleryCategory; label: string }[] = [
  { id: "hali", label: "Halı" },
  { id: "koltuk", label: "Koltuk" },
  { id: "perde", label: "Perde" },
  { id: "tesis", label: "Tesis" },
  { id: "servis", label: "Servis & Ekip" },
];

type GalleryItemBase = {
  id: string;
  title: string;
  caption: string;
  category: GalleryCategory;
  region?: string;
  width: number;
  height: number;
  featured?: boolean;
};

export type GalleryPhoto = GalleryItemBase & {
  kind: "photo";
  src: string;
  alt: string;
};

export type GalleryBeforeAfter = GalleryItemBase & {
  kind: "beforeAfter";
  before: string;
  after: string;
  beforeAlt: string;
  afterAlt: string;
};

export type GalleryItem = GalleryPhoto | GalleryBeforeAfter;

const dir = "/images/galeri";

export const galleryItems: GalleryItem[] = [
  {
    id: "ekip",
    kind: "photo",
    src: `${dir}/viva-hali-yikama-ekibi.jpg`,
    alt: "Viva Halı Yıkama ekibi, halı dolu servis araçlarının önünde",
    title: "Viva ekibi sahada",
    caption:
      "Servis ekibimiz ve araçlarımız. Toplanan halılar paketlenmiş şekilde tesise taşınıyor.",
    category: "servis",
    width: 1024,
    height: 768,
    featured: true,
  },
  {
    id: "kapidan-alim",
    kind: "photo",
    src: `${dir}/kapidan-hali-alim-servisi.jpg`,
    alt: "Kapıdan ücretsiz halı alım servisi, halı dolu araç",
    title: "Kapıdan ücretsiz alım",
    caption: "Günlük alım turu: halılar adreslerden toplanıp tesisimize getiriliyor.",
    category: "servis",
    width: 771,
    height: 1024,
    featured: true,
  },
  {
    id: "teslimata-hazir",
    kind: "photo",
    src: `${dir}/teslimata-hazir-temiz-halilar.jpg`,
    alt: "Yıkanıp paketlenmiş temiz halılar teslimat aracında",
    title: "Teslimata hazır",
    caption: "Yıkanan, kurutulan ve kontrol edilen halılar tek tek paketlenerek yola çıkıyor.",
    category: "servis",
    width: 771,
    height: 1024,
    featured: true,
  },
  {
    id: "servis-araclari",
    kind: "photo",
    src: `${dir}/viva-servis-araclari.jpg`,
    alt: "Paketli halılarla dolu iki Viva servis aracı",
    title: "Servis araçlarımız",
    caption: "Aynı gün içinde birden fazla rotaya alım ve teslimat yapabiliyoruz.",
    category: "servis",
    width: 1024,
    height: 768,
    featured: true,
  },
  {
    id: "kapiya-teslim",
    kind: "photo",
    src: `${dir}/kapiya-teslim-paketli-halilar.jpg`,
    alt: "Mahallede kapıya teslim edilen paketli halılar",
    title: "Kapıya teslim",
    caption: "Paketli halılar söz verilen günde adresinize teslim edilir.",
    category: "servis",
    width: 771,
    height: 1024,
    featured: true,
  },
  {
    id: "toplanan-halilar",
    kind: "photo",
    src: `${dir}/toplanan-halilar-tesise-yolda.jpg`,
    alt: "Adreslerden toplanmış halılar tesise götürülürken",
    title: "Tesise yolda",
    caption: "Gün sonunda toplanan halılar yıkama için tesisimize ulaşıyor.",
    category: "servis",
    width: 768,
    height: 1024,
    featured: true,
  },
  {
    id: "paketli-arac",
    kind: "photo",
    src: `${dir}/servis-araci-paketli-halilar.jpg`,
    alt: "Servis aracında poşetlenmiş temiz halılar",
    title: "Özenli paketleme",
    caption: "Her halı ayrı poşetlenir; teslimatta toz ve nemden korunur.",
    category: "servis",
    width: 768,
    height: 1024,
  },
  {
    id: "teslimat-araci",
    kind: "photo",
    src: `${dir}/paketli-halilar-teslimat-araci.jpg`,
    alt: "Teslimat aracında paketlenmiş halılar",
    title: "Teslimat turu",
    caption: "Temiz halılar planlı rota ile sahiplerine dönüyor.",
    category: "servis",
    width: 768,
    height: 1024,
  },
  {
    id: "gunluk-tur",
    kind: "photo",
    src: `${dir}/gunluk-teslimat-turu.jpg`,
    alt: "Günlük teslimat turuna çıkan halı dolu servis aracı",
    title: "Günlük tur",
    caption: "Her gün düzenli alım ve teslim rotaları.",
    category: "servis",
    width: 771,
    height: 1024,
  },
];

export function getFeaturedGalleryItems(limit = 6): GalleryItem[] {
  return galleryItems.filter((item) => item.featured).slice(0, limit);
}

export function getGalleryItemsByRegion(region: string): GalleryItem[] {
  return galleryItems.filter((item) => item.region === region);
}

export function getUsedCategories(): { id: GalleryCategory; label: string }[] {
  const used = new Set(galleryItems.map((item) => item.category));
  return galleryCategories.filter((c) => used.has(c.id));
}

export function galleryItemCover(item: GalleryItem): { src: string; alt: string } {
  return item.kind === "photo"
    ? { src: item.src, alt: item.alt }
    : { src: item.after, alt: item.afterAlt };
}
