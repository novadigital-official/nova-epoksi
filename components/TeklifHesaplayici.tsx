'use client';

// ═══════════════════════════════════════════════════════════
// NOVA EPOKSI ANTALYA — İNTERAKTİF MALİYET VE KEŞİF HESAPLAYICI
// ═══════════════════════════════════════════════════════════

import React, { useState } from 'react';

const FACILITY_TYPES = [
  { id: 'fabrika', name: 'Fabrika / OSB Tesis', basePrice: 240 },
  { id: 'depo', name: 'Lojistik Depo', basePrice: 200 },
  { id: 'otopark', name: 'Otopark / Garaj', basePrice: 210 },
  { id: 'otel', name: 'Otel & Showroom', basePrice: 350 },
  { id: 'esd', name: 'Antistatik ESD', basePrice: 480 }
];

const FLOOR_CONDITIONS = [
  { id: 'iyi', name: 'İyi (Hafif Silim & Astar)', multiplier: 1.0 },
  { id: 'orta', name: 'Orta (Çatlak Tamiri & Çift Kat Astar)', multiplier: 1.15 },
  { id: 'bozuk', name: 'Yıpranmış (Freze Silim & Dolgu Harcı)', multiplier: 1.35 }
];

export default function TeklifHesaplayici() {
  const [selectedFacility, setSelectedFacility] = useState(FACILITY_TYPES[0]);
  const [selectedCondition, setSelectedCondition] = useState(FLOOR_CONDITIONS[1]);
  const [squareMeters, setSquareMeters] = useState<number>(450);

  const [name, setName] = useState<string>('');
  const [phone, setPhone] = useState<string>('');
  const [location, setLocation] = useState<string>('Döşemealtı OSB');

  const baseBudget = squareMeters * selectedFacility.basePrice * selectedCondition.multiplier;
  const minBudget = Math.floor(baseBudget * 0.95);
  const maxBudget = Math.floor(baseBudget * 1.08);

  const formatTL = (val: number) => new Intl.NumberFormat('tr-TR').format(val);

  const handleWhatsAppRedirect = (e: React.FormEvent) => {
    e.preventDefault();
    const waText = encodeURIComponent(
      `*ANTALYA EPOKSİ ZEMİN KEŞİF TALEBİ*\n` +
      `• Yetkili: ${name || 'Belirtilmedi'}\n` +
      `• Telefon: ${phone || 'Belirtilmedi'}\n` +
      `• Konum: ${location}\n` +
      `• Tesis Tipi: ${selectedFacility.name}\n` +
      `• Metrekare: ${squareMeters} m²\n` +
      `• Zemin Durumu: ${selectedCondition.name}\n` +
      `• Tahmini Bütçe: ${formatTL(minBudget)} TL - ${formatTL(maxBudget)} TL\n\n` +
      `Yerinde ücretsiz keşif randevusu talep ediyorum.`
    );
    window.open(`https://wa.me/905070871789?text=${waText}`, '_blank');
  };

  return (
    <div className="w-full bg-white border border-slate-200/90 rounded-3xl p-6 sm:p-10 shadow-2xs text-slate-900">
      
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto space-y-2 mb-8 sm:mb-10">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-heading font-semibold bg-slate-100 text-slate-700 uppercase tracking-wider">
          <span>Ön Maliyet Hesaplama</span>
        </div>
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-heading font-extrabold text-slate-900 tracking-tight">
          İnteraktif Zemin Maliyet Hesaplayıcı
        </h2>
        <p className="text-xs sm:text-sm text-slate-500 max-w-2xl mx-auto font-normal">
          Tesis tipini, yaklaşık metrekareyi ve mevcut zemin durumunu belirleyerek anında tahmini keşif bütçenizi hesaplayın.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* Sol Kolon: Seçenekler */}
        <div className="lg:col-span-7 space-y-6">
          {/* 1. Tesis Tipi */}
          <div>
            <label className="block text-xs font-heading font-bold uppercase tracking-wider text-slate-700 mb-2.5">
              1. Tesis Faaliyet Alanı
            </label>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
              {FACILITY_TYPES.map((fac) => (
                <button
                  key={fac.id}
                  type="button"
                  onClick={() => setSelectedFacility(fac)}
                  className={`p-3 rounded-2xl text-left transition-all border text-xs cursor-pointer ${
                    selectedFacility.id === fac.id
                      ? 'bg-slate-900 text-white border-slate-900 shadow-sm font-bold'
                      : 'bg-slate-50 text-slate-700 border-slate-200 hover:border-slate-400 font-medium'
                  }`}
                >
                  <div className="truncate">{fac.name}</div>
                  <div className={`text-[10px] font-mono mt-1 ${selectedFacility.id === fac.id ? 'text-amber-400 font-semibold' : 'text-slate-400'}`}>
                    ~{fac.basePrice} TL/m²
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* 2. Zemin Durumu */}
          <div>
            <label className="block text-xs font-heading font-bold uppercase tracking-wider text-slate-700 mb-2.5">
              2. Mevcut Zemin Durumu
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
              {FLOOR_CONDITIONS.map((cond) => (
                <button
                  key={cond.id}
                  type="button"
                  onClick={() => setSelectedCondition(cond)}
                  className={`p-3 rounded-2xl text-left transition-all border text-xs cursor-pointer ${
                    selectedCondition.id === cond.id
                      ? 'bg-slate-900 text-amber-400 border-slate-900 shadow-sm font-bold'
                      : 'bg-slate-50 text-slate-700 border-slate-200 hover:border-slate-400 font-medium'
                  }`}
                >
                  <div>{cond.name.split('(')[0]}</div>
                  <div className="text-[10px] text-slate-400 font-normal mt-0.5 truncate">
                    ({cond.name.split('(')[1]}
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* 3. Metrekare Slider */}
          <div>
            <div className="flex items-center justify-between mb-2">
              <label className="text-xs font-heading font-bold uppercase tracking-wider text-slate-700">
                3. Alan Büyüklüğü (m²)
              </label>
              <span className="font-mono text-sm font-bold text-slate-900 bg-slate-100 px-3 py-1 rounded-xl">
                {squareMeters} m²
              </span>
            </div>
            <input
              type="range"
              min="50"
              max="5000"
              step="50"
              value={squareMeters}
              onChange={(e) => setSquareMeters(Number(e.target.value))}
              aria-label="Metrekare Seçici"
              className="w-full accent-amber-500 cursor-pointer h-2 bg-slate-100 rounded-lg appearance-none"
            />
            <div className="flex justify-between text-[10px] font-mono text-slate-400 mt-1">
              <span>50 m²</span>
              <span>1.000 m²</span>
              <span>2.500 m²</span>
              <span>5.000+ m²</span>
            </div>
          </div>
        </div>

        {/* Sağ Kolon: Tahmini Bütçe ve Hızlı Form */}
        <div className="lg:col-span-5 bg-slate-900 text-white p-6 sm:p-7 rounded-3xl space-y-5 border border-slate-800 shadow-md">
          <div>
            <span className="text-[11px] font-mono font-medium text-amber-400 uppercase tracking-widest block mb-1">
              TAHMİNİ BAŞLANGIÇ BÜTÇESİ
            </span>
            <div className="font-mono text-2xl sm:text-3xl font-extrabold text-white">
              {formatTL(minBudget)} – {formatTL(maxBudget)} ₺
            </div>
            <p className="text-[11px] text-slate-400 mt-1 font-normal">
              Anahtar teslim (Elmas silim + astar + epoksi + işçilik) tahmini keşif aralığıdır.
            </p>
          </div>

          <form onSubmit={handleWhatsAppRedirect} className="space-y-3 pt-2 border-t border-slate-800">
            <div>
              <input
                type="text"
                placeholder="Firma Yetkilisi Adı *"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full h-11 rounded-xl bg-slate-800 border border-slate-700 px-3.5 text-xs text-white placeholder:text-slate-400 outline-none focus:border-amber-400"
                required
              />
            </div>
            <div>
              <input
                type="tel"
                placeholder="Telefon Numarası *"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="w-full h-11 rounded-xl bg-slate-800 border border-slate-700 px-3.5 text-xs text-white placeholder:text-slate-400 outline-none focus:border-amber-400"
                required
              />
            </div>
            <div>
              <input
                type="text"
                placeholder="İlçe / Tesis Konumu (Örn: Döşemealtı OSB)"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                className="w-full h-11 rounded-xl bg-slate-800 border border-slate-700 px-3.5 text-xs text-white placeholder:text-slate-400 outline-none focus:border-amber-400"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-amber-500 hover:bg-amber-600 text-slate-950 font-heading font-black h-12 rounded-2xl text-xs uppercase tracking-wider transition-all shadow-sm flex items-center justify-center gap-2 cursor-pointer active:scale-98"
            >
              <span>Ücretsiz Keşif Raporu İste →</span>
            </button>
          </form>
        </div>

      </div>
    </div>
  );
}
