import { Metadata } from 'next';
import LeadWizard from '../../components/LeadWizard';
import BeforeAfterSlider from '../../components/BeforeAfterSlider';

export const metadata: Metadata = {
  title: 'Epoksi Zemin Kaplama Antalya | Nova Epoksi',
  description: 'Antalya epoksi zemin kaplama, fabrika zemin kaplamaları, garaj epoksi ve otopark epoksi çözümleri. 10 yıl garantili teslimat.',
  keywords: ['epoksi zemin kaplama antalya', 'antalya epoksi', 'garaj epoksi antalya', 'fabrika epoksi antalya'],
  openGraph: {
    title: 'Epoksi Zemin Kaplama Antalya | Nova Epoksi',
    description: 'Antalya\'nın Profesyonel Epoksi Zemin Çözümleri. Ücretsiz Keşif Alın.',
    type: 'website'
  }
};

export default function AntalyaSEOPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white font-sans">
      {/* JSON-LD LocalBusiness & Service Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'LocalBusiness',
            name: 'Nova Epoksi Zemin Kaplama Antalya',
            image: 'https://nova-epoksi.vercel.app/images/hero-epoksi.jpg',
            telephone: '+905070871789',
            address: {
              '@type': 'PostalAddress',
              addressLocality: 'Antalya',
              addressRegion: 'Antalya',
              addressCountry: 'TR'
            },
            areaServed: ['Muratpaşa', 'Kepez', 'Konyaaltı', 'Döşemealtı', 'Alanya', 'Manavgat'],
            priceRange: '₺₺₺'
          })
        }}
      />

      <header className="sticky top-0 z-50 bg-slate-950/90 backdrop-blur-md border-b border-slate-800 py-4 px-4 sm:px-8 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-orange-500 text-slate-950 font-black rounded-xl flex items-center justify-center text-xl shadow-lg shadow-orange-500/20">
            E
          </div>
          <div>
            <span className="font-extrabold text-lg block leading-none">Nova<span className="text-orange-500">Epoksi</span></span>
            <span className="text-[10px] text-slate-400 font-bold">ANTALYA BÖLGE MÜDÜRLÜĞÜ</span>
          </div>
        </div>

        <a
          href="https://wa.me/905070871789?text=Merhaba%20Antalya%20epoksi%20fiyat%20teklifi%20almak%20istiyorum"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-emerald-500 hover:bg-emerald-600 text-slate-950 font-black text-xs px-4 py-2.5 rounded-xl flex items-center gap-1.5"
        >
          <span>💬 WhatsApp Keşif İste</span>
        </a>
      </header>

      <section className="py-12 sm:py-16 px-4 sm:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-black bg-orange-500/10 text-orange-400 border border-orange-500/30 mb-4">
              📍 ANTALYA EPOKSİ ZEMİN KAPLAMA UZMANI
            </span>
            <h1 className="text-3xl sm:text-5xl font-black text-white leading-tight mb-4">
              Epoksi Zemin Kaplama <span className="text-orange-500">Antalya</span>
            </h1>
            <p className="text-slate-300 text-base sm:text-lg mb-6 leading-relaxed">
              Muratpaşa, Kepez, Konyaaltı, Döşemealtı ve tüm Antalya genelinde fabrika, depo, otopark ve garaj zeminlerinizi 10 yıl garantili epoksi sistemleriyle kaplıyoruz.
            </p>
          </div>

          <div>
            <LeadWizard defaultSource="ORGANIC_SEO" />
          </div>
        </div>
      </section>

      <section className="py-12 px-4 sm:px-8 max-w-7xl mx-auto">
        <BeforeAfterSlider />
      </section>
    </main>
  );
}
