// ── ACTIVE NAV LINK ON SCROLL ──
const sections = document.querySelectorAll('section, nav');
const navLinks = document.querySelectorAll('.nav-links a');

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      navLinks.forEach(link => link.classList.remove('active'));
      const id = entry.target.getAttribute('id');
      const activeLink = document.querySelector(`.nav-links a[href="#${id}"]`);
      if (activeLink) activeLink.classList.add('active');
    }
  });
}, { threshold: 0.4 });

sections.forEach(section => observer.observe(section));
// ── CONTACT FORM ──
const form = document.querySelector('.contact-form');
const sendBtn = document.querySelector('.send-btn');

sendBtn.addEventListener('click', function() {
  const name = document.querySelector('.contact-form input[type="text"]').value;
  const email = document.querySelector('.contact-form input[type="email"]').value;
  const message = document.querySelector('.contact-form textarea').value;

  if (name === '' || email === '' || message === '') {
    alert('Please fill in all fields before sending!');
    return;
  }

  alert('Thank you ' + name + '! Your message has been sent successfully.');

  document.querySelector('.contact-form input[type="text"]').value = '';
  document.querySelector('.contact-form input[type="email"]').value = '';
  document.querySelector('.contact-form textarea').value = '';
});
// ── NAVBAR SHADOW ON SCROLL ──
window.addEventListener('scroll', function() {
  const nav = document.querySelector('nav');
  if (window.scrollY > 50) {
    nav.style.boxShadow = '0 4px 30px rgba(123, 47, 190, 0.15)';
  } else {
    nav.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.08)';
  }
});