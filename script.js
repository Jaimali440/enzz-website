// ---- mobile nav ----
const navToggle = document.getElementById('nav-toggle');
const navLinks = document.getElementById('nav-links');
if (navToggle && navLinks) {
  navToggle.addEventListener('click', () => {
    navToggle.classList.toggle('open');
    navLinks.classList.toggle('open');
  });
  navLinks.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
    navToggle.classList.remove('open');
    navLinks.classList.remove('open');
  }));
}

// ---- scroll reveal ----
const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
const io = new IntersectionObserver((entries) => {
  entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('in'); });
}, { threshold: 0.12 });
document.querySelectorAll('.reveal').forEach(el => io.observe(el));

// ---- campaign language toggle ----
window.showCampaignLang = function (lang) {
  const en = document.getElementById('campaign-en');
  const sw = document.getElementById('campaign-sw');
  const btnEn = document.getElementById('lang-en-btn');
  const btnSw = document.getElementById('lang-sw-btn');
  if (!en || !sw) return;
  en.style.display = lang === 'en' ? 'block' : 'none';
  sw.style.display = lang === 'sw' ? 'block' : 'none';
  btnEn.classList.toggle('active', lang === 'en');
  btnSw.classList.toggle('active', lang === 'sw');
};

// ---- lightbox for screenshots ----
const lightbox = document.getElementById('lightbox');
if (lightbox) {
  const lbImg = document.getElementById('lightbox-img');
  document.querySelectorAll('[data-lightbox]').forEach(img => {
    img.style.cursor = 'zoom-in';
    img.addEventListener('click', () => {
      lbImg.src = img.getAttribute('src');
      lbImg.alt = img.getAttribute('alt') || '';
      lightbox.classList.add('active');
    });
  });
  document.getElementById('lightbox-close')?.addEventListener('click', () => lightbox.classList.remove('active'));
  lightbox.addEventListener('click', (e) => { if (e.target === lightbox) lightbox.classList.remove('active'); });
  document.addEventListener('keydown', (e) => { if (e.key === 'Escape') lightbox.classList.remove('active'); });
}

// ---- contact form -> mailto ----
const contactForm = document.getElementById('contact-form');
if (contactForm) {
  contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.getElementById('cf-name').value;
    const email = document.getElementById('cf-email').value;
    const topic = document.getElementById('cf-topic').value;
    const message = document.getElementById('cf-message').value;
    const subject = encodeURIComponent(`ENZZ — ${topic || 'General inquiry'} from ${name}`);
    const body = encodeURIComponent(`${message}\n\n— ${name} (${email})`);
    window.location.href = `mailto:hello@enzz.co?subject=${subject}&body=${body}`;
  });
}
