import * as baseFunctions from './modules/functions.js';

document.addEventListener('DOMContentLoaded', () => {
	// Custom JS
	baseFunctions.isWebp();
	baseFunctions.fixedHeader();

	window.addEventListener('scroll', baseFunctions.fixedHeader);

	const buttons = document.getElementsByTagName('button');
	for (const button of buttons) {
		button.addEventListener('click', event =>
			baseFunctions.createRipple(event)
		);
	}
});
