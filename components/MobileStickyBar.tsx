'use client';

// ═══════════════════════════════════════════════════════════
// NOVA EPOKSI ANTALYA — FLOATING PHONE CALL ACTION SPHERE (NOVA DIGITAL STYLE)
// Stacked cleanly above WhatsApp on the right side of the screen
// ═══════════════════════════════════════════════════════════

import React from 'react';

export default function MobileStickyBar() {
  return (
    <a
      href="tel:05070871789"
      aria-label="Hemen Telefonla Arayın: 0507 087 17 89"
      className="fixed bottom-20 right-4 sm:bottom-23 sm:right-6 z-50 flex items-center justify-center w-13 h-13 sm:w-14 sm:h-14 rounded-full bg-gradient-to-tr from-amber-600 via-amber-500 to-amber-400 text-slate-950 shadow-2xl shadow-amber-500/35 border-2 border-white/40 transition-all hover:scale-110 active:scale-95 group cursor-pointer"
    >
      <span className="text-xl sm:text-2xl animate-pulse">📞</span>
      {/* Tooltip on desktop hover */}
      <span className="hidden group-hover:inline-block absolute right-16 px-3 py-1.5 rounded-xl bg-slate-950/90 text-white text-xs font-bold whitespace-nowrap border border-slate-800 shadow-xl backdrop-blur-md">
        📞 Hemen Ara: 0507 087 17 89
      </span>
    </a>
  );
}
