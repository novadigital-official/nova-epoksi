'use client';

// ═══════════════════════════════════════════════════════════
// NOVA EPOKSI ANTALYA — 2026 ORTALAMA FİYAT REHBERİ
// ═══════════════════════════════════════════════════════════

import React from 'react';

const PRICING_SYSTEMS = [
  {
    title: 'Epoksi Boya Kaplama',
    usage: 'Depo, Garaj, Hafif Trafik',
    startingPrice: '200 TL / m²',
    desc: 'Hafif yaya ve araç trafiğine uygun, tozumayı önleyen ekonomik zemin çözümü.'
  },
  {
    title: 'Self Leveling Epoksi',
    usage: 'Fabrika, Showroom, Ticari Alan',
    startingPrice: '350 TL / m²',
    desc: 'Pürüzsüz, derzsiz ve hijyenik kendiliğinden yayılan kaplama.'
  },
  {
    title: 'Otopark Epoksi Kaplama',
    usage: 'AVM, Site Otoparkı, Garaj',
    startingPrice: '400 TL / m²',
    desc: 'Araç lastik sesi ve kaymasını önleyen, çizgilere dayanıklı zemin.'
  },
  {
    title: 'Endüstriyel Epoksi Sistem',
    usage: 'Fabrika, Ağır Forklift Yolu',
    startingPrice: '500 TL / m²',
    desc: 'Ağır forklift trafiğine ve kimyasal dökülmelere dayanıklı multilayer katman.'
  },
  {
    title: 'Dekoratif / Metalik Epoksi',
    usage: 'Otel Lobisi, Restoran, Özel Alan',
    startingPrice: '700 TL / m²',
    desc: 'Mermer efektli, estetik görünüm sağlayan özel kaplama.'
  }
];

export default function FiyatStratejisi2026() {
  const handleScrollToForm = () => {
    const el = document.getElementById('kesif') || document.getElementById('hesaplayici');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div id="fiyatlar" className="w-full space-y-8">
      <div className="text-center max-w-3xl mx-auto">
        <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-black bg-blue-100 text-blue-800 border border-blue-200 mb-3 uppercase tracking-wider">
          ŞEFFAF FİYATLANDIRMA
        </span>
        <h2 className="text-2xl sm:text-4xl font-black text-slate-900">
          2026 Antalya Epoksi Zemin Kaplama Ortalama Fiyatları
        </h2>
        <p className="text-xs sm:text-sm text-slate-600 mt-2 leading-relaxed">
          Kesin fiyat için zemin durumu ve kullanım alanı görülmelidir. Zemin hazırlığı, metrekare büyüklüğü ve sistem türüne göre net teklif verilir.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4">
        {PRICING_SYSTEMS.map((system, idx) => (
          <div
            key={idx}
            className="bg-white border border-slate-200 rounded-3xl p-5 shadow-sm hover:shadow-md hover:border-blue-500 transition-all flex flex-col justify-between"
          >
            <div>
              <span className="text-[10px] font-extrabold text-blue-600 uppercase tracking-wider block mb-1">
                {system.usage}
              </span>
              <h3 className="text-base font-black text-slate-900 mb-2 leading-tight">
                {system.title}
              </h3>
              <p className="text-xs text-slate-600 mb-4 leading-relaxed">
                {system.desc}
              </p>
            </div>

            <div className="pt-3 border-t border-slate-100">
              <span className="text-[10px] text-slate-400 font-bold block">Başlangıç Fiyatı</span>
              <span className="text-base font-black text-blue-700">{system.startingPrice}</span>
            </div>
          </div>
        ))}
      </div>

      <div className="bg-slate-900 text-white rounded-3xl p-6 sm:p-8 shadow-xl text-center space-y-4">
        <h3 className="text-lg font-black text-white">İşletmenize Özel Çözüm İçin Görüşelim</h3>
        <p className="text-xs text-slate-300 max-w-xl mx-auto leading-relaxed">
          Zemininizi yerinde inceliyor, ihtiyacınıza uygun sistemi ve bütçeyi birlikte netleştiriyoruz.
        </p>
        <div>
          <button
            onClick={handleScrollToForm}
            className="bg-emerald-600 hover:bg-emerald-500 text-white font-black px-8 py-4 min-h-[48px] rounded-xl text-sm shadow-lg transition-transform active:scale-95 cursor-pointer"
          >
            Projenizi İletin
          </button>
        </div>
      </div>
    </div>
  );
}
