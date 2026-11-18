/**
 * ==========================================================================
 * İLKOKUL ATÖLYESİ - ANA JAVASCRIPT DOSYASI (script.js)
 * Dinamik Arama, Canlı Filtreleme, Modal, Sayaçlar ve Form Doğrulamaları
 * ==========================================================================
 */

document.addEventListener('DOMContentLoaded', () => {
  'use strict';

  // ------------------------------------------------------------------------
  // 1. ZENGİN MATERYAL VERİ SETİ (Educational Resources Data)
  // ------------------------------------------------------------------------
  const resourcesData = [
    {
      id: 1,
      title: "1. Sınıf İlk Okuma Yazma Çizgi Çalışmaları Seti",
      grade: 1,
      subject: "turkce",
      subjectName: "Türkçe",
      type: "Çalışma Kâğıdı",
      downloads: 4820,
      pages: 14,
      date: "2026-10-15",
      desc: "Minik eller için el kası gelişimini destekleyen eğlenceli, labirentli ve eğik çizgi alıştırmaları.",
      icon: "✏️",
      outcomes: ["Kalemi kuralına uygun tutar.", "Yazı çizgilerini soldan sağa ve yukarıdan aşağıya takip eder."]
    },
    {
      id: 2,
      title: "1. Sınıf Doğal Sayılar ve Ritmik Sayma Etkinlikleri",
      grade: 1,
      subject: "matematik",
      subjectName: "Matematik",
      type: "Etkinlik",
      downloads: 3650,
      pages: 8,
      date: "2026-10-22",
      desc: "1'den 20'ye kadar ileri ve geri ritmik sayma, nesne eşleştirme ve sayı tamamlama kâğıtları.",
      icon: "🔢",
      outcomes: ["20'ye kadar olan sayıları sayar ve yazar.", "Nesne grupları ile sayıları eşleştirir."]
    },
    {
      id: 3,
      title: "2. Sınıf Çarpım Tablosu Görsel Öğrenme Kartları",
      grade: 2,
      subject: "matematik",
      subjectName: "Matematik",
      type: "Görsel Kart",
      downloads: 7290,
      pages: 12,
      date: "2026-10-28",
      desc: "2, 3, 4 ve 5 ile çarpma işlemlerini hafızada kolay tutmak için renkli ve resimli kart şablonları.",
      icon: "✖️",
      outcomes: ["Doğal sayılarla çarpma işlemini kavrar.", "Ritmik saymalar ile çarpım ilişkisini kurar."]
    },
    {
      id: 4,
      title: "2. Sınıf Eş Anlamlı & Zıt Anlamlı Kelimeler Bulmacası",
      grade: 2,
      subject: "turkce",
      subjectName: "Türkçe",
      type: "Bulmaca & Test",
      downloads: 5120,
      pages: 6,
      date: "2026-11-01",
      desc: "Kelime dağarcığını geliştiren çengel bulmacalar, eşleştirme halkaları ve kelime çarkı.",
      icon: "📖",
      outcomes: ["Kelimelerin zıt ve eş anlamlarını metin içerisinde doğru kullanır."]
    },
    {
      id: 5,
      title: "3. Sınıf Fen Bilimleri Gezegenimizi Tanıyalım Özeti",
      grade: 3,
      subject: "fen",
      subjectName: "Fen Bilimleri",
      type: "Konu Özeti",
      downloads: 4310,
      pages: 10,
      date: "2026-10-18",
      desc: "Dünyanın katmanları, yer kabuğu ve gökyüzü cisimlerini anlatan infografik destekli çalışma fasikülü.",
      icon: "🌍",
      outcomes: ["Dünya'nın şeklini ve katmanlarını açıklar.", "Hava, su ve kara katmanlarını ayırt eder."]
    },
    {
      id: 6,
      title: "3. Sınıf Hayat Bilgisi Güvenli Hayat Çalışma Yaprağı",
      grade: 3,
      subject: "hayat",
      subjectName: "Hayat Bilgisi",
      type: "Çalışma Kâğıdı",
      downloads: 2980,
      pages: 5,
      date: "2026-10-25",
      desc: "Trafik kuralları, acil durum numaraları ve kazalardan korunma pratikleri içeren interaktif kâğıt.",
      icon: "🚦",
      outcomes: ["Acil durum numaralarını bilir ve yerinde kullanır.", "Trafik levhalarını tanır."]
    },
    {
      id: 7,
      title: "4. Sınıf Matematik Kesirler ve Kesir Problemleri",
      grade: 4,
      subject: "matematik",
      subjectName: "Matematik",
      type: "Problem Seti",
      downloads: 8400,
      pages: 16,
      date: "2026-11-02",
      desc: "Basit, bileşik ve tam sayılı kesirler ile modelleme ve günlük hayat problem senaryoları.",
      icon: "➗",
      outcomes: ["Birim kesirleri sıralar.", "Paydaları eşit kesirlerle toplama ve çıkarma yapar."]
    },
    {
      id: 8,
      title: "4. Sınıf Sosyal Bilgiler Milli Mücadele Kahramanları",
      grade: 4,
      subject: "sosyal",
      subjectName: "Sosyal Bilgiler",
      type: "Ders Notu & Pano",
      downloads: 6150,
      pages: 14,
      date: "2026-10-30",
      desc: "Kurtuluş Savaşı cepheleri, kahramanlarımızın hikâyeleri ve sınıf panosu için poster materyalleri.",
      icon: "🇹🇷",
      outcomes: ["Millî Mücadele kahramanlarının fedakârlıklarını açıklar.", "Tarihsel kronolojiyi kavrar."]
    },
    {
      id: 9,
      title: "1-4. Sınıf Karışık Zekâ & Akıl Oyunları Seti",
      grade: "all",
      subject: "etkinlik",
      subjectName: "Özel Etkinlik",
      type: "Akıl Oyunları",
      downloads: 9840,
      pages: 20,
      date: "2026-11-05",
      desc: "Sudoku, labirent, görsel dikkat ve mantık sorularından oluşan serbest etkinlik saati seti.",
      icon: "🧩",
      outcomes: ["Mantıksal çıkarım yapar.", "Odaklanma ve problem çözme becerisi geliştirir."]
    }
  ];

  // ------------------------------------------------------------------------
  // 2. MOBİL MENÜ VE NAVİGASYON
  // ------------------------------------------------------------------------
  const mobileToggle = document.getElementById('mobileToggle');
  const navMenu = document.getElementById('navMenu');
  const navDropdownToggles = document.querySelectorAll('.has-dropdown > .nav-link');

  if (mobileToggle && navMenu) {
    mobileToggle.addEventListener('click', (e) => {
      e.stopPropagation();
      const isOpen = navMenu.classList.toggle('open');
      mobileToggle.classList.toggle('active', isOpen);
      mobileToggle.setAttribute('aria-expanded', isOpen);
    });

    // Menü dışına tıklanınca mobil menüyü kapat
    document.addEventListener('click', (e) => {
      if (!navMenu.contains(e.target) && !mobileToggle.contains(e.target)) {
        navMenu.classList.remove('open');
        mobileToggle.classList.remove('active');
        mobileToggle.setAttribute('aria-expanded', 'false');
      }
    });
  }

  // Mobilde açılır alt menü (Dropdown) kontrolü
  navDropdownToggles.forEach(toggle => {
    toggle.addEventListener('click', (e) => {
      if (window.innerWidth <= 1024) {
        e.preventDefault();
        const parent = toggle.closest('.nav-item');
        parent.classList.toggle('dropdown-open');
      }
    });
  });

  // Ekran boyutu büyütülürse mobil sınıflarını temizle
  window.addEventListener('resize', () => {
    if (window.innerWidth > 1024 && navMenu) {
      navMenu.classList.remove('open');
      if (mobileToggle) {
        mobileToggle.classList.remove('active');
      }
      document.querySelectorAll('.nav-item.dropdown-open').forEach(item => {
        item.classList.remove('dropdown-open');
      });
    }
  });

  // ------------------------------------------------------------------------
  // 3. SCROLL ESNASINDA YAPIŞKAN (STICKY) HEADER GÖLGESİ
  // ------------------------------------------------------------------------
  const mainHeader = document.querySelector('.main-header');
  window.addEventListener('scroll', () => {
    if (mainHeader) {
      if (window.scrollY > 25) {
        mainHeader.classList.add('scrolled');
      } else {
        mainHeader.classList.remove('scrolled');
      }
    }
  });

  // ------------------------------------------------------------------------
  // 4. CANLI MATERYAL FİLTRELEME VE ARAMA SİSTEMİ
  // ------------------------------------------------------------------------
  const resourcesGrid = document.getElementById('resourcesGrid');
  const filterTabs = document.querySelectorAll('.filter-tab');
  const filterSearchInput = document.getElementById('filterSearchInput');
  const heroSearchInput = document.getElementById('heroSearchInput');
  const heroSearchBtn = document.getElementById('heroSearchBtn');

  let currentGradeFilter = 'all';
  let currentSearchQuery = '';

  // Kart HTML'ini oluşturan fonksiyon
  function createResourceCard(item) {
    const card = document.createElement('article');
    card.className = 'resource-card';
    card.setAttribute('data-id', item.id);
    card.setAttribute('data-grade', item.grade);
    card.setAttribute('data-subject', item.subject);

    // Kategoriye özel header stili
    let headerClass = 'resource-card-header';
    if (item.subject === 'matematik') headerClass += ' math';
    else if (item.subject === 'turkce') headerClass += ' turkish';
    else if (item.subject === 'fen') headerClass += ' science';
    else if (item.subject === 'sosyal') headerClass += ' social';

    const gradeLabel = item.grade === 'all' ? '1-4. Sınıf' : `${item.grade}. Sınıf`;
    const pillClass = item.grade === 'all' ? 'pill-4' : `pill-${item.grade}`;

    card.innerHTML = `
      <div class="${headerClass}">
        <span class="resource-type-badge">${item.type}</span>
        <span class="resource-grade-pill ${pillClass}">${gradeLabel}</span>
        <span class="resource-icon-symbol">${item.icon}</span>
      </div>
      <div class="resource-card-body">
        <div class="resource-meta">
          <span>📚 ${item.subjectName}</span>
          <span>📄 ${item.pages} Sayfa</span>
        </div>
        <h3 class="resource-title">${item.title}</h3>
        <p class="resource-excerpt">${item.desc}</p>
      </div>
      <div class="resource-card-footer">
        <span class="download-counter" id="counter-${item.id}">
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
            <polyline points="7 10 12 15 17 10"></polyline>
            <line x1="12" y1="15" x2="12" y2="3"></line>
          </svg>
          <span class="count-value">${item.downloads.toLocaleString('tr-TR')}</span>
        </span>
        <div class="resource-actions">
          <button class="btn btn-secondary btn-sm preview-btn" data-id="${item.id}" title="Önizle">
            Önizle
          </button>
          <button class="btn btn-primary btn-sm download-btn" data-id="${item.id}" title="İndir">
            İndir (PDF)
          </button>
        </div>
      </div>
    `;

    return card;
  }

  // Filtreleme ve Arama Uygulama Fonksiyonu
  function renderResources() {
    if (!resourcesGrid) return;

    const filtered = resourcesData.filter(item => {
      // Sınıf Kontrolü
      const matchesGrade = (currentGradeFilter === 'all') || 
                           (item.grade.toString() === currentGradeFilter.toString()) || 
                           (item.grade === 'all');

      // Arama Kelimesi Kontrolü
      const query = currentSearchQuery.toLowerCase().trim();
      const matchesSearch = !query ||
                            item.title.toLowerCase().includes(query) ||
                            item.desc.toLowerCase().includes(query) ||
                            item.subjectName.toLowerCase().includes(query);

      return matchesGrade && matchesSearch;
    });

    resourcesGrid.innerHTML = '';

    if (filtered.length === 0) {
      resourcesGrid.innerHTML = `
        <div class="no-results">
          <div class="no-results-icon">🔍</div>
          <h3>Aradığınız Kriterlere Uygun Materyal Bulunamadı</h3>
          <p class="section-desc" style="margin: 8px auto 20px;">
            Farklı bir sınıf seçmeyi veya arama kelimenizi değiştirmeyi deneyebilirsiniz.
          </p>
          <button class="btn btn-secondary" id="resetFilterBtn">Tüm Materyalleri Göster</button>
        </div>
      `;

      const resetBtn = document.getElementById('resetFilterBtn');
      if (resetBtn) {
        resetBtn.addEventListener('click', () => {
          currentGradeFilter = 'all';
          currentSearchQuery = '';
          if (filterSearchInput) filterSearchInput.value = '';
          filterTabs.forEach(t => t.classList.toggle('active', t.getAttribute('data-filter') === 'all'));
          renderResources();
        });
      }
    } else {
      filtered.forEach(item => {
        resourcesGrid.appendChild(createResourceCard(item));
      });
      bindCardActionEvents();
    }
  }

  // Filtre Sekmelerinin Olay Dinleyicileri
  filterTabs.forEach(tab => {
    tab.addEventListener('click', () => {
      filterTabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
      currentGradeFilter = tab.getAttribute('data-filter') || 'all';
      renderResources();
    });
  });

  // Hizmetler/Materyal Listesi Arama Girişi
  if (filterSearchInput) {
    filterSearchInput.addEventListener('input', (e) => {
      currentSearchQuery = e.target.value;
      renderResources();
    });
  }

  // Hero Arama Kutusu ve Yönlendirme
  if (heroSearchBtn && heroSearchInput) {
    heroSearchBtn.addEventListener('click', () => {
      handleHeroSearch();
    });

    heroSearchInput.addEventListener('keypress', (e) => {
      if (e.key === 'Enter') {
        handleHeroSearch();
      }
    });
  }

  function handleHeroSearch() {
    const val = heroSearchInput.value.trim();
    if (window.location.pathname.includes('hizmetler.html')) {
      currentSearchQuery = val;
      if (filterSearchInput) filterSearchInput.value = val;
      renderResources();
    } else {
      // Eğer ana sayfadaysa ve hizmetler.html mevcutsa oraya aktar
      window.location.href = `hizmetler.html?search=${encodeURIComponent(val)}`;
    }
  }

  // URL parametresinden arama terimini okuma (Örn: hizmetler.html?search=matematik)
  const urlParams = new URLSearchParams(window.location.search);
  const searchParam = urlParams.get('search');
  const gradeParam = urlParams.get('grade');

  if (searchParam) {
    currentSearchQuery = searchParam;
    if (filterSearchInput) filterSearchInput.value = searchParam;
    if (heroSearchInput) heroSearchInput.value = searchParam;
  }
  if (gradeParam) {
    currentGradeFilter = gradeParam;
    filterTabs.forEach(tab => {
      tab.classList.toggle('active', tab.getAttribute('data-filter') === gradeParam);
    });
  }

  // Hızlı Öneri Etiketleri (Quick Tags)
  const quickTags = document.querySelectorAll('.quick-tag-chip');
  quickTags.forEach(chip => {
    chip.addEventListener('click', () => {
      const tagText = chip.getAttribute('data-tag') || chip.innerText.trim();
      if (window.location.pathname.includes('hizmetler.html')) {
        currentSearchQuery = tagText;
        if (filterSearchInput) filterSearchInput.value = tagText;
        renderResources();
      } else {
        window.location.href = `hizmetler.html?search=${encodeURIComponent(tagText)}`;
      }
    });
  });

  // İlk yüklemede kartları bas
  renderResources();

  // ------------------------------------------------------------------------
  // 5. ÖNİZLEME MODALI VE İNDİRME SİMÜLATÖRÜ
  // ------------------------------------------------------------------------
  const previewModal = document.getElementById('previewModal');
  const modalCloseBtn = document.getElementById('modalCloseBtn');
  const modalDownloadBtn = document.getElementById('modalDownloadBtn');
  let activeModalItem = null;

  function bindCardActionEvents() {
    // Önizle Butonları
    const previewBtns = document.querySelectorAll('.preview-btn');
    previewBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        const id = parseInt(btn.getAttribute('data-id'), 10);
        const item = resourcesData.find(r => r.id === id);
        if (item) {
          openPreviewModal(item);
        }
      });
    });

    // Doğrudan İndir Butonları
    const downloadBtns = document.querySelectorAll('.download-btn');
    downloadBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        const id = parseInt(btn.getAttribute('data-id'), 10);
        const item = resourcesData.find(r => r.id === id);
        if (item) {
          triggerDownload(item);
        }
      });
    });
  }

  function openPreviewModal(item) {
    if (!previewModal) return;
    activeModalItem = item;

    document.getElementById('modalTitle').textContent = item.title;
    document.getElementById('modalSubject').textContent = item.subjectName;
    document.getElementById('modalGrade').textContent = item.grade === 'all' ? 'Tüm Sınıflar' : `${item.grade}. Sınıf`;
    document.getElementById('modalPages').textContent = `${item.pages} Sayfa PDF`;
    document.getElementById('modalDesc').textContent = item.desc;

    const outcomesList = document.getElementById('modalOutcomes');
    if (outcomesList) {
      outcomesList.innerHTML = '';
      item.outcomes.forEach(outcome => {
        const li = document.createElement('li');
        li.textContent = `✓ ${outcome}`;
        outcomesList.appendChild(li);
      });
    }

    previewModal.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  function closePreviewModal() {
    if (!previewModal) return;
    previewModal.classList.remove('active');
    document.body.style.overflow = '';
    activeModalItem = null;
  }

  if (modalCloseBtn) {
    modalCloseBtn.addEventListener('click', closePreviewModal);
  }

  if (previewModal) {
    previewModal.addEventListener('click', (e) => {
      if (e.target === previewModal) {
        closePreviewModal();
      }
    });

    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && previewModal.classList.contains('active')) {
        closePreviewModal();
      }
    });
  }

  if (modalDownloadBtn) {
    modalDownloadBtn.addEventListener('click', () => {
      if (activeModalItem) {
        triggerDownload(activeModalItem);
        closePreviewModal();
      }
    });
  }

  // İndirme eylemi ve sayaç artışı simülasyonu
  function triggerDownload(item) {
    item.downloads += 1;
    const counterEl = document.querySelector(`#counter-${item.id} .count-value`);
    if (counterEl) {
      counterEl.textContent = item.downloads.toLocaleString('tr-TR');
    }

    // Modern Toast Bildirimi Göster
    showToast(`"${item.title}" başarıyla indiriliyor...`, 'success');
  }

  // ------------------------------------------------------------------------
  // 6. TOAST BİLDİRİM SİSTEMİ
  // ------------------------------------------------------------------------
  function showToast(message, type = 'info') {
    let container = document.querySelector('.toast-container');
    if (!container) {
      container = document.createElement('div');
      container.className = 'toast-container';
      document.body.appendChild(container);
    }

    const toast = document.createElement('div');
    toast.className = `toast ${type}`;
    
    let icon = 'ℹ️';
    if (type === 'success') icon = '✅';
    if (type === 'warning') icon = '⚠️';

    toast.innerHTML = `<span>${icon}</span> <span>${message}</span>`;
    container.appendChild(toast);

    // Animasyon başlat
    setTimeout(() => {
      toast.classList.add('show');
    }, 10);

    // 4 saniye sonra kaldır
    setTimeout(() => {
      toast.classList.remove('show');
      setTimeout(() => {
        toast.remove();
      }, 300);
    }, 4000);
  }

  // ------------------------------------------------------------------------
  // 7. CANLI SAYAÇ ANİMASYONU (STATS COUNTER)
  // ------------------------------------------------------------------------
  const statNumbers = document.querySelectorAll('.stat-number');
  if (statNumbers.length > 0) {
    let hasAnimated = false;

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting && !hasAnimated) {
          hasAnimated = true;
          statNumbers.forEach(el => {
            const target = parseInt(el.getAttribute('data-target'), 10);
            const prefix = el.getAttribute('data-prefix') || '';
            const suffix = el.getAttribute('data-suffix') || '';
            animateValue(el, 0, target, 2000, prefix, suffix);
          });
        }
      });
    }, { threshold: 0.3 });

    statNumbers.forEach(el => observer.observe(el));
  }

  function animateValue(element, start, end, duration, prefix = '', suffix = '') {
    let startTimestamp = null;
    const step = (timestamp) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      // Easing out cubic
      const easeOut = 1 - Math.pow(1 - progress, 3);
      const current = Math.floor(easeOut * (end - start) + start);
      element.textContent = `${prefix}${current.toLocaleString('tr-TR')}${suffix}`;
      if (progress < 1) {
        window.requestAnimationFrame(step);
      }
    };
    window.requestAnimationFrame(step);
  }

  // ------------------------------------------------------------------------
  // 8. SSS AKORDİYON ETKİLEŞİMİ (FAQ ACCORDION)
  // ------------------------------------------------------------------------
  const accordionHeaders = document.querySelectorAll('.accordion-header');
  accordionHeaders.forEach(header => {
    header.addEventListener('click', () => {
      const item = header.parentElement;
      const isActive = item.classList.contains('active');

      // Diğerlerini kapat (İsteğe bağlı akordiyon davranışı)
      document.querySelectorAll('.accordion-item').forEach(otherItem => {
        if (otherItem !== item) {
          otherItem.classList.remove('active');
        }
      });

      item.classList.toggle('active', !isActive);
    });
  });

  // ------------------------------------------------------------------------
  // 9. FORM DOĞRULAMA (İLETİŞİM VE BÜLTEN FORMLARI)
  // ------------------------------------------------------------------------
  const contactForm = document.getElementById('contactForm');
  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      let isValid = true;

      // Alanları Doğrula
      const nameInput = document.getElementById('fullName');
      const emailInput = document.getElementById('email');
      const subjectInput = document.getElementById('subject');
      const messageInput = document.getElementById('message');

      // Ad Soyad
      if (!nameInput.value.trim() || nameInput.value.trim().length < 3) {
        showFieldError(nameInput, 'Lütfen en az 3 karakterden oluşan ad ve soyadınızı girin.');
        isValid = false;
      } else {
        clearFieldError(nameInput);
      }

      // E-posta
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(emailInput.value.trim())) {
        showFieldError(emailInput, 'Lütfen geçerli bir e-posta adresi girin.');
        isValid = false;
      } else {
        clearFieldError(emailInput);
      }

      // Konu
      if (!subjectInput.value.trim()) {
        showFieldError(subjectInput, 'Lütfen bir konu seçin veya yazın.');
        isValid = false;
      } else {
        clearFieldError(subjectInput);
      }

      // Mesaj
      if (!messageInput.value.trim() || messageInput.value.trim().length < 10) {
        showFieldError(messageInput, 'Mesajınız en az 10 karakter uzunluğunda olmalıdır.');
        isValid = false;
      } else {
        clearFieldError(messageInput);
      }

      if (isValid) {
        // Simüle Gönderim
        const submitBtn = contactForm.querySelector('button[type="submit"]');
        const originalText = submitBtn.innerHTML;
        submitBtn.innerHTML = 'Gönderiliyor...';
        submitBtn.disabled = true;

        setTimeout(() => {
          showToast('Mesajınız başarıyla iletildi. En kısa sürede dönüş yapacağız!', 'success');
          contactForm.reset();
          submitBtn.innerHTML = originalText;
          submitBtn.disabled = false;
        }, 1200);
      }
    });
  }

  function showFieldError(inputElement, errorMsg) {
    const group = inputElement.closest('.form-group');
    if (group) {
      group.classList.add('has-error');
      let errorSpan = group.querySelector('.form-error');
      if (!errorSpan) {
        errorSpan = document.createElement('span');
        errorSpan.className = 'form-error';
        group.appendChild(errorSpan);
      }
      errorSpan.textContent = errorMsg;
    }
  }

  function clearFieldError(inputElement) {
    const group = inputElement.closest('.form-group');
    if (group) {
      group.classList.remove('has-error');
    }
  }

  // E-Bülten Formu
  const newsletterForms = document.querySelectorAll('.newsletter-form');
  newsletterForms.forEach(form => {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const input = form.querySelector('.newsletter-input');
      const email = input.value.trim();
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

      if (!email || !emailRegex.test(email)) {
        showToast('Lütfen geçerli bir e-posta adresi yazın.', 'warning');
        return;
      }

      showToast('Tebrikler! Haftalık ücretsiz eğitim bültenimize abone oldunuz.', 'success');
      form.reset();
    });
  });

});
