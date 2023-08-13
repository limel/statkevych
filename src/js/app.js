import * as baseFunctions from './modules/functions.js';
import * as carousels from './modules/carousels.js';
// import Inputmask from 'inputmask';

// export function inputMask() {
// 	const phoneInputs = document.querySelectorAll('input[type="tel"]');
// 	const im = new Inputmask('+380 (99) 99 99 999');

// 	for (const phoneInput of phoneInputs) {
// 		im.mask(phoneInput);
// 	}
// }
document.addEventListener('DOMContentLoaded', () => {
	initPage();
	carousels.initServicesSwiper();
	carousels.initReviewsSwiper();
	carousels.initBlogSwiper();
});

function initPage() {
	baseFunctions.isWebp();
	baseFunctions.handlerButtonClick();
	// inputMask();
	window.addEventListener('scroll', baseFunctions.fixedHeader);
}
