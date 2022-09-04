const navMobile = document.querySelector('.nav-mobile');
const navBtn = document.querySelector('.hamburger');
const footerYear = document.querySelector('.footer__year');

const navOne = document.querySelector('.nav__desk');
const navTwo = document.querySelector('.nav__desk2');
const navThree = document.querySelector('.nav__desk3');

const clear = () => {
	navBtn.classList.toggle('is-active');
	navMobile.classList.toggle('nav-mobile--active');
};

navOne.addEventListener('click', clear);
navTwo.addEventListener('click', clear);
navThree.addEventListener('click', clear);

const handleNav = () => {
	navBtn.classList.toggle('is-active');
	navMobile.classList.toggle('nav-mobile--active');
};

navBtn.addEventListener('click', handleNav);

const handleCurrentYear = () => {
	const year = new Date().getFullYear();
	footerYear.innerText = year;
};
handleCurrentYear();
