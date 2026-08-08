'use client';

// ═══════════════════════════════════════════════════════════
// NOVA EPOKSI ANTALYA — CANLI RAL RENK VE DOKU SEÇİCİ
// Müşteri İçin İnteraktif Epoksi Renk Kartelası
// ═══════════════════════════════════════════════════════════

import React, { useState } from 'react';

interface EpoxyColor {
  ralCode: string;
  name: string;
  hex: string;
  finishType: string;
  description: string;
  bgGradient: string;
}

const EPOXY_COLORS: EpoxyColor[] = [
  {
    ralCode: 'RAL 7040',
    name: 'Pencere Grisi (Fabrika Standardı)',
    hex: '#9DA3A6',
    finishType: 'Yüksek Parlaklık / Kaymaz Multilayer',
    description: 'Fabrikalar, lojistik depolar ve atölyeler için en çok tercih edilen toz göstermeyen endüstriyel gri.',
    bgGradient: 'linear-gradient(135deg, #9DA3A6 0%, #64748B 100%)'
  },
  {
    ralCode: 'RAL 5015',
    name: 'Gökyüzü Mavisi (Otopark & Tesis)',
    hex: '#007CBA',
    finishType: 'Self-Leveling Hijyenik Kaplama',
    description: 'AVM otoparkları, araç servisleri ve gıda tesisleri için ferah, hijyenik ve yüksek prestijli mavi.',
    bgGradient: 'linear-gradient(135deg, #0284C7 0%, #0369A1 100%)'
  },
  {
    ralCode: 'RAL 1023',
    name: 'Trafik Sarısı (Güvenlik & Yürüme Yolu)',
    hex: '#F7B500',
    finishType: 'Çizgi & İş Güvenliği Boyası',
    description: 'Fabrika içi forklift yolları, iş güvenliği çizgileri ve tehlikeli alan işaretlemeleri için parlak sarı.',
    bgGradient: 'linear-gradient(135deg, #EAB308 0%, #CA8A04 100%)'
  },
  {
    ralCode: 'RAL 7016',
    name: 'Antrasit Gri (Lüks Garaj & Showroom)',
    hex: '#373F43',
    finishType: 'Metalik Simli / Epoksi Flake Pullu',
    description: 'Lüks villa garajları, otomotiv showroomları ve modern kafeler için elit koyu antrasit yüzey.',
    bgGradient: 'linear-gradient(135deg, #334155 0%, #0F172A 100%)'
  },
  {
    ralCode: 'SPECIAL-ESD',
    name: 'Anti-Statik İletken Yeşil',
    hex: '#10B981',
    finishType: 'ESD İletken Bakır Verili Zemin',
    description: 'Ameliyathaneler, elektronik montaj hatları ve patlayıcı madde depoları için statik elektrik emici zemin.',
    bgGradient: 'linear-gradient(135deg, #10B981 0%, #047857 100%)'
  }
];

export default function EpoksiColorGallery() {
  const [selectedColor, setSelectedColor] = useState<EpoxyColor>(EPOXY_COLORS[0]);

  return (
    <div className="w-full bg-white border border-slate-200 rounded-3xl p-6 sm:p-8 shadow-sm">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-8 gap-4">
        <div>
          <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-black bg-blue-100 text-blue-800 border border-blue-200 mb-2">
            🎨 CANLI RAL RENK KARTELASI
          </span>
          <h3 className="text-xl sm:text-2xl font-black text-slate-900">
            Epoksi Renk ve Yüzey Bitiş Seçimi
          </h3>
          <p className="text-xs text-slate-600 mt-1">
            Zemininiz için istediğiniz RAL kodunu seçerek uygulamanın duruşunu canlı inceleyin.
          </p>
        </div>
      </div>

      {/* Renk Seçim Izgarası */}
      <div className="grid grid-cols-2 sm:grid-cols-5 gap-3 mb-8">
        {EPOXY_COLORS.map((color) => (
          <button
            key={color.ralCode}
            onClick={() => setSelectedColor(color)}
            className={`p-3 rounded-2xl border transition-all text-left flex flex-col justify-between h-24 cursor-pointer relative overflow-hidden ${
              selectedColor.ralCode === color.ralCode
                ? 'border-blue-600 ring-2 ring-blue-600/30 scale-[1.02] bg-blue-50/50'
                : 'border-slate-200 bg-slate-50 hover:border-slate-300'
            }`}
          >
            <div
              className="w-full h-8 rounded-xl shadow-inner mb-2"
              style={{ background: color.bgGradient }}
            />
            <div>
              <span className="text-[10px] font-black text-blue-700 block leading-none">{color.ralCode}</span>
              <span className="text-xs font-bold text-slate-800 truncate block mt-0.5">{color.name.split(' ')[0]}</span>
            </div>
          </button>
        ))}
      </div>

      {/* Seçilen Renk Detay Kartı */}
      <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6 flex flex-col md:flex-row items-center gap-6">
        <div
          className="w-full md:w-48 h-32 rounded-xl shadow-md flex flex-col justify-between p-4 border border-white/20"
          style={{ background: selectedColor.bgGradient }}
        >
          <span className="text-xs font-black text-white bg-black/40 backdrop-blur-md px-2.5 py-1 rounded-md inline-block w-fit">
            {selectedColor.ralCode}
          </span>
          <span className="text-xs font-extrabold text-white">
            %100 Parlak Epoksi
          </span>
        </div>

        <div className="flex-1 space-y-2">
          <div className="flex items-center gap-2">
            <span className="text-xs font-bold px-2.5 py-0.5 rounded bg-blue-100 text-blue-800 border border-blue-200">
              {selectedColor.finishType}
            </span>
          </div>
          <h4 className="text-lg font-black text-slate-900">{selectedColor.name}</h4>
          <p className="text-xs text-slate-600 leading-relaxed">
            {selectedColor.description}
          </p>
        </div>
      </div>
    </div>
  );
}
