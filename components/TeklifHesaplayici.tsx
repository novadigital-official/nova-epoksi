'use client';

// ═══════════════════════════════════════════════════════════
// NOVA EPOKSI ANTALYA — YÖNETİM & MÜŞTERİ TEKLİF HESAPLAYICI
// ═══════════════════════════════════════════════════════════

import React, { useState } from 'react';

const FACILITY_TYPES = [
  { id: 'fabrika', name: 'Fabrika / Üretim', basePrice: 240 },
  { id: 'otel', name: 'Otel / Lobi', basePrice: 350 },
  { id: 'otopark', name: 'Otopark / Garaj', basePrice: 210 },
  { id: 'metalik', name: 'Metalik Epoksi', basePrice: 420 },
  { id: '3d', name: '3D / Dekoratif', basePrice: 480 }
];

const FLOOR_CONDITIONS = [
  { id: 'iyi', name: 'İyi (Hafif Zımpara / Astar)', multiplier: 1.0 },
  { id: 'orta', name: 'Orta (Çatlak Tamiri / Çift Astar)', multiplier: 1.15 },
  { id: 'bozuk', name: 'Bozuk (Beton Freze / Tam Yoğun Astar)', multiplier: 1.35 }
];

export default function TeklifHesaplayici() {
  const [selectedFacility, setSelectedFacility] = useState(FACILITY_TYPES[0]);
  const [selectedCondition, setSelectedCondition] = useState(FLOOR_CONDITIONS[1]);
  const [squareMeters, setSquareMeters] = useState<number>(450);

  const [name, setName] = useState<string>('');
  const [phone, setPhone] = useState<string>('');
  const [location, setLocation] = useState<string>('Antalya / Lara');

  const baseBudget = squareMeters * selectedFacility.basePrice * selectedCondition.multiplier;
  const minBudget = Math.floor(baseBudget * 0.95);
  const maxBudget = Math.floor(baseBudget * 1.08);

  const formatTL = (val: number) => new Intl.NumberFormat('tr-TR').format(val);

  const handleWhatsAppRedirect = (e: React.FormEvent) => {
    e.preventDefault();
    const waText = encodeURIComponent(
      `*ANINDA TEKLİF & KEŞİF TALEBİ*\n` +
      `• *İsim:* ${name || 'Belirtilmedi'}\n` +
      `• *Telefon:* ${phone || 'Belirtilmedi'}\n` +
      `• *Lokasyon:* ${location}\n` +
      `• *Alan Tipi:* ${selectedFacility.name}\n` +
      `• *Metrekare:* ${squareMeters} m²\n` +
      `• *Zemin Durumu:* ${selectedCondition.name}\n` +
      `• *Tahmini Keşif Aralığı:* ${formatTL(minBudget)} TL - ${formatTL(maxBudget)} TL\n\n` +
      `Adresimde ücretsiz yerinde keşif yapmak istiyorum.`
    );
    window.open(`https://wa.me/905070871789?text=${waText}`, '_blank');
  };

  return (
    <div className="w-full bg-white border border-slate-200 rounded-3xl p-6 sm:p-8 shadow-sm text-slate-900">
      <div className="flex items-center justify-between pb-4 mb-6 border-b border-slate-200">
        <div>
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-black bg-blue-100 text-blue-800 border border-blue-200 mb-2">
            ANINDA TEKLİF & KEŞİF HESAPLAYICI
          </span>
          <h3 className="text-xl sm:text-2xl font-black text-slate-900">
            Epoksi Zemin Keşif Hesaplayıcı
          </h3>
        </div>
      </div>

      <form onSubmit={handleWhatsAppRedirect} className="space-y-6">
        {/* Adım 1: Alan Tipi */}
        <div>
          <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-2">
            1. Tesis / Alan Tipi
          </label>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
            {FACILITY_TYPES.map((fac) => (
              <button
                key={fac.id}
                type="button"
                onClick={() => setSelectedFacility(fac)}
                className={`p-3 rounded-xl font-bold text-xs border text-left transition-all ${
                  selectedFacility.id === fac.id
                    ? 'bg-blue-600 text-white border-blue-600 font-black shadow-sm'
                    : 'bg-slate-50 text-slate-700 border-slate-200 hover:border-slate-300'
                }`}
              >
                {fac.name}
              </button>
            ))}
          </div>
        </div>

        {/* Adım 2: m² ve Zemin Durumu */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <div className="flex justify-between items-center mb-2">
              <label className="text-xs font-bold uppercase tracking-wider text-slate-500">
                2. Toplam Alan (m²)
              </label>
              <span className="text-blue-600 font-black text-sm">{squareMeters} m²</span>
            </div>
            <input
              type="range"
              min={50}
              max={5000}
              step={50}
              value={squareMeters}
              onChange={(e) => setSquareMeters(Number(e.target.value))}
              className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-blue-600"
            />
          </div>

          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-2">
              3. Mevcut Zemin Durumu
            </label>
            <select
              value={selectedCondition.id}
              onChange={(e) => {
                const found = FLOOR_CONDITIONS.find(c => c.id === e.target.value);
                if (found) setSelectedCondition(found);
              }}
              className="w-full bg-slate-50 border border-slate-200 text-slate-900 font-bold text-xs rounded-xl p-3 outline-none focus:border-blue-600"
            >
              {FLOOR_CONDITIONS.map((cond) => (
                <option key={cond.id} value={cond.id}>{cond.name}</option>
              ))}
            </select>
          </div>
        </div>

        {/* Adım 3: ÇIKTI - Tahmini Keşif Aralığı */}
        <div className="bg-slate-50 border border-blue-200 rounded-2xl p-5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <span className="text-xs font-bold text-slate-500 block">Tahmini Keşif Bütçe Aralığı</span>
            <span className="text-2xl sm:text-3xl font-black text-blue-600">
              {formatTL(minBudget)} TL - {formatTL(maxBudget)} TL
            </span>
          </div>
          <span className="text-[10px] bg-blue-100 text-blue-800 border border-blue-200 px-3 py-1.5 rounded-full font-extrabold whitespace-nowrap">
            *Ücretsiz Adreste Keşif Dahil
          </span>
        </div>

        {/* İletişim & WhatsApp Butonu */}
        <div className="space-y-3">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <input
              type="text"
              placeholder="Adınız Soyadınız *"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              className="w-full bg-slate-50 border border-slate-200 text-slate-900 px-4 py-3 rounded-xl text-xs outline-none focus:border-blue-600"
            />
            <input
              type="tel"
              placeholder="Telefon Numaranız *"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              required
              className="w-full bg-slate-50 border border-slate-200 text-slate-900 px-4 py-3 rounded-xl text-xs outline-none focus:border-blue-600"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-emerald-500 hover:bg-emerald-600 text-slate-950 font-black text-base py-4 rounded-xl shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer"
          >
            <span>🟢 WhatsApp'tan Kesin Fiyat Al & Keşif İste</span>
          </button>
        </div>
      </form>
    </div>
  );
}
