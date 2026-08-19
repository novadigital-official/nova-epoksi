'use client';

// ═══════════════════════════════════════════════════════════
// NOVA EPOKSI ANTALYA — TEKNİK UYGULAMA SÜRECİ
// ═══════════════════════════════════════════════════════════

import React from 'react';

const SUREC_ADIMLARI = [
  {
    step: '01',
    title: 'Ücretsiz Yerinde Keşif & Nem Analizi',
    desc: 'Lazerli cihazlarla beton nem oranı, zemin sertliği ve çatlak derinlikleri ölçülür. Tesisinize en uygun sistem reçetesi belirlenir.'
  },
  {
    step: '02',
    title: 'Elmas Silim ile Zemin Hazırlığı',
    desc: 'Kalıcı sonuç ve %0 kabarma riski için zemin endüstriyel elmas frezelerle silinir, beton gözenekleri açılarak tozumaz hale getirilir.'
  },
  {
    step: '03',
    title: 'Epoksi Astar & Gözenek Kapatma',
    desc: 'Yüksek penetrasyonlu astar katmanı sürülür; çatlaklar, derzler ve çukurlar epoksi tamir harcıyla monolitik olarak doldurulur.'
  },
  {
    step: '04',
    title: 'Son Kat Epoksi & Sözleşmeli Teslim',
    desc: 'Seçilen kalınlık ve renkte son kat epoksi uygulanır. 24 saat sonra yaya, 48 saat sonra ağır forklift trafiğine garantili teslim edilir.'
  }
];

export default function EpoksiTeknikSurec() {
  return (
    <div className="w-full space-y-8">
      <div className="text-center max-w-3xl mx-auto space-y-2">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-heading font-extrabold bg-amber-50 text-amber-900 border border-amber-200 uppercase tracking-wider">
          <span>⚙️ Standart İşleyiş</span>
        </div>
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-heading font-extrabold text-slate-900 tracking-tight">
          4 Adımda Garantili Epoksi Uygulama Sürecimiz
        </h2>
        <p className="text-xs sm:text-sm text-slate-500 max-w-2xl mx-auto">
          Kalıcı ve ağır yüke dayanıklı bir zemin için sadece boya sürmek yetmez; mühendislik standartlarında zemin hazırlığı yapılır.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {SUREC_ADIMLARI.map((item) => (
          <div
            key={item.step}
            className="bg-white border border-slate-200/90 p-5 sm:p-6 rounded-3xl shadow-xs flex flex-col justify-between hover:shadow-md transition-all group hover:-translate-y-1"
          >
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs font-heading font-black text-amber-800 bg-amber-50 border border-amber-200/80 px-3 py-1 rounded-full inline-block">
                  Adım {item.step}
                </span>
                <span className="text-slate-300 font-mono text-xs font-bold">0{item.step}/04</span>
              </div>
              <h3 className="text-base font-heading font-extrabold text-slate-900 leading-snug group-hover:text-amber-600 transition-colors">
                {item.title}
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed font-normal">
                {item.desc}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
