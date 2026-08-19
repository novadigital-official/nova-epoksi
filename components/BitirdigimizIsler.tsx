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
    image: '/images/real-factory.jpg',
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
    image: '/images/real-hotel.jpg',
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
    image: '/images/real-garage.jpg',
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
    <div id="isler" className="w-full space-y-8">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto space-y-2">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-heading font-semibold bg-slate-100 text-slate-700 uppercase tracking-wider">
          <span>Saha Uygulamaları</span>
        </div>
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-heading font-extrabold text-slate-900 tracking-tight">
          Tamamlanan Endüstriyel Saha Projelerimiz
        </h2>
        <p className="text-xs sm:text-sm text-slate-500 max-w-3xl mx-auto font-normal">
          Antalya Organize Sanayi Bölgesi ve ticari tesislerde başarıyla teslim edilen zemin projelerimiz.
        </p>
      </div>

      {/* Modern Filter Pills */}
      <div className="flex flex-wrap items-center justify-center gap-2">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setSelectedFilter(cat)}
            className={`px-4 py-2 rounded-2xl text-xs font-semibold font-heading transition-all border cursor-pointer ${
              selectedFilter === cat
                ? 'bg-slate-900 text-amber-400 border-slate-900 shadow-sm'
                : 'bg-white text-slate-700 border-slate-200 hover:border-slate-400 hover:bg-slate-50'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* 6 Project Gallery Cards with 16:10 Ratio & Modern Depth */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredProjects.map((project) => (
          <div
            key={project.id}
            className="bg-white border border-slate-200/90 rounded-3xl overflow-hidden shadow-2xs hover:shadow-md transition-all duration-300 group flex flex-col justify-between"
          >
            <div>
              <div className="aspect-[16/10] overflow-hidden relative bg-slate-950">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-90"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent pointer-events-none" />
                
                <span className="absolute top-3 left-3 bg-slate-900/80 backdrop-blur-md text-amber-400 font-mono font-medium text-[10px] px-2.5 py-1 rounded-xl uppercase tracking-wide border border-slate-700">
                  {project.category}
                </span>
                
                <span className="absolute bottom-3 right-3 bg-slate-900/90 text-white font-mono font-bold text-xs px-2.5 py-1 rounded-xl border border-slate-700">
                  {project.squareMeters}
                </span>

                <span className="absolute bottom-3 left-3 text-slate-300 font-mono text-[11px] truncate max-w-[60%]">
                  {project.location}
                </span>
              </div>

              <div className="p-5 space-y-2">
                <h3 className="text-base font-heading font-bold text-slate-900 leading-snug">
                  {project.title}
                </h3>
                <p className="text-xs text-slate-500 leading-relaxed line-clamp-2 font-normal">
                  {project.description}
                </p>
              </div>
            </div>

            <div className="px-5 pb-5 pt-3 border-t border-slate-100 flex items-center justify-between font-mono text-[11px]">
              <span className="text-slate-500 font-medium">{project.system}</span>
              <span className="font-semibold text-slate-900 group-hover:text-amber-600 transition-colors">Şartname İncele →</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
