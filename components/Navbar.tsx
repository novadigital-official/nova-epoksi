'use client';

// ═══════════════════════════════════════════════════════════
// NOVA EPOKSI ANTALYA — INDUSTRIAL B2B NAVBAR
// ═══════════════════════════════════════════════════════════

import React, { useState } from 'react';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 h-16 bg-[#1A1C20]/95 backdrop-blur-md border-b border-gray-800 z-50 transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full h-full flex items-center justify-between">
        {/* LOGO */}
        <a href="/" className="flex items-center gap-2.5 group">
          <div className="w-8 h-8 bg-[#F4B400] text-[#1A1C20] font-black rounded flex items-center justify-center text-base shadow-sm font-mono">
            E
          </div>
          <div>
            <span className="font-extrabold text-base text-white block leading-none tracking-tight">
              ANTALYA<span className="text-[#F4B400]">EPOKSİ</span>
            </span>
            <span className="text-[9px] text-gray-400 font-mono font-bold uppercase tracking-wider block mt-0.5">
              Endüstriyel Zemin Sistemleri
            </span>
          </div>
        </a>

        {/* DESKTOP NAV LINKS */}
        <div className="hidden lg:flex items-center gap-6 text-xs font-bold text-gray-300">
          <a href="/" className="hover:text-[#F4B400] transition-colors">
            Ana Sayfa
          </a>
          <a href="#fiyatlar" className="hover:text-[#F4B400] transition-colors">
            Fiyat Şartnamesi
          </a>
          <a href="#isler" className="hover:text-[#F4B400] transition-colors">
            Saha Referansları
          </a>
          <a href="#hizmetler" className="hover:text-[#F4B400] transition-colors">
            Uygulama Süreci
          </a>
          <a href="#hesaplayici" className="hover:text-[#F4B400] transition-colors">
            m² Hesaplayıcı
          </a>
        </div>

        {/* DESKTOP CTA BUTTONS */}
        <div className="hidden sm:flex items-center gap-2.5">
          <a
            href="tel:+905070871789"
            aria-label="Telefon ile ara 0507 087 17 89"
            className="bg-[#24262B] hover:bg-[#34373E] text-white text-xs font-mono font-bold px-3.5 py-2 rounded border border-gray-700 transition-colors flex items-center gap-1.5"
          >
            <span>0507 087 17 89</span>
          </a>
          <a
            href="https://wa.me/905070871789?text=Merhaba,%20Antalya%20epoksi%20fiyat%20teklifi%20ve%20keşif%20istiyorum."
            target="_blank"
            rel="noopener noreferrer"
            aria-label="WhatsApp'tan Keşif Al"
            className="bg-[#F4B400] hover:bg-[#DDA200] text-[#1A1C20] font-black text-xs px-4 py-2 rounded transition-colors shadow-sm"
          >
            <span>WhatsApp Mühendis</span>
          </a>
        </div>

        {/* MOBILE MENU TOGGLE BUTTON */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-expanded={mobileMenuOpen}
          aria-label="Mobil Menüyü Aç/Kapat"
          className="lg:hidden p-2 text-gray-300 hover:text-white focus:outline-none"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {mobileMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* MOBILE MENU DROPDOWN */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#1A1C20] border-b border-gray-800 px-4 pt-3 pb-6 space-y-3 animate-fadeIn text-xs font-bold text-gray-200">
          <a href="/" onClick={() => setMobileMenuOpen(false)} className="block py-2 hover:text-[#F4B400] border-b border-gray-800">
            Ana Sayfa
          </a>
          <a href="#fiyatlar" onClick={() => setMobileMenuOpen(false)} className="block py-2 hover:text-[#F4B400] border-b border-gray-800">
            Fiyat Şartnamesi
          </a>
          <a href="#isler" onClick={() => setMobileMenuOpen(false)} className="block py-2 hover:text-[#F4B400] border-b border-gray-800">
            Saha Referansları
          </a>
          <a href="#hizmetler" onClick={() => setMobileMenuOpen(false)} className="block py-2 hover:text-[#F4B400] border-b border-gray-800">
            Uygulama Süreci
          </a>
          <a href="#hesaplayici" onClick={() => setMobileMenuOpen(false)} className="block py-2 hover:text-[#F4B400] border-b border-gray-800">
            m² Hesaplayıcı
          </a>

          <div className="pt-2 grid grid-cols-2 gap-2">
            <a
              href="tel:+905070871789"
              className="bg-[#24262B] text-white font-bold py-2.5 px-3 rounded text-center border border-gray-700 font-mono text-[11px]"
            >
              0507 087 17 89
            </a>
            <a
              href="https://wa.me/905070871789?text=Merhaba,%20Antalya%20epoksi%20fiyat%20teklifi%20ve%20keşif%20istiyorum."
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#F4B400] text-[#1A1C20] font-black py-2.5 px-3 rounded text-center text-xs"
            >
              WhatsApp Keşif
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
