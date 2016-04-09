$(function() {

var $header = $('.header');

$header.vegas({
	conver: true,
   	slides: [
       	{ src: "/images/slider_1.jpg" },
       	{ src: "/images/slider_2.jpg" },
       	{ src: "/images/slider_3.jpg" }
   	]
});

var $hamburger   = $('.hamburger');
var	$navigation  = $('.off-canvas-nav');


// toggle class "is-active" when clicked:
$hamburger.on('click', function(e) {
	$hamburger.toggleClass('is-active');
	$navigation.toggleClass('is-visible');
});


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




