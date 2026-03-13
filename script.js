/* ============================================================
   REIGA SARI TRAVEL LOVINA — script.js
   ============================================================ */

(function () {
  'use strict';

  /* ── 1. Language Toggle ─────────────────────────────────── */
  let currentLang = 'en';

  const langToggle = document.getElementById('langToggle');
  const langEnSpan = langToggle.querySelector('.lang-en');
  const langIdSpan = langToggle.querySelector('.lang-id');

  function applyLanguage(lang) {
    currentLang = lang;
    const attr = data-${lang};
    const elements = document.querySelectorAll([${attr}]);

    elements.forEach(el => {
      const text = el.getAttribute(attr);
      if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
        el.placeholder = text;
      } else if (el.tagName === 'OPTION') {
        el.textContent = text;
      } else {
        el.innerHTML = text;
      }
    });

    // Update toggle UI
    if (lang === 'en') {
      langEnSpan.classList.add('active');
      langIdSpan.classList.remove('active');
    } else {
      langIdSpan.classList.add('active');
      langEnSpan.classList.remove('active');
    }

    // Update html lang attribute
    document.documentElement.lang = lang === 'en' ? 'en' : 'id';
  }

  langToggle.addEventListener('click', () => {
    applyLanguage(currentLang === 'en' ? 'id' : 'en');
  });

  /* ── 2. Navbar ──────────────────────────────────────────── */
  const navbar = document.getElementById('navbar');
  const hamburger = document.getElementById('hamburger');
  const navLinks = document.getElementById('navLinks');

  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  }, { passive: true });

  hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navLinks.classList.toggle('open');
  });

  // Close mobile menu on link click
  navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      hamburger.classList.remove('active');
      navLinks.classList.remove('open');
    });
  });

  /* ── 3. Hero Parallax ───────────────────────────────────── */
  const heroBg = document.getElementById('heroBg');

  window.addEventListener('scroll', () => {
    const scrolled = window.scrollY;
    if (heroBg && scrolled < window.innerHeight * 1.5) {
      heroBg.style.transform = translateY(${scrolled * 0.35}px);
    }
  }, { passive: true });

  /* ── 4. Hero Particles ──────────────────────────────────── */
  const heroParticles = document.getElementById('heroParticles');

  function createParticles() {
    if (!heroParticles) return;
    const count = 40;
    for (let i = 0; i < count; i++) {
      const p = document.createElement('div');
      p.className = 'particle';
      p.style.cssText = `
        left: ${Math.random() * 100}%;
        bottom: ${Math.random() * 20}%;
        width: ${Math.random() * 3 + 1}px;
        height: ${Math.random() * 3 + 1}px;
        animation-duration: ${Math.random() * 12 + 8}s;
        animation-delay: ${Math.random() * 8}s;
      `;
      heroParticles.appendChild(p);
    }
  }
  createParticles();

  /* ── 5. Scroll Reveal ───────────────────────────────────── */
  function initReveal() {
    const revealEls = document.querySelectorAll(
      '.why-card, .pkg-card, .testi-card, .gallery-item, .section-header, .bf-item, .form-card'
    );

    revealEls.forEach((el, i) => {
      el.classList.add('reveal');
      // Stagger by position in parent
      const siblings = el.parentElement.children;
      const idx = Array.from(siblings).indexOf(el);
      if (idx < 3) el.classList.add(reveal-delay-${idx + 1});
    });

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1, rootMargin: '0px 0px -60px 0px' });

    document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
  }
  initReveal();

  /* ── 6. Gallery ─────────────────────────────────────────── */
  const galleryData = [
    { url: 'https://images.unsplash.com/photo-1682687221248-3116ba6ab483?w=400&q=80', cat: 'diving', label: 'Snorkeling Lovina' },
    { url: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=400&q=80', cat: 'diving', label: 'Scuba Diving' },
    { url: 'https://images.unsplash.com/photo-1559128010-7c1ad6e1b6a5?w=400&q=80', cat: 'nature', label: 'Bali Sunset' },
    { url: 'https://images.unsplash.com/photo-1573790387438-4da905039392?w=400&q=80', cat: 'land', label: 'Batur Volcano' },
    { url: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&q=80', cat: 'land', label: 'Ijen Tour' },
    { url: 'https://images.unsplash.com/photo-1539635278303-d4002c07eae3?w=400&q=80', cat: 'nature', label: 'Lovina Beach' },
    { url: 'https://images.unsplash.com/photo-1518548419970-58e3b4079ab2?w=400&q=80', cat: 'diving', label: 'Coral Reef' },
    { url: 'https://images.unsplash.com/photo-1605649487212-47bdab064df7?w=400&q=80', cat: 'nature', label: 'Rice Terraces' },
    { url: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=400&q=80', cat: 'nature', label: 'Bali Culture' },
    { url: 'https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?w=400&q=80', cat: 'diving', label: 'Sea Turtle' },
    { url: 'https://images.unsplash.com/photo-1588666309990-d68f08e3d4a6?w=400&q=80', cat: 'land', label: 'Temple Tour' },
    { url: 'https://images.unsplash.com/photo-1518105779142-d975f22f1b0a?w=400&q=80', cat: 'nature', label: 'Waterfall' },
    { url: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&q=80', cat: 'land', label: 'Mountain Trek' },
    { url: 'https://images.unsplash.com/photo-1583212292454-1fe6229603b7?w=400&q=80', cat: 'diving', label: 'Dolphins Lovina' },
    { url: 'https://images.unsplash.com/photo-1501386761578-eac5c94b800a?w=400&q=80', cat: 'land', label: 'Sunrise Jeep' },
    { url: 'https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?w=400&q=80', cat: 'nature', label: 'Forest Trail' },
    { url: 'https://images.unsplash.com/photo-1559825481-12a05cc00344?w=400&q=80', cat: 'nature', label: 'Tropical Beach' },
    { url: 'https://images.unsplash.com/photo-1580137189272-c9379f8864fd?w=400&q=80', cat: 'diving', label: 'Night Dive' },
    { url: 'https://images.unsplash.com/photo-1602940659805-770d1b3b9911?w=400&q=80', cat: 'land', label: 'Volcano Lake' },
    { url: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&q=80', cat: 'nature', label: 'Rice Paddies' },
  ];

  const galleryGrid = document.getElementById('galleryGrid');
  const filterBtns = document.querySelectorAll('.filter-btn');

  let galleryImages = [];

  function buildGallery() {
    if (!galleryGrid) return;
    galleryGrid.innerHTML = '';
    galleryImages = [];

    galleryData.forEach((item, idx) => {
      const div = document.createElement('div');
      div.className = 'gallery-item reveal';
      div.dataset.cat = item.cat;
      div.dataset.idx = idx;

      div.innerHTML = `
        <img src="${item.url}" alt="${item.label}" loading="lazy" />
        <div class="gallery-item-overlay">
          <span>${item.label}</span>
        </div>
      `;

      div.addEventListener('click', () => openLightbox(idx));
      galleryGrid.appendChild(div);
      galleryImages.push(item);
    });

    // Re-run reveal for new elements
    setTimeout(() => {
      document.querySelectorAll('.gallery-item.reveal').forEach(el => {
        const observer = new IntersectionObserver((entries) => {
          entries.forEach(e => {
            if (e.isIntersecting) {
              e.target.classList.add('visible');
              observer.unobserve(e.target);
            }
          });
        }, { threshold: 0.05 });
        observer.observe(el);
      });
    }, 100);
  }
  buildGallery();

  function filterGallery(filter) {
    const items = galleryGrid.querySelectorAll('.gallery-item');
    items.forEach(item => {
      const cat = item.dataset.cat;
      const show = filter === 'all' || cat === filter;
      if (show) {
        item.classList.remove('hidden');
        item.style.opacity = '0';
        item.style.transform = 'scale(0.93)';
        requestAnimationFrame(() => {
          item.style.transition = 'opacity 0.4s, transform 0.4s';
          item.style.opacity = '1';
          item.style.transform = 'scale(1)';
        });
      } else {
        item.classList.add('hidden');
      }
    });
  }

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      filterGallery(btn.dataset.filter);
    });
  });

  /* ── 7. Lightbox ─────────────────────────────────────────── */
  const lightbox = document.getElementById('lightbox');
  const lbImg = document.getElementById('lbImg');
  const lbClose = document.getElementById('lbClose');
  const lbPrev = document.getElementById('lbPrev');
  const lbNext = document.getElementById('lbNext');
  let currentLbIdx = 0;

  function openLightbox(idx) {
    currentLbIdx = idx;
    lbImg.src = galleryImages[idx].url.replace('w=400', 'w=1200');
    lbImg.alt = galleryImages[idx].label;
    lightbox.classList.add('open');
    document.body.style.overflow = 'hidden';
  }

  function closeLightbox() {
    lightbox.classList.remove('open');
    document.body.style.overflow = '';
    setTimeout(() => { lbImg.src = ''; }, 300);
  }

  function lbNavigate(dir) {
    currentLbIdx = (currentLbIdx + dir + galleryImages.length) % galleryImages.length;
    lbImg.style.opacity = '0';
    setTimeout(() => {
      lbImg.src = galleryImages[currentLbIdx].url.replace('w=400', 'w=1200');
      lbImg.alt = galleryImages[currentLbIdx].label;
      lbImg.style.opacity = '1';
    }, 200);
    lbImg.style.transition = 'opacity 0.2s';
  }

  lbClose.addEventListener('click', closeLightbox);
  lbPrev.addEventListener('click', () => lbNavigate(-1));
  lbNext.addEventListener('click', () => lbNavigate(1));

  lightbox.addEventListener('click', (e) => {
    if (e.target === lightbox) closeLightbox();
  });

  document.addEventListener('keydown', (e) => {
    if (!lightbox.classList.contains('open')) return;
    if (e.key === 'Escape') closeLightbox();
    if (e.key === 'ArrowLeft') lbNavigate(-1);
    if (e.key === 'ArrowRight') lbNavigate(1);
  });

  /* ── 8. Testimonial Slider ──────────────────────────────── */
  const testiTrack = document.getElementById('testiTrack');
  const testiDots = document.getElementById('testiDots');
  const testiPrev = document.getElementById('testiPrev');
  const testiNext = document.getElementById('testiNext');

  let testiIdx = 0;
  let testiAutoplay;
  let itemsPerView = 3;

  function getItemsPerView() {
    if (window.innerWidth < 768) return 1;
    if (window.innerWidth < 1024) return 2;
    return 3;
  }

  function updateTesti() {
    itemsPerView = getItemsPerView();
    const cards = testiTrack.querySelectorAll('.testi-card');
    const total = cards.length;
    const maxIdx = Math.max(0, total - itemsPerView);
    testiIdx = Math.min(testiIdx, maxIdx);

    const cardWidth = cards[0].offsetWidth;
    const gap = 24;
    testiTrack.style.transform = translateX(-${testiIdx * (cardWidth + gap)}px);

    // Update dots
    testiDots.innerHTML = '';
    const dotCount = maxIdx + 1;
    for (let i = 0; i < dotCount; i++) {
      const dot = document.createElement('button');
      dot.className = 'testi-dot' + (i === testiIdx ? ' active' : '');
      dot.setAttribute('aria-label', Go to slide ${i + 1});
      dot.addEventListener('click', () => {
        testiIdx = i;
        updateTesti();
        resetAutoplay();
      });
      testiDots.appendChild(dot);
    }
  }

  function testiNavigate(dir) {
    const cards = testiTrack.querySelectorAll('.testi-card');
    const maxIdx = Math.max(0, cards.length - getItemsPerView());
    testiIdx = Math.max(0, Math.min(testiIdx + dir, maxIdx));
    updateTesti();
  }

  testiPrev.addEventListener('click', () => { testiNavigate(-1); resetAutoplay(); });
  testiNext.addEventListener('click', () => { testiNavigate(1); resetAutoplay(); });

  function startAutoplay() {
    testiAutoplay = setInterval(() => {
      const cards = testiTrack.querySelectorAll('.testi-card');
      const maxIdx = Math.max(0, cards.length - getItemsPerView());
      if (testiIdx >= maxIdx) testiIdx = -1;
      testiNavigate(1);
    }, 5000);
  }

  function resetAutoplay() {
    clearInterval(testiAutoplay);
    startAutoplay();
  }

  // Touch/swipe for testimonials
  let tStartX = 0;
  testiTrack.addEventListener('touchstart', (e) => { tStartX = e.touches[0].clientX; }, { passive: true });
  testiTrack.addEventListener('touchend', (e) => {
    const diff = tStartX - e.changedTouches[0].clientX;
    if (Math.abs(diff) > 50) { testiNavigate(diff > 0 ? 1 : -1); resetAutoplay(); }
  }, { passive: true });

  setTimeout(() => { updateTesti(); startAutoplay(); }, 200);
  window.addEventListener('resize', () => { updateTesti(); }, { passive: true });

  /* ── 9. Package card → booking form autofill ────────────── */
  const pkgBookBtns = document.querySelectorAll('.pkg-book-btn');
  const tourPackageSelect = document.getElementById('tourPackage');

  pkgBookBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      const pkg = btn.dataset.package;
      if (pkg && tourPackageSelect) {
        tourPackageSelect.value = pkg;
        tourPackageSelect.classList.add('has-value');
      }
    });
  });

  /* ── 10. Booking Form / WhatsApp ────────────────────────── */
  const bookingForm = document.getElementById('bookingForm');

  // Handle select floating label
  if (tourPackageSelect) {
    tourPackageSelect.addEventListener('change', () => {
      if (tourPackageSelect.value) {
        tourPackageSelect.classList.add('has-value');
      } else {
        tourPackageSelect.classList.remove('has-value');
      }
    });
  }

  if (bookingForm) {
    bookingForm.addEventListener('submit', (e) => {
      e.preventDefault();

      const name = document.getElementById('fullName').value.trim();
      const date = document.getElementById('tourDate').value;
      const persons = document.getElementById('persons').value;
      const pkg = document.getElementById('tourPackage').value;
      const notes = document.getElementById('notes').value.trim();

      if (!name || !date || !persons || !pkg) {
        showFormError('Please fill in all required fields.');
        return;
      }

      const formattedDate = date
        ? new Date(date).toLocaleDateString('en-GB', { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' })
        : 'Not specified';

      const message = [
        '🌴 TOUR BOOKING REQUEST',
        '━━━━━━━━━━━━━━━━━━━━',
        👤 *Name:* ${name},
        📅 *Date:* ${formattedDate},
        🎯 *Package:* ${pkg},
        👥 *Persons:* ${persons},
        notes ? 📝 *Notes:* ${notes} : '',
        '━━━━━━━━━━━━━━━━━━━━',
        'Hello Reiga Sari Travel! I\'d like to book the above tour. Please confirm availability. Thank you! 🙏',
      ].filter(Boolean).join('\n');

      const waUrl = https://wa.me/6281252815242?text=${encodeURIComponent(message)};
      window.open(waUrl, '_blank');
    });
  }

  function showFormError(msg) {
    const existing = document.querySelector('.form-error');
    if (existing) existing.remove();
    const err = document.createElement('p');
    err.className = 'form-error';
    err.textContent = msg;
    err.style.cssText = 'color: #ef4444; font-size: 0.85rem; margin-top: -0.5rem;';
    bookingForm.prepend(err);
    setTimeout(() => err.remove(), 4000);
  }

  /* ── 11. Section headers centered ──────────────────────── */
  document.querySelectorAll('.section-header').forEach(hdr => {
    const section = hdr.closest('section');
    if (section && (section.classList.contains('why-us') || section.classList.contains('packages') || section.classList.contains('gallery-section') || section.classList.contains('testimonials'))) {
      hdr.classList.add('centered');
    }
  });

  /* ── 12. Active nav highlight on scroll ─────────────────── */
  const sections = document.querySelectorAll('section[id]');
  const navItems = document.querySelectorAll('.nav-links a[href^="#"]');

  const navObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const id = entry.target.id;
        navItems.forEach(link => {
          link.style.color = link.getAttribute('href') === #${id} ? 'var(--gold)' : '';
        });
      }
    });
  }, { threshold: 0.4 });

  sections.forEach(s => navObserver.observe(s));

  /* ── 13. Smooth scroll offset for fixed navbar ───────────── */
  document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener('click', (e) => {
      const id = link.getAttribute('href').slice(1);
      const target = document.getElementById(id);
      if (!target) return;
      e.preventDefault();
      const navH = parseInt(getComputedStyle(document.documentElement).getPropertyValue('--nav-h'));
      const top = target.getBoundingClientRect().top + window.scrollY - navH - 16;
      window.scrollTo({ top, behavior: 'smooth' });
    });
  });

  /* ── 14. WhatsApp float entrance ────────────────────────── */
  const waFloat = document.getElementById('waFloat');
  if (waFloat) {
    waFloat.style.transform = 'scale(0) translateY(20px)';
    waFloat.style.opacity = '0';
    waFloat.style.transition = 'all 0.5s cubic-bezier(0.34, 1.56, 0.64, 1)';
    setTimeout(() => {
      waFloat.style.transform = '';
      waFloat.style.opacity = '1';
    }, 2000);
  }

  /* ── 15. Subtle gold shimmer on section titles ───────────── */
  const goldTitles = document.querySelectorAll('.section-title em, .title-line.italic');
  goldTitles.forEach(el => {
    el.style.backgroundImage = 'linear-gradient(90deg, #D4AF37, #F5D278, #D4AF37, #A8841A, #D4AF37)';
    el.style.backgroundSize = '300% auto';
    el.style.webkitBackgroundClip = 'text';
    el.style.backgroundClip = 'text';
    el.style.webkitTextFillColor = 'transparent';
    el.style.animation = 'goldShimmer 6s linear infinite';
  });

  // Inject shimmer keyframes
  const style = document.createElement('style');
  style.textContent = `
    @keyframes goldShimmer {
      0% { background-position: 0% center; }
      100% { background-position: 300% center; }
    }
  `;
  document.head.appendChild(style);

  /* ── 16. Init ───────────────────────────────────────────── */
  // Set today as min date for booking
  const tourDateInput = document.getElementById('tourDate');
  if (tourDateInput) {
    tourDateInput.min = new Date().toISOString().split('T')[0];
  }

  console.log('✦ Reiga Sari Travel Lovina — Loaded Successfully');
})();
