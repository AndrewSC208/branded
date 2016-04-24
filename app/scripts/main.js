$(function() {

  // navigation variables
  var burger         = $('.hamburger');
  var navigation     = $('.off-canvas-nav');
  var visibleNavLink = $('.off-canvas-nav a');
  // slider variabels:
  var header = $('.header');
  
  // burger action
  burger.on('click', function(e) {
    burger.toggleClass('is-active');
  });

  // toggle navigation when burger is clicked:
  burger.on('click', function(e) {
    navigation.toggleClass('is-visible');
  });

  // hid navigation, and change burger style when link in navigation is clicked:
  visibleNavLink.on('click', function(e) {
    burger.toggleClass('is-active');
    navigation.toggleClass('is-visible');
  });

  // slider configuration
  header.vegas({
  	conver: true,
     	slides: [
         	{ src: "/images/slider_1.jpg" },
         	{ src: "/images/slider_2.jpg" },
         	{ src: "/images/slider_3.jpg" }
     	]
  });

  // scroll transition to sections!
  $('a[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });
});
