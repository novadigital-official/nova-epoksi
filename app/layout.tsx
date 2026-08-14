import type { Metadata, Viewport } from 'next';
import { Inter, Plus_Jakarta_Sans, IBM_Plex_Mono } from 'next/font/google';
import '../style.css';

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  viewportFit: 'cover',
};

const inter = Inter({
  subsets: ['latin', 'latin-ext'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-sans',
  display: 'swap',
});

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ['latin', 'latin-ext'],
  weight: ['600', '700', '800'],
  variable: '--font-heading',
  display: 'swap',
});

const ibmPlexMono = IBM_Plex_Mono({
  subsets: ['latin', 'latin-ext'],
  weight: ['600', '700'],
  variable: '--font-mono',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://antalyaepoksizemin.com.tr'),
  title: 'Antalya Epoksi Zemin Kaplama | Fabrika & Otopark Çözümleri',
  description: 'Antalya geneli fabrika, otopark, depo, otel ve ticari alanlar için profesyonel epoksi zemin kaplama, self-leveling ve saha betonu. Ücretsiz yerinde keşif ve anında m² hesaplama.',
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Antalya Epoksi Zemin Kaplama | Nova Epoksi',
    description: 'Fabrika, depo ve otoparklar için garantili epoksi zemin kaplama çözümleri.',
    url: 'https://antalyaepoksizemin.com.tr',
    siteName: 'Nova Epoksi Antalya',
    locale: 'tr_TR',
    type: 'website',
    images: [
      {
        url: '/images/saha-endustriyel.png',
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
    images: ['/images/saha-endustriyel.png'],
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
      'image': 'https://antalyaepoksizemin.com.tr/images/saha-endustriyel.png',
      'address': {
        '@type': 'PostalAddress',
        'streetAddress': 'Kültür Mahallesi 3856 Sokak No:2 D:1',
        'addressLocality': 'Kepez',
        'addressRegion': 'Antalya',
        'postalCode': '07070',
        'addressCountry': 'TR'
      },
      'geo': {
        '@type': 'GeoCoordinates',
        'latitude': 36.9081,
        'longitude': 30.6558
      },
      'areaServed': ['Döşemealtı OSB', 'Kepez', 'Muratpaşa', 'Konyaaltı', 'Manavgat', 'Alanya'],
      'aggregateRating': {
        '@type': 'AggregateRating',
        'ratingValue': '4.9',
        'reviewCount': '480',
        'bestRating': '5'
      },
      'openingHoursSpecification': {
        '@type': 'OpeningHoursSpecification',
        'dayOfWeek': ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
        'opens': '08:00',
        'closes': '20:00'
      }
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
      className={`${inter.variable} ${plusJakartaSans.variable} ${ibmPlexMono.variable}`}
      suppressHydrationWarning
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="font-sans antialiased" suppressHydrationWarning>{children}</body>
    </html>
  );
}
