import { Metadata } from 'next';
import LeadWizard from '../../components/LeadWizard';
import BeforeAfterSlider from '../../components/BeforeAfterSlider';
import TrustBadges from '../../components/TrustBadges';

export const metadata: Metadata = {
  title: 'Antalya Otopark Zemin Kaplama & Kaymaz Rampa Sistemleri — Nova Zemin',
  description: 'Antalya site, rezidans, AVM ve oteller için kapalı otopark epoksi kaplama, kaymaz kuvars rampa sistemleri, otopark çizgisi ve yönlendirme boyaları.',
  keywords: [
    'antalya otopark epoksi',
    'otopark rampa kaymaz kaplama',
    'kapalı otopark zemin kaplama antalya',
    'otopark çizgi boyası antalya',
    'avm otopark zemin sistemleri'
  ],
  alternates: {
    canonical: 'https://www.antalyaepoksizemin.com.tr/antalya-otopark-zemini'
  }
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  'name': 'Antalya Otopark ve Rampa Zemin Kaplama',
  'provider': {
    '@type': 'HomeAndConstructionBusiness',
    '@id': 'https://www.antalyaepoksizemin.com.tr/#business',
    'name': 'Nova Zemin & Epoksi Sistemleri',
    'telephone': '+905070871789'
  },
  'areaServed': 'Antalya',
  'serviceType': 'Otopark Zemin ve Rampa Kaplama Sistemleri',
  'description': 'Site ve ticari binalar için yüksek aşınma dirençli kapalı otopark epoksisi, kaymaz rampa sistemleri ve yol çizgisi uygulamaları.'
};

export default function AntalyaOtoparkZeminiPage() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-900 font-sans selection:bg-amber-500 selection:text-slate-950">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      {/* HEADER */}
      <header className="sticky top-0 z-50 bg-slate-950 text-white py-4 px-4 sm:px-8 flex items-center justify-between border-b border-slate-800">
        <a href="/" className="flex items-center gap-3">
          <div className="w-10 h-10 bg-blue-600 text-white font-black rounded-xl flex items-center justify-center text-xl shadow-md">
            🅿️
          </div>
          <div>
            <span className="font-extrabold text-lg block leading-none">
              Nova<span className="text-amber-400">Zemin</span>
            </span>
            <span className="text-[10px] text-slate-400 font-mono uppercase tracking-wider">
              OTOPARK & RAMPA ZEMİN MÜHENDİSLİĞİ
            </span>
          </div>
        </a>

        <div className="flex items-center gap-3">
          <a
            href="tel:05070871789"
            className="hidden sm:flex text-xs font-mono font-bold bg-slate-900 border border-slate-800 px-3.5 py-2 rounded-xl text-slate-300 hover:text-white"
          >
            📞 0507 087 17 89
          </a>
          <a
            href="https://wa.me/905070871789?text=Merhaba,%20Antalya%20otopark%20zemin%20kaplama%20fiyat%20teklifi%20almak%20istiyorum."
            target="_blank"
            rel="noopener noreferrer"
            className="bg-emerald-500 hover:bg-emerald-600 text-slate-950 font-black text-xs px-4 py-2.5 rounded-xl flex items-center gap-1.5 shadow-md transition-all"
          >
            <span>🟢 WhatsApp Teklifi Al</span>
          </a>
        </div>
      </header>

      {/* BREADCRUMB */}
      <div className="bg-slate-100 border-b border-slate-200 py-2.5 px-4 sm:px-8 text-xs text-slate-500">
        <div className="max-w-7xl mx-auto flex items-center gap-2">
          <a href="/" className="hover:text-amber-600">Ana Sayfa</a>
          <span>›</span>
          <span className="text-slate-800 font-semibold">Antalya Otopark & Rampa Zemin Kaplama</span>
        </div>
      </div>

      {/* HERO SECTION */}
      <section className="py-12 sm:py-16 px-4 sm:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-black bg-blue-100 text-blue-900 border border-blue-300 mb-4">
              🅿️ SİTELER, REZİDANS VE AVM OTOPARKLARI
            </span>
            <h1 className="text-3xl sm:text-5xl font-black text-slate-900 leading-tight mb-4 tracking-tight">
              Antalya Otopark Epoksi & <span className="text-blue-600">Kaymaz Rampa Sistemleri</span>
            </h1>
            <p className="text-slate-600 text-base sm:text-lg mb-6 leading-relaxed">
              Yoğun araç trafiğine, lastik sürtünmesine ve motor yağı sızıntılarına dayanıklı portakal kabuğu desenli kapalı otopark epoksisi, kuvars agregalı kaymaz rampa kaplaması ve profesyonel çizgi uygulamaları.
            </p>

            <div className="grid grid-cols-2 gap-3 mb-6 text-xs font-bold text-slate-700">
              <div className="p-3 bg-white rounded-xl border border-slate-200 shadow-sm flex items-center gap-2">
                <span className="text-blue-500">✓</span> Portakal Kabuğu Kaymaz Doku
              </div>
              <div className="p-3 bg-white rounded-xl border border-slate-200 shadow-sm flex items-center gap-2">
                <span className="text-blue-500">✓</span> Kuvarslı Dik Rampa Kaplama
              </div>
              <div className="p-3 bg-white rounded-xl border border-slate-200 shadow-sm flex items-center gap-2">
                <span className="text-blue-500">✓</span> Soğuk Yol & Otopark Çizgisi
              </div>
              <div className="p-3 bg-white rounded-xl border border-slate-200 shadow-sm flex items-center gap-2">
                <span className="text-blue-500">✓</span> Yağ ve Kimyasal Geçirimsiz
              </div>
            </div>
          </div>

          <div>
            <LeadWizard defaultSource="OTOPARK_ZEMIN_SEO" />
          </div>
        </div>
      </section>

      {/* COMPARISON & TECHNICAL DETAILS */}
      <section className="py-12 bg-white border-y border-slate-200 px-4 sm:px-8">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-black text-slate-900 mb-6 text-center">
            Antalya Otopark Zemin ve Rampa Kaplama Fiyatları 2026
          </h2>
          <p className="text-slate-600 text-center max-w-2xl mx-auto mb-10 text-sm leading-relaxed">
            Otopark zemin maliyetleri m² alanı, rampaların eğim derecesi, zemin hazırlığı (freze/silim) ve çizgi metrajına göre hesaplanır.
          </p>

          <div className="overflow-x-auto shadow-sm rounded-2xl border border-slate-200">
            <table className="w-full text-left text-xs sm:text-sm border-collapse bg-white">
              <thead>
                <tr className="bg-slate-900 text-white font-mono">
                  <th className="p-4">Uygulama Alanı</th>
                  <th className="p-4">Zemin Tipi</th>
                  <th className="p-4">Teknik Özellik</th>
                  <th className="p-4 text-right">Tahmini m² Fiyatı</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 font-medium">
                <tr>
                  <td className="p-4 font-bold text-slate-900">Kapalı Otopark Zemin Epoksisi</td>
                  <td className="p-4 text-slate-600">Portakal kabuğu dokulu çok katmanlı</td>
                  <td className="p-4 text-slate-600">Lastik izi tutmaz, tozumaz, silinebilir</td>
                  <td className="p-4 text-right font-mono font-bold text-blue-600">220 – 340 TL/m²</td>
                </tr>
                <tr>
                  <td className="p-4 font-bold text-slate-900">Giriş / Çıkış Dik Rampa Kaplaması</td>
                  <td className="p-4 text-slate-600">Kuvars agregalı antislip zemin</td>
                  <td className="p-4 text-slate-600">Yağmurlu havada kaymayı %100 önler</td>
                  <td className="p-4 text-right font-mono font-bold text-blue-600">290 – 420 TL/m²</td>
                </tr>
                <tr>
                  <td className="p-4 font-bold text-slate-900">Açık Otopark Poliüretan Kaplama</td>
                  <td className="p-4 text-slate-600">UV dayanımlı esnek zemin</td>
                  <td className="p-4 text-slate-600">Güneşte sararmaz, su izolasyonu sağlar</td>
                  <td className="p-4 text-right font-mono font-bold text-blue-600">320 – 450 TL/m²</td>
                </tr>
                <tr>
                  <td className="p-4 font-bold text-slate-900">Otopark Çizgi & Yönlendirme Seti</td>
                  <td className="p-4 text-slate-600">Klor kauçuk / Epoksi boya</td>
                  <td className="p-4 text-slate-600">Araç park çizgileri, yön okları, engelli parkı</td>
                  <td className="p-4 text-right font-mono font-bold text-blue-600">Metretül / Paket</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-[11px] text-slate-400 mt-3 text-right">
            * Apartman ve site yönetimlerine keşif raporu ve teknik şartname ücretsiz sunulmaktadır.
          </p>
        </div>
      </section>

      {/* BEFORE / AFTER */}
      <section className="py-12 px-4 sm:px-8 max-w-7xl mx-auto">
        <div className="text-center mb-8">
          <h3 className="text-xl sm:text-2xl font-black text-slate-900">Rezidans ve AVM Otopark Projelerimiz</h3>
          <p className="text-xs text-slate-500 mt-1">Kapalı otopark zemin epoksisi ve kaymaz rampa öncesi ve sonrası</p>
        </div>
        <BeforeAfterSlider />
      </section>

      {/* TRUST BADGES */}
      <section className="py-12 bg-slate-900 text-white px-4 sm:px-8">
        <TrustBadges />
      </section>

      {/* FOOTER */}
      <footer className="bg-slate-950 text-slate-400 py-10 px-4 sm:px-8 border-t border-slate-800 text-xs">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <p>© 2026 Nova Zemin Sistemleri. NOVA GLOBAL bünyesinde. NOVA GLOBAL BİLİŞİM TURİZM ORGANİZASYON DANIŞMANLIK VE LİMİTED ŞİRKETİ.</p>
          <div className="flex gap-4">
            <a href="/antalya-epoksi-zemin-kaplama" className="hover:text-white">Epoksi Zemin</a>
            <a href="/antalya-beton-silim" className="hover:text-white">Beton Silim</a>
            <a href="/antalya-poliuretan-zemin" className="hover:text-white">Poliüretan Zemin</a>
            <a href="/antalya-otopark-zemini" className="hover:text-white text-blue-400 font-bold">Otopark Kaplama</a>
          </div>
        </div>
      </footer>
    </main>
  );
}
