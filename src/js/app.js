import * as baseFunctions from './modules/functions.js';
import * as carousels from './modules/carousels.js';

document.addEventListener('DOMContentLoaded', () => {
	initPage();
	carousels.initServicesSwiper();
	carousels.initReviewsSwiper();
	carousels.initBlogSwiper();
});

window.addEventListener('resize', () => {
	baseFunctions.handlerHeroImgPosition();
	baseFunctions.fixedHeader();
	baseFunctions.handlerBackgroundSize();
	baseFunctions.handlerFooter();
});

window.addEventListener('scroll', () => {
	baseFunctions.fixedHeader();
	baseFunctions.toTop();
});

// function

function initPage() {
	baseFunctions.isWebp();
	baseFunctions.handlerButtonClick();
	baseFunctions.handlerHeroImgPosition();
	baseFunctions.handlerAnchorLink();
	baseFunctions.parallax();
	baseFunctions.handlerModal();
	baseFunctions.handlerMenu();
	baseFunctions.handlerBackgroundSize();
	baseFunctions.handlerFooter();
	baseFunctions.handlerToTopClick();
}
