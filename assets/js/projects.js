/**
 * Shared project data for portfolio (script.js) and app landings (*-Intro).
 */
const STORE_ICONS = {
    'google-play': '/assets/images/app/google-play.png',
    'github': '/assets/images/app/github.png',
    'youtube': '/assets/images/app/youtube.png',
    'patreon': '/assets/images/app/patreon.png',
    'mega': '/assets/images/app/mega.png'
};

const INTRO_APPS = [
    {
        introId: 'DevSurf-Intro',
        id: 'devsurf',
        name: 'DevSurf',
        tagline: 'Web browser with developer tools: inspect pages, run/inject JS, view console logs.',
        category: 'Android',
        path: '/DevSurf-Intro/',
        logo: 'content/image/logo.png',
        banner: '/assets/images/portfolio/banner_devsurf.png',
        github: 'https://github.com/Tiarait/DevSurf',
        footerLinks: [
            { label: 'Privacy', url: 'https://github.com/Tiarait/DevSurf/blob/main/Privacy_Policy.md' },
            { label: 'GitHub', url: 'https://github.com/Tiarait/DevSurf' }
        ],
        storeButtons: [
            { href: 'https://play.google.com/store/apps/details?id=ua.tiar.devsurf', icon: 'google-play', labelS: 'Get it on', labelM: 'Google Play' },
            { href: 'https://play.google.com/store/apps/details?id=ua.tiar.devsurfpro', icon: 'google-play', labelS: 'Purchase', labelM: 'PRO version', pro: true, hideOnMobile: true },
            { href: 'https://github.com/Tiarait/DevSurf/releases', icon: 'github', labelS: 'Download from', labelM: 'GitHub release' }
        ],
        portfolio: {
            title: { en: 'DevSurf', uk: 'DevSurf' },
            desc: {
                en: 'DevSurf is a mobile web browser with built-in developer tools. Inspect pages, run JavaScript, view logs, and debug websites directly on your device.',
                uk: 'DevSurf — це мобільний веббраузер із вбудованими інструментами для розробників. Перевіряйте сторінки, запускайте JavaScript, переглядайте журнали та налагоджуйте вебсайти безпосередньо на своєму пристрої.'
            },
            img: './assets/images/portfolio/banner_devsurf.png'
        },
        metaDescription: 'Web browser with developer tools: inspect pages, run/inject JS, view console logs.',
        screenshotCount: 6,
        descriptionHtml: `<p>Web browser with developer tools: inspect pages, run/inject JS, view console logs.</p>
<p>DevSurf is a mobile web browser (standart WebView based) built for developers and power users. With built-in developer tools and flexible browsing features, you can inspect, debug, and test websites directly on your device — all without leaving your browser.</p>
<p>Key Features:</p>
<ul>
<li>Developer Console: Inspect elements, run or inject JavaScript, and view logs in real time. Debug websites just like on desktop.</li>
<li>Multiple Tabs: Organize your workflow with easy-to-use tab management.</li>
<li>Flexible Settings: Customize browser behavior to suit your workflow. Control layout, scripts, and more.</li>
<li>Ad Block: Browse faster and cleaner with built-in ad blocking.</li>
<li>Custom User Agents: Switch user agents to test responsive layouts or simulate different devices.</li>
<li>Privacy Focused: All developer logs and console data stay on your device. No unnecessary tracking.</li>
</ul>
<p>Planned Features:</p>
<ul>
<li>Additional developer tools like network inspection and performance analysis.</li>
<li>Enhanced customization options for power users.</li>
</ul>`
    },
    {
        introId: 'AI-MUSE-Intro',
        id: 'aimuse',
        name: 'AI Muse',
        tagline: 'Transform your ideas into best visualization. Handy application for generating AI images from internet sources.',
        category: 'Android',
        path: '/AI-MUSE-Intro/',
        logo: 'content/image/logo.webp',
        banner: '/assets/images/portfolio/banner_aimuse.png',
        github: 'https://github.com/Tiarait/AI-MUSE',
        footerLinks: [
            { label: 'Privacy', url: 'https://github.com/Tiarait/AI-MUSE/blob/main/Privacy_Policy.md' },
            { label: 'GitHub', url: 'https://github.com/Tiarait/AI-MUSE' }
        ],
        storeButtons: [
            { href: 'https://www.patreon.com/posts/ai-muse-android-112884039?utm_medium=clipboard_copy&utm_source=copyLink&utm_campaign=postshare_creator&utm_content=join_link', icon: 'patreon', labelS: 'Download', labelM: 'Patreon' },
            { href: 'https://youtu.be/hNnQyZWJ6Ec', icon: 'youtube', labelS: 'Watch on', labelM: 'YouTube' }
        ],
        portfolio: {
            title: { en: 'AI Muse', uk: 'AI Muse' },
            desc: {
                en: 'Generates images using advanced AI APIs. Supports multiple sources and refined settings.',
                uk: 'Генерація зображень за допомогою передових AI API. Підтримка декількох джерел.'
            },
            img: './assets/images/portfolio/banner_aimuse.png'
        },
        metaDescription: 'Client application for generating AI images.',
        screenshotCount: 8,
        descriptionHtml: `<p>App offers a powerful tool for generating images using advanced AI APIs.</p>
<p>It supports multiple generation sources, giving you a wide range of options for creating unique visual works. The user-friendly and intuitive interface allows you to easily configure all settings and quickly obtain results.</p>
<p>Additionally, the app features a gallery with example requests and images generated from various sources to help you get inspired and start creating.</p>
<p>Whether you're looking to generate images for a creative project or just want to experiment with AI capabilities, our app provides all the necessary tools for that.</p>`
    },
    {
        introId: 'Http-FS-Intro',
        id: 'httpfs',
        name: 'Http FS',
        heroName: 'Http FS (file server)',
        tagline: 'This is a http, webdav server for sharing files between users on a Wi-Fi network.',
        category: 'Android',
        path: '/Http-FS-Intro/',
        logo: 'content/image/logo.webp',
        banner: '/assets/images/portfolio/banner_httpfs_a.png',
        github: 'https://github.com/Tiarait/HTTP-FS-file-server',
        footerLinks: [
            { label: 'Privacy', url: 'https://github.com/Tiarait/HTTP-FS-file-server/blob/main/Privacy_Policy.md' },
            { label: 'GitHub', url: 'https://github.com/Tiarait/HTTP-FS-file-server' }
        ],
        storeButtons: [
            { href: 'https://play.google.com/store/apps/details?id=tiar.ua.slf', icon: 'google-play', labelS: 'Get it on', labelM: 'Google Play' },
            { href: 'https://www.youtube.com/watch?v=inPCdfxVXMg', icon: 'youtube', labelS: 'Watch on', labelM: 'YouTube' },
            { href: 'https://play.google.com/store/apps/details?id=tiar.ua.slf.pro', icon: 'google-play', labelS: 'Purchase', labelM: 'PRO version', pro: true }
        ],
        portfolio: {
            title: { en: 'Http FS', uk: 'Http FS' },
            desc: {
                en: 'Dynamic file-sharing application for Wi-Fi networks and hotspots.',
                uk: 'Динамічний додаток для обміну файлами в мережах Wi-Fi.'
            },
            img: './assets/images/portfolio/banner_httpfs_a.png'
        },
        metaDescription: 'The online file sharing application works on the principle of a local HTTP server.',
        screenshotCount: 8,
        descriptionHtml: `<p>HTTP FS is a dynamic file-sharing application designed to simplify the transfer of files across devices within your Wi-Fi network or through a created hotspot. By transforming your device into a local HTTP server, the app allows you to effortlessly select folders for sharing, making them accessible to other users who can connect using a provided link or by scanning a QR code. With its straightforward interface and efficient setup, it offers a convenient solution for quick and easy file distribution.</p>
<p>The incorporation of WebDAV server capabilities extends the utility of this platform, providing a robust alternative for managing and sharing your files. Users can enjoy seamless access to documents, photos, and other digital content, with the advantage of heightened security measures protecting their data. This app appeals to anyone in need of effective digital content distribution within their network.</p>
<p>Experience seamless file sharing with a prime choice for those looking to distribute digital content effectively within their network. Whether it's for casual use, professional scenarios, or educational purposes, the versatility of this app is undeniable, reinforcing its status as essential software for efficient data management and accessibility.</p>
<p>With a lot of features:</p>
<ul>
<li>Supports SSL(https) connection.</li>
<li>Supports WebDAV API.</li>
<li>Supports rss api.</li>
<li>Completely ad-free (pro).</li>
<li>Simple logs to see who is using the server.</li>
<li>Server can start on boot device.</li>
<li>Switch between language.</li>
<li>Selecting a starting file, like index.html.</li>
<li>Set password and session time for more security.</li>
<li>Downloads folders and files like .zip.</li>
</ul>`
    },
    {
        introId: 'HTTP-FS-Desktop-Intro',
        id: 'httpfs-desktop',
        name: 'Http FS Desktop',
        heroName: 'Http FS (Desktop)',
        tagline: 'HTTP/HTTPS server for sharing files over Wi-Fi. For mac and windows OS.',
        taglineHtml: 'This is a http/https server for sharing files between users on a Wi-Fi network. For <strong>mac</strong> and <strong>windows</strong> OS.',
        category: 'Node.js',
        path: '/HTTP-FS-Desktop-Intro/',
        logo: 'content/image/logo.webp',
        banner: '/assets/images/portfolio/banner_httpfs_d.png',
        github: 'https://github.com/Tiarait/HTTP-FS-Desktop',
        footerLinks: [
            { label: 'LICENSE', url: 'https://github.com/Tiarait/HTTP-FS-Desktop/blob/main/LICENSE' },
            { label: 'GitHub', url: 'https://github.com/Tiarait/HTTP-FS-Desktop' }
        ],
        storeButtons: [
            { href: 'https://mega.nz/folder/gE4yUarB#cQ1MnVDnEow2I9TN-RWLjw', icon: 'mega', labelS: 'Download from', labelM: 'MEGA directory' },
            { href: 'https://github.com/Tiarait/HTTP-FS-Desktop/releases/tag/v0.0.0.1', icon: 'github', labelS: 'Download from', labelM: 'GitHub release' }
        ],
        portfolio: {
            title: { en: 'Http FS (Desktop)', uk: 'Http FS (Desktop)' },
            desc: {
                en: 'HTTP/HTTPS server for sharing files over Wi-Fi. Available for Mac and Windows.',
                uk: 'HTTP/HTTPS сервер для обміну файлами через Wi-Fi. Для Mac та Windows.'
            },
            img: './assets/images/portfolio/banner_httpfs_d.png'
        },
        metaDescription: 'This is a http/https server for sharing files between users on a Wi-Fi network. The online file sharing application works like a local HTTP server.',
        screenshotCount: 6,
        descriptionHtml: `<p>You can run a server on a Wi-Fi or local network and share files by selecting any available folder on your device and providing users on the network with a link to your HTTP server or by scanning a QR code.</p>
<p>Experience seamless file sharing with a prime choice for those looking to distribute digital content effectively within their network. Whether it's for casual use, professional scenarios, or educational purposes, the versatility of this app is undeniable, reinforcing its status as essential software for efficient data management and accessibility.</p>
<p>Important:</p>
<ul>
<li>If the project is of interest to anyone or there is support, then I plan to finalize all the WIP (work in progress) and switch to Electron js (the size will be ~300 MB, so I'm not sure if this is necessary).</li>
</ul>
<p>Also if You use NODE You can start the server by copying the repository:</p>
<ul>
<li><code>git clone https://github.com/Tiarait/HTTP-FS-Desktop.git</code></li>
<li><code>cd HTTP-FS-Desktop</code></li>
<li><code>npm i</code></li>
<li><code>npm run start</code></li>
</ul>`
    },
    {
        introId: 'WebDav-FS-Intro',
        id: 'webdavfs',
        name: 'WebDAV FS',
        heroName: 'WebDAV FS Server',
        tagline: 'Simple and secure local WebDav/FTP server for remote file management.',
        category: 'Android',
        path: '/WebDav-FS-Intro/',
        logo: 'content/image/logo.png',
        banner: '/assets/images/portfolio/banner_webdavfs.png',
        github: 'https://github.com/Tiarait/WebDav-FS',
        footerLinks: [
            { label: 'Privacy', url: 'https://github.com/Tiarait/WebDav-FS/blob/main/Privacy_Policy.md' },
            { label: 'GitHub', url: 'https://github.com/Tiarait/WebDav-FS' }
        ],
        storeButtons: [
            { href: 'https://play.google.com/store/apps/details?id=ua.tiar.webdavfs', icon: 'google-play', labelS: 'Get it on', labelM: 'Google Play' },
            { href: 'https://play.google.com/store/apps/details?id=ua.tiar.webdavfspro', icon: 'google-play', labelS: 'Purchase', labelM: 'PRO version', pro: true, hideOnMobile: true },
            { href: 'https://www.youtube.com/watch?v=bXpd1UOh21I', icon: 'youtube', labelS: 'Watch on', labelM: 'YouTube' },
            { href: 'https://github.com/Tiarait/WebDav-FS/releases', icon: 'github', labelS: 'Download from', labelM: 'GitHub release' }
        ],
        portfolio: {
            title: { en: 'WebDAV FS', uk: 'WebDAV FS' },
            desc: {
                en: 'Secure local WebDAV/FTP server for remote file management with TLS support.',
                uk: 'Безпечний локальний WebDAV/FTP сервер для віддаленого управління файлами.'
            },
            img: './assets/images/portfolio/banner_webdavfs.png'
        },
        metaDescription: 'Simple and secure local WebDav/FTP server for remote file management.',
        screenshotCount: 6,
        descriptionHtml: `<p>WebDAV server for Android devices.</p>
<p>The application deploys a local WebDav/FTP server for file management. You can easily set a password, select any folder on your device, set read-only mode, and enable a secure TLS connection for better security.</p>
<p>With a user-friendly interface, it offers a range of customizable settings to enhance your server experience. Users can easily configure the server by selecting the desired port, choosing a specific folder, and setting a password for added security. The option to enable "read-only" mode ensures controlled access.</p>
<p>Additionally, the app provides flexibility in how the server runs, offering choices to start it with the app or with the device itself. Users can also enhance security by enabling SSL (HTTPS) for encrypted communication. The app caters to personalization preferences, allowing users to select themes and language settings according to their preferences.</p>
<p>Whether you're looking to share files or create a secure server for personal use, 'WebDAV FS' streamlines the process, providing a seamless and customizable experience for Android users.</p>
<p>With a lot of features:</p>
<ul>
<li>Create local server with webDAV API.</li>
<li>Supports SSL(https) connection.</li>
<li>Server can start on boot device.</li>
<li>Switch between language.</li>
<li>Selecting the desired folder.</li>
<li>Set password and readonly mode for more security.</li>
</ul>`
    },
    {
        introId: 'M3U-Tools-Intro',
        id: 'm3utools',
        name: 'M3U Tools',
        tagline: 'Import, edit, organize, and export IPTV playlists in M3U/M3U8 format.',
        category: 'Android',
        path: '/M3U-Tools-Intro/',
        logo: 'content/image/logo.webp',
        banner: '/assets/images/portfolio/banner_m3utools.png',
        github: 'https://github.com/Tiarait/M3U-Tools',
        footerLinks: [
            { label: 'GitHub', url: 'https://github.com/Tiarait/M3U-Tools' }
        ],
        storeButtons: [
            { href: 'https://play.google.com/store/apps/details?id=ua.tiar.m3utools', icon: 'google-play', labelS: 'Get it on', labelM: 'Google Play' },
            { href: 'https://github.com/Tiarait/M3U-Tools/releases', icon: 'github', labelS: 'Download from', labelM: 'GitHub release' }
        ],
        portfolio: {
            title: { en: 'M3U Tools', uk: 'M3U Tools' },
            desc: {
                en: 'Android app for importing, editing, organizing, and exporting IPTV playlists in M3U/M3U8 format.',
                uk: 'Android-додаток для імпорту, редагування та експорту IPTV-плейлистів у форматі M3U/M3U8.'
            },
            img: './assets/images/portfolio/banner_m3utools.png'
        },
        metaDescription: 'Android app for importing, editing, organizing, and exporting IPTV playlists in M3U/M3U8 format.',
        screenshotCount: 8,
        descriptionHtml: `<p>M3U Tools is an Android app for importing, editing, organizing, and exporting IPTV playlists in M3U/M3U8 format.</p>
<p>Use it to fix channel names and groups, clean duplicates, check stream URLs, refresh from a remote source, and export a file for your player. All playlist data stays on your device — no account required.</p>
<p>Key features:</p>
<ul>
<li>Import from file or URL; refresh when the provider updates the list</li>
<li>Structured editing and raw M3U text mode</li>
<li>Preserves original formatting and custom tags where possible</li>
<li>Stream URL checker with OK / Error / Unchecked filters</li>
<li>Merge playlists, find duplicates, bulk edit, reorder, hide groups</li>
<li>Export to file, share via another app, or copy generated text</li>
<li>Free version with optional M3U Tools Pro for unlimited playlists</li>
</ul>
<p>See <a href="./help.html">User Help</a> for detailed guides on import, editing, URL refresh, and Pro features.</p>`
    }
];

const PORTFOLIO_ONLY = [
    {
        id: 'poi',
        title: { en: 'Universal Bot', uk: 'Universal Bot' },
        desc: {
            en: 'AI-powered Telegram Bot – multi-language bot for math calculations, media downloads, audio/video processing, Telegram message parsing, and chat info.',
            uk: 'Telegram-бот на базі штучного інтелекту – багатомовний бот для математичних розрахунків, завантаження медіа, обробки аудіо/відео, розбору повідомлень Telegram та інформації в чаті.'
        },
        category: 'Python. Telegram bot',
        link: 'https://github.com/Tiarait/Universal-Bot',
        img: './assets/images/portfolio/banner_tg.png'
    }
];

const PORTFOLIO_ORDER = ['m3utools', 'devsurf', 'poi', 'aimuse', 'httpfs-desktop', 'webdavfs', 'httpfs'];

function getIntroApp(introId) {
    return INTRO_APPS.find(app => app.introId === introId) || null;
}

function buildPortfolioProjects() {
    const byId = Object.fromEntries(INTRO_APPS.map(app => [app.id, app]));
    const introProjects = INTRO_APPS.map(app => ({
        id: app.id,
        title: app.portfolio.title,
        desc: app.portfolio.desc,
        category: app.category,
        link: app.path,
        img: app.portfolio.img
    }));
    const all = [...introProjects, ...PORTFOLIO_ONLY];
    const orderMap = Object.fromEntries(PORTFOLIO_ORDER.map((id, i) => [id, i]));
    return all.sort((a, b) => (orderMap[a.id] ?? 99) - (orderMap[b.id] ?? 99));
}
