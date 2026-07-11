// ---- Footer year ----
document.getElementById('year').textContent = new Date().getFullYear();

// ---- Typed terminal effect in hero ----
const typedEl = document.getElementById('typed');
const phrase = "whoami — Aditya Jha, Web Developer";
const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

if (prefersReducedMotion) {
  typedEl.textContent = phrase;
} else {
  let i = 0;
  function typeChar() {
    if (i <= phrase.length) {
      typedEl.textContent = phrase.slice(0, i);
      i++;
      setTimeout(typeChar, 45);
    }
  }
  typeChar();
}

// ---- Active tab highlighting on scroll ----
const tabs = document.querySelectorAll('.tab');
const sections = Array.from(tabs).map(tab => document.querySelector(tab.getAttribute('href')));

function setActiveTab() {
  let current = sections[0];
  const scrollPos = window.scrollY + 120;

  sections.forEach(section => {
    if (section && section.offsetTop <= scrollPos) {
      current = section;
    }
  });

  tabs.forEach(tab => {
    const target = document.querySelector(tab.getAttribute('href'));
    tab.classList.toggle('active', target === current);
  });
}

window.addEventListener('scroll', setActiveTab, { passive: true });
setActiveTab();
