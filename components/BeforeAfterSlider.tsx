'use client';

// ═══════════════════════════════════════════════════════════
// NOVA EPOKSI ANTALYA — BİREBİR EPOKSİSİZ VE EPOKSİLİ DÖNÜŞÜM
// Sol Taraf: Ham Mat Beton (Epoksisiz) vs Sağ Taraf: Parlak Epoksi
// ═══════════════════════════════════════════════════════════

import React, { useState } from 'react';

export default function BeforeAfterSlider() {
  const [sliderPos, setSliderPos] = useState<number>(50);

  return (
    <div id="donusum" className="w-full bg-white border border-slate-200 rounded-3xl p-6 sm:p-8 shadow-sm">
      <div className="flex flex-col md:flex-row md:items-center justify-between mb-6 gap-4">
        <div>
          <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-black bg-blue-100 text-blue-800 border border-blue-200 mb-2 uppercase tracking-wider">
            SAHA CANLI BİREBİR DÖNÜŞÜM
          </span>
          <h3 className="text-xl sm:text-2xl font-black text-slate-900">
            Epoksisiz Ham Beton vs. Aynalı Parlak Epoksi Zemin
          </h3>
          <p className="text-xs text-slate-600 mt-1">
            Çizgiyi sürükleyerek tesis zeminindeki epoksisiz ham mat beton ile teslim ettiğimiz aynalı epoksi kaplamayı birebir inceleyin.
          </p>
        </div>

        <div className="flex items-center gap-2 text-xs font-bold">
          <span className="bg-slate-100 text-slate-700 px-3 py-1.5 rounded-xl border border-slate-200">
            Konum: Döşemealtı OSB
          </span>
          <span className="bg-blue-50 text-blue-700 px-3 py-1.5 rounded-xl border border-blue-200">
            Alan: 3.500 m²
          </span>
        </div>
      </div>

      {/* Birebir Epoksisiz (Ham Beton) vs Epoksili (Parlak) Sürüklenebilir Görsel Karşılaştırma */}
      <div className="relative w-full h-[360px] sm:h-[500px] rounded-2xl overflow-hidden select-none border border-slate-300 shadow-md">
        {/* SAĞ TARAF: SONRA (Aynalı Parlak Epoksi Zemin) */}
        <img
          src="/images/saha-depo.png"
          alt="Sonra - Aynalı Parlak Epoksi Zemin"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute top-4 right-4 bg-emerald-600 text-white font-black px-3.5 py-1.5 rounded-xl text-xs z-10 shadow-md flex items-center gap-1.5">
          <span>✓ SONRA: AYNALI PARLAK EPOKSİ ZEMİN</span>
        </div>

        {/* SOL TARAF: ÖNCE (Görselin Mat, Parlaklığı Alınmış, Epoksisiz Ham Beton Hali) */}
        <div
          className="absolute inset-y-0 left-0 overflow-hidden border-r-2 border-blue-600 shadow-xl"
          style={{ width: `${sliderPos}%` }}
        >
          <div className="absolute inset-0 w-full h-full bg-slate-400">
            <img
              src="/images/saha-depo.png"
              alt="Önce - Epoksisiz Ham Mat Beton Zemin"
              className="absolute inset-0 w-full h-full object-cover filter grayscale contrast-75 brightness-90 saturate-0"
              style={{ width: '100%', height: '100%' }}
            />
            {/* Epoksisiz Mat Beton Yüzey Overlay (Parlaklığı tamamen yok eden mat şeffaf katman) */}
            <div className="absolute inset-0 bg border-slate-500/40 backdrop-blur-[0.6px] bg-slate-300/40 mix-blend-multiply"></div>
            
            <div className="absolute top-4 left-4 bg-slate-900/90 text-white font-bold px-3.5 py-1.5 rounded-xl text-xs z-10 shadow-md">
              ✕ ÖNCE: EPOKSİSİZ HAM MAT BETON ZEMİN
            </div>
          </div>
        </div>

        {/* Sürgü Çizgisi ve Düğmesi */}
        <div
          className="absolute top-0 bottom-0 w-1 bg-blue-600 z-20 pointer-events-none"
          style={{ left: `${sliderPos}%` }}
        >
          <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-10 h-10 bg-blue-600 text-white font-black rounded-full flex items-center justify-center text-sm shadow-xl border-2 border-white">
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
