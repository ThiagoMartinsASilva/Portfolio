import '../pages/index/index.js';
import { initModal } from '../pages/work/modal.js';
import { updateContent, detectBrowserLanguage } from './language-translate.js';
import { gsap, ScrollTrigger, createIcons, icons } from './dependencies.js';

gsap.registerPlugin(ScrollTrigger);

document.addEventListener("DOMContentLoaded", () => {
    const updateLanguage = (lang) => {
        if (!lang) return;
        const normalized = lang.trim().toUpperCase();
        updateContent(normalized);
        document.querySelectorAll('.lang-btn').forEach(btn => {
            btn.classList.toggle('active', btn.dataset.lang.trim().toUpperCase() === normalized);
        });
        localStorage.setItem('selectedLanguage', normalized);
        if (typeof createIcons === 'function') createIcons({ icons });
    };

    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            updateLanguage(btn.dataset.lang);
            const navLinks   = document.getElementById('navLinks');
            const menuToggle = document.getElementById('menuToggle');
            navLinks?.classList.remove('open');
            menuToggle?.classList.remove('open');
            document.body.style.overflow = '';
        });
    });

    try {
        updateLanguage(localStorage.getItem('selectedLanguage') || detectBrowserLanguage());
    } catch {
        updateLanguage('PT');
    }

    const menuToggle = document.getElementById('menuToggle');
    const navLinks   = document.getElementById('navLinks');

    menuToggle?.addEventListener('click', () => {
        const isOpen = navLinks?.classList.contains('open');
        navLinks?.classList.toggle('open');
        menuToggle?.classList.toggle('open');
        document.body.style.overflow = isOpen ? '' : 'hidden';
    });

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const id = this.getAttribute('href');
            if (id === '#') return;
            const target = document.querySelector(id);
            if (!target) return;
            e.preventDefault();
            const offset = document.querySelector('.navbar')?.offsetHeight || 0;
            window.scrollTo({ top: target.offsetTop - offset, behavior: 'smooth' });
        });
    });

    gsap.from(".navbar", { y: -50, opacity: 0, duration: 1, ease: "power4.out" });
});
