import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/constants";
import { getAllServiceSlugs } from "@/content/services";
import { getAllRegionSlugs } from "@/content/regions";
import { blogPosts } from "@/content/blog";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const staticPages: MetadataRoute.Sitemap = [
    { url: SITE_URL, lastModified: now, changeFrequency: "weekly", priority: 1 },
    { url: `${SITE_URL}/hizmetler`, lastModified: now, changeFrequency: "weekly", priority: 0.9 },
    { url: `${SITE_URL}/bolgeler`, lastModified: now, changeFrequency: "weekly", priority: 0.9 },
    { url: `${SITE_URL}/servis-cagir`, lastModified: now, changeFrequency: "monthly", priority: 0.88 },
    { url: `${SITE_URL}/galeri`, lastModified: now, changeFrequency: "weekly", priority: 0.85 },
    { url: `${SITE_URL}/blog`, lastModified: now, changeFrequency: "weekly", priority: 0.85 },
    { url: `${SITE_URL}/iletisim`, lastModified: now, changeFrequency: "monthly", priority: 0.85 },
    { url: `${SITE_URL}/hakkimizda`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
  ];

  const regionPages = getAllRegionSlugs().map((slug) => ({
    url: `${SITE_URL}/bolgeler/${slug}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: slug === "corlu" ? 0.95 : 0.85,
  }));

  const servicePages = getAllServiceSlugs().map((slug) => ({
    url: `${SITE_URL}/hizmetler/${slug}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  const blogPages = blogPosts.map((post) => ({
    url: `${SITE_URL}/blog/${post.slug}`,
    lastModified: new Date(post.publishedAt),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  return [...staticPages, ...regionPages, ...servicePages, ...blogPages];
}
