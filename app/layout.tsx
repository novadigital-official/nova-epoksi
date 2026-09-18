import type { Metadata, Viewport } from 'next';
import Script from 'next/script';
import { Plus_Jakarta_Sans, JetBrains_Mono } from 'next/font/google';
import '../style.css';

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  viewportFit: 'cover',
};

const jakarta = Plus_Jakarta_Sans({
  subsets: ['latin', 'latin-ext'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-sans',
  display: 'swap',
});

const jetbrains = JetBrains_Mono({
  subsets: ['latin', 'latin-ext'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-mono',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://antalyaepoksizemin.com.tr'),
  title: 'Antalya Epoksi Zemin Kaplama | Fabrika & Endüstriyel Zemin Sistemleri',
  description: 'Antalya OSB ve tüm ilçelerde fabrika, otopark, depo ve oteller için garantili epoksi zemin kaplama, self-leveling ve elmas silim zemin hazırlığı. Ücretsiz yerinde lazerli keşif.',
  alternates: {
    canonical: 'https://antalyaepoksizemin.com.tr',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    title: 'Antalya Epoksi Zemin Kaplama | Nova Epoksi',
    description: 'Fabrika, depo ve otoparklar için yüksek mukavemetli endüstriyel epoksi zemin çözümleri.',
    url: 'https://antalyaepoksizemin.com.tr',
    siteName: 'Nova Epoksi Antalya',
    locale: 'tr_TR',
    type: 'website',
    images: [
      {
        url: '/images/real-factory.jpg',
        width: 1200,
        height: 630,
        alt: 'Antalya Epoksi Zemin Kaplama',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Antalya Epoksi Zemin Kaplama | Nova Epoksi',
    description: 'Antalya fabrika ve otopark epoksi zemin çözümleri.',
    images: ['/images/real-factory.jpg'],
  },
  verification: {
    google: 'google683b96f9e18d1ed7',
  },
  icons: {
    icon: [
      { url: '/favicon.svg', type: 'image/svg+xml' },
      { url: '/favicon.png', type: 'image/png' },
    ],
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'HomeAndConstructionBusiness',
      '@id': 'https://antalyaepoksizemin.com.tr/#business',
      'name': 'Nova Epoksi Antalya Zemin Çözümleri',
      'url': 'https://antalyaepoksizemin.com.tr/',
      'telephone': '+905070871789',
      'priceRange': '₺₺',
      'image': 'https://antalyaepoksizemin.com.tr/images/real-factory.jpg',
      'address': {
        '@type': 'PostalAddress',
        'addressLocality': 'Kepez',
        'addressRegion': 'Antalya',
        'addressCountry': 'TR'
      },
      'areaServed': ['Antalya', 'Döşemealtı OSB', 'Kepez', 'Muratpaşa', 'Konyaaltı', 'Manavgat', 'Alanya'],
      'parentOrganization': {
        '@type': 'Organization',
        'name': 'NOVA GLOBAL',
        'legalName': 'NOVA GLOBAL BİLİŞİM TURİZM ORGANİZASYON DANIŞMANLIK VE LİMİTED ŞİRKETİ'
      }
    },
    {
      '@type': 'Service',
      'name': 'Fabrika Epoksi Zemin Kaplama Antalya',
      'description': 'Antalya OSB ve organize sanayi bölgelerindeki fabrikalar için yüksek dayanıklılıklı endüstriyel epoksi zemin kaplama. Lazerli keşif ve sabit fiyat garantisi.',
      'provider': { '@id': 'https://antalyaepoksizemin.com.tr/#business' },
      'areaServed': 'Antalya Organize Sanayi Bölgesi ve tüm ilçeler',
      'serviceType': 'Endüstriyel Zemin Kaplama'
    },
    {
      '@type': 'Service',
      'name': 'Otopark Epoksi Zemin Kaplama',
      'description': 'Kapalı otopark, AVM ve site otoparkları için dayanıklı, şerit çizgili epoksi zemin sistemleri.',
      'provider': { '@id': 'https://antalyaepoksizemin.com.tr/#business' },
      'areaServed': 'Antalya',
      'serviceType': 'Otopark Zemin Kaplama'
    },
    {
      '@type': 'Service',
      'name': 'Otel ve Depo Epoksi Zemin',
      'description': 'Antalya bölgesindeki oteller ve lojistik depolar için özelleştirilmiş epoksi zemin çözümleri.',
      'provider': { '@id': 'https://antalyaepoksizemin.com.tr/#business' },
      'areaServed': 'Antalya',
      'serviceType': 'Otel ve Depo Zemin Kaplama'
    }
  ]
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="tr"
      className={`${jakarta.variable} ${jetbrains.variable}`}
      suppressHydrationWarning
    >
      <head>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-8SCEK4XXGF"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-8SCEK4XXGF');
          `}
        </Script>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="font-sans antialiased bg-[#F8FAFC] text-slate-900 selection:bg-amber-500 selection:text-slate-950 min-h-screen relative overflow-x-hidden" suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
