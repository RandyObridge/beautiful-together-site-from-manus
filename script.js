/* ============================================================
   BEAUTIFUL TOGETHER — Main Script
   ============================================================ */

(function () {
  'use strict';

  // ---- Mobile nav toggle ----
  var hamburger = document.getElementById('navHamburger');
  var mobileMenu = document.getElementById('navMobile');

  if (hamburger && mobileMenu) {
    hamburger.addEventListener('click', function () {
      var isOpen = mobileMenu.classList.toggle('open');
      hamburger.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
    });

    // Close mobile menu when a link is clicked
    mobileMenu.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', function () {
        mobileMenu.classList.remove('open');
        hamburger.setAttribute('aria-expanded', 'false');
      });
    });
  }

  // ---- Nav scroll effect ----
  var nav = document.getElementById('nav');
  function onScroll() {
    if (window.scrollY > 60) {
      nav.style.background = 'rgba(13,13,13,0.97)';
    } else {
      nav.style.background = 'rgba(13,13,13,0.85)';
    }
  }
  window.addEventListener('scroll', onScroll, { passive: true });

  // ---- Smooth scroll for anchor links ----
  document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
    anchor.addEventListener('click', function (e) {
      var target = document.querySelector(this.getAttribute('href'));
      if (target) {
        e.preventDefault();
        var offset = 64; // nav height
        var top = target.getBoundingClientRect().top + window.scrollY - offset;
        window.scrollTo({ top: top, behavior: 'smooth' });
      }
    });
  });

  // ---- Fade-in on scroll (Intersection Observer) ----
  var fadeEls = document.querySelectorAll(
    '.method-card, .course-card, .tool-card, .flagship-inner, .philosophy-quote, .cta-title'
  );

  if ('IntersectionObserver' in window) {
    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });

    fadeEls.forEach(function (el) {
      el.classList.add('fade-in');
      observer.observe(el);
    });
  }

})();
