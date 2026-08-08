'use client';

// ═══════════════════════════════════════════════════════════
// NOVA EPOKSI ANTALYA — LIVE WHATSAPP BOT (HYDRATION SAFE)
// ═══════════════════════════════════════════════════════════

import React, { useState, useEffect } from 'react';

export default function WhatsAppBotWidget() {
  const [mounted, setMounted] = useState(false);
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [sqm, setSqm] = useState<string>('');
  const [district, setDistrict] = useState<string>('Muratpaşa');

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const handleStartWhatsApp = () => {
    const waMessage = encodeURIComponent(
      `Merhaba Nova Epoksi Keşif Hattı,\n` +
      `• *Alanım:* ${sqm || '250'} m²\n` +
      `• *Bölge:* Antalya / ${district}\n` +
      `Zemin fotoğrafı gönderip anında fiyat teklifi almak istiyorum.`
    );
    window.open(`https://wa.me/905070871789?text=${waMessage}`, '_blank');
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {isOpen && (
        <div className="mb-4 w-80 sm:w-96 bg-white border border-slate-200 rounded-3xl shadow-2xl overflow-hidden animate-fadeIn text-slate-900">
          <div className="bg-slate-900 text-white p-4 flex items-center justify-between border-b border-slate-800">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 bg-blue-600 rounded-full flex items-center justify-center font-black text-xs text-white">
                BOT
              </div>
              <div>
                <h4 className="font-extrabold text-sm leading-tight">Nova Keşif & Fiyat Botu</h4>
                <span className="text-[10px] text-slate-300 flex items-center gap-1.5 mt-0.5">
                  <span className="w-2 h-2 bg-emerald-500 rounded-full"></span> Aktif • 15 Dk Geri Dönüş
                </span>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              aria-label="Kapat"
              className="text-slate-400 hover:text-white font-black text-sm px-2 cursor-pointer"
            >
              ✕
            </button>
          </div>

          <div className="p-4 space-y-3 text-xs bg-slate-50 max-h-80 overflow-y-auto">
            <div className="bg-white p-3 rounded-2xl border border-slate-200 shadow-sm max-w-[85%] text-slate-700">
              Merhaba! Nova Epoksi Antalya ücretsiz keşif ve fiyat alma hattına hoş geldiniz.
            </div>

            <div className="bg-white p-3 rounded-2xl border border-slate-200 shadow-sm max-w-[85%] font-extrabold text-blue-700">
              1) Zemin kaplaması yapılacak alanınız kaç m²?
            </div>

            <div className="space-y-2 pt-1">
              <input
                type="number"
                placeholder="Örn: 250 m²"
                value={sqm}
                onChange={(e) => setSqm(e.target.value)}
                className="w-full bg-white border border-slate-300 px-3 py-2 rounded-xl text-xs outline-none focus:border-blue-600"
              />
            </div>

            <div className="bg-white p-3 rounded-2xl border border-slate-200 shadow-sm max-w-[85%] font-extrabold text-blue-700">
              2) Antalya hangi ilçedesiniz?
            </div>
            <select
              value={district}
              onChange={(e) => setDistrict(e.target.value)}
              className="w-full bg-white border border-slate-300 px-3 py-2 rounded-xl text-xs outline-none focus:border-blue-600 font-bold text-slate-800"
            >
              <option value="Muratpaşa">Antalya / Muratpaşa</option>
              <option value="Kepez">Antalya / Kepez</option>
              <option value="Konyaaltı">Antalya / Konyaaltı</option>
              <option value="Döşemealtı OSB">Döşemealtı OSB</option>
              <option value="Alanya">Antalya / Alanya</option>
              <option value="Manavgat">Antalya / Manavgat</option>
            </select>

            <div className="bg-emerald-50 p-3 rounded-2xl border border-emerald-200 text-emerald-800 font-bold">
              3) Fotoğraf gönderip anında net fiyat çıkaralım!
            </div>
          </div>

          <div className="p-3 bg-white border-t border-slate-200">
            <button
              onClick={handleStartWhatsApp}
              className="w-full bg-emerald-600 hover:bg-emerald-500 text-white font-black py-3 rounded-xl text-xs flex items-center justify-center gap-2 cursor-pointer shadow-sm"
            >
              <span>WhatsApp'tan Fotoğraf Gönder Fiyat Al</span>
            </button>
          </div>
        </div>
      )}

      <button
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Keşif Botunu Aç"
        className="bg-emerald-600 hover:bg-emerald-500 text-white font-black px-5 py-3.5 rounded-full shadow-2xl flex items-center gap-2.5 cursor-pointer transition-all hover:scale-105 border-2 border-white text-xs"
      >
        <span>Keşif & Fiyat Botu</span>
      </button>
    </div>
  );
}
