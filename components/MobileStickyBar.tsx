'use client';

// ═══════════════════════════════════════════════════════════
// NOVA EPOKSI ANTALYA — MOBİL YAPIŞKAN BARI (KUSURSUZ 2 BUTON)
// ═══════════════════════════════════════════════════════════

import React, { useState, useEffect } from 'react';

export default function MobileStickyBar() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const handleScrollToCalculator = () => {
    const calcElem = document.getElementById('kesif') || document.getElementById('hesaplayici');
    if (calcElem) {
      calcElem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-slate-900/95 backdrop-blur-md p-2.5 border-t border-slate-800 shadow-2xl">
      <div className="flex items-center gap-2 max-w-md mx-auto">
        {/* SOL BUTON (%35 Width): WhatsApp İkonlu Buton */}
        <a
          href="https://wa.me/905070871789?text=Merhaba%20Antalya%20epoksi%20fiyat%20teklifi%20almak%20istiyorum"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="WhatsApp Sohbet Başlat"
          className="w-[35%] bg-emerald-600 hover:bg-emerald-500 text-white font-black text-xs min-h-[48px] px-2.5 rounded-xl flex items-center justify-center gap-1.5 text-center shadow-md cursor-pointer transition-transform active:scale-95"
        >
          <span>💬 WhatsApp</span>
        </a>

        {/* SAĞ BUTON (%65 Width): Mavi Teklif Alın Butonu */}
        <button
          onClick={handleScrollToCalculator}
          aria-label="Teklif Alın Formuna Kaydır"
          className="w-[65%] bg-blue-600 hover:bg-blue-500 text-white font-black text-xs min-h-[48px] px-3 rounded-xl flex items-center justify-center gap-1.5 text-center shadow-md cursor-pointer transition-transform active:scale-95"
        >
          <span>⚡ Teklif Alın</span>
        </button>
      </div>
    </div>
  );
}
