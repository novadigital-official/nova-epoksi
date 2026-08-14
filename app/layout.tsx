import type { Metadata } from 'next';
import '../style.css';

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
    <html lang="tr" suppressHydrationWarning>
      <body suppressHydrationWarning>{children}</body>
    </html>
  );
}
