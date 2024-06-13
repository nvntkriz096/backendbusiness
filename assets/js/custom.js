$('.navbar .dropdown').hover(function() {
  $(this).find('.dropdown-menu').stop(true, true).delay(100).fadeIn(900,"swing");
}, function() {
  $(this).find('.dropdown-menu').stop(true, true).delay(100).fadeOut(300,"swing");
});

(function($) {
  "use strict";
  //Pre loader
  $(window).on('load',function() {
      $('.preloader').delay(400).slideUp('slow'); // set duration in brackets    
  });

  //Scroll Top
  $(window).scroll(function() {
      if ($(this).scrollTop() > 200) {
          $('.scroll-top').fadeIn();
          $('.scroll-top').removeClass('not-visible');
      } else {
          $('.scroll-top').fadeOut();
      }
  });
  $('.scroll-top').on('click', function(event) {
      event.preventDefault();
      $('html, body').animate({
          scrollTop: 0
      }, 500);
  });    

  //calling Aos animate
  AOS.init({
    offset: 100,
    duration: 1200,
    delay: 300,
    easing: 'ease',
    once: false,
})

})(window.jQuery);
