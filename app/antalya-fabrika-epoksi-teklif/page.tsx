import { Metadata } from 'next';
import LeadWizard from '../../components/LeadWizard';
import BeforeAfterSlider from '../../components/BeforeAfterSlider';
import TrustBadges from '../../components/TrustBadges';

export const metadata: Metadata = {
  title: 'Antalya Fabrika Epoksi Zemin Kaplama Fiyatları & Keşif',
  description: 'Döşemealtı OSB ve Antalya genelinde fabrika zemin kaplama. 10 yıl garantili, aşınmaz multilayer ve self leveling epoksi.',
  robots: 'noindex, nofollow'
};

export default function FabrikaAdsLandingPage() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-900 font-sans selection:bg-blue-600 selection:text-white">
      {/* Sticky High-Converting Header */}
      <header className="sticky top-0 z-50 bg-slate-900 text-white py-4 px-4 sm:px-8 flex items-center justify-between border-b border-slate-800">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-blue-600 text-white font-black rounded-xl flex items-center justify-center text-xl shadow-md">
            🏭
          </div>
          <div>
            <span className="font-extrabold text-lg block leading-none">Nova<span className="text-blue-400">Epoksi</span></span>
            <span className="text-[10px] text-slate-400 font-bold uppercase">ANTALYA FABRİKA ZEMİN TEKLİF HATTI</span>
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
            href="https://wa.me/905070871789?text=Merhaba%20Antalya%20fabrika%20epoksi%20fiyat%20teklifi%20almak%20istiyorum"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-emerald-500 hover:bg-emerald-600 text-slate-950 font-black text-xs px-4 py-2.5 rounded-xl flex items-center gap-1.5 shadow-md"
          >
            <span>🟢 WhatsApp'tan Keşif İste</span>
          </a>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-12 sm:py-16 px-4 sm:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-black bg-blue-100 text-blue-800 border border-blue-200 mb-4">
              🏭 ANTALYA OSB FABRİKA TEKLİF FUNNELI
            </span>
            <h1 className="text-3xl sm:text-5xl font-black text-slate-900 leading-tight mb-4">
              Antalya Fabrika & Depo <span className="text-blue-600">Ağır Yük Epoksi</span> Zemin Kaplama
            </h1>
            <p className="text-slate-600 text-base sm:text-lg mb-6 leading-relaxed">
              Forklift trafiğine, ağır tonajlı makinelere ve kimyasallara %100 dayanıklı solventsiz multilayer epoksi kaplama altyapısı.
            </p>

            <div className="grid grid-cols-2 gap-4 mb-8">
              <div className="bg-white border border-slate-200 p-4 rounded-2xl shadow-sm">
                <div className="text-2xl font-black text-blue-600">2.500 m²</div>
                <div className="text-xs text-slate-500 font-bold">Ülker Fabrikası Saha Referansı</div>
              </div>
              <div className="bg-white border border-slate-200 p-4 rounded-2xl shadow-sm">
                <div className="text-2xl font-black text-emerald-600">10 Yıl</div>
                <div className="text-xs text-slate-500 font-bold">Yazılı Malzeme & İşçilik Garantisi</div>
              </div>
            </div>
          </div>

          <div>
            <LeadWizard defaultSource="GOOGLE_ADS" />
          </div>
        </div>
      </section>

      {/* Embedded Real User Image Showcase */}
      <section className="py-12 px-4 sm:px-8 max-w-7xl mx-auto">
        <div className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-8 shadow-sm">
          <h2 className="text-2xl font-black text-slate-900 mb-4">Saha Canlı Uygulama Görseli (Döşemealtı OSB)</h2>
          <div className="h-[380px] rounded-2xl overflow-hidden border border-slate-200 shadow-md">
            <img src="/images/saha-endustriyel.png" alt="Ülker Fabrikası Epoksi" className="w-full h-full object-cover" />
          </div>
        </div>
      </section>

      {/* Before / After */}
      <section className="py-12 px-4 sm:px-8 max-w-7xl mx-auto">
        <BeforeAfterSlider />
      </section>

      {/* Trust Badges */}
      <section className="py-12 px-4 sm:px-8 max-w-7xl mx-auto">
        <TrustBadges />
      </section>
    </main>
  );
}
