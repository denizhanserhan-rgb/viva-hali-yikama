import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight, Check, Clock } from "lucide-react";
import { Container } from "@/components/layout/Container";
import { CTABanner } from "@/components/home/CTABanner";
import { PageHero } from "@/components/ui/PageHero";
import { Button } from "@/components/ui/Button";
import {
  StructuredData,
  breadcrumbSchema,
} from "@/components/seo/StructuredData";
import {
  formatPostDate,
  getAllPostSlugs,
  getPostBySlug,
  getSortedPosts,
} from "@/content/blog";
import { getServiceBySlug } from "@/content/services";
import { site } from "@/content/site";
import { DEFAULT_OG_IMAGE, SITE_URL } from "@/lib/constants";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return getAllPostSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.description,
    alternates: { canonical: `/blog/${post.slug}` },
    openGraph: {
      type: "article",
      title: post.title,
      description: post.description,
      url: `/blog/${post.slug}`,
      publishedTime: post.publishedAt,
      images: [DEFAULT_OG_IMAGE],
    },
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  const related = post.relatedServices
    .map((s) => getServiceBySlug(s))
    .filter((s) => s !== undefined);
  const morePosts = getSortedPosts()
    .filter((p) => p.slug !== post.slug)
    .slice(0, 3);

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.description,
    datePublished: post.publishedAt,
    dateModified: post.publishedAt,
    inLanguage: "tr-TR",
    mainEntityOfPage: `${SITE_URL}/blog/${post.slug}`,
    image: `${SITE_URL}${DEFAULT_OG_IMAGE.url}`,
    author: { "@type": "Organization", name: site.name, url: SITE_URL },
    publisher: {
      "@type": "Organization",
      name: site.name,
      logo: { "@type": "ImageObject", url: `${SITE_URL}/logo/viva-logo-512.png` },
    },
  };

  return (
    <div className="bg-atmosphere">
      <StructuredData data={articleSchema} />
      <StructuredData
        data={breadcrumbSchema([
          { name: "Ana Sayfa", path: "/" },
          { name: "Blog", path: "/blog" },
          { name: post.title, path: `/blog/${post.slug}` },
        ])}
      />

      <PageHero eyebrow={post.category} title={post.title} description={post.description} />

      <article className="section-pad">
        <Container className="max-w-3xl">
          <div className="flex flex-wrap items-center gap-4 text-sm text-slate-500">
            <Link
              href="/blog"
              className="inline-flex items-center gap-1.5 font-medium text-navy transition hover:text-champagne"
            >
              <ArrowLeft className="h-4 w-4" strokeWidth={1.5} />
              Tüm yazılar
            </Link>
            <span aria-hidden>·</span>
            <time dateTime={post.publishedAt}>{formatPostDate(post.publishedAt)}</time>
            <span aria-hidden>·</span>
            <span className="inline-flex items-center gap-1">
              <Clock className="h-3.5 w-3.5" strokeWidth={1.75} />
              {post.readMinutes} dk okuma
            </span>
          </div>

          <div className="mt-10 space-y-12">
            {post.sections.map((section) => (
              <section key={section.heading}>
                <h2 className="font-display text-2xl tracking-tight text-navy sm:text-3xl">
                  {section.heading}
                </h2>
                <div className="mt-4 space-y-4">
                  {section.paragraphs.map((p) => (
                    <p
                      key={p.slice(0, 40)}
                      className="text-[15px] leading-[1.8] text-ink/80 sm:text-base"
                    >
                      {p}
                    </p>
                  ))}
                </div>
                {section.list ? (
                  <ul className="mt-5 space-y-2.5">
                    {section.list.map((item) => (
                      <li
                        key={item}
                        className="flex items-start gap-2.5 text-[15px] leading-relaxed text-ink/80"
                      >
                        <Check
                          className="mt-1 h-4 w-4 shrink-0 text-champagne"
                          strokeWidth={1.75}
                        />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                ) : null}
              </section>
            ))}
          </div>

          <div className="mt-14 rounded-[1.5rem] border border-white/10 bg-navy-deep p-7 text-white sm:p-9">
            <p className="text-[11px] font-medium uppercase tracking-[0.26em] text-champagne-soft">
              Çorlu ve çevresinde ücretsiz servis
            </p>
            <h2 className="mt-3 font-display text-2xl tracking-tight sm:text-3xl">
              Halılarınızı profesyonele emanet edin
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-white/60">
              Kapıdan alım, tesis yıkama ve zamanında teslimat. Formu doldurun,
              size dönüş yapalım.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Button href="/servis-cagir" variant="champagne">
                Servis Çağır
              </Button>
              {related.map((s) => (
                <Button key={s.slug} href={`/hizmetler/${s.slug}`} variant="ghost">
                  {s.title}
                </Button>
              ))}
            </div>
          </div>

          {morePosts.length > 0 ? (
            <div className="mt-16">
              <h2 className="font-display text-2xl tracking-tight text-navy">
                Diğer yazılar
              </h2>
              <ul className="mt-6 divide-y divide-slate-200 border-y border-slate-200">
                {morePosts.map((p) => (
                  <li key={p.slug}>
                    <Link
                      href={`/blog/${p.slug}`}
                      className="group flex items-center justify-between gap-4 py-4 text-[15px] font-medium text-navy transition hover:text-champagne"
                    >
                      {p.title}
                      <ArrowRight
                        className="h-4 w-4 shrink-0 transition group-hover:translate-x-0.5"
                        strokeWidth={1.5}
                      />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ) : null}
        </Container>
      </article>

      <CTABanner />
    </div>
  );
}
