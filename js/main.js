// =============================================
// MAJOR FLAVOR — Main JavaScript
// =============================================

// Mobile nav toggle
const navToggle = document.getElementById('navToggle');
const navLinks = document.getElementById('navLinks');

if (navToggle && navLinks) {
  navToggle.addEventListener('click', () => {
    navLinks.classList.toggle('open');
    navToggle.setAttribute('aria-expanded', navLinks.classList.contains('open'));
  });

  // Close nav when a link is clicked
  navLinks.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
      navLinks.classList.remove('open');
    });
  });

  // Close nav when clicking outside
  document.addEventListener('click', (e) => {
    if (!navToggle.contains(e.target) && !navLinks.contains(e.target)) {
      navLinks.classList.remove('open');
    }
  });
}

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      e.preventDefault();
      const offset = 90; // account for sticky header
      const top = target.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  });
});

// Menu nav active state
const menuNavBtns = document.querySelectorAll('.menu-nav-btn');
const menuSections = document.querySelectorAll('.menu-section, .promo-box');

if (menuNavBtns.length && menuSections.length) {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const id = entry.target.id;
        menuNavBtns.forEach(btn => {
          btn.classList.toggle('active', btn.getAttribute('href') === `#${id}`);
        });
      }
    });
  }, { rootMargin: '-30% 0px -60% 0px' });

  menuSections.forEach(section => {
    if (section.id) observer.observe(section);
  });
}

// Fade in on scroll
const fadeEls = document.querySelectorAll('.feature-card, .menu-item, .value-card, .order-alt-card, .contact-card');
if ('IntersectionObserver' in window) {
  const fadeObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry, i) => {
      if (entry.isIntersecting) {
        entry.target.style.animationDelay = `${i * 0.05}s`;
        entry.target.classList.add('fade-in-done');
        fadeObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });

  fadeEls.forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(16px)';
    el.style.transition = 'opacity 0.4s ease, transform 0.4s ease';
    fadeObserver.observe(el);
  });
}

// Add fade-in-done styles via JS
const style = document.createElement('style');
style.textContent = `.fade-in-done { opacity: 1 !important; transform: none !important; }`;
document.head.appendChild(style);

// Contact form feedback (if using Formspree or similar)
const contactForm = document.getElementById('contactForm');
if (contactForm) {
  contactForm.addEventListener('submit', function(e) {
    const btn = this.querySelector('button[type="submit"]');
    if (btn) {
      btn.textContent = 'Sending... 💕';
      btn.disabled = true;
    }
  });
}

// Log brand to console (fun easter egg)
console.log('%c💋 Major Flavor 💋', 'color:#ff3d9a; font-family:serif; font-size:24px; font-weight:bold;');
console.log('%cSoul Food Sold Daily · Moss Point, MS', 'color:#7ed321; font-size:12px;');
