import Navbar from '../components/Navbar';
import LeadWizard from '../components/LeadWizard';
import BeforeAfterSlider from '../components/BeforeAfterSlider';
import TrustBadges from '../components/TrustBadges';
import TeklifHesaplayici from '../components/TeklifHesaplayici';
import EpoksiTeknikSurec from '../components/EpoksiTeknikSurec';
import BitirdigimizIsler from '../components/BitirdigimizIsler';
import FiyatStratejisi2026 from '../components/FiyatStratejisi2026';
import FAQSection from '../components/FAQSection';
import FloatingActionWidget from '../components/FloatingActionWidget';

export default function AntalyaEpoksiMasterSalesPage() {
  return (
    <main className="min-h-screen bg-[#F8FAFC] text-slate-900 font-sans selection:bg-amber-500 selection:text-slate-950 relative overflow-x-hidden w-full max-w-full">
      
      {/* 1. KURUMSAL ÜST BİLGİLENDİRME BARI */}
      <div className="bg-[#0B1120] text-slate-300 py-2 px-4 text-xs font-mono border-b border-slate-800">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-4 flex-wrap">
          <div className="flex items-center gap-2">
            <span className="text-amber-400 font-bold">ANTALYA GENELİ:</span>
            <span>Organize Sanayi, Fabrika ve Ticari Tesisler İçin Zemin Mühendisliği</span>
          </div>
          <div className="hidden sm:flex items-center gap-4 text-slate-400">
            <span>ISO 9001 & CE Sertifikalı</span>
            <span>•</span>
            <span>10 Yıl Sistem Garantisi</span>
            <span>•</span>
            <span className="text-slate-200 font-bold">📞 0507 087 17 89</span>
          </div>
        </div>
      </div>

      {/* 2. INDUSTRIAL NAVBAR */}
      <Navbar />

      {/* 3. HERO SECTION — PRESTİJLİ & KURUMSAL B2B GİRİŞ ALANI */}
      <section id="kesif" className="pt-20 sm:pt-24 pb-12 sm:pb-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          <div className="lg:col-span-7 space-y-6">
            
            {/* AUTHORITY TAG */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white border border-slate-200 text-xs font-bold text-slate-700 shadow-2xs">
              <span className="w-2 h-2 rounded-full bg-amber-500" />
              <span>Antalya Endüstriyel Zemin Sistemleri</span>
            </div>
            
            {/* MASSIVE IMPACTFUL H1 HEADLINE */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-heading font-extrabold text-slate-900 leading-[1.12] tracking-tight">
              Fabrika, Depo ve Tesisler İçin <span className="text-amber-500">Yüksek Mukavemetli</span> Epoksi Zemin Çözümleri
            </h1>
            
            {/* SUBTITLE */}
            <p className="text-slate-600 text-sm sm:text-base md:text-lg font-normal leading-relaxed max-w-2xl">
              Antalya OSB ve ticari işletmeler için lazerli nem analizi, elmas silim zemin hazırlığı ve ağır forklift dayanımlı çok katmanlı epoksi uygulamaları. <strong className="text-slate-900 font-bold">200 TL/m²'den başlayan sözleşmeli fiyatlar.</strong>
            </p>

            {/* 4 SPECIFICATION CARDS (2x2 GRID) */}
            <div className="grid grid-cols-2 gap-3 text-xs sm:text-sm font-bold text-slate-800">
              <div className="flex items-center gap-2.5 bg-white border border-slate-200/90 p-3.5 rounded-2xl shadow-xs">
                <span className="text-amber-600 font-bold text-sm">✓</span>
                <span className="truncate">Lazerli Nem Analizi</span>
              </div>
              <div className="flex items-center gap-2.5 bg-white border border-slate-200/90 p-3.5 rounded-2xl shadow-xs">
                <span className="text-amber-600 font-bold text-sm">✓</span>
                <span className="truncate">10 Yıl Mukavemet</span>
              </div>
              <div className="flex items-center gap-2.5 bg-white border border-slate-200/90 p-3.5 rounded-2xl shadow-xs">
                <span className="text-amber-600 font-bold text-sm">✓</span>
                <span className="truncate">Forklift & Asit Direnci</span>
              </div>
              <div className="flex items-center gap-2.5 bg-white border border-slate-200/90 p-3.5 rounded-2xl shadow-xs">
                <span className="text-amber-600 font-bold text-sm">✓</span>
                <span className="truncate">Sabit Fiyat Sözleşmesi</span>
              </div>
            </div>

            {/* HERO CTA BUTTONS */}
            <div className="flex flex-col sm:flex-row gap-3 pt-1">
              <a
                href="https://wa.me/905070871789?text=Merhaba,%20Antalya%20epoksi%20zemin%20şartnamesi%20ve%20ücretsiz%20keşif%20istiyorum."
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-slate-950 font-heading font-black px-7 py-3.5 min-h-[50px] rounded-2xl text-xs sm:text-sm uppercase tracking-wider flex items-center justify-center gap-2 shadow-lg shadow-amber-500/25 cursor-pointer transition-all hover:scale-102 active:scale-98"
              >
                <span>⚡ WhatsApp ile Ücretsiz Keşif Al</span>
              </a>
              <a
                href="tel:05070871789"
                className="bg-slate-900 hover:bg-slate-800 text-white font-heading font-extrabold px-6 py-3.5 min-h-[50px] rounded-2xl text-xs sm:text-sm uppercase tracking-wider flex items-center justify-center gap-2 transition-all shadow-md"
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
      <section className="py-6 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-5">
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

      {/* 5. TAMAMLANAN SAHA PROJELERİ & REFERANSLAR (TEK VE ZENGİN GALERİ BÖLÜMÜ) */}
      <section id="isler" className="py-12 sm:py-16 bg-white border-y border-slate-200/90">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <BitirdigimizIsler />
        </div>
      </section>

      {/* 6. ÖNCE / SONRA CANLI DÖNÜŞÜM SÜRGÜSÜ */}
      <section className="py-12 sm:py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <BeforeAfterSlider />
      </section>

      {/* 7. 2026 ANTALYA ENDÜSTRİYEL SPEC VE FİYAT MATRİSİ */}
      <section id="fiyatlar" className="py-12 sm:py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-t border-slate-200/90">
        <FiyatStratejisi2026 />
      </section>

      {/* 8. BİZ VS STANDART USTALAR (GÜVEN VE KARŞILAŞTIRMA MATRİSİ) */}
      <section className="py-12 sm:py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-t border-slate-200/90">
        <div className="text-center max-w-3xl mx-auto space-y-2 mb-8 sm:mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-heading font-extrabold bg-amber-50 text-amber-900 border border-amber-200 uppercase tracking-wider">
            <span>🛡️ Mühendislik Farkımız</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-heading font-extrabold text-slate-900 tracking-tight">
            Neden Nova Epoksi? (Kalite & Güvence Standartları)
          </h2>
          <p className="text-xs sm:text-sm text-slate-500 max-w-2xl mx-auto">
            Geleneksel taşeronların aksine yazılı sözleşme garantisi, lazerli nem ölçümü ve standart şartname sunuyoruz.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 max-w-5xl mx-auto">
          <div className="bg-white border-2 border-slate-900 p-6 sm:p-7 rounded-3xl shadow-xs space-y-4">
            <div className="flex items-center gap-2 text-slate-900 font-heading font-extrabold text-sm sm:text-base uppercase">
              <span className="text-amber-500 font-bold">✓</span> NOVA EPOKSİ SİSTEMLERİ
            </div>
            <ul className="space-y-3 text-xs sm:text-sm font-medium text-slate-700">
              <li className="flex items-start gap-2.5">
                <span className="text-amber-600 font-bold shrink-0">✓</span>
                <span>Lazerli nem ölçümü ve elmas silim ile zemin hazırlığı (Kabarma riski %0)</span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="text-amber-600 font-bold shrink-0">✓</span>
                <span>Yazılı sabit fiyat sözleşmesi (Süreçte sürpriz ek ücret talep edilmez)</span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="text-amber-600 font-bold shrink-0">✓</span>
                <span>ISO & CE belgeli solventli/solventsiz saf epoksi kimyasalları</span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="text-amber-600 font-bold shrink-0">✓</span>
                <span>10 yıl sistem mukavemeti ve yazılı firma garantisi</span>
              </li>
            </ul>
          </div>

          <div className="bg-slate-50 border border-slate-200 p-6 sm:p-7 rounded-3xl text-slate-500 space-y-4">
            <div className="flex items-center gap-2 text-slate-600 font-heading font-bold text-sm sm:text-base uppercase">
              <span>✕</span> Standart Serbest Ustalar
            </div>
            <ul className="space-y-3 text-xs sm:text-sm font-medium text-slate-500">
              <li className="flex items-start gap-2.5">
                <span className="text-slate-400 font-bold shrink-0">✕</span>
                <span>Nem ölçümü yapmadan uygulama (1 yıl içinde kabarma ve çatlama)</span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="text-slate-400 font-bold shrink-0">✕</span>
                <span>İş ortasında "astar yetmedi, metrekare fazla çıktı" ek masrafları</span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="text-slate-400 font-bold shrink-0">✕</span>
                <span>Tinerle inceltilmiş ucuz boya benzeri kimyasal kullanımı</span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="text-slate-400 font-bold shrink-0">✕</span>
                <span>İş bitince telefonlara çıkmama, garantisiz teslimat</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* 9. TEKNİK UYGULAMA SÜRECİ */}
      <section id="hizmetler" className="py-12 sm:py-16 bg-white border-t border-slate-200/90">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <EpoksiTeknikSurec />
        </div>
      </section>

      {/* 10. İNTERAKTİF HESAPLAMA MOTORU */}
      <section id="hesaplayici" className="py-12 sm:py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-t border-slate-200/90">
        <TeklifHesaplayici />
      </section>

      {/* 11. GERÇEK MÜŞTERİ DEĞERLENDİRMELERİ */}
      <section className="py-12 sm:py-16 bg-white border-t border-slate-200/90">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <div className="text-center max-w-3xl mx-auto space-y-2">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-heading font-extrabold bg-amber-50 text-amber-900 border border-amber-200 uppercase tracking-wider">
              <span>💬 Doğrulanmış Referanslar</span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-heading font-extrabold text-slate-900 tracking-tight">
              Saha Müşterilerimizin Yorumları
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 max-w-6xl mx-auto">
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

      {/* 12. SIKÇA SORULAN SORULAR (FAQ) */}
      <section className="py-12 sm:py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-t border-slate-200/90">
        <FAQSection />
      </section>

      {/* 13. SERTİFİKA VE GÜVEN ROZETLERİ */}
      <section className="py-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-t border-slate-200/90">
        <TrustBadges />
      </section>

      {/* 14. UNIFIED FLOATING ACTION WIDGET */}
      <FloatingActionWidget />

      {/* 15. FOOTER */}
      <footer className="bg-[#0B1120] text-slate-400 py-10 sm:py-12 text-xs border-t border-slate-800 w-full">
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
