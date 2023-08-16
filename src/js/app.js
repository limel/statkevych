import * as baseFunctions from './modules/functions.js';
import * as carousels from './modules/carousels.js';
import Rellax from 'rellax';

document.addEventListener('DOMContentLoaded', () => {
	initPage();
	carousels.initServicesSwiper();
	carousels.initReviewsSwiper();
	carousels.initBlogSwiper();
});

window.addEventListener('resize', () => {
	baseFunctions.handleHeroImgPosition();
});

// function 


function initPage() {
	baseFunctions.isWebp();
	baseFunctions.handlerButtonClick();
	baseFunctions.handleHeroImgPosition();
	window.addEventListener('scroll', baseFunctions.fixedHeader);
}
// const rellax = new Rellax('.parallax-layer', {
// 	speed: 2,
// 	center: false,
// 	wrapper: null,
// 	round: true,
// 	vertical: true,
// 	horizontal: true,
// });
