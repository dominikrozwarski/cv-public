const navMobile = document.querySelector('.nav-mobile');
const navBtn = document.querySelector('.hamburger');
const navLinks = document.querySelectorAll('.nav__desk');
const rightSide = document.querySelector('.rightSide');
const leftSide = document.querySelector('.leftSide');
const cards = document.querySelector('.cards');

const toggleNav = () => {
	navBtn.classList.toggle('is-active');
	navMobile.classList.toggle('nav-mobile--active');
};

const animateNavItems = () => {
	let delay = 0;
	navLinks.forEach((link) => {
		link.classList.toggle('nav-items-animation');
		link.style.animationDelay = '.' + delay + 's';
		delay++;
	});
};

navLinks.forEach((link) => link.addEventListener('click', toggleNav));

navBtn.addEventListener('click', () => {
	animateNavItems();
	toggleNav();
});

new Typed('.auto-type', {
	strings: [' a frontend developer', ' a designer', ' your new team member'],
	typeSpeed: 100,
	backSpeed: 50,
	loop: true,
});

const observer = new IntersectionObserver(
	([entry]) => {
		if (entry.isIntersecting) {
			leftSide.style.opacity = 1;
			rightSide.style.opacity = 1;
		}
	},
	{ rootMargin: '-250px' }
);

observer.observe(cards);
