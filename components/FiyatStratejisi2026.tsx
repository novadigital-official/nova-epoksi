'use client';

// ═══════════════════════════════════════════════════════════
// NOVA EPOKSI ANTALYA — KURUMSAL FİYAT & ŞARTNAME MATRİSİ
// ═══════════════════════════════════════════════════════════

import React from 'react';

const SPEC_PRICE_MATRIX = [
  {
    code: 'EPX-01',
    title: 'Epoksi Boya Kaplama (Tozuma Önleyici)',
    category: 'Depo, Lojistik, Hafif Trafik',
    thickness: '0.3 – 0.5 mm Film',
    startingPrice: '200 TL',
    unit: '/ m²',
    badge: 'Ekonomik Koruma',
    features: 'Tozumasız beton, kolay temizlenebilir, rulo uygulama'
  },
  {
    code: 'EPX-02',
    title: 'Self-Leveling Epoksi Zemin',
    category: 'Fabrika, Showroom, İlaç & Gıda',
    thickness: '2.0 – 3.0 mm Pürüzsüz',
    startingPrice: '350 TL',
    unit: '/ m²',
    badge: 'Hijyenik & Derzsiz',
    features: 'Ayna pürüzsüzlük, bakteri barındırmayan derzsiz monolitik yapı'
  },
  {
    code: 'EPX-03',
    title: 'Otopark Portakal Kabuğu / Kaymaz Kaplama',
    category: 'AVM, Site Kapalı/Açık Otoparkı',
    thickness: '1.5 – 2.5 mm Dokulu',
    startingPrice: '400 TL',
    unit: '/ m²',
    badge: 'Yüksek Sürtünme',
    features: 'Lastik sesi kesici, ıslak zeminde kaydırmaz tekstür, rampa dayanımı'
  },
  {
    code: 'EPX-04',
    title: 'Ağır Hizmet Multilayer Epoksi',
    category: 'Ağır Sanayi, Forklift Yolları, Atölye',
    thickness: '3.0 – 5.0 mm Çok Katmanlı',
    startingPrice: '500 TL',
    unit: '/ m²',
    badge: 'Ağır Tonaj / Forklift',
    features: 'Noktasal darbe dayanımı, asit ve kimyasal dökülmelere tam mukavemet'
  },
  {
    code: 'EPX-05',
    title: 'Poliüretan / Antistatik ESD Epoksi',
    category: 'Soğuk Hava, Elektronik Tesis, Laboratuvar',
    thickness: '2.0 – 4.0 mm Esnek / ESD',
    startingPrice: '700 TL',
    unit: '/ m²',
    badge: 'Özel Mühendislik',
    features: 'Statik elektrik tahliyesi, termal şok ve UV ışın dayanımı'
  }
];

export default function FiyatStratejisi2026() {
  const handleScrollToForm = () => {
    const el = document.getElementById('kesif') || document.getElementById('hesaplayici');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div id="fiyatlar" className="w-full space-y-8">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto space-y-2">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-heading font-extrabold bg-amber-50 text-amber-900 border border-amber-200 uppercase tracking-wider">
          <span>📊 2026 Birim Fiyat Tablosu</span>
        </div>
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-heading font-extrabold text-slate-900 tracking-tight">
          Endüstriyel Epoksi Zemin Şartnamesi & Birim Fiyatlar
        </h2>
        <p className="text-xs sm:text-sm text-slate-500 max-w-2xl mx-auto">
          Tüm fiyatlar m² bazında anahtar teslim başlangıç maliyetleridir. Zemin keşfi sonrasında nem durumu ve çatlak yoğunluğuna göre kesin sözleşme düzenlenir.
        </p>
      </div>

      {/* Corporate Spec Matrix Table */}
      <div className="bg-white border border-slate-200/90 rounded-3xl overflow-hidden shadow-xs">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-slate-900 text-white text-xs font-heading font-bold uppercase tracking-wider">
                <th className="py-4 px-5">Sistem / Kaplama Türü</th>
                <th className="py-4 px-5 hidden md:table-cell">Kullanım Alanı</th>
                <th className="py-4 px-5 hidden lg:table-cell">Katman Kalınlığı</th>
                <th className="py-4 px-5 text-right sm:text-left">m² Başlangıç</th>
                <th className="py-4 px-5 text-right hidden sm:table-cell">İşlem</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 text-xs">
              {SPEC_PRICE_MATRIX.map((item, idx) => (
                <tr key={idx} className="hover:bg-slate-50/80 transition-colors">
                  <td className="py-4 px-5 align-middle">
                    <div className="flex items-center gap-3">
                      <span className="font-mono text-[10px] bg-slate-100 text-slate-600 px-2 py-1 rounded-md font-bold shrink-0">
                        {item.code}
                      </span>
                      <div>
                        <div className="font-heading font-extrabold text-slate-900 text-xs sm:text-sm">
                          {item.title}
                        </div>
                        <div className="text-slate-500 text-[11px] mt-0.5 md:hidden">
                          {item.category} • {item.thickness}
                        </div>
                      </div>
                    </div>
                  </td>
                  <td className="py-4 px-5 text-slate-600 font-medium hidden md:table-cell align-middle">
                    {item.category}
                  </td>
                  <td className="py-4 px-5 text-slate-500 font-mono text-[11px] hidden lg:table-cell align-middle">
                    {item.thickness}
                  </td>
                  <td className="py-4 px-5 align-middle text-right sm:text-left">
                    <span className="font-mono text-sm sm:text-base font-extrabold text-slate-900 block">
                      {item.startingPrice}
                    </span>
                    <span className="text-[10px] text-slate-400 font-mono block">
                      {item.unit} + KDV
                    </span>
                  </td>
                  <td className="py-4 px-5 text-right align-middle hidden sm:table-cell">
                    <button
                      onClick={handleScrollToForm}
                      className="inline-flex items-center justify-center px-4 py-2 rounded-xl bg-slate-900 hover:bg-amber-500 hover:text-slate-950 text-white font-heading font-extrabold text-xs transition-all cursor-pointer whitespace-nowrap"
                    >
                      Keşif İste ↗
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Corporate Callout Box */}
      <div className="bg-slate-900 text-white rounded-3xl p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6 shadow-md border border-slate-800">
        <div className="space-y-1">
          <h3 className="text-base sm:text-lg font-heading font-extrabold text-white">
            500 m² ve Üzeri Endüstriyel Projeler İçin Yerinde Numune & Test
          </h3>
          <p className="text-xs sm:text-sm text-slate-300 font-normal">
            Antalya OSB ve sanayi tesisleriniz için yerinde lazerli nem ölçümü ve mukavemet analizi tamamen ücretsizdir.
          </p>
        </div>
        <a
          href="https://wa.me/905070871789?text=Merhaba,%20Antalya%20OSB%20fabrika%20epoksi%20zemin%20keşfi%20talep%20ediyorum."
          target="_blank"
          rel="noopener noreferrer"
          className="bg-amber-500 hover:bg-amber-600 text-slate-950 font-heading font-black px-6 py-3.5 rounded-2xl text-xs sm:text-sm whitespace-nowrap transition-all shadow-md shrink-0 flex items-center gap-2"
        >
          <span>Mühendis ile Görüş</span>
        </a>
      </div>
    </div>
  );
}
