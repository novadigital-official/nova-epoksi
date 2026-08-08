'use client';

// ═══════════════════════════════════════════════════════════
// NOVA EPOKSI ANTALYA — ANLAŞILIR VE DOĞAL UYGULAMA SÜRECİ
// %50 Usta Güveni + %50 Kurumsal Kalite Anlatımı
// ═══════════════════════════════════════════════════════════

import React from 'react';

const SUREC_ADIMLARI = [
  {
    step: '01',
    title: 'Ücretsiz Yerinde Keşif',
    desc: 'Zemini yerinde inceliyor, nem, çatlak ve yıpranma durumunu analiz edip ihtiyacınıza en uygun sistemi netleştiriyoruz.'
  },
  {
    step: '02',
    title: 'Zemin Hazırlığı & Silim',
    desc: 'Kalıcı sonuç için sadece epoksi dökmek yeterli değildir. Zemin elmas elmas makinelerle temizlenir ve gözenekler açılır.'
  },
  {
    step: '03',
    title: 'Astar & Gözenek Kapatma',
    desc: 'Epoksinin betona sıkıca yapışması için ilk kat astar ve çukurların tamiri titizlikle uygulanır.'
  },
  {
    step: '04',
    title: 'Epoksi Kaplama & Teslimat',
    desc: 'Seçilen sisteme göre ana katman serilir, kuruması beklenir ve kullanım kılavuzuyla teslim edilir.'
  }
];

export default function EpoksiTeknikSurec() {
  return (
    <div className="w-full space-y-8">
      <div className="text-center max-w-3xl mx-auto">
        <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-black bg-blue-100 text-blue-800 border border-blue-200 mb-3 uppercase tracking-wider">
          İÇİNİZ RAHAT OLSUN
        </span>
        <h2 className="text-2xl sm:text-4xl font-black text-slate-900">
          Uygulama Sürecini Nasıl Yönetiyoruz?
        </h2>
        <p className="text-sm text-slate-600 mt-2 leading-relaxed">
          Kalıcı sonuç için sadece epoksi dökmek yeterli değildir. Önce zemin hazırlığı yapılır, ardından uygun katman sistemi uygulanır.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {SUREC_ADIMLARI.map((item) => (
          <div
            key={item.step}
            className="bg-white border border-slate-200 p-6 rounded-3xl shadow-sm flex flex-col justify-between"
          >
            <div>
              <span className="text-xs font-black text-blue-600 bg-blue-50 border border-blue-200 px-3 py-1 rounded-full inline-block mb-3">
                Adım {item.step}
              </span>
              <h3 className="text-lg font-black text-slate-900 mb-2">{item.title}</h3>
              <p className="text-xs text-slate-600 leading-relaxed">{item.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
