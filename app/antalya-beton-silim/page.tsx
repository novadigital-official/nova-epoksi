import { Metadata } from 'next';
import LeadWizard from '../../components/LeadWizard';
import BeforeAfterSlider from '../../components/BeforeAfterSlider';
import TrustBadges from '../../components/TrustBadges';

export const metadata: Metadata = {
  title: 'Antalya Beton Silim ve Parlatma | Lityum Silikat Tozumaz Zemin — Nova Zemin',
  description: 'Antalya OSB ve tüm sanayi tesislerinde elmas disklerle beton silim, parlatma ve lityum silikat tozumaz zemin uygulamaları. Ağır tonaj ve forklift trafiğine ömürlük çözüm.',
  keywords: [
    'antalya beton silim',
    'antalya beton parlatma',
    'lityum silikat beton antalya',
    'tozumaz beton zemin antalya',
    'organize sanayi beton silimi'
  ],
  alternates: {
    canonical: 'https://antalyaepoksizemin.com.tr/antalya-beton-silim'
  }
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  'name': 'Antalya Beton Silim ve Parlatma Hizmeti',
  'provider': {
    '@type': 'HomeAndConstructionBusiness',
    '@id': 'https://antalyaepoksizemin.com.tr/#business',
    'name': 'Nova Zemin & Epoksi Sistemleri',
    'telephone': '+905070871789'
  },
  'areaServed': 'Antalya ve Organize Sanayi Bölgesi',
  'serviceType': 'Beton Silim, Parlatma ve Sıvı Yüzey Sertleştirici',
  'description': 'Endüstriyel zeminler, fabrikalar ve depolar için elmas silim ve lityum silikat uygulamasıyla tozumaz, ayna parlaklığında dayanıklı beton zemin.'
};

export default function AntalyaBetonSilimPage() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-900 font-sans selection:bg-amber-500 selection:text-slate-950">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      {/* HEADER */}
      <header className="sticky top-0 z-50 bg-slate-950 text-white py-4 px-4 sm:px-8 flex items-center justify-between border-b border-slate-800">
        <a href="/" className="flex items-center gap-3">
          <div className="w-10 h-10 bg-amber-500 text-slate-950 font-black rounded-xl flex items-center justify-center text-xl shadow-md">
            💎
          </div>
          <div>
            <span className="font-extrabold text-lg block leading-none">
              Nova<span className="text-amber-400">Zemin</span>
            </span>
            <span className="text-[10px] text-slate-400 font-mono uppercase tracking-wider">
              BETON SİLİM & PARLATMA DİREKTÖRLÜĞÜ
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
            href="https://wa.me/905070871789?text=Merhaba,%20Antalya%20beton%20silim%20ve%20parlatma%20fiyat%20teklifi%20almak%20istiyorum."
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
          <span className="text-slate-800 font-semibold">Antalya Beton Silim & Parlatma</span>
        </div>
      </div>

      {/* HERO SECTION */}
      <section className="py-12 sm:py-16 px-4 sm:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-black bg-amber-100 text-amber-900 border border-amber-300 mb-4">
              💎 AĞIR HİZMET TİCARİ ZEMİN SİSTEMİ
            </span>
            <h1 className="text-3xl sm:text-5xl font-black text-slate-900 leading-tight mb-4 tracking-tight">
              Antalya Beton Silim & <span className="text-amber-600">Lityum Silikat Parlatma</span>
            </h1>
            <p className="text-slate-600 text-base sm:text-lg mb-6 leading-relaxed">
              Organize Sanayi Bölgesi fabrikaları, antrepolar, lojistik depolar ve kapalı otoparklar için ağır forklift trafiğine dayanıklı, tozumayan, sıvı geçirimsiz elmas silimli parlak beton zemin uygulamaları.
            </p>

            <div className="grid grid-cols-2 gap-3 mb-6 text-xs font-bold text-slate-700">
              <div className="p-3 bg-white rounded-xl border border-slate-200 shadow-sm flex items-center gap-2">
                <span className="text-amber-500">✓</span> Sıfır Tozuma Garantisi
              </div>
              <div className="p-3 bg-white rounded-xl border border-slate-200 shadow-sm flex items-center gap-2">
                <span className="text-amber-500">✓</span> Ağır Forklift Direnci
              </div>
              <div className="p-3 bg-white rounded-xl border border-slate-200 shadow-sm flex items-center gap-2">
                <span className="text-amber-500">✓</span> Lityum Sıvı Sertleştirici
              </div>
              <div className="p-3 bg-white rounded-xl border border-slate-200 shadow-sm flex items-center gap-2">
                <span className="text-amber-500">✓</span> Çatlamayan Sonsuz Ömür
              </div>
            </div>
          </div>

          <div>
            <LeadWizard defaultSource="BETON_SILIM_SEO" />
          </div>
        </div>
      </section>

      {/* COMPARISON & TECHNICAL DETAILS */}
      <section className="py-12 bg-white border-y border-slate-200 px-4 sm:px-8">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-black text-slate-900 mb-6 text-center">
            Antalya'da Beton Silim ve Parlatma m² Fiyatları Ne Kadar?
          </h2>
          <p className="text-slate-600 text-center max-w-2xl mx-auto mb-10 text-sm leading-relaxed">
            Beton silim maliyeti zemin sertlik derecesine (Mohs ölçeği), bozukluk seviyesine ve istenen parlatma grit aşamasına (mat, yarı mat, ayna parlaklık) göre belirlenir.
          </p>

          <div className="overflow-x-auto shadow-sm rounded-2xl border border-slate-200">
            <table className="w-full text-left text-xs sm:text-sm border-collapse bg-white">
              <thead>
                <tr className="bg-slate-900 text-white font-mono">
                  <th className="p-4">Uygulama Modeli</th>
                  <th className="p-4">Kullanım Alanı</th>
                  <th className="p-4">İşlem Detayı</th>
                  <th className="p-4 text-right">Tahmini m² Fiyatı</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 font-medium">
                <tr>
                  <td className="p-4 font-bold text-slate-900">Kaba Silim & Yüzey Temizliği</td>
                  <td className="p-4 text-slate-600">Epoksi altı zemin hazırlığı</td>
                  <td className="p-4 text-slate-600">Metal elmas kaba silim + pürüzlendirme</td>
                  <td className="p-4 text-right font-mono font-bold text-amber-600">80 – 120 TL/m²</td>
                </tr>
                <tr>
                  <td className="p-4 font-bold text-slate-900">Lityum Silikat Tozumaz Zemin</td>
                  <td className="p-4 text-slate-600">Lojistik depolar, antrepolar</td>
                  <td className="p-4 text-slate-600">Kaba silim + Sıvı yüzey sertleştirici (Densifier)</td>
                  <td className="p-4 text-right font-mono font-bold text-amber-600">140 – 190 TL/m²</td>
                </tr>
                <tr>
                  <td className="p-4 font-bold text-slate-900">Yarı Parlak Endüstriyel Beton</td>
                  <td className="p-4 text-slate-600">Fabrika holleri, atölyeler</td>
                  <td className="p-4 text-slate-600">4 kademe reçine silim + lityum koruma</td>
                  <td className="p-4 text-right font-mono font-bold text-amber-600">180 – 240 TL/m²</td>
                </tr>
                <tr>
                  <td className="p-4 font-bold text-slate-900">Ayna Parlaklığında Süper Beton</td>
                  <td className="p-4 text-slate-600">Showroom, AVM, lüks kafe</td>
                  <td className="p-4 text-slate-600">3000 grit elmas polisaj + leke koruyucu sealer</td>
                  <td className="p-4 text-right font-mono font-bold text-amber-600">240 – 320 TL/m²</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-[11px] text-slate-400 mt-3 text-right">
            * 300 m² ve üzeri projelerde yerinde lazerli kot ve nem keşfi ücretsizdir.
          </p>
        </div>
      </section>

      {/* BEFORE / AFTER */}
      <section className="py-12 px-4 sm:px-8 max-w-7xl mx-auto">
        <div className="text-center mb-8">
          <h3 className="text-xl sm:text-2xl font-black text-slate-900">Öncesi ve Sonrası: Antalya Saha Uygulamaları</h3>
          <p className="text-xs text-slate-500 mt-1">Eski tozuyan beton ile elmas silimli parlatılmış zemin karşılaştırması</p>
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
            <a href="/antalya-beton-silim" className="hover:text-white text-amber-400 font-bold">Beton Silim</a>
            <a href="/antalya-poliuretan-zemin" className="hover:text-white">Poliüretan Zemin</a>
            <a href="/antalya-otopark-zemini" className="hover:text-white">Otopark Kaplama</a>
          </div>
        </div>
      </footer>
    </main>
  );
}
