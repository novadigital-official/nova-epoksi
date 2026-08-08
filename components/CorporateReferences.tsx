'use client';

// ═══════════════════════════════════════════════════════════
// NOVA EPOKSI ANTALYA — SAMİMİ SAHA VE UYGULAMA ALANLARI
// Abartısız, Gerçekçi Antalya Saha Hizmet Kategorileri
// ═══════════════════════════════════════════════════════════

import React from 'react';

const SERVICE_AREAS = [
  { name: 'FABRİKA ÜRETİM ALANI', detail: 'Ağır Yük & Kimyasal Dayanımlı Zeminler' },
  { name: 'LOJİSTİK DEPO & ANTREPO', detail: 'Forklift Trafiğine Uygun Tozumaz Zeminler' },
  { name: 'OTOPARK VE GARAJ', detail: 'Araç Lastik İzi Tutmayan Kaymaz Kaplamalar' },
  { name: 'OTEL & RESTORAN LOBİ', detail: 'Dekoratif, Kolay Temizlenen Hijyenik Yüzeyler' },
  { name: 'OTOMOTİV BAKIM ATÖLYESİ', detail: 'Yağ ve Hidrolik Sızıntılarına Dirençli Zemin' },
  { name: 'GIDA & İLAÇ TESİSİ', detail: 'Bakteri Barındırmayan Derzsiz Epoksi' }
];

export default function CorporateReferences() {
  return (
    <div className="w-full space-y-6">
      <div className="text-center max-w-2xl mx-auto">
        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-black bg-blue-100 text-blue-800 border border-blue-200 mb-2 uppercase tracking-wider">
          ANTALYA VE ÇEVRESİNDE UYGULAMA ALANLARIMIZ
        </span>
        <h3 className="text-xl sm:text-2xl font-black text-slate-900">
          İşletmeniz İçin En Doğru Epoksi Sistemini Belirliyoruz
        </h3>
        <p className="text-xs text-slate-600 mt-1">
          Hangi sektörde olursanız olun, mekanın kullanım amacına ve zemin durumuna uygun epoksi çözümünü birlikte planlıyoruz.
        </p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
        {SERVICE_AREAS.map((area, idx) => (
          <div
            key={idx}
            className="bg-white border border-slate-200 p-4 rounded-2xl text-center shadow-sm hover:shadow-md hover:border-blue-500 transition-all flex flex-col justify-between"
          >
            <div className="font-black text-xs text-slate-900 py-1.5 border-b border-slate-100">
              {area.name}
            </div>
            <div className="text-[10px] text-slate-500 font-medium mt-2 leading-tight">
              {area.detail}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
