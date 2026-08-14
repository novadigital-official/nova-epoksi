'use client';

// ═══════════════════════════════════════════════════════════
// NOVA EPOKSI ANTALYA — HIGH-CONVERSION MOBILE STICKY BAR
// ═══════════════════════════════════════════════════════════

import React, { useState, useEffect } from 'react';

export default function MobileStickyBar() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-[#111827]/98 backdrop-blur-md p-2.5 border-t border-gray-800 shadow-2xl">
      <div className="flex items-center gap-2 max-w-md mx-auto">
        {/* SOL BUTON (%38): Hızlı Ara */}
        <a
          href="tel:+905070871789"
          aria-label="Telefon ile Ara"
          className="w-[38%] bg-[#1F2937] hover:bg-[#374151] text-white font-bold text-xs min-h-[48px] px-2 rounded-lg flex items-center justify-center gap-1 text-center border border-gray-700 transition-colors"
        >
          <span>📞 0507 087 17 89</span>
        </a>

        {/* SAĞ BUTON (%62): Dominant Pulsing WhatsApp Butonu */}
        <a
          href="https://wa.me/905070871789?text=Merhaba,%20Antalya%20epoksi%20fiyat%20teklifi%20ve%20keşif%20istiyorum."
          target="_blank"
          rel="noopener noreferrer"
          aria-label="WhatsApp Mühendis Hattı"
          className="w-[62%] bg-[#F59E0B] hover:bg-[#D97706] text-[#111827] font-black text-xs min-h-[48px] px-3 rounded-lg flex items-center justify-center gap-1.5 text-center shadow-lg transition-transform active:scale-95 animate-pulse"
        >
          <span>⚡ WhatsApp ile Keşif İste</span>
        </a>
      </div>
    </div>
  );
}
