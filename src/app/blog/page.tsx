import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Clock } from "lucide-react";
import { Container } from "@/components/layout/Container";
import { CTABanner } from "@/components/home/CTABanner";
import { PageHero } from "@/components/ui/PageHero";
import { Reveal } from "@/components/ui/Reveal";
import {
  StructuredData,
  breadcrumbSchema,
} from "@/components/seo/StructuredData";
import { formatPostDate, getSortedPosts } from "@/content/blog";

export const metadata: Metadata = {
  title: "Blog | Halı ve Koltuk Bakım Rehberi",
  description:
    "Halı yıkama, leke çıkarma, koltuk temizliği ve ev hijyeni hakkında Çorlu’dan pratik rehberler. VİVA HALI YIKAMA blog.",
  alternates: { canonical: "/blog" },
};

export default function BlogPage() {
  const posts = getSortedPosts();

  return (
    <div className="bg-atmosphere">
      <StructuredData
        data={breadcrumbSchema([
          { name: "Ana Sayfa", path: "/" },
          { name: "Blog", path: "/blog" },
        ])}
      />
      <PageHero
        eyebrow="Blog"
        title="Bilgi odaklı yazılar"
        description="Fiyat listesi değil; hijyen, bakım ve doğru yıkama hakkında net rehberler."
      />

      <section className="section-pad">
        <Container>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {posts.map((post, index) => (
              <Reveal key={post.slug} delay={index * 0.04}>
                <Link
                  href={`/blog/${post.slug}`}
                  className="group flex h-full flex-col rounded-[1.5rem] border border-slate-200/70 bg-white p-7 shadow-[0_24px_60px_-44px_rgba(0,26,51,0.3)] transition hover:-translate-y-0.5 hover:border-champagne/40"
                >
                  <div className="flex items-center gap-3 text-[11px] font-medium uppercase tracking-[0.2em]">
                    <span className="rounded-full bg-navy px-2.5 py-1 text-champagne-soft">
                      {post.category}
                    </span>
                    <span className="inline-flex items-center gap-1 text-slate-400">
                      <Clock className="h-3 w-3" strokeWidth={1.75} />
                      {post.readMinutes} dk
                    </span>
                  </div>
                  <h2 className="mt-5 font-display text-xl leading-snug tracking-tight text-navy sm:text-2xl">
                    {post.title}
                  </h2>
                  <p className="mt-3 text-sm leading-relaxed text-muted">
                    {post.description}
                  </p>
                  <div className="mt-auto flex items-center justify-between pt-6">
                    <time
                      dateTime={post.publishedAt}
                      className="text-xs text-slate-400"
                    >
                      {formatPostDate(post.publishedAt)}
                    </time>
                    <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-navy transition group-hover:text-champagne">
                      Oku
                      <ArrowRight className="h-4 w-4" strokeWidth={1.5} />
                    </span>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <CTABanner />
    </div>
  );
}
