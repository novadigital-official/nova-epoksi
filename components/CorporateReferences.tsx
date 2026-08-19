'use client';

// ═══════════════════════════════════════════════════════════
// NOVA EPOKSI ANTALYA — SEKTÖREL UYGULAMA ALANLARI (FOTOĞRAFLI KARTLAR)
// ═══════════════════════════════════════════════════════════

import React from 'react';

const SERVICE_AREAS = [
  {
    code: 'SEC-01',
    name: 'Fabrika & Ağır Sanayi',
    detail: 'Ağır forklift trafiği, titreşim ve kimyasal dökülmelere karşı 3-4mm multilayer epoksi.',
    image: '/images/real-factory.jpg',
    tag: 'OSB / Üretim'
  },
  {
    code: 'SEC-02',
    name: 'Lojistik Depo & Antrepo',
    detail: 'Tozumaz, elmas silim zemin hazırlıklı, yüksek sürtünme ve tekerlek aşınma direnci.',
    image: '/images/saha-depo.png',
    tag: 'Tozumaz Zemin'
  },
  {
    code: 'SEC-03',
    name: 'Otopark & Kapalı Garaj',
    detail: 'Portakal kabuğu dokulu kaydırmaz yüzey, lastik izi tutmayan kolay temizlenebilir formül.',
    image: '/images/real-garage.jpg',
    tag: 'Kaydırmaz Doku'
  },
  {
    code: 'SEC-04',
    name: 'Otel, AVM & Showroom',
    detail: 'Yüksek parlaklıkta metalik ve 3D self-leveling monolitik derzsiz mimari zeminler.',
    image: '/images/real-hotel.jpg',
    tag: 'Dekoratif Lüks'
  },
  {
    code: 'SEC-05',
    name: 'Oto Servis & Atölye',
    detail: 'Motor yağı, hidrolik sıvı ve fren hidroliklerine tam mukavemetli solvent bazlı kaplama.',
    image: '/images/saha-otomotiv.png',
    tag: 'Kimyasal Direnç'
  },
  {
    code: 'SEC-06',
    name: 'Gıda & İlaç Tesisleri',
    detail: 'HACCP ve Sağlık Bakanlığı onaylı antibakteriyel, derzsiz, hijyenik monolitik zemin.',
    image: '/images/saha-kozmetik.png',
    tag: 'HACCP Uyumlu'
  }
];

export default function CorporateReferences() {
  return (
    <div className="w-full space-y-8">
      
      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto space-y-2">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-heading font-extrabold bg-amber-50 text-amber-900 border border-amber-200 uppercase tracking-wider">
          <span>🏭 Sektörel Uzmanlık Alanlarımız</span>
        </div>
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-heading font-extrabold text-slate-900 tracking-tight">
          Tesis Tipine Özel Mühendislik Standartları
        </h2>
        <p className="text-xs sm:text-sm text-slate-500 max-w-2xl mx-auto">
          Tesisin maruz kalacağı mekanik tonaj ve kimyasal yüke göre epoksi katman kalınlığı lazerli analizle projelendirilir.
        </p>
      </div>

      {/* 6 Real Photo Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {SERVICE_AREAS.map((area, idx) => (
          <div
            key={idx}
            className="group bg-white border border-slate-200/90 rounded-3xl overflow-hidden shadow-xs hover:shadow-xl transition-all duration-300 hover:-translate-y-1 flex flex-col justify-between"
          >
            {/* Real Project Image with Gradient Overlay */}
            <div className="relative h-48 sm:h-52 overflow-hidden bg-slate-950">
              <img
                src={area.image}
                alt={area.name}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-90"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/30 to-transparent" />
              
              {/* Floating Tag */}
              <div className="absolute top-3.5 left-3.5 bg-slate-900/80 backdrop-blur-md border border-slate-700/80 px-2.5 py-1 rounded-xl text-[10px] font-bold text-amber-400">
                {area.tag}
              </div>

              {/* Code */}
              <div className="absolute bottom-3.5 left-4 right-4">
                <span className="text-[10px] font-mono font-bold text-amber-400 tracking-wider block">
                  {area.code}
                </span>
                <h3 className="font-heading font-extrabold text-base sm:text-lg text-white leading-tight mt-0.5">
                  {area.name}
                </h3>
              </div>
            </div>

            {/* Description */}
            <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
              <p className="text-xs text-slate-600 leading-relaxed font-normal">
                {area.detail}
              </p>

              <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-slate-900 group-hover:text-amber-600 transition-colors">
                <span>Teknik Şartnameyi İncele</span>
                <span>→</span>
              </div>
            </div>
          </div>
        ))}
      </div>

    </div>
  );
}
