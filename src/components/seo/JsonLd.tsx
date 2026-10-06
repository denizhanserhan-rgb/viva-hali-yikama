import { regions } from "@/content/regions";
import { services } from "@/content/services";
import { site } from "@/content/site";
import { SITE_URL } from "@/lib/constants";

export function JsonLd() {
  const business = {
    "@context": "https://schema.org",
    "@type": "DryCleaningOrLaundry",
    "@id": `${SITE_URL}/#business`,
    name: site.name,
    alternateName: "Viva Halı Yıkama",
    description: site.description,
    url: SITE_URL,
    telephone: "+90 530 031 75 36",
    email: site.email,
    image: [
      `${SITE_URL}/images/galeri/viva-hali-yikama-ekibi.jpg`,
      `${SITE_URL}/logo/viva-logo-512.png`,
    ],
    logo: `${SITE_URL}/logo/viva-logo-512.png`,
    address: {
      "@type": "PostalAddress",
      streetAddress: site.address.line1,
      addressLocality: "Ergene",
      addressRegion: "Tekirdağ",
      addressCountry: "TR",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: site.google.lat,
      longitude: site.google.lng,
    },
    hasMap: site.google.mapsUrl,
    sameAs: [site.social.instagram, site.google.mapsUrl],
    areaServed: regions.map((r) => ({
      "@type": "City",
      name: r.name,
      url: `${SITE_URL}/bolgeler/${r.slug}`,
    })),
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Yıkama hizmetleri",
      itemListElement: services.map((s) => ({
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: s.title,
          url: `${SITE_URL}/hizmetler/${s.slug}`,
        },
      })),
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
        ],
        opens: "09:00",
        closes: "18:00",
      },
    ],
    priceRange: "₺₺",
  };

  const website = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${SITE_URL}/#website`,
    url: SITE_URL,
    name: site.name,
    inLanguage: "tr-TR",
    publisher: { "@id": `${SITE_URL}/#business` },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify([business, website]) }}
    />
  );
}
