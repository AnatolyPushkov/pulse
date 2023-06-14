$(document).ready(function(){
    $('.carusel__inner').slick({
        prevArrow: '<button type="button" class="slick-prev"><img src="icons/left.png"></button>',
        nextArrow: '<button type="button" class="slick-next"><img src="icons/right.png"></button>',
        responsive: [
            {
                breakpoint: 992,
                settings: {
                  arrows: false  
            }
            }
        ]
    });
  });
          