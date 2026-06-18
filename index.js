
const navToggle = document.querySelector('.nav-toggle');
const headerNav = document.querySelector('.header-nav');

// --- 1. Al cargar la página, revisar si hay una sección guardada ---
window.addEventListener('DOMContentLoaded', () => {
    const ultimaSeccion = localStorage.getItem('seccionGuardada');
    if (ultimaSeccion) {
        // Si existe, esperamos un momento y hacemos scroll hacia ella
        setTimeout(() => {
            const elemento = document.querySelector(ultimaSeccion);
            if (elemento) elemento.scrollIntoView({ behavior: 'smooth' });
        }, 100);
    }
});

navToggle.addEventListener('click', () => {
    const isOpen = headerNav.classList.toggle('is-open');
    navToggle.setAttribute('aria-expanded', isOpen);
    navToggle.setAttribute('aria-label', isOpen ? 'Cerrar menú' : 'Abrir menú');
});

headerNav.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
        // --- 2. Guardar la sección cuando el usuario hace clic ---
        const destino = link.getAttribute('href'); // Esto obtiene por ejemplo "#catalogo"
        if (destino.startsWith('#')) {
            localStorage.setItem('seccionGuardada', destino);
        }

        headerNav.classList.remove('is-open');
        navToggle.setAttribute('aria-expanded', 'false');
        navToggle.setAttribute('aria-label', 'Abrir menú');
    });
});
