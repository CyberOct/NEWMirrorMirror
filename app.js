const hero = document.querySelector(".hero");
const slider = document.querySelector('.slider');
const logo = document.querySelector('.logo');
//const hamburger = document.querySelector('.hamburger');
const title = document.querySelector('.title');
const subTitle = document.querySelector('.subtitle');




gsap.fromTo(title, { opacity: 0, x: 30 }, { opacity: 1, x: 0, duration: 1, delay: 2 });
gsap.fromTo(subTitle, { opacity: 0, x: 30 }, { opacity: 1, x: 0, duration: 1, delay: 2 });
gsap.fromTo(hero, { height: '0%' }, { height: '60vh', duration: 1, ease: Power2.easeInOut });
gsap.fromTo(hero, { width: '100%' }, { width: '90%',duration: 1.2, ease: Power2.easeInOut , delay:1});
gsap.fromTo(slider, { x: '-100%' }, { x: '0%', duration: 1.2, ease: Power2.easeInOut, delay: 1.2});
gsap.fromTo(logo, {opacity:0 , x:30}, {opacity:1, x:0,duration: 1,delay:2});;

