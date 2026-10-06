import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ServiceHero } from "@/components/services/ServiceHero";
import { ServiceDetailContent } from "@/components/services/ServiceDetailContent";
import { CTABanner } from "@/components/home/CTABanner";
import { getAllServiceSlugs, getServiceBySlug } from "@/content/services";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return getAllServiceSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) return {};
  return {
    title: { absolute: service.seoTitle },
    description: service.seoDescription,
    alternates: { canonical: `/hizmetler/${service.slug}` },
  };
}

export default async function ServiceDetailPage({ params }: Props) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) notFound();

  return (
    <div className="bg-atmosphere">
      <ServiceHero service={service} />
      <ServiceDetailContent service={service} />
      <CTABanner />
    </div>
  );
}
