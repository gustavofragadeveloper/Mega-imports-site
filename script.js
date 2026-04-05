  // Tab switching
  document.querySelectorAll('.tab-btn').forEach(btn => {
    btn.addEventListener('click', function() {
      document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
      this.classList.add('active');
    });
  });

  // Nav shrink on scroll
  window.addEventListener('scroll', () => {
    const nav = document.querySelector('nav');
    if (window.scrollY > 60) {
      nav.style.padding = '10px 48px';
      nav.style.background = 'rgba(10,10,10,0.98)';
    } else {
      nav.style.padding = '16px 48px';
      nav.style.background = 'rgba(10,10,10,0.92)';
    }
  });

  // WhatsApp form redirect
  function redirectWhatsApp() {
    const name = document.querySelector('input[type="text"]').value || 'Visitante';
    const phone = document.querySelector('input[type="tel"]').value || '';
    const category = document.querySelector('select').value || 'produtos';
    const msg = document.querySelector('textarea').value || '';
    const text = `Olá! Sou ${name}${phone ? ' ('+phone+')' : ''}. Tenho interesse em: ${category}${msg ? '. Mensagem: '+msg : ''}`;
    window.open(`https://wa.me/5579999999999?text=${encodeURIComponent(text)}`, '_blank');
  }

  // Smooth scroll for nav links
  document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', e => {
      const target = document.querySelector(a.getAttribute('href'));
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });

  // Intersection Observer for fade-in
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
      }
    });
  }, { threshold: 0.1 });

  document.querySelectorAll('.product-card, .why-card, .testimonial-card, .stat-item').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(el);
  });