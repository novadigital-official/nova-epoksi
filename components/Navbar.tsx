'use client';

// ═══════════════════════════════════════════════════════════
// NOVA EPOKSI ANTALYA — ULTRA-PREMIUM B2B INDUSTRIAL NAVBAR
// ═══════════════════════════════════════════════════════════

import React, { useState } from 'react';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 h-16 bg-[#0B1120]/95 backdrop-blur-xl border-b border-slate-800/80 z-50 transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full h-full flex items-center justify-between">
        
        {/* LOGO WITH BESPOKE 3D EMBLEM */}
        <a href="/" className="flex items-center gap-3 group select-none">
          <div className="w-10 h-10 rounded-xl overflow-hidden bg-slate-950 p-0.5 border border-amber-500/50 shadow-md shadow-amber-500/20 group-hover:scale-105 transition-transform shrink-0">
            <img
              src="/images/logo.png"
              alt="Nova Epoksi Logo"
              className="w-full h-full object-contain rounded-[10px]"
            />
          </div>
          <div>
            <span className="font-heading font-extrabold text-base sm:text-lg text-white block leading-none tracking-tight">
              ANTALYA<span className="text-amber-400">EPOKSİ</span>
            </span>
            <span className="text-[9px] text-slate-400 font-mono font-bold uppercase tracking-widest block mt-0.5">
              Endüstriyel Zemin Sistemleri
            </span>
          </div>
        </a>

        {/* DESKTOP NAV LINKS */}
        <div className="hidden lg:flex items-center gap-7 text-xs font-bold text-slate-300">
          <a href="/" className="hover:text-amber-400 transition-colors">
            Ana Sayfa
          </a>
          <a href="#fiyatlar" className="hover:text-amber-400 transition-colors">
            Fiyat Şartnamesi
          </a>
          <a href="#isler" className="hover:text-amber-400 transition-colors">
            Saha Referansları
          </a>
          <a href="#hizmetler" className="hover:text-amber-400 transition-colors">
            Uygulama Süreci
          </a>
          <a href="#hesaplayici" className="hover:text-amber-400 transition-colors">
            m² Hesaplayıcı
          </a>
        </div>

        {/* DESKTOP CTA BUTTONS */}
        <div className="hidden sm:flex items-center gap-3">
          <a
            href="tel:05070871789"
            aria-label="Telefon ile ara 0507 087 17 89"
            className="bg-slate-900/90 hover:bg-slate-800 text-slate-200 text-xs font-mono font-bold px-3.5 py-2 rounded-xl border border-slate-700/80 transition-all flex items-center gap-1.5 shadow-2xs"
          >
            <span>📞 0507 087 17 89</span>
          </a>
          <a
            href="https://wa.me/905070871789?text=Merhaba,%20Antalya%20epoksi%20fiyat%20teklifi%20ve%20ücretsiz%20keşif%20istiyorum."
            target="_blank"
            rel="noopener noreferrer"
            aria-label="WhatsApp'tan Keşif Al"
            className="bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-slate-950 font-heading font-black text-xs px-4 py-2 rounded-xl transition-all shadow-md shadow-amber-500/20 active:scale-98"
          >
            <span>WhatsApp Keşif</span>
          </a>
        </div>

        {/* MOBILE MENU TOGGLE BUTTON */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-expanded={mobileMenuOpen}
          aria-label="Mobil Menüyü Aç/Kapat"
          className="lg:hidden p-2 text-slate-300 hover:text-white focus:outline-none"
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
        <div className="lg:hidden bg-[#0B1120] border-b border-slate-800 px-4 pt-3 pb-6 space-y-3 animate-fadeIn text-xs font-bold text-slate-200 shadow-2xl">
          <a href="/" onClick={() => setMobileMenuOpen(false)} className="block py-2 hover:text-amber-400 border-b border-slate-800">
            Ana Sayfa
          </a>
          <a href="#fiyatlar" onClick={() => setMobileMenuOpen(false)} className="block py-2 hover:text-amber-400 border-b border-slate-800">
            Fiyat Şartnamesi
          </a>
          <a href="#isler" onClick={() => setMobileMenuOpen(false)} className="block py-2 hover:text-amber-400 border-b border-slate-800">
            Saha Referansları
          </a>
          <a href="#hizmetler" onClick={() => setMobileMenuOpen(false)} className="block py-2 hover:text-amber-400 border-b border-slate-800">
            Uygulama Süreci
          </a>
          <a href="#hesaplayici" onClick={() => setMobileMenuOpen(false)} className="block py-2 hover:text-amber-400 border-b border-slate-800">
            m² Hesaplayıcı
          </a>

          <div className="pt-2 grid grid-cols-2 gap-2">
            <a
              href="tel:05070871789"
              className="bg-slate-900 text-white font-bold py-2.5 px-3 rounded-xl text-center border border-slate-700 font-mono text-[11px]"
            >
              0507 087 17 89
            </a>
            <a
              href="https://wa.me/905070871789?text=Merhaba,%20Antalya%20epoksi%20fiyat%20teklifi%20ve%20keşif%20istiyorum."
              target="_blank"
              rel="noopener noreferrer"
              className="bg-amber-500 text-slate-950 font-black py-2.5 px-3 rounded-xl text-center text-xs"
            >
              WhatsApp Keşif
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
