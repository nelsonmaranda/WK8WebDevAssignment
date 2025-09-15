// GreenTrack front-end utilities and bootstrapping.
// Keep functions small, named, and reusable to improve maintainability.

(function () {
  'use strict';

  function setFooterYear() {
    const yearEl = document.getElementById('year');
    if (yearEl) yearEl.textContent = new Date().getFullYear();
  }

  function initMobileMenu() {
    const navToggle = document.querySelector('.nav-toggle');
    const menu = document.getElementById('primary-menu');
    if (!navToggle || !menu) return;
    navToggle.addEventListener('click', () => {
      const isOpen = menu.classList.toggle('open');
      navToggle.setAttribute('aria-expanded', String(isOpen));
    });
  }

  function initScrollReveal() {
    const revealEls = document.querySelectorAll('.reveal');
    if (!('IntersectionObserver' in window) || !revealEls.length) {
      revealEls.forEach(el => el.classList.add('visible'));
      return;
    }
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (!entry.isIntersecting) return;
        const delay = Number(entry.target.getAttribute('data-delay') || 0) * 100;
        setTimeout(() => entry.target.classList.add('visible'), delay);
        observer.unobserve(entry.target);
      });
    }, { threshold: 0.15 });
    revealEls.forEach(el => observer.observe(el));
  }

  function initContactFormValidation() {
    const form = document.getElementById('contact-form');
    if (!form) return;
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const fields = {
        name: document.getElementById('name'),
        email: document.getElementById('email'),
        phone: document.getElementById('phone'),
        location: document.getElementById('location'),
        service: document.getElementById('service'),
        message: document.getElementById('message'),
      };
      const errors = {
        name: document.getElementById('error-name'),
        email: document.getElementById('error-email'),
        phone: document.getElementById('error-phone'),
        location: document.getElementById('error-location'),
        service: document.getElementById('error-service'),
        message: document.getElementById('error-message'),
      };
      let isValid = true;

      Object.values(errors).forEach(el => el && (el.textContent = ''));

      if (!fields.name.value.trim()) { errors.name.textContent = 'Please enter your name.'; isValid = false; }
      if (!fields.email.value.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(fields.email.value)) { errors.email.textContent = 'Enter a valid email address.'; isValid = false; }
      if (fields.phone.value && !/^[0-9+\-()\s]{7,}$/.test(fields.phone.value)) { errors.phone.textContent = 'Enter a valid phone number.'; isValid = false; }
      if (!fields.location.value.trim()) { errors.location.textContent = 'Enter your town/estate.'; isValid = false; }
      if (!fields.service.value) { errors.service.textContent = 'Select a service type.'; isValid = false; }
      if (fields.message.value.trim().length < 10) { errors.message.textContent = 'Message should be at least 10 characters.'; isValid = false; }

      const statusEl = document.getElementById('form-status');
      if (!isValid) {
        statusEl.textContent = 'Please correct the highlighted errors.';
        statusEl.style.color = '#ff6b6b';
        return;
      }
      
      // If validation passes, submit to Netlify
      statusEl.textContent = 'Sending...';
      statusEl.style.color = '#34d399';
      
      // Let the form submit naturally to Netlify
      form.removeAttribute('novalidate');
      form.submit();
    });
  }

  function bootstrap() {
    setFooterYear();
    initMobileMenu();
    initScrollReveal();
    initContactFormValidation();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', bootstrap);
  } else {
    bootstrap();
  }
})();


