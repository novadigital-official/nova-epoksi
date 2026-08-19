'use client';

// ═══════════════════════════════════════════════════════════
// NOVA EPOKSI ANTALYA — ARTISANAL FLOATING ACTIONS (CLEAN SVGS)
// ═══════════════════════════════════════════════════════════

import React from 'react';

export default function FloatingActionWidget() {
  return (
    <aside aria-label="Hızlı İletişim Kanalları" className="fixed bottom-6 right-4 sm:bottom-8 sm:right-6 z-50 flex flex-col items-end gap-3 pointer-events-auto select-none">
      
      {/* 1. Üst Buton: Telefonla Hemen Ara (Amber / Gold Action Sphere) */}
      <a
        href="tel:05070871789"
        aria-label="Telefonla Hemen Ara: 0507 087 17 89"
        className="flex items-center justify-center w-12 h-12 sm:w-13 sm:h-13 rounded-full bg-[#D97706] hover:bg-[#B45309] text-white shadow-lg shadow-amber-900/20 border border-amber-400/30 transition-all duration-200 hover:scale-105 active:scale-95 group cursor-pointer"
      >
        <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
          <path d="M20.01 15.38c-1.23 0-2.42-.2-3.53-.56a.977.977 0 00-1.01.24l-1.57 1.97c-2.83-1.44-5.15-3.75-6.59-6.59l1.97-1.57c.28-.27.36-.66.25-1.02A11.36 11.36 0 019 4.31c0-.55-.45-1-1-1H4.5c-.55 0-1 .45-1 1 0 9.39 7.61 17 17 17 .55 0 1-.45 1-1v-3.5c0-.55-.45-1-1-.93z"/>
        </svg>
        {/* Desktop Hover Tooltip */}
        <span className="hidden group-hover:inline-block absolute right-15 px-3 py-1.5 rounded-xl bg-slate-900 text-white text-xs font-semibold whitespace-nowrap border border-slate-700 shadow-xl">
          0507 087 17 89
        </span>
      </a>

      {/* 2. Alt Buton: WhatsApp ile Yazın (Official WhatsApp Action Sphere) */}
      <a
        href="https://wa.me/905070871789?text=Merhaba,%20Antalya%20epoksi%20zemin%20fiyat%20teklifi%20ve%20ücretsiz%20keşif%20randevusu%20almak%20istiyorum."
        target="_blank"
        rel="noopener noreferrer"
        aria-label="WhatsApp İletişim ve Keşif Hattı"
        className="flex items-center justify-center w-12 h-12 sm:w-13 sm:h-13 rounded-full bg-[#25D366] hover:bg-[#20ba5a] text-white shadow-lg shadow-emerald-900/20 border border-white/30 transition-all duration-200 hover:scale-105 active:scale-95 group cursor-pointer"
      >
        <svg className="w-5 h-5 sm:w-6 sm:h-6 fill-current" viewBox="0 0 24 24">
          <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-1.156 4.22 4.299-1.127zm10.742-5.666c-.328-.164-1.944-.96-2.247-1.07-.303-.11-.523-.164-.743.164-.22.328-.852 1.07-1.043 1.289-.191.22-.383.247-.712.082-2.016-1.006-3.336-1.785-4.667-4.068-.352-.604.352-.561 1.007-1.87.11-.22.055-.412-.027-.577-.082-.164-.743-1.791-1.018-2.454-.268-.646-.541-.558-.743-.568l-.632-.011c-.22 0-.577.082-.879.412-.303.328-1.155 1.128-1.155 2.75 0 1.623 1.182 3.189 1.347 3.409.165.22 2.327 3.555 5.639 4.985 2.308.998 2.802.8 3.324.747.88-.09 1.944-.796 2.218-1.564.275-.769.275-1.428.192-1.564-.083-.137-.303-.22-.631-.384z" />
        </svg>
        {/* Desktop Hover Tooltip */}
        <span className="hidden group-hover:inline-block absolute right-15 px-3 py-1.5 rounded-xl bg-slate-900 text-white text-xs font-semibold whitespace-nowrap border border-slate-700 shadow-xl">
          WhatsApp Keşif
        </span>
      </a>

    </aside>
  );
}
