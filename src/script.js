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
    direction: 'horizontal',
    loop: true,
    
    navigation: {
      nextEl: '.s-next',
      prevEl: '.s-prev',
    },
    breakpoints: {
      300: {
        slidesPerView: 1.15,
      },
      600: {
        slidesPerView: 2.5,
      },
      1200:{
        slidesPerView:4
      }
    }

  });

