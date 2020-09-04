const navSlide = () => {
    const burger = document.querySelector('.hamburger');
    const nav = document.querySelector('.navlinks-div');
    const navLinks = document.getElementsByClassName('nav-links');
  
    
    burger.addEventListener('click', () => {
        //* Toggle nav 
        nav.classList.toggle('nav-active');
        
        //* Animate navlinks
        for(i=0; i<navLinks.length; i++) {
            if (navLinks[i].style.animation) {
                navLinks[i].style.animation = '';
            }else {
                navLinks[i].style.animation = `navLinkFade 0.5s ease forwards ${i / 7 + 0.3}s`;
            }
        };
        //* Animate burger menu -fade up the menu links
        burger.classList.toggle('toggle');
    });

    
}

navSlide();