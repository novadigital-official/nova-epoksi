'use client';

// ═══════════════════════════════════════════════════════════
// NOVA EPOKSI ANTALYA — TAMAMLANAN UYGULAMA ÖRNEKLERİ
// 6 Adet Gerçek Saha Uygulama Referansı
// ═══════════════════════════════════════════════════════════

import React, { useState } from 'react';

interface ProjectItem {
  id: string;
  title: string;
  category: string;
  location: string;
  squareMeters: string;
  system: string;
  image: string;
  description: string;
}

const COMPLETED_SIX_PROJECTS: ProjectItem[] = [
  {
    id: '1',
    title: 'Fabrika Üretim Alanı Epoksi Kaplama',
    category: 'Fabrika',
    location: 'Antalya / Döşemealtı OSB',
    squareMeters: '2.500 m²',
    system: 'Self Leveling Epoksi',
    image: '/images/saha-endustriyel.png',
    description: 'Ağır sanayi üretim alanı için tozumaz, pürüzsüz ve gıda standartlarına uygun epoksi zemin kaplaması.'
  },
  {
    id: '2',
    title: 'Otomotiv Bakım Atölyesi Zemini',
    category: 'Otomotiv',
    location: 'Antalya / Kepez',
    squareMeters: '800 m²',
    system: 'Ağır Yük Multilayer Epoksi',
    image: '/images/saha-otomotiv.png',
    description: 'Motor yağı ve hidrolik sızıntılarına dayanıklı, araç lift yolları belirgin kaymaz araç servis zemini.'
  },
  {
    id: '3',
    title: 'Otel Lobi Uygulaması',
    category: 'Otel & Lobi',
    location: 'Antalya / Lara',
    squareMeters: '450 m²',
    system: 'Metalik Efekt Epoksi',
    image: '/images/saha-otel.png',
    description: 'Mermer görünümüne sahip, yüksek reflektif ve estetik hotel lobi zemin kaplaması.'
  },
  {
    id: '4',
    title: 'Kozmetik Deposu Zemin Kaplaması',
    category: 'Depo / Üretim',
    location: 'Antalya / Aksu',
    squareMeters: '1.200 m²',
    system: 'Kimyasal Dayanımlı Epoksi',
    image: '/images/saha-kozmetik.png',
    description: 'Dökülmelere karşı korumalı, kolay temizlenen ve hijyen sağlayan zemin çözümü.'
  },
  {
    id: '5',
    title: 'Tekstil Atölyesi Zemin Kaplaması',
    category: 'İmalathane',
    location: 'Antalya / Muratpaşa',
    squareMeters: '1.800 m²',
    system: 'Pürüzsüz Epoksi Zemin',
    image: '/images/saha-tekstil.png',
    description: 'İplik tozunu tutmayan, aydınlık ve ferah bir çalışma ortamı sunan tesis zemini.'
  },
  {
    id: '6',
    title: 'Lojistik Depo Otopark Uygulaması',
    category: 'Depo & Otopark',
    location: 'Döşemealtı OSB',
    squareMeters: '3.500 m²',
    system: 'Ağır Yük Multilayer Epoksi',
    image: '/images/saha-depo.png',
    description: 'Forklift ve araç trafiğine dayanıklı, beton tozumasını tamamen kesen zemin kaplaması.'
  }
];

export default function BitirdigimizIsler() {
  const [selectedFilter, setSelectedFilter] = useState<string>('HEPSİ');

  const categories = ['HEPSİ', 'Fabrika', 'Depo / Üretim', 'Otopark', 'Otel & Lobi', 'Otomotiv'];

  const filteredProjects = selectedFilter === 'HEPSİ'
    ? COMPLETED_SIX_PROJECTS
    : COMPLETED_SIX_PROJECTS.filter(p => p.category === selectedFilter || p.category.includes(selectedFilter));

  return (
    <div id="isler" className="w-full space-y-8">
      {/* Başlık */}
      <div className="text-center max-w-3xl mx-auto">
        <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-black bg-blue-100 text-blue-800 border border-blue-200 mb-3 uppercase tracking-wider">
          SAHA UYGULAMA SAHALARIMIZ
        </span>
        <h2 className="text-2xl sm:text-4xl font-black text-slate-900">
          Tamamlanan Uygulama Örnekleri
        </h2>
        <p className="text-sm text-slate-600 mt-2">
          Antalya ve sanayi bölgelerinde gerçekleştirdiğimiz örnek uygulama görsellerimiz.
        </p>
      </div>

      {/* Kategori Filtre Butonları */}
      <div className="flex flex-wrap items-center justify-center gap-2">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setSelectedFilter(cat)}
            className={`px-4 py-2 rounded-xl text-xs font-extrabold transition-all border cursor-pointer ${
              selectedFilter === cat
                ? 'bg-blue-600 text-white border-blue-600 shadow-sm'
                : 'bg-white text-slate-700 border-slate-200 hover:border-slate-300'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* 6 Proje Galeri Kartı */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {filteredProjects.map((project) => (
          <div
            key={project.id}
            className="bg-white border border-slate-200 rounded-3xl overflow-hidden shadow-sm hover:shadow-md hover:border-blue-500 transition-all cursor-pointer group flex flex-col justify-between"
          >
            <div>
              <div className="h-56 overflow-hidden relative">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-all duration-500"
                />
                <span className="absolute top-3 left-3 bg-blue-600 text-white font-black text-[10px] px-2.5 py-1 rounded-md uppercase tracking-wide">
                  {project.category}
                </span>
                <span className="absolute bottom-3 right-3 bg-slate-900/90 text-white font-bold text-[10px] px-2.5 py-1 rounded-md border border-slate-700">
                  {project.squareMeters}
                </span>
              </div>

              <div className="p-5">
                <div className="text-[11px] font-bold text-blue-600 mb-1">Konum: {project.location}</div>
                <h3 className="text-base font-black text-slate-900 mb-2 leading-snug group-hover:text-blue-600 transition-colors">
                  {project.title}
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  {project.description}
                </p>
              </div>
            </div>

            <div className="px-5 pb-5 pt-2 border-t border-slate-100 flex items-center justify-between">
              <span className="text-[11px] font-bold text-slate-500">Sistem: {project.system}</span>
              <span className="text-xs font-black text-blue-600">İncele →</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
