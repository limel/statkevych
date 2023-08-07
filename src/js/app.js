import * as baseFunctions from './modules/functions.js';
import Swiper from 'swiper';

document.addEventListener('DOMContentLoaded', () => {
	// Custom JS
	baseFunctions.isWebp();
	const servicesSwiper = new Swiper('.swiper', {
		// Optional parameters
		loop: true,
		slidesPerView: 2,
		spaceBetween: 32,
	});

	const prev = document.querySelector('.prev-button');
	const next = document.querySelector('.next-button');

	prev.addEventListener('click', () => servicesSwiper.slidePrev());
	next.addEventListener('click', () => servicesSwiper.slideNext());

	window.addEventListener('scroll', baseFunctions.fixedHeader);

	const buttons = document.querySelectorAll(
		'button:not(.carousel-navigation__button)'
	);

	for (const button of buttons) {
		button.addEventListener('click', event =>
			baseFunctions.createRipple(event)
		);
	}
});
