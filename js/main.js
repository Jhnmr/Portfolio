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

    // Efectos 3D para tarjetas
    document.querySelectorAll('.project-card, .contact-card').forEach(card => {
        card.addEventListener('mousemove', handleHover3D);
        card.addEventListener('mouseleave', resetHover3D);
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

    // Prevenir clic derecho
    document.addEventListener('contextmenu', (e) => e.preventDefault());

    // Prevenir atajos de teclado comunes para copiar
    document.addEventListener('keydown', (e) => {
        if (e.ctrlKey && (e.key === 'c' || e.key === 'C' || e.key === 'u' || e.key === 'U')) {
            e.preventDefault();
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

// Funciones auxiliares
function handleHover3D(e) {
    const card = this;
    const cardRect = card.getBoundingClientRect();
    const x = e.clientX - cardRect.left;
    const y = e.clientY - cardRect.top;
    
    const centerX = cardRect.width / 2;
    const centerY = cardRect.height / 2;
    
    const rotateX = (y - centerY) / 10;
    const rotateY = -(x - centerX) / 10;
    
    card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.05)`;
}

function resetHover3D() {
    this.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) scale(1)';
}

function changeLanguage(lang) {
    localStorage.setItem('preferredLanguage', lang);
    
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.classList.toggle('active', btn.getAttribute('data-lang') === lang);
    });

    document.querySelectorAll('[data-translate]').forEach(element => {
        const key = element.getAttribute('data-translate');
        if (translations[lang][key]) {
            element.textContent = translations[lang][key];
        }
    });
}

// Objeto de traducciones
const translations = {
    es: {
        // ... tus traducciones en español ...
    },
    en: {
        // ... tus traducciones en inglés ...
    }
}; 