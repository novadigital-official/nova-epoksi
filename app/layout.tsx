import type { Metadata } from 'next';
import '../style.css';

export const metadata: Metadata = {
  title: 'Nova Epoksi Antalya — Dayanıklı Zemin Kaplama Çözümleri',
  description: 'Fabrika, depo, otopark ve otel alanları için dayanıklı epoksi zemin kaplama. Ücretsiz yerinde keşif ve şeffaf fiyatlandırma.',
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
