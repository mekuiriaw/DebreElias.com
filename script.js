/* ============================================================
   Debre Elias Woreda — Official Website
   script.js | Shared across index.html & about.html
   ============================================================ */

document.addEventListener('DOMContentLoaded', () => {

  /* ── Fade-in on scroll ── */
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) e.target.classList.add('visible');
    });
  }, { threshold: 0.1 });
  document.querySelectorAll('.fade-in').forEach(el => observer.observe(el));

  /* ── Active nav link highlight on scroll (for single-page sections) ── */
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-links a, .mobile-nav a');
  if (sections.length) {
    window.addEventListener('scroll', () => {
      let current = '';
      sections.forEach(s => {
        if (window.scrollY >= s.offsetTop - 80) current = s.id;
      });
      navLinks.forEach(a => {
        const href = a.getAttribute('href') || '';
        a.classList.toggle('active', href === '#' + current);
      });
    });
  }

  /* ── Mobile nav toggle ── */
  const toggleBtn = document.querySelector('.nav-mobile-toggle');
  const mobileNav = document.querySelector('.mobile-nav');
  if (toggleBtn && mobileNav) {
    toggleBtn.addEventListener('click', () => {
      mobileNav.classList.toggle('open');
      toggleBtn.textContent = mobileNav.classList.contains('open') ? '✕' : '☰';
    });
    mobileNav.querySelectorAll('a').forEach(a => {
      a.addEventListener('click', () => {
        mobileNav.classList.remove('open');
        toggleBtn.textContent = '☰';
      });
    });
  }

  /* ── Demographic bar animation on scroll ── */
  const demoSection = document.getElementById('demographics');
  if (demoSection) {
    const barObserver = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          e.target.querySelectorAll('.bar-fill').forEach(bar => {
            const w = bar.style.width;
            bar.style.width = '0';
            setTimeout(() => { bar.style.width = w; }, 100);
          });
        }
      });
    }, { threshold: 0.3 });
    barObserver.observe(demoSection);
  }

  /* ── Contact form mock submit ── */
  const formBtn = document.querySelector('.form-btn');
  if (formBtn) {
    formBtn.addEventListener('click', (e) => {
      e.preventDefault();
      const nameInput = document.querySelector('input[placeholder="Your full name"]');
      const name = nameInput ? nameInput.value.trim() : '';
      if (name) {
        alert('✅ Thank you, ' + name + '! Your message has been received. The Debre Elias Woreda Office will respond shortly.');
        document.querySelectorAll('.form-input').forEach(i => i.value = '');
      } else {
        alert('Please fill in your name before submitting.');
      }
    });
  }

});
