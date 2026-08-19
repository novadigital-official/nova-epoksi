'use client';

// ═══════════════════════════════════════════════════════════
// NOVA EPOKSI ANTALYA — SIKÇA SORULAN TEKNİK & TİCARİ SORULAR
// ═══════════════════════════════════════════════════════════

import React, { useState } from 'react';

const FAQ_ITEMS = [
  {
    q: 'm² Fiyatına Malzeme, Astar ve İşçilik Dahil midir?',
    a: 'Evet. Belirttiğimiz tüm fiyatlar anahtar teslimdir. Lazerli nem analizi, elmas silim ile zemin hazırlığı, epoksi astar, çukur ve derz tamiratları, ara katman ve son kat yüksek mukavemetli epoksi kaplama ile işçilik fiyata eksiksiz dahildir. Süreç içerisinde sürpriz ek maliyet çıkarılmaz.'
  },
  {
    q: 'Epoksi Zemin Kaç Günde Kurur ve Tesis Ne Zaman Faaliyete Geçer?',
    a: 'Uygulama tamamlandıktan 24 saat sonra zemin hafif yaya trafiğine açılır. 48 saat sonra ise forklift, transpalet ve ağır tonajlı araç trafiğine tam mukavemetle hazır hale gelir. Tesisinizin üretim kaybını minimuma indirmek için hafta sonu veya vardiya dışı çalışma planlaması yapabilmekteyiz.'
  },
  {
    q: 'Yağlı, Çatlak veya Nemli Eski Beton Zeminlere Uygulama Yapılabilir mi?',
    a: 'Kesinlikle evet. Yağ emmiş zeminler özel yağ çözücü solüsyonlar ve elmas frezeleme ile arındırılır. Zemindeki çatlaklar ve çukurlar yüksek mukavemetli epoksi tamir harcıyla kilitlenir. Nem oranı yüksek zeminlerde ise nem bariyerli özel astar sistemi uygulanarak kabarma riski sıfıra indirilir.'
  },
  {
    q: 'Epoksi Kaplamanın Kullanım Ömrü ve Garantisi Ne Kadardır?',
    a: 'Tesisinizin maruz kalacağı mekanik yüke göre projelendirdiğimiz multilayer ve self-leveling sistemlerimizin kullanım ömrü 10 ila 15 yıldır. Tüm uygulamalarımıza çatlama, kabarma ve kalkmaya karşı resmi yazılı sözleşme garantisi veriyoruz.'
  },
  {
    q: 'Antalya OSB ve İlçelerinde Keşif ve Zemin Analizi Ücretli midir?',
    a: 'Hayır. Döşemealtı OSB, Kepez Sanayi, Muratpaşa, Konyaaltı, Aksu, Serik, Manavgat ve Alanya dahil tüm Antalya genelinde yerinde lazerli nem ölçümü, zemin sertlik testi ve metraj keşfi tamamen ÜCRETSİZDİR.'
  }
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div id="faq" className="w-full space-y-8">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto space-y-2">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-heading font-extrabold bg-amber-50 text-amber-900 border border-amber-200 uppercase tracking-wider">
          <span>❓ Merak Edilen Sorular</span>
        </div>
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-heading font-extrabold text-slate-900 tracking-tight">
          Sıkça Sorulan Teknik & Ticari Sorular
        </h2>
        <p className="text-xs sm:text-sm text-slate-500 max-w-2xl mx-auto">
          Epoksi zemin kaplama süreci, kuruma süreleri, m² maliyetleri ve garanti koşulları hakkında detaylı bilgiler.
        </p>
      </div>

      {/* Accordion List */}
      <div className="max-w-4xl mx-auto space-y-3">
        {FAQ_ITEMS.map((faq, idx) => {
          const isOpen = openIndex === idx;
          return (
            <div
              key={idx}
              className="bg-white border border-slate-200/90 rounded-2xl overflow-hidden shadow-xs transition-all"
            >
              <button
                type="button"
                onClick={() => setOpenIndex(isOpen ? null : idx)}
                className="w-full p-4 sm:p-5 text-left font-heading font-extrabold text-xs sm:text-sm text-slate-900 flex items-center justify-between gap-4 cursor-pointer hover:bg-slate-50/80 transition-colors"
              >
                <span>{faq.q}</span>
                <span className={`text-base font-mono text-amber-600 transition-transform duration-200 shrink-0 ${isOpen ? 'rotate-180' : ''}`}>
                  ▼
                </span>
              </button>

              {isOpen && (
                <div className="px-4 sm:px-5 pb-5 pt-1 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100 bg-slate-50/40">
                  {faq.a}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
