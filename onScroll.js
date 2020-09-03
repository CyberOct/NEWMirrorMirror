const onScroll = () => {
    const aboutUsImg = document.getElementsByClassName('aboutUsImg');
    const container = document.getElementsByClassName('description');
    const orangeWave = document.getElementsByClassName('orangeWave');
    const ourMission = document.getElementsByClassName('ourMission');
    const ourFeatures = document.getElementsByClassName('card');
    
    window.addEventListener('scroll', () => {
        console.log(window.pageYOffset);
        console.log(ourFeatures);
        if(window.pageYOffset >= 600){
            container[0].style.animation = 'slideDown 1.5s cubic-bezier(0.4, 0, 1, 1) forwards 1s';
            aboutUsImg[0].style.animation = 'slideIn 1.5s cubic-bezier(0.4, 0, 1, 1) forwards 1s';
           
        }
        if (window.pageYOffset >= 772) {
            orangeWave[0].style.animation = 'f 4s cubic-bezier(0.4, 0, 1, 1) forwards 1s';
        }
        if (window.pageYOffset >= 900) {
            ourMission[0].classList.add('ourMissionSee', 'animate__animated', 'animate__flipInY', 'animate__delay-2s');
        }
        if (window.pageYOffset >= 1275) {
            
            for (i = 0; i < ourFeatures.length; i++) {
                ourFeatures[i].style.animation = `navLinkFade 0.5s ease forwards ${i / 7 + 0.3}4s`;
            };
        }
    })
}
onScroll();