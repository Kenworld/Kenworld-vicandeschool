$(document).ready(function(){
    // Expand dropdown on hover
    $('.navbar-nav .dropdown').hover(function() {
      $(this).find('.dropdown-menu').stop(true, true).delay(200).fadeIn(500);
    }, function() {
      $(this).find('.dropdown-menu').stop(true, true).delay(200).fadeOut(500);
    });
  });
  $('.navbar-toggler').click(function() { 
    $('.navbar-collapse').toggleClass('show');
   });
 