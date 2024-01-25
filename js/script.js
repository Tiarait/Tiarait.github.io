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

	$('.row.row-horizon').on('wheel', function(event) {
		let container = $('.row.row-horizon');
		if (event.originalEvent.deltaX == 0) {
			var delta = event.originalEvent.deltaY;
			//var scrollStep = 40;
		    if (delta < 0) {
		    	var v = container.scrollLeft() + event.originalEvent.wheelDelta;
		    	if (v < 0) v = 0;
		        container.scrollLeft(v);
		    } else if (delta > 0) {
		        container.scrollLeft(container.scrollLeft() + event.originalEvent.wheelDelta);
		    }
			event.preventDefault();
		}
	});

	window.addEventListener('popstate', function(event) {
		let id = '';
	    if (!window.location.search.includes('?id')) {
		    $('.full.bg').attr('style', 'display:none;');
	        $('.full').attr('style', 'display:none;');
	        $('#switch-back').attr('style', 'display:none;');
	        $('.full .content').attr('style', '');
	        $('#switch-lang').removeClass('none');
	        $('.full .content').empty();
        	$('#container-switch').removeClass('fill');
        	if (window.location.href.includes('#')) {
        		id = window.location.hash.replace('#', '');
        	}
		} else {
			id = new URLSearchParams(window.location.search).get('id');
			if (id != '') {
				for (let key in textData) {
					if (key == id) {
						let value = textData[key];
						let link = getText(value, lang, "link");
						loadFullPage(link, id);
					}
				}
			}
		}
		if (id != '') {
			for (let key in textData) {
				if (key == id) {
					let container = document.querySelector('.row.row-horizon');
					let element = document.getElementById(key);
					let scrollValue = element.offsetLeft - container.offsetLeft - (container.offsetWidth - element.offsetWidth) / 2;
					container.scrollTo({
					    left: scrollValue,
					    behavior: 'smooth'
					});
				}
			}
		}
	});

	$('a').on('click', function() {
		event.preventDefault();
	})


	$('#switch-back').on('click', function() {
	    $('.full.bg').attr('style', 'display:none;');
		$('.full').attr('style', 'display:none;');
		$('#switch-back').attr('style', 'display:none;');
		$('.full .content').attr('style', '');
		$('#switch-lang').removeClass('none');
		$('.full .content').empty();
		$('#container-switch').removeClass('fill');
		var currentUrl = window.location.href;
		var modifiedUrl = currentUrl.replace('?id=', '#');
		if (window.location.search.includes('?id')) {
			var id = new URLSearchParams(window.location.search).get('id');
			let container = document.querySelector('.row.row-horizon');
			for (let key in textData) {
				if (key == id) {
					let element = document.getElementById(key);
					let scrollValue = element.offsetLeft - container.offsetLeft - (container.offsetWidth - element.offsetWidth) / 2;
					container.scrollTo({
					    left: scrollValue,
					    behavior: 'smooth'
					});
				}
			}
		}
		history.pushState(null, null, currentUrl);
		history.replaceState(history.state, '', modifiedUrl);
	});
	
	window.addEventListener('hashchange', function() {
		event.preventDefault();
        $('.full.bg').attr('style', 'display:none;');
	    $('.full').attr('style', '');
        $('.full .content').attr('style', '');
        $('#switch-lang').removeClass('none');
        $('.full .content').empty();
        $('#container-switch').removeClass('fill');
	    let container = document.querySelector('.row.row-horizon');
		for (let key in textData) {
			if (window.location.hash == `#${key}`) {
				let element = document.getElementById(key);
				let scrollValue = element.offsetLeft - container.offsetLeft - (container.offsetWidth - element.offsetWidth) / 2;
				container.scrollTo({
				    left: scrollValue,
				    behavior: 'smooth'
				});
			}
		}
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

	$('.row.row-horizon').empty();
	$('.row.row-horizon').append($('<div class="col card empty"></div>'));
	let prefix = 'about'
	for (let key in textData) {
	    let item = $(`<div id="${key}" class="col"></div>`);
	    let itemContent = $(`<div class="left-block card ${theme}-container"></div>`);

	    let value = textData[key];

		let linkContainer = $(`<ul class="icons01 icons"></ul>`);
		let links = getText(value, lang, "links");
		for (let i = 0; i < links.length; i++) {
			const link = links[i];
			let itemLink = $(`
				<a class="icon ${theme} n0${i}" href="${link.link}" aria-label="${link.name}" target="_blank style="opacity: 0; animation: fadeOn 2s ease-in-out 0s forwards;">
					<i class="bi ${link.icon}"></i>
				</a>`);
			
			linkContainer.append($('<li></li>').append(itemLink));
		}

	    itemContent.html(`<div class="title image" style="display: flex;align-items: center;">
             <div class="image01 frame">
                 <img src="${getText(value, lang, "logo")}" alt="">
             </div>
             <div style="margin: 5px;"></div>
             <div>
             	<h1 class="text02">${getText(value, lang, "title")}</h1>
             	<h2 class="text03">${getText(value, lang, "about")}</h2>
             </div>
         </div>
         <p class="text01">${getText(value, lang, "about-desc")}</p>
         <ul class="icons01 icons">${linkContainer.html()}</ul>`);

	    let link = getText(value, lang, "link");

	    item.append(itemContent);
	    item.on('click', function() {
		    //event.preventDefault();
		    let container = document.querySelector('.row.row-horizon');
		    let id = $(this).attr('id');
			let element = document.getElementById(id);
			let scrollValue = element.offsetLeft - container.offsetLeft - (container.offsetWidth - element.offsetWidth) / 2;
			container.scrollTo({
			    left: scrollValue,
			    behavior: 'smooth'
			});
			history.pushState(null, null, window.location);
			var cleanUrl = window.location.origin + window.location.pathname;
			history.replaceState(history.state, '', '?id='+id);
			loadFullPage(link, id);
		});
		item.on('click', 'a', function(event) {
		    event.stopPropagation();
		});
	    $('.row.row-horizon').append(item);
	}
	$('.row.row-horizon').append($('<div class="col card empty"></div>'));
}

function loadFullPage(link, id) {
	var xhr = new XMLHttpRequest();
    xhr.open('GET', link, true);
    xhr.onload = function() {
        if (xhr.status === 200) {
        	var lastSlashIndex = link.lastIndexOf('/');
        	var modifiedUrl = link.substring(0, lastSlashIndex + 1);

            var str = xhr.responseText.replace(/src="\//g, `src="${modifiedUrl}`);
            const div = document.createElement('div');
            div.className = 'markdown-body';
            div.innerHTML = markdown.default(str);
            $('.full.bg').attr('style', 'display:block; opacity:1;');
            $('.full').attr('style', 'display:block; opacity:1;');
            $('.full .content').attr('style', 'transform: scale(1);');
            $('#switch-lang').addClass('none');
			$('#switch-back').attr('style', '');
            $('.full .content').empty();
            $('.full .content').append(div);


            $('#container-switch').addClass('fill');
        } else {
            console.error('Failed to load README.md');
        }
    };
    xhr.send();
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


	let container = document.querySelector('.row.row-horizon');
	let prefix = "about"
	for (let key in textData) {
		if (window.location.hash == `#${key}`) {
			prefix = key
		}
	}
	let element = document.getElementById(prefix);
	let scrollValue = element.offsetLeft - container.offsetLeft - (container.offsetWidth - element.offsetWidth) / 2;
	container.scrollTo({
	    left: scrollValue,
	    behavior: 'smooth'
	});

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
	if (window.location.search.includes('?id')) {
	    var queryParams = new URLSearchParams(window.location.search);
		var id = queryParams.get('id');
		for (let key in textData) {
			if (key == id) {
				let container = document.querySelector('.row.row-horizon');
				let value = textData[key];
				let link = getText(value, lang, "link");
				loadFullPage(link, id);
				let element = document.getElementById(key);
				let scrollValue = element.offsetLeft - container.offsetLeft - (container.offsetWidth - element.offsetWidth) / 2;
				container.scrollTo({
				    left: scrollValue,
				    behavior: 'smooth'
				});
			}
		}
	}
}

function buildTheme() {
	if (theme == 'night') {
		$('#checkbox').attr("checked", true);
	} else {
		$('#checkbox').attr("checked", false);
	}
	let containers = $('.left-block.card');
	containers.removeClass('day-container');
	containers.removeClass('night-container');
	containers.addClass(`${theme}-container`);
	let body = $('body');
	body.removeClass('day');
	body.removeClass('night');
	body.addClass(theme);
	let switches = $('.switch.theme');
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
	$('#switch-theme').attr('style',`opacity: 0;`);
	if (theme == 'night') {
		localStorage.setItem('theme', 'day');
		theme = 'day';
	} else {
		localStorage.setItem('theme', 'night');
		theme = 'night';
	}
	if (theme == 'night') {
		$('#checkbox').attr("checked", true);
	} else {
		$('#checkbox').attr("checked", false);
	}
	let switches = $('.switch.theme');
	switches.removeClass('day');
	switches.removeClass('night');
	switches.addClass(theme);
	
	setTimeout(function () {
		buildTheme();
		buildContent();
		let bgNight = $('#bg-full-night');
		let container02 = $('.left-block');
		if (theme == 'night') {
			bgNight.attr('style','opacity: 0; animation: fadeOn 2s ease-in-out 0s forwards;');
			// container02.attr('style',`opacity: 1;transform: scale(1); animation: toNight 2s ease-in-out 0s forwards;filter: none;`);
		} else {
			bgNight.attr('style','opacity: 1; animation: fadeOff 2s ease-in-out 0s forwards;');
			// container02.attr('style',`opacity: 1;transform: scale(1); animation: toDay 2s ease-in-out 0s forwards;filter: none;`);
		}
	}, 300);
	setTimeout(function () {
        if (theme == 'night') {
			$('#checkbox').attr("checked", true);
		} else {
			$('#checkbox').attr("checked", false);
		}
		$('#switch-theme').attr('style',`animation: fadeOn 2s ease-in-out  0s forwards;`);
		$('.switch.theme').attr('style',`animation: fadeOn 2s ease-in-out  0s forwards;`);
    }, 1000);
}


