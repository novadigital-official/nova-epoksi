'use client';

// ═══════════════════════════════════════════════════════════
// NOVA EPOKSI ANTALYA — B2B TECHNICAL STEPPER WIZARD (NO EMOJIS, CLEAN SVGS)
// ═══════════════════════════════════════════════════════════

import React, { useState, useTransition } from 'react';
import { submitAntalyaLeadAction } from '../app/actions/antalyaLeadAction';

const SQUARE_METER_OPTIONS = [
  { label: '0 – 100 m²', sub: 'Atölye / Küçük Depo' },
  { label: '100 – 300 m²', sub: 'Otopark / Mağaza' },
  { label: '300 – 1.000 m²', sub: 'Fabrika Holü' },
  { label: '1.000+ m²', sub: 'Büyük Tesis / OSB' }
];

const SERVICE_TYPE_OPTIONS = [
  {
    name: 'Fabrika & OSB',
    price: '350 TL/m²',
    svg: (
      <svg className="w-4 h-4 stroke-current fill-none stroke-2 shrink-0" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 21h16.5M4.5 3h15M5.25 3v18m13.5-18v18M9 6.75h1.5m-1.5 3h1.5m-1.5 3h1.5m3-6H15m-1.5 3H15m-1.5 3H15M9 21v-3.375c0-.621.504-1.125 1.125-1.125h3.75c.621 0 1.125.504 1.125 1.125V21" />
      </svg>
    )
  },
  {
    name: 'Depo & Lojistik',
    price: '200 TL/m²',
    svg: (
      <svg className="w-4 h-4 stroke-current fill-none stroke-2 shrink-0" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 7.5l-.625 10.632a2.25 2.25 0 01-2.247 2.118H6.622a2.25 2.25 0 01-2.247-2.118L3.75 7.5M10 11.25h4M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125z" />
      </svg>
    )
  },
  {
    name: 'Kapalı Otopark',
    price: '400 TL/m²',
    svg: (
      <svg className="w-4 h-4 stroke-current fill-none stroke-2 shrink-0" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 00-3.215-9.108 2.25 2.25 0 00-1.92-1.018H7.07a2.25 2.25 0 00-1.92 1.018 17.92 17.92 0 00-3.215 9.108c-.04.62.469 1.124 1.09 1.124H6" />
      </svg>
    )
  },
  {
    name: 'Ağır Forklift Zemin',
    price: '500 TL/m²',
    svg: (
      <svg className="w-4 h-4 stroke-current fill-none stroke-2 shrink-0" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
      </svg>
    )
  },
  {
    name: 'Otel & Showroom',
    price: '350 TL/m²',
    svg: (
      <svg className="w-4 h-4 stroke-current fill-none stroke-2 shrink-0" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 21v-8.25M15.75 21v-8.25M8.25 21v-8.25M3 9l9-6 9 6m-1.5 12V10.332A48.36 48.36 0 0012 9.75c-2.551 0-5.056.2-7.5.582V21M3 21h18M12 6.75h.008v.008H12V6.75z" />
      </svg>
    )
  },
  {
    name: 'Antistatik ESD',
    price: '700 TL/m²',
    svg: (
      <svg className="w-4 h-4 stroke-current fill-none stroke-2 shrink-0" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
      </svg>
    )
  }
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
    <div className="w-full bg-white border border-slate-200/90 rounded-3xl p-6 sm:p-8 shadow-xs text-slate-900 flex flex-col justify-between relative overflow-hidden">
      
      <div>
        {/* Header Badges & Stepper Bar */}
        <div className="space-y-4 mb-6">
          <div className="flex items-center justify-between">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-100 text-slate-700 text-xs font-heading font-semibold uppercase tracking-wider">
              <span>Keşif & Ön Şartname Talebi</span>
            </span>
            <span className="text-xs font-mono font-medium text-slate-500">
              Adım {currentStep}/3
            </span>
          </div>

          <div>
            <h3 className="text-xl sm:text-2xl font-heading font-extrabold text-slate-900 tracking-tight">
              Teknik Şartname & Fiyatlandırma
            </h3>
            <p className="text-xs sm:text-sm text-slate-500 font-normal mt-1 leading-relaxed">
              Tesis tipinizi ve tahmini metrajınızı belirleyin; mühendislerimiz aynı gün yerinde zemin analizi yapsın.
            </p>
          </div>

          {/* Stepper Progress Bar */}
          <div className="space-y-1.5">
            <div className="flex justify-between text-[11px] font-semibold text-slate-500">
              <span className={currentStep >= 1 ? 'text-amber-600' : ''}>1. Tesis Tipi</span>
              <span className={currentStep >= 2 ? 'text-amber-600' : ''}>2. Alan & Konum</span>
              <span className={currentStep >= 3 ? 'text-amber-600' : ''}>3. İletişim</span>
            </div>
            <div className="w-full h-1.5 bg-slate-100 rounded-full overflow-hidden flex">
              <div
                className="h-full bg-amber-500 transition-all duration-300 rounded-full"
                style={{ width: currentStep === 1 ? '33.3%' : currentStep === 2 ? '66.6%' : '100%' }}
              />
            </div>
          </div>
        </div>

        {isSubmitted ? (
          <div className="py-10 text-center animate-fadeIn space-y-4">
            <div className="w-12 h-12 bg-slate-900 text-white rounded-2xl flex items-center justify-center text-xl font-bold mx-auto shadow-sm">
              <svg className="w-6 h-6 stroke-current fill-none stroke-2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
              </svg>
            </div>
            <h4 className="text-xl font-heading font-extrabold text-slate-900">
              Keşif Talebiniz Alındı
            </h4>
            <p className="text-xs sm:text-sm text-slate-600 max-w-sm mx-auto leading-relaxed">
              Teknik mühendisimiz lazerli zemin analizi ve şartname hazırlığı için telefon numaranız üzerinden kısa sürede size ulaşacaktır.
            </p>
            <button
              onClick={() => {
                setIsSubmitted(false);
                setCurrentStep(1);
              }}
              className="px-5 py-2.5 bg-slate-900 hover:bg-slate-800 text-white font-semibold rounded-xl text-xs transition-all cursor-pointer"
            >
              Yeni Talep Oluştur
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-5">
            
            {/* STEP 1: Tesis Tipi Seçimi */}
            {currentStep === 1 && (
              <div className="space-y-3 animate-fadeIn">
                <label className="block text-xs font-heading font-bold uppercase tracking-wider text-slate-700">
                  Tesisinizin Faaliyet Alanı:
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
                  {SERVICE_TYPE_OPTIONS.map((srv) => (
                    <button
                      key={srv.name}
                      type="button"
                      onClick={() => setSelectedService(srv.name)}
                      className={`p-3 rounded-2xl text-left transition-all border text-xs cursor-pointer flex flex-col justify-between min-h-[72px] ${
                        selectedService === srv.name
                          ? 'bg-slate-900 text-white border-slate-900 shadow-sm'
                          : 'bg-slate-50 text-slate-700 border-slate-200/90 hover:border-slate-400 hover:bg-white'
                      }`}
                    >
                      <div className="flex items-center gap-1.5 font-bold">
                        <span className={selectedService === srv.name ? 'text-amber-400' : 'text-slate-500'}>
                          {srv.svg}
                        </span>
                        <span className="truncate">{srv.name}</span>
                      </div>
                      <span className={`text-[10px] font-mono mt-1 ${selectedService === srv.name ? 'text-amber-400 font-semibold' : 'text-slate-400'}`}>
                        {srv.price}
                      </span>
                    </button>
                  ))}
                </div>

                <div className="pt-2">
                  <button
                    type="button"
                    onClick={() => setCurrentStep(2)}
                    className="w-full bg-slate-900 hover:bg-slate-800 text-white font-heading font-bold h-12 rounded-2xl text-xs uppercase tracking-wider transition-all flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <span>İlerle: Metrekare & Konum</span>
                    <span>→</span>
                  </button>
                </div>
              </div>
            )}

            {/* STEP 2: Metrekare ve Konum Seçimi */}
            {currentStep === 2 && (
              <div className="space-y-4 animate-fadeIn">
                <div>
                  <label className="block text-xs font-heading font-bold uppercase tracking-wider text-slate-700 mb-2">
                    Yaklaşık Uygulama Alanı:
                  </label>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                    {SQUARE_METER_OPTIONS.map((sqm) => (
                      <button
                        key={sqm.label}
                        type="button"
                        onClick={() => setSelectedSqM(sqm.label)}
                        className={`p-2.5 rounded-2xl text-center transition-all border text-xs cursor-pointer ${
                          selectedSqM === sqm.label
                            ? 'bg-slate-900 text-amber-400 border-slate-900 font-bold shadow-sm'
                            : 'bg-slate-50 text-slate-700 border-slate-200 hover:border-slate-400 hover:bg-white font-semibold'
                        }`}
                      >
                        <div className="font-bold">{sqm.label}</div>
                        <div className="text-[9px] text-slate-400 truncate mt-0.5">{sqm.sub}</div>
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-heading font-bold uppercase tracking-wider text-slate-700 mb-2">
                    Tesis Konumu (Antalya):
                  </label>
                  <select
                    value={selectedLocation}
                    onChange={(e) => setSelectedLocation(e.target.value)}
                    className="w-full h-11 rounded-2xl border border-slate-200 px-3.5 text-xs bg-slate-50 text-slate-900 font-semibold outline-none focus:border-slate-400 transition-all cursor-pointer"
                  >
                    {ANTALYA_LOCATIONS.map((loc) => (
                      <option key={loc} value={loc}>
                        {loc}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Estimated Unit Pricing Display */}
                <div className="bg-slate-50 border border-slate-200 p-3 rounded-2xl flex items-center justify-between">
                  <span className="text-xs font-medium text-slate-600">
                    Seçilen Sistem Birim Başlangıç:
                  </span>
                  <span className="font-mono text-xs font-bold text-slate-900 bg-white px-3 py-1 border border-slate-200 rounded-xl">
                    {currentEstimatedPrice}
                  </span>
                </div>

                <div className="flex gap-2 pt-1">
                  <button
                    type="button"
                    onClick={() => setCurrentStep(1)}
                    className="w-1/3 bg-slate-100 hover:bg-slate-200 text-slate-700 font-semibold h-12 rounded-2xl text-xs transition-all cursor-pointer"
                  >
                    Geri
                  </button>
                  <button
                    type="button"
                    onClick={() => setCurrentStep(3)}
                    className="w-2/3 bg-slate-900 hover:bg-slate-800 text-white font-heading font-bold h-12 rounded-2xl text-xs uppercase tracking-wider transition-all flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <span>İletişim Bilgileri</span>
                    <span>→</span>
                  </button>
                </div>
              </div>
            )}

            {/* STEP 3: İletişim Bilgileri ve Gönderim */}
            {currentStep === 3 && (
              <div className="space-y-4 animate-fadeIn">
                <label className="block text-xs font-heading font-bold uppercase tracking-wider text-slate-700">
                  Yetkili İletişim Bilgileri:
                </label>

                <div className="space-y-3">
                  <div>
                    <input
                      type="text"
                      placeholder="Firma Yetkilisi Adı Soyadı *"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full h-12 rounded-2xl border border-slate-200 px-4 text-xs font-medium text-slate-900 bg-slate-50 placeholder:text-slate-400 outline-none focus:border-slate-400 transition-all"
                      required
                    />
                  </div>
                  <div>
                    <input
                      type="tel"
                      placeholder="Telefon Numarası (05XX XXX XX XX) *"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="w-full h-12 rounded-2xl border border-slate-200 px-4 text-xs font-medium text-slate-900 bg-slate-50 placeholder:text-slate-400 outline-none focus:border-slate-400 transition-all"
                      required
                    />
                  </div>
                </div>

                {errorMsg && (
                  <div className="p-3 bg-red-50 border border-red-200 rounded-xl text-red-700 text-xs font-medium text-center">
                    {errorMsg}
                  </div>
                )}

                <div className="flex gap-2 pt-1">
                  <button
                    type="button"
                    onClick={() => setCurrentStep(2)}
                    className="w-1/3 bg-slate-100 hover:bg-slate-200 text-slate-700 font-semibold h-12 rounded-2xl text-xs transition-all cursor-pointer"
                  >
                    Geri
                  </button>
                  <button
                    type="submit"
                    disabled={isPending}
                    className="w-2/3 bg-amber-500 hover:bg-amber-600 text-slate-950 font-heading font-black h-12 rounded-2xl text-xs uppercase tracking-wider transition-all shadow-md flex items-center justify-center gap-2 cursor-pointer active:scale-98"
                  >
                    {isPending ? (
                      <span>Kaydediliyor...</span>
                    ) : (
                      <span>Keşif Randevusu Al →</span>
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
