'use client';

// ═══════════════════════════════════════════════════════════
// NOVA EPOKSI ANTALYA — ENDÜSTRİYEL TEKNİK KONFİGÜRATÖR FORMU
// ═══════════════════════════════════════════════════════════

import React, { useState, useTransition } from 'react';
import { submitAntalyaLeadAction } from '../app/actions/antalyaLeadAction';

const SQUARE_METER_OPTIONS = [
  { label: '0 – 100 m²', sub: 'Küçük Depo / Atölye' },
  { label: '100 – 300 m²', sub: 'Otopark / Mağaza' },
  { label: '300 – 1.000 m²', sub: 'Fabrika Holü' },
  { label: '1.000+ m²', sub: 'Büyük Tesis / OSB' }
];

const SERVICE_TYPE_OPTIONS = [
  { name: 'Fabrika & OSB', price: '350 TL/m²' },
  { name: 'Depo & Lojistik', price: '200 TL/m²' },
  { name: 'Kapalı Otopark', price: '400 TL/m²' },
  { name: 'Ağır Forklift Zemin', price: '500 TL/m²' },
  { name: 'Otel & Ticari', price: '350 TL/m²' },
  { name: 'Antistatik ESD', price: '700 TL/m²' }
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
  const [selectedSqM, setSelectedSqM] = useState<string>(SQUARE_METER_OPTIONS[1].label);
  const [selectedService, setSelectedService] = useState<string>(SERVICE_TYPE_OPTIONS[0].name);
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
    <div className="w-full bg-white border border-gray-300 rounded p-6 sm:p-7 shadow-lg text-[#1A1C20] flex flex-col justify-between border-t-4 border-t-[#F4B400]">
      <div>
        <div className="mb-3 flex items-center justify-between border-b border-gray-200 pb-2.5">
          <span className="text-[11px] font-mono font-bold text-gray-500 uppercase tracking-wider">
            TEKNİK KEŞİF KONFİGÜRATÖRÜ
          </span>
          <span className="inline-flex items-center gap-1.5 text-[11px] font-mono font-bold text-[#2F7A4D]">
            <span className="w-2 h-2 rounded-full bg-[#2F7A4D] animate-pulse"></span>
            AKTİF MÜHENDİS HATTI
          </span>
        </div>

        <h3 className="text-xl font-black text-[#1A1C20] tracking-tight mb-1">
          Zemin Şartnamesi & Keşif Talebi
        </h3>
        <p className="text-xs text-gray-600 mb-4 leading-relaxed">
          Tesisinizin alan büyüklüğünü ve zemin türünü belirleyin, mühendislerimiz aynı gün yerinde incelesin.
        </p>

        {isSubmitted ? (
          <div className="py-8 text-center animate-fadeIn">
            <div className="w-12 h-12 bg-[#EDF7F1] text-[#2F7A4D] border border-[#2F7A4D] rounded flex items-center justify-center text-xl font-bold mx-auto mb-3 font-mono">
              ✓
            </div>
            <h4 className="text-xl font-black text-[#1A1C20] mb-1">Keşif Kaydınız Oluşturuldu</h4>
            <p className="text-xs text-gray-600 max-w-sm mx-auto mb-5">
              Teknik ekibimiz zemin analizi için en kısa sürede telefon numaranız üzerinden ulaşacaktır.
            </p>
            <button
              onClick={() => setIsSubmitted(false)}
              className="w-full bg-[#1A1C20] hover:bg-[#24262B] text-white font-bold py-3 rounded text-xs transition-colors"
            >
              Yeni Talep Oluştur
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-3.5">
            {/* 1. Tesis / Zemin Türü */}
            <div>
              <label className="block text-[11px] font-mono font-bold uppercase tracking-wider text-gray-600 mb-1.5">
                1. Tesis & Zemin Tipi
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-1.5">
                {SERVICE_TYPE_OPTIONS.map((srv) => (
                  <button
                    key={srv.name}
                    type="button"
                    onClick={() => setSelectedService(srv.name)}
                    className={`py-2 px-2.5 rounded text-left transition-all border text-xs cursor-pointer ${
                      selectedService === srv.name
                        ? 'bg-[#1A1C20] text-white border-[#1A1C20] font-bold shadow-sm'
                        : 'bg-gray-50 text-gray-700 border-gray-200 hover:border-gray-400 font-medium'
                    }`}
                  >
                    <div className="truncate">{srv.name}</div>
                  </button>
                ))}
              </div>
            </div>

            {/* 2. Metrekare Büyüklüğü */}
            <div>
              <label className="block text-[11px] font-mono font-bold uppercase tracking-wider text-gray-600 mb-1.5">
                2. Yaklaşık Metrekare (m²)
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-1.5">
                {SQUARE_METER_OPTIONS.map((sqm) => (
                  <button
                    key={sqm.label}
                    type="button"
                    onClick={() => setSelectedSqM(sqm.label)}
                    className={`py-2 px-2 rounded text-center transition-all border font-mono text-xs cursor-pointer ${
                      selectedSqM === sqm.label
                        ? 'bg-[#1A1C20] text-[#F4B400] border-[#1A1C20] font-bold shadow-sm'
                        : 'bg-gray-50 text-gray-700 border-gray-200 hover:border-gray-400'
                    }`}
                  >
                    <div className="font-bold">{sqm.label}</div>
                  </button>
                ))}
              </div>
            </div>

            {/* 3. Lokasyon */}
            <div>
              <label className="block text-[11px] font-mono font-bold uppercase tracking-wider text-gray-600 mb-1">
                3. Tesis Konumu (Antalya)
              </label>
              <select
                value={selectedLocation}
                onChange={(e) => setSelectedLocation(e.target.value)}
                className="w-full h-9 rounded border border-gray-300 px-2.5 text-xs bg-gray-50 text-gray-800 font-medium outline-none focus:border-[#1A1C20]"
              >
                {ANTALYA_LOCATIONS.map((loc) => (
                  <option key={loc} value={loc}>
                    {loc}
                  </option>
                ))}
              </select>
            </div>

            {/* DYNAMIC ESTIMATED STARTING SPEC ROW */}
            <div className="bg-[#F4F5F7] border border-gray-200 p-2.5 rounded flex items-center justify-between">
              <span className="text-[11px] font-medium text-gray-600">
                Seçilen Sistem Birim Başlangıç:
              </span>
              <span className="font-mono text-xs font-black text-[#1A1C20] bg-white px-2 py-0.5 border border-gray-300 rounded">
                {currentEstimatedPrice}
              </span>
            </div>

            {/* 4. İletişim Bilgileri */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-1">
              <div>
                <input
                  type="text"
                  placeholder="Yetkili Adı Soyadı *"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full h-10 rounded border border-gray-300 px-3 text-xs text-gray-900 bg-white placeholder:text-gray-400 outline-none focus:border-[#1A1C20]"
                  required
                />
              </div>
              <div>
                <input
                  type="tel"
                  placeholder="Telefon Numarası *"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="w-full h-10 rounded border border-gray-300 px-3 text-xs text-gray-900 bg-white placeholder:text-gray-400 outline-none focus:border-[#1A1C20]"
                  required
                />
              </div>
            </div>

            {errorMsg && (
              <div className="text-red-600 text-[11px] font-bold text-center">
                {errorMsg}
              </div>
            )}

            {/* Primary Action Button */}
            <button
              type="submit"
              disabled={isPending}
              className="w-full bg-[#F4B400] hover:bg-[#DDA200] text-[#1A1C20] font-black h-11 rounded text-xs uppercase tracking-wider transition-all shadow-md cursor-pointer flex items-center justify-center gap-2"
            >
              {isPending ? (
                <span>Kayıt Açılıyor...</span>
              ) : (
                <span>Ücretsiz Yerinde Keşif Randevusu Al →</span>
              )}
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
