const navMobile = document.querySelector('.nav-mobile');
const navBtn = document.querySelector('.hamburger');
const navOne = document.querySelectorAll('.nav__desk');
const rightSide = document.querySelector('.rightSide')
const leftSide = document.querySelector('.leftSide')
const cards = document.querySelector('.cards')

//hidding nav
const clear = () => {
	navBtn.classList.toggle('is-active');
	navMobile.classList.toggle('nav-mobile--active');
};

navOne.forEach((nav) => {
	nav.addEventListener('click', clear);
});

const handleNav = () => {
	handleNavItemsAnimations();
	navBtn.classList.toggle('is-active');
	navMobile.classList.toggle('nav-mobile--active');
};

navBtn.addEventListener('click', handleNav);

//animation delay time

const handleNavItemsAnimations = () => {
	let delayTime = 0;
	navOne.forEach((nav) => {
		nav.classList.toggle('nav-items-animation');
		nav.style.animationDelay = '.' + delayTime + 's';
		delayTime++;
	});
};

//typing
let typed = new Typed('.auto-type', {
	strings: [' a frontend developer', 'a designer', 'your new team member '],
	typeSpeed: 100,
	backSpeed: 50,
	loop: true,
});


//moving profile info


const options ={
	rootMargin: '-250px'
}

const startMoving = entry =>{
	if(entry[0].isIntersecting){
		leftSide.style.opacity = 1
		rightSide.style.opacity =1

	}
}

const observer = new IntersectionObserver(startMoving, options)
observer.observe(cards)
