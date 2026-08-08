import { Metadata } from 'next';
import LeadWizard from '../../components/LeadWizard';
import BeforeAfterSlider from '../../components/BeforeAfterSlider';
import TeklifHesaplayici from '../../components/TeklifHesaplayici';

export const metadata: Metadata = {
  title: 'Antalya Otel & Lobi Epoksi Zemin Kaplama | Nova Epoksi',
  description: 'Otel lobi, balo salonı ve mutfak alanları için yüksek prestijli metalik ve hijyenik epoksi zemin kaplama. 10 yıl garantili teslimat.',
  keywords: ['otel epoksi zemin antalya', 'antalya otel tadilat zemin', 'lobi metalik epoksi antalya']
};

export default function OtelEpoksiPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white font-sans selection:bg-orange-500 selection:text-slate-950">
      <header className="sticky top-0 z-50 bg-slate-950/90 backdrop-blur-md border-b border-slate-800 py-4 px-4 sm:px-8 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-orange-500 text-slate-950 font-black rounded-xl flex items-center justify-center text-xl shadow-lg shadow-orange-500/20">
            🏨
          </div>
          <div>
            <span className="font-extrabold text-lg block leading-none">Nova<span className="text-orange-500">Epoksi</span></span>
            <span className="text-[10px] text-slate-400 font-bold uppercase">OTEL & TURİZM ZEMİN SİSTEMLERİ</span>
          </div>
        </div>

        <a
          href="https://wa.me/905070871789?text=Merhaba%20Antalya%20otel%20lobi%20epoksi%20fiyat%20teklifi%20almak%20istiyorum"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-emerald-500 hover:bg-emerald-600 text-slate-950 font-black text-xs px-4 py-2.5 rounded-xl flex items-center gap-1.5 shadow-lg shadow-emerald-500/20"
        >
          <span>🟢 WhatsApp'tan Keşif Al</span>
        </a>
      </header>

      <section className="py-12 sm:py-16 px-4 sm:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-black bg-orange-500/10 text-orange-400 border border-orange-500/30 mb-4">
              🏨 TURİZM VE OTEL ALTYAPI UZMANI
            </span>
            <h1 className="text-3xl sm:text-5xl font-black text-white leading-tight mb-4">
              Antalya Otel Lobi & Restoran <span className="text-orange-500">Metalik Epoksi</span> Zemin Kaplama
            </h1>
            <p className="text-slate-300 text-base sm:text-lg mb-6 leading-relaxed">
              Otel lobileri, balo salonları, spa alanları ve endüstriyel otel mutfakları için yüksek estetikli, mermer efektli metalik epoksi ve hijyenik kaplama çözümleri.
            </p>

            <div className="grid grid-cols-2 gap-4 mb-8">
              <div className="bg-slate-900 border border-slate-800 p-4 rounded-2xl">
                <div className="text-2xl font-black text-orange-500">450+ m²</div>
                <div className="text-xs text-slate-400 font-bold">Lara Otel Lobisi Referansı</div>
              </div>
              <div className="bg-slate-900 border border-slate-800 p-4 rounded-2xl">
                <div className="text-2xl font-black text-emerald-400">Komisyonsuz</div>
                <div className="text-xs text-slate-400 font-bold">Doğrudan Üretici Uygulama</div>
              </div>
            </div>
          </div>

          <div>
            <LeadWizard defaultSource="META_ADS" />
          </div>
        </div>
      </section>

      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-t border-slate-900">
        <TeklifHesaplayici />
      </section>

      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-t border-slate-900">
        <BeforeAfterSlider />
      </section>
    </main>
  );
}
