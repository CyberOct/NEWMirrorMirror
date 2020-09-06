// * SELECTORS
const hero = document.querySelector(".hero");
const slider = document.querySelector('.slider');
const logo = document.querySelector('.logo');
const hamburger = document.querySelector('.hamburger');
const title = document.querySelector('.title');
const subTitle = document.querySelector('.subtitle');
const nav = document.querySelector('.navlinks-div');

// * FUNCTIONS
gsap.fromTo(hamburger, { opacity: 0, x: 100 }, { opacity: 1, x: 0, duration: 1, delay: 2 });
gsap.fromTo(title, { opacity: 0, x: 100 }, { opacity: 1, x: 0, duration: 1, delay: 2 });
gsap.fromTo(subTitle, { opacity: 0, x: 100 }, { opacity: 1, x: 0, duration: 1, delay: 2 });
gsap.fromTo(hero, { height: '0%' }, { height: '60vh', duration: 1, ease: Power2.easeInOut });
gsap.fromTo(hero, { width: '100%' }, { width: '90%',duration: 1.2, ease: Power2.easeInOut , delay:1});
gsap.fromTo(slider, { x: '-100%' }, { x: '0%', duration: 1.2, ease: Power2.easeInOut, delay: 1.2});
gsap.fromTo(logo, {opacity:0 , x:100}, {opacity:1, x:0,duration: 1,delay:2});;

const onScroll = () => {

    const aboutUsImg = document.getElementsByClassName('aboutUsImg');
    const container = document.getElementsByClassName('description');
    const orangeWave = document.getElementsByClassName('orangeWave');
    const ourMission = document.getElementsByClassName('ourMission');
    const ourFeatures = document.getElementsByClassName('card');
    const navbar = document.querySelector('.navbar');


    window.addEventListener('scroll', () => {
        const innerHeight = window.innerHeight;
        const innerWidth = window.innerWidth;
        const scrollY = window.scrollY;
        const sticky = document.querySelector('.sticky');

        if (scrollY >= innerHeight / 2) {
            container[0].style.animation = 'slideDown 1.5s cubic-bezier(0.4, 0, 1, 1) forwards 1s';
            aboutUsImg[0].style.animation = 'slideIn 1.5s cubic-bezier(0.4, 0, 1, 1) forwards 1s';

        }
        if (scrollY >= innerHeight / 1.7) {
            orangeWave[0].style.animation = 'f 4s cubic-bezier(0.4, 0, 1, 1) forwards 1s';
        }
        if (scrollY >= innerHeight / 1.1) {
            navbar.classList.add('sticky');
            nav.style.width = '100%';
        } else {
            if(innerWidth <=1024){
                nav.style.width = '60%';
            }else{
                nav.style.width = '100%';
            }
            navbar.classList.remove('sticky');
            
        }
        if (scrollY >= innerHeight / 1.499) {
            ourMission[0].classList.add('ourMissionSee', 'animate__animated', 'animate__flipInY', 'animate__delay-1s');
        }

        if (scrollY >= innerHeight / 1.0988) {

            for (i = 0; i < ourFeatures.length; i++) {
                ourFeatures[i].style.animation = `navLinkFade 0.5s ease forwards ${i / 7 + 0.3}4s`;
            };
        }
    })

}

const navSlide = () => {
    const burger = document.querySelector('.hamburger');
    
    const navLinks = document.getElementsByClassName('nav-links');


    burger.addEventListener('click', () => {
        //* Toggle nav 
        nav.classList.toggle('nav-active');

        //* Animate navlinks
        for (i = 0; i < navLinks.length; i++) {
            if (navLinks[i].style.animation) {
                navLinks[i].style.animation = '';
            } else {
                navLinks[i].style.animation = `navLinkFade 0.5s ease forwards ${i / 7 + 0.3}s`;
            }
        };
        //* Animate burger menu -fade up the menu links
        burger.classList.toggle('toggle');
    });


}

//* CALL FUNCTIONS
onScroll();
navSlide();

