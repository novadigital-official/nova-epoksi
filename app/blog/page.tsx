import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Antalya Epoksi Zemin Blog & Rehber | Nova Epoksi',
  description: 'Antalya epoksi zemin m² fiyatları 2026, fabrika zemin kaplama dayanıklılık rehberi ve otopark epoksi maliyet analizleri.',
  keywords: ['antalya epoksi zemin m2 fiyatları 2026', 'fabrika zemini kaplama', 'epoksi mi beton parlatma mı']
};

const BLOG_ARTICLES = [
  {
    slug: 'antalya-epoksi-zemin-m2-fiyatlari-2026',
    title: 'Antalya Epoksi Zemin m² Fiyatları 2026 Güncel Maliyet Rehberi',
    category: 'Maliyet & Fiyatlandırma',
    excerpt: 'Antalya fabrika, depo ve garaj epoksi zemin kaplama m² fiyatlarını belirleyen malzeme, astar ve alan büyüklüğü faktörleri.',
    date: '6 Ağustos 2026'
  },
  {
    slug: 'fabrika-zemini-en-dayanikli-kaplama',
    title: 'Fabrika Zemini İçin En Dayanıklı Kaplama Hangisi? (Multilayer vs Self Leveling)',
    category: 'Endüstriyel Epoksi',
    excerpt: 'Ağır forklift trafiğine ve kimyasal dökülmelere karşı fabrika zemin dayanıklılığını maksimuma çıkaran epoksi sistemleri.',
    date: '4 Ağustos 2026'
  },
  {
    slug: 'otopark-epoksi-kaplama-maliyeti',
    title: 'Otopark Epoksi Kaplama Maliyeti ve Ömrü Ne Kadar?',
    category: 'Otopark & Garaj',
    excerpt: 'AVM, site ve konut kapalı otoparklarında araç lastik izi tutmayan poliüretan epoksi kaplama maliyet analizi.',
    date: '1 Ağustos 2026'
  },
  {
    slug: 'epoksi-mi-beton-parlatma-mi',
    title: 'Epoksi mi Beton Parlatma mı? Hangi Alan İçin Hangi Sistem Seçilmeli?',
    category: 'Zemin Karşılaştırma',
    excerpt: 'Beton parlatma ile sıvı epoksi reçine kaplama arasındaki farklar, tozuma önleme performansları ve bütçe kıyaslaması.',
    date: '28 Temmuz 2026'
  }
];

export default function BlogListingPage() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-900 font-sans selection:bg-blue-600 selection:text-white">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-slate-900 text-white py-4 px-4 sm:px-8 flex items-center justify-between border-b border-slate-800">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-blue-600 text-white font-black rounded-xl flex items-center justify-center text-xl shadow-md">
            📚
          </div>
          <div>
            <span className="font-extrabold text-lg block leading-none">Nova<span className="text-blue-400">Epoksi</span></span>
            <span className="text-[10px] text-slate-400 font-bold uppercase">SATIN ALMA ODAKLI BİLGİ KÜTÜPHANESİ</span>
          </div>
        </div>

        <a
          href="https://wa.me/905070871789?text=Merhaba%20blog%20makalesinden%20ulasıyorum%20fiyat%20almak%20istiyorum"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-emerald-500 hover:bg-emerald-600 text-slate-950 font-black text-xs px-4 py-2.5 rounded-xl flex items-center gap-1.5 shadow-md"
        >
          <span>🟢 WhatsApp'tan Keşif Al</span>
        </a>
      </header>

      <section className="py-12 sm:py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-black bg-blue-100 text-blue-800 border border-blue-200 mb-3">
            📚 YÜKSEK NİYETLİ SEO SATIN ALMA REHBERİ
          </span>
          <h1 className="text-3xl sm:text-5xl font-black text-slate-900">
            Antalya Epoksi Zemin Bilgi & Maliyet Rehberi
          </h1>
          <p className="text-slate-600 text-base mt-2">
            Müttehitler, tesis müdürleri ve fabrika sahipleri için m² maliyetleri, zemin dayanım testleri ve sistem karşılaştırmaları.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {BLOG_ARTICLES.map((art) => (
            <article
              key={art.slug}
              className="bg-white border border-slate-200 p-6 rounded-3xl shadow-sm hover:shadow-md transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-[11px] font-black bg-blue-50 text-blue-700 px-3 py-1 rounded-full border border-blue-200">
                    {art.category}
                  </span>
                  <span className="text-xs text-slate-400 font-bold">{art.date}</span>
                </div>
                <h2 className="text-xl font-black text-slate-900 mb-2 leading-snug hover:text-blue-600 transition-colors">
                  {art.title}
                </h2>
                <p className="text-xs text-slate-600 leading-relaxed mb-6">
                  {art.excerpt}
                </p>
              </div>

              <a
                href={`https://wa.me/905070871789?text=Merhaba%20${encodeURIComponent(art.title)}%20konusunda%20fiyat%20almak%20istiyorum`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-black text-blue-600 hover:text-blue-700"
              >
                <span>Fiyat & Keşif Bilgisi Al →</span>
              </a>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
