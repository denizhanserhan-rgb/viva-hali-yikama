export type ServiceFaq = {
  question: string;
  answer: string;
};

export type ServiceStep = {
  title: string;
  text: string;
};

export type Service = {
  slug: string;
  title: string;
  shortTitle: string;
  summary: string;
  description: string;
  /** Detay sayfası uzun giriş paragrafları */
  details: string[];
  features: string[];
  /** Bu hizmet kime / neye uygun */
  suitableFor: string[];
  /** Süreç adımları */
  process: ServiceStep[];
  /** Bilmeniz gerekenler */
  goodToKnow: string[];
  /** Hizmete özel SSS */
  faqs: ServiceFaq[];
  /** Kart üzerinde gösterilen 3 mikro özellik */
  highlights: [string, string, string];
  /** Kart altı bilgi etiketi */
  hint: string;
  featured?: boolean;
  badge?: string;
  icon: "carpet" | "sofa" | "curtain" | "antique" | "blanket";
  seoTitle: string;
  seoDescription: string;
};

export type Testimonial = {
  id: string;
  name: string;
  location: string;
  rating: number;
  text: string;
  dateLabel: string;
  initials: string;
};
