const reveals = document.querySelectorAll(".reveal");

function reveal() {

    for (let i = 0; i < reveals.length; i++) {

        let windowheight = window.innerHeight
        let revealtop = reveals[i].getBoundingClientRect().top;
        let revealpoint = 150;

        if (revealtop < windowheight - revealpoint) {
            reveals[i].classList.add('active');
        }
        else {
            reveals[i].classList.remove('active');
        }
    }
}
window.addEventListener('scroll', reveal);


const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    
    // Navigation arrows
    navigation: {
      nextEl: '.s-next',
      prevEl: '.s-prev',
    },
    breakpoints: {
      500: {
        slidesPerView: 1
      },
      700: {
        slidesPerView: 1.5
      },
      900:{
        slidesPerView:4
      }
    }

  });

