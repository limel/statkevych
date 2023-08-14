import * as baseFunctions from './modules/functions.js';
import * as carousels from './modules/carousels.js';

document.addEventListener('DOMContentLoaded', () => {
	initPage();
	carousels.initServicesSwiper();
	carousels.initReviewsSwiper();
	carousels.initBlogSwiper();
});

function initPage() {
	baseFunctions.isWebp();
	baseFunctions.handlerButtonClick();
	window.addEventListener('scroll', baseFunctions.fixedHeader);
}
