'use client';

// ═══════════════════════════════════════════════════════════
// NOVA EPOKSI ANTALYA — PROFESSIONAL CORPORATE NAVBAR
// ═══════════════════════════════════════════════════════════

import React, { useState } from 'react';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 h-20 bg-slate-900/95 backdrop-blur-md border-b border-slate-800 z-50 transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full h-full flex items-center justify-between">
        {/* LOGO */}
        <a href="/" className="flex items-center gap-3 group">
          <div className="w-10 h-10 bg-blue-600 text-white font-black rounded-xl flex items-center justify-center text-xl shadow-md group-hover:bg-blue-500 transition-colors">
            A
          </div>
          <div>
            <span className="font-extrabold text-xl text-white block leading-none tracking-tight">
              Antalya<span className="text-blue-400">Epoksi</span>
            </span>
            <span className="text-[10px] text-slate-400 font-bold uppercase tracking-wider block mt-0.5">
              Endüstriyel Zemin Sistemleri
            </span>
          </div>
        </a>

        {/* DESKTOP NAV LINKS */}
        <div className="hidden lg:flex items-center gap-6 text-xs font-extrabold text-slate-300">
          <a href="/" className="hover:text-white transition-colors">
            Ana Sayfa
          </a>
          <a href="#hizmetler" className="hover:text-white transition-colors">
            Hizmetlerimiz
          </a>
          <a href="#isler" className="hover:text-white transition-colors">
            Bitirdiğimiz İşler
          </a>
          <a href="#hesaplayici" className="hover:text-white transition-colors">
            Teklif Hesapla
          </a>
          <a href="/blog" className="hover:text-white transition-colors">
            Blog & Rehber
          </a>
        </div>

        {/* DESKTOP CTA BUTTONS */}
        <div className="hidden sm:flex items-center gap-3">
          <a
            href="tel:+905070871789"
            aria-label="Telefon ile ara 0507 087 17 89"
            className="bg-slate-800 hover:bg-slate-700 text-white text-xs font-bold px-4 py-2.5 rounded-xl border border-slate-700 transition-colors flex items-center gap-2"
          >
            <span>Ara: 0507 087 17 89</span>
          </a>
          <a
            href="https://wa.me/905070871789?text=Merhaba%20Antalya%20epoksi%20fiyat%20teklifi%20ve%20kesif%20istiyorum"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="WhatsApp'tan Keşif Al"
            className="bg-emerald-600 hover:bg-emerald-500 text-white font-black text-xs px-4 py-2.5 rounded-xl transition-colors shadow-sm"
          >
            <span>WhatsApp Keşif Al</span>
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
        <div className="lg:hidden bg-slate-900 border-b border-slate-800 px-4 pt-3 pb-6 space-y-3 animate-fadeIn text-xs font-bold text-slate-200">
          <a href="/" onClick={() => setMobileMenuOpen(false)} className="block py-2 hover:text-white border-b border-slate-800">
            Ana Sayfa
          </a>
          <a href="#hizmetler" onClick={() => setMobileMenuOpen(false)} className="block py-2 hover:text-white border-b border-slate-800">
            Hizmetlerimiz
          </a>
          <a href="#isler" onClick={() => setMobileMenuOpen(false)} className="block py-2 hover:text-white border-b border-slate-800">
            Bitirdiğimiz İşler (6 Saha Referansı)
          </a>
          <a href="#hesaplayici" onClick={() => setMobileMenuOpen(false)} className="block py-2 hover:text-white border-b border-slate-800">
            Fiyat & Keşif Hesapla
          </a>
          <a href="/blog" onClick={() => setMobileMenuOpen(false)} className="block py-2 hover:text-white border-b border-slate-800">
            Blog & Fiyat Rehberi
          </a>

          <div className="pt-2 grid grid-cols-2 gap-2">
            <a
              href="tel:+905070871789"
              className="bg-slate-800 text-white font-bold py-2.5 px-3 rounded-xl text-center border border-slate-700"
            >
              Ara: 0507 087 17 89
            </a>
            <a
              href="https://wa.me/905070871789?text=Merhaba%20Antalya%20epoksi%20fiyat%20teklifi%20ve%20kesif%20istiyorum"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-emerald-600 text-white font-black py-2.5 px-3 rounded-xl text-center"
            >
              WhatsApp Keşif
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
