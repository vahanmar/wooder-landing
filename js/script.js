//// language select
var select_lang = document.querySelector('.nav__language');
select_lang.addEventListener('change', function() {
	var lang = select_lang.value;
	console.log(lang);
	document.querySelector("html").setAttribute("lang", lang);
})

//// burger menu
document.querySelector('.nav__burger_body').addEventListener('click', burger_toggleclass());
document.querySelector('.nav__burger_p').addEventListener('click', burger_toggleclass());

function burger_toggleclass() {
	return function() {
		document.querySelector('.nav__burger_body').classList.toggle('active');
		document.querySelector('.nav__burger_links').classList.toggle('active');
	}
};

////smooth anchor scrolling
const anchors = document.querySelectorAll('a[href^="#"]');
for (let anchor of anchors) {
	anchor.addEventListener("click", function(e) {
		e.preventDefault();
		const goto = anchor.hasAttribute('href') ? anchor.getAttribute('href') : 'body';
		document.querySelector(goto).scrollIntoView({
			behavior: "smooth",
			block: "start"
		})
	})
}

document.querySelector('.section1').addEventListener('wheel', function(e) {
	if (event.deltaY > 0) {
		e.preventDefault();
		document.querySelector('.section2').scrollIntoView({
			behavior: "smooth",
			block: 'start',
		});
		document.querySelector('.section1__scroll-text').classList.add('paused'); //kill animation on scroll tip text
	}
});
/* jq slomannaya blyat huinya menayu vse na vanillu v pizdu
$('.section1').on('wheel', function(event) {
	if (event.deltaY > 0) {
		event.preventDefault();
		$('.section2').scrollIntoView({
			behavior: "smooth",
			block: 'start',
		});
	}
});*/


//// section2 videos
const videos = document.querySelectorAll('.section2__article3__video-btn');

for (let video of videos) {
	video.addEventListener('click', function() {
		video.classList.toggle('active');
		video.closest('.section2__article3__video-wrapper').classList.toggle('active');

		var children = video.closest('.section2__article3__video-wrapper').children;
		for (let child of children) {
			if (child.classList.contains('section2__article3__video-item')) {
				if (child.paused) {
					child.play();
					break;
				} else {
					child.pause();
					break;
				}
			}
		}
	});
}

//// section3 watch video button
const article1_video = document.querySelector('.section3__article1__video');

if (article1_video.paused) {
	document.querySelector('.section3__article1__btn').addEventListener('click', function(e) {
		document.querySelector('.section3__article1__play-img').classList.add('activated');
		document.querySelector('.section3__article1__pause-img').classList.add('activated');
		document.querySelector('.section3__article1').classList.add('activated');
		document.querySelector('.section3__article1__text').classList.add('activated');
		article1_video.classList.add('activated');
		article1_video.play();
		if (!article1_video.paused) {
			article1_video.addEventListener('click', function(e) {
				document.querySelector('.section3__article1__play-img').classList.remove('activated');
				document.querySelector('.section3__article1__pause-img').classList.remove('activated');
				document.querySelector('.section3__article1').classList.remove('activated');
				document.querySelector('.section3__article1__text').classList.remove('activated');
				article1_video.classList.remove('activated');
				article1_video.load();
			});
		}
	});
}