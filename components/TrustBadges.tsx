'use client';

// ═══════════════════════════════════════════════════════════
// ANTALYA NOVA EPOKSI — KURUMSAL GÜVENCE & MÜHENDİSLİK STANDARTLARI
// ═══════════════════════════════════════════════════════════

import React from 'react';

export default function TrustBadges() {
  return (
    <div className="w-full space-y-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        
        {/* 1. Garanti */}
        <div className="bg-white border border-slate-200/90 p-5 rounded-2xl flex items-start gap-4 shadow-2xs hover:shadow-sm transition-all group">
          <div className="w-10 h-10 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-center text-slate-800 shrink-0 group-hover:bg-amber-50 group-hover:border-amber-200 transition-colors">
            <svg className="w-5 h-5 stroke-current fill-none stroke-2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
            </svg>
          </div>
          <div className="space-y-1">
            <h4 className="text-xs sm:text-sm font-heading font-extrabold text-slate-900">
              10 Yıl Resmi Garanti
            </h4>
            <p className="text-xs text-slate-500 leading-relaxed font-normal">
              Malzeme ve uygulama hatalarına karşı yazılı sözleşme ve kaşeli garanti belgesi.
            </p>
          </div>
        </div>

        {/* 2. ISO & CE */}
        <div className="bg-white border border-slate-200/90 p-5 rounded-2xl flex items-start gap-4 shadow-2xs hover:shadow-sm transition-all group">
          <div className="w-10 h-10 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-center text-slate-800 shrink-0 group-hover:bg-amber-50 group-hover:border-amber-200 transition-colors">
            <svg className="w-5 h-5 stroke-current fill-none stroke-2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
            </svg>
          </div>
          <div className="space-y-1">
            <h4 className="text-xs sm:text-sm font-heading font-extrabold text-slate-900">
              ISO 9001 & CE EN 1504-2
            </h4>
            <p className="text-xs text-slate-500 leading-relaxed font-normal">
              Solventsiz, gıda ve ilaç sanayi HACCP hijyen şartnamelerine tam uygunluk.
            </p>
          </div>
        </div>

        {/* 3. Ağır Yük */}
        <div className="bg-white border border-slate-200/90 p-5 rounded-2xl flex items-start gap-4 shadow-2xs hover:shadow-sm transition-all group">
          <div className="w-10 h-10 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-center text-slate-800 shrink-0 group-hover:bg-amber-50 group-hover:border-amber-200 transition-colors">
            <svg className="w-5 h-5 stroke-current fill-none stroke-2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6A2.25 2.25 0 016 3.75h2.25A2.25 2.25 0 0110.5 6v2.25a2.25 2.25 0 01-2.25 2.25H6a2.25 2.25 0 01-2.25-2.25V6zM3.75 15.75A2.25 2.25 0 016 13.5h2.25a2.25 2.25 0 012.25 2.25V18a2.25 2.25 0 01-2.25 2.25H6A2.25 2.25 0 013.75 18v-2.25zM13.5 6a2.25 2.25 0 012.25-2.25H18A2.25 2.25 0 0120.25 6v2.25A2.25 2.25 0 0118 10.5h-2.25a2.25 2.25 0 01-2.25-2.25V6zM13.5 15.75a2.25 2.25 0 012.25-2.25H18a2.25 2.25 0 012.25 2.25V18A2.25 2.25 0 0118 20.25h-2.25A2.25 2.25 0 0113.5 18v-2.25z" />
            </svg>
          </div>
          <div className="space-y-1">
            <h4 className="text-xs sm:text-sm font-heading font-extrabold text-slate-900">
              Ağır Forklift Mukavemeti
            </h4>
            <p className="text-xs text-slate-500 leading-relaxed font-normal">
              Titreşim, noktasal yük ve hidrolik yağlara karşı 3-5mm endüstriyel dayanım.
            </p>
          </div>
        </div>

        {/* 4. Keşif */}
        <div className="bg-white border border-slate-200/90 p-5 rounded-2xl flex items-start gap-4 shadow-2xs hover:shadow-sm transition-all group">
          <div className="w-10 h-10 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-center text-slate-800 shrink-0 group-hover:bg-amber-50 group-hover:border-amber-200 transition-colors">
            <svg className="w-5 h-5 stroke-current fill-none stroke-2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
            </svg>
          </div>
          <div className="space-y-1">
            <h4 className="text-xs sm:text-sm font-heading font-extrabold text-slate-900">
              Aynı Gün Ücretsiz Keşif
            </h4>
            <p className="text-xs text-slate-500 leading-relaxed font-normal">
              Antalya OSB ve tüm ilçelerde yerinde lazerli nem analizi ve metraj çalışması.
            </p>
          </div>
        </div>

      </div>
    </div>
  );
}
