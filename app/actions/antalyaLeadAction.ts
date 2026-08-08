'use server';

// ═══════════════════════════════════════════════════════════
// NEXT.JS 15 SERVER ACTION: ANTALYA AGRESİF LEAD MOTORU
// Anında WhatsApp Bot + Database Lead Kaydı
// ═══════════════════════════════════════════════════════════

import { z } from 'zod';
import { prisma } from '../../lib/prisma';

export const antalyaLeadSchema = z.object({
  name: z.string().min(2, 'Ad soyad zorunludur.'),
  phone: z.string().min(10, 'Geçerli bir telefon numarası giriniz (05XX).'),
  company: z.string().optional(),
  serviceType: z.string().min(2, 'Mekan / Hizmet türü seçiniz.'),
  squareMeters: z.string().min(1, 'Metrekare seçiniz.'),
  location: z.string().min(2, 'Antalya lokasyon seçiniz.'),
  message: z.string().optional(),
  source: z.enum(['GOOGLE_ADS', 'META_ADS', 'INSTAGRAM', 'ORGANIC_SEO', 'DIRECT']).default('GOOGLE_ADS')
});

export type AntalyaLeadInput = z.infer<typeof antalyaLeadSchema>;

export async function submitAntalyaLeadAction(data: AntalyaLeadInput) {
  try {
    const validated = antalyaLeadSchema.parse(data);

    // 1. Database Lead Kaydı
    let leadRecord;
    try {
      leadRecord = await prisma.lead.create({
        data: {
          name: validated.name,
          phone: validated.phone,
          company: validated.company || null,
          serviceType: validated.serviceType,
          squareMeters: validated.squareMeters,
          location: validated.location,
          message: validated.message || null,
          source: validated.source,
          status: 'NEW'
        }
      });
    } catch (err) {
      console.warn('Database fallback active:', err);
    }

    // 2. Firmaya Anında WhatsApp Lead Mesajı
    const companyWaText = encodeURIComponent(
      `🔥 *YENİ EPOKSİ KEŞİF TALEBİ (ANTALYA)* 🔥\n\n` +
      `• *İsim:* ${validated.name}\n` +
      `• *Telefon:* ${validated.phone}\n` +
      `• *Mekan Tipi:* ${validated.serviceType}\n` +
      `• *Alan:* ${validated.squareMeters} m²\n` +
      `• *Lokasyon:* Antalya / ${validated.location}\n` +
      `• *Kaynak:* ${validated.source}\n\n` +
      `⚡ Ekibimiz 15 dakika içinde arama yapacaktır.`
    );

    const whatsappUrl = `https://wa.me/905070871789?text=${companyWaText}`;

    return {
      success: true,
      message: 'Talebiniz başarıyla alındı. 15 dakika içinde dönüş yapılacaktır.',
      leadId: leadRecord?.id || 'demo-lead',
      whatsappUrl
    };
  } catch (error) {
    if (error instanceof z.ZodError) {
      return {
        success: false,
        errors: error.flatten().fieldErrors
      };
    }
    return {
      success: false,
      message: 'Sunucu hatası. Lütfen tekrar deneyiniz.'
    };
  }
}
