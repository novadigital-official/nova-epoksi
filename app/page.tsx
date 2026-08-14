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

export default function AntalyaEpoksiMasterSalesPage() {
  return (
    <main className="min-h-screen bg-[#F4F5F7] text-[#1A1C20] font-sans selection:bg-[#F4B400] selection:text-[#1A1C20] relative">
      {/* 1. INDUSTRIAL NAVBAR */}
      <Navbar />

      {/* 2. HERO SECTION — B2B ENDÜSTRİYEL MÜHENDİSLİK ALANI */}
      <section id="kesif" className="pt-24 pb-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-7">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-[#1A1C20] text-[#F4B400] font-mono text-xs font-bold mb-4 uppercase tracking-wider">
              <span className="w-2 h-2 rounded-full bg-[#F4B400] animate-pulse"></span>
              <span>ANTALYA & OSB SANAYİ ZEMİN ŞARTNAMESİ</span>
            </div>
            
            <h1 className="text-3xl sm:text-5xl font-extrabold text-[#111827] leading-tight mb-4 tracking-tight">
              Fabrika, Depo ve Tesisler İçin <span className="text-[#111827] underline decoration-[#F59E0B] decoration-4">Yüksek Mukavemetli</span> Epoksi Zemin Çözümleri
            </h1>
            
            <p className="text-gray-800 text-base sm:text-lg mb-6 font-semibold leading-relaxed max-w-2xl">
              Antalya Organize Sanayi Bölgesi ve ticari işletmeler için lazerli nem analizi, elmas silim zemin hazırlığı ve ağır tonaj dayanımlı çok katmanlı epoksi uygulamaları.
            </p>

            {/* 4 Sade Endüstriyel Şartname Kutusu */}
            <div className="grid grid-cols-2 gap-3 mb-6 text-sm font-bold text-[#111827]">
              <div className="flex items-center gap-2 bg-white border border-gray-300 p-3.5 rounded-lg shadow-sm">
                <span className="text-[#15803D] font-black text-base">✓</span> Lazerli Nem & Zemin Analizi
              </div>
              <div className="flex items-center gap-2 bg-white border border-gray-300 p-3.5 rounded-lg shadow-sm">
                <span className="text-[#15803D] font-black text-base">✓</span> 10 Yıl Sistem Mukavemeti
              </div>
              <div className="flex items-center gap-2 bg-white border border-gray-300 p-3.5 rounded-lg shadow-sm">
                <span className="text-[#15803D] font-black text-base">✓</span> Forklift & Kimyasal Dayanım
              </div>
              <div className="flex items-center gap-2 bg-white border border-gray-300 p-3.5 rounded-lg shadow-sm">
                <span className="text-[#15803D] font-black text-base">✓</span> Aynı Gün Teknik Şartname
              </div>
            </div>

            {/* NET GÖRSEL HİYERARŞİ */}
            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href="https://wa.me/905070871789?text=Merhaba,%20Antalya%20epoksi%20zemin%20şartnamesi%20ve%20keşif%20istiyorum."
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#F59E0B] hover:bg-[#D97706] text-[#111827] font-black px-6 py-4 min-h-[50px] rounded-lg text-sm uppercase tracking-wider flex items-center justify-center gap-2 shadow-md cursor-pointer transition-transform active:scale-95"
              >
                <span>Mühendis ile WhatsApp'tan Görüş</span>
              </a>
              <a
                href="#fiyatlar"
                className="bg-[#111827] hover:bg-[#1F2937] text-white border-2 border-[#111827] font-extrabold px-6 py-4 min-h-[50px] rounded-lg text-sm uppercase tracking-wider flex items-center justify-center gap-2 transition-colors"
              >
                <span>Fiyat & Şartname Listesi ↗</span>
              </a>
            </div>
          </div>

          {/* Lead Form Wizard (Technical Configurator) */}
          <div className="lg:col-span-5">
            <LeadWizard defaultSource="GOOGLE_ADS" />
          </div>
        </div>
      </section>

      {/* 3. 3-KOLONLU ENDÜSTRİYEL DASHBOARD METRİK BLOĞU */}
      <section className="py-8 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div className="metric-dash-card">
            <div className="font-mono text-3xl sm:text-4xl font-black text-[#1A1C20] mb-0.5">
              50+
            </div>
            <div className="text-xs font-black text-[#1A1C20] uppercase tracking-wider">
              Tamamlanan Endüstriyel Tesis
            </div>
            <div className="text-[11px] text-gray-500 font-mono mt-1">
              Döşemealtı OSB, Kepez & Muratpaşa Sahası
            </div>
          </div>

          <div className="metric-dash-card">
            <div className="font-mono text-3xl sm:text-4xl font-black text-[#1A1C20] mb-0.5">
              15.000+ <span className="text-sm font-bold text-gray-500">m²</span>
            </div>
            <div className="text-xs font-black text-[#1A1C20] uppercase tracking-wider">
              Toplam Kaplanan Saha Betonu
            </div>
            <div className="text-[11px] text-gray-500 font-mono mt-1">
              Ağır sanayi, lojistik depo ve otoparklar
            </div>
          </div>

          <div className="metric-dash-card">
            <div className="font-mono text-3xl sm:text-4xl font-black text-[#1A1C20] mb-0.5">
              %98.4
            </div>
            <div className="text-xs font-black text-[#1A1C20] uppercase tracking-wider">
              Şartnameye Uygunluk Oranı
            </div>
            <div className="text-[11px] text-gray-500 font-mono mt-1">
              Sözleşmeli metrekare ve teslim garantisi
            </div>
          </div>
        </div>
      </section>

      {/* 4. KULLANIM ALANLARI / SEKTÖREL ÇÖZÜMLER */}
      <section className="py-12 bg-white border-y border-gray-300 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <CorporateReferences />
      </section>

      {/* 5. 2026 ANTALYA ENDÜSTRİYEL SPEC VE FİYAT MATRİSİ */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-t border-gray-300">
        <FiyatStratejisi2026 />
      </section>

      {/* 6. TAMAMLANAN UYGULAMA ÖRNEKLERİ */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-t border-gray-300">
        <BitirdigimizIsler />
      </section>

      {/* 7. TEKNİK UYGULAMA SÜRECİ */}
      <section id="hizmetler" className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-t border-gray-300">
        <EpoksiTeknikSurec />
      </section>

      {/* 8. ÖNCE / SONRA DÖNÜŞÜM SÜRGÜSÜ */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-t border-gray-300">
        <BeforeAfterSlider />
      </section>

      {/* 9. İNTERAKTİF HESAPLAMA MOTORU */}
      <section id="hesaplayici" className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-t border-gray-300">
        <TeklifHesaplayici />
      </section>

      {/* 10. SERTİFİKA VE GÜVEN ROZETLERİ */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-t border-gray-300">
        <TrustBadges />
      </section>

      {/* 11. FLOATING WHATSAPP BOT */}
      <WhatsAppBotWidget />

      {/* FOOTER */}
      <footer className="bg-[#1A1C20] text-gray-400 py-12 text-xs border-t border-gray-800">
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
                className="bg-[#F4B400] text-[#1A1C20] font-black px-4 py-2 rounded text-xs"
              >
                Mühendis WhatsApp
              </a>
            </div>
          </div>
          
          <div className="flex flex-wrap justify-center md:justify-start gap-4 mb-6 font-bold text-gray-300">
            <a href="/blog" className="hover:text-[#F4B400]">Blog & Fiyat Rehberi</a>
            <a href="/antalya-fabrika-epoksi-teklif" className="hover:text-[#F4B400]">Fabrika Zemin Şartnamesi</a>
            <a href="/self-leveling-epoksi" className="hover:text-[#F4B400]">Self Leveling Epoksi</a>
            <a href="/dosemealti-epoksi" className="hover:text-[#F4B400]">Döşemealtı OSB Hizmetleri</a>
          </div>

          <div className="flex items-center justify-between text-[11px] text-gray-500 font-mono">
            <span>© 2026 Antalya Nova Epoksi Zemin Çözümleri. Tüm Hakları Saklıdır.</span>
            <a href="/admin/dashboard" className="text-gray-500 hover:text-gray-300 font-bold">
              Yönetici Paneli
            </a>
          </div>
        </div>
      </footer>
    </main>
  );
}
