import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger.js';

let prevScroll = 180;

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

export function handlerAnchorLink() {
	const anchorLinks = document.querySelectorAll('a[href^="#"]');
	if (!anchorLinks.length) return;

	function smoothScrollToAnchor(anchor) {
		const target = document.querySelector(anchor);
		if (target) {
			window.scrollTo({
				top: target.offsetTop,
				behavior: 'smooth',
			});
		}
	}

	anchorLinks.forEach(function (link) {
		link.addEventListener('click', function (event) {
			event.preventDefault();
			smoothScrollToAnchor(link.getAttribute('href'));
		});
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

export function fixedHeader() {
	const header = document.querySelector('.header');
	const currentScrollPosition = window.scrollY;
	const isScrollingUp = currentScrollPosition < (prevScroll || 0);

	currentScrollPosition > 0
		? header.classList.add('fixed')
		: header.classList.remove('fixed');
	if (window.innerWidth > 1024) {
		isScrollingUp
			? header.classList.remove('hide')
			: header.classList.add('hide');
	} else {
		header.classList.remove('hide');
	}

	prevScroll = currentScrollPosition;
}

export function handlerButtonClick() {
	const buttons = document.querySelectorAll(
		'button:not(.carousel-navigation__button, .modal-close, .menu-toggle, .to-top)'
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

export function handlerHeroImgPosition() {
	const windowWidth = window.innerWidth;
	if (windowWidth > 1568) {
		const marginLeft = document.querySelector('.container').offsetLeft;
		const heroImg = document.querySelector('.hero__img');

		if (heroImg) {
			heroImg.style.right = marginLeft + 'px';
		}
	}
}

export function handlerChangeSlides(swiper, prevButton, nextButton) {
	prevButton.addEventListener('click', () => swiper.slidePrev());
	nextButton.addEventListener('click', () => swiper.slideNext());
}

export function parallax() {
	const parallaxElements = document.querySelectorAll('.parallax');

	if (!parallaxElements.length) return;

	parallaxElements.forEach(element => {
		gsap.registerPlugin(ScrollTrigger);
		gsap.to(element, {
			scrollTrigger: {
				trigger: element,
				scrub: 1,
			},
			ease: 'slow(0.7, 0.7, false)',
			y: window.innerWidth > 1024 ? 24 : 16,
			x: window.innerWidth > 1024 ? 24 : 16,
		});
	});
}

export function handlerModal() {
	const modal = document.querySelector('.modal');
	const modalOpenButtons = document.querySelectorAll('.modal-open');
	const modalCloseButtons = document.querySelectorAll('.modal-close');
	const modalBodies = document.querySelectorAll('.modal__body');
	const body = document.querySelector('body');
	const header = document.querySelector('.header');

	if (!modal) return;

	modalOpenButtons.forEach(element => {
		element.addEventListener('click', () => {
			const targetId = element.getAttribute('data-modal');
			const target = document.getElementById(targetId);
			if (!target) return;
			target.classList.add('active');
			modal.classList.add('active');
			body.classList.add('no-scroll');
			if (window.innerWidth > 1024) header.style.paddingRight = '8px';
		});
	});

	modalCloseButtons.forEach(element => {
		element.addEventListener('click', e => {
			e.preventDefault();
			modalBodies.forEach(body => body.classList.remove('active'));
			modal.classList.remove('active');
			body.classList.remove('no-scroll');
			if (window.innerWidth > 1024) header.style.paddingRight = '0';
		});
	});

	modal.addEventListener('click', event => {
		if (event.target === modal) {
			modalBodies.forEach(body => body.classList.remove('active'));
			modal.classList.remove('active');
			body.classList.remove('no-scroll');
			if (window.innerWidth > 1024) header.style.paddingRight = '0';
		}
	});

	document.addEventListener('keydown', event => {
		if (event.key === 'Escape') {
			modalBodies.forEach(body => body.classList.remove('active'));
			modal.classList.remove('active');
			body.classList.remove('no-scroll');
			if (window.innerWidth > 1024) header.style.paddingRight = '0';
		}
	});
}

export function handlerMenu() {
	const buttonToggle = document.querySelectorAll('.menu-toggle');
	const overaly = document.querySelector('.header-overlay');
	const header = document.querySelector('.header');
	const navigationList = header.querySelector('.navigation-list');
	const body = document.querySelector('body');

	if (!buttonToggle) return;

	navigationList.addEventListener('click', () => {
		header.classList.remove('active');
		body.classList.remove('no-scroll');
	});

	overaly.addEventListener('click', () => {
		header.classList.remove('active');
		body.classList.remove('no-scroll');
	});

	buttonToggle.forEach(button => {
		button.addEventListener('click', () => {
			body.classList.toggle('no-scroll');
			header.classList.toggle('active');
		});
	});
}

export function handlerBackgroundSize() {
	const servicesBackgorund = document.querySelector(
		'.services-carousel__background'
	);

	if (!servicesBackgorund) return;

	function handleResize() {
		const marginLeft = document.querySelector('.container').offsetLeft;
		if (window.innerWidth > 1568)
			return (servicesBackgorund.style.width = `calc(100% - (${marginLeft}px))`);
		if (window.innerWidth < 768)
			return (servicesBackgorund.style.width = `100%`);
		if (window.innerWidth < 1200)
			return (servicesBackgorund.style.width = `calc(100% - 32px)`);
		else return (servicesBackgorund.style.width = `calc(100% - 64px)`);
	}

	handleResize();
}

export function toTop() {
	const toTopButton = document.querySelector('.to-top');
	if (!toTopButton) return;

	window.scrollY > 1000
		? toTopButton.classList.add('active')
		: toTopButton.classList.remove('active');
}

export function handlerToTopClick() {
	const toTopButton = document.querySelector('.to-top');
	if (!toTopButton) return;
	toTopButton.addEventListener('click', () => {
		window.scrollTo({
			top: 0,
			behavior: 'smooth',
		});
	});
}

export function handlerFooter() {
	const copyRight = document.querySelector('.footer__copyright');
	const footer = document.querySelector('.footer .container');
	const head = document.querySelector('.footer__head');

	function handleResize() {
		let copyRightExist = false;

		if (window.innerWidth < 1024) {
			console.log(copyRightExist);
			if (copyRightExist) return;
			if (!copyRightExist) {
				footer.appendChild(copyRight);
				console.log('append');
				return (copyRightExist = true); // Update the flag
			}
		}
		if (window.innerWidth > 1024 && !copyRightExist) {
			head.appendChild(copyRight);
			return (copyRightExist = false); // Update the flag
		}
	}
	handleResize();
}
