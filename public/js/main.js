// ── NAVBAR SCROLL + PROGRESS BAR
const navbar = document.getElementById('navbar');
const navProgress = document.getElementById('navProgress');
const sections = document.querySelectorAll('section[id]');

window.addEventListener('scroll', () => {
  const scrollY = window.scrollY;
  const docH = document.documentElement.scrollHeight - window.innerHeight;

  navbar.classList.toggle('scrolled', scrollY > 50);
  scrollTopBtn.classList.toggle('visible', scrollY > 400);

  // Progress bar
  if (navProgress) navProgress.style.width = (scrollY / docH * 100) + '%';

  // Active nav link
  let current = '';
  sections.forEach(s => {
    if (scrollY >= s.offsetTop - 130) current = s.getAttribute('id');
  });
  document.querySelectorAll('.nav-link').forEach(a => {
    a.classList.toggle('active', a.getAttribute('href') === `#${current}`);
  });
});

// ── HAMBURGER MENU
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('navLinks');

function closeMenu() {
  navLinks.classList.remove('open');
  const spans = hamburger.querySelectorAll('span');
  spans[0].style.transform = '';
  spans[1].style.opacity = '1';
  spans[2].style.transform = '';
}

function openMenu() {
  navLinks.classList.add('open');
  const spans = hamburger.querySelectorAll('span');
  spans[0].style.transform = 'rotate(45deg) translate(5px,5px)';
  spans[1].style.opacity = '0';
  spans[2].style.transform = 'rotate(-45deg) translate(5px,-5px)';
}

hamburger.addEventListener('click', (e) => {
  e.stopPropagation();
  navLinks.classList.contains('open') ? closeMenu() : openMenu();
});

// Close on link click
navLinks.querySelectorAll('a').forEach(a => a.addEventListener('click', closeMenu));

// Close on outside click
document.addEventListener('click', (e) => {
  if (!navbar.contains(e.target)) closeMenu();
});

// ── SMOOTH SCROLL
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener('click', e => {
    e.preventDefault();
    const target = document.querySelector(a.getAttribute('href'));
    if (target) target.scrollIntoView({ behavior: 'smooth', block: 'start' });
  });
});

// ── TYPING EFFECT
const roles = [
  'Backend Engineer',
  'Microservices Developer',
  'System Design Enthusiast',
  'Distributed Systems Builder',
  'Cloud-Native Engineer'
];
let roleIndex = 0, charIndex = 0, isDeleting = false;
const typedEl = document.getElementById('typed-text');

function typeEffect() {
  if (!typedEl) return;
  const current = roles[roleIndex];
  typedEl.textContent = isDeleting ? current.substring(0, charIndex--) : current.substring(0, charIndex++);
  if (!isDeleting && charIndex === current.length + 1) {
    setTimeout(() => { isDeleting = true; typeEffect(); }, 1800);
    return;
  }
  if (isDeleting && charIndex === 0) {
    isDeleting = false;
    roleIndex = (roleIndex + 1) % roles.length;
  }
  setTimeout(typeEffect, isDeleting ? 60 : 100);
}
typeEffect();

// ── INTERSECTION OBSERVER
const observer = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.classList.add('visible');
      // stagger skill chips
      if (e.target.classList.contains('skill-chips')) {
        e.target.querySelectorAll('.skill-chip').forEach((chip, i) => {
          setTimeout(() => chip.classList.add('visible'), i * 60);
        });
      }
    }
  });
}, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });

document.querySelectorAll('.fade-up, .timeline-item, .project-card, .skill-chips').forEach(el => observer.observe(el));

// ── SCROLL TO TOP
const scrollTopBtn = document.getElementById('scrollTop');
scrollTopBtn.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));

// ── RESUME MODAL
const resumeModal = document.getElementById('resumeModal');
const viewResumeBtn = document.getElementById('viewResumeBtn');
const closeResumeBtn = document.getElementById('closeResumeBtn');
const resumeOverlay = document.getElementById('resumeOverlay');
const resumeIframe = document.querySelector('.resume-iframe');

function openResumeModal() {
  resumeModal.classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closeResumeModal() {
  resumeModal.classList.remove('active');
  document.body.style.overflow = '';
}

if (viewResumeBtn) viewResumeBtn.addEventListener('click', openResumeModal);
if (closeResumeBtn) closeResumeBtn.addEventListener('click', closeResumeModal);
if (resumeOverlay) resumeOverlay.addEventListener('click', closeResumeModal);

// Close modal on ESC key
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && resumeModal.classList.contains('active')) {
    closeResumeModal();
  }
});

// Hide loader when iframe loads
if (resumeIframe) {
  resumeIframe.addEventListener('load', () => {
    const loader = document.querySelector('.resume-loader');
    if (loader) {
      setTimeout(() => {
        loader.style.opacity = '0';
        loader.style.pointerEvents = 'none';
      }, 300);
    }
  });
}


