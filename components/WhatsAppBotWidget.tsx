'use client';

// ═══════════════════════════════════════════════════════════
// NOVA EPOKSI ANTALYA — DESKTOP FLOATING WHATSAPP WIDGET
// (Hidden on mobile to prevent overlap with MobileStickyBar)
// ═══════════════════════════════════════════════════════════

import React from 'react';

export default function WhatsAppBotWidget() {
  return (
    <a
      href="https://wa.me/905070871789?text=Merhaba,%20Antalya%20epoksi%20zemin%20fiyat%20teklifi%20ve%20ücretsiz%20keşif%20talep%20ediyorum."
      target="_blank"
      rel="noopener noreferrer"
      aria-label="WhatsApp İletişim Hattı"
      className="hidden md:flex fixed bottom-8 right-8 z-50 bg-[#25D366] hover:bg-[#20ba5a] text-white font-extrabold px-5 py-3.5 rounded-full shadow-2xl items-center gap-2.5 cursor-pointer transition-all hover:scale-105 border border-white/30 text-sm active:scale-95 shadow-[#25D366]/30 group"
    >
      {/* Official WhatsApp Vector SVG */}
      <svg className="w-6 h-6 fill-current shrink-0" viewBox="0 0 24 24">
        <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-1.156 4.22 4.299-1.127zm10.742-5.666c-.328-.164-1.944-.96-2.247-1.07-.303-.11-.523-.164-.743.164-.22.328-.852 1.07-1.043 1.289-.191.22-.383.247-.712.082-2.016-1.006-3.336-1.785-4.667-4.068-.352-.604.352-.561 1.007-1.87.11-.22.055-.412-.027-.577-.082-.164-.743-1.791-1.018-2.454-.268-.646-.541-.558-.743-.568l-.632-.011c-.22 0-.577.082-.879.412-.303.328-1.155 1.128-1.155 2.75 0 1.623 1.182 3.189 1.347 3.409.165.22 2.327 3.555 5.639 4.985 2.308.998 2.802.8 3.324.747.88-.09 1.944-.796 2.218-1.564.275-.769.275-1.428.192-1.564-.083-.137-.303-.22-.631-.384z" />
      </svg>
      <span>Ücretsiz Keşif & Teklif</span>
    </a>
  );
}
