'use client';

// ═══════════════════════════════════════════════════════════
// NOVA EPOKSI ANTALYA — CLEAN FLOATING WHATSAPP BUTTON
// ═══════════════════════════════════════════════════════════

import React from 'react';

export default function WhatsAppBotWidget() {
  return (
    <a
      href="https://wa.me/905070871789?text=Merhaba%20Antalya%20epoksi%20fiyat%20teklifi%20ve%20kesif%20istiyorum"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="WhatsApp İletişim Hattı"
      className="fixed bottom-6 right-6 z-50 bg-emerald-600 hover:bg-emerald-500 text-white font-black px-5 py-3.5 rounded-full shadow-2xl flex items-center gap-2.5 cursor-pointer transition-all hover:scale-105 border-2 border-white/40 text-xs sm:text-sm active:scale-95"
    >
      <span className="text-base sm:text-lg">💬</span>
      <span>Ücretsiz Keşif & Fiyat</span>
    </a>
  );
}
