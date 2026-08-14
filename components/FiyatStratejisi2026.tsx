'use client';

// ═══════════════════════════════════════════════════════════
// NOVA EPOKSİ ANTALYA — ENDÜSTRİYEL ZEMİN SPEC MATRİSİ & FİYAT LİSTESİ
// ═══════════════════════════════════════════════════════════

import React from 'react';

const SPEC_PRICE_MATRIX = [
  {
    code: 'EPX-01',
    title: 'Epoksi Boya Kaplama (Tozuma Önleyici)',
    category: 'Depo, Lojistik, Hafif Trafik',
    thickness: '0.3 – 0.5 mm Film',
    startingPrice: '200 TL',
    unit: '/ m²',
    badge: 'Ekonomik Koruma',
    features: 'Tozumasız beton, kolay temizlenebilir, rulo uygulama'
  },
  {
    code: 'EPX-02',
    title: 'Self-Leveling Epoksi Zemin',
    category: 'Fabrika, Showroom, İlaç & Gıda',
    thickness: '2.0 – 3.0 mm Pürüzsüz',
    startingPrice: '350 TL',
    unit: '/ m²',
    badge: 'Hijyenik & Derzsiz',
    features: 'Ayna pürüzsüzlük, bakteri barındırmayan derzsiz monolitik yapı'
  },
  {
    code: 'EPX-03',
    title: 'Otopark Portakal Kabuğu / Kaymaz Kaplama',
    category: 'AVM, Site Kapalı/Açık Otoparkı',
    thickness: '1.5 – 2.5 mm Dokulu',
    startingPrice: '400 TL',
    unit: '/ m²',
    badge: 'Yüksek Sürtünme',
    features: 'Lastik sesi kesici, ıslak zeminde kaydırmaz tekstür, rampa dayanımı'
  },
  {
    code: 'EPX-04',
    title: 'Ağır Hizmet Multilayer Epoksi',
    category: 'Ağır Sanayi, Forklift Yolları, Atölye',
    thickness: '3.0 – 5.0 mm Çok Katmanlı',
    startingPrice: '500 TL',
    unit: '/ m²',
    badge: 'Ağır Tonaj / Forklift',
    features: 'Noktasal darbe dayanımı, asit ve kimyasal dökülmelere tam mukavemet'
  },
  {
    code: 'EPX-05',
    title: 'Poliüretan / Antistatik ESD Epoksi',
    category: 'Soğuk Hava, Elektronik Tesis, Laboratuvar',
    thickness: '2.0 – 4.0 mm Esnek / ESD',
    startingPrice: '700 TL',
    unit: '/ m²',
    badge: 'Özel Mühendislik',
    features: 'Statik elektrik tahliyesi, termal şok ve UV ışın dayanımı'
  }
];

export default function FiyatStratejisi2026() {
  const handleScrollToForm = () => {
    const el = document.getElementById('kesif') || document.getElementById('hesaplayici');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div id="fiyatlar" className="w-full space-y-6">
      {/* Header */}
      <div className="text-left border-b border-gray-300 pb-4">
        <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded text-[11px] font-mono font-bold bg-[#1A1C20] text-[#F4B400] mb-2 uppercase tracking-wider">
          TEKNİK ŞARTNAME & METREKARE MATRİSİ
        </div>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-[#1A1C20] tracking-tight">
          2026 Antalya Endüstriyel Epoksi Zemin Fiyat Listesi
        </h2>
        <p className="text-xs sm:text-sm text-gray-600 mt-1 max-w-3xl">
          Tüm fiyatlar m² bazında anahtar teslim başlangıç birim maliyetleridir. Saha keşfi sonrasında zemin nem durumu, çatlak tamiratı ve katman sayısına göre kesin sözleşme düzenlenir.
        </p>
      </div>

      {/* Industrial Spec Matrix Table */}
      <div className="bg-white border border-gray-300 rounded overflow-hidden shadow-sm">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-[#1A1C20] text-white text-xs font-mono uppercase tracking-wider">
                <th className="py-3.5 px-4 font-bold">Kod / Sistem</th>
                <th className="py-3.5 px-4 font-bold hidden md:table-cell">Kullanım Alanı</th>
                <th className="py-3.5 px-4 font-bold hidden lg:table-cell">Kalınlık / Katman</th>
                <th className="py-3.5 px-4 font-bold text-right sm:text-left">m² Başlangıç</th>
                <th className="py-3.5 px-4 font-bold text-right hidden sm:table-cell">İşlem</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200 text-xs">
              {SPEC_PRICE_MATRIX.map((item, idx) => (
                <tr key={idx} className="hover:bg-gray-50 transition-colors">
                  <td className="py-4 px-4 align-middle">
                    <div className="flex items-center gap-2">
                      <span className="font-mono text-[10px] bg-gray-200 text-gray-700 px-1.5 py-0.5 rounded font-bold">
                        {item.code}
                      </span>
                      <div>
                        <div className="font-extrabold text-[#1A1C20] text-sm">
                          {item.title}
                        </div>
                        <div className="text-gray-500 text-[11px] mt-0.5 md:hidden">
                          {item.category} • {item.thickness}
                        </div>
                      </div>
                    </div>
                  </td>
                  <td className="py-4 px-4 text-gray-700 font-medium hidden md:table-cell align-middle">
                    {item.category}
                  </td>
                  <td className="py-4 px-4 text-gray-600 font-mono text-[11px] hidden lg:table-cell align-middle">
                    {item.thickness}
                  </td>
                  <td className="py-4 px-4 align-middle text-right sm:text-left">
                    <span className="font-mono text-base font-black text-[#1A1C20] block">
                      {item.startingPrice}
                    </span>
                    <span className="text-[10px] text-gray-400 font-mono block">
                      {item.unit} + KDV
                    </span>
                  </td>
                  <td className="py-4 px-4 text-right align-middle hidden sm:table-cell">
                    <button
                      onClick={handleScrollToForm}
                      className="inline-flex items-center justify-center px-3.5 py-2 rounded bg-[#1A1C20] hover:bg-[#F4B400] text-white hover:text-[#1A1C20] font-bold text-xs transition-colors cursor-pointer whitespace-nowrap"
                    >
                      Keşif İste ↗
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* B2B Engineering Callout */}
      <div className="bg-[#1A1C20] text-white rounded p-5 sm:p-6 flex flex-col md:flex-row items-center justify-between gap-4 border-l-4 border-[#F4B400]">
        <div>
          <h3 className="text-base sm:text-lg font-bold text-white tracking-tight">
            500 m² ve Üzeri Endüstriyel Saha Projeleri İçin Yerinde Numune Keşfi
          </h3>
          <p className="text-xs text-gray-300 mt-1">
            Antalya OSB ve çevre ilçelerdeki fabrika zeminleriniz için lazerli nem ölçümü ve mukavemet testi ücretsiz yapılır.
          </p>
        </div>
        <a
          href="https://wa.me/905070871789?text=Merhaba,%20Antalya%20OSB%20fabrika%20epoksi%20zemin%20keşfi%20talep%20ediyorum."
          target="_blank"
          rel="noopener noreferrer"
          className="bg-[#F4B400] hover:bg-[#DDA200] text-[#1A1C20] font-black px-6 py-3 rounded text-xs whitespace-nowrap transition-all shadow-md flex items-center gap-2 flex-shrink-0"
        >
          <span>Mühendis ile WhatsApp'tan Görüş</span>
        </a>
      </div>
    </div>
  );
}
