# 🏗️ Nova Epoksi & Endüstriyel Zemin — High-Ticket B2B Lead Platform

**High-Ticket B2B Lead Generation & Kurumsal Hizmet Platformu Mimarisi**  
*Nova Digital Portföy & Şablon Altyapısı (9.999 TL Pro Standartları)*

---

## 🛠️ 1. TEKNOLOJİ YIĞINI & MİMARİ

- **Frontend & App Router:** Next.js 14, React 18, Tailwind CSS, Lucide Icons
- **Backend & API:** Next.js Server Actions / API Routes (Node.js)
- **Database & ORM:** PostgreSQL + Prisma ORM
- **State & Validation:** React Hook Form + Zod (Form doğrulama ve XSS/Spam koruması)
- **Notification Engine:** Resend API & WhatsApp Webhook Integration

---

## 🎨 2. İNTERAKTİF BÜTÇE SİHİRBAZI WIDGET'I

- **Adım 1 (Hizmet Seçimi):** Multilayer Epoksi, Self-Leveling, Saha Betonu, Anti-Statik Zemin.
- **Adım 2 (Alan Sliders):** 50 m² - 5.000 m² canlı slider seçimi.
- **Adım 3 (Bütçe Motoru):** \( m^2 \times \text{Birim Fiyat} \) dinamik TL hesaplama motoru.
- **Adım 4 (Lead Lock):** Form doldurulduğunda otomatik WhatsApp Webhook yönlendirmesi.

---

## 🗄️ 3. VERİTABANI ŞEMASI (`schema.prisma`)

```prisma
model User {
  id           String   @id @default(cuid())
  email        String   @unique
  passwordHash String
  role         Role     @default(ADMIN)
}

model Service {
  id           String   @id @default(cuid())
  title        String
  slug         String   @unique
  unitPriceTRY Decimal
  coverImage   String
}

model LeadForm {
  id               String   @id @default(cuid())
  fullName         String
  phone            String
  areaSquareMeters Int
  calculatedBudget Decimal
  status           LeadStatus @default(NEW)
}
```

---

## 🚀 KURULUM & YAYINLAMA

```bash
# Bağımlılıkları Yükleme
npm install

# Prisma Veritabanı Değişikliğini İletme
npx prisma db push

# Geliştirici Sunucusunu Başlatma
npm run dev
```
