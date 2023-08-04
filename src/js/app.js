import * as baseFunctions from './modules/functions.js';
import Swiper from 'swiper';

document.addEventListener('DOMContentLoaded', () => {
	// Custom JS
	baseFunctions.isWebp();
	const swiper = new Swiper('.swiper', {
		// Optional parameters
		loop: true,
	});
	window.addEventListener('scroll', baseFunctions.fixedHeader);

	const buttons = document.getElementsByTagName('button');
	for (const button of buttons) {
		button.addEventListener('click', event =>
			baseFunctions.createRipple(event)
		);
	}
});
