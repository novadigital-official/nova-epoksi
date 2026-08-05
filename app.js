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



            // ─── Horizontal Portfolio Carousel (Zero-Jitter, Pure Touch & Drag) ───
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

        // Update indicators strictly on scroll
        track.addEventListener('scroll', () => {
            const index = Math.round(track.scrollLeft / getSlideWidth());
            dots.forEach((dot, i) => {
                dot.classList.toggle('active', i === index);
            });
        }, { passive: true });

        // Mouse Drag & Touch Swipe (Yalnızca kullanıcı müdahale ettiğinde çalışır)
        let isDown = false;
        let startX = 0;
        let scrollLeftPos = 0;
        let hasDragged = false;

        track.addEventListener('mousedown', (e) => {
            isDown = true;
            hasDragged = false;
            track.classList.add('dragging');
            startX = e.pageX - track.offsetLeft;
            scrollLeftPos = track.scrollLeft;
        });

        track.addEventListener('mouseleave', () => {
            isDown = false;
            track.classList.remove('dragging');
        });

        track.addEventListener('mouseup', () => {
            isDown = false;
            track.classList.remove('dragging');
        });

        track.addEventListener('mousemove', (e) => {
            if (!isDown) return;
            const x = e.pageX - track.offsetLeft;
            const walk = (x - startX) * 1.5;
            if (Math.abs(walk) > 6) {
                hasDragged = true;
                e.preventDefault();
                track.scrollLeft = scrollLeftPos - walk;
            }
        });

        // Tıklama esnasında sürükleme yoksa linki aç, sürükleme varsa engelle
        track.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', (e) => {
                if (hasDragged) {
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
});