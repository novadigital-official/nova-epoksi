'use client';

// ═══════════════════════════════════════════════════════════
// NEXT.JS 14+ REACT CLIENT COMPONENT: CALCULATOR WIDGET
// İnteraktif Bütçe Sihirbazı & B2B Lead Conversion Component
// ═══════════════════════════════════════════════════════════

import React, { useState, useTransition } from 'react';
import { submitLeadAction } from '../app/actions/leadActions';

interface ServiceOption {
  id: string;
  name: string;
  unitPrice: number;
  badgeText: string;
}

const SERVICE_OPTIONS: ServiceOption[] = [
  { id: 'multilayer', name: 'Multilayer Epoksi Kaplama', unitPrice: 240, badgeText: 'Ağır Sanayi & Forklift' },
  { id: 'self-leveling', name: 'Self-Leveling Epoksi', unitPrice: 180, badgeText: 'Pürüzsüz & Hijyenik' },
  { id: 'saha-betonu', name: 'Helikopter Perdahlı Saha Betonu', unitPrice: 320, badgeText: 'Lojistik Depo & Otopark' },
  { id: 'antistatik', name: 'Anti-Statik (ESD) Zemin', unitPrice: 410, badgeText: 'Hassas Elektronik & Tıp' }
];

export default function CalculatorWidget() {
  const [selectedService, setSelectedService] = useState<ServiceOption>(SERVICE_OPTIONS[0]);
  const [areaSquareMeters, setAreaSquareMeters] = useState<number>(500);
  const [isPending, startTransition] = useTransition();

  // Form State
  const [fullName, setFullName] = useState<string>('');
  const [phone, setPhone] = useState<string>('');
  const [city, setCity] = useState<string>('');
  const [companyName, setCompanyName] = useState<string>('');
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  // Dinamik Bütçe Hesaplama (m² x Birim Fiyat)
  const calculatedBudget = areaSquareMeters * selectedService.unitPrice;

  // Formatlandırılmış Bütçe Metni (TL)
  const formattedBudget = new Intl.NumberFormat('tr-TR', {
    style: 'decimal',
    maximumFractionDigits: 0
  }).format(calculatedBudget);

  // Form Gönderim Handler (Server Action 'use server')
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage(null);

    if (!fullName || !phone || !city) {
      setErrorMessage('Lütfen zorunlu alanları (Ad Soyad, Telefon, Şehir) doldurunuz.');
      return;
    }

    startTransition(async () => {
      const result = await submitLeadAction({
        fullName,
        phone,
        city,
        companyName,
        serviceName: selectedService.name,
        areaSquareMeters,
        calculatedBudget
      });

      if (result.success) {
        setIsSubmitted(true);
        if (result.whatsappUrl) {
          setTimeout(() => {
            window.open(result.whatsappUrl, '_blank');
          }, 400);
        }
      } else {
        setErrorMessage(result.message || 'Form kaydedilirken bir hata oluştu.');
      }
    });
  };

  return (
    <div className="w-full bg-white/95 backdrop-blur-md border border-slate-200 rounded-3xl p-6 md:p-8 shadow-2xl text-slate-900 transition-all">
      {/* Widget Üst Başlık */}
      <div className="flex items-center justify-between pb-4 mb-6 border-b border-slate-200">
        <div>
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-extrabold bg-amber-100 text-amber-800 mb-2.5">
            ⚡ Canlı m² Bütçe Motoru
          </span>
          <h3 className="text-xl md:text-2xl font-black text-slate-900 tracking-tight leading-snug">
            Bütçe Hesaplama Sihirbazı
          </h3>
        </div>
        <div className="hidden sm:block text-right">
          <span className="text-xs text-slate-500 font-semibold block">Tahmini İş Süresi</span>
          <span className="text-sm font-bold text-slate-800">3 - 5 İş Günü</span>
        </div>
      </div>

      {isSubmitted ? (
        /* Başarı Ekranı */
        <div className="py-8 text-center animate-fadeIn">
          <div className="w-16 h-16 bg-emerald-100 text-emerald-700 border border-emerald-300 rounded-full flex items-center justify-center text-3xl mx-auto mb-4">
            ✓
          </div>
          <h4 className="text-2xl font-extrabold text-slate-900 mb-2">Keşif Talebiniz Alındı!</h4>
          <p className="text-sm text-slate-600 max-w-md mx-auto mb-6">
            Sayın <strong>{fullName}</strong>, <strong>{areaSquareMeters} m²</strong> {selectedService.name} projeniz için tahmini bütçe (<strong>{formattedBudget} TL</strong>) sisteme kaydedilmiştir.
          </p>
          <button
            onClick={() => setIsSubmitted(false)}
            className="w-full bg-slate-900 text-white font-bold py-3.5 px-6 rounded-xl hover:bg-slate-800 transition-all text-sm"
          >
            Yeni Bütçe Hesapla
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Adım 1: Hizmet Seçim Izgarası */}
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-3">
              1. Uygulama Tipini Seçin
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {SERVICE_OPTIONS.map((service) => (
                <button
                  key={service.id}
                  type="button"
                  onClick={() => setSelectedService(service)}
                  className={`text-left p-3.5 rounded-2xl border-2 transition-all cursor-pointer ${
                    selectedService.id === service.id
                      ? 'border-amber-500 bg-amber-500/10 shadow-sm'
                      : 'border-slate-200 bg-slate-50 hover:border-slate-300'
                  }`}
                >
                  <div className="flex items-center justify-between mb-1">
                    <span className="font-extrabold text-sm text-slate-900">{service.name}</span>
                    <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-slate-200 text-slate-700">
                      {service.badgeText}
                    </span>
                  </div>
                  <span className="text-xs font-bold text-amber-700">
                    {service.unitPrice} TL / m²
                  </span>
                </button>
              ))}
            </div>
          </div>

          {/* Adım 2: m² Slider Control */}
          <div className="bg-slate-50 p-4 rounded-2xl border border-slate-200">
            <div className="flex items-center justify-between mb-2">
              <label className="text-xs font-bold uppercase tracking-wider text-slate-600">
                2. Toplam Alan Ölçüsü (m²)
              </label>
              <div className="flex items-center gap-2">
                <input
                  type="number"
                  min={50}
                  max={10000}
                  value={areaSquareMeters}
                  onChange={(e) => setAreaSquareMeters(Math.max(50, Number(e.target.value)))}
                  className="w-20 text-right font-black text-amber-600 bg-white border border-slate-300 rounded-lg px-2 py-1 text-sm outline-none focus:border-amber-500"
                />
                <span className="font-extrabold text-sm text-slate-700">m²</span>
              </div>
            </div>
            <input
              type="range"
              min={50}
              max={5000}
              step={50}
              value={areaSquareMeters}
              onChange={(e) => setAreaSquareMeters(Number(e.target.value))}
              className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-amber-500"
            />
          </div>

          {/* Adım 3: Bütçe Hesaplama Kartı */}
          <div className="bg-slate-950 text-white rounded-2xl p-5 flex items-center justify-between shadow-xl">
            <div>
              <span className="text-xs font-medium text-slate-400 block">Tahmini Bütçe (KDV Dahil)</span>
              <span className="text-2xl sm:text-3xl font-black text-amber-400">{formattedBudget} TL</span>
            </div>
            <div className="text-right">
              <span className="text-[11px] bg-slate-800 text-slate-300 px-3 py-1 rounded-full font-bold">
                Birim: {selectedService.unitPrice} TL/m²
              </span>
            </div>
          </div>

          {/* Adım 4: Lead Form Kilit Alanı */}
          <div className="space-y-3 pt-2">
            {errorMessage && (
              <div className="p-3 rounded-xl bg-red-50 border border-red-200 text-red-700 text-xs font-semibold">
                {errorMessage}
              </div>
            )}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <input
                type="text"
                placeholder="Adınız Soyadınız *"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                required
                className="w-full px-4 py-3 rounded-xl border border-slate-300 text-sm outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500"
              />
              <input
                type="tel"
                placeholder="Telefon (05XX) *"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                required
                className="w-full px-4 py-3 rounded-xl border border-slate-300 text-sm outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500"
              />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <input
                type="text"
                placeholder="Şehir *"
                value={city}
                onChange={(e) => setCity(e.target.value)}
                required
                className="w-full px-4 py-3 rounded-xl border border-slate-300 text-sm outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500"
              />
              <input
                type="text"
                placeholder="Şirket / Firma Adı (Opsiyonel)"
                value={companyName}
                onChange={(e) => setCompanyName(e.target.value)}
                className="w-full px-4 py-3 rounded-xl border border-slate-300 text-sm outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500"
              />
            </div>

            <button
              type="submit"
              disabled={isPending}
              className="w-full bg-amber-500 hover:bg-amber-600 text-slate-950 font-black text-base py-4 rounded-xl shadow-lg shadow-amber-500/20 transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
            >
              {isPending ? (
                <span>Kaydediliyor...</span>
              ) : (
                <>
                  <span>🚀 Ücretsiz Keşif & Teklif Talebi Gönder</span>
                </>
              )}
            </button>
          </div>
        </form>
      )}
    </div>
  );
}
