import Swiper from 'swiper';
import { Scrollbar, Pagination } from 'swiper/modules';
import { handlerChangeSlides, updateNavigationButtons } from './functions.js';

export function initServicesSwiper() {
	const servicesPrev = document.querySelector('.services-prev-button');
	const servicesNext = document.querySelector('.services-next-button');

	const servicesSwiper = new Swiper('.services-carousel-swiper', {
		// Optional parameters
		slidesPerView: 2,
		spaceBetween: 32,
		breakpoints: {
			320: {
				slidesPerView: 1,
			},
			768: {
				slidesPerView: 1,
			},
			1100: {
				slidesPerView: 2,
			},
		},
		on: {
			init: function () {
				updateNavigationButtons(this, servicesPrev, servicesNext);
				handlerChangeSlides(this, servicesPrev, servicesNext);
			},
			slideChange: function () {
				updateNavigationButtons(this, servicesPrev, servicesNext);
			},
		},
	});
}

export function initReviewsSwiper() {
	const marginLeft = document.querySelector('.container').offsetLeft;
	const reviewsPrev = document.querySelector('.reviews-prev-button');
	const reviewsNext = document.querySelector('.reviews-next-button');

	const reviewsSwiper = new Swiper('.reviews-swiper', {
		// Optional parameters
		slidesPerView: 1.8,
		spaceBetween: 24,
		slidesOffsetBefore: marginLeft + 64,
		slidesOffsetAfter: marginLeft + 64,
		modules: [Pagination],
		pagination: {
			el: '.reviews-swiper__pagination',
			clickable: true,
		},
		breakpoints: {
			320: {
				slidesPerView: 1,
				slidesOffsetBefore: 0,
				slidesOffsetAfter: 0,
				spaceBetween: 16,
			},
			768: {
				slidesPerView: 1.2,
				slidesOffsetBefore: 32,
				slidesOffsetAfter: 32,
			},
			1024: {
				slidesPerView: 1.3,
				slidesOffsetBefore: marginLeft + 32,
				slidesOffsetAfter: marginLeft + 32,
			},
			1200: {
				slidesOffsetBefore: marginLeft + 64,
				slidesOffsetAfter: marginLeft + 64,
				slidesPerView: 1.8,
			},
		},
		on: {
			init: function () {
				updateNavigationButtons(this, reviewsPrev, reviewsNext);
				handlerChangeSlides(this, reviewsPrev, reviewsNext);

				this.slides.forEach((slide, index) => {
					const currentNumber = index + 1;
					const totalSlides = this.slides.length;
					const counterElement = slide.querySelector('.reviews-swiper-counter');
					counterElement.textContent = `${currentNumber} / ${totalSlides}`;
				});
			},
			slideChange: function () {
				updateNavigationButtons(this, reviewsPrev, reviewsNext);
			},
		},
	});
}

export function initBlogSwiper() {
	const blogSwiper = new Swiper('.blog-carousel-swiper', {
		// Optional parameters
		slidesPerView: 2,
		spaceBetween: 64,
		modules: [Scrollbar],
		breakpoints: {
			320: {
				slidesPerView: 1,
				spaceBetween: 16,
			},
			768: {
				slidesPerView: 2,
				spaceBetween: 32,
			},
			1200: {
				slidesPerView: 2,
				spaceBetween: 64,
			},
		},
		scrollbar: {
			el: '.swiper-scrollbar',
			draggable: true,
			dragSize: 40,
		},
	});
}
