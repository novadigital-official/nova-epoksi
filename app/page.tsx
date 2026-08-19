import Navbar from '../components/Navbar';
import LeadWizard from '../components/LeadWizard';
import BeforeAfterSlider from '../components/BeforeAfterSlider';
import TrustBadges from '../components/TrustBadges';
import TeklifHesaplayici from '../components/TeklifHesaplayici';
import EpoksiTeknikSurec from '../components/EpoksiTeknikSurec';
import CorporateReferences from '../components/CorporateReferences';
import WhatsAppBotWidget from '../components/WhatsAppBotWidget';
import BitirdigimizIsler from '../components/BitirdigimizIsler';
import FiyatStratejisi2026 from '../components/FiyatStratejisi2026';
import MobileStickyBar from '../components/MobileStickyBar';

export default function AntalyaEpoksiMasterSalesPage() {
  return (
    <main className="min-h-screen bg-[#F8FAFC] text-[#0F172A] font-sans selection:bg-[#F59E0B] selection:text-[#0F172A] relative pb-12 md:pb-0">
      {/* 1. SCARCITY & URGENCY TOP BAR */}
      <div className="bg-[#111827] text-white py-1.5 px-3 text-center text-xs font-mono border-b border-gray-800">
        <div className="max-w-7xl mx-auto flex items-center justify-center gap-1.5 flex-wrap">
          <span className="inline-block w-2 h-2 rounded-full bg-[#F59E0B] animate-ping" />
          <span className="text-[#F59E0B] font-bold">BU HAFTA ANTALYA KONTENJANI:</span>
          <span className="font-semibold">Son 3 Keşif Randevusu • Sabit m² Fiyatı</span>
        </div>
      </div>

      {/* 2. INDUSTRIAL NAVBAR */}
      <Navbar />

      {/* 3. HERO SECTION — ABOVE THE FOLD 3-SANİYE DÖNÜŞÜM ALANI */}
      <section id="kesif" className="pt-24 pb-8 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-7">
            {/* COMPACT SINGLE-LINE SOCIAL PROOF PILL */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-gray-300 text-xs font-bold shadow-sm mb-3.5 max-w-full">
              <span className="text-[#F59E0B] font-black">★ 4.9/5.0</span>
              <span className="text-gray-300">•</span>
              <span className="text-[#111827] font-bold whitespace-nowrap">500+ Saha Projesi</span>
              <span className="text-gray-300">•</span>
              <span className="text-gray-700 font-bold whitespace-nowrap">10 Yıl Garanti</span>
            </div>
            
            <h1 className="text-3xl sm:text-5xl font-extrabold text-[#111827] leading-tight mb-4 tracking-tight">
              Fabrika, Depo ve Tesisler İçin <span className="text-[#D97706]">Yüksek Mukavemetli</span> Epoksi Zemin Çözümleri
            </h1>
            
            <p className="text-gray-800 text-base sm:text-lg mb-5 font-semibold leading-relaxed max-w-2xl">
              Antalya OSB ve ticari işletmeler için lazerli nem analizi, elmas silim zemin hazırlığı ve ağır tonaj dayanımlı çok katmanlı epoksi uygulamaları. <strong className="text-[#111827]">200 TL/m²'den başlayan anahtar teslim fiyatlar.</strong>
            </p>

            {/* 4 Sade Endüstriyel Şartname Kutusu (Kompakt 2x2 Grid) */}
            <div className="grid grid-cols-2 gap-2.5 mb-6 text-xs sm:text-sm font-bold text-[#111827]">
              <div className="flex items-center gap-2.5 bg-white border border-gray-300 p-3 rounded-lg shadow-sm">
                <span className="w-5 h-5 rounded bg-[#DCFCE7] text-[#15803D] flex items-center justify-center font-black text-xs flex-shrink-0">✓</span>
                <span className="truncate">Lazerli Nem Analizi</span>
              </div>
              <div className="flex items-center gap-2.5 bg-white border border-gray-300 p-3 rounded-lg shadow-sm">
                <span className="w-5 h-5 rounded bg-[#DCFCE7] text-[#15803D] flex items-center justify-center font-black text-xs flex-shrink-0">✓</span>
                <span className="truncate">10 Yıl Mukavemet</span>
              </div>
              <div className="flex items-center gap-2.5 bg-white border border-gray-300 p-3 rounded-lg shadow-sm">
                <span className="w-5 h-5 rounded bg-[#DCFCE7] text-[#15803D] flex items-center justify-center font-black text-xs flex-shrink-0">✓</span>
                <span className="truncate">Forklift & Asit Dayanımı</span>
              </div>
              <div className="flex items-center gap-2.5 bg-white border border-gray-300 p-3 rounded-lg shadow-sm">
                <span className="w-5 h-5 rounded bg-[#DCFCE7] text-[#15803D] flex items-center justify-center font-black text-xs flex-shrink-0">✓</span>
                <span className="truncate">Sabit Fiyat Sözleşmesi</span>
              </div>
            </div>

            {/* NET GÖRSEL HİYERARŞİ: 1. BASKIN SARI WHATSAPP (PULSE) + 2. KOYU ŞARTNAME BUTONU */}
            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href="https://wa.me/905070871789?text=Merhaba,%20Antalya%20epoksi%20zemin%20şartnamesi%20ve%20keşif%20istiyorum."
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#F59E0B] hover:bg-[#D97706] text-[#111827] font-black px-6 py-4 min-h-[50px] rounded-lg text-sm uppercase tracking-wider flex items-center justify-center gap-2 shadow-lg cursor-pointer transition-transform active:scale-95"
              >
                <span>⚡ WhatsApp ile Ücretsiz Keşif Al</span>
              </a>
              <a
                href="tel:05070871789"
                className="bg-[#111827] hover:bg-[#1F2937] text-white border-2 border-[#111827] font-extrabold px-6 py-4 min-h-[50px] rounded-lg text-sm uppercase tracking-wider flex items-center justify-center gap-2 transition-colors"
              >
                <span>📞 0507 087 17 89</span>
              </a>
            </div>
          </div>

          {/* Lead Form Wizard (Technical Configurator) */}
          <div className="lg:col-span-5">
            <LeadWizard defaultSource="GOOGLE_ADS" />
          </div>
        </div>
      </section>

      {/* 4. 3-KOLONLU ENDÜSTRİYEL DASHBOARD METRİK BLOĞU */}
      <section className="py-6 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div className="metric-dash-card">
            <div className="font-mono text-3xl sm:text-4xl font-black text-[#111827] mb-0.5">
              50+
            </div>
            <div className="text-xs font-black text-[#111827] uppercase tracking-wider">
              Tamamlanan Endüstriyel Tesis
            </div>
            <div className="text-xs text-gray-600 font-medium mt-1">
              Döşemealtı OSB, Kepez & Muratpaşa Sahası
            </div>
          </div>

          <div className="metric-dash-card">
            <div className="font-mono text-3xl sm:text-4xl font-black text-[#111827] mb-0.5">
              15.000+ <span className="text-sm font-bold text-gray-500">m²</span>
            </div>
            <div className="text-xs font-black text-[#111827] uppercase tracking-wider">
              Toplam Kaplanan Saha Betonu
            </div>
            <div className="text-xs text-gray-600 font-medium mt-1">
              Ağır sanayi, lojistik depo ve otoparklar
            </div>
          </div>

          <div className="metric-dash-card">
            <div className="font-mono text-3xl sm:text-4xl font-black text-[#111827] mb-0.5">
              %98.4
            </div>
            <div className="text-xs font-black text-[#111827] uppercase tracking-wider">
              Şartnameye Uygunluk Oranı
            </div>
            <div className="text-xs text-gray-600 font-medium mt-1">
              Sözleşmeli metrekare ve teslim garantisi
            </div>
          </div>
        </div>
      </section>

      {/* 5. KULLANIM ALANLARI */}
      <section className="py-12 bg-white border-y border-gray-300 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <CorporateReferences />
      </section>

      {/* 6. 2026 ANTALYA ENDÜSTRİYEL SPEC VE FİYAT MATRİSİ */}
      <section className="py-14 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-t border-gray-300">
        <FiyatStratejisi2026 />
      </section>

      {/* 7. MID-PAGE "KARARSIZ MISIN?" GERİLLA DÖNÜŞÜM KUTUSU */}
      <section className="py-8 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#111827] text-white rounded-xl p-6 sm:p-8 border-2 border-[#F59E0B] shadow-xl flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2">
            <span className="inline-block px-2.5 py-1 rounded bg-[#F59E0B] text-[#111827] font-mono text-xs font-black uppercase">
              15 DAKİKADA HIZLI ZEMİN ANALİZİ
            </span>
            <h3 className="text-xl sm:text-2xl font-black text-white">
              Hangi Epoksi Sisteminin Uygun Olduğundan Emin Değil misiniz?
            </h3>
            <p className="text-sm text-gray-300 max-w-2xl">
              Zemininizin mevcut durumunu WhatsApp'tan fotoğraf olarak gönderin; mühendislerimiz kullanım amacınıza göre en ekonomik ve dayanıklı sistemi anında belirlesin.
            </p>
          </div>
          <a
            href="https://wa.me/905070871789?text=Merhaba,%20zeminimin%20fotoğrafını%20iletiyorum.%20En%20uygun%20epoksi%20sistemi%20ve%20fiyat%20analizi%20yapabilir%20misiniz?"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#F59E0B] hover:bg-[#D97706] text-[#111827] font-black px-7 py-4 rounded-lg text-sm whitespace-nowrap shadow-lg flex items-center gap-2 flex-shrink-0 transition-transform active:scale-95"
          >
            <span>📸 Fotoğraf Gönder & Analiz İste</span>
          </a>
        </div>
      </section>

      {/* 8. BİZ VS STANDART USTALAR (GÜVEN VE KARŞILAŞTIRMA MATRİSİ) */}
      <section className="py-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-left border-b border-gray-300 pb-3 mb-6">
          <span className="font-mono text-xs font-bold text-[#F59E0B] uppercase">KALİTE VE GÜVENCE STANDARTLARI</span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#111827]">
            Neden Nova Epoksi? (Farkımız Nedir?)
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-white border-2 border-[#15803D] p-5 rounded-lg shadow-sm">
            <div className="flex items-center gap-2 text-[#15803D] font-black text-sm uppercase mb-3 font-mono">
              <span>✓</span> NOVA EPOKSİ SİSTEMLERİ
            </div>
            <ul className="space-y-2.5 text-xs sm:text-sm font-semibold text-gray-800">
              <li className="flex items-start gap-2">
                <span className="text-[#15803D] font-black">✓</span> Lazerli nem ölçümü ve elmas silim ile zemin hazırlığı (Kabarma riski %0)
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#15803D] font-black">✓</span> Yazılı sabit fiyat sözleşmesi (Süreçte sürpriz ek ücret talep edilmez)
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#15803D] font-black">✓</span> ISO & CE belgeli solventli/solventsiz saf epoksi kimyasalları
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#15803D] font-black">✓</span> 10 yıl sistem mukavemeti ve yazılı firma garantisi
              </li>
            </ul>
          </div>

          <div className="bg-gray-100 border border-gray-300 p-5 rounded-lg text-gray-600">
            <div className="flex items-center gap-2 text-red-600 font-black text-sm uppercase mb-3 font-mono">
              <span>✕</span> STANDART PİYASA UYGULAMALARI
            </div>
            <ul className="space-y-2.5 text-xs sm:text-sm font-medium text-gray-700">
              <li className="flex items-start gap-2">
                <span className="text-red-500 font-bold">✕</span> Göz kararı zemin analizi, yetersiz astar (1 yıl içinde soyulma riski)
              </li>
              <li className="flex items-start gap-2">
                <span className="text-red-500 font-bold">✕</span> Sözleşmesiz iş başlangıcı, iş bitiminde "malzeme yetmedi" ek masrafları
              </li>
              <li className="flex items-start gap-2">
                <span className="text-red-500 font-bold">✕</span> Seyreltilmiş ucuz boyalar ile dayanıksız ince film tabakası
              </li>
              <li className="flex items-start gap-2">
                <span className="text-red-500 font-bold">✕</span> İş teslimi sonrası ulaşılamayan geçici taşeronlar
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* 9. GERÇEK ANTALYA MÜŞTERİ REFERANS YORUMLARI */}
      <section className="py-12 bg-white border-y border-gray-300 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-left border-b border-gray-300 pb-3 mb-6">
          <span className="font-mono text-xs font-bold text-[#F59E0B] uppercase">DOĞRULANMIŞ SAHA DEĞERLENDİRMELERİ</span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#111827]">
            Antalya İşletmecilerinin Yorumları
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-[#F8FAFC] border border-gray-300 p-5 rounded-lg">
            <div className="text-[#F59E0B] text-xs font-bold mb-2">★★★★★ 5.0</div>
            <p className="text-xs sm:text-sm text-gray-800 font-medium leading-relaxed mb-4">
              "Döşemealtı OSB'deki 2.500 m² gıda üretim alanımız için anlaştık. Zamanında teslim ettiler, elmas silim ve astar kalitesi mükemmel oldu. Teşekkürler."
            </p>
            <div className="font-bold text-xs text-[#111827]">Ahmet K.</div>
            <div className="text-[11px] text-gray-500 font-mono">Döşemealtı OSB — Fabrika Yöneticisi</div>
          </div>

          <div className="bg-[#F8FAFC] border border-gray-300 p-5 rounded-lg">
            <div className="text-[#F59E0B] text-xs font-bold mb-2">★★★★★ 5.0</div>
            <p className="text-xs sm:text-sm text-gray-800 font-medium leading-relaxed mb-4">
              "Kepez oto servisimizin zeminine yağ ve hidrolik dayanımlı multilayer epoksi uygulandı. Forklift ve araç trafiğinde en ufak çizik dahi oluşmadı."
            </p>
            <div className="font-bold text-xs text-[#111827]">Murat T.</div>
            <div className="text-[11px] text-gray-500 font-mono">Kepez Sanayi — Servis Sahibi</div>
          </div>

          <div className="bg-[#F8FAFC] border border-gray-300 p-5 rounded-lg">
            <div className="text-[#F59E0B] text-xs font-bold mb-2">★★★★★ 5.0</div>
            <p className="text-xs sm:text-sm text-gray-800 font-medium leading-relaxed mb-4">
              "Lara'daki otel lobimiz için metalik epoksi tercih ettik. Mermerden çok daha dayanıklı ve şık durdu. Keşif ve uygulama ekibi çok profesyoneldi."
            </p>
            <div className="font-bold text-xs text-[#111827]">Engin B.</div>
            <div className="text-[11px] text-gray-500 font-mono">Muratpaşa / Lara — Tesis Müdürü</div>
          </div>
        </div>
      </section>

      {/* 10. TAMAMLANAN UYGULAMA ÖRNEKLERİ */}
      <section className="py-14 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-t border-gray-300">
        <BitirdigimizIsler />
      </section>

      {/* 11. TEKNİK UYGULAMA SÜRECİ */}
      <section id="hizmetler" className="py-14 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-t border-gray-300">
        <EpoksiTeknikSurec />
      </section>

      {/* 12. ÖNCE / SONRA DÖNÜŞÜM SÜRGÜSÜ */}
      <section className="py-14 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-t border-gray-300">
        <BeforeAfterSlider />
      </section>

      {/* 13. İNTERAKTİF HESAPLAMA MOTORU */}
      <section id="hesaplayici" className="py-14 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-t border-gray-300">
        <TeklifHesaplayici />
      </section>

      {/* 14. SERTİFİKA VE GÜVEN ROZETLERİ */}
      <section className="py-14 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-t border-gray-300">
        <TrustBadges />
      </section>

      {/* 15. FLOATING WHATSAPP BOT */}
      <WhatsAppBotWidget />

      {/* 16. MOBILE STICKY BOTTOM ACTION BAR (HEMEN ARA + WHATSAPP) */}
      <MobileStickyBar />

      {/* FOOTER */}
      <footer className="bg-[#111827] text-gray-400 py-12 text-xs border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 border-b border-gray-800 pb-6 mb-6">
            <div>
              <div className="font-black text-lg text-white mb-1">
                ANTALYA NOVA EPOKSİ ZEMİN SİSTEMLERİ
              </div>
              <p className="text-gray-400">
                Antalya OSB, Fabrika, Depo ve Otopark Zemin Mühendisliği — Tel: 0507 087 17 89
              </p>
            </div>
            <div className="flex gap-3">
              <a
                href="https://wa.me/905070871789"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#F59E0B] text-[#111827] font-black px-4 py-2.5 rounded-lg text-xs"
              >
                Mühendis WhatsApp
              </a>
            </div>
          </div>
          
          <div className="flex flex-wrap justify-center md:justify-start gap-4 mb-6 font-bold text-gray-300">
            <a href="/blog" className="hover:text-[#F59E0B]">Blog & Fiyat Rehberi</a>
            <a href="/antalya-fabrika-epoksi-teklif" className="hover:text-[#F59E0B]">Fabrika Zemin Şartnamesi</a>
            <a href="/self-leveling-epoksi" className="hover:text-[#F59E0B]">Self Leveling Epoksi</a>
            <a href="/dosemealti-epoksi" className="hover:text-[#F59E0B]">Döşemealtı OSB Hizmetleri</a>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-between text-[11px] text-gray-500 font-mono gap-3 pt-4 border-t border-gray-800">
            <span>© 2026 Antalya Nova Epoksi Zemin Çözümleri. Tüm Hakları Saklıdır. | Nova Digital İştiraki</span>
            <div className="flex gap-4">
              <span>Gizlilik Politikası</span>
              <span>KVKK Aydınlatma Metni</span>
              <span>Çerez Politikası</span>
              <a href="/admin/dashboard" className="text-gray-500 hover:text-gray-300 font-bold">
                Yönetici Paneli
              </a>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}
