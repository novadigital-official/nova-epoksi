import { Metadata } from 'next';
import LeadWizard from '../../components/LeadWizard';
import BeforeAfterSlider from '../../components/BeforeAfterSlider';
import TeklifHesaplayici from '../../components/TeklifHesaplayici';

export const metadata: Metadata = {
  title: 'Antalya Villa Garaj Epoksi Zemin Kaplama | Nova Epoksi',
  description: 'Villa garajları ve kapalı otoparklar için estetik, yağ tutmaz antrasit epoksi kaplama çözümleri. 10 yıl garantili teslimat.',
  keywords: ['garaj epoksi antalya', 'villa garaj zemin kaplama antalya', 'antrasit epoksi garaj']
};

export default function GarajEpoksiPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white font-sans selection:bg-orange-500 selection:text-slate-950">
      <header className="sticky top-0 z-50 bg-slate-950/90 backdrop-blur-md border-b border-slate-800 py-4 px-4 sm:px-8 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-orange-500 text-slate-950 font-black rounded-xl flex items-center justify-center text-xl shadow-lg shadow-orange-500/20">
            🚗
          </div>
          <div>
            <span className="font-extrabold text-lg block leading-none">Nova<span className="text-orange-500">Epoksi</span></span>
            <span className="text-[10px] text-slate-400 font-bold uppercase">GARAJA ÖZEL LÜKS ZEMİN SİSTEMLERİ</span>
          </div>
        </div>

        <a
          href="https://wa.me/905070871789?text=Merhaba%20Antalya%20villa%20garaj%20epoksi%20fiyat%20teklifi%20almak%20istiyorum"
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
              🚗 VİLLA GARAJLARI İÇİN ELİT ESTETİK
            </span>
            <h1 className="text-3xl sm:text-5xl font-black text-white leading-tight mb-4">
              Antalya Villa & Konut <span className="text-orange-500">Garaj Epoksi</span> Zemin Kaplama
            </h1>
            <p className="text-slate-300 text-base sm:text-lg mb-6 leading-relaxed">
              Sıcak tekerlek yapışmasına, motor yağı lekesine dayanıklı, kaymaz antrasit ve pullu flake garaj epoksisi.
            </p>
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
