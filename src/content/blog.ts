export type BlogSection = {
  heading: string;
  paragraphs: string[];
  list?: string[];
};

export type BlogPost = {
  slug: string;
  title: string;
  description: string;
  category: string;
  publishedAt: string;
  readMinutes: number;
  sections: BlogSection[];
  relatedServices: string[];
};

export const blogPosts: BlogPost[] = [
  {
    slug: "corlu-hali-yikama-rehberi",
    title: "Çorlu’da halı yıkama: Firma seçerken bilmeniz gerekenler",
    description:
      "Çorlu’da halı yıkama firması seçerken nelere dikkat etmelisiniz? Tesis yıkama, servis, teslim süresi ve hijyen hakkında pratik rehber.",
    category: "Rehber",
    publishedAt: "2026-10-01",
    readMinutes: 5,
    relatedServices: ["hali-yikama", "koltuk-yikama"],
    sections: [
      {
        heading: "Neden profesyonel halı yıkama?",
        paragraphs: [
          "Evde süpürge ile alınan toz, halının yalnızca yüzeyindeki kirdir. Halının dip kısmında biriken ince toz, akar, bakteri ve koku kaynakları ancak bol su, uygun şampuan ve güçlü sıkma–kurutma ile uzaklaştırılabilir.",
          "Çorlu gibi sanayinin yoğun olduğu bölgelerde dış ortamdan eve taşınan ince toz miktarı da yüksektir. Bu nedenle halıların yılda en az bir kez profesyonel olarak yıkanması önerilir.",
        ],
      },
      {
        heading: "Halı yıkama firması seçerken dikkat edilecekler",
        paragraphs: [
          "Firma seçerken yalnızca fiyata bakmak çoğu zaman yanıltıcıdır. Aşağıdaki maddeler, halınızın güvende olup olmayacağı hakkında çok daha fazla bilgi verir:",
        ],
        list: [
          "Kendi tesisi var mı, yoksa halılar başka bir yere mi gönderiliyor?",
          "Halı türüne göre (yün, shaggy, makine, el dokuma) farklı program uygulanıyor mu?",
          "Kurutma kontrollü bir odada mı, yoksa açık havada mı yapılıyor?",
          "Alım ve teslim ücretsiz mi, teslim günü net olarak söyleniyor mu?",
          "Google’da gerçek müşteri yorumları ve açık adres bilgisi var mı?",
        ],
      },
      {
        heading: "Çorlu’da servis ve teslim süresi",
        paragraphs: [
          "Tesisi Çorlu’ya yakın olan bir firma, servis rotalarını daha kısa tuttuğu için alım ve teslim günlerinde daha esnek olabilir. Viva Halı Yıkama’nın tesisi Ergene’de, Çorlu merkezine yalnızca birkaç dakika mesafededir.",
          "Teslim süresi halının kalınlığına, türüne ve hava koşullarına göre değişir. Güvenilir bir firma, alım sırasında size gerçekçi bir teslim günü verir ve bu güne sadık kalır.",
        ],
      },
      {
        heading: "Sonuç",
        paragraphs: [
          "Çorlu’da halı yıkatırken kendi tesisi olan, halı türüne göre yıkama yapan ve kontrollü kurutma uygulayan bir firmayı tercih etmek halınızın ömrünü uzatır. Sorularınız için bizi arayabilir ya da WhatsApp’tan yazabilirsiniz.",
        ],
      },
    ],
  },
  {
    slug: "hali-ne-siklikla-yikanmali",
    title: "Halı ne sıklıkla yıkanmalı? Ev tipine göre öneriler",
    description:
      "Halılar kaç ayda bir yıkanmalı? Çocuklu, evcil hayvanlı ve alerjili evler için halı yıkama sıklığı önerileri.",
    category: "Bakım",
    publishedAt: "2026-09-24",
    readMinutes: 4,
    relatedServices: ["hali-yikama"],
    sections: [
      {
        heading: "Genel kural: yılda en az bir kez",
        paragraphs: [
          "Standart kullanımda olan bir ev halısının yılda en az bir kez profesyonel olarak yıkanması önerilir. Ancak evdeki kişi sayısı, çocuk ve evcil hayvan olup olmaması bu süreyi kısaltabilir.",
        ],
      },
      {
        heading: "Ev tipine göre yıkama sıklığı",
        paragraphs: ["Aşağıdaki süreler genel bir fikir vermesi içindir:"],
        list: [
          "Yetişkinlerin yaşadığı, az trafikli evler: 12 ayda bir",
          "Çocuklu evler: 6–8 ayda bir",
          "Kedi veya köpek bulunan evler: 4–6 ayda bir",
          "Alerji veya astım hastası olan evler: 4–6 ayda bir",
          "Giriş ve koridor halıları: diğer halılardan daha sık",
        ],
      },
      {
        heading: "Halınızın yıkanma zamanı geldiğini nasıl anlarsınız?",
        paragraphs: [
          "Halının renginin matlaşması, süpürmeye rağmen kötü kokunun geçmemesi, üzerine basıldığında toz kalkması ve evde alerji belirtilerinin artması halının yıkanması gerektiğine işaret eder.",
        ],
      },
      {
        heading: "Yıkamalar arasında bakım",
        paragraphs: [
          "Haftada en az iki kez süpürmek, dökülen sıvılara hemen müdahale etmek ve halıyı ara ara ters çevirip havalandırmak, iki yıkama arasındaki süreyi uzatır ve halının ömrünü korur.",
        ],
      },
    ],
  },
  {
    slug: "halidaki-lekeler-ilk-mudahale",
    title: "Halıdaki lekelere ilk müdahale: Yapılması ve yapılmaması gerekenler",
    description:
      "Çay, kahve, şarap ve evcil hayvan lekelerine evde doğru ilk müdahale nasıl yapılır? Halıya zarar vermeden leke çıkarma ipuçları.",
    category: "Leke",
    publishedAt: "2026-09-15",
    readMinutes: 5,
    relatedServices: ["hali-yikama", "koltuk-yikama"],
    sections: [
      {
        heading: "İlk dakikalar her şeydir",
        paragraphs: [
          "Leke ne kadar kısa sürede müdahale görürse çıkma ihtimali o kadar yüksektir. Bekleyen leke liflerin içine işler ve kalıcı hale gelebilir.",
        ],
      },
      {
        heading: "Doğru ilk müdahale",
        paragraphs: ["Çoğu sıvı leke için şu adımlar güvenlidir:"],
        list: [
          "Fazla sıvıyı temiz, beyaz bir bezle bastırarak emdirin; ovalamayın.",
          "Lekenin dışından içine doğru çalışın, böylece leke yayılmaz.",
          "Ilık suyla nemlendirip tekrar bastırarak kurulayın.",
          "Halının görünmeyen bir köşesinde test etmeden kimyasal kullanmayın.",
        ],
      },
      {
        heading: "Kesinlikle yapmayın",
        paragraphs: [
          "Çamaşır suyu ve kireç sökücü gibi güçlü kimyasallar halının rengini kalıcı olarak açabilir. Sıcak su ise özellikle protein içerikli lekeleri (süt, kan, yumurta) liflere sabitler.",
        ],
        list: [
          "Lekeyi sert fırçayla ovalamak",
          "Çamaşır suyu veya klor içeren ürün kullanmak",
          "Yün halıda sıcak su veya saç kurutma makinesi kullanmak",
        ],
      },
      {
        heading: "Ne zaman profesyonel destek almalı?",
        paragraphs: [
          "Şarap, boya, mürekkep ve evcil hayvan idrarı gibi lekeler çoğu zaman evde tamamen çıkarılamaz. Bu durumda halıyı profesyonel ön leke işlemi ve tam yıkama için bir halı yıkama tesisine vermek en sağlıklı çözümdür.",
        ],
      },
    ],
  },
  {
    slug: "koltuk-yikama-yerinde-temizlik",
    title: "Koltuk yıkama: Yerinde temizlik nasıl yapılır, ne kadar sürede kurur?",
    description:
      "Koltuk ve kanepe yıkama nasıl yapılır, kuruma süresi ne kadardır? Kumaş tipine göre yerinde koltuk temizliği hakkında bilmeniz gerekenler.",
    category: "Koltuk",
    publishedAt: "2026-09-05",
    readMinutes: 4,
    relatedServices: ["koltuk-yikama"],
    sections: [
      {
        heading: "Yerinde koltuk yıkama nedir?",
        paragraphs: [
          "Koltuk yıkama, ekibin evinize gelerek özel makinelerle kumaşa şampuanlı su püskürtüp aynı anda kirli suyu vakumla çekmesi işlemidir. Bu yöntem kumaşın dibindeki toz ve kiri yüzeye çıkararak uzaklaştırır.",
        ],
      },
      {
        heading: "Kumaş tipi neden önemli?",
        paragraphs: [
          "Kadife, keten, mikrofiber ve deri gibi farklı yüzeyler farklı ürün ve su miktarı gerektirir. Yanlış ürün kumaşta renk açılması veya çekme yapabilir. Bu nedenle temizlikten önce kumaş tipi mutlaka kontrol edilmelidir.",
        ],
      },
      {
        heading: "Kuruma süresi",
        paragraphs: [
          "Kuruma süresi kumaşa, oda sıcaklığına ve havalandırmaya göre değişir. Genellikle birkaç saat ile bir gün arasında kurur. Pencereleri açmak ve ortamı havalandırmak süreci hızlandırır.",
        ],
        list: [
          "Kuruyana kadar koltuğa oturmamaya özen gösterin.",
          "Islakken üzerine renkli tekstil ürünleri koymayın.",
          "Ortamı havalandırın, doğrudan ısıtıcıya maruz bırakmayın.",
        ],
      },
      {
        heading: "Ne sıklıkla yıkatılmalı?",
        paragraphs: [
          "Günlük kullanılan koltukların yılda bir kez, çocuklu ve evcil hayvanlı evlerde ise yılda iki kez yıkatılması önerilir.",
        ],
      },
    ],
  },
  {
    slug: "yun-ve-el-dokuma-hali-bakimi",
    title: "Yün ve el dokuma halı bakımı: Değerli halınızı nasıl korursunuz?",
    description:
      "Yün, ipek ve el dokuma halıların yıkanması ve bakımında dikkat edilmesi gerekenler. Renk akması ve çekmeyi önlemenin yolları.",
    category: "Bakım",
    publishedAt: "2026-08-27",
    readMinutes: 5,
    relatedServices: ["el-dokuma-antika-hali", "hali-yikama"],
    sections: [
      {
        heading: "El dokuma halılar neden özel ilgi ister?",
        paragraphs: [
          "Yün ve ipek halılar doğal liflerden oluşur ve çoğu zaman doğal boyalarla renklendirilir. Yüksek ısı, yanlış kimyasal veya uzun süre ıslak kalma; renk akması, çekme ve lif hasarına neden olabilir.",
        ],
      },
      {
        heading: "Evde günlük bakım",
        paragraphs: ["Değerli halılarınızın ömrünü uzatmak için:"],
        list: [
          "Süpürgeyi tüy yönünde ve düşük emiş gücünde kullanın.",
          "Halıyı doğrudan güneş ışığından koruyun, solmayı önler.",
          "Yılda birkaç kez yönünü çevirerek aşınmayı eşitleyin.",
          "Ağır mobilyaların altına keçe koruyucu koyun.",
        ],
      },
      {
        heading: "Profesyonel yıkamada nelere dikkat edilmeli?",
        paragraphs: [
          "El dokuma halılar makine halısıyla aynı programda yıkanmamalıdır. Renk testi, düşük pH’lı şampuan, elle yıkama ve kontrollü kurutma uygulanması gerekir. Saçaklar ayrıca temizlenmeli ve kenarlar korunmalıdır.",
        ],
      },
      {
        heading: "Saklama",
        paragraphs: [
          "Halıyı uzun süre kaldıracaksanız önce yıkatın, tamamen kuruduğundan emin olun ve rulo halinde, nefes alan bir kumaşa sararak saklayın. Naylon poşet nem tutar ve küflenmeye yol açabilir.",
        ],
      },
    ],
  },
  {
    slug: "hali-hijyeni-ve-alerji",
    title: "Halı hijyeni ve alerji: Evde sağlıklı bir ortam için",
    description:
      "Halılarda biriken toz akarları, alerjenler ve bakteriler sağlığı nasıl etkiler? Düzenli hijyenik halı yıkamanın faydaları.",
    category: "Hijyen",
    publishedAt: "2026-08-18",
    readMinutes: 4,
    relatedServices: ["hali-yikama", "yorgan-battaniye"],
    sections: [
      {
        heading: "Halı bir filtre gibi çalışır",
        paragraphs: [
          "Halılar havadaki toz, polen ve diğer partikülleri tutar. Bu, havayı kısmen temiz tutsa da halı yıkanmadığında biriken alerjenler her adımda yeniden havaya karışır.",
        ],
      },
      {
        heading: "Halıda neler birikir?",
        paragraphs: ["Uzun süre yıkanmayan halılarda şunlar birikebilir:"],
        list: [
          "Toz akarları ve dışkıları",
          "Polen ve dış ortam tozu",
          "Evcil hayvan tüyü ve döküntüleri",
          "Yemek artıkları ve bakteriler",
        ],
      },
      {
        heading: "Hijyenik yıkamanın faydaları",
        paragraphs: [
          "Bol suyla yapılan derin yıkama ve tam kurutma, halıdaki alerjen yükünü belirgin şekilde azaltır. Özellikle çocukların yerde oynadığı evlerde düzenli yıkama daha sağlıklı bir ortam sağlar.",
        ],
      },
      {
        heading: "Yatak tekstili de unutulmamalı",
        paragraphs: [
          "Yorgan ve battaniyeler de akarların yoğun olduğu ürünlerdir. Halılarla birlikte mevsim geçişlerinde yıkatmak evin genel hijyenine katkı sağlar.",
        ],
      },
    ],
  },
];

export function getPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find((p) => p.slug === slug);
}

export function getAllPostSlugs(): string[] {
  return blogPosts.map((p) => p.slug);
}

export function getSortedPosts(): BlogPost[] {
  return [...blogPosts].sort((a, b) => b.publishedAt.localeCompare(a.publishedAt));
}

export function formatPostDate(iso: string): string {
  return new Intl.DateTimeFormat("tr-TR", {
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(new Date(iso));
}
