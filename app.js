/* ═══════════════════════════════════════════════════════════════
   NOVA DIGITAL — APP.JS
   ───────────────────────────────────────────────────────────────
   Mobil nav, scroll reveal, smooth scroll, WhatsApp linkleri,
   form UX, portfolio filter ve nav scroll efekti.
   ═══════════════════════════════════════════════════════════════ */

document.addEventListener('DOMContentLoaded', () => {

    // ─── Preloader (Bekleme Ekranı) ──────────────────────────
    const preloader = document.getElementById('preloader');
    if (preloader) {
        const hidePreloader = () => {
            preloader.classList.add('fade-out');
            setTimeout(() => preloader.remove(), 400);
        };
        window.addEventListener('load', hidePreloader);
        setTimeout(hidePreloader, 1000); // Max 1sn bekleme koruması
    }

    // ─── WhatsApp Linklerini Config'den Oluştur ──────────────
    const wpUrl = `https://wa.me/${SITE_CONFIG.whatsapp.numara}?text=${encodeURIComponent(SITE_CONFIG.whatsapp.mesaj)}`;

    const wpElements = ['whatsappFab', 'whatsappCta', 'contactWhatsapp', 'footerWhatsapp'];
    wpElements.forEach(id => {
        const el = document.getElementById(id);
        if (el) {
            el.href = wpUrl;
            el.target = '_blank';
            el.rel = 'noopener noreferrer';
        }
    });

    // E-posta linkini config'den al
    const emailEl = document.getElementById('contactEmail');
    if (emailEl) {
        emailEl.href = `mailto:${SITE_CONFIG.firma.eposta}`;
        emailEl.textContent = SITE_CONFIG.firma.eposta;
    }


    // ─── Mobil Menü Drawer ───────────────────────────────────
    const hamburger = document.getElementById('hamburger');
    const mobileMenu = document.getElementById('mobileMenu');
    const mobileMenuClose = document.getElementById('mobileMenuClose');

    const closeMobileMenu = () => {
        if (hamburger) hamburger.classList.remove('active');
        if (mobileMenu) mobileMenu.classList.remove('active');
        if (hamburger) hamburger.setAttribute('aria-expanded', 'false');
        document.body.style.overflow = '';
    };

    const openMobileMenu = () => {
        if (hamburger) hamburger.classList.add('active');
        if (mobileMenu) mobileMenu.classList.add('active');
        if (hamburger) hamburger.setAttribute('aria-expanded', 'true');
        document.body.style.overflow = 'hidden';
    };

    if (hamburger && mobileMenu) {
        hamburger.addEventListener('click', () => {
            const isActive = mobileMenu.classList.contains('active');
            if (isActive) closeMobileMenu();
            else openMobileMenu();
        });
    }

    if (mobileMenuClose) {
        mobileMenuClose.addEventListener('click', closeMobileMenu);
    }

    if (mobileMenu) {
        // Menü içi linkler tıklanınca kapat
        mobileMenu.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', closeMobileMenu);
        });

        // ESC tuşuna basılınca kapat
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && mobileMenu.classList.contains('active')) {
                closeMobileMenu();
            }
        });
    }


    // ─── Nav Scroll Efekti ───────────────────────────────────
    const siteNav = document.getElementById('siteNav');

    if (siteNav) {
        let lastScroll = 0;
        const onScroll = () => {
            const scrollY = window.scrollY;
            if (scrollY > 50) {
                siteNav.classList.add('scrolled');
            } else {
                siteNav.classList.remove('scrolled');
            }
            lastScroll = scrollY;
        };
        window.addEventListener('scroll', onScroll, { passive: true });
        onScroll();
    }


    // ─── Smooth Scroll (Anchor Links) ────────────────────────
    document.querySelectorAll('a[href^="#"]').forEach(link => {
        link.addEventListener('click', (e) => {
            const href = link.getAttribute('href');
            if (href === '#') return;
            const target = document.querySelector(href);
            if (target) {
                e.preventDefault();
                const navHeight = siteNav ? siteNav.offsetHeight : 0;
                const top = target.getBoundingClientRect().top + window.scrollY - navHeight - 16;
                window.scrollTo({ top, behavior: 'smooth' });
            }
        });
    });


    // ─── Scroll Reveal (IntersectionObserver) ────────────────
    const revealElements = document.querySelectorAll('.reveal');

    if (revealElements.length > 0 && 'IntersectionObserver' in window) {
        const revealObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                    revealObserver.unobserve(entry.target);
                }
            });
        }, {
            threshold: 0.1,
            rootMargin: '0px 0px -40px 0px'
        });

        revealElements.forEach(el => revealObserver.observe(el));
    } else {
        // Fallback: Observer yoksa hepsini göster
        revealElements.forEach(el => el.classList.add('visible'));
    }


    // ─── Portfolio Filter ────────────────────────────────────
    const filterBtns = document.querySelectorAll('.filter-btn');
    const portfolioCards = document.querySelectorAll('.portfolio-card');

    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            // Active state
            filterBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');

            const filter = btn.dataset.filter;

            portfolioCards.forEach(card => {
                if (filter === 'all' || card.dataset.category === filter) {
                    card.style.display = '';
                    // Re-trigger reveal
                    setTimeout(() => card.classList.add('visible'), 50);
                } else {
                    card.style.display = 'none';
                }
            });
        });
    });


    // ─── ScrollSpy (Sayfa Kaydırıldıkça Menü Vurgulama) ─────
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-menu a[href^="#"]');

    if (sections.length > 0 && navLinks.length > 0 && 'IntersectionObserver' in window) {
        const spyObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const id = entry.target.getAttribute('id');
                    navLinks.forEach(link => {
                        if (link.getAttribute('href') === `#${id}`) {
                            link.classList.add('active');
                        } else {
                            link.classList.remove('active');
                        }
                    });
                }
            });
        }, { threshold: 0.3 });

        sections.forEach(sec => spyObserver.observe(sec));
    }


    // ─── İletişim Formu ──────────────────────────────────────
    const contactForm = document.getElementById('contactForm');

    if (contactForm) {
        // Girdi yapılınca hatayı kaldır
        contactForm.querySelectorAll('.form-input').forEach(input => {
            input.addEventListener('input', () => input.classList.remove('invalid'));
        });

        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();

            const name = document.getElementById('formName');
            const phone = document.getElementById('formPhone');

            let isValid = true;

            if (!name.value.trim() || name.value.trim().length < 2) {
                name.classList.add('invalid');
                name.focus();
                isValid = false;
            }

            const cleanPhone = phone.value.replace(/\D/g, '');
            if (!phone.value.trim() || cleanPhone.length < 10) {
                phone.classList.add('invalid');
                if (isValid) phone.focus();
                isValid = false;
            }

            if (!isValid) return;

            // WhatsApp'a yönlendir (form verilerini mesaja ekle)
            const service = document.getElementById('formService');
            const business = document.getElementById('formBusiness');
            const message = document.getElementById('formMessage');

            let wpMessage = `Merhaba, Nova Digital üzerinden iletişime geçiyorum.\n\n`;
            wpMessage += `Ad: ${name.value.trim()}\n`;
            if (business && business.value.trim()) wpMessage += `İşletme: ${business.value.trim()}\n`;
            wpMessage += `Telefon: ${phone.value.trim()}\n`;
            if (service && service.value && service.options?.[service.selectedIndex]) {
                wpMessage += `Hizmet: ${service.options[service.selectedIndex].text}\n`;
            }
            if (message && message.value.trim()) wpMessage += `\nMesaj: ${message.value.trim()}`;

            const formWpUrl = `https://wa.me/${SITE_CONFIG.whatsapp.numara}?text=${encodeURIComponent(wpMessage)}`;
            window.open(formWpUrl, '_blank', 'noopener,noreferrer');

            // Formu temizle
            contactForm.reset();
        });
    }



                // ─── Horizontal Portfolio Carousel (Strict Hold & Drag, Immediate Release Lock) ───
    const track = document.getElementById('portfolioTrack');
    const prevBtn = document.getElementById('portfolioPrev');
    const nextBtn = document.getElementById('portfolioNext');
    const dots = document.querySelectorAll('.carousel-dot');

    if (track && prevBtn && nextBtn) {
        const getSlideWidth = () => {
            const slide = track.querySelector('.portfolio-slide');
            return slide ? slide.offsetWidth + 24 : 340;
        };

        prevBtn.addEventListener('click', (e) => {
            e.preventDefault();
            track.scrollBy({ left: -getSlideWidth(), behavior: 'smooth' });
        });

        nextBtn.addEventListener('click', (e) => {
            e.preventDefault();
            track.scrollBy({ left: getSlideWidth(), behavior: 'smooth' });
        });

        // Indicators update
        track.addEventListener('scroll', () => {
            const index = Math.round(track.scrollLeft / getSlideWidth());
            dots.forEach((dot, i) => {
                dot.classList.toggle('active', i === index);
            });
        }, { passive: true });

        // Strict Hold-and-Drag Logic
        let isDragging = false;
        let startX = 0;
        let startScrollLeft = 0;
        let hasMoved = false;

                const stopDrag = () => {
            if (!isDragging) return;
            isDragging = false;
            track.classList.remove('dragging');

            // Eğer kullanıcı gerçekten sürüklemediyse (sadece tıkladıysa) karuseli hareket ettirme!
            if (hasMoved) {
                track.style.scrollSnapType = 'x mandatory';
                track.style.scrollBehavior = 'smooth';
                const nearestIndex = Math.round(track.scrollLeft / getSlideWidth());
                track.scrollTo({ left: nearestIndex * getSlideWidth(), behavior: 'smooth' });
            } else {
                track.style.scrollSnapType = 'x mandatory';
                track.style.scrollBehavior = 'smooth';
            }
        };

        const startDrag = (pageX) => {
            isDragging = true;
            hasMoved = false;
            track.classList.add('dragging');
            track.style.scrollSnapType = 'none';
            track.style.scrollBehavior = 'auto';
            startX = pageX - track.offsetLeft;
            startScrollLeft = track.scrollLeft;
        };

        const moveDrag = (pageX) => {
            if (!isDragging) return;
            const x = pageX - track.offsetLeft;
            const distance = (x - startX);
            if (Math.abs(distance) > 4) {
                hasMoved = true;
                track.scrollLeft = startScrollLeft - distance;
            }
        };

                // Touch Events: Mobilde tamamen yerel CSS 60fps swipe bırakan temiz mantık
        const isMobileDevice = ('ontouchstart' in window) || (navigator.maxTouchPoints > 0);

        if (!isMobileDevice) {
            track.addEventListener('mousedown', (e) => {
                if (e.button !== 0) return;
                startDrag(e.pageX);
            });
            track.addEventListener('mouseleave', stopDrag);
            track.addEventListener('mouseup', stopDrag);
            track.addEventListener('mousemove', (e) => {
                if (isDragging) {
                    e.preventDefault();
                    moveDrag(e.pageX);
                }
            });
        }

        track.addEventListener('touchend', stopDrag, { passive: true });
        track.addEventListener('touchcancel', stopDrag, { passive: true });
        track.addEventListener('touchmove', (e) => {
            if (isDragging && e.touches.length === 1) {
                moveDrag(e.touches[0].pageX);
            }
        }, { passive: true });

        // Link Tıklama Koruması: Sadece sürükleme yoksa link açılır
        track.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', (e) => {
                if (hasMoved) {
                    e.preventDefault();
                    e.stopPropagation();
                }
            });
        });

        dots.forEach((dot, i) => {
            dot.addEventListener('click', (e) => {
                e.preventDefault();
                track.scrollTo({ left: i * getSlideWidth(), behavior: 'smooth' });
            });
        });
    }

    // ─── Blog Article Reader Modal ───────────────────────────
    const blogModal = document.getElementById('blogModal');
    const blogModalClose = document.getElementById('blogModalClose');
    const blogModalBody = document.getElementById('blogModalBody');
    const blogBtns = document.querySelectorAll('.open-blog-btn');

    const articlesData = {
        fiyatlar: {
            badge: "2026 Web Rehberi",
            title: "2026 Web Sitesi Fiyatları Rehberi",
            html: `
                <p>İşletmeniz için bir web sitesi yaptırırken karşılaştığınız fiyat farkları kafa karıştırıcı olabilir. 4.000 TL'den başlayıp 100.000 TL'ye kadar çıkan bu skalada doğru kararı nasıl vermelisiniz?</p>
                <p><strong>Bütçenizi Belirlerken Dikkat Etmeniz Gereken 3 Temel Kriter:</strong></p>
                <ul>
                    <li><strong>Altyapı ve Lisans Maliyeti:</strong> SSL sertifikası, alan adı ve yüksek hızlı sunucu dahiliyeti.</li>
                    <li><strong>Mobil & SEO Uyumluluğu:</strong> Web sitenizin Google arama sonuçlarında üst sıralara çıkması için gerekli kodlama kalitesi.</li>
                    <li><strong>Yönetim Paneli Kolaylığı:</strong> İçeriklerinizi ve ürünlerinizi kendinizin kolayca güncelleyebilmesi.</li>
                </ul>
                <p>Nova Digital olarak <strong>Standart Web Paketini 4.999 TL</strong>, <strong>Kurumsal Yönetim Panelli Paketini ise 9.999 TL</strong> olarak şeffaf fiyatlandırma politikasıyla sunuyoruz.</p>
                <div class="blog-article-cta">
                    <span>Siteniz için hemen teklif almak ister misiniz?</span>
                    <a href="#iletisim" onclick="document.getElementById('blogModal').classList.remove('active');" class="btn btn-primary btn-sm">Teklif Al</a>
                </div>
            `
        },
        turizm: {
            badge: "Turizm & Otel SEO",
            title: "Turizm & Otel Web Sitesi Nasıl Yapılmalı?",
            html: `
                <p>Otel ve konaklama tesisleri için web sitesi sadece bir tanıtım aracı değil, komisyonsuz doğrudan rezervasyon getiren bir satış kanalıdır.</p>
                <p><strong>Başarılı Bir Otel Web Sitesinin 4 Olmazsa Olmazı:</strong></p>
                <ul>
                    <li><strong>Çok Dilli Altyapı:</strong> Türkçe, İngilizce, Almanca ve Rusça dil seçenekleri.</li>
                    <li><strong>Yüksek Çözünürlüklü Oda Galerileri:</strong> Misafirlerin odaları ve tesis imkanlarını saniyeler içinde keşfetmesi.</li>
                    <li><strong>Hızlı WhatsApp / Rezervasyon Yönlendirmesi:</strong> Acentelere komisyon ödemeden doğrudan müşteriyle iletişim kurma.</li>
                    <li><strong>Google Harita ve Konum Entegrasyonu:</strong> Tesisin ulaşım kolaylığını net şekilde gösterme.</li>
                </ul>
                <p>Nova Digital kurumsal otel web altyapıları ile tesisinizin doluluk oranını doğrudan dijitalden artırıyoruz.</p>
                <div class="blog-article-cta">
                    <span>Oteliniz için profesyonel web altyapısını konuşalım:</span>
                    <a href="#iletisim" onclick="document.getElementById('blogModal').classList.remove('active');" class="btn btn-primary btn-sm">Projenizi Konuşalım</a>
                </div>
            `
        },
        reklam: {
            badge: "Google Ads & Meta Rehberi",
            title: "Google Ads ile Müşteri Kazanma Yolları",
            html: `
                <p>Dijital reklamcılıkta en büyük hata, bütçeyi doğru hedef kitleye ulaştırmadan harcamaktır. Google Ads reklamları ile doğrudan ürün ve hizmetinizi arayan müşterilere ulaşırsınız.</p>
                <p><strong>Reklam Bütçenizi Katlayan 3 Önemli Strateji:</strong></p>
                <ul>
                    <li><strong>Negatif Anahtar Kelime Kullanımı:</strong> Gereksiz aramalarda reklamınızın çıkmasını engelleyerek bütçenizi korur.</li>
                    <li><strong>Açılış Sayfası (Landing Page) Uyumu:</strong> Reklama tıklayan müşterinin aradığı cevabı saniyeler içinde bulması dönüşümü %300 artırır.</li>
                    <li><strong>WhatsApp ve Arama Dönüşüm Takibi:</strong> Hangi kelimeden kaç telefon geldiğini ölçerek bütçeyi kazandıran kelimelere aktarma.</li>
                </ul>
                <p>Nova Digital reklam yönetimi hizmetimizle bütçenizi boşa harcamadan dönüşüm odaklı kampanyalar kurguluyoruz.</p>
                <div class="blog-article-cta">
                    <span>Reklam bütçenizi büyütmek için ücretsiz analiz isteyin:</span>
                    <a href="#iletisim" onclick="document.getElementById('blogModal').classList.remove('active');" class="btn btn-primary btn-sm">Ücretsiz Analiz Al</a>
                </div>
            `
        }
    };

    if (blogModal && blogModalClose) {
        blogBtns.forEach(btn => {
            btn.addEventListener('click', (e) => {
                e.preventDefault();
                const key = btn.getAttribute('data-article');
                const article = articlesData[key];
                if (article) {
                    blogModalBody.innerHTML = `
                        <span class="article-badge">${article.badge}</span>
                        <h2>${article.title}</h2>
                        ${article.html}
                    `;
                    blogModal.classList.add('active');
                    document.body.style.overflow = 'hidden';
                }
            });
        });

        const closeBlogModal = () => {
            blogModal.classList.remove('active');
            document.body.style.overflow = '';
        };

        blogModalClose.addEventListener('click', closeBlogModal);
        blogModal.addEventListener('click', (e) => {
            if (e.target === blogModal) closeBlogModal();
        });
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && blogModal.classList.contains('active')) {
                closeBlogModal();
            }
        });
    }
});