'use client';

// ═══════════════════════════════════════════════════════════
// NOVA EPOKSI ANTALYA — TEKNİK UYGULAMA SÜRECİ
// ═══════════════════════════════════════════════════════════

import React from 'react';

const SUREC_ADIMLARI = [
  {
    step: '01',
    title: 'Yerinde Keşif & Nem Analizi',
    desc: 'Lazerli cihazlarla beton nem oranı, zemin sertliği ve çatlak derinlikleri ölçülür. Tesisinize en uygun sistem reçetesi belirlenir.'
  },
  {
    step: '02',
    title: 'Elmas Silim ile Zemin Hazırlığı',
    desc: 'Kalıcı sonuç ve sıfır kabarma riski için zemin endüstriyel elmas frezelerle silinir, beton gözenekleri açılarak tozumaz hale getirilir.'
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
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-heading font-semibold bg-slate-100 text-slate-700 uppercase tracking-wider">
          <span>Standart İş Akışı</span>
        </div>
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-heading font-extrabold text-slate-900 tracking-tight">
          4 Adımda Garantili Epoksi Uygulama Sürecimiz
        </h2>
        <p className="text-xs sm:text-sm text-slate-500 max-w-2xl mx-auto font-normal">
          Kalıcı ve ağır yüke dayanıklı bir zemin için sadece boya sürmek yetmez; mühendislik standartlarında zemin hazırlığı yapılır.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {SUREC_ADIMLARI.map((item) => (
          <div
            key={item.step}
            className="bg-white border border-slate-200/90 p-5 sm:p-6 rounded-3xl shadow-2xs flex flex-col justify-between hover:shadow-md transition-all group"
          >
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="w-8 h-8 rounded-xl bg-slate-900 text-amber-400 font-mono font-bold text-xs flex items-center justify-center">
                  {item.step}
                </span>
                <span className="text-slate-400 font-mono text-xs font-medium">Aşama {item.step}</span>
              </div>
              <h3 className="text-base font-heading font-bold text-slate-900 leading-snug">
                {item.title}
              </h3>
              <p className="text-xs text-slate-500 leading-relaxed font-normal">
                {item.desc}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
