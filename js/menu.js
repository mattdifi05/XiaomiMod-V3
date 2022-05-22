// menu mobile
  $( document ).ready(function() {
    $( ".hamburger" ).on('click', function() {
      $(".menu").toggleClass("menu--open");
    });
  });
  ScrollReveal().reveal('.reveal',  { distance: '1px', duration: 1, easing: 'cubic-bezier(.1, .1, .1, 1)', interval: 1 });
  ScrollReveal().reveal('.zoom',  { duration: 1, easing: 'cubic-bezier(.1, .1, .1, 1)', interval: 1, scale: 0.1, mobile: false});
