/* ═══════════════════════════════════════════════════════════════
   NOVA DIGITAL — SİTE KONFİGÜRASYONU (config.js)
   ───────────────────────────────────────────────────────────────
   Tüm iletişim bilgileri, paket fiyatları ve stratejik konumlandırma
   bu dosyadan yönetilir.
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
    },

    // ─── Web Sitesi Paketleri (Stratejik Konumlandırma) ──────
    paketler: {
        standart: {
            ad:       "Standart Web Sitesi",
            fiyat:    "4.999",
            birim:    "TL",
            aciklama: "Küçük işletmeler için 2 günde modern, hızlı ve yayına hazır dijital başlangıç.",
            teslim:   "2 Günde Teslim",
            odeme:    "2.500 TL ön ödeme + 2.499 TL teslimde",
            ozellikler: [
                "Modern ve Profesyonel Web Tasarım",
                "Mobil Uyumlu Tasarım (Responsive)",
                "Temel SEO Altyapısı",
                "WhatsApp İletişim Butonu",
                "Sosyal Medya Entegrasyonu",
                "Google Maps Entegrasyonu",
                "SSL Güvenlik Altyapısı",
                "Anahtar Teslim Kurulum",
                "2 Günde Teslim",
                "15 Gün Teknik Destek",
            ],
        },
        kurumsal: {
            ad:       "Kurumsal Web Sitesi",
            fiyat:    "9.999",
            birim:    "TL",
            aciklama: "Türkçe yönetim paneli ve içerik yönetimi ile kurumsal kimliğinizi güçlü şekilde temsil edin.",
            teslim:   "3-5 Günde Teslim",
            odeme:    "5.000 TL ön ödeme + 4.999 TL teslimde",
            ozellikler: [
                "Standart Paketteki Tüm Temel Özellikler",
                "Türkçe Yönetim Paneli",
                "İçerik Yönetimi",
                "Hizmet / Ürün Yönetimi",
                "Blog / Duyuru Yönetimi",
                "Gelişmiş SEO Yönetimi",
                "Form Yönetimi",
                "Google Analytics / Search Console Kurulumu",
                "Daha Kapsamlı Kurumsal Yapı",
                "30 Gün Teknik Destek",
            ],
        },
        eticaret: {
            ad:       "Profesyonel E-Ticaret",
            fiyat:    "35.000",
            birim:    "TL",
            aciklama: "7/24 online satış altyapısı, stok, ödeme ve kargo entegrasyonlu eksiksiz e-ticaret mağazası.",
            teslim:   "5-10 Günde Teslim",
            odeme:    "17.500 TL ön ödeme + 17.500 TL teslimde",
            ozellikler: [
                "E-Ticaret Altyapısı",
                "Ürün / Kategori Yönetimi",
                "Stok Yönetimi",
                "Sepet & Sipariş Yönetimi",
                "Ödeme Entegrasyonu",
                "Kargo Altyapısı",
                "Kupon / Kampanya Sistemi",
                "Yönetim Paneli",
                "Mobil Optimizasyon",
                "Gelişmiş SEO",
                "Analytics + Dönüşüm Takibi",
                "Öncelikli Teknik Destek",
            ],
        },
    },
};
