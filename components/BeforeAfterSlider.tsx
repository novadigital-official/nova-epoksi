'use client';

// ═══════════════════════════════════════════════════════════
// NOVA EPOKSI ANTALYA — BİREBİR EPOKSİ ÖNCE / SONRA DÖNÜŞÜM SÜRGÜSÜ
// ═══════════════════════════════════════════════════════════

import React, { useState } from 'react';

export default function BeforeAfterSlider() {
  const [sliderPos, setSliderPos] = useState<number>(50);

  return (
    <div id="donusum" className="w-full bg-white border border-slate-200/90 rounded-3xl p-6 sm:p-8 shadow-xs">
      <div className="flex flex-col md:flex-row md:items-center justify-between mb-6 gap-4">
        <div>
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-heading font-extrabold bg-amber-50 text-amber-900 border border-amber-200/80 mb-2 uppercase tracking-wider">
            <span>✨ Canlı Saha Dönüşümü</span>
          </span>
          <h3 className="text-xl sm:text-2xl md:text-3xl font-heading font-extrabold text-slate-900 tracking-tight">
            Ham Beton vs. Aynalı Endüstriyel Epoksi Zemin
          </h3>
          <p className="text-xs sm:text-sm text-slate-500 mt-1">
            Çizgiyi sola-sağa sürükleyerek elmas silim ve çok katmanlı epoksi uygulamasının yarattığı farkı inceleyin.
          </p>
        </div>

        <div className="flex items-center gap-2 text-xs font-bold shrink-0">
          <span className="bg-slate-100 text-slate-700 px-3 py-1.5 rounded-xl border border-slate-200">
            📍 Döşemealtı OSB
          </span>
          <span className="bg-amber-50 text-amber-900 px-3 py-1.5 rounded-xl border border-amber-200">
            📐 3.500 m² Proje
          </span>
        </div>
      </div>

      {/* Sürüklenebilir Karşılaştırma Alanı */}
      <div className="relative w-full h-[320px] sm:h-[480px] rounded-3xl overflow-hidden select-none border border-slate-200 shadow-lg bg-slate-950">
        
        {/* SAĞ TARAF: SONRA (Aynalı Epoksi) */}
        <img
          src="/images/real-after.jpg"
          alt="Sonra - Aynalı Parlak Epoksi Zemin"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute top-4 right-4 bg-emerald-600/90 text-white font-extrabold px-3.5 py-1.5 rounded-xl text-xs z-10 shadow-md backdrop-blur-md flex items-center gap-1.5">
          <span>✓ SONRA: PARLAK EPOKSİ KAPLAMA</span>
        </div>

        {/* SOL TARAF: ÖNCE (Ham Beton) */}
        <div
          className="absolute inset-y-0 left-0 overflow-hidden border-r-2 border-amber-500 shadow-2xl"
          style={{ width: `${sliderPos}%` }}
        >
          <div className="absolute inset-0 w-full h-full bg-slate-900">
            <img
              src="/images/real-before.jpg"
              alt="Önce - Ham Mat Tozutan Beton Zemin"
              className="absolute inset-0 w-full h-full object-cover"
              style={{ width: '100%', height: '100%' }}
            />
            <div className="absolute top-4 left-4 bg-slate-950/90 text-white font-bold px-3.5 py-1.5 rounded-xl text-xs z-10 shadow-md backdrop-blur-md">
              ✕ ÖNCE: HAM MAT BETON
            </div>
          </div>
        </div>

        {/* Sürgü Çizgisi ve Amber Buton */}
        <div
          className="absolute top-0 bottom-0 w-0.5 bg-amber-400 z-20 pointer-events-none"
          style={{ left: `${sliderPos}%` }}
        >
          <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-11 h-11 bg-amber-500 text-slate-950 font-black rounded-full flex items-center justify-center text-sm shadow-xl border-2 border-white cursor-ew-resize">
            ↔
          </div>
        </div>

        <input
          type="range"
          min="0"
          max="100"
          value={sliderPos}
          onChange={(e) => setSliderPos(Number(e.target.value))}
          aria-label="Önce Sonra Görsel Sürgüsü"
          className="absolute inset-0 w-full h-full opacity-0 cursor-ew-resize z-30"
        />
      </div>
    </div>
  );
}
