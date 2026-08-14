'use client';

// ═══════════════════════════════════════════════════════════
// NOVA EPOKSI ANTALYA — CLEAN DIRECT ACTION MOBILE BAR
// ═══════════════════════════════════════════════════════════

import React, { useState, useEffect } from 'react';

export default function MobileStickyBar() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div 
      className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-[#111827]/98 backdrop-blur-md px-3 pt-2.5 border-t border-gray-800 shadow-2xl"
      style={{ paddingBottom: 'calc(12px + env(safe-area-inset-bottom, 0px))' }}
    >
      <div className="flex items-center gap-2 max-w-md mx-auto">
        {/* SOL BUTON (%40): Hızlı Ara */}
        <a
          href="tel:+905070871789"
          aria-label="Telefon ile Ara"
          className="w-[40%] bg-[#1F2937] hover:bg-[#374151] active:bg-[#111827] text-white font-bold text-xs min-h-[46px] px-2 rounded-lg flex items-center justify-center gap-1.5 text-center border border-gray-700 transition-colors"
        >
          <span className="text-sm">📞</span>
          <span>0507 087 17 89</span>
        </a>

        {/* SAĞ BUTON (%60): WhatsApp Butonu */}
        <a
          href="https://wa.me/905070871789?text=Merhaba,%20Antalya%20epoksi%20zemin%20hakkında%20fiyat%20öğrenmek%20istiyorum."
          target="_blank"
          rel="noopener noreferrer"
          aria-label="WhatsApp İletişim"
          className="w-[60%] bg-[#F59E0B] hover:bg-[#D97706] active:scale-95 text-[#111827] font-black text-xs min-h-[46px] px-3 rounded-lg flex items-center justify-center gap-1.5 text-center shadow-lg transition-transform"
        >
          <span className="text-sm">💬</span>
          <span>WhatsApp İle Yazın</span>
        </a>
      </div>
    </div>
  );
}
