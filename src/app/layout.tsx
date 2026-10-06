import type { Metadata } from "next";
import { Fraunces, Plus_Jakarta_Sans } from "next/font/google";
import { Footer } from "@/components/layout/Footer";
import { MobileCTABar } from "@/components/layout/MobileCTABar";
import { Navbar } from "@/components/layout/Navbar";
import { JsonLd } from "@/components/seo/JsonLd";
import { site } from "@/content/site";
import { SITE_URL } from "@/lib/constants";
import "./globals.css";

const plusJakarta = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta",
  subsets: ["latin"],
  display: "swap",
});

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: site.seoTitle,
    template: `%s | ${site.name}`,
  },
  description: site.description,
  keywords: [
    "çorlu halı yıkama",
    "ergene halı yıkama",
    "çerkezköy halı yıkama",
    "kapaklı halı yıkama",
    "çorlu koltuk yıkama",
    "tekirdağ halı yıkama",
    "halı yıkama fabrikası çorlu",
  ],
  openGraph: {
    title: site.seoTitle,
    description: site.description,
    url: "/",
    locale: "tr_TR",
    type: "website",
    siteName: site.name,
  },
  twitter: {
    card: "summary_large_image",
    title: site.seoTitle,
    description: site.description,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr" className={`${plusJakarta.variable} ${fraunces.variable} h-full`}>
      <body className="min-h-full font-sans text-foreground antialiased">
        <JsonLd />
        <Navbar />
        <main className="relative flex-1 pb-24 md:pb-0">{children}</main>
        <Footer />
        <MobileCTABar />
      </body>
    </html>
  );
}
