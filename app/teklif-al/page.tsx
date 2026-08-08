import { Metadata } from 'next';
import LeadWizard from '../../components/LeadWizard';
import BeforeAfterSlider from '../../components/BeforeAfterSlider';

export const metadata: Metadata = {
  title: 'Antalya Epoksi Zemin Kaplama Fiyatları | Ücretsiz Keşif Al',
  description: 'Antalya fabrika, depo ve garaj epoksi zemin kaplama fiyatları. 15 dakikada keşif talebi oluşturun, 10 yıl garantili teslimat.',
  robots: 'noindex, nofollow' // Google Ads ad-group landing page
};

export default function TeklifAlPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white font-sans">
      {/* Sticky High-Converting Header */}
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

        <div className="flex items-center gap-3">
          <a
            href="tel:+905070871789"
            className="hidden sm:inline-flex items-center gap-2 bg-slate-800 hover:bg-slate-700 text-white text-xs font-bold px-4 py-2.5 rounded-xl border border-slate-700"
          >
            📞 0507 087 17 89
          </a>
          <a
            href="https://wa.me/905070871789?text=Merhaba%20Antalya%20epoksi%20fiyat%20teklifi%20almak%20istiyorum"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-emerald-500 hover:bg-emerald-600 text-slate-950 font-black text-xs px-4 py-2.5 rounded-xl flex items-center gap-1.5 shadow-lg shadow-emerald-500/20"
          >
            <span>💬 WhatsApp</span>
          </a>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-12 sm:py-16 px-4 sm:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-black bg-orange-500/10 text-orange-400 border border-orange-500/30 mb-4">
              🔥 ANTALYA GENELİ 15 DAKİKADA KEŞİF
            </span>
            <h1 className="text-3xl sm:text-5xl font-black text-white leading-tight mb-4">
              Antalya'da <span className="text-orange-500">Dayanıklı & Estetik</span> Epoksi Zemin Kaplama
            </h1>
            <p className="text-slate-300 text-base sm:text-lg mb-6 leading-relaxed">
              Fabrika, depo, garaj ve otopark alanlarınız için 10 yıl garantili, aşınmaz, tozumasız endüstriyel zemin dönüşümü.
            </p>

            <div className="grid grid-cols-2 gap-4 mb-8">
              <div className="bg-slate-900 border border-slate-800 p-4 rounded-2xl">
                <div className="text-2xl font-black text-orange-500">10 Yıl</div>
                <div className="text-xs text-slate-400 font-bold">Malzeme & İşçilik Garantisi</div>
              </div>
              <div className="bg-slate-900 border border-slate-800 p-4 rounded-2xl">
                <div className="text-2xl font-black text-emerald-400">%100</div>
                <div className="text-xs text-slate-400 font-bold">Aşınmaz & Tozumasız Yüzey</div>
              </div>
            </div>
          </div>

          <div>
            <LeadWizard defaultSource="GOOGLE_ADS" />
          </div>
        </div>
      </section>

      {/* Before / After Showcase */}
      <section className="py-12 px-4 sm:px-8 max-w-7xl mx-auto">
        <BeforeAfterSlider />
      </section>
    </main>
  );
}
