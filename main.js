const toggler = document.querySelector('.toggler');
const prices = document.querySelectorAll('.price');

let isAnnually = true;

toggler.addEventListener('click', () => {
	toggler.classList.toggle('active');
	toggler.style.backgroundColor = '#696fdd';

	prices.forEach(price => {
		price.textContent = isAnnually
			? price.dataset.annually
			: price.dataset.monthly;
	});

	isAnnually = !isAnnually;
});
