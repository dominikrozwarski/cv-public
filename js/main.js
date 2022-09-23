const navMobile = document.querySelector('.nav-mobile');
const navBtn = document.querySelector('.hamburger');
const footerYear = document.querySelector('.footer__year');

const navOne = document.querySelectorAll('.nav__desk');








//hidding nav
const clear = () => {
	navBtn.classList.toggle('is-active');
	navMobile.classList.toggle('nav-mobile--active');
};

navOne.forEach(nav=>{
	nav.addEventListener('click', clear)
})


const handleNav = () => {
	handleNavItemsAnimations()
	navBtn.classList.toggle('is-active');
	navMobile.classList.toggle('nav-mobile--active');
};

navBtn.addEventListener('click', handleNav);


//animation delay time

const handleNavItemsAnimations =()=>{
	let delayTime =0;
	navOne.forEach(nav =>{
		nav.classList.toggle('nav-items-animation')
		nav.style.animationDelay = '.' + delayTime + 's';
		delayTime++
	})
	
}



//typing
let typed = new Typed(".auto-type", {
	strings:[" a frontend developer", "a designer", "in need for work :)", "jobless..."],
	typeSpeed:50,
	backSpeed:50,
	loop:true
})


//footer year
const handleCurrentYear = () => {
	const year = new Date().getFullYear();
	footerYear.innerText = year;
};
handleCurrentYear();