var linksDataAbout = `[
		{"name":"Coffee", "link":"https://www.buymeacoffee.com/tiarapps", "icon": "bi-cup-hot-fill"}, 
		{"name":"LinkedIn", "link":"https://www.linkedin.com/in/tiarait/", "icon": "bi-linkedin"}, 
		{"name":"GitHub", "link":"https://github.com/Tiarait/", "icon": "bi-github"}, 
		{"name":"Telegram", "link":"https://t.me/tiardev", "icon": "bi-telegram"}, 
		{"name":"Email", "link":"mailto:tiarait.dev@gmail.com", "icon": "bi-envelope-fill"}, 
		{"name":"GooglePlay", "link":"https://play.google.com/store/apps/dev?id=4630324141005225998", "icon": "bi-google-play"}
	]`;

var textDataAbout = {
    en: `{
    	"title": "VASYL RAISKYI", 
        "about": "About me",
        "logo": "./assets/img/profile.jpg",
	    "about-desc": "Welcome. I am a developer from <b>🇺🇦Ukraine</b>. If you have proposals for development - write to me.<br>I have experience in development both for <b>Android TV</b> and for mobile devices, for example <b>Http server</b> (see . in <b>Google Play</b>), I also have experience in creating various <b>web parsers and clients</b>",
        "link": "https://raw.githubusercontent.com/Tiarait/Tiarait.github.io/master/README.md",
        "links": ${linksDataAbout}
    }`,
    ru: `{
    	"title": "РАЙСКИЙ ВАСИЛИЙ", 
    	"about": "Обо мне",
        "logo": "./assets/img/profile.jpg",
	    "about-desc": "Добро пожаловать. Я разработчик из <b>🇺🇦Украины</b>. Если у вас есть предложения по разработке - напишите мне.<br>Имею опыт разработки как для <b>Android TV</b>, так и для мобильных устройст, например <b>Http-сервер</b> (см. в <b>Google Play</b>), так же есть опыт создания различных <b>веб-парсеров и клиентов</b>"
    }`,
    uk: `{
        "title": "РАЙСЬКИЙ ВАСИЛЬ", 
        "about": "Про мене",
        "logo": "./assets/img/profile.jpg",
        "about-desc": "Ласкаво прошу. Я розробник з <b>🇺🇦України</b>. Якщо у вас є пропозиції щодо розробки - напишіть мені.<br>Я маю досвід розробки як для <b>Android TV</b>, так і для мобільних пристроїв, наприклад <b>Http-сервер</b> (див. на <b>Google Play</b>) також маю досвід створення різноманітних <b>веб-парсерів і клієнтів</b>"
    }`
};

var linksDataHttpFS = `[
        {"name":"GooglePlay", "link":"https://play.google.com/store/apps/details?id=tiar.ua.slf", "icon": "bi-google-play"},
        {"name":"YouTube", "link":"https://www.youtube.com/watch?v=inPCdfxVXMg", "icon": "bi-youtube"},
        {"name":"GitHub", "link":"https://github.com/Tiarait/HTTP-FS-file-server", "icon": "bi-github"}, 
        {"name":"Email", "link":"mailto:tiar.develop@gmail.com", "icon": "bi-envelope-fill"}
    ]`;
var textDataHttpFS = {
    en: `{
        "title": "Http FS", 
        "about": "android 5+",
        "logo": "https://raw.githubusercontent.com/Tiarait/HTTP-FS-file-server/main/screenshots/play_store_512.png",
        "about-desc": "This is a http + webdav server for sharing files between users on a Wi-Fi network. The online file sharing application works like a local HTTP server.<br>You can run a server on a Wi-Fi network or create a hotspot and share files by selecting any available folder on your device and providing users on the network with a link to your HTTP server or by scanning a QR code.",
        "link": "https://raw.githubusercontent.com/Tiarait/HTTP-FS-file-server/main/README.md",
        "links": ${linksDataHttpFS}
    }`,
    ru: `{
        "title": "Http FS", 
        "about": "мобильное приложение",
        "about-desc": "Это http + webdav server для управления файлами внутри сети. Приложение запускает локальный сервер что бы вы могли зайти по веб адресу с другого устройсва для легкого удаленного доступа к файлам. Вы можете выбрать любую парку или файл которым хотите поделиться и предоставить пользователям ссылку или Qr код"
    }`,
    uk: `{
        "title": "Http FS", 
        "about": "мобільний додаток",
        "about-desc": "Це http + webdav server для керування файлами всередині мережі. Додаток запускає локальний сервер що б ви могли зайти на веб адресу з іншого пристрою для легкого віддаленого доступу к файлам. Ви можете вибрати будь-яку директорію або файл, яким хочете поділитися і надати користувачам посилання або Qr код."
    }`
};
var linksDataWebdavFS = `[
        {"name":"GooglePlay", "link":"https://play.google.com/store/apps/details?id=ua.tiar.webdavfs", "icon": "bi-google-play"},
        {"name":"GitHub", "link":"https://github.com/Tiarait/WebDav-FS", "icon": "bi-github"}, 
        {"name":"Email", "link":"mailto:tiar.develop@gmail.com", "icon": "bi-envelope-fill"}
    ]`;
var textDataWebdavFS = {
    en: `{
        "title": "WebDAV FS", 
        "about": "mobile app",
        "logo": "https://github.com/Tiarait/WebDav-FS/raw/main/screenshots/play_store_512.png",
        "about-desc": "WebDAV FS is a fast, simple and secure application that provides a WebDav server on your device. With this application you can set any directory on your phone, including memory cards, as a drive for Windows or Linux. There is support for https.",
        "link": "https://raw.githubusercontent.com/Tiarait/WebDav-FS/main/README.md",
        "links": ${linksDataWebdavFS}
    }`,
    ru: `{
        "title": "WebDAV FS", 
        "about": "мобильное приложение",
        "about-desc": "WebDAV FS — это быстрое, простое и безопасное приложение, которое предоставляет сервер WebDav на вашем устройстве. С помощью этого приложения вы можете установить любой каталог на вашем телефоне, в том числе карты памяти, в качестве диска для Windows или Linux.  Есть поддержка https."
    }`,
    uk: `{
        "title": "WebDAV FS", 
        "about": "мобільний додаток",
        "about-desc": "WebDAV FS — це швидкий, простий та безпечний додаток, який надає сервер WebDav на вашому пристрої. За допомогою цієї програми ви можете встановити будь-який каталог на вашому телефоні, у тому числі карти пам'яті, як диск для Windows або Linux. Є підтримка https."
    }`
};

var textData = {
    "about": textDataAbout,
    "http-fs": textDataHttpFS,
    "webdav-fs": textDataWebdavFS
}

function getText(item, lang, id) {
    let result = '';

    if (item && lang && id) {
        let jsonData = JSON.parse(item[lang]);

        if (jsonData && jsonData[id] !== undefined) {
            result = jsonData[id];
        } else {
            jsonData = JSON.parse(item['en']);
            result = jsonData[id] || '';
        }
    }

    return result;
}
