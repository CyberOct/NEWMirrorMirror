const onScroll = () => {
    const aboutUsImg = document.getElementsByClassName('aboutUsImg');
    const container = document.getElementsByClassName('aboutUsImgContainer');
    const orangeWave = document.getElementsByClassName('orangeWave')
    
    window.addEventListener('scroll', () => {
        console.log(window.pageYOffset);
        if(window.pageYOffset >= 500){
            container[0].style.animation = 'slideDown 1s ease forwards 1s';
            aboutUsImg[0].style.animation = 'slideIn 2s ease forwards 1s';
            orangeWave[0].style.animation = 
        }
    })
}
onScroll();