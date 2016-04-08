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






