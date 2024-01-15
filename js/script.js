var lang = localStorage.getItem('lang');
var theme = localStorage.getItem('theme');
$(document).ready(function() {
	$('#switch-lang').on('click', function() {
	    event.preventDefault();
	    defaultLang();
		if (lang == 'en') {
		    localStorage.setItem('lang', 'ru');
		    lang = 'ru';
		} else if (lang == 'uk') {
		    localStorage.setItem('lang', 'en');
		    lang = 'en';
		} else {
		    localStorage.setItem('lang', 'uk');
		    lang = 'uk';
		}
		$('#switch-lang i').text(lang);
		buildContent();
		start();
	});
	window.addEventListener('hashchange', function() {
	    start();
	});
	$('#switch-theme').on('click', function() {
	    event.preventDefault();
	    defaultTheme();
		toogleTheme();    
	});

	buildContent();
	start();
});
function buildContent() {
	defaultLang();
	defaultTheme();

	let navContainer = $('#buttons01');
	let container = $('#left-block');
	navContainer.empty();
	for (let i = 0; i < navData.length; i++) {
		navContainer.append(`
			<li>
				<a href="#${navData[i]}" class="button ${theme} n0${i}" style="opacity: 0; animation: fadeOn 2s ease-in-out 0s forwards;">
					<i class="bi bi-caret-right-fill"></i>
					<span class="label">${getText(lang, navData[i])}</span>
				</a>
			</li>
		`);
	}

	let jsonLinks = JSON.parse(data_links);
	let linkContainer = $('.icons01');
	linkContainer.empty();
	for (let i = 0; i < jsonLinks.links.length; i++) {
		const link = jsonLinks.links[i];
		linkContainer.append(`
			<li>
				<a class="icon ${theme} n0${i}" href="${link.link}" aria-label="${link.name}" target="_blank style="opacity: 0; animation: fadeOn 2s ease-in-out 0s forwards;">
					<i class="bi ${link.icon}"></i>
				</a>
			</li>
		`);
	}
	linkContainer.appendTo(container);
}

function defaultLang() {
	if (lang == null) {
		var userLanguage = navigator.language || navigator.userLanguage; 
		if (userLanguage.startsWith('uk') || userLanguage.startsWith('ru')) {
		    localStorage.setItem('lang', 'uk');
		    lang = 'uk';
		} else {
		    localStorage.setItem('lang', 'en');
		    lang = 'en';
		}
	}
	$('#switch-lang i').text(lang);
}
function defaultTheme() {
	if (theme == null) {
		if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
		    localStorage.setItem('theme', 'night');
			theme = 'night';
		} else {
		    localStorage.setItem('theme', 'day');
			theme = 'day';
		}
	}
}

function start() {
	defaultLang();
	defaultTheme();

	$('#text02').text(getText(lang, "title"));
	let prefix = 'about'
	for (let i = 0; i < navData.length; i++) {
		let item = navData[i];
		if (window.location.hash == `#${item}`) {
			prefix = item
		}
	}
	
	$('#text03').text(getText(lang, prefix));
	$('#text01').html(getText(lang, prefix+"-desc"));


	if (theme == null) {
		if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
		    localStorage.setItem('theme', 'night');
			theme = 'night';
		} else {
		    localStorage.setItem('theme', 'day');
			theme = 'day';
		}
	}
	buildTheme();
	if (theme == 'night') {
		$('#checkbox').attr("checked", true);
	} else {
		$('#checkbox').attr("checked", false);
	}
	$('#container02').addClass(theme+'-container');
	$('#image01 img').attr('src', `/assets/img/profile-${theme}.jpg`);
}

function buildTheme() {
	let body = $('body');
	let container02 = $('#container02');
	let switches = $('.switch.theme');
	container02.removeClass('day-container');
	container02.removeClass('night-container');
	body.removeClass('day');
	body.removeClass('night');
	body.addClass(theme);
	switches.removeClass('day');
	switches.removeClass('night');
	switches.addClass(theme);
	let bg = $('#bg');
	let bgNight = $('#bg-full-night');
	if ($('#bg .bg-day').length == 0) {
		bg.append($('<div class="bg-day"><div class="fade"><div class="fog"></div></div></div>'))
	}
	if (bgNight.length == 0) {
		bgNight = $(`
			<div id="bg-full-night" style="">
				<div class="bg-stars"></div>
				<div class="bg-night"></div>
				<div class="fg-night">
			</div>`
		);
		bg.append(bgNight);
	}
	let stars = $('#bg-full-night .bg-stars');
	stars.empty();
	if (theme == 'night') {
		let sections = stars.append($('<section></section>'));
		for (let i = 0; i < 10; i++) {
			sections.append('<span></span>');
		}
	}
		
}

function toogleTheme() {
	$('.switch.theme').attr('style',`opacity: 0; animation: none;`);
	if (theme == 'night') {
		localStorage.setItem('theme', 'day');
		theme = 'day';
	} else {
		localStorage.setItem('theme', 'night');
		theme = 'night';
	}
	
	setTimeout(function () {
		buildContent();
	buildTheme();
	let bgNight = $('#bg-full-night');
	let container02 = $('#container02');
	if (theme == 'night') {
		bgNight.attr('style','opacity: 0; animation: fadeOn 2s ease-in-out 0s forwards;');
		container02.attr('style',`opacity: 1;transform: scale(1); animation: toNight 2s ease-in-out 0s forwards;filter: none;`);
	} else {
		bgNight.attr('style','opacity: 1; animation: fadeOff 2s ease-in-out 0s forwards;');
		container02.attr('style',`opacity: 1;transform: scale(1); animation: toDay 2s ease-in-out 0s forwards;filter: none;`);
	}
	}, 300);
	setTimeout(function () {
        if (theme == 'night') {
			$('#checkbox').attr("checked", true);
		} else {
			$('#checkbox').attr("checked", false);
		}
		$('.switch.theme').attr('style',`animation: fadeOn 2s ease-in-out  0s forwards;`);
		$('#image01 img').attr('src', `/assets/img/profile-${theme}.jpg`);
		// container02.attr('style','');
		// container02.addClass(theme + '-container');
    }, 1000);
}


