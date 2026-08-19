'use client';

// ═══════════════════════════════════════════════════════════
// NOVA EPOKSI ANTALYA — B2B INDUSTRIAL NAVBAR (CLEAN SVGS)
// ═══════════════════════════════════════════════════════════

import React, { useState } from 'react';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 h-16 bg-[#0B1120]/95 backdrop-blur-xl border-b border-slate-800/80 z-50 transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full h-full flex items-center justify-between">
        
        {/* LOGO WITH BESPOKE 3D EMBLEM */}
        <a href="/" className="flex items-center gap-3 group select-none">
          <div className="w-10 h-10 rounded-xl overflow-hidden bg-slate-950 p-0.5 border border-amber-500/40 shadow-sm group-hover:scale-105 transition-transform shrink-0">
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
            <span className="text-[9px] text-slate-400 font-mono font-medium uppercase tracking-widest block mt-0.5">
              Endüstriyel Zemin Sistemleri
            </span>
          </div>
        </a>

        {/* DESKTOP NAV LINKS */}
        <div className="hidden lg:flex items-center gap-7 text-xs font-semibold text-slate-300">
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
          <a href="#faq" className="hover:text-amber-400 transition-colors">
            Teknik SSS
          </a>
        </div>

        {/* DESKTOP CTA BUTTONS */}
        <div className="hidden sm:flex items-center gap-3">
          <a
            href="tel:05070871789"
            aria-label="Telefon ile ara 0507 087 17 89"
            className="bg-slate-900 hover:bg-slate-800 text-slate-200 text-xs font-mono font-semibold px-3.5 py-2 rounded-xl border border-slate-700/80 transition-all flex items-center gap-2"
          >
            <svg className="w-3.5 h-3.5 fill-current text-amber-400" viewBox="0 0 24 24">
              <path d="M20.01 15.38c-1.23 0-2.42-.2-3.53-.56a.977.977 0 00-1.01.24l-1.57 1.97c-2.83-1.44-5.15-3.75-6.59-6.59l1.97-1.57c.28-.27.36-.66.25-1.02A11.36 11.36 0 019 4.31c0-.55-.45-1-1-1H4.5c-.55 0-1 .45-1 1 0 9.39 7.61 17 17 17 .55 0 1-.45 1-1v-3.5c0-.55-.45-1-1-.93z"/>
            </svg>
            <span>0507 087 17 89</span>
          </a>
          <a
            href="https://wa.me/905070871789?text=Merhaba,%20Antalya%20epoksi%20fiyat%20teklifi%20ve%20ücretsiz%20keşif%20istiyorum."
            target="_blank"
            rel="noopener noreferrer"
            aria-label="WhatsApp'tan Keşif Al"
            className="bg-amber-500 hover:bg-amber-600 text-slate-950 font-heading font-bold text-xs px-4 py-2 rounded-xl transition-all shadow-sm active:scale-98"
          >
            <span>Keşif Randevusu</span>
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
        <div className="lg:hidden bg-[#0B1120] border-b border-slate-800 px-4 pt-3 pb-6 space-y-3 animate-fadeIn text-xs font-semibold text-slate-200 shadow-2xl">
          <a href="/" onClick={() => setMobileMenuOpen(false)} className="block py-2 hover:text-amber-400 border-b border-slate-800/80">
            Ana Sayfa
          </a>
          <a href="#fiyatlar" onClick={() => setMobileMenuOpen(false)} className="block py-2 hover:text-amber-400 border-b border-slate-800/80">
            Fiyat Şartnamesi
          </a>
          <a href="#isler" onClick={() => setMobileMenuOpen(false)} className="block py-2 hover:text-amber-400 border-b border-slate-800/80">
            Saha Referansları
          </a>
          <a href="#hizmetler" onClick={() => setMobileMenuOpen(false)} className="block py-2 hover:text-amber-400 border-b border-slate-800/80">
            Uygulama Süreci
          </a>
          <a href="#hesaplayici" onClick={() => setMobileMenuOpen(false)} className="block py-2 hover:text-amber-400 border-b border-slate-800/80">
            m² Hesaplayıcı
          </a>
          <a href="#faq" onClick={() => setMobileMenuOpen(false)} className="block py-2 hover:text-amber-400 border-b border-slate-800/80">
            Teknik SSS
          </a>

          <div className="pt-2 grid grid-cols-2 gap-2">
            <a
              href="tel:05070871789"
              className="bg-slate-900 text-white font-semibold py-2.5 px-3 rounded-xl text-center border border-slate-700 font-mono text-[11px]"
            >
              0507 087 17 89
            </a>
            <a
              href="https://wa.me/905070871789?text=Merhaba,%20Antalya%20epoksi%20fiyat%20teklifi%20ve%20keşif%20istiyorum."
              target="_blank"
              rel="noopener noreferrer"
              className="bg-amber-500 text-slate-950 font-bold py-2.5 px-3 rounded-xl text-center text-xs"
            >
              Keşif Talebi
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
