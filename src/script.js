//   REVEALS
window.addEventListener('scroll', reveal);

function reveal() {
    let reveals = document.querySelectorAll(".reveal-y,.reveal-x");

    for (let i = 0; i < reveals.length; i++) {

        let windowheight = window.innerHeight;
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



// SLIDES
new Glider(document.querySelector('.glider'), {
    slidesToScroll: 1,
    slidesToShow: 5,
    draggable: true,
    dots: '.dots',
    arrows: {
        prev: '.g-prev',
        next: '.g-next'
    },
    responsive: [
        {
            // screens greater than >= 775px
            breakpoint: 1200,
            settings: {
                // Set to `auto` and provide item width to adjust to viewport
                slidesToShow: 4,
                slidesToScroll: 2
            }
        }, {
            // screens greater than >= 1024px
            breakpoint: 900,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
            }
        },
        {
            // screens greater than >= 1024px
            breakpoint: 640,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
            }
        },
        {
            // screens greater than >= 1024px
            breakpoint: 304,
            settings: {
                slidesToShow: 1.5,
                slidesToScroll: 1,
            }
        },
        {
            // screens greater than >= 1024px
            breakpoint: 0,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
            }
        }
    ]
})
    ;
