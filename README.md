# VİVA HALI YIKAMA

Premium kurumsal web sitesi — Next.js App Router, Tailwind CSS, Framer Motion.

## Geliştirme

```bash
npm install
cp .env.example .env.local
npm run dev
```

Tarayıcı: [http://localhost:3000](http://localhost:3000)

## Yapı

- `src/app` — sayfalar (App Router)
- `src/components` — UI ve bölüm bileşenleri
- `src/content` — TR içerik (`site.ts`, hizmetler, SSS)
- `src/lib` — yardımcılar (WhatsApp, constants, utils)
- `public/` — logo, video, görseller

## Yayın öncesi (Deploy checklist)

1. `npm run lint` ve `npm run build` temiz geçsin
2. `.env.example` içindeki `NEXT_PUBLIC_SITE_URL` canlı domain olsun
3. Telefon / WhatsApp / adres / Instagram `src/content/site.ts` içinde doğru olsun
4. GitHub’a push
5. [Vercel](https://vercel.com) ile import → Production deploy
6. Domain DNS’i Vercel’e bağla (A/CNAME)
7. Google Search Console’a `sitemap.xml` ekle: `/sitemap.xml`

## Vercel ile deploy

```bash
npx vercel login
npx vercel
npx vercel --prod
```

Vercel dashboard’da Environment Variable ekleyin:

- `NEXT_PUBLIC_SITE_URL` = `https://vivahaliyikama.com` (veya kendi domaininiz)
