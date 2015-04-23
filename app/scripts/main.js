'use strict';

// Tooltips
$(function () {
  $('[data-toggle="tooltip"]').tooltip();
});


// Shrink Navbar on Scroll

$(window).scroll(function(){

  var navbar = $('#main-navigation');

  if( $(document).scrollTop() > 110 ) {
    navbar.removeClass('navbar-fat');
  } else {
    navbar.addClass('navbar-fat');
  }

});


$(document).ready(function(){  

  // SmoothScroll
  function smoothScroll(x) {
    $(x+' a[href*=#]').click(function() {
      if (location.pathname.replace(/^\//,'') === this.pathname.replace(/^\//,'') && location.hostname === this.hostname) {
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
        if (target.length) {
          $('html,body').animate({
            scrollTop: target.offset().top
          }, 500);
          return false;
        }
      }
    });
  }

  var scrollItems = [
    '.nav',
    '.navbar-header'
  ];

  for ( var i = 0; i < scrollItems.length; i++ ) {
    smoothScroll(scrollItems[i]);
  }

});