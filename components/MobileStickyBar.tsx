'use client';

// ═══════════════════════════════════════════════════════════
// NOVA EPOKSI ANTALYA — ULTRA-PREMIUM MOBILE STICKY ACTION BAR
// (Dual Call + WhatsApp Buttons with Zero Collisions)
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
      className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-[#0B1120]/95 backdrop-blur-xl px-3 pt-2.5 border-t border-slate-800/90 shadow-2xl shadow-black/80"
      style={{ paddingBottom: 'calc(10px + env(safe-area-inset-bottom, 0px))' }}
    >
      <div className="flex items-center gap-2 max-w-md mx-auto">
        
        {/* SOL BUTON (%42): Telefonla Hemen Ara */}
        <a
          href="tel:05070871789"
          aria-label="Telefonla Hemen Ara"
          className="w-[42%] bg-slate-900/90 hover:bg-slate-800 active:scale-98 text-white font-bold text-xs min-h-[48px] px-2.5 rounded-xl flex items-center justify-center gap-1.5 text-center border border-slate-700/80 shadow-md transition-all shrink-0"
        >
          <span className="w-6 h-6 rounded-lg bg-blue-500/20 text-blue-400 flex items-center justify-center text-xs shrink-0">
            📞
          </span>
          <span className="truncate tracking-tight font-extrabold">0507 087 17 89</span>
        </a>

        {/* SAĞ BUTON (%58): WhatsApp ile Yazın */}
        <a
          href="https://wa.me/905070871789?text=Merhaba,%20Antalya%20epoksi%20zemin%20hakkında%20fiyat%20öğrenmek%20ve%20ücretsiz%20keşif%20randevusu%20almak%20istiyorum."
          target="_blank"
          rel="noopener noreferrer"
          aria-label="WhatsApp ile Yazın"
          className="w-[58%] bg-gradient-to-r from-[#F59E0B] to-[#D97706] hover:from-[#D97706] hover:to-[#B45309] active:scale-98 text-slate-950 font-black text-xs min-h-[48px] px-3 rounded-xl flex items-center justify-center gap-2 text-center shadow-lg shadow-amber-500/20 transition-all border border-amber-400/40"
        >
          {/* Official WhatsApp Vector SVG */}
          <svg className="w-4 h-4 fill-slate-950 shrink-0" viewBox="0 0 24 24">
            <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-1.156 4.22 4.299-1.127zm10.742-5.666c-.328-.164-1.944-.96-2.247-1.07-.303-.11-.523-.164-.743.164-.22.328-.852 1.07-1.043 1.289-.191.22-.383.247-.712.082-2.016-1.006-3.336-1.785-4.667-4.068-.352-.604.352-.561 1.007-1.87.11-.22.055-.412-.027-.577-.082-.164-.743-1.791-1.018-2.454-.268-.646-.541-.558-.743-.568l-.632-.011c-.22 0-.577.082-.879.412-.303.328-1.155 1.128-1.155 2.75 0 1.623 1.182 3.189 1.347 3.409.165.22 2.327 3.555 5.639 4.985 2.308.998 2.802.8 3.324.747.88-.09 1.944-.796 2.218-1.564.275-.769.275-1.428.192-1.564-.083-.137-.303-.22-.631-.384z" />
          </svg>
          <span className="truncate font-black">WhatsApp İle Yazın</span>
        </a>

      </div>
    </div>
  );
}
