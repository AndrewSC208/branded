'use strict';
$(function() {

  // navigation variables
  var burger = $('.hamburger');
  var navigation = $('.off-canvas-nav');
  var visibleNavLink = $('.off-canvas-nav a');
  // slider variabels:
  var header = $('.header');
  //burger action
  burger.on('click', function() {
    burger.toggleClass('is-active');
    navigation.toggleClass('is-visible');
  });

  // hide navigation, and change burger style when link in navigation is clicked:
  visibleNavLink.on('click', function() {
    navigation.removeClass('is-visible');
    burger.removeClass('is-active');
  });

  // slider configuration
  header.vegas({
    conver: true,
      slides: [
          { src: '/images/slider_1.jpg' },
          { src: '/images/slider_2.jpg' },
          { src: '/images/slider_3.jpg' }
      ]
  });

  // scroll transition to sections!
  $(function () {

    $('a[href^="#"]').click(function(event) {
    var id = $(this).attr('href');
    var offset = 0;
    var target = $(id).offset().top - offset;

    $('html, body').animate({ scrollTop: target }, 500);
      event.preventDefault();
    });

  });
});
