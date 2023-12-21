// fixed header

const header = document.querySelector('.header');


function checkScroll() {

    let scrollPos = window.scrollY;

    if (scrollPos > 200) {
        header.classList.add('fixed');

    } else {
        header.classList.remove('fixed');
    }
}

window.addEventListener('scroll', checkScroll);

document.addEventListener('DOMContentLoaded', checkScroll);



// smooth scroll

$('nav a').on('click', function (e) {
    e.preventDefault();

    var $this = $(this);
    
    $('nav a').removeClass('active');
    $this.addClass('active');
    $('.nav--footer a').removeClass('active');
   
    $('html, body').animate({
      scrollTop: $($(this).attr('href')).offset().top
    }, 500, 'linear');
  });



// slider

$(document).ready(function(){
    $('.demo').slick();
});

$('.demo').slick ({
    slidesToShow: 3,
    slidesToScroll: 1,
    infinity: true,
    arrows: true
});