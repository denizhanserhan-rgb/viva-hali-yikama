import { site } from "@/content/site";
import { SITE_URL } from "@/lib/constants";

export function JsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: site.name,
    description: site.description,
    url: SITE_URL,
    telephone: site.phone,
    email: site.email,
    image: `${SITE_URL}/logo/viva-logo.png`,
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
    sameAs: [site.social.instagram].filter(Boolean),
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
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: site.google.rating,
      reviewCount: site.google.reviewCount,
    },
    priceRange: "₺₺",
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
