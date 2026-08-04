/* ═══════════════════════════════════════════════════════════════
   NOVA DIGITAL — SİTE KONFİGÜRASYONU (config.js)
   ───────────────────────────────────────────────────────────────
   Tüm iletişim bilgileri, paket fiyatları ve sosyal medya 
   linkleri bu dosyadan yönetilir. Başka dosyaya dokunmaya 
   gerek yoktur.
   ═══════════════════════════════════════════════════════════════ */

const SITE_CONFIG = {

    // ─── Firma Bilgileri ─────────────────────────────────────
    firma: {
        ad:       "Nova Digital",
        slogan:   "Dijital Çözümler",
        unvan:    "Nova Digital Yazılım & Dijital Pazarlama",
        adres:    "Antalya, Türkiye",
        eposta:   "info@novadigital.com.tr",
        telefon:  "+90 507 087 17 89",
    },

    // ─── WhatsApp ────────────────────────────────────────────
    whatsapp: {
        numara:   "905070871789",
        mesaj:    "Merhaba, Nova Digital hizmetleriniz hakkında bilgi almak istiyorum.",
    },

    // ─── Sosyal Medya ────────────────────────────────────────
    sosyal: {
        instagram: "https://instagram.com/novadigitalllll",
        threads:   "https://threads.net/@novadigitalllll",
        linkedin:  "",
        youtube:   "",
    },

    // ─── Web Sitesi Paketleri ────────────────────────────────
    paketler: {
        standart: {
            ad:       "Standart Web Sitesi",
            fiyat:    "4.999",
            birim:    "TL",
            aciklama: "Küçük işletmeler için hızlı ve profesyonel dijital başlangıç.",
            teslim:   "2 Günde Teslim",
            odeme:    "2.500 TL ön ödeme + 2.499 TL teslimde",
            ozellikler: [
                "Modern ve Profesyonel Tasarım",
                "Mobil Uyumlu (Responsive)",
                "Alan Adı Bağlantısı",
                "Hosting (1 Yıllık)",
                "SSL Sertifikası",
                "WhatsApp / Arama Butonu",
                "Google Maps Entegrasyonu",
                "Sosyal Medya Entegrasyonu",
                "İletişim Formu",
                "Temel SEO Altyapısı",
                "15 Gün Teknik Destek",
            ],
        },
        kurumsal: {
            ad:       "Kurumsal Web Sitesi",
            fiyat:    "9.999",
            birim:    "TL",
            aciklama: "Kurumsal kimliğinizi dijitalde güçlü şekilde temsil edin.",
            teslim:   "3-5 Günde Teslim",
            odeme:    "5.000 TL ön ödeme + 4.999 TL teslimde",
            ozellikler: [
                "Sınırsız İç Sayfa",
                "Yönetim Paneli",
                "İçerik Yönetimi",
                "Kurumsal E-Posta (1 Yıllık)",
                "Google Analytics Kurulumu",
                "Google Search Console Kurulumu",
                "Google İşletme Hesabı Kurulumu",
                "Yandex İşletme Hesabı Kurulumu",
                "Gelişmiş SEO Altyapısı",
                "Mobil Uyumlu (Responsive)",
                "Alan Adı (1 Yıllık)",
                "Hosting (1 Yıllık)",
                "SSL Sertifikası (1 Yıllık)",
                "30 Gün Teknik Destek",
            ],
        },
        eticaret: {
            ad:       "Profesyonel E-Ticaret",
            fiyat:    "35.000",
            birim:    "TL",
            aciklama: "Ürünlerinizi online satın, siparişlerinizi yönetin, satışlarınızı artırın.",
            teslim:   "5-10 Günde Teslim",
            odeme:    "17.500 TL ön ödeme + 17.500 TL teslimde",
            ozellikler: [
                "E-Ticaret Altyapısı",
                "Ürün ve Kategori Yönetimi",
                "Stok Yönetimi",
                "Sipariş Yönetimi",
                "Müşteri Hesapları",
                "Ödeme Entegrasyonu (iyzico / PayTR / Shopier)",
                "Kargo Entegrasyonu",
                "Kupon ve İndirim Sistemi",
                "Yönetim Paneli",
                "Mobil Uyumlu (Responsive)",
                "Google Analytics Kurulumu",
                "Google Search Console Kurulumu",
                "Gelişmiş SEO Altyapısı",
                "30 Gün Teknik Destek",
            ],
        },
    },

    // ─── Reklam Yönetimi Paketleri ───────────────────────────
    reklamPaketleri: {
        baslangic: {
            ad:    "Başlangıç",
            fiyat: "5.000",
            birim: "TL / Ay",
            ozellikler: [
                "Meta Ads (Instagram/Facebook) Yönetimi",
                "Reklam Hesabı Kurulumu",
                "Hedef Kitle Analizi",
                "Reklam Görsel Önerileri",
                "Haftalık Performans Kontrolü",
                "Aylık Raporlama",
            ],
        },
        profesyonel: {
            ad:    "Profesyonel",
            fiyat: "10.000",
            birim: "TL / Ay",
            populer: true,
            ozellikler: [
                "Meta Ads Yönetimi",
                "Google Ads Yönetimi",
                "Kampanya Stratejisi",
                "Rakip Analizi",
                "Dönüşüm Takibi",
                "A/B Testleri",
                "Aylık Rapor + Optimizasyon",
            ],
        },
        growth: {
            ad:    "Growth",
            fiyat: "15.000",
            birim: "TL+ / Ay",
            ozellikler: [
                "Meta Ads + Google Ads",
                "Landing Page Optimizasyonu",
                "SEO Önerileri",
                "İçerik Stratejisi",
                "Haftalık Optimizasyon",
                "Satış Hunisi Kurulumu",
                "Aylık Detaylı Raporlama",
            ],
        },
    },

    // ─── Hizmet Alanları ─────────────────────────────────────
    hizmetler: [
        {
            id:    "web-tasarim",
            baslik: "Web Tasarım",
            icon:  "fa-solid fa-display",
            aciklama: "Modern, hızlı ve mobil uyumlu web siteleri ile markanızı dijitalde en iyi şekilde temsil edin.",
        },
        {
            id:    "e-ticaret",
            baslik: "E-Ticaret",
            icon:  "fa-solid fa-cart-shopping",
            aciklama: "Güvenli altyapı, kolay yönetim ve yüksek performanslı e-ticaret siteleri kuruyoruz.",
        },
        {
            id:    "reklam-yonetimi",
            baslik: "Reklam Yönetimi",
            icon:  "fa-solid fa-bullhorn",
            aciklama: "Doğru hedefleme, etkili reklam stratejileri ve sürekli optimizasyon ile daha fazla müşteri kazanın.",
        },
        {
            id:    "mobil-uygulama",
            baslik: "Mobil Uygulama",
            icon:  "fa-solid fa-mobile-screen-button",
            aciklama: "iOS ve Android uyumlu mobil uygulamalar ile işletmenizi bir adım öne taşıyoruz.",
        },
        {
            id:    "ozel-yazilim",
            baslik: "Özel Yazılım",
            icon:  "fa-solid fa-code",
            aciklama: "İşletmenize özel yazılım çözümleri ile süreçlerinizi dijitalleştiriyoruz.",
        },
    ],
};
