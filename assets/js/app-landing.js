(function () {
    'use strict';

    const HELP_WIP_HTML = '<div class="help-wip"><h2>Work in Progress</h2><p>User guide is being prepared. Check back soon.</p></div>';
    const HELP_PATH = './help/HELP-en.md';
    const RELATED_VISIBLE = 2;
    const SITE_ORIGIN = 'https://tiarait.github.io';

    let currentTheme = localStorage.getItem('theme') ||
        (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');

    function setViewportHeight() {
        const vh = window.innerHeight * 0.01;
        document.documentElement.style.setProperty('--vh', `${vh}px`);
    }

    function applyTheme() {
        document.documentElement.setAttribute('data-theme', currentTheme);
        const icon = document.querySelector('#theme-switch i');
        if (icon) {
            icon.className = currentTheme === 'dark' ? 'bi bi-moon-stars-fill' : 'bi bi-sun-fill';
        }
        localStorage.setItem('theme', currentTheme);
    }

    function initTheme() {
        applyTheme();
        const btn = document.getElementById('theme-switch');
        if (btn) {
            btn.addEventListener('click', () => {
                currentTheme = currentTheme === 'dark' ? 'light' : 'dark';
                applyTheme();
            });
        }
    }

    function initScrollProgress() {
        const bar = document.querySelector('.scroll-progress');
        if (!bar) return;

        window.addEventListener('scroll', () => {
            const docHeight = document.documentElement.scrollHeight - window.innerHeight;
            const pct = docHeight > 0 ? (window.pageYOffset / docHeight) * 100 : 0;
            bar.style.width = pct + '%';
        }, { passive: true });
    }

    function initNavbarScroll() {
        const nav = document.querySelector('.navbar');
        if (!nav) return;

        window.addEventListener('scroll', () => {
            nav.classList.toggle('scrolled', window.pageYOffset > 40);
        }, { passive: true });
    }

    function initReveal() {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.08, rootMargin: '0px 0px -60px 0px' });

        document.querySelectorAll('.reveal:not(.visible)').forEach(el => observer.observe(el));
    }

    function initLightbox() {
        if (typeof Tobi !== 'undefined' && document.querySelector('.lightbox')) {
            new Tobi();
        }
    }

    function shuffle(arr) {
        const a = arr.slice();
        for (let i = a.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [a[i], a[j]] = [a[j], a[i]];
        }
        return a;
    }

    function escapeHtml(str) {
        return String(str)
            .replace(/&/g, '&amp;')
            .replace(/</g, '&lt;')
            .replace(/>/g, '&gt;')
            .replace(/"/g, '&quot;');
    }

    function relatedAppThumb(app) {
        if (app.banner) {
            return `<img src="${app.banner}" alt="" loading="lazy">`;
        }
        return `<span class="related-app-thumb-placeholder">${escapeHtml(app.name.charAt(0))}</span>`;
    }

    function relatedAppCard(app) {
        return `<a href="${app.path}" class="related-app-card" target="_blank" rel="noopener">
            <div class="related-app-thumb">${relatedAppThumb(app)}</div>
            <div class="related-app-body">
                <span class="related-app-category">${escapeHtml(app.category)}</span>
                <span class="related-app-name">${escapeHtml(app.name)}</span>
                <span class="related-app-desc">${escapeHtml(app.tagline)}</span>
            </div>
        </a>`;
    }

    function initRelatedApps() {
        const container = document.querySelector('[data-related-apps]');
        if (!container || typeof INTRO_APPS === 'undefined') return;

        const currentId = document.body.dataset.appId || '';
        const apps = shuffle(INTRO_APPS.filter(a => a.introId !== currentId));
        if (!apps.length) return;

        const visible = apps.slice(0, RELATED_VISIBLE);
        const hidden = apps.slice(RELATED_VISIBLE);
        const moreLabel = hidden.length === 1 ? '1 more project' : `${hidden.length} more projects`;

        container.innerHTML = `
            <h2 class="section-title">Also look at</h2>
            <div class="related-apps">
                <div class="related-apps-grid">${visible.map(relatedAppCard).join('')}</div>
                ${hidden.length ? `
                <details class="related-apps-spoiler">
                    <summary>
                        <span class="related-apps-summary-text">Show ${moreLabel}</span>
                        <i class="bi bi-chevron-down related-apps-chevron" aria-hidden="true"></i>
                    </summary>
                    <div class="related-apps-spoiler-body">
                        <div class="related-apps-grid">${hidden.map(relatedAppCard).join('')}</div>
                    </div>
                </details>` : ''}
            </div>`;
    }

    function renderStoreButton(btn) {
        const iconSrc = (typeof STORE_ICONS !== 'undefined' && STORE_ICONS[btn.icon]) || '';
        const proClass = btn.pro ? ' store-btn--pro' : '';
        return `<a href="${btn.href}" target="_blank" rel="noopener" class="store-btn${proClass}">
            <img src="${iconSrc}" alt="">
            <span class="store-btn-label"><span class="store-btn-s">${escapeHtml(btn.labelS)}</span><span class="store-btn-m">${escapeHtml(btn.labelM)}</span></span>
        </a>`;
    }

    function renderStoreButtons(app) {
        const buttons = app.storeButtons || [];
        if (!buttons.length) return;

        const desktop = document.querySelector('[data-app-actions-desktop]');
        const mobile = document.querySelector('[data-app-actions-mobile]');

        if (desktop) {
            desktop.innerHTML = buttons.map(renderStoreButton).join('');
        }
        if (mobile) {
            const mobileButtons = buttons.filter(btn => !btn.hideOnMobile);
            if (mobileButtons.length) {
                mobile.innerHTML = mobileButtons.map(renderStoreButton).join('');
                mobile.hidden = false;
            } else {
                mobile.innerHTML = '';
                mobile.hidden = true;
            }
        }
    }

    function renderAppHero(app, options) {
        if (!app) return;

        const heroName = app.heroName || app.name;
        const opts = options || {};

        const logo = document.querySelector('.app-logo');
        if (logo && app.logo) {
            logo.src = app.logo;
            logo.alt = heroName;
        }

        const category = document.querySelector('.app-category');
        if (category) {
            category.textContent = app.category;
        }

        const nameEl = document.querySelector('.app-name');
        if (nameEl) nameEl.textContent = heroName;

        const taglineEl = document.querySelector('.app-tagline');
        if (taglineEl) {
            taglineEl.innerHTML = app.taglineHtml || escapeHtml(app.tagline);
        }

        document.querySelectorAll('[data-app-help-link]').forEach(helpLink => {
            helpLink.hidden = opts.showHelpLink === false;
        });

        if (opts.showStoreButtons !== false) {
            renderStoreButtons(app);
        } else {
            document.querySelectorAll('[data-app-actions-desktop], [data-app-actions-mobile]').forEach(el => {
                el.innerHTML = '';
                el.hidden = true;
            });
        }
    }

    function initNavbar(app, isHelp) {
        const heroName = app.heroName || app.name;
        const navTitle = document.querySelector('.app-nav-title');
        const navBack = document.querySelector('[data-nav-back]');

        if (isHelp) {
            if (navBack) {
                navBack.hidden = false;
                const label = navBack.querySelector('span');
                if (label) label.textContent = heroName;
                navBack.setAttribute('aria-label', `Back to ${heroName}`);
            }
            if (navTitle) navTitle.textContent = 'User Help';
            document.title = `${heroName} — User Help`;
            setMetaTag({ name: 'description', content: `User help for ${heroName}` });
        } else {
            if (navTitle) navTitle.textContent = heroName;
        }
    }

    function renderFooterLinks(app) {
        const footer = document.querySelector('[data-app-footer]');
        if (!footer || !app?.footerLinks?.length) return;
        footer.innerHTML = app.footerLinks.map(link =>
            `<li><a href="${link.url}" target="_blank" rel="noopener">${escapeHtml(link.label)}</a></li>`
        ).join('');
    }

    function setMetaTag(attrs) {
        const { name, property, content } = attrs;
        if (!content) return;
        const selector = name
            ? `meta[name="${name}"]`
            : `meta[property="${property}"]`;
        let el = document.querySelector(selector);
        if (!el) {
            el = document.createElement('meta');
            if (name) el.name = name;
            else el.setAttribute('property', property);
            document.head.appendChild(el);
        }
        el.content = content;
    }

    function setLinkTag(rel, href) {
        if (!href) return;
        let el = document.querySelector(`link[rel="${rel}"]`);
        if (!el) {
            el = document.createElement('link');
            el.rel = rel;
            document.head.appendChild(el);
        }
        el.href = href;
    }

    function injectJsonLd(data) {
        let el = document.getElementById('app-jsonld');
        if (!el) {
            el = document.createElement('script');
            el.type = 'application/ld+json';
            el.id = 'app-jsonld';
            document.head.appendChild(el);
        }
        el.textContent = JSON.stringify(data);
    }

    function initSeo(app, isHelp) {
        const basePath = app.path.replace(/\/$/, '');
        const pagePath = isHelp ? `${basePath}/help.html` : `${basePath}/`;
        const canonical = `${SITE_ORIGIN}${pagePath}`;

        setLinkTag('canonical', canonical);
        setMetaTag({ property: 'og:url', content: canonical });
        setMetaTag({ property: 'og:image', content: `${SITE_ORIGIN}${basePath}/assets/og-image.png` });
        setMetaTag({ property: 'twitter:card', content: 'summary_large_image' });

        if (isHelp) return;

        const isDesktop = app.category === 'Node.js';
        injectJsonLd({
            '@context': 'https://schema.org',
            '@type': 'SoftwareApplication',
            name: app.name,
            description: app.metaDescription || app.tagline,
            applicationCategory: isDesktop ? 'DesktopApplication' : 'MobileApplication',
            operatingSystem: isDesktop ? 'Windows, macOS' : 'Android',
            url: canonical,
            image: `${SITE_ORIGIN}${basePath}/assets/og-image.png`,
            author: {
                '@type': 'Person',
                name: 'Vasyl Raiskyi',
                url: SITE_ORIGIN
            },
            offers: {
                '@type': 'Offer',
                price: '0',
                priceCurrency: 'USD'
            }
        });
    }

    function renderScreenshots(app) {
        const list = document.querySelector('[data-app-screenshots]');
        if (!list || !app.screenshotCount) return;

        const items = [];
        for (let i = 0; i < app.screenshotCount; i++) {
            const src = `content/image/${i}.png`;
            items.push(`<a href="${src}" class="app-screenshot-link lightbox"><img src="${src}" class="app-screenshot" alt="Screenshot ${i + 1}"></a>`);
        }
        list.innerHTML = items.join('');
    }

    function renderDescription(app) {
        const container = document.querySelector('[data-app-description]');
        if (!container || !app.descriptionHtml) return;
        container.innerHTML = app.descriptionHtml;
    }

    function initIntroPage() {
        if (document.body.classList.contains('page-help')) return;

        const app = typeof getIntroApp === 'function'
            ? getIntroApp(document.body.dataset.appId || '')
            : null;
        if (!app) return;

        const heroName = app.heroName || app.name;
        const metaDesc = app.metaDescription || app.tagline;

        document.title = heroName;
        setMetaTag({ name: 'description', content: metaDesc });
        setMetaTag({ property: 'og:title', content: heroName });
        setMetaTag({ property: 'og:description', content: metaDesc });

        initNavbar(app, false);
        initSeo(app, false);
        renderAppHero(app, { showHelpLink: true, showStoreButtons: true });
        renderFooterLinks(app);
        renderScreenshots(app);
        renderDescription(app);
    }

    function initHelpPage() {
        const app = typeof getIntroApp === 'function'
            ? getIntroApp(document.body.dataset.appId || '')
            : null;
        if (!app) return;

        initNavbar(app, true);
        initSeo(app, true);
        renderAppHero(app, { showHelpLink: false, showStoreButtons: false });
        renderFooterLinks(app);
    }

    function parseMarkdown(text) {
        if (typeof marked !== 'undefined') {
            return marked.parse(text);
        }
        throw new Error('no markdown parser');
    }

    function initHelpContent() {
        const preview = document.querySelector('.md_preview');
        if (!preview) return;

        fetch(HELP_PATH)
            .then(r => {
                if (!r.ok) throw new Error('not found');
                return r.text();
            })
            .then(text => {
                if (!text.trim() || text.trim() === '# TODO') throw new Error('empty');
                preview.innerHTML = parseMarkdown(text);
                preview.querySelectorAll('table').forEach(table => {
                    const wrap = document.createElement('div');
                    wrap.className = 'table-wrap';
                    table.parentNode.insertBefore(wrap, table);
                    wrap.appendChild(table);
                });
                initReveal();
            })
            .catch(() => {
                preview.innerHTML = HELP_WIP_HTML;
            });
    }

    function initFooterYear() {
        document.querySelectorAll('[data-year]').forEach(el => {
            el.textContent = new Date().getFullYear();
        });
    }

    document.addEventListener('DOMContentLoaded', () => {
        setViewportHeight();
        window.addEventListener('resize', setViewportHeight);
        window.addEventListener('orientationchange', setViewportHeight);

        initTheme();
        initScrollProgress();
        initNavbarScroll();
        initIntroPage();
        initRelatedApps();
        initReveal();
        initLightbox();
        initFooterYear();

        if (document.body.classList.contains('page-help')) {
            initHelpPage();
            initHelpContent();
        }
    });
})();
