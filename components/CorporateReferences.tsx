'use client';

// ═══════════════════════════════════════════════════════════
// NOVA EPOKSI ANTALYA — ENDÜSTRİYEL KULLANIM ALANLARI
// ═══════════════════════════════════════════════════════════

import React from 'react';

const SERVICE_AREAS = [
  { code: 'SEC-01', name: 'FABRİKA & İMALATHANE', detail: 'Ağır Yük, Kimyasal & Forklift Zeminleri' },
  { code: 'SEC-02', name: 'LOJİSTİK DEPO & ANTREPO', detail: 'Tozumaz, Yüksek Sürtünme Mukavemeti' },
  { code: 'SEC-03', name: 'OTOPARK VE KAPALI GARAJ', detail: 'Lastik İzi Tutmayan Kaydırmaz Dokulu' },
  { code: 'SEC-04', name: 'OTEL, AVM & SHOWROOM', detail: 'Yüksek Parlaklıkta Dekoratif & Derzsiz' },
  { code: 'SEC-05', name: 'OTO SERVİS & ATÖLYE', detail: 'Yağ ve Hidrolik Sızıntılarına Mukavim' },
  { code: 'SEC-06', name: 'GIDA & İLAÇ TESİSİ', detail: 'HACCP Uyumlu Anti-Bakteriyel Monolitik' }
];

export default function CorporateReferences() {
  return (
    <div className="w-full space-y-5">
      <div className="text-left border-b border-gray-300 pb-3">
        <div className="inline-flex items-center gap-2 px-2 py-0.5 rounded text-[10px] font-mono font-bold bg-[#1A1C20] text-[#F4B400] mb-1.5 uppercase tracking-wider">
          SEKTÖREL UYGULAMA ALANLARI
        </div>
        <h3 className="text-xl sm:text-2xl font-black text-[#1A1C20] tracking-tight">
          Tesis Tipine Göre Belirlenen Standart Epoksi Çözümleri
        </h3>
        <p className="text-xs text-gray-600 mt-0.5">
          Tesisin maruz kalacağı mekanik ve kimyasal yüke göre epoksi katman kalınlığı projelendirilir.
        </p>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2.5">
        {SERVICE_AREAS.map((area, idx) => (
          <div
            key={idx}
            className="bg-[#F8F9FB] border border-gray-300 p-3.5 rounded text-left shadow-sm hover:border-[#1A1C20] hover:bg-white transition-all flex flex-col justify-between"
          >
            <div>
              <span className="font-mono text-[9px] text-gray-400 font-bold block mb-1">
                {area.code}
              </span>
              <div className="font-extrabold text-xs text-[#1A1C20] leading-tight pb-1.5 border-b border-gray-200">
                {area.name}
              </div>
            </div>
            <div className="text-[10px] text-gray-600 font-medium mt-2 leading-tight">
              {area.detail}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
