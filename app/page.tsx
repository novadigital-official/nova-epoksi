import Navbar from '../components/Navbar';
import LeadWizard from '../components/LeadWizard';
import BeforeAfterSlider from '../components/BeforeAfterSlider';
import TrustBadges from '../components/TrustBadges';
import TeklifHesaplayici from '../components/TeklifHesaplayici';
import EpoksiTeknikSurec from '../components/EpoksiTeknikSurec';
import CorporateReferences from '../components/CorporateReferences';
import BitirdigimizIsler from '../components/BitirdigimizIsler';
import FiyatStratejisi2026 from '../components/FiyatStratejisi2026';
import FloatingActionWidget from '../components/FloatingActionWidget';

export default function AntalyaEpoksiMasterSalesPage() {
  return (
    <main className="min-h-screen bg-[#F8FAFC] text-[#0F172A] font-sans selection:bg-[#F59E0B] selection:text-[#0F172A] relative pb-16 md:pb-0 overflow-x-hidden">
      
      {/* 1. SCARCITY & URGENCY TOP BAR */}
      <div className="bg-[#0B1120] text-slate-200 py-2 px-4 text-center text-xs font-mono border-b border-slate-800">
        <div className="max-w-7xl mx-auto flex items-center justify-center gap-2 flex-wrap">
          <span className="inline-block w-2 h-2 rounded-full bg-amber-400 animate-ping" />
          <span className="text-amber-400 font-bold">BU HAFTA ANTALYA KONTENJANI:</span>
          <span className="font-medium text-slate-300">Son 3 Ücretsiz Lazerli Keşif Randevusu • Sabit m² Sözleşmesi</span>
        </div>
      </div>

      {/* 2. INDUSTRIAL NAVBAR */}
      <Navbar />

      {/* 3. HERO SECTION — ABOVE THE FOLD 3-SANİYE DÖNÜŞÜM ALANI */}
      <section id="kesif" className="pt-24 sm:pt-28 pb-12 sm:pb-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          <div className="lg:col-span-7 space-y-6">
            
            {/* SOCIAL PROOF PILL */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-slate-200 text-xs font-bold shadow-2xs max-w-full">
              <span className="text-amber-500 font-black">★ 4.9 / 5.0</span>
              <span className="text-slate-300">•</span>
              <span className="text-slate-900 font-extrabold whitespace-nowrap">500+ Saha Projesi</span>
              <span className="text-slate-300">•</span>
              <span className="text-slate-600 font-bold whitespace-nowrap">10 Yıl Sistem Garantisi</span>
            </div>
            
            {/* MASSIVE IMPACTFUL H1 HEADLINE */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-heading font-extrabold text-slate-900 leading-[1.12] tracking-tight">
              Fabrika, Depo ve Tesisler İçin <span className="text-amber-500">Yüksek Mukavemetli</span> Epoksi Zemin Sistemleri
            </h1>
            
            {/* SUBTITLE */}
            <p className="text-slate-600 text-sm sm:text-base md:text-lg font-normal leading-relaxed max-w-2xl">
              Antalya OSB ve ticari tesisler için lazerli nem analizi, elmas silim zemin hazırlığı ve ağır forklift dayanımlı çok katmanlı epoksi uygulamaları. <strong className="text-slate-900 font-bold">200 TL/m²'den başlayan sözleşmeli fiyatlar.</strong>
            </p>

            {/* 4 SPECIFICATION CARDS (2x2 GRID) */}
            <div className="grid grid-cols-2 gap-3 text-xs sm:text-sm font-bold text-slate-800">
              <div className="flex items-center gap-2.5 bg-white border border-slate-200/90 p-3.5 rounded-2xl shadow-xs">
                <span className="w-5 h-5 rounded-lg bg-emerald-50 text-emerald-700 flex items-center justify-center font-black text-xs shrink-0">✓</span>
                <span className="truncate">Lazerli Nem Analizi</span>
              </div>
              <div className="flex items-center gap-2.5 bg-white border border-slate-200/90 p-3.5 rounded-2xl shadow-xs">
                <span className="w-5 h-5 rounded-lg bg-emerald-50 text-emerald-700 flex items-center justify-center font-black text-xs shrink-0">✓</span>
                <span className="truncate">10 Yıl Mukavemet</span>
              </div>
              <div className="flex items-center gap-2.5 bg-white border border-slate-200/90 p-3.5 rounded-2xl shadow-xs">
                <span className="w-5 h-5 rounded-lg bg-emerald-50 text-emerald-700 flex items-center justify-center font-black text-xs shrink-0">✓</span>
                <span className="truncate">Forklift & Asit Direnci</span>
              </div>
              <div className="flex items-center gap-2.5 bg-white border border-slate-200/90 p-3.5 rounded-2xl shadow-xs">
                <span className="w-5 h-5 rounded-lg bg-emerald-50 text-emerald-700 flex items-center justify-center font-black text-xs shrink-0">✓</span>
                <span className="truncate">Sabit Fiyat Sözleşmesi</span>
              </div>
            </div>

            {/* HERO CTA BUTTONS */}
            <div className="flex flex-col sm:flex-row gap-3 pt-2">
              <a
                href="https://wa.me/905070871789?text=Merhaba,%20Antalya%20epoksi%20zemin%20şartnamesi%20ve%20ücretsiz%20keşif%20istiyorum."
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-slate-950 font-heading font-black px-7 py-4 min-h-[52px] rounded-2xl text-xs sm:text-sm uppercase tracking-wider flex items-center justify-center gap-2 shadow-lg shadow-amber-500/25 cursor-pointer transition-all hover:scale-102 active:scale-98"
              >
                <span>⚡ WhatsApp ile Ücretsiz Keşif Al</span>
              </a>
              <a
                href="tel:05070871789"
                className="bg-slate-900 hover:bg-slate-800 text-white font-heading font-extrabold px-6 py-4 min-h-[52px] rounded-2xl text-xs sm:text-sm uppercase tracking-wider flex items-center justify-center gap-2 transition-all shadow-md"
              >
                <span>📞 0507 087 17 89</span>
              </a>
            </div>

          </div>

          {/* RIGHT: MODERN 3-STEP LEAD WIZARD */}
          <div className="lg:col-span-5">
            <LeadWizard defaultSource="GOOGLE_ADS" />
          </div>

        </div>
      </section>

      {/* 4. 3-KOLONLU ENDÜSTRİYEL DASHBOARD METRİK BLOĞU */}
      <section className="py-8 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
          <div className="metric-dash-card">
            <div className="font-mono text-3xl sm:text-4xl font-black text-slate-900 mb-1">
              50+
            </div>
            <div className="text-xs font-heading font-extrabold text-slate-900 uppercase tracking-wider">
              Tamamlanan Endüstriyel Tesis
            </div>
            <div className="text-xs text-slate-500 font-normal mt-1">
              Döşemealtı OSB, Kepez & Muratpaşa Sahası
            </div>
          </div>

          <div className="metric-dash-card">
            <div className="font-mono text-3xl sm:text-4xl font-black text-slate-900 mb-1">
              15.000+ <span className="text-base font-bold text-slate-400">m²</span>
            </div>
            <div className="text-xs font-heading font-extrabold text-slate-900 uppercase tracking-wider">
              Toplam Kaplanan Saha Betonu
            </div>
            <div className="text-xs text-slate-500 font-normal mt-1">
              Ağır sanayi, lojistik depo ve otoparklar
            </div>
          </div>

          <div className="metric-dash-card">
            <div className="font-mono text-3xl sm:text-4xl font-black text-slate-900 mb-1">
              %98.4
            </div>
            <div className="text-xs font-heading font-extrabold text-slate-900 uppercase tracking-wider">
              Şartnameye Uygunluk Oranı
            </div>
            <div className="text-xs text-slate-500 font-normal mt-1">
              Sözleşmeli metrekare ve teslim garantisi
            </div>
          </div>
        </div>
      </section>

      {/* 5. SEKTÖREL KULLANIM ALANLARI (FOTOĞRAFLI KARTLAR) */}
      <section className="py-16 bg-white border-y border-slate-200/90">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <CorporateReferences />
        </div>
      </section>

      {/* 6. 2026 ANTALYA ENDÜSTRİYEL SPEC VE FİYAT MATRİSİ */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FiyatStratejisi2026 />
      </section>

      {/* 7. MID-PAGE GERİLLA DÖNÜŞÜM KUTUSU */}
      <section className="py-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-br from-[#0B1120] via-[#0F172A] to-[#1E293B] text-white rounded-3xl p-7 sm:p-10 border border-amber-500/30 shadow-2xl flex flex-col md:flex-row items-center justify-between gap-6 relative overflow-hidden">
          <div className="space-y-2 relative z-10">
            <span className="inline-block px-3 py-1 rounded-full bg-amber-400 text-slate-950 font-heading text-xs font-black uppercase tracking-wider">
              ⚡ 15 Dakikada Hızlı Zemin Analizi
            </span>
            <h3 className="text-2xl sm:text-3xl font-heading font-extrabold text-white">
              Hangi Epoksi Sisteminin Uygun Olduğundan Emin Değil misiniz?
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 max-w-2xl font-normal leading-relaxed">
              Zemininizin mevcut durumunu WhatsApp'tan fotoğraf olarak gönderin; mühendislerimiz kullanım amacınıza göre en ekonomik ve dayanıklı sistemi anında belirlesin.
            </p>
          </div>
          <a
            href="https://wa.me/905070871789?text=Merhaba,%20zeminimin%20fotoğrafını%20iletiyorum.%20En%20uygun%20epoksi%20sistemi%20ve%20fiyat%20analizi%20yapabilir%20misiniz?"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-500 hover:to-amber-600 text-slate-950 font-heading font-black px-8 py-4 rounded-2xl text-xs sm:text-sm whitespace-nowrap shadow-xl shadow-amber-500/20 flex items-center gap-2 shrink-0 transition-all hover:scale-102 active:scale-98 relative z-10 cursor-pointer"
          >
            <span>📸 Fotoğraf Gönder & Analiz İste</span>
          </a>
        </div>
      </section>

      {/* 8. BİZ VS STANDART USTALAR (GÜVEN VE KARŞILAŞTIRMA MATRİSİ) */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-t border-slate-200/90">
        <div className="text-center max-w-3xl mx-auto space-y-2 mb-10">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-heading font-extrabold bg-amber-50 text-amber-900 border border-amber-200 uppercase tracking-wider">
            <span>🛡️ Kalite & Güvence Standartları</span>
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-heading font-extrabold text-slate-900 tracking-tight">
            Neden Nova Epoksi? (Mühendislik Farkımız)
          </h2>
          <p className="text-xs sm:text-sm text-slate-500 max-w-2xl mx-auto">
            Geleneksel taşeronların aksine yazılı garanti, nem ölçümü ve standart şartname sunuyoruz.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          <div className="bg-white border-2 border-emerald-500/60 p-6 sm:p-7 rounded-3xl shadow-xs space-y-4">
            <div className="flex items-center gap-2 text-emerald-800 font-heading font-extrabold text-sm sm:text-base uppercase">
              <span>✓</span> NOVA EPOKSİ SİSTEMLERİ
            </div>
            <ul className="space-y-3 text-xs sm:text-sm font-medium text-slate-700">
              <li className="flex items-start gap-2.5">
                <span className="text-emerald-600 font-bold shrink-0">✓</span>
                <span>Lazerli nem ölçümü ve elmas silim ile zemin hazırlığı (Kabarma riski %0)</span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="text-emerald-600 font-bold shrink-0">✓</span>
                <span>Yazılı sabit fiyat sözleşmesi (Süreçte sürpriz ek ücret talep edilmez)</span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="text-emerald-600 font-bold shrink-0">✓</span>
                <span>ISO & CE belgeli solventli/solventsiz saf epoksi kimyasalları</span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="text-emerald-600 font-bold shrink-0">✓</span>
                <span>10 yıl sistem mukavemeti ve yazılı firma garantisi</span>
              </li>
            </ul>
          </div>

          <div className="bg-slate-50 border border-slate-200 p-6 sm:p-7 rounded-3xl text-slate-500 space-y-4">
            <div className="flex items-center gap-2 text-slate-700 font-heading font-bold text-sm sm:text-base uppercase">
              <span>✕</span> Standart Serbest Ustalar
            </div>
            <ul className="space-y-3 text-xs sm:text-sm font-medium text-slate-500">
              <li className="flex items-start gap-2.5">
                <span className="text-red-400 font-bold shrink-0">✕</span>
                <span>Nem ölçümü yapmadan uygulama (1 yıl içinde kabarma ve çatlama)</span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="text-red-400 font-bold shrink-0">✕</span>
                <span>İş ortasında "astar yetmedi, metrekare fazla çıktı" ek masrafları</span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="text-red-400 font-bold shrink-0">✕</span>
                <span>Tinerle inceltilmiş ucuz boya benzeri kimyasal kullanımı</span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="text-red-400 font-bold shrink-0">✕</span>
                <span>İş bitince telefonlara çıkmama, garantisiz teslimat</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* 9. GERÇEK MÜŞTERİ DEĞERLENDİRMELERİ */}
      <section className="py-16 bg-white border-t border-slate-200/90">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          <div className="text-center max-w-3xl mx-auto space-y-2">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-heading font-extrabold bg-amber-50 text-amber-900 border border-amber-200 uppercase tracking-wider">
              <span>💬 Doğrulanmış Referanslar</span>
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-heading font-extrabold text-slate-900 tracking-tight">
              Saha Müşterilerimizin Yorumları
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            <div className="bg-slate-50 border border-slate-200 p-6 rounded-3xl space-y-3">
              <div className="text-amber-500 font-bold text-xs">★★★★★ 5.0</div>
              <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-normal">
                "Döşemealtı OSB'deki 3.500 m² depomuzun zeminini 4 günde teslim ettiler. Forklift trafiğinde tek bir çizik dahi oluşmadı. Sözleşmeli ve çok temiz çalıştılar."
              </p>
              <div className="pt-2 border-t border-slate-200/80">
                <div className="font-heading font-extrabold text-xs text-slate-900">Mustafa K.</div>
                <div className="text-[11px] text-slate-500 font-mono">Döşemealtı OSB — Lojistik Müdürü</div>
              </div>
            </div>

            <div className="bg-slate-50 border border-slate-200 p-6 rounded-3xl space-y-3">
              <div className="text-amber-500 font-bold text-xs">★★★★★ 5.0</div>
              <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-normal">
                "Oto servisimiz için kimyasala ve yağa dayanıklı multilayer epoksi yaptırdık. Akşam dökülen hidrolik sabah iz bırakmadan siliniyor. Harika işçilik."
              </p>
              <div className="pt-2 border-t border-slate-200/80">
                <div className="font-heading font-extrabold text-xs text-slate-900">Serkan Y.</div>
                <div className="text-[11px] text-slate-500 font-mono">Kepez Sanayi — Servis Sahibi</div>
              </div>
            </div>

            <div className="bg-slate-50 border border-slate-200 p-6 rounded-3xl space-y-3">
              <div className="text-amber-500 font-bold text-xs">★★★★★ 5.0</div>
              <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-normal">
                "Lara'daki otel lobimiz için metalik epoksi tercih ettik. Mermerden çok daha dayanıklı ve lüks durdu. Keşif ve uygulama ekibi çok titizdi."
              </p>
              <div className="pt-2 border-t border-slate-200/80">
                <div className="font-heading font-extrabold text-xs text-slate-900">Engin B.</div>
                <div className="text-[11px] text-slate-500 font-mono">Muratpaşa / Lara — Tesis Müdürü</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 10. TAMAMLANAN UYGULAMA ÖRNEKLERİ */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-t border-slate-200/90">
        <BitirdigimizIsler />
      </section>

      {/* 11. TEKNİK UYGULAMA SÜRECİ */}
      <section id="hizmetler" className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-t border-slate-200/90">
        <EpoksiTeknikSurec />
      </section>

      {/* 12. ÖNCE / SONRA DÖNÜŞÜM SÜRGÜSÜ */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-t border-slate-200/90">
        <BeforeAfterSlider />
      </section>

      {/* 13. İNTERAKTİF HESAPLAMA MOTORU */}
      <section id="hesaplayici" className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-t border-slate-200/90">
        <TeklifHesaplayici />
      </section>

      {/* 14. SERTİFİKA VE GÜVEN ROZETLERİ */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-t border-slate-200/90">
        <TrustBadges />
      </section>

      {/* 15. UNIFIED FLOATING ACTION WIDGET (WHATSAPP + PHONE BUTTONS STACKED CLEANLY ON RIGHT) */}
      <FloatingActionWidget />

      {/* FOOTER */}
      <footer className="bg-[#0B1120] text-slate-400 py-12 text-xs border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 border-b border-slate-800 pb-6">
            <div>
              <div className="font-heading font-extrabold text-base sm:text-lg text-white mb-1">
                ANTALYA NOVA EPOKSİ ZEMİN SİSTEMLERİ
              </div>
              <p className="text-slate-400 text-xs font-normal">
                Antalya OSB, Fabrika, Depo ve Otopark Zemin Mühendisliği — Tel: 0507 087 17 89
              </p>
            </div>
            <div className="flex gap-3">
              <a
                href="https://wa.me/905070871789"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-amber-500 hover:bg-amber-600 text-slate-950 font-heading font-black px-4 py-2.5 rounded-xl text-xs transition-all shadow-md"
              >
                Mühendis WhatsApp
              </a>
            </div>
          </div>
          
          <div className="flex flex-wrap justify-center md:justify-start gap-4 font-bold text-slate-300 text-xs">
            <a href="/blog" className="hover:text-amber-400 transition-colors">Blog & Fiyat Rehberi</a>
            <a href="/antalya-fabrika-epoksi-teklif" className="hover:text-amber-400 transition-colors">Fabrika Zemin Şartnamesi</a>
            <a href="/self-leveling-epoksi" className="hover:text-amber-400 transition-colors">Self Leveling Epoksi</a>
            <a href="/dosemealti-epoksi" className="hover:text-amber-400 transition-colors">Döşemealtı OSB Hizmetleri</a>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-between text-[11px] text-slate-500 font-mono gap-3 pt-4 border-t border-slate-900">
            <span>© 2026 Antalya Nova Epoksi Zemin Çözümleri. Tüm Hakları Saklıdır. | Nova Digital İştiraki</span>
            <div className="flex gap-4">
              <span>Gizlilik Politikası</span>
              <span>KVKK Aydınlatma Metni</span>
              <span>Çerez Politikası</span>
              <a href="/admin/dashboard" className="text-slate-400 hover:text-slate-200 font-bold">
                Yönetici Paneli
              </a>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}
