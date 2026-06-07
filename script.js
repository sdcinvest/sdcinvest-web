// ===== Header background on scroll =====
const header = document.getElementById('header');
const onScroll = () => header.classList.toggle('scrolled', window.scrollY > 40);
onScroll();
window.addEventListener('scroll', onScroll, { passive: true });

// ===== Mobile navigation =====
const navToggle = document.getElementById('nav-toggle');
const nav = document.querySelector('.nav');
const navList = document.getElementById('nav-list');

const closeNav = () => {
  nav.classList.remove('open');
  navToggle.classList.remove('open');
  navToggle.setAttribute('aria-expanded', 'false');
};

navToggle.addEventListener('click', () => {
  const open = nav.classList.toggle('open');
  navToggle.classList.toggle('open', open);
  navToggle.setAttribute('aria-expanded', String(open));
});
navList.addEventListener('click', (e) => {
  if (e.target.tagName === 'A') closeNav();
});

// ===== Reveal on scroll =====
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('in');
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });

document.querySelectorAll('.reveal').forEach((el) => revealObserver.observe(el));

// ===== Animated counters =====
const animateCount = (el) => {
  const target = parseFloat(el.dataset.target);
  const suffix = el.dataset.suffix || '';
  const duration = 1600;
  const start = performance.now();
  const step = (now) => {
    const p = Math.min((now - start) / duration, 1);
    const eased = 1 - Math.pow(1 - p, 3);
    el.textContent = Math.round(target * eased) + suffix;
    if (p < 1) requestAnimationFrame(step);
  };
  requestAnimationFrame(step);
};

const statObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      animateCount(entry.target);
      statObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.5 });

document.querySelectorAll('.stat-num').forEach((el) => statObserver.observe(el));

// ===== Contact form (front-end validation + simulated submit) =====
const form = document.getElementById('contact-form');
const feedback = document.getElementById('form-feedback');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  feedback.className = 'form-feedback';

  const name = form.name.value.trim();
  const email = form.email.value.trim();
  const message = form.message.value.trim();
  const consent = form.consent.checked;
  const emailOk = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  if (!name || !emailOk || !message || !consent) {
    feedback.textContent = 'Merci de compléter les champs requis et d’accepter le traitement de vos données.';
    feedback.classList.add('error');
    return;
  }

  const btn = form.querySelector('button[type="submit"]');
  btn.disabled = true;
  btn.textContent = 'Envoi en cours…';

  // Simulation d'envoi — à remplacer par un appel à votre backend / service e-mail.
  setTimeout(() => {
    form.reset();
    btn.disabled = false;
    btn.textContent = 'Envoyer ma demande';
    feedback.textContent = 'Merci ' + name.split(' ')[0] + ', votre demande a bien été envoyée. Nous vous répondons sous 48 h.';
    feedback.classList.add('success');
  }, 900);
});

// ===== Footer year =====
document.getElementById('year').textContent = new Date().getFullYear();
