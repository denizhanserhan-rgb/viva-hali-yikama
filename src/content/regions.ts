export type RegionFaq = { question: string; answer: string };

export type Region = {
  slug: string;
  name: string;
  locative: string;
  heading: string;
  seoTitle: string;
  seoDescription: string;
  intro: string;
  paragraphs: string[];
  highlights: string[];
  neighborhoods: string[];
  faqs: RegionFaq[];
};

export const regions: Region[] = [
  {
    slug: "corlu",
    name: "Çorlu",
    locative: "Çorlu’da",
    heading: "Çorlu halı yıkama — ücretsiz servis kapınızda",
    seoTitle: "Çorlu Halı Yıkama | Ücretsiz Servis | VİVA HALI YIKAMA",
    seoDescription:
      "Çorlu halı yıkama, koltuk ve perde yıkamada ücretsiz servis. Tesis yıkama, hijyen garantisi ve zamanında teslimat. Hemen arayın: 0530 031 75 36",
    intro:
      "Tesisimiz Çorlu’ya yalnızca birkaç dakika mesafede. Çorlu’nun tüm mahallelerinde kapıdan alım ve kapıya teslim ile halı, koltuk, perde ve yorgan yıkama hizmeti veriyoruz.",
    paragraphs: [
      "Çorlu’da halı yıkama hizmetimiz; makine halısı, shaggy, yün, bambu ve el dokuma halılar için ayrı yıkama protokolleriyle yürütülür. Halılarınız tesisimizde toz alma, ön leke işlemi, bol suyla durulama ve kontrollü kurutma aşamalarından geçer.",
      "Ergene’deki tesisimizin Çorlu merkeze yakın olması, servis rotalarını kısa tutmamızı sağlar. Bu sayede alım ve teslim günlerini size uygun saat aralıklarında planlayabiliyoruz.",
      "Koltuk ve kanepe yıkamada ekibimiz adresinize gelir; kumaş tipine uygun ürünlerle yerinde derin temizlik yapar. Stor, zebra ve tül perdeleriniz için söküm ve montaj desteği sunuyoruz.",
    ],
    highlights: [
      "Çorlu’nun tüm mahallelerine ücretsiz alım ve teslim",
      "Tesise yakınlık sayesinde kısa servis rotası",
      "Halı türüne özel yıkama ve kontrollü kurutma",
      "Yerinde koltuk yıkama ve perde söküm–montaj desteği",
    ],
    neighborhoods: [
      "Alipaşa",
      "Cemaliye",
      "Esentepe",
      "Hatip",
      "Havuzlar",
      "Hıdırağa",
      "Hürriyet",
      "Kazımiye",
      "Kemalettin",
      "Muhittin",
      "Nusratiye",
      "Önerler",
      "Reşadiye",
      "Rumeli",
      "Silahtarağa",
      "Şeyh Sinan",
      "Yenice",
      "Zafer",
    ],
    faqs: [
      {
        question: "Çorlu’da halı yıkama servisi ücretli mi?",
        answer:
          "Hayır. Çorlu’nun tüm mahallelerinde halılarınızı kapınızdan ücretsiz alıyor, yıkama sonrası yine ücretsiz teslim ediyoruz.",
      },
      {
        question: "Çorlu’da halılar kaç günde teslim ediliyor?",
        answer:
          "Halının türüne, kalınlığına ve hava koşullarına göre değişmekle birlikte çoğu halı birkaç iş günü içinde teslim edilir. Net teslim gününü alım sırasında paylaşıyoruz.",
      },
      {
        question: "Çorlu’da aynı gün alım yapıyor musunuz?",
        answer:
          "Rota yoğunluğuna bağlı olarak aynı gün alım planlayabiliyoruz. Sabah saatlerinde aramanız aynı gün alım ihtimalini artırır.",
      },
      {
        question: "Koltuk yıkama için tesise mi götürüyorsunuz?",
        answer:
          "Koltuk ve kanepe yıkamayı adresinizde, yerinde yapıyoruz. Kumaş tipine göre kuruma süresi hakkında sizi önceden bilgilendiriyoruz.",
      },
    ],
  },
  {
    slug: "ergene",
    name: "Ergene",
    locative: "Ergene’de",
    heading: "Ergene halı yıkama — tesisimiz sizin ilçenizde",
    seoTitle: "Ergene Halı Yıkama | Velimeşe, Ulaş, Marmaracık | VİVA",
    seoDescription:
      "Ergene halı yıkama: Velimeşe, Ulaş, Marmaracık ve tüm mahallelere ücretsiz servis. Kendi tesisimizde hijyenik yıkama. 0530 031 75 36",
    intro:
      "Tesisimiz Ergene Cumhuriyet Mahallesi’nde. Ergene’nin merkezinden köylerine kadar halı, koltuk ve perdeleriniz için ücretsiz servis sağlıyoruz.",
    paragraphs: [
      "Kendi tesisimizde yıkama yaptığımız için Ergene’deki müşterilerimize en kısa alım–teslim sürelerini sunabiliyoruz. Halılarınız dışarıya gönderilmeden, kendi ekibimiz tarafından yıkanır ve kontrol edilir.",
      "Velimeşe, Ulaş, Marmaracık ve Misinli başta olmak üzere ilçenin tüm yerleşimlerinde düzenli servis rotalarımız var. Yoğun dönemlerde bile size uygun günü birlikte planlıyoruz.",
      "Dilerseniz halılarınızı tesisimize kendiniz de getirebilirsiniz; ekibimiz teslim alırken halının durumu ve tahmini teslim günü hakkında bilgi verir.",
    ],
    highlights: [
      "Tesisimiz Ergene’de — en kısa servis süresi",
      "Dış kaynak yok, kendi ekibimizle yıkama",
      "Köy ve mahallelere düzenli rota",
      "Tesise elden teslim imkânı",
    ],
    neighborhoods: [
      "Cumhuriyet",
      "Ulaş",
      "Velimeşe",
      "Marmaracık",
      "Misinli",
      "Vakıflar",
      "Yeşiltepe",
      "Esenler",
    ],
    faqs: [
      {
        question: "Ergene’de tesisiniz nerede?",
        answer:
          "Tesisimiz Cumhuriyet Mah. 1336. Sk. No:10/2, Ergene / Tekirdağ adresindedir. Google Haritalar’da “Viva Halı Yıkama” olarak bulabilirsiniz.",
      },
      {
        question: "Halımı tesise kendim getirebilir miyim?",
        answer:
          "Elbette. Çalışma saatlerimiz içinde halınızı tesisimize getirebilirsiniz. Teslim alırken tahmini hazır olma gününü paylaşıyoruz.",
      },
      {
        question: "Ergene köylerine servis var mı?",
        answer:
          "Evet. Ergene’ye bağlı mahalle ve köylere de ücretsiz servis veriyoruz. Adresinizi paylaşmanız rota planlaması için yeterli.",
      },
    ],
  },
  {
    slug: "cerkezkoy",
    name: "Çerkezköy",
    locative: "Çerkezköy’de",
    heading: "Çerkezköy halı yıkama — planlı ücretsiz servis",
    seoTitle: "Çerkezköy Halı Yıkama | Ücretsiz Servis | VİVA HALI YIKAMA",
    seoDescription:
      "Çerkezköy halı, koltuk ve perde yıkama. Planlı ücretsiz servis, tesis yıkama ve hijyen garantisi. Randevu: 0530 031 75 36",
    intro:
      "Çerkezköy’de halı, koltuk ve perde yıkama için belirli günlerde planlı servis rotası uyguluyoruz. Randevunuzu oluşturun, size en yakın rota gününde kapınıza gelelim.",
    paragraphs: [
      "Çerkezköy rotamız haftalık olarak planlanır. Randevu sırasında size uygun gün ve saat aralığını netleştiriyor, alımdan önce sizi arayarak teyit ediyoruz.",
      "Halılarınız Ergene’deki tesisimizde, türüne uygun programla yıkanır. Kurutma ve son kontrol sonrası paketlenerek yine planlı rota gününde adresinize teslim edilir.",
      "Apartman ve site yönetimleri için toplu halı yıkama planlaması yapabiliyoruz; aynı gün birden fazla daireden alım rota verimliliği sağlar.",
    ],
    highlights: [
      "Haftalık planlı servis rotası",
      "Alım öncesi telefonla teyit",
      "Site ve apartmanlara toplu alım planı",
      "Paketli, kontrollü teslimat",
    ],
    neighborhoods: [
      "Bağlık",
      "Cumhuriyet",
      "Fatih",
      "Gazi Mustafa Kemalpaşa",
      "Gazi Osman Paşa",
      "İstasyon",
      "Kızılpınar Atatürk",
      "Kızılpınar Namık Kemal",
      "Veliköy",
    ],
    faqs: [
      {
        question: "Çerkezköy’e hangi günler servis veriyorsunuz?",
        answer:
          "Çerkezköy için haftalık planlı rota uyguluyoruz. Randevu sırasında güncel rota günlerini ve size uygun saat aralığını paylaşıyoruz.",
      },
      {
        question: "Site yönetimleri için toplu yıkama yapıyor musunuz?",
        answer:
          "Evet. Site ve apartman yönetimleriyle toplu alım günü planlayabiliyoruz. Detaylar için bizi arayabilir ya da WhatsApp’tan yazabilirsiniz.",
      },
    ],
  },
  {
    slug: "kapakli",
    name: "Kapaklı",
    locative: "Kapaklı’da",
    heading: "Kapaklı halı yıkama — kapıdan alım, kapıya teslim",
    seoTitle: "Kapaklı Halı Yıkama | Ücretsiz Servis | VİVA HALI YIKAMA",
    seoDescription:
      "Kapaklı halı ve koltuk yıkama. Ücretsiz servis, tesis yıkama ve zamanında teslimat. Hemen randevu alın: 0530 031 75 36",
    intro:
      "Kapaklı’da halı ve koltuk yıkama için planlı servis veriyoruz. Halılarınızı kapınızdan alıyor, tesisimizde yıkayıp paketli şekilde geri getiriyoruz.",
    paragraphs: [
      "Kapaklı rotamız Çerkezköy rotasıyla birlikte planlanır. Bu sayede bölgedeki müşterilerimize düzenli ve öngörülebilir alım–teslim günleri sunuyoruz.",
      "Shaggy, yün ve makine halıları için farklı yıkama programları uyguluyoruz. Lekeli veya kokulu halılar için ön işlem yapılır, sonuç hakkında gerçekçi bilgi verilir.",
      "Yorgan, battaniye ve stor perdelerinizi de aynı servisle teslim edebilirsiniz; tek seferde birden fazla tekstil ürününü yıkatmak zaman kazandırır.",
    ],
    highlights: [
      "Çerkezköy rotasıyla birlikte düzenli servis",
      "Halı türüne özel yıkama programı",
      "Leke ve koku için ön işlem",
      "Yorgan, battaniye ve perde tek seferde",
    ],
    neighborhoods: [
      "Atatürk",
      "Bahçelievler",
      "Cumhuriyet",
      "İnönü",
      "İsmet Paşa",
      "Karaağaç",
      "Pınarça",
    ],
    faqs: [
      {
        question: "Kapaklı’da servis ücreti var mı?",
        answer:
          "Hayır. Kapaklı’da da alım ve teslim ücretsizdir. Planlı rota günlerinde kapınıza geliyoruz.",
      },
      {
        question: "Halımın lekesi tamamen çıkar mı?",
        answer:
          "Lekenin türüne ve ne kadar süredir beklediğine bağlıdır. Ön işlem sonrası çoğu leke belirgin şekilde azalır; kalıcı boya lekeleri hakkında alım sırasında bilgi veriyoruz.",
      },
    ],
  },
];

export function getRegionBySlug(slug: string): Region | undefined {
  return regions.find((r) => r.slug === slug);
}

export function getAllRegionSlugs(): string[] {
  return regions.map((r) => r.slug);
}
