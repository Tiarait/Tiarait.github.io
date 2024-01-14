var data_links = `{"links": 
	[
		{"name":"Coffee", "link":"https://www.buymeacoffee.com/tiarapps", "icon": "bi-cup-hot-fill"}, 
		{"name":"LinkedIn", "link":"https://www.linkedin.com/in/tiarait/", "icon": "bi-linkedin"}, 
		{"name":"GitHub", "link":"https://github.com/Tiarait/", "icon": "bi-github"}, 
		{"name":"Telegram", "link":"https://t.me/tiardev", "icon": "bi-telegram"}, 
		{"name":"Email", "link":"mailto:tiarait.dev@gmail.com", "icon": "bi-envelope-fill"}, 
		{"name":"GooglePlay", "link":"https://play.google.com/store/apps/dev?id=4630324141005225998", "icon": "bi-google-play"}
	]
}`;
var navData = [
        "about",
        "skills",
        "experience",
        "education"
    ];
var textData = {
    en: `{
    	"title": "VASYL RAISKYI", 
    	"about": "About me",
	    "about-desc": "Welcome. I am a developer from <b>🇺🇦Ukraine</b>. If you have proposals for development - write to me.<br>I have experience in development both for <b>Android TV</b> and for mobile devices, for example <b>Http server</b> (see . in <b>Google Play</b>), I also have experience in creating various <b>web parsers and clients</b>",
        "skills": "Skills",
        "skills-desc": "<b>PROGRAMMING LANGUAGES & TOOLS</b><br> ● Android SDK, Java, Kotlin<br><br><b>Experience of use</b><br> ● LiveData, Worker, RxJava, Coroutines, ROOM, SQLite<br> ● Webview, OkHttp3, Ktor<br> ● REST API, Network protocols, XML, JSON<br> ● Custom view, Leanback, AndroidTV, ExoPlayer<br> ● Gradle, Proguard<br> ● Git, HTML, CSS, JavaScript",
        "experience": "Experiance",
        "experience-desc": "<div class='blockquote-wrapper'><div class='blockquote'><h1>Android developer in <b>Anterra Group - Georgia</b></h1><h4>December 2019 - <b>Now</b></h4></div></div> <br> <div class='blockquote-wrapper'><div class='blockquote'><h1>Android development for yoursels<br>Developed online cinema Kinotor for android devices. And client for Kinotrend.</h1><h4>November 2018 - October 2019</h4></div></div>",
        "education": "Education",
        "education-desc": "<div class='blockquote-wrapper'><div class='blockquote'><h1><b>MASTER</b> Software engineering in CHERNIHIV NATIONAL TECHNOLOGICAL UNIVERSITY</h1><h4>September 2017 - June 2019</h4></div></div> <br> <div class='blockquote-wrapper'><div class='blockquote'><h1><b>BACHELOR</b> Software engineering in INTERNATIONAL SCIENCE AND TECHNOLOGY UNIVERSITY</h1><h4>September 2013 - June 2017</h4></div></div> "
    }`,
    ru: `{
    	"title": "РАЙСКИЙ ВАСИЛИЙ", 
    	"about": "Обо мне",
	    "about-desc": "Добро пожаловать. Я разработчик из <b>🇺🇦Украины</b>. Если у вас есть предложения по разработке - напишите мне.<br>Имею опыт разработки как для <b>Android TV</b>, так и для мобильных устройст, например <b>Http-сервер</b> (см. в <b>Google Play</b>), так же есть опыт создания различных <b>веб-парсеров и клиентов</b>",
        "skills": "Умения",
        "skills-desc": "<b>ЯЗЫКИ И ИНСТРУМЕНТЫ ПРОГРАММИРОВАНИЯ</b><br> ● Android SDK, Java, Kotlin<br><br><b>Опыт использования</b><br> ● LiveData, Worker, RxJava, Coroutines, ROOM, SQLite<br> ● Webview, OkHttp3, Ktor<br> ● REST API, Network protocols, XML, JSON<br> ● Custom view, Leanback, AndroidTV, ExoPlayer<br> ● Gradle, Proguard<br> ● Git, HTML, CSS, JavaScript",
        "experience": "Опыт",
        "experience-desc": "<div class='blockquote-wrapper'><div class='blockquote'><h1>Android-разработчик in <b>Anterra Group - Georgia</b></h1><h4>Декабрь 2019 - <b>Сейчас</b></h4></div></div> <br> <div class='blockquote-wrapper'><div class='blockquote'><h1>Android-разработка для себя<br>Разработка онлайн-кинотеатра Кинотор для андроид устройств. И клиент Кинотренда.</h1><h4>Ноябрь 2018 – Октябрь 2019<</h4></div></div>",
        "education": "Образование",
        "education-desc": "<div class='blockquote-wrapper'><div class='blockquote'><h1><b>МАГИСТР</b> Software engineering in CHERNIHIV NATIONAL TECHNOLOGICAL UNIVERSITY</h1><h4>September 2017 - June 2019</h4></div></div> <br> <div class='blockquote-wrapper'><div class='blockquote'><h1><b>БАКАЛАВР</b> Software engineering in INTERNATIONAL SCIENCE AND TECHNOLOGY UNIVERSITY</h1><h4>September 2013 - June 2017</h4></div></div> "
    }`,
    uk: `{
        "title": "РАЙСЬКИЙ ВАСИЛЬ", 
        "about": "Про мене",
        "about-desc": "Ласкаво прошу. Я розробник з <b>🇺🇦України</b>. Якщо у вас є пропозиції щодо розробки - напишіть мені.<br>Я маю досвід розробки як для <b>Android TV</b>, так і для мобільних пристроїв, наприклад <b>Http-сервер</b> (див. на <b>Google Play</b>) також маю досвід створення різноманітних <b>веб-парсерів і клієнтів</b>",
        "skills": "Навички",
        "skills-desc": "<b>МОВИ ПРОГРАМУВАННЯ ТА ІНСТРУМЕНТИ</b><br> ● Android SDK, Java, Kotlin<br><br><b>Досвід використання</b><br> ● LiveData, Worker, RxJava, Coroutines, ROOM, SQLite<br> ● Webview, OkHttp3, Ktor<br> ● REST API, Network protocols, XML, JSON<br> ● Custom view, Leanback, AndroidTV, ExoPlayer<br> ● Gradle, Proguard<br> ● Git, HTML, CSS, JavaScript",
        "experience": "Досвід",
        "experience-desc": "<div class='blockquote-wrapper'><div class='blockquote'><h1>Android-розробник in <b>Anterra Group - Georgia</b></h1><h4>Грудень 2019 - <b>Зараз</b></h4></div></div> <br> <div class='blockquote-wrapper'><div class='blockquote'><h1>Android-разработка для себя<br>Android розробка для себе<br>Розроблений онлайн-кінотеатр Кінотор для пристроїв Android. І клієнт для Kinotrend.</h1><h4>Листопад 2018 - жовтень 2019</h4></div></div>",
        "education": "Освіта",
        "education-desc": "<div class='blockquote-wrapper'><div class='blockquote'><h1><b>МАГІСТР</b>Інженерія програмного забезпечення ЧЕРНІГІВСЬКИЙ НАЦІОНАЛЬНИЙ ТЕХНОЛОГІЧНИЙ УНІВЕРСИТЕТ</h1><h4>Вересень 2017 - Червень 2019</h4></div></div> <br> <div class='blockquote-wrapper'><div class='blockquote'><b>БАКАЛАВР</b> Інженерія програмного забезпечення МІЖНАРОДНИЙ НАУКОВО-ТЕХНОЛОГІЧНИЙ УНІВЕРСИТЕТ</h1><h4>Вересень 2013 - Червень 2017</h4></div></div> "
    }`
};

function getText(lang, id) {
    let result = '';
    try {
        var jsonData = JSON.parse(textData[lang]);
        result = jsonData[id];
    } catch (error) {
        console.error("Error parsing JSON for language", error);
    }
    if (result == undefined || result == '') {
        try {
            var jsonData = JSON.parse(textData['en']);
            result = jsonData[id];
        } catch (error) {
            console.error("Error parsing2 JSON for language", error);
            result = '';
        }
    }
    return result;
}
