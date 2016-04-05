// setting up the vegas slider:
$(".header").vegas({
	conver: true,
   	slides: [
       	{ src: "/images/slider_1.jpg" },
       	{ src: "/images/slider_2.jpg" },
       	{ src: "/images/slider_3.jpg" }
   	]
});

// SET UP THE NAV BUTTON:
// create burger var
var $hamburger = $('.hamburger');
// toggle class "is-active" when clicked:
$hamburger.on('click', function(e) {
	$hamburger.toggleClass('is-active');
});

