/**
 * AppsChance - Interactive Scripts
 * Supports view modes (Desktop, Mobile, Side-by-Side, Live Responsive),
 * Mobile Drawer, Search Modal, and Subscription Feedback.
 */

document.addEventListener('DOMContentLoaded', () => {
  initViewSwitcher();
  initMobileDrawer();
  initSearchModal();
  initNewsletterForm();
  initCategoryInteractions();
  initHomeAppsInteractions();
});

/* ==========================================================================
   VIEW SWITCHER CONTROLLER
   Allows testing Desktop View, Mobile View, Side-by-Side View, and Live Responsive
   ========================================================================== */
function initViewSwitcher() {
  const btnDesktop = document.getElementById('btnViewDesktop');
  const btnMobile = document.getElementById('btnViewMobile');
  const btnSplit = document.getElementById('btnViewSplit');
  const btnLive = document.getElementById('btnViewLive');
  const btnCloseBar = document.getElementById('btnCloseViewBar');
  const viewModeBar = document.getElementById('viewModeBar');
  const body = document.body;

  const buttons = [btnDesktop, btnMobile, btnSplit, btnLive].filter(Boolean);

  function clearActive() {
    buttons.forEach(btn => btn.classList.remove('active'));
    body.classList.remove('force-desktop-mode', 'force-mobile-mode', 'force-split-mode');
  }

  if (btnDesktop) {
    btnDesktop.addEventListener('click', () => {
      clearActive();
      btnDesktop.classList.add('active');
      body.classList.add('force-desktop-mode');
      showToast('🖥️ Switched to Desktop View');
    });
  }

  if (btnMobile) {
    btnMobile.addEventListener('click', () => {
      clearActive();
      btnMobile.classList.add('active');
      body.classList.add('force-mobile-mode');
      showToast('📱 Switched to Mobile View');
    });
  }

  if (btnSplit) {
    btnSplit.addEventListener('click', () => {
      clearActive();
      btnSplit.classList.add('active');
      body.classList.add('force-split-mode');
      showToast('🔀 Showing Desktop & Mobile View Side-by-Side');
    });
  }

  if (btnLive) {
    btnLive.addEventListener('click', () => {
      clearActive();
      btnLive.classList.add('active');
      showToast('⚡ Live Responsive Mode Active');
    });
  }

  if (btnCloseBar && viewModeBar) {
    btnCloseBar.addEventListener('click', () => {
      viewModeBar.style.display = 'none';
    });
  }
}

/* ==========================================================================
   MOBILE NAVIGATION DRAWER
   ========================================================================== */
function initMobileDrawer() {
  const toggleBtns = document.querySelectorAll('.btn-mobile-toggle');
  const drawer = document.getElementById('mobileNavDrawer');
  const overlay = document.getElementById('mobileNavOverlay');
  const closeBtn = document.getElementById('btnCloseDrawer');

  function openDrawer() {
    if (drawer) drawer.classList.add('open');
    if (overlay) overlay.classList.add('open');
    document.body.style.overflow = 'hidden';
  }

  function closeDrawer() {
    if (drawer) drawer.classList.remove('open');
    if (overlay) overlay.classList.remove('open');
    document.body.style.overflow = '';
  }

  toggleBtns.forEach(btn => {
    btn.addEventListener('click', openDrawer);
  });

  if (closeBtn) closeBtn.addEventListener('click', closeDrawer);
  if (overlay) overlay.addEventListener('click', closeDrawer);

  // Close when clicking any nav link inside drawer
  const drawerLinks = document.querySelectorAll('.drawer-link');
  drawerLinks.forEach(link => {
    link.addEventListener('click', closeDrawer);
  });
}

/* ==========================================================================
   SEARCH MODAL
   ========================================================================== */
function initSearchModal() {
  const searchBtns = document.querySelectorAll('.btn-search');
  const searchModal = document.getElementById('searchModal');
  const closeSearchBtn = document.getElementById('btnCloseSearch');
  const searchInput = document.getElementById('siteSearchInput');

  function openSearch() {
    if (searchModal) {
      searchModal.style.display = 'flex';
      setTimeout(() => {
        if (searchInput) searchInput.focus();
      }, 100);
    }
  }

  function closeSearch() {
    if (searchModal) {
      searchModal.style.display = 'none';
    }
  }

  searchBtns.forEach(btn => btn.addEventListener('click', openSearch));
  if (closeSearchBtn) closeSearchBtn.addEventListener('click', closeSearch);

  if (searchModal) {
    searchModal.addEventListener('click', (e) => {
      if (e.target === searchModal) closeSearch();
    });
  }

  // Escape key to close modal
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeSearch();
  });
}

/* ==========================================================================
   NEWSLETTER SUBSCRIPTION FORM
   ========================================================================== */
function initNewsletterForm() {
  const forms = document.querySelectorAll('.newsletter-form');

  forms.forEach(form => {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const input = form.querySelector('.newsletter-input');
      const email = input ? input.value.trim() : '';

      if (!email || !email.includes('@') || !email.includes('.')) {
        showToast('⚠️ Please enter a valid email address.');
        return;
      }

      showToast(`🎉 Success! Thank you for subscribing, ${email}`);
      if (input) input.value = '';
    });
  });
}

/* ==========================================================================
   CATEGORY PILL INTERACTIONS
   ========================================================================== */
function initCategoryInteractions() {
  const categoryCards = document.querySelectorAll('.category-card');

  categoryCards.forEach(card => {
    card.addEventListener('click', () => {
      const categoryName = card.querySelector('.cat-title')?.textContent || 'Category';
      showToast(`🔍 Filtered by: ${categoryName}`);
    });
  });

  // Next scroll button in category slider
  const nextBtn = document.querySelector('.cat-scroll-next');
  const catList = document.querySelector('.categories-list');
  if (nextBtn && catList) {
    nextBtn.addEventListener('click', () => {
      catList.scrollBy({ left: 240, behavior: 'smooth' });
    });
  }
}

/* ==========================================================================
   TOAST NOTIFICATION HELPER
   ========================================================================== */
function showToast(message) {
  let toast = document.getElementById('toastNotice');
  if (!toast) {
    toast = document.createElement('div');
    toast.id = 'toastNotice';
    toast.className = 'toast-msg';
    document.body.appendChild(toast);
  }

  toast.textContent = message;
  toast.style.display = 'block';

  clearTimeout(window.toastTimer);
  window.toastTimer = setTimeout(() => {
    toast.style.display = 'none';
  }, 3200);
}

/* ==========================================================================
   HOME APPS PLATFORM FILTERING & CARD INTERACTIONS
   ========================================================================== */
function initHomeAppsInteractions() {
  const filterBtns = document.querySelectorAll('.home-filter-btn');
  const cards = document.querySelectorAll('.apps-grid .app-card');

  if (filterBtns.length > 0 && cards.length > 0) {
    filterBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        filterBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        const filter = btn.getAttribute('data-home-filter');

        cards.forEach(card => {
          const platforms = card.getAttribute('data-platforms') || '';
          if (filter === 'all' || platforms.includes(filter)) {
            card.style.display = '';
          } else {
            card.style.display = 'none';
          }
        });

        const platformName = filter === 'android' ? 'Google Play (Android)' : (filter === 'ios' ? 'Apple App Store (iOS)' : 'All Apps');
        showToast(`📱 Showing ${platformName}`);
      });
    });

    // Make app cards clickable anywhere (including on mobile rows)
    cards.forEach(card => {
      card.style.cursor = 'pointer';
      card.addEventListener('click', (e) => {
        // If clicking on an anchor tag directly, allow default navigation
        if (e.target.closest('a')) return;

        // Otherwise open the primary store link
        const firstStoreLink = card.querySelector('.btn-store-badge');
        if (firstStoreLink && firstStoreLink.href) {
          const isPlay = firstStoreLink.href.includes('play.google');
          showToast(`🚀 Opening ${isPlay ? 'Google Play Store' : 'Apple App Store'}...`);
          window.open(firstStoreLink.href, '_blank', 'noopener,noreferrer');
        }
      });
    });
  }
}

