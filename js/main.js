/* ========================================
   PORTAFOLIO - DANIEL ARGÜELLO MARTÍNEZ
   Main JavaScript File
   ======================================== */

// Objeto de traducciones completo
const translations = {
    es: {
        // Navegación
        "nav-home": "Inicio",
        "nav-about": "Sobre Mí",
        "nav-projects": "Proyectos",
        "nav-skills": "Habilidades",
        "nav-experience": "Experiencia",
        "nav-contact": "Contacto",

        // Hero Section
        "nombreCompleto": "Daniel Argüello Martínez",
        "titulo": "Desarrollador de Software y Técnico en Soporte",
        "eslogan": "Creando soluciones digitales prácticas y seguras con pasión por la innovación",
        "descargaCV": "Descargar mi CV",
        "contactame": "Contáctame",

        // Sobre Mí
        "sobreMiTitulo": "Sobre Mí",
        "saludoInicial": "¡Hola! Soy <span class='highlight'>Daniel Argüello Martínez</span>",
        "descripcionPersonal": "Desarrollador de software full stack y técnico en soporte con experiencia práctica en resolución de problemas técnicos y desarrollo de aplicaciones robustas. Me especializo en crear soluciones digitales eficientes y seguras que transforman ideas en realidad.",
        "descripcionAcademica": "Actualmente curso Ingeniería en Computación en la Universidad Estatal a Distancia (UNED), complementando mi formación técnica con conocimientos sólidos en programación, arquitectura de software y metodologías ágiles.",
        "estatProyectos": "5+",
        "estatProyectosDesc": "Proyectos Completados",
        "estatLenguajes": "6+",
        "estatLenguajesDesc": "Lenguajes de Programación",
        "estatIdiomas": "4",
        "estatIdiomasDesc": "Idiomas",

        // Proyectos
        "proyectosTitulo": "Proyectos",
        "proyectosSubtitulo": "Explora algunos de mis trabajos más destacados",
        "trabajandoEn": "Trabajando en este proyecto...",
        "proyecto1Titulo": "Tienda Virtual",
        "proyecto1Desc": "E-commerce con catálogo de productos y carrito de compras",
        "proyecto2Titulo": "Gestor de Notas",
        "proyecto2Desc": "Aplicación de escritorio para gestión de notas personales",
        "proyecto3Titulo": "Conversor de Divisas",
        "proyecto3Desc": "App móvil para conversión de monedas en tiempo real",
        "proyecto4Titulo": "Barbería Web",
        "proyecto4Desc": "Sitio web con integración de WhatsApp para citas",
        "proyecto5Titulo": "Gestor de Tiempos",
        "proyecto5Desc": "Sistema de gestión de tiempos libres con macros",

        // Educación
        "educacion": "Educación",
        "covao": "Colegio Vocacional de Artes y Oficios COVAO",
        "covaoFecha": "2021-2023",
        "uned": "Universidad Estatal a Distancia UNED",
        "unedFecha": "2024-Presente",
        "carrera": "Ingeniería en Informática",

        // Contacto
        "contactoTitulo": "Contáctame",
        "contactoIntro": "¿Tienes un proyecto en mente o quieres colaborar? ¡Me encantaría escucharte! Contáctame a través de cualquiera de estos medios:",
        "email": "Email",
        "ubicacion": "Ubicación",

        // Footer
        "footer-description": "Desarrollador de Software Full Stack",
        "footer-tagline": "Transformando ideas en soluciones digitales",
        "footer-navigation": "Navegación",
        "footer-contact": "Contacto Directo",
        "footer-copyright": "© 2025 Daniel Argüello Martínez. Todos los derechos reservados."
    },
    en: {
        // Navigation
        "nav-home": "Home",
        "nav-about": "About Me",
        "nav-projects": "Projects",
        "nav-skills": "Skills",
        "nav-experience": "Experience",
        "nav-contact": "Contact",

        // Hero Section
        "nombreCompleto": "Daniel Argüello Martínez",
        "titulo": "Software Developer and IT Support Specialist",
        "eslogan": "Creating practical and secure digital solutions with passion for innovation",
        "descargaCV": "Download my CV",
        "contactame": "Contact Me",

        // About Me
        "sobreMiTitulo": "About Me",
        "saludoInicial": "Hi! I'm <span class='highlight'>Daniel Argüello Martínez</span>",
        "descripcionPersonal": "Full stack software developer and IT support specialist with hands-on experience in technical problem-solving and robust application development. I specialize in creating efficient and secure digital solutions that transform ideas into reality.",
        "descripcionAcademica": "Currently pursuing Computer Engineering at Universidad Estatal a Distancia (UNED), complementing my technical background with solid knowledge in programming, software architecture, and agile methodologies.",
        "estatProyectos": "5+",
        "estatProyectosDesc": "Completed Projects",
        "estatLenguajes": "6+",
        "estatLenguajesDesc": "Programming Languages",
        "estatIdiomas": "4",
        "estatIdiomasDesc": "Languages",

        // Projects
        "proyectosTitulo": "Projects",
        "proyectosSubtitulo": "Explore some of my most outstanding work",
        "trabajandoEn": "Working on this project...",
        "proyecto1Titulo": "Virtual Store",
        "proyecto1Desc": "E-commerce with product catalog and shopping cart",
        "proyecto2Titulo": "Notes Manager",
        "proyecto2Desc": "Desktop application for personal notes management",
        "proyecto3Titulo": "Currency Converter",
        "proyecto3Desc": "Mobile app for real-time currency conversion",
        "proyecto4Titulo": "Barbershop Web",
        "proyecto4Desc": "Website with WhatsApp integration for appointments",
        "proyecto5Titulo": "Time Manager",
        "proyecto5Desc": "Free time management system with macros",

        // Education
        "educacion": "Education",
        "covao": "Vocational College of Arts and Crafts COVAO",
        "covaoFecha": "2021-2023",
        "uned": "National Distance Learning University UNED",
        "unedFecha": "2024-Present",
        "carrera": "Computer Engineering",

        // Contact
        "contactoTitulo": "Contact Me",
        "contactoIntro": "Do you have a project in mind or want to collaborate? I'd love to hear from you! Contact me through any of these channels:",
        "email": "Email",
        "ubicacion": "Location",

        // Footer
        "footer-description": "Full Stack Software Developer",
        "footer-tagline": "Transforming ideas into digital solutions",
        "footer-navigation": "Navigation",
        "footer-contact": "Direct Contact",
        "footer-copyright": "© 2025 Daniel Argüello Martínez. All rights reserved."
    }
};

// ========================================
// INICIALIZACIÓN
// ========================================

document.addEventListener('DOMContentLoaded', () => {
    initializeLanguage();
    initializeTheme();
    initializeNavbar();
    initializeCarousel();
    initializeAnimations();
    initializeTimeline();
});

// ========================================
// SISTEMA DE IDIOMAS
// ========================================

function initializeLanguage() {
    const savedLang = localStorage.getItem('preferredLanguage') || 'es';
    changeLanguage(savedLang);

    // Event listener para el selector de idioma en el navbar
    const langOptions = document.querySelectorAll('.lang-option');
    langOptions.forEach(option => {
        option.addEventListener('click', (e) => {
            e.stopPropagation();
            const lang = option.getAttribute('data-lang');
            changeLanguage(lang);
        });
    });
}

function changeLanguage(lang) {
    localStorage.setItem('preferredLanguage', lang);
    document.documentElement.setAttribute('lang', lang);

    // Actualizar el indicador de idioma actual
    const currentLangSpan = document.querySelector('.current-lang');
    if (currentLangSpan) {
        currentLangSpan.textContent = lang.toUpperCase();
    }

    // Actualizar todos los textos traducibles
    document.querySelectorAll('[data-translate]').forEach(element => {
        const key = element.getAttribute('data-translate');
        if (translations[lang] && translations[lang][key]) {
            // Preservar HTML en el contenido
            if (translations[lang][key].includes('<')) {
                element.innerHTML = translations[lang][key];
            } else {
                element.textContent = translations[lang][key];
            }
        }
    });
}

// ========================================
// SISTEMA DE TEMAS (DARK/LIGHT)
// ========================================

function initializeTheme() {
    const themeToggle = document.getElementById('theme-toggle');

    if (themeToggle) {
        const savedTheme = localStorage.getItem('theme') || 'light';
        document.documentElement.setAttribute('data-theme', savedTheme);
        updateThemeIcon(savedTheme);

        themeToggle.addEventListener('click', () => {
            const currentTheme = document.documentElement.getAttribute('data-theme') || 'light';
            const newTheme = currentTheme === 'light' ? 'dark' : 'light';

            document.documentElement.setAttribute('data-theme', newTheme);
            localStorage.setItem('theme', newTheme);
            updateThemeIcon(newTheme);
        });
    }
}

function updateThemeIcon(theme) {
    const sunIcon = document.querySelector('.fa-sun');
    const moonIcon = document.querySelector('.fa-moon');

    if (sunIcon && moonIcon) {
        sunIcon.style.display = theme === 'dark' ? 'block' : 'none';
        moonIcon.style.display = theme === 'dark' ? 'none' : 'block';
    }
}

// ========================================
// NAVEGACIÓN
// ========================================

function initializeNavbar() {
    const menuBtn = document.querySelector('.menu-btn');
    const navLinks = document.querySelector('.nav-links');
    const navbar = document.querySelector('.navbar');

    // Toggle menú móvil
    if (menuBtn && navLinks) {
        menuBtn.addEventListener('click', () => {
            navLinks.classList.toggle('active');
            menuBtn.classList.toggle('active');
        });
    }

    // Scroll suave mejorado
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const targetId = this.getAttribute('href');

            if (targetId === '#' || targetId === '') return;

            e.preventDefault();
            const targetElement = document.querySelector(targetId);

            if (targetElement) {
                const headerOffset = 80;
                const elementPosition = targetElement.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });

                // Cerrar menú móvil si está abierto
                if (navLinks && navLinks.classList.contains('active')) {
                    navLinks.classList.remove('active');
                    if (menuBtn) menuBtn.classList.remove('active');
                }
            }
        });
    });

    // Navbar hide/show on scroll
    let lastScroll = 0;

    window.addEventListener('scroll', () => {
        const currentScroll = window.pageYOffset;

        // Agregar clase scrolled
        if (currentScroll > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }

        // Hide/show navbar
        if (currentScroll > lastScroll && currentScroll > 100) {
            navbar.classList.add('hidden');
        } else {
            navbar.classList.remove('hidden');
        }

        lastScroll = currentScroll;
    });
}

// ========================================
// CARRUSEL DE PROYECTOS
// ========================================

function initializeCarousel() {
    const slides = document.querySelectorAll('.project-slide');
    const prevBtn = document.querySelector('.carousel-button.prev');
    const nextBtn = document.querySelector('.carousel-button.next');
    const dots = document.querySelectorAll('.carousel-dot');
    let currentSlide = 0;
    let autoPlayInterval;

    if (slides.length === 0) return;

    function showSlide(index) {
        slides.forEach((slide, i) => {
            slide.classList.toggle('active', i === index);
        });

        dots.forEach((dot, i) => {
            dot.classList.toggle('active', i === index);
        });
    }

    function nextSlide() {
        currentSlide = (currentSlide + 1) % slides.length;
        showSlide(currentSlide);
    }

    function prevSlide() {
        currentSlide = (currentSlide - 1 + slides.length) % slides.length;
        showSlide(currentSlide);
    }

    function goToSlide(index) {
        currentSlide = index;
        showSlide(currentSlide);
        resetAutoPlay();
    }

    function resetAutoPlay() {
        clearInterval(autoPlayInterval);
        startAutoPlay();
    }

    function startAutoPlay() {
        autoPlayInterval = setInterval(nextSlide, 5000);
    }

    // Event listeners
    if (prevBtn) prevBtn.addEventListener('click', () => {
        prevSlide();
        resetAutoPlay();
    });

    if (nextBtn) nextBtn.addEventListener('click', () => {
        nextSlide();
        resetAutoPlay();
    });

    dots.forEach((dot, index) => {
        dot.addEventListener('click', () => goToSlide(index));
    });

    // Teclado navigation
    document.addEventListener('keydown', (e) => {
        if (e.key === 'ArrowLeft') {
            prevSlide();
            resetAutoPlay();
        } else if (e.key === 'ArrowRight') {
            nextSlide();
            resetAutoPlay();
        }
    });

    // Touch/swipe support para móviles
    let touchStartX = 0;
    let touchEndX = 0;

    const carousel = document.querySelector('.projects-carousel');
    if (carousel) {
        carousel.addEventListener('touchstart', (e) => {
            touchStartX = e.changedTouches[0].screenX;
        });

        carousel.addEventListener('touchend', (e) => {
            touchEndX = e.changedTouches[0].screenX;
            handleSwipe();
        });

        function handleSwipe() {
            const swipeThreshold = 50;
            const diff = touchStartX - touchEndX;

            if (Math.abs(diff) > swipeThreshold) {
                if (diff > 0) {
                    nextSlide();
                } else {
                    prevSlide();
                }
                resetAutoPlay();
            }
        }
    }

    // Inicializar
    showSlide(currentSlide);
    startAutoPlay();

    // Pausar auto-play cuando el mouse está sobre el carrusel
    if (carousel) {
        carousel.addEventListener('mouseenter', () => {
            clearInterval(autoPlayInterval);
        });

        carousel.addEventListener('mouseleave', () => {
            startAutoPlay();
        });
    }
}

// ========================================
// ANIMACIONES
// ========================================

function initializeAnimations() {
    // Observer para animaciones de entrada
    const appearOnScroll = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-in');
                appearOnScroll.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px"
    });

    // Observar elementos para animación
    const elementsToAnimate = document.querySelectorAll('.skill, .project-card, .timeline-item, .contact-card, .education-card, .stat-item');
    elementsToAnimate.forEach((element) => {
        element.classList.add('animate-hidden');
        appearOnScroll.observe(element);
    });

    // Animación de barras de progreso
    const progressObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const progress = entry.target;
                const width = progress.style.width;
                progress.style.width = '0';
                setTimeout(() => {
                    progress.style.width = width;
                }, 100);
                progressObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });

    document.querySelectorAll('.progress').forEach(bar => {
        progressObserver.observe(bar);
    });
}

// ========================================
// EXPERIENCIA (TIMELINE)
// ========================================

function initializeTimeline() {
    const expandButtons = document.querySelectorAll('.btn-expand');

    expandButtons.forEach(button => {
        button.addEventListener('click', () => {
            const targetId = button.dataset.expand + '-details';
            const details = document.getElementById(targetId);

            if (details) {
                const isActive = details.classList.contains('active');
                details.classList.toggle('active');
                button.textContent = isActive ? 'Ver más' : 'Ver menos';
            }
        });
    });
}

// ========================================
// MANEJO DE IMÁGENES
// ========================================

// Manejar la carga de imágenes de proyectos
document.querySelectorAll('.project-image img').forEach(img => {
    img.addEventListener('load', function() {
        const loader = this.parentElement.querySelector('.image-loader');
        if (loader) {
            loader.style.display = 'none';
        }
    });

    img.addEventListener('error', function() {
        this.parentElement.classList.add('image-error');
    });
});

// ========================================
// UTILIDADES
// ========================================

// Función para detectar si el usuario prefiere modo oscuro
function prefersDarkMode() {
    return window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
}

// Listener para cambios en la preferencia del sistema
if (window.matchMedia) {
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', e => {
        if (!localStorage.getItem('theme')) {
            const newTheme = e.matches ? 'dark' : 'light';
            document.documentElement.setAttribute('data-theme', newTheme);
            updateThemeIcon(newTheme);
        }
    });
}

// ========================================
// SMOOTH SCROLL POLYFILL PARA NAVEGADORES ANTIGUOS
// ========================================

// Verificar si el navegador soporta smooth scroll
if (!('scrollBehavior' in document.documentElement.style)) {
    const smoothScrollPolyfill = () => {
        const links = document.querySelectorAll('a[href^="#"]');

        links.forEach(link => {
            link.addEventListener('click', function(e) {
                const targetId = this.getAttribute('href');
                if (targetId === '#' || targetId === '') return;

                e.preventDefault();
                const targetElement = document.querySelector(targetId);

                if (targetElement) {
                    const headerOffset = 80;
                    const elementPosition = targetElement.getBoundingClientRect().top;
                    const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

                    window.scrollTo({
                        top: offsetPosition,
                        behavior: 'smooth'
                    });
                }
            });
        });
    };

    smoothScrollPolyfill();
}

console.log('%c💼 Portafolio Daniel Argüello', 'font-size: 20px; font-weight: bold; color: #6366f1;');
console.log('%c✨ Desarrollado con pasión y dedicación', 'font-size: 14px; color: #8b5cf6;');
console.log('%c🚀 Powered by HTML, CSS y JavaScript vanilla', 'font-size: 12px; color: #6366f1;');
