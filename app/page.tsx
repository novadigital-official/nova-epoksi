import Navbar from '../components/Navbar';
import LeadWizard from '../components/LeadWizard';
import BeforeAfterSlider from '../components/BeforeAfterSlider';
import TrustBadges from '../components/TrustBadges';
import TeklifHesaplayici from '../components/TeklifHesaplayici';
import EpoksiTeknikSurec from '../components/EpoksiTeknikSurec';
import CorporateReferences from '../components/CorporateReferences';
import WhatsAppBotWidget from '../components/WhatsAppBotWidget';
import BitirdigimizIsler from '../components/BitirdigimizIsler';
import MobileStickyBar from '../components/MobileStickyBar';
import FiyatStratejisi2026 from '../components/FiyatStratejisi2026';

export default function AntalyaEpoksiMasterSalesPage() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-900 font-sans selection:bg-blue-600 selection:text-white relative pb-16 md:pb-0">
      {/* 1. PROFESSIONAL CORPORATE NAVBAR */}
      <Navbar />

      {/* 2. HERO SECTION — GÖRSEL HİYERARŞİSİ NETLEŞTİRİLMİŞ SATIŞ ALANI */}
      <section id="kesif" className="pt-32 pb-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-black bg-blue-100 text-blue-800 border border-blue-200 mb-4 uppercase tracking-wider">
              ANTALYA İÇİ YERİNDE İNCELEME
            </div>
            <h1 className="text-3xl sm:text-5xl font-black text-slate-900 leading-tight mb-4">
              Antalya'da Fabrika, Depo ve İşletmeler İçin <span className="text-blue-600">Dayanıklı Epoksi</span> Zemin Çözümleri
            </h1>
            <p className="text-slate-700 text-base sm:text-lg mb-4 font-semibold leading-relaxed">
              Zemin durumunu analiz ediyor, ihtiyacınıza uygun epoksi sistemi belirliyor ve uygulama sürecini baştan sona yönetiyoruz.
            </p>
            <p className="text-slate-600 text-xs sm:text-sm mb-6 leading-relaxed bg-white border border-slate-200 p-3.5 rounded-2xl">
              "Zemininizi görmeden net fiyat vermiyoruz. Önce ücretsiz keşif yapıyor, ihtiyacınıza uygun sistemi birlikte planlıyoruz."
            </p>

            {/* 4 Sade Güven Kartı */}
            <div className="grid grid-cols-2 gap-3 mb-8 text-xs font-extrabold text-slate-800">
              <div className="flex items-center gap-2 bg-white border border-slate-200 p-3.5 rounded-xl shadow-sm min-h-[48px]">
                <span className="text-emerald-600 font-black">✓</span> Ücretsiz Yerinde Keşif
              </div>
              <div className="flex items-center gap-2 bg-white border border-slate-200 p-3.5 rounded-xl shadow-sm min-h-[48px]">
                <span className="text-emerald-600 font-black">✓</span> Aynı Gün Ön Teklif
              </div>
              <div className="flex items-center gap-2 bg-white border border-slate-200 p-3.5 rounded-xl shadow-sm min-h-[48px]">
                <span className="text-emerald-600 font-black">✓</span> Profesyonel Uygulama Süreci
              </div>
              <div className="flex items-center gap-2 bg-white border border-slate-200 p-3.5 rounded-xl shadow-sm min-h-[48px]">
                <span className="text-emerald-600 font-black">✓</span> Garanti Seçenekleri
              </div>
            </div>

            {/* NET GÖRSEL HİYERARŞİ: 1. YEŞİL WHATSAPP + 2. SIYAH/ÇERÇEVELİ KEŞİF BUTONU */}
            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href="https://wa.me/905070871789?text=Merhaba%20Antalya%20epoksi%20fiyat%20teklifi%20ve%20kesif%20istiyorum"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-emerald-600 hover:bg-emerald-500 text-white font-black px-6 py-4 min-h-[48px] rounded-xl text-sm flex items-center justify-center gap-2 shadow-md cursor-pointer transition-transform active:scale-95"
              >
                <span>WhatsApp İletişim Hattı</span>
              </a>
              <a
                href="#kesif"
                className="bg-slate-900 hover:bg-slate-800 text-white border-2 border-slate-800 font-extrabold px-6 py-4 min-h-[48px] rounded-xl text-sm flex items-center justify-center gap-2 shadow-sm transition-colors"
              >
                <span>Ücretsiz Keşif Formu</span>
              </a>
            </div>
          </div>

          {/* Lead Form Wizard */}
          <div>
            <LeadWizard defaultSource="GOOGLE_ADS" />
          </div>
        </div>
      </section>

      {/* 3. UYGULAMA ALANLARI */}
      <section className="py-12 bg-white border-y border-slate-200 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 shadow-sm">
        <CorporateReferences />
      </section>

      {/* 4. SAYAÇ VE PERFORMANS METRİKLERİ */}
      <section className="py-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">
          <div className="bg-white border border-slate-200 p-6 rounded-3xl shadow-sm">
            <div className="text-4xl sm:text-5xl font-black text-blue-600 mb-1">50+</div>
            <div className="text-sm font-extrabold text-slate-900">Tamamlanan Proje</div>
            <div className="text-xs text-slate-500 mt-1">Antalya ve Bölgesel Uygulama Sahası</div>
          </div>

          <div className="bg-white border border-slate-200 p-6 rounded-3xl shadow-sm">
            <div className="text-4xl sm:text-5xl font-black text-emerald-600 mb-1">15.000+</div>
            <div className="text-sm font-extrabold text-slate-900">m² Toplam Zemin Kaplama</div>
            <div className="text-xs text-slate-500 mt-1">Antalya ve OSB Genelinde</div>
          </div>

          <div className="bg-white border border-slate-200 p-6 rounded-3xl shadow-sm">
            <div className="text-4xl sm:text-5xl font-black text-blue-700 mb-1">%98</div>
            <div className="text-sm font-extrabold text-slate-900">Müşteri Memnuniyeti</div>
            <div className="text-xs text-slate-500 mt-1">Uygulama ve İletişim Garantisi</div>
          </div>
        </div>
      </section>

      {/* 5. 2026 ANTALYA EPOKSİ ORTALAMA FİYATLARI */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-t border-slate-200">
        <FiyatStratejisi2026 />
      </section>

      {/* 6. TAMAMLANAN UYGULAMA ÖRNEKLERİ (6 GERÇEK FOTOĞRAF) */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-t border-slate-200">
        <BitirdigimizIsler />
      </section>

      {/* 7. ANLAŞILIR VE SADE UYGULAMA SÜRECİ */}
      <section id="hizmetler" className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-t border-slate-200">
        <EpoksiTeknikSurec />
      </section>

      {/* 8. ÖNCE / SONRA DÖNÜŞÜM SÜRGÜSÜ */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-t border-slate-200">
        <BeforeAfterSlider />
      </section>

      {/* 9. İNTERAKTİF HESAPLAMA MOTORU */}
      <section id="hesaplayici" className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-t border-slate-200">
        <TeklifHesaplayici />
      </section>

      {/* 10. SERTİFİKA VE GÜVEN ROZETLERİ */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-t border-slate-200">
        <TrustBadges />
      </section>

      {/* 11. FLOATING WHATSAPP SATIŞ BOTU */}
      <WhatsAppBotWidget />

      {/* 12. MOBİL YAPIŞKAN AKSİYON BARI */}
      <MobileStickyBar />

      {/* FOOTER */}
      <footer className="bg-slate-900 text-slate-400 py-12 text-xs text-center border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4">
          <div className="font-black text-lg text-white mb-2">Antalya Nova Epoksi Zemin Çözümleri</div>
          <p className="mb-4">Antalya Bölge Müdürlüğü: Muratpaşa / Antalya — Tel: 0507 087 17 89</p>
          <div className="flex justify-center gap-4 mb-4 font-bold text-slate-300">
            <a href="/blog" className="hover:text-blue-400">Blog & Fiyat Rehberi</a>
            <a href="/antalya-fabrika-epoksi-teklif" className="hover:text-blue-400">Google Ads Landing</a>
            <a href="/self-leveling-epoksi" className="hover:text-blue-400">Self Leveling Epoksi</a>
            <a href="/dosemealti-epoksi" className="hover:text-blue-400">Döşemealtı OSB</a>
          </div>
          <div className="flex items-center justify-center gap-2 text-[10px] text-slate-600">
            <span>© 2026 Antalya Nova Epoksi. Tüm Hakları Saklıdır.</span>
            <span>•</span>
            <a href="/admin/dashboard" className="text-slate-500 hover:text-slate-400 font-bold">Yönetici Girişi</a>
          </div>
        </div>
      </footer>
    </main>
  );
}
