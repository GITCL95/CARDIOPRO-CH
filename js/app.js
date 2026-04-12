/**
 * CardioPro Belgium — app.js
 * Vanilla JS minimal : FAQ accordion, burger menu, onglets pricing, bouton flottant
 */

(function () {
  'use strict';

  /* ==============================
     1. FAQ ACCORDION
  ============================== */
  function initFAQ() {
    const items = document.querySelectorAll('.faq__item');
    if (!items.length) return;

    // Ouvrir le premier par défaut
    if (items[0]) items[0].classList.add('expanded');

    items.forEach(function (item) {
      const question = item.querySelector('.faq__question');
      if (!question) return;

      question.addEventListener('click', function () {
        const isExpanded = item.classList.contains('expanded');

        // Fermer tous
        items.forEach(function (i) { i.classList.remove('expanded'); });

        // Ouvrir si était fermé
        if (!isExpanded) {
          item.classList.add('expanded');
        }
      });

      // Accessibilité clavier
      question.addEventListener('keydown', function (e) {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          question.click();
        }
      });
    });
  }

  /* ==============================
     2. MENU BURGER MOBILE
  ============================== */
  function initBurger() {
    const burger = document.querySelector('.burger');
    const nav    = document.querySelector('.main-nav');
    if (!burger || !nav) return;

    burger.addEventListener('click', function () {
      const isOpen = nav.classList.toggle('open');
      burger.classList.toggle('open', isOpen);
      burger.setAttribute('aria-expanded', String(isOpen));
      document.body.style.overflow = isOpen ? 'hidden' : '';
    });

    // Fermer en cliquant un lien
    nav.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', function () {
        nav.classList.remove('open');
        burger.classList.remove('open');
        burger.setAttribute('aria-expanded', 'false');
        document.body.style.overflow = '';
      });
    });

    // Fermer sur touche Escape
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && nav.classList.contains('open')) {
        nav.classList.remove('open');
        burger.classList.remove('open');
        burger.setAttribute('aria-expanded', 'false');
        document.body.style.overflow = '';
        burger.focus();
      }
    });
  }

  /* ==============================
     3. ONGLETS LOCATION / ACHAT
  ============================== */
  function initTabs() {
    const tabBtns   = document.querySelectorAll('.tab-btn');
    const tabPanels = document.querySelectorAll('.tab-panel');
    if (!tabBtns.length) return;

    tabBtns.forEach(function (btn) {
      btn.addEventListener('click', function () {
        const target = btn.getAttribute('data-tab');

        tabBtns.forEach(function (b) {
          b.classList.remove('active');
          b.setAttribute('aria-selected', 'false');
        });
        tabPanels.forEach(function (p) { p.classList.remove('active'); });

        btn.classList.add('active');
        btn.setAttribute('aria-selected', 'true');

        const panel = document.getElementById(target);
        if (panel) panel.classList.add('active');
      });
    });

    // Activer le premier onglet par défaut s'il n'y en a aucun d'actif
    if (!document.querySelector('.tab-btn.active')) {
      tabBtns[0] && tabBtns[0].click();
    }
  }

  /* ==============================
     4. BOUTON FLOTTANT DEVIS
  ============================== */
  function initFloatCTA() {
    const btn = document.querySelector('.float-cta');
    if (!btn) return;

    var threshold = 300;
    var ticking   = false;

    function onScroll() {
      if (!ticking) {
        window.requestAnimationFrame(function () {
          if (window.scrollY > threshold) {
            btn.classList.add('visible');
          } else {
            btn.classList.remove('visible');
          }
          ticking = false;
        });
        ticking = true;
      }
    }

    window.addEventListener('scroll', onScroll, { passive: true });
  }

  /* ==============================
     5. NAV — lien actif au scroll
  ============================== */
  function initScrollSpy() {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.main-nav a[href^="#"]');
    if (!sections.length || !navLinks.length) return;

    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          navLinks.forEach(function (link) {
            link.classList.remove('active');
            if (link.getAttribute('href') === '#' + entry.target.id) {
              link.classList.add('active');
            }
          });
        }
      });
    }, { threshold: 0.3 });

    sections.forEach(function (s) { observer.observe(s); });
  }

  /* ==============================
     INIT
  ============================== */
  document.addEventListener('DOMContentLoaded', function () {
    initFAQ();
    initBurger();
    initTabs();
    initFloatCTA();
    initScrollSpy();
  });

})();
