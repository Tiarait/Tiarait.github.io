// =============================================
// TRANSLATIONS
// =============================================
const translations = {
    en: {
        "nav.about": "About",
        "nav.skills": "Skills",
        "nav.projects": "Projects",
        "nav.contact": "Contact",
        "hero.title": "Vasyl Raiskyi",
        "hero.subtitle": "Android Developer",
        "hero.cta": "View Portfolio",
        "about.title": "About Me",
        "about.text": "Welcome. I'm Vasyl Raiskyi, a freelance Android developer from Ukraine. I specialize in building robust applications for mobile and Android TV, Telegram bots and other digital solutions. As a developer, I'm always eager to take on new challenges and seize opportunities to learn and grow. I'm dedicated to improving my skills and have a strong work ethic.",
        "projects.title": "Selected Works",
        "resume.title": "Resume",
        "contact.title": "Contacts",
        "skills.title": "Technical Skills",
        "skills.languages": "Languages",
        "skills.frameworks": "Frameworks",
        "skills.database": "Database",
        "skills.networking": "Networking",
        "skills.arch": "Architecture",
        "skills.integrations": "Integrations"
    },
    uk: {
        "nav.about": "Про мене",
        "nav.skills": "Навички",
        "nav.projects": "Проекти",
        "nav.contact": "Контакти",
        "hero.title": "Василь Райський",
        "hero.subtitle": "Android Розробник",
        "hero.cta": "Портфоліо",
        "about.title": "Про Мене",
        "about.text": "Вітаю. Мене звати Василь Райський, я Android-розробник-фрілансер з України. Спеціалізуюся на створенні надійних застосунків для мобільних пристроїв і Android TV, Telegram-ботів та інших цифрових рішень. Як розробник, постійно шукаю нові виклики й можливості для професійного розвитку.",
        "projects.title": "Проекти",
        "resume.title": "Резюме",
        "contact.title": "Зв'язатися зі мною",
        "skills.title": "Технічні навички",
        "skills.languages": "Мови",
        "skills.frameworks": "Фреймворки",
        "skills.database": "Бази даних",
        "skills.networking": "Технології та бібліотеки",
        "skills.arch": "Архітектура",
        "skills.integrations": "Інтеграції"
    }
};

// =============================================
// PROJECTS DATA
// =============================================
const projects = [
    {
        id: "devsurf",
        title: { en: "DevSurf", uk: "DevSurf" },
        desc: {
            en: "DevSurf is a mobile web browser with built-in developer tools. Inspect pages, run JavaScript, view logs, and debug websites directly on your device.",
            uk: "DevSurf — це мобільний веббраузер із вбудованими інструментами для розробників. Перевіряйте сторінки, запускайте JavaScript, переглядайте журнали та налагоджуйте вебсайти безпосередньо на своєму пристрої."
        },
        category: "Android",
        link: "/DevSurf-Intro/",
        img: "./assets/images/portfolio/banner_devsurf.png"
    },
    {
        id: "poi",
        title: { en: "Universal Bot", uk: "Universal Bot" },
        desc: {
            en: "AI-powered Telegram Bot – multi-language bot for math calculations, media downloads, audio/video processing, Telegram message parsing, and chat info.",
            uk: "Telegram-бот на базі штучного інтелекту – багатомовний бот для математичних розрахунків, завантаження медіа, обробки аудіо/відео, розбору повідомлень Telegram та інформації в чаті."
        },
        category: "Python. Telegram bot",
        link: "https://github.com/Tiarait/Universal-Bot",
        img: "./assets/images/portfolio/banner_tg.png"
    },
    {
        id: "aimuse",
        title: { en: "AI Muse", uk: "AI Muse" },
        desc: {
            en: "Generates images using advanced AI APIs. Supports multiple sources and refined settings.",
            uk: "Генерація зображень за допомогою передових AI API. Підтримка декількох джерел."
        },
        category: "Android",
        link: "/AI-MUSE-Intro/",
        img: "./assets/images/portfolio/banner_aimuse.png"
    },
    {
        id: "httpfs-desktop",
        title: { en: "Http FS (Desktop)", uk: "Http FS (Desktop)" },
        desc: {
            en: "HTTP/HTTPS server for sharing files over Wi-Fi. Available for Mac and Windows.",
            uk: "HTTP/HTTPS сервер для обміну файлами через Wi-Fi. Для Mac та Windows."
        },
        category: "Node.js",
        link: "/HTTP-FS-Desktop-Intro/",
        img: "./assets/images/portfolio/banner_httpfs_d.png"
    },
    {
        id: "webdavfs",
        title: { en: "WebDAV FS", uk: "WebDAV FS" },
        desc: {
            en: "Secure local WebDAV/FTP server for remote file management with TLS support.",
            uk: "Безпечний локальний WebDAV/FTP сервер для віддаленого управління файлами."
        },
        category: "Android",
        link: "/WebDav-FS-Intro/",
        img: "./assets/images/portfolio/banner_webdavfs.png"
    },
    {
        id: "httpfs",
        title: { en: "Http FS", uk: "Http FS" },
        desc: {
            en: "Dynamic file-sharing application for Wi-Fi networks and hotspots.",
            uk: "Динамічний додаток для обміну файлами в мережах Wi-Fi."
        },
        category: "Android",
        link: "/Http-FS-Intro/",
        img: "./assets/images/portfolio/banner_httpfs_a.png"
    }
];

// =============================================
// STATE
// =============================================
// Get language from browser or saved, default to 'en'
let currentLang = localStorage.getItem('language') || 
    (navigator.language.startsWith('uk') ? 'uk' : 'en');

// Get theme from browser or saved, default to 'light'
let currentTheme = localStorage.getItem('theme') || 
    (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');

// =============================================
// RENDER PROJECTS
// =============================================
function renderProjects() {
    const list = document.getElementById('project-list');
    if (!list) return;

    list.innerHTML = '';
    projects.forEach((p, index) => {
        const card = document.createElement('div');
        card.className = 'project-card reveal';
        card.innerHTML = `
            <div class="project-img-wrapper">
                <img src="${p.img}" alt="${p.title[currentLang]}" class="project-img">
            </div>
            <div class="project-card-content">
                <p class="project-category">${p.category}</p>
                <h3>${p.title[currentLang]}</h3>
                <p>${p.desc[currentLang]}</p>
                <a href="${p.link}" target="_blank" class="btn-secondary">View Details</a>
            </div>
        `;
        list.appendChild(card);
    });

    // Re-observe new elements after a short delay
    setTimeout(observeElements, 100);
}

// =============================================
// UPDATE LANGUAGE
// =============================================
function updateLanguage() {
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (translations[currentLang][key]) {
            el.innerText = translations[currentLang][key];
        }
    });
    document.getElementById('lang-switch').innerText = currentLang.toUpperCase();
    localStorage.setItem('language', currentLang);
    renderProjects();
}

// =============================================
// PARALLAX SCROLLING
// =============================================
let parallaxElements = [];
let ticking = false;

function initParallax() {
    parallaxElements = document.querySelectorAll('.parallax-layer');
}

function updateParallax() {
    const scrolled = window.pageYOffset;
    const windowHeight = window.innerHeight;
    const heroHeight = document.querySelector('.hero').offsetHeight;
    const scrollPercent = scrolled / heroHeight;
    
    // Fade out parallax container from 50% to 100% scroll
    let opacity = 1;
    if (scrollPercent > 0.3) {
        opacity = Math.max(0, 1 - ((scrollPercent - 0.3) * 2));
    }
    document.querySelector('.parallax-container').style.opacity = opacity;
    
    parallaxElements.forEach(element => {
        const speed = parseFloat(element.dataset.speed) || 0.5;
        const layerClass = element.className.split(' ')[1]; // layer-back, layer-mid, etc.
        
        let yPos, scale;
        
        switch(layerClass) {
            case 'layer-front':
                // Moves down 3x slower than front (was layer-mid speed)
                yPos = (scrolled * speed * 0.33);
                scale = 1 + (scrolled * 0.0005);
                break;
            case 'layer-mid':
                // Moves down 4x slower than front
                yPos = (scrolled * speed * 0.33);
                scale = 1 + (scrolled * 0.0001);
                break;
            case 'layer-back':
                // Initially scaled, returns to normal size
                yPos = -(scrolled * speed * 0.3);
                scale = 1.1 - (scrolled * 0.0002);
                break;
            case 'layer-clouds':
                // Moves up, combined with animation
                yPos = -(scrolled * speed * 0.5);
                scale = 1 + (scrolled * 0.0003);
                break;
            default:
                yPos = -(scrolled * speed);
                scale = 1 + (scrolled * 0.0005);
        }
        
        element.style.transform = `translateY(${yPos}px) scale(${scale})`;
    });
    
    ticking = false;
}

// =============================================
// SCROLL PROGRESS AND ACTIVE NAVIGATION
// =============================================
function updateScrollProgress() {
    const scrollTop = window.pageYOffset;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const scrollPercent = (scrollTop / docHeight) * 100;
    document.querySelector('.scroll-progress').style.width = scrollPercent + '%';
}

function updateActiveNavigation() {
    const sections = document.querySelectorAll('section[id]');
    const scrollY = window.pageYOffset;
    const windowHeight = window.innerHeight;
    
    let currentSection = '';
    let minDistance = Infinity;
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop - 100;
        const sectionHeight = section.offsetHeight;
        const sectionId = section.getAttribute('id');
        
        // Check if section is in view
        if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
            currentSection = sectionId;
        }
        
        // For last section, check if we're near bottom of page
        if (sectionId === 'contact') {
            const distanceToBottom = document.documentElement.scrollHeight - (scrollY + windowHeight);
            if (distanceToBottom < 200) {
                currentSection = 'contact';
            }
        }
    });
    
    // Update active nav link
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === '#' + currentSection) {
            link.classList.add('active');
        }
    });
}

function onScroll() {
    lastScrollY = window.pageYOffset;

    if (!ticking) {
        requestAnimationFrame(() => {
            // Navbar scroll effect
            const nav = document.querySelector('.navbar');
            if (lastScrollY > 80) {
                nav.classList.add('scrolled');
            } else {
                nav.classList.remove('scrolled');
            }
            
            // Parallax effect
            if (parallaxElements.length > 0) {
                updateParallax();
            }
            
            // Update scroll progress
            updateScrollProgress();
            
            // Update active navigation
            updateActiveNavigation();
            
            ticking = false;
        });
        ticking = true;
    }
}

window.addEventListener('scroll', onScroll, { passive: true });
// =============================================
// SCROLL REVEAL ANIMATION
// =============================================
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -80px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

function observeElements() {
    document.querySelectorAll('.reveal:not(.visible)').forEach(el => {
        observer.observe(el);
    });
}

// =============================================
// SMOOTH SCROLL
// =============================================
function smoothScrollTo(target) {
    const targetElement = document.querySelector(target);
    if (!targetElement) return;
    
    targetElement.scrollIntoView({ 
        behavior: 'smooth', 
        block: 'start' 
    });
}

// =============================================
// EVENT LISTENERS
// =============================================
function initEventListeners() {
    // Language switch
    document.getElementById('lang-switch').addEventListener('click', () => {
        currentLang = currentLang === 'en' ? 'uk' : 'en';
        updateLanguage();
    });

    // Scroll indicator click (arrow in hero)
    const scrollIndicator = document.querySelector('.scroll-indicator');
    if (scrollIndicator) {
        scrollIndicator.addEventListener('click', () => {
            smoothScrollTo('#about');
        });
    }

    // Logo click
    const logo = document.querySelector('.logo');
    if (logo) {
        logo.addEventListener('click', (e) => {
            e.preventDefault();
            smoothScrollTo('#hero');
        });
    }

    // Navigation links click
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href');
            smoothScrollTo(targetId);
        });
    });

    // Primary button click
    document.querySelectorAll('.btn-primary[href^="#"]').forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href');
            smoothScrollTo(targetId);
        });
    });

    // Theme switch
    document.getElementById('theme-switch').addEventListener('click', () => {
        currentTheme = currentTheme === 'dark' ? 'light' : 'dark';
        switchThemeWithAnimation();
    });
}

// =============================================
// THEME SWITCHING WITH PARALLAX IMAGES
// =============================================
function updateParallaxImages() {
    const isDark = currentTheme === 'dark';
    const images = document.querySelectorAll('.parallax-layer img');
    
    images.forEach(img => {
        const currentSrc = img.src;
        if (isDark) {
            // Add -dark suffix for dark theme
            if (!currentSrc.includes('-dark.png')) {
                img.src = currentSrc.replace('.png', '-dark.png');
            }
        } else {
            // Remove -dark suffix for light theme
            img.src = currentSrc.replace('-dark.png', '.png');
        }
    });
}

function applyTheme() {
    document.documentElement.setAttribute('data-theme', currentTheme);
    const icon = document.querySelector('#theme-switch i');
    icon.className = currentTheme === 'dark' ? 'bi bi-moon-stars-fill' : 'bi bi-sun-fill';
    localStorage.setItem('theme', currentTheme);
}

function switchThemeWithAnimation() {
    const parallaxContainer = document.querySelector('.parallax-container');
    
    // Fade out parallax container
    parallaxContainer.style.opacity = '0';
    
    // Wait for fade out, then change theme and images
    setTimeout(() => {
        applyTheme();
        updateParallaxImages();
        
        // Fade in parallax container
        setTimeout(() => {
            parallaxContainer.style.opacity = '1';
        }, 50);
    }, 400);
}

// =============================================
// INITIALIZATION
// =============================================
document.addEventListener('DOMContentLoaded', () => {
    // Apply saved theme and language first
    applyTheme();
    updateLanguage();
    
    // Initialize other features
    observeElements();
    initParallax();
    initEventListeners();
    
    // Update parallax images after theme is applied
    updateParallaxImages();
});
