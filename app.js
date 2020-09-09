// * SELECTORS
const hero = document.querySelector(".hero");
const slider = document.querySelector('.slider');
const logo = document.querySelector('.logo');
const hamburger = document.querySelector('.hamburger');
const title = document.querySelector('.title');
const subTitle = document.querySelector('.subtitle');
const nav = document.querySelector('.navlinks-div');
const navWeeding = document.querySelector('.carousel-nav-wedding');
const navBaptism = document.querySelector('.carousel-nav-baptism');
const navCorporate = document.querySelector('.carousel-nav-corporate');
const carousels = document.querySelectorAll('.carousel');


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
    const portofolio = document.querySelector('.s3 .title');



    window.addEventListener('scroll', () => {
        const innerHeight = window.innerHeight;
        const innerWidth = window.innerWidth;
        const scrollY = window.scrollY;
        console.log(innerHeight);
        console.log(scrollY);

        if (scrollY >= innerHeight / 2) {
            container[0].style.animation = 'slideDown 1.5s cubic-bezier(0.4, 0, 1, 1) forwards 1s';
            aboutUsImg[0].style.animation = 'slideIn 1.5s cubic-bezier(0.4, 0, 1, 1) forwards 1s';

        }
        if (scrollY >= innerHeight / 1.7) {
            orangeWave[0].style.animation = 'f 4s cubic-bezier(0.4, 0, 1, 1) forwards 2.5s';
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
            ourMission[0].classList.add('ourMissionSee', 'animate__animated', 'animate__flipInY', 'animate__delay-3s');
        }

        if (scrollY >= innerHeight / 1.0988) {

            for (i = 0; i < ourFeatures.length; i++) {
                ourFeatures[i].style.animation = `navLinkFade 0.5s ease forwards ${i / 7 + 4}s`;
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

const carouselNav = () => {
    let opacity = new Array(3);
    const checkOpacity = () => {
        for (i = 0; i < carousels.length; i++) {
            opacity[i] = window.getComputedStyle(carousels[i]).getPropertyValue("opacity");
        }
        return opacity;
    }
    
        navWeeding.addEventListener('click', () => {
            const op = checkOpacity();
            navWeeding.style.backgroundColor = "rgb(255,255,255)";
            navBaptism.style.backgroundColor = "rgb(128,128,128)";
            navCorporate.style.backgroundColor = "rgb(128,128,128)";
            op.forEach(function (item,i){if(item>0 && item<1) op[i]=0;});
            let x  = op.toString();
            switch (x) {
                case "1,0,0":
                    break;
                case "0,1,0":
                    carousels[1].style.animation = 'slideOutLeft 1s ease';
                    carousels[1].style.opacity = "0";
                    carousels[0].style.animation = 'slideInRight 2s ease';
                    carousels[0].style.opacity = "1";
                    break;
                case "0,0,1":
                    carousels[2].style.animation = 'slideOutLeft 1s ease';
                    carousels[2].style.opacity = "0";
                    carousels[0].style.animation = 'slideInRight 2s ease';
                    carousels[0].style.opacity = "1";
                    break;
                default:
                    break;
            }
        })
    navBaptism.addEventListener('click', () => {
        const op = checkOpacity();
        navWeeding.style.backgroundColor = "rgb(128,128,128)";
        navBaptism.style.backgroundColor = "rgb(255,255,255)";
        navCorporate.style.backgroundColor = "rgb(128,128,128)";
        op.forEach(function (item, i) { if (item === "0.7") op[i] = 0; });
        let x = op.toString();
        switch (x) {
            case "1,0,0":
                carousels[0].style.animation ='slideOutLeft 1s ease';
                carousels[0].style.opacity="0";
                carousels[1].style.animation ='slideInRight 2s ease';
                carousels[1].style.opacity = "1";
                break;
            case "0,1,0":
                break;
            case "0,0,1":
                carousels[2].style.animation = 'slideOutLeft 1s ease';
                carousels[2].style.opacity = "0";
                carousels[1].style.animation = 'slideInRight 2s ease';
                carousels[1].style.opacity = "1";
                break;
            default:
                break;
        }
    })
    navCorporate.addEventListener('click', () => {
        const op = checkOpacity();
        navWeeding.style.backgroundColor = "rgb(128,128,128";
        navBaptism.style.backgroundColor = "rgb(128,128,128)";
        navCorporate.style.backgroundColor = "rgb(255,255,255)";
        op.forEach(function (item, i) { if (item === "0.7")  op[i] = 0; });
        let x = op.toString();
        switch (x) {
            case "1,0,0":
                carousels[0].style.animation = 'slideOutLeft 1s ease';
                carousels[0].style.opacity = "0";
                carousels[2].style.animation = 'slideInRight 2s ease';
                carousels[2].style.opacity = "1";
                break;
            case "0,1,0":
                carousels[1].style.animation = 'slideOutLeft 1s ease';
                carousels[1].style.opacity = "0";
                carousels[2].style.animation = 'slideInRight 2s ease';
                carousels[2].style.opacity = "1";
                break;
            case "0,0,1":
                break;
            default:
                break;
        }
    })
    
}
const carouselImgNav = () => {
    function activeCarousel() {
        let theActiveOne = "";
        carousels.forEach((carousel, index) => {
            let active = window.getComputedStyle(carousel).getPropertyValue("opacity");
            if (active === "1") {
                switch (index) {
                    case 0:
                        theActiveOne = "wedding" ;
                        break;
                    case 1:
                        theActiveOne =  "baptism";
                        break;
                    case 2:
                        theActiveOne =  "corporate";
                        break;
                    default:
                        break;
                }
            }
        
        });
        return theActiveOne;
    }
    const arrowNext = document.querySelector('.right');
    arrowNext.addEventListener('click', () => {
        const active = activeCarousel();
        const currentImg = document.querySelector(`.carousel-${active} .carousel-images .active`);
        const nextImg = currentImg.nextElementSibling;
        nextImag(currentImg, nextImg);
        
    })
    const arrowPrev = document.querySelector('.left');
    arrowPrev.addEventListener('click', () => {
        const active = activeCarousel();
        const currentImg = document.querySelector(`.carousel-${active} .carousel-images .active`);
        const previousImg = currentImg.previousElementSibling;
        prevImag(currentImg, previousImg);
    })
    function nextImag(currentImg, nextImg) {
        if (nextImg === null) {
            currentImg.style.animation = 'shake 0.5s ease';
            currentImg.addEventListener("animationend", () => {
                currentImg.style.animation = "";
            })
        } else {
            currentImg.style.animation = 'f 2s ease-in-out reverse';
            currentImg.addEventListener("animationend", () => {
                currentImg.style.animation = "";
            })
            deactivate(currentImg);
            nextImg.classList.add('active');
            nextImg.style.animation = 'f 2s ease-in-out';
            nextImg.addEventListener("animationend", () => {
                nextImg.style.animation = "";
            })
        }
    }
    function prevImag(currentImg, prevImg) {
        if(prevImg === null){
            currentImg.style.animation = 'shake 0.5s ease';
            currentImg.addEventListener("animationend", () => {
                currentImg.style.animation = "";
            })
        }else{
            currentImg.style.animation = 'f 2s ease-in-out reverse';
            currentImg.addEventListener("animationend", () => {
                currentImg.style.animation = "";
            })
            deactivate(currentImg);
            prevImg.classList.add('active');
            prevImg.style.animation = 'f 2s ease-in-out';
            prevImg.addEventListener("animationend", () => {
                prevImg.style.animation = "";
            });
        }
       
    }
    function deactivate(currImg){
        currImg.classList.add('inactive');
        currImg.classList.remove('active');
    }
        

}

//* CALL FUNCTIONS
onScroll();
navSlide();
carouselNav();
carouselImgNav();


