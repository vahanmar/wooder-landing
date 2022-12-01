///// left slider
const slider_left = new Swiper('.section1__slider-left', {
	direction: 'vertical',
	speed: 800,
	slidesPerView: '1',
	loop: true,
	noSwiping: true,
	noSwipingClass: 'section1__slider-left__slide',
	pagination: {
		el: '.section1__slider-left__bullets',
		type: 'bullets',
		clickable: false,
	},
	autoplay: {
		delay: 4000,
		disableOnInteraction: false,
	}

});
/// left slider custom fraction pagination
slider_left.on('activeIndexChange', function() {
	var fraction = document.querySelector('.section1__slider-left__fraction-pagination');
	var index = slider_left.realIndex + 1;
	fraction.textContent = '0' + index;
});

///// right slider
const slider_right = new Swiper('.section1__slider-right', {
	direction: 'vertical',
	speed: 800,
	slidesPerView: '1',
	loop: true,
	touchRatio: 0,
	autoplay: {
		delay: 4000,
		disableOnInteraction: false,
		reverseDirection: true,
	}
});
/// relative hiding right slider on breakpoint
function operate_right_slider() {
	let is_mobile = window.matchMedia('(min-width: 0px) and (max-width: 1023px)');
	if (is_mobile.matches){
		slider_right.disable();
		document.querySelector('.section1__slider-right').style.display = 'none';
	}
	else {
		document.querySelector('.section1__slider-right').style.display = 'block';
		slider_right.enable();
	}
}
window.addEventListener('load', function() {
	operate_right_slider()
});
window.addEventListener('resize', function() {
	operate_right_slider()
});