'use client';

// ═══════════════════════════════════════════════════════════
// NOVA EPOKSI ANTALYA — YALIN VE ANLAŞILIR İLETİŞİM FORMU
// Tekrarlayan "Fiyat Al" Butonlarından Arındırılmış Temiz Yapı
// ═══════════════════════════════════════════════════════════

import React, { useState, useTransition } from 'react';
import { submitAntalyaLeadAction } from '../app/actions/antalyaLeadAction';

const SQUARE_METER_OPTIONS = ['0 - 50 m²', '50 - 200 m²', '200 - 500 m²', '500+ m²'];
const SERVICE_TYPE_OPTIONS = ['Fabrika', 'Depo', 'Otopark', 'Otel / Restoran', 'Garaj', 'Dekoratif'];
const ANTALYA_LOCATIONS = ['Antalya / Merkez', 'Muratpaşa', 'Kepez', 'Konyaaltı', 'Döşemealtı OSB', 'Alanya', 'Manavgat', 'Serik'];

export default function LeadWizard({ defaultSource = 'GOOGLE_ADS' }: { defaultSource?: string }) {
  const [selectedSqM, setSelectedSqM] = useState<string>(SQUARE_METER_OPTIONS[1]);
  const [selectedService, setSelectedService] = useState<string>(SERVICE_TYPE_OPTIONS[0]);
  const [selectedLocation, setSelectedLocation] = useState<string>(ANTALYA_LOCATIONS[0]);
  
  const [name, setName] = useState<string>('');
  const [phone, setPhone] = useState<string>('');
  const [isPending, startTransition] = useTransition();

  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg(null);

    if (!name || !phone) {
      setErrorMsg('Lütfen ad soyad ve telefon numaranızı giriniz.');
      return;
    }

    startTransition(async () => {
      const result = await submitAntalyaLeadAction({
        name,
        phone,
        serviceType: selectedService,
        squareMeters: selectedSqM,
        location: selectedLocation,
        source: defaultSource as any
      });

      if (result.success) {
        setIsSubmitted(true);
        if (result.whatsappUrl) {
          setTimeout(() => {
            window.open(result.whatsappUrl, '_blank');
          }, 400);
        }
      } else {
        setErrorMsg(result.message || 'Bir hata oluştu.');
      }
    });
  };

  return (
    <div className="w-full bg-white border border-slate-200 rounded-3xl p-5 sm:p-8 shadow-xl text-slate-900 min-h-[490px] flex flex-col justify-between">
      <div>
        <div className="mb-4 bg-slate-100 border border-slate-200 p-2.5 rounded-2xl flex items-center gap-2 text-xs font-bold text-slate-700">
          <span className="w-2.5 h-2.5 rounded-full bg-emerald-600 animate-pulse"></span>
          <span>Antalya İçi Yerinde İnceleme ve Bilgi Formu</span>
        </div>

        <h3 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight mb-1">
          Projeniz İçin İletişime Geçin
        </h3>
        <p className="text-xs text-slate-600 mb-5 leading-relaxed">
          Zemininizi yerinde analiz ediyor, mekanınıza uygun sistemi birlikte planlıyoruz.
        </p>

        {isSubmitted ? (
          <div className="py-8 text-center animate-fadeIn">
            <div className="w-14 h-14 bg-emerald-100 text-emerald-700 border border-emerald-300 rounded-full flex items-center justify-center text-2xl font-black mx-auto mb-4">
              ✓
            </div>
            <h4 className="text-2xl font-extrabold text-slate-900 mb-2">Talebiniz Alındı</h4>
            <p className="text-sm text-slate-700 font-medium max-w-md mx-auto mb-6 leading-relaxed">
              Ekibimiz en kısa sürede sizinle iletişime geçecektir.
            </p>
            <button
              onClick={() => setIsSubmitted(false)}
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-black min-h-[48px] px-6 rounded-xl transition-all text-sm shadow-md cursor-pointer"
            >
              Yeni Talep Gönder
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-1.5">
                1. Kullanım Alanı
              </label>
              <div className="grid grid-cols-3 sm:grid-cols-6 gap-2">
                {SERVICE_TYPE_OPTIONS.map((srv) => (
                  <button
                    key={srv}
                    type="button"
                    onClick={() => setSelectedService(srv)}
                    className={`min-h-[42px] px-2 rounded-xl font-bold text-xs transition-all border text-center cursor-pointer ${
                      selectedService === srv
                        ? 'bg-blue-600 text-white border-blue-600 shadow-sm'
                        : 'bg-slate-50 text-slate-700 border-slate-200 hover:border-slate-300'
                    }`}
                  >
                    {srv}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-1.5">
                2. Yaklaşık m²
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                {SQUARE_METER_OPTIONS.map((sqm) => (
                  <button
                    key={sqm}
                    type="button"
                    onClick={() => setSelectedSqM(sqm)}
                    className={`min-h-[42px] px-3 rounded-xl font-extrabold text-xs transition-all border cursor-pointer ${
                      selectedSqM === sqm
                        ? 'bg-blue-600 text-white border-blue-600 shadow-sm'
                        : 'bg-slate-50 text-slate-700 border-slate-200 hover:border-slate-300'
                    }`}
                  >
                    {sqm}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-1.5">
                3. Konum
              </label>
              <select
                value={selectedLocation}
                onChange={(e) => setSelectedLocation(e.target.value)}
                className="w-full bg-slate-50 border border-slate-200 text-slate-900 font-bold text-xs min-h-[44px] px-3 rounded-xl outline-none focus:border-blue-600"
              >
                {ANTALYA_LOCATIONS.map((loc) => (
                  <option key={loc} value={loc}>{loc}</option>
                ))}
              </select>
            </div>

            <div className="space-y-3 pt-1">
              {errorMsg && (
                <div className="p-2.5 rounded-xl bg-red-50 border border-red-200 text-red-700 text-xs font-semibold">
                  {errorMsg}
                </div>
              )}

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                <input
                  type="text"
                  placeholder="Adınız Soyadınız *"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                  className="w-full bg-slate-50 border border-slate-200 text-slate-900 min-h-[46px] px-4 rounded-xl text-xs outline-none focus:border-blue-600"
                />
                <input
                  type="tel"
                  placeholder="Telefon Numaranız *"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  required
                  className="w-full bg-slate-50 border border-slate-200 text-slate-900 min-h-[46px] px-4 rounded-xl text-xs outline-none focus:border-blue-600"
                />
              </div>

              <button
                type="submit"
                disabled={isPending}
                className="w-full bg-emerald-600 hover:bg-emerald-500 text-white font-black min-h-[48px] text-sm rounded-xl shadow-md transition-all cursor-pointer flex items-center justify-center gap-2"
              >
                {isPending ? (
                  <span>Gönderiliyor...</span>
                ) : (
                  <span>Talebi Gönder</span>
                )}
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}
