$(function() {

	// Custom JS

});

//Slider
$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    //nav:true,
    dots: true,
    //autoplay:true,
    //autoplayTimeout:5000,
    //autoplayHoverPause:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
}) 

//Animation
$(document).ready(function() {
    // Check if element is scrolled into view
    function isScrolledIntoView(elem) {
      var docViewTop = $(window).scrollTop();
      var docViewBottom = docViewTop + $(window).height();
  
      var elemTop = $(elem).offset().top;
      var elemBottom = elemTop + $(elem).height();
  
      return ((elemBottom <= docViewBottom) && (elemTop >= docViewTop));
    }
    // If element is scrolled into view, fade it in
    $(window).scroll(function() {
      $('.s_about').each(function() {
        if (isScrolledIntoView(this) === true) {
          $(this).addClass('fadeInLeft');
        }
      });
    });
  });