'use client';

// ═══════════════════════════════════════════════════════════
// ANTALYA NOVA EPOKSI — KURUMSAL GÜVENCE VE MÜHENDİSLİK STANDARTLARI
// ═══════════════════════════════════════════════════════════

import React from 'react';

const TRUST_METRICS = [
  {
    icon: '🛡️',
    title: '10 Yıl Resmi Garanti',
    desc: 'Malzeme ve uygulama hatalarına karşı yazılı sözleşme ve kaşeli garanti belgesi.'
  },
  {
    icon: '📜',
    title: 'ISO 9001 & CE EN 1504-2',
    desc: 'Solventsiz, kokusuz, gıda ve ilaç sanayi HACCP hijyen standartlarına tam uyum.'
  },
  {
    icon: '🚜',
    title: 'Ağır Forklift Mukavemeti',
    desc: 'Titreşim, noktasal yük ve hidrolik yağ sızıntılarına karşı 3-5mm endüstriyel dayanım.'
  },
  {
    icon: '📐',
    title: 'Aynı Gün Ücretsiz Keşif',
    desc: 'Antalya OSB ve tüm ilçelerde yerinde lazerli nem analizi ve metraj çalışması.'
  }
];

export default function TrustBadges() {
  return (
    <div className="w-full space-y-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {TRUST_METRICS.map((metric, idx) => (
          <div
            key={idx}
            className="bg-white border border-slate-200/90 p-5 rounded-2xl flex items-start gap-3.5 shadow-2xs hover:shadow-md transition-all group"
          >
            <div className="text-2xl p-2.5 rounded-xl bg-slate-50 border border-slate-100 shrink-0">
              {metric.icon}
            </div>
            <div className="space-y-1">
              <h4 className="text-xs sm:text-sm font-heading font-extrabold text-slate-900 group-hover:text-amber-600 transition-colors">
                {metric.title}
              </h4>
              <p className="text-xs text-slate-500 leading-relaxed font-normal">
                {metric.desc}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
