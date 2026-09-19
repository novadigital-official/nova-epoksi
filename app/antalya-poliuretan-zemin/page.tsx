import { Metadata } from 'next';
import LeadWizard from '../../components/LeadWizard';
import BeforeAfterSlider from '../../components/BeforeAfterSlider';
import TrustBadges from '../../components/TrustBadges';

export const metadata: Metadata = {
  title: 'Antalya Poliüretan Zemin Kaplama | HACCP Onaylı Otel & Gıda Zemini — Nova Zemin',
  description: 'Antalya otel mutfakları, restoranlar, gıda tesisleri ve açık teraslar için esnek, çatlamayan, UV dayanımlı ve antibakteriyel poliüretan zemin kaplama çözümleri.',
  keywords: [
    'antalya poliüretan zemin',
    'otel mutfağı zemin kaplama antalya',
    'haccp onaylı zemin kaplama',
    'esnek poliüretan zemin antalya',
    'antibakteriyel zemin kaplama'
  ],
  alternates: {
    canonical: 'https://antalyaepoksizemin.com.tr/antalya-poliuretan-zemin'
  }
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  'name': 'Antalya Poliüretan Zemin Kaplama',
  'provider': {
    '@type': 'HomeAndConstructionBusiness',
    '@id': 'https://antalyaepoksizemin.com.tr/#business',
    'name': 'Nova Zemin & Epoksi Sistemleri',
    'telephone': '+905070871789'
  },
  'areaServed': 'Antalya',
  'serviceType': 'Poliüretan ve Antibakteriyel Zemin Kaplama',
  'description': 'Otel mutfakları, gıda üretim alanları ve açık mekanlar için UV dirençli, esnek, hijyenik ve çatlamayan poliüretan zemin kaplama.'
};

export default function AntalyaPoliuretanZeminPage() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-900 font-sans selection:bg-amber-500 selection:text-slate-950">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      {/* HEADER */}
      <header className="sticky top-0 z-50 bg-slate-950 text-white py-4 px-4 sm:px-8 flex items-center justify-between border-b border-slate-800">
        <a href="/" className="flex items-center gap-3">
          <div className="w-10 h-10 bg-emerald-500 text-slate-950 font-black rounded-xl flex items-center justify-center text-xl shadow-md">
            🛡️
          </div>
          <div>
            <span className="font-extrabold text-lg block leading-none">
              Nova<span className="text-amber-400">Zemin</span>
            </span>
            <span className="text-[10px] text-slate-400 font-mono uppercase tracking-wider">
              POLİÜRETAN HİJYENİK ZEMİN SİSTEMLERİ
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
            href="https://wa.me/905070871789?text=Merhaba,%20Antalya%20poliüretan%20zemin%20kaplama%20fiyat%20teklifi%20almak%20istiyorum."
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
          <span className="text-slate-800 font-semibold">Antalya Poliüretan Zemin Kaplama</span>
        </div>
      </div>

      {/* HERO SECTION */}
      <section className="py-12 sm:py-16 px-4 sm:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-black bg-emerald-100 text-emerald-900 border border-emerald-300 mb-4">
              🛡️ HACCP UYUMLU ESNEK & HİJYENİK ZEMİN
            </span>
            <h1 className="text-3xl sm:text-5xl font-black text-slate-900 leading-tight mb-4 tracking-tight">
              Antalya Poliüretan Zemin: <span className="text-emerald-600">Çatlamayan, UV Dayanımlı</span>
            </h1>
            <p className="text-slate-600 text-base sm:text-lg mb-6 leading-relaxed">
              Otel mutfakları, restoranlar, gıda imalathaneleri ve açık teraslar için esnek yapılı, sıcak-soğuk şoklarına dayanıklı, sararmayan ve antibakteriyel poliüretan zemin kaplama sistemleri.
            </p>

            <div className="grid grid-cols-2 gap-3 mb-6 text-xs font-bold text-slate-700">
              <div className="p-3 bg-white rounded-xl border border-slate-200 shadow-sm flex items-center gap-2">
                <span className="text-emerald-500">✓</span> HACCP ve Gıda Onaylı
              </div>
              <div className="p-3 bg-white rounded-xl border border-slate-200 shadow-sm flex items-center gap-2">
                <span className="text-emerald-500">✓</span> UV Işınlarına Karşı Sararmaz
              </div>
              <div className="p-3 bg-white rounded-xl border border-slate-200 shadow-sm flex items-center gap-2">
                <span className="text-emerald-500">✓</span> Termal Şok Dayanımı (-25°C / +80°C)
              </div>
              <div className="p-3 bg-white rounded-xl border border-slate-200 shadow-sm flex items-center gap-2">
                <span className="text-emerald-500">✓</span> Esnek & Darbe Emici Doku
              </div>
            </div>
          </div>

          <div>
            <LeadWizard defaultSource="POLIURETAN_SEO" />
          </div>
        </div>
      </section>

      {/* COMPARISON & TECHNICAL DETAILS */}
      <section className="py-12 bg-white border-y border-slate-200 px-4 sm:px-8">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-black text-slate-900 mb-6 text-center">
            Poliüretan Zemin ile Epoksi Arasındaki Fark Nedir?
          </h2>
          <p className="text-slate-600 text-center max-w-2xl mx-auto mb-10 text-sm leading-relaxed">
            Epoksi sert ve yüksek basınca dayanıklıyken; poliüretan zemin esnek, darbe emici, titreşime ve güneşin UV ışınlarına karşı tam dirençlidir.
          </p>

          <div className="overflow-x-auto shadow-sm rounded-2xl border border-slate-200">
            <table className="w-full text-left text-xs sm:text-sm border-collapse bg-white">
              <thead>
                <tr className="bg-slate-900 text-white font-mono">
                  <th className="p-4">Poliüretan Zemin Türü</th>
                  <th className="p-4">İdeal Kullanım Alanı</th>
                  <th className="p-4">Temel Avantajı</th>
                  <th className="p-4 text-right">Tahmini m² Fiyatı</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 font-medium">
                <tr>
                  <td className="p-4 font-bold text-slate-900">Endüstriyel Mutfak Poliüretanı (PU Screed)</td>
                  <td className="p-4 text-slate-600">5 yıldızlı otel mutfağı, fırın, catering</td>
                  <td className="p-4 text-slate-600">Kaymaz doku, kaynar su ve yağ asitlerine tam direnç</td>
                  <td className="p-4 text-right font-mono font-bold text-emerald-600">450 – 650 TL/m²</td>
                </tr>
                <tr>
                  <td className="p-4 font-bold text-slate-900">Konfor & Akustik Poliüretan</td>
                  <td className="p-4 text-slate-600">Ofis, klinik, kreş, spor salonu</td>
                  <td className="p-4 text-slate-600">Topuk sesi yapmaz, yumuşak basış hissi</td>
                  <td className="p-4 text-right font-mono font-bold text-emerald-600">380 – 520 TL/m²</td>
                </tr>
                <tr>
                  <td className="p-4 font-bold text-slate-900">Açık Alan UV Dirençli Kaplama</td>
                  <td className="p-4 text-slate-600">Teraslar, açık otopark, havuz kenarı</td>
                  <td className="p-4 text-slate-600">Güneşte sararmaz, su geçirimsiz esnek membran</td>
                  <td className="p-4 text-right font-mono font-bold text-emerald-600">350 – 480 TL/m²</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-[11px] text-slate-400 mt-3 text-right">
            * 250 m² üzeri ticari alanlarda RAL renk kartelasından istenen tüm renkler uygulanır.
          </p>
        </div>
      </section>

      {/* BEFORE / AFTER */}
      <section className="py-12 px-4 sm:px-8 max-w-7xl mx-auto">
        <div className="text-center mb-8">
          <h3 className="text-xl sm:text-2xl font-black text-slate-900">Otel Mutfağı ve Ticari Alan Uygulamaları</h3>
          <p className="text-xs text-slate-500 mt-1">HACCP hijyen standartlarında eksiz poliüretan zemin öncesi ve sonrası</p>
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
            <a href="/antalya-poliuretan-zemin" className="hover:text-white text-emerald-400 font-bold">Poliüretan Zemin</a>
            <a href="/antalya-otopark-zemini" className="hover:text-white">Otopark Kaplama</a>
          </div>
        </div>
      </footer>
    </main>
  );
}
