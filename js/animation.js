const animated = document.querySelectorAll('.animated');
if (animated.length > 0) {
	window.addEventListener('scroll', animate_on_scroll);

	function animate_on_scroll() {
		for (let i = 0; i < animated.length; i++) {
			const animated_item = animated[i];
			const animated_item_height = animated_item.offsetHeight;
			const animated_item_offset = offset(animated_item).top;
			const coefficient = 4;

			let animated_point = window.innerHeight - animated_item_height / coefficient;
			if (window.innerHeight < animated_item_height) {
				animated_point = window.innerHeight - window.innerHeight / coefficient;
			}

			if ((pageYOffset > animated_item_offset - animated_point) && pageYOffset < (animated_item_offset + animated_item_height)) {
				animated_item.classList.add('active');
			} else {
				if (animated_item.classList.contains('animated-always'))
					animated_item.classList.remove('active');
			}
		}
	}

	function offset(el) {
		const rect = el.getBoundingClientRect(),
			scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
			scrollTop = window.pageYOffset || document.documentElement.scrollTop;
		return {
			top: rect.top + scrollTop,
			left: rect.left + scrollLeft
		}
	}
	animate_on_scroll();
}