document.addEventListener('DOMContentLoaded', () => {
    // Menu Toggle
    const menuBtn = document.querySelector('.menu-btn');
    const navLinks = document.querySelector('.nav-links');

    if (menuBtn && navLinks) {
        menuBtn.addEventListener('click', () => {
            navLinks.classList.toggle('active');
        });
    }

    // Scroll suave mejorado
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            
            if (targetId === '#') return; // Ignorar si es solo #
            
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                const headerOffset = 80; // Ajusta según la altura de tu navbar
                const elementPosition = targetElement.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });

                // Si estamos en móvil, cerrar el menú
                const navLinks = document.querySelector('.nav-links');
                if (navLinks.classList.contains('active')) {
                    navLinks.classList.remove('active');
                }
            }
        });
    });

    // Filtrado de Proyectos
    const filterButtons = document.querySelectorAll('.filter-btn');
    const projectCards = document.querySelectorAll('.project-card');

    filterButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            filterButtons.forEach(btn => btn.classList.remove('active'));
            btn.classList.add('active');
            
            const filterValue = btn.getAttribute('data-filter');
            
            projectCards.forEach(card => {
                card.style.display = filterValue === 'todos' || 
                                   card.getAttribute('data-category') === filterValue ? 
                                   'block' : 'none';
            });
        });
    });

    // Animaciones de scroll
    const appearOnScroll = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-in');
                appearOnScroll.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: "0px"
    });

    // Observar elementos para animación
    document.querySelectorAll('.skill, .project-card, .timeline-item, .contact-card').forEach((element) => {
        element.classList.add('animate-hidden');
        appearOnScroll.observe(element);
    });

    // Animación de barras de progreso
    const progressObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate');
            }
        });
    }, { threshold: 0.5 });

    document.querySelectorAll('.progress').forEach(bar => {
        progressObserver.observe(bar);
    });

    // Manejo del tema
    const themeToggle = document.getElementById('theme-toggle');
    
    if (themeToggle) {
        const updateThemeIcon = (theme) => {
            const sunIcon = document.querySelector('.fa-sun');
            const moonIcon = document.querySelector('.fa-moon');
            
            if (sunIcon && moonIcon) {
                sunIcon.style.display = theme === 'dark' ? 'block' : 'none';
                moonIcon.style.display = theme === 'dark' ? 'none' : 'block';
            }
        };

        themeToggle.addEventListener('click', () => {
            const currentTheme = document.documentElement.getAttribute('data-theme') || 'light';
            const newTheme = currentTheme === 'light' ? 'dark' : 'light';
            
            document.documentElement.setAttribute('data-theme', newTheme);
            localStorage.setItem('theme', newTheme);
            updateThemeIcon(newTheme);
        });

        // Cargar tema guardado
        const savedTheme = localStorage.getItem('theme') || 'light';
        document.documentElement.setAttribute('data-theme', savedTheme);
        updateThemeIcon(savedTheme);
    }

    // Manejo de idiomas
    const savedLang = localStorage.getItem('preferredLanguage') || 'es';
    changeLanguage(savedLang);

    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            changeLanguage(btn.getAttribute('data-lang'));
        });
    });

    // Manejo del navbar en scroll
    let lastScroll = 0;
    const navbar = document.querySelector('.navbar');
    
    window.addEventListener('scroll', () => {
        const currentScroll = window.pageYOffset;
        
        if (currentScroll > lastScroll && currentScroll > 100) {
            navbar.classList.add('hidden');
        } else {
            navbar.classList.remove('hidden');
        }
        
        lastScroll = currentScroll;
    });

    // Carrusel de proyectos
    const carousel = document.querySelector('.projects-carousel');
    const slides = document.querySelectorAll('.project-slide');
    const prevBtn = document.querySelector('.carousel-button.prev');
    const nextBtn = document.querySelector('.carousel-button.next');
    let currentSlide = 0;



    function updateSlides() {
        slides.forEach((slide, index) => {
            slide.classList.toggle('active', index === currentSlide);
        });
        
        document.querySelectorAll('.carousel-dot').forEach((dot, index) => {
            dot.classList.toggle('active', index === currentSlide);
        });
    }

    function goToSlide(index) {
        currentSlide = index;
        updateSlides();
    }

    function nextSlide() {
        currentSlide = (currentSlide + 1) % slides.length;
        updateSlides();
    }

    function prevSlide() {
        currentSlide = (currentSlide - 1 + slides.length) % slides.length;
        updateSlides();
    }

    if (prevBtn && nextBtn) {
        prevBtn.addEventListener('click', prevSlide);
        nextBtn.addEventListener('click', nextSlide);
    }

    // Inicializar carrusel
    updateSlides();

    // Auto-play opcional
    setInterval(nextSlide, 5000);

    // Scroll con inercia solo en los extremos
    let lastScrollTop = 0;
    let scrollTimeout;
    const inertiaDistance = 400;
    const inertiaDuration = 600;
    const threshold = 200; // Distancia desde los extremos donde se activa la inercia

    window.addEventListener('wheel', (e) => {
        clearTimeout(scrollTimeout);
        
        const direction = e.deltaY > 0 ? 1 : -1;
        const currentScroll = window.pageYOffset;
        const documentHeight = document.documentElement.scrollHeight;
        const windowHeight = window.innerHeight;
        
        // Verificar si estamos cerca del inicio o final
        const isNearTop = currentScroll < threshold;
        const isNearBottom = (windowHeight + currentScroll + threshold) > documentHeight;

        // Solo aplicar inercia si estamos cerca de los extremos
        if (isNearTop || isNearBottom) {
            lastScrollTop = currentScroll;
            
            scrollTimeout = setTimeout(() => {
                const targetPosition = lastScrollTop + (direction * inertiaDistance);
                
                // Asegurar que no scrollee más allá de los límites
                const finalPosition = Math.max(0, Math.min(targetPosition, documentHeight - windowHeight));
                
                window.scrollTo({
                    top: finalPosition,
                    behavior: 'smooth'
                });
            }, 50);
        }
    });

    // Funcionalidad Ver más
    document.querySelectorAll('.btn-expand').forEach(button => {
        button.addEventListener('click', () => {
            const targetId = button.dataset.expand + '-details';
            const details = document.getElementById(targetId);
            details.classList.toggle('active');
            button.textContent = details.classList.contains('active') ? 'Ver menos' : 'Ver más';
        });
    });
});

function changeLanguage(lang) {
    localStorage.setItem('preferredLanguage', lang);

    // Actualizar el atributo lang del documento
    document.documentElement.setAttribute('lang', lang);

    // Actualizar botones de idioma
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.classList.toggle('active', btn.getAttribute('data-lang') === lang);
    });

    // Actualizar textos traducibles
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

// Objeto de traducciones
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
