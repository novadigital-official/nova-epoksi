'use client';

// ═══════════════════════════════════════════════════════════
// ANTALYA NOVA EPOKSI — KURUMSAL GÜVEN VE SERTİFİKA BİLEŞENİ
// ═══════════════════════════════════════════════════════════

import React from 'react';

export default function TrustBadges() {
  return (
    <div className="w-full space-y-10">
      {/* 1. Rozetler & Sertifikalar */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="bg-white border border-slate-200 p-5 rounded-2xl flex items-center gap-4 shadow-sm hover:shadow-md transition-all">
          <div className="w-12 h-12 bg-blue-100 text-blue-800 rounded-xl flex items-center justify-center text-2xl flex-shrink-0 font-black">
            10
          </div>
          <div>
            <h4 className="text-sm font-extrabold text-slate-900 leading-snug">10 Yıl Resmi Garanti</h4>
            <p className="text-xs text-slate-600 mt-0.5">Yazılı garanti sözleşmesi ile malzeme ve işçilik güvencesi.</p>
          </div>
        </div>

        <div className="bg-white border border-slate-200 p-5 rounded-2xl flex items-center gap-4 shadow-sm hover:shadow-md transition-all">
          <div className="w-12 h-12 bg-emerald-100 text-emerald-800 rounded-xl flex items-center justify-center text-2xl flex-shrink-0 font-black">
            TSE
          </div>
          <div>
            <h4 className="text-sm font-extrabold text-slate-900 leading-snug">TSE & ISO 9001 Onayı</h4>
            <p className="text-xs text-slate-600 mt-0.5">Solventsiz, kokusuz, gıda ve sağlık standartlarına tam uyumlu.</p>
          </div>
        </div>

        <div className="bg-white border border-slate-200 p-5 rounded-2xl flex items-center gap-4 shadow-sm hover:shadow-md transition-all">
          <div className="w-12 h-12 bg-amber-100 text-amber-800 rounded-xl flex items-center justify-center text-2xl flex-shrink-0 font-black">
            ⚙️
          </div>
          <div>
            <h4 className="text-sm font-extrabold text-slate-900 leading-snug">%100 Darbe & Yağ Dayanımı</h4>
            <p className="text-xs text-slate-600 mt-0.5">Forklift trafiğinde çizilmeyen, hidrolik yağı lekesi tutmayan zemin.</p>
          </div>
        </div>

        <div className="bg-white border border-slate-200 p-5 rounded-2xl flex items-center gap-4 shadow-sm hover:shadow-md transition-all">
          <div className="w-12 h-12 bg-indigo-100 text-indigo-800 rounded-xl flex items-center justify-center text-2xl flex-shrink-0 font-black">
            📍
          </div>
          <div>
            <h4 className="text-sm font-extrabold text-slate-900 leading-snug">Aynı Gün Yerinde Keşif</h4>
            <p className="text-xs text-slate-600 mt-0.5">Antalya OSB, Muratpaşa, Kepez ve tüm ilçelerde ücretsiz analiz.</p>
          </div>
        </div>
      </div>

      {/* 2. Gerçek Antalya Tesis Referans Yorumları */}
      <div className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-8 shadow-sm">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-6 gap-2">
          <div>
            <span className="text-xs font-extrabold text-blue-600 uppercase tracking-wider block mb-1">
              ⭐ SAHA MÜŞTERİ GERİ BİLDİRİMLERİ
            </span>
            <h3 className="text-xl font-black text-slate-900">Antalya Sanayi ve Tesis Yorumları</h3>
          </div>
          <div className="flex items-center gap-1 text-amber-500 font-black text-sm">
            ★★★★★ <span className="text-slate-700">5.0 / 5.0 (150+ Referans)</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-slate-50 p-5 rounded-2xl border border-slate-200 flex flex-col justify-between">
            <p className="text-xs text-slate-700 italic mb-4 leading-relaxed">
              "Döşemealtı OSB'deki 3.500 m² lojistik depomuzun zemininde tozuma sıfıra indi. Elmas silim ve multilayer epoksi uygulaması söz verildiği gibi 4 günde bitti."
            </p>
            <div>
              <div className="font-extrabold text-xs text-slate-900">Mehmet Akif B.</div>
              <div className="text-[11px] text-slate-500">Lojistik Tesis Yöneticisi • Antalya OSB</div>
            </div>
          </div>

          <div className="bg-slate-50 p-5 rounded-2xl border border-slate-200 flex flex-col justify-between">
            <p className="text-xs text-slate-700 italic mb-4 leading-relaxed">
              "Muratpaşa'daki 3 katlı kapalı otoparkımız için yönlendirme çizgileriyle birlikte gri/mavi epoksi yapıldı. Araç tekerlek izi kesinlikle kalmıyor."
            </p>
            <div>
              <div className="font-extrabold text-xs text-slate-900">Serkan T.</div>
              <div className="text-[11px] text-slate-500">Site & Otopark Müdürü • Muratpaşa</div>
            </div>
          </div>

          <div className="bg-slate-50 p-5 rounded-2xl border border-slate-200 flex flex-col justify-between">
            <p className="text-xs text-slate-700 italic mb-4 leading-relaxed">
              "Gıda imalat tesisimiz için hijyen sertifikalı pürüzsüz self-leveling epoksi kaplatıldı. Tarım İl Müdürlüğü denetiminden ilk seferde onay aldık."
            </p>
            <div>
              <div className="font-extrabold text-xs text-slate-900">Zafer K.</div>
              <div className="text-[11px] text-slate-500">Gıda Fabrikası Sahibi • Kepez</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
