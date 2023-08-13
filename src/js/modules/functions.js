export function isWebp() {
	function testWebP(callback) {
		let webP = new Image();
		webP.onload = webP.onerror = function () {
			callback(webP.height == 2);
		};
		webP.src =
			'data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA';
	}

	testWebP(function (support) {
		let className = support ? 'webp' : 'no-webp';
		document.querySelector('body').classList.add(className);
	});
}

export function createRipple(event) {
	const button = event.currentTarget;
	const ripple = document.createElement('span');
	const size = Math.max(button.clientWidth, button.clientHeight);
	const rect = button.getBoundingClientRect();
	const posX = event.clientX - rect.left - size / 2;
	const posY = event.clientY - rect.top - size / 2;

	ripple.style.width = ripple.style.height = `${size}px`;
	ripple.style.left = `${posX}px`;
	ripple.style.top = `${posY}px`;
	ripple.classList.add('ripple');

	const existingRipple = button.querySelector('.ripple');

	if (existingRipple) existingRipple.remove();

	button.appendChild(ripple);
	button.blur();
}

let prevScroll = 0;

export function fixedHeader() {
	const header = document.querySelector('.header');
	const currentScrollPosition = window.scrollY;
	const isScrollingUp = currentScrollPosition < (prevScroll || 0);

	currentScrollPosition > 0
		? header.classList.add('fixed')
		: header.classList.remove('fixed');

	isScrollingUp
		? header.classList.remove('hide')
		: header.classList.add('hide');

	prevScroll = currentScrollPosition;
}

export function handlerButtonClick() {
	const buttons = document.querySelectorAll(
		'button:not(.carousel-navigation__button)'
	);

	for (const button of buttons) {
		button.addEventListener('click', event => createRipple(event));
	}
}

export function updateNavigationButtons(swiper, prevButton, nextButton) {
	if (swiper.isBeginning) {
		prevButton.disabled = true;
	} else {
		prevButton.disabled = false;
	}

	if (swiper.isEnd) {
		nextButton.disabled = true;
	} else {
		nextButton.disabled = false;
	}
}

export function handlerChangeSlides(swiper, prevButton, nextButton) {
	prevButton.addEventListener('click', () => swiper.slidePrev());
	nextButton.addEventListener('click', () => swiper.slideNext());
}
