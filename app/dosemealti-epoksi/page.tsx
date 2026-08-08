import { Metadata } from 'next';
import LeadWizard from '../../components/LeadWizard';
import BeforeAfterSlider from '../../components/BeforeAfterSlider';
import TrustBadges from '../../components/TrustBadges';

export const metadata: Metadata = {
  title: 'Döşemealtı Epoksi Zemin Kaplama & OSB Fabrika Zemini | Nova Epoksi',
  description: 'Döşemealtı OSB ve Antalya Döşemealtı fabrika, depo ve garaj epoksi zemin kaplama. 10 yıl garantili teslimat.',
  keywords: ['döşemealtı epoksi', 'döşemealtı osb fabrika zemin kaplama', 'antalya döşemealtı epoksi']
};

export default function DosemealtiEpoksiPage() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-900 font-sans selection:bg-blue-600 selection:text-white">
      <header className="sticky top-0 z-50 bg-slate-900 text-white py-4 px-4 sm:px-8 flex items-center justify-between border-b border-slate-800">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-blue-600 text-white font-black rounded-xl flex items-center justify-center text-xl shadow-md">
            📍
          </div>
          <div>
            <span className="font-extrabold text-lg block leading-none">Nova<span className="text-blue-400">Epoksi</span></span>
            <span className="text-[10px] text-slate-400 font-bold uppercase">DÖŞEMEALTI & OSB BÖLGE YÖNETİMİ</span>
          </div>
        </div>

        <a
          href="https://wa.me/905070871789?text=Merhaba%20Döşemealtı%20epoksi%20fiyat%20teklifi%20almak%20istiyorum"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-emerald-500 hover:bg-emerald-600 text-slate-950 font-black text-xs px-4 py-2.5 rounded-xl flex items-center gap-1.5 shadow-md"
        >
          <span>🟢 WhatsApp'tan Keşif Al</span>
        </a>
      </header>

      <section className="py-12 sm:py-16 px-4 sm:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-black bg-blue-100 text-blue-800 border border-blue-200 mb-4">
              📍 DÖŞEMEALTI OSB BÖLGE MÜDÜRLÜĞÜ
            </span>
            <h1 className="text-3xl sm:text-5xl font-black text-slate-900 leading-tight mb-4">
              Döşemealtı Epoksi Zemin Kaplama <span className="text-blue-600">Antalya OSB</span>
            </h1>
            <p className="text-slate-600 text-base sm:text-lg mb-6 leading-relaxed">
              Döşemealtı Organize Sanayi Bölgesi ve çevre tesisler için ağır yük multilayer epoksi, astar ve saha betonu çözümleri.
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

      <section className="py-12 px-4 sm:px-8 max-w-7xl mx-auto">
        <TrustBadges />
      </section>
    </main>
  );
}
