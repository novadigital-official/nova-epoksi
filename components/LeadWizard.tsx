'use client';

// ═══════════════════════════════════════════════════════════
// NOVA EPOKSI ANTALYA — ULTRA-MODERN 3-STEP LEAD STEPPER WIZARD
// ═══════════════════════════════════════════════════════════

import React, { useState, useTransition } from 'react';
import { submitAntalyaLeadAction } from '../app/actions/antalyaLeadAction';

const SQUARE_METER_OPTIONS = [
  { label: '0 – 100 m²', sub: 'Küçük Atölye / Depo' },
  { label: '100 – 300 m²', sub: 'Otopark / Mağaza' },
  { label: '300 – 1.000 m²', sub: 'Fabrika Holü' },
  { label: '1.000+ m²', sub: 'Büyük Tesis / OSB' }
];

const SERVICE_TYPE_OPTIONS = [
  { name: 'Fabrika & OSB', price: '350 TL/m²', icon: '🏭' },
  { name: 'Depo & Lojistik', price: '200 TL/m²', icon: '📦' },
  { name: 'Kapalı Otopark', price: '400 TL/m²', icon: '🚗' },
  { name: 'Ağır Forklift Zemin', price: '500 TL/m²', icon: '🚜' },
  { name: 'Otel & Showroom', price: '350 TL/m²', icon: '🏨' },
  { name: 'Antistatik ESD', price: '700 TL/m²', icon: '⚡' }
];

const ANTALYA_LOCATIONS = [
  'Döşemealtı OSB',
  'Muratpaşa',
  'Kepez / Sanayi',
  'Konyaaltı',
  'Aksu / Serik',
  'Alanya / Manavgat'
];

export default function LeadWizard({ defaultSource = 'GOOGLE_ADS' }: { defaultSource?: string }) {
  const [currentStep, setCurrentStep] = useState<number>(1);
  const [selectedService, setSelectedService] = useState<string>(SERVICE_TYPE_OPTIONS[0].name);
  const [selectedSqM, setSelectedSqM] = useState<string>(SQUARE_METER_OPTIONS[1].label);
  const [selectedLocation, setSelectedLocation] = useState<string>(ANTALYA_LOCATIONS[0]);
  
  const [name, setName] = useState<string>('');
  const [phone, setPhone] = useState<string>('');
  const [isPending, startTransition] = useTransition();

  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  const currentEstimatedPrice = SERVICE_TYPE_OPTIONS.find(s => s.name === selectedService)?.price || '350 TL/m²';

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg(null);

    if (!name || !phone) {
      setErrorMsg('Lütfen ad soyad ve telefon numaranızı eksiksiz giriniz.');
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
    <div className="w-full bg-white border border-slate-200/90 rounded-3xl p-6 sm:p-8 shadow-xl shadow-slate-900/5 text-slate-900 flex flex-col justify-between relative overflow-hidden">
      
      {/* Top Ambient Glow */}
      <div className="absolute top-0 right-0 w-48 h-48 bg-amber-400/10 rounded-full blur-3xl pointer-events-none" />

      <div>
        {/* Header Badges & Stepper Bar */}
        <div className="space-y-4 mb-6">
          <div className="flex items-center justify-between">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-50 border border-amber-200/80 text-amber-900 text-xs font-heading font-extrabold uppercase tracking-wider">
              <span>⚡ Ücretsiz Keşif Konfigüratörü</span>
            </span>
            <span className="inline-flex items-center gap-1.5 text-xs font-mono font-bold text-emerald-600 bg-emerald-50 px-2.5 py-1 rounded-full border border-emerald-200/60">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span>Aynı Gün Keşif</span>
            </span>
          </div>

          <div>
            <h3 className="text-xl sm:text-2xl font-heading font-extrabold text-slate-900 tracking-tight">
              Teknik Şartname & Fiyat Hesapla
            </h3>
            <p className="text-xs sm:text-sm text-slate-500 font-normal mt-1 leading-relaxed">
              3 basit adımda tesisinize özel zemin türünü belirleyin, mühendislerimiz aynı gün yerinde incelesin.
            </p>
          </div>

          {/* Stepper Progress Bar */}
          <div className="space-y-1.5">
            <div className="flex justify-between text-[11px] font-bold text-slate-500">
              <span className={currentStep >= 1 ? 'text-amber-600' : ''}>1. Tesis Tipi</span>
              <span className={currentStep >= 2 ? 'text-amber-600' : ''}>2. Alan & Konum</span>
              <span className={currentStep >= 3 ? 'text-amber-600' : ''}>3. İletişim</span>
            </div>
            <div className="w-full h-2 bg-slate-100 rounded-full overflow-hidden flex">
              <div
                className="h-full bg-gradient-to-r from-amber-500 to-amber-600 transition-all duration-300 rounded-full"
                style={{ width: currentStep === 1 ? '33.3%' : currentStep === 2 ? '66.6%' : '100%' }}
              />
            </div>
          </div>
        </div>

        {isSubmitted ? (
          <div className="py-10 text-center animate-fadeIn space-y-4">
            <div className="w-14 h-14 bg-emerald-100 text-emerald-700 rounded-2xl flex items-center justify-center text-2xl font-bold mx-auto shadow-sm">
              ✓
            </div>
            <h4 className="text-xl sm:text-2xl font-heading font-extrabold text-slate-900">
              Keşif Talebiniz Başarıyla Alındı
            </h4>
            <p className="text-xs sm:text-sm text-slate-600 max-w-sm mx-auto leading-relaxed">
              Teknik mühendisimiz lazerli zemin analizi ve şartname hazırlığı için telefon numaranız üzerinden kısa sürede size ulaşacaktır.
            </p>
            <button
              onClick={() => {
                setIsSubmitted(false);
                setCurrentStep(1);
              }}
              className="px-6 py-3 bg-slate-900 hover:bg-slate-800 text-white font-bold rounded-xl text-xs transition-all cursor-pointer shadow-md"
            >
              Yeni Talep Oluştur
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-5">
            
            {/* STEP 1: Tesis Tipi Seçimi */}
            {currentStep === 1 && (
              <div className="space-y-3 animate-fadeIn">
                <label className="block text-xs font-heading font-extrabold uppercase tracking-wider text-slate-700">
                  Tesisinizin Faaliyet Alanını Seçin:
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
                  {SERVICE_TYPE_OPTIONS.map((srv) => (
                    <button
                      key={srv.name}
                      type="button"
                      onClick={() => setSelectedService(srv.name)}
                      className={`p-3 rounded-2xl text-left transition-all border text-xs cursor-pointer flex flex-col justify-between min-h-[72px] ${
                        selectedService === srv.name
                          ? 'bg-slate-950 text-white border-slate-950 shadow-md ring-2 ring-amber-500/40'
                          : 'bg-slate-50/80 text-slate-700 border-slate-200/90 hover:border-amber-400 hover:bg-white'
                      }`}
                    >
                      <div className="flex items-center gap-1.5 font-bold">
                        <span>{srv.icon}</span>
                        <span className="truncate">{srv.name}</span>
                      </div>
                      <span className={`text-[10px] font-mono mt-1 ${selectedService === srv.name ? 'text-amber-400 font-bold' : 'text-slate-500'}`}>
                        {srv.price}
                      </span>
                    </button>
                  ))}
                </div>

                <div className="pt-2">
                  <button
                    type="button"
                    onClick={() => setCurrentStep(2)}
                    className="w-full bg-slate-900 hover:bg-slate-800 text-white font-heading font-black h-12 rounded-2xl text-xs uppercase tracking-wider transition-all shadow-md flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <span>Devam Et: Metrekare & Konum →</span>
                  </button>
                </div>
              </div>
            )}

            {/* STEP 2: Metrekare ve Konum Seçimi */}
            {currentStep === 2 && (
              <div className="space-y-4 animate-fadeIn">
                <div>
                  <label className="block text-xs font-heading font-extrabold uppercase tracking-wider text-slate-700 mb-2">
                    Yaklaşık Uygulama Alanı (m²):
                  </label>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                    {SQUARE_METER_OPTIONS.map((sqm) => (
                      <button
                        key={sqm.label}
                        type="button"
                        onClick={() => setSelectedSqM(sqm.label)}
                        className={`p-2.5 rounded-2xl text-center transition-all border text-xs cursor-pointer ${
                          selectedSqM === sqm.label
                            ? 'bg-slate-950 text-amber-400 border-slate-950 font-bold shadow-md ring-2 ring-amber-500/40'
                            : 'bg-slate-50/80 text-slate-700 border-slate-200 hover:border-amber-400 hover:bg-white font-semibold'
                        }`}
                      >
                        <div className="font-extrabold">{sqm.label}</div>
                        <div className="text-[9px] text-slate-500 truncate mt-0.5">{sqm.sub}</div>
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-heading font-extrabold uppercase tracking-wider text-slate-700 mb-2">
                    Tesis Konumu (Antalya):
                  </label>
                  <select
                    value={selectedLocation}
                    onChange={(e) => setSelectedLocation(e.target.value)}
                    className="w-full h-11 rounded-2xl border border-slate-200 px-3.5 text-xs bg-slate-50/90 text-slate-900 font-bold outline-none focus:ring-2 focus:ring-amber-500/40 focus:border-amber-500 transition-all cursor-pointer"
                  >
                    {ANTALYA_LOCATIONS.map((loc) => (
                      <option key={loc} value={loc}>
                        📍 {loc}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Estimated Unit Pricing Display */}
                <div className="bg-slate-50 border border-slate-200/80 p-3 rounded-2xl flex items-center justify-between">
                  <span className="text-xs font-bold text-slate-600">
                    Seçilen Sistem Birim Başlangıç:
                  </span>
                  <span className="font-mono text-xs font-black text-slate-950 bg-white px-3 py-1 border border-slate-200 rounded-xl shadow-2xs">
                    {currentEstimatedPrice}
                  </span>
                </div>

                <div className="flex gap-2 pt-1">
                  <button
                    type="button"
                    onClick={() => setCurrentStep(1)}
                    className="w-1/3 bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold h-12 rounded-2xl text-xs transition-all cursor-pointer"
                  >
                    ← Geri
                  </button>
                  <button
                    type="button"
                    onClick={() => setCurrentStep(3)}
                    className="w-2/3 bg-slate-900 hover:bg-slate-800 text-white font-heading font-black h-12 rounded-2xl text-xs uppercase tracking-wider transition-all shadow-md flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <span>İletişim Bilgileri →</span>
                  </button>
                </div>
              </div>
            )}

            {/* STEP 3: İletişim Bilgileri ve Gönderim */}
            {currentStep === 3 && (
              <div className="space-y-4 animate-fadeIn">
                <label className="block text-xs font-heading font-extrabold uppercase tracking-wider text-slate-700">
                  Yetkili İletişim Bilgileri:
                </label>

                <div className="space-y-3">
                  <div>
                    <input
                      type="text"
                      placeholder="Firma Yetkilisi Adı Soyadı *"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full h-12 rounded-2xl border border-slate-200 px-4 text-xs font-bold text-slate-900 bg-slate-50/70 placeholder:text-slate-400 outline-none focus:ring-2 focus:ring-amber-500/40 focus:border-amber-500 transition-all"
                      required
                    />
                  </div>
                  <div>
                    <input
                      type="tel"
                      placeholder="Telefon Numarası (05XX XXX XX XX) *"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="w-full h-12 rounded-2xl border border-slate-200 px-4 text-xs font-bold text-slate-900 bg-slate-50/70 placeholder:text-slate-400 outline-none focus:ring-2 focus:ring-amber-500/40 focus:border-amber-500 transition-all"
                      required
                    />
                  </div>
                </div>

                {errorMsg && (
                  <div className="p-3 bg-red-50 border border-red-200 rounded-xl text-red-700 text-xs font-bold text-center">
                    {errorMsg}
                  </div>
                )}

                <div className="flex gap-2 pt-1">
                  <button
                    type="button"
                    onClick={() => setCurrentStep(2)}
                    className="w-1/3 bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold h-12 rounded-2xl text-xs transition-all cursor-pointer"
                  >
                    ← Geri
                  </button>
                  <button
                    type="submit"
                    disabled={isPending}
                    className="w-2/3 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-slate-950 font-heading font-black h-12 rounded-2xl text-xs uppercase tracking-wider transition-all shadow-lg shadow-amber-500/25 flex items-center justify-center gap-2 cursor-pointer active:scale-98"
                  >
                    {isPending ? (
                      <span>Kaydediliyor...</span>
                    ) : (
                      <span>Ücretsiz Keşif Randevusu Al →</span>
                    )}
                  </button>
                </div>
              </div>
            )}

          </form>
        )}
      </div>
    </div>
  );
}
