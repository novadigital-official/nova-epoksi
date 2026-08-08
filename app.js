// ═══════════════════════════════════════════════════════════
// NOVA EPOKSI & ENDÜSTRİYEL ZEMİN — INTERACTIVE APPLICATION LOGIC
// Bütçe Sihirbazı & B2B Lead Conversion Engine
// ═══════════════════════════════════════════════════════════

document.addEventListener('DOMContentLoaded', () => {

    // ─── 1. BÜTÇE SİHİRBAZI (INTERACTIVE BUDGET ESTIMATOR) ─────
    const serviceButtons = document.querySelectorAll('.service-opt-btn');
    const areaRange = document.getElementById('areaRange');
    const areaValDisplay = document.getElementById('areaValDisplay');
    const calculatedPriceDisplay = document.getElementById('calculatedPriceDisplay');
    const selectedServiceInput = document.getElementById('selectedServiceInput');
    const calculatedBudgetInput = document.getElementById('calculatedBudgetInput');

    let currentUnitPrice = 240; // Varsayılan: Multilayer Epoksi (240 TL / m²)
    let currentServiceName = 'Multilayer Epoksi Kaplama';

    // Hizmet Seçim Butonları Listener
    serviceButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            serviceButtons.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');

            currentUnitPrice = parseFloat(btn.getAttribute('data-price')) || 240;
            currentServiceName = btn.getAttribute('data-name') || 'Epoksi Kaplama';
            
            if (selectedServiceInput) {
                selectedServiceInput.value = currentServiceName;
            }

            calculateBudget();
        });
    });

    // m² Slider Input Listener
    if (areaRange) {
        areaRange.addEventListener('input', (e) => {
            if (areaValDisplay) {
                areaValDisplay.textContent = e.target.value;
            }
            calculateBudget();
        });
    }

    // Dinamik Bütçe Hesaplama Mantığı (m² x Birim Fiyat)
    function calculateBudget() {
        if (!areaRange || !calculatedPriceDisplay) return;

        const squareMeters = parseInt(areaRange.value, 10) || 100;
        const totalBudget = squareMeters * currentUnitPrice;

        // TL Formatlama (Örn: 120.000 TL)
        const formattedBudget = new Intl.NumberFormat('tr-TR', {
            style: 'decimal',
            maximumFractionDigits: 0
        }).format(totalBudget);

        calculatedPriceDisplay.textContent = `${formattedBudget} TL`;

        if (calculatedBudgetInput) {
            calculatedBudgetInput.value = totalBudget;
        }
    }

    // İlk çalıştırma
    calculateBudget();

    // ─── 2. LEAD FORM & WHATSAPP OTOMASYONU ─────────────────────
    const wizardForm = document.getElementById('wizardLeadForm');
    const wizardCard = document.getElementById('wizardCard');

    if (wizardForm) {
        wizardForm.addEventListener('submit', (e) => {
            e.preventDefault();

            const name = document.getElementById('leadName')?.value || 'Değerli Müşteri';
            const phone = document.getElementById('leadPhone')?.value || '';
            const city = document.getElementById('leadCity')?.value || 'Belirtilmedi';
            const squareM = areaRange ? areaRange.value : '100';
            const budgetText = calculatedPriceDisplay ? calculatedPriceDisplay.textContent : '0 TL';

            // WhatsApp Webhook Yönlendirme Metni
            const waMessage = `Merhaba Nova Epoksi,%0A%0A*YENİ TEKLİF TALEBİ*%0A• *Müşteri:* ${encodeURIComponent(name)}%0A• *Telefon:* ${encodeURIComponent(phone)}%0A• *Şehir:* ${encodeURIComponent(city)}%0A• *Uygulama:* ${encodeURIComponent(currentServiceName)}%0A• *Alan:* ${squareM} m²%0A• *Tahmini Bütçe:* ${encodeURIComponent(budgetText)}%0A%0AKeşif randevusu için iletişime geçmek istiyorum.`;

            // Form Başarı Animasyon Alanı
            if (wizardCard) {
                wizardCard.innerHTML = `
                    <div style="text-align: center; padding: 32px 16px;">
                        <div style="width: 72px; height: 72px; background: #DCFCE7; color: #166534; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 2.2rem; margin: 0 auto 20px; border: 1px solid #BBF7D0;">
                            ✓
                        </div>
                        <h3 style="font-size: 1.5rem; margin-bottom: 8px; color: #0F172A;">Keşif Talebiniz Alındı!</h3>
                        <p style="color: #475569; font-size: 0.95rem; margin-bottom: 24px;">Sayın <strong>${name}</strong>, <strong>${squareM} m²</strong> ${currentServiceName} projeniz için tahmini bütçe (<strong>${budgetText}</strong>) kaydedilmiştir. Ekibimiz 15 dakika içinde keşif randevusu için arayacaktır.</p>
                        <a href="https://wa.me/905070871789?text=${waMessage}" target="_blank" rel="noopener noreferrer" class="btn btn-primary" style="width: 100%;">
                            WhatsApp İle Anında Görüşün
                        </a>
                    </div>
                `;
            }

            // WhatsApp Sayfasına Aç
            setTimeout(() => {
                window.open(`https://wa.me/905070871789?text=${waMessage}`, '_blank');
            }, 600);
        });
    }

});
