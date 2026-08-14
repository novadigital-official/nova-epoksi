'use client';

// ═══════════════════════════════════════════════════════════
// NOVA EPOKSI ANTALYA — SAHA REFERANSLARI & PROJE GALERİSİ
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
    system: 'Self-Leveling Epoksi',
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
    title: 'Otel Lobi ve Fuaye Uygulaması',
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
    title: 'Tekstil İmalathanesi Zemin Kaplaması',
    category: 'İmalathane',
    location: 'Antalya / Muratpaşa',
    squareMeters: '1.800 m²',
    system: 'Pürüzsüz Epoksi Zemin',
    image: '/images/saha-tekstil.png',
    description: 'İplik tozunu tutmayan, aydınlık ve ferah bir çalışma ortamı sunan tesis zemini.'
  },
  {
    id: '6',
    title: 'Lojistik Depo & Otopark Uygulaması',
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

  const categories = ['HEPSİ', 'Fabrika', 'Depo / Üretim', 'Depo & Otopark', 'Otel & Lobi', 'Otomotiv'];

  const filteredProjects = selectedFilter === 'HEPSİ'
    ? COMPLETED_SIX_PROJECTS
    : COMPLETED_SIX_PROJECTS.filter(p => p.category === selectedFilter || p.category.includes(selectedFilter));

  return (
    <div id="isler" className="w-full space-y-6">
      {/* Header */}
      <div className="text-left border-b border-gray-300 pb-4">
        <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded text-[11px] font-mono font-bold bg-[#1A1C20] text-[#F4B400] mb-2 uppercase tracking-wider">
          SAHA UYGULAMA RAPORLARI
        </div>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-[#1A1C20] tracking-tight">
          Tamamlanan Endüstriyel Saha Referansları
        </h2>
        <p className="text-xs sm:text-sm text-gray-600 mt-1 max-w-3xl">
          Antalya Organize Sanayi Bölgesi ve ticari tesislerde başarıyla teslim edilen zemin projelerimiz.
        </p>
      </div>

      {/* Industrial Filter Buttons (Sharp 4px Radius) */}
      <div className="flex flex-wrap items-center gap-1.5">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setSelectedFilter(cat)}
            className={`px-3.5 py-1.5 rounded text-xs font-bold font-mono transition-all border cursor-pointer ${
              selectedFilter === cat
                ? 'bg-[#1A1C20] text-[#F4B400] border-[#1A1C20] shadow-sm'
                : 'bg-white text-gray-700 border-gray-300 hover:border-gray-500'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* 6 Project Gallery Cards with Consistent 16:10 Ratio & Dark Gradient */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        {filteredProjects.map((project) => (
          <div
            key={project.id}
            className="bg-white border border-gray-300 rounded overflow-hidden shadow-sm hover:shadow-md transition-all group flex flex-col justify-between"
          >
            <div>
              <div className="aspect-[16/10] overflow-hidden relative bg-gray-900">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-all duration-500 opacity-90"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1A1C20]/90 via-transparent to-transparent pointer-events-none" />
                
                <span className="absolute top-2.5 left-2.5 bg-[#1A1C20] text-[#F4B400] font-mono font-bold text-[10px] px-2 py-0.5 rounded uppercase tracking-wide border border-gray-700">
                  {project.category}
                </span>
                
                <span className="absolute bottom-2.5 right-2.5 bg-[#1A1C20]/95 text-white font-mono font-black text-xs px-2 py-0.5 rounded border border-gray-700">
                  {project.squareMeters}
                </span>

                <span className="absolute bottom-2.5 left-2.5 text-gray-300 font-mono text-[11px] truncate max-w-[65%]">
                  {project.location}
                </span>
              </div>

              <div className="p-4">
                <h3 className="text-sm font-extrabold text-[#1A1C20] mb-1.5 leading-snug group-hover:text-[#F4B400] transition-colors">
                  {project.title}
                </h3>
                <p className="text-xs text-gray-600 leading-relaxed line-clamp-2">
                  {project.description}
                </p>
              </div>
            </div>

            <div className="px-4 pb-4 pt-2 border-t border-gray-100 flex items-center justify-between font-mono text-[11px]">
              <span className="text-gray-500 font-bold">Sistem: {project.system}</span>
              <span className="font-bold text-[#1A1C20] group-hover:text-[#F4B400] transition-colors">Şartname ↗</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
