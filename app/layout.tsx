import type { Metadata } from 'next';
import { Inter, Plus_Jakarta_Sans, IBM_Plex_Mono } from 'next/font/google';
import '../style.css';

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
  title: 'Antalya Epoksi Zemin Kaplama | Fabrika, Otopark & Zemin Çözümleri — Nova Epoksi',
  description: 'Antalya geneli fabrika, otopark, depo, otel ve ticari alanlar için profesyonel epoksi zemin kaplama, self-leveling ve saha betonu. Ücretsiz yerinde keşif ve anında m² hesaplama.',
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Antalya Epoksi Zemin Kaplama | Nova Epoksi',
    description: 'Fabrika, depo ve otoparklar için garantili epoksi zemin kaplama çözümleri.',
    url: 'https://antalyaepoksizemin.com.tr',
    type: 'website',
  },
  icons: {
    icon: [
      { url: '/favicon.svg', type: 'image/svg+xml' },
      { url: '/favicon.png', type: 'image/png' },
    ],
  },
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
      <body className="font-sans antialiased" suppressHydrationWarning>{children}</body>
    </html>
  );
}
