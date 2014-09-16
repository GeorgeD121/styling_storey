$(document).ready(function () {
    $(window).scroll(function () {
        if ($(document).scrollTop() > 50) {
            $("nav").addClass("scrolled");
        } else {
            $("nav").removeClass("scrolled");
        }
    });
});

$(document).ready(function() {
  $("#their_storey_carousel").owlCarousel({
      autoPlay: 3000, //Set AutoPlay to 3 seconds
      items : 3,
      itemsDesktop : [1199,3],
      itemsDesktopSmall : [979,2]
  });
});

jQuery(document).ready(function(){
    var stylingTopPosition = jQuery('#styling').offset().top;
    var myTopPosition = jQuery('#my_storey').offset().top;
    var theirTopPosition = jQuery('#their_storey').offset().top;
    var youTopPosition = jQuery('#your_storey').offset().top;
    jQuery('.styling_nav').click(function(){
        console.log('shit');
        jQuery('html, body').animate({scrollTop:stylingTopPosition}, 'slow');
        return false;
    });
    jQuery('.my_nav').click(function(){
        console.log('shit');
        jQuery('html, body').animate({scrollTop:myTopPosition}, 'slow');
        return false;
    });
    jQuery('.their_nav').click(function(){
        jQuery('html, body').animate({scrollTop:theirTopPosition}, 'slow');
        return false;
    });
    jQuery('.your_nav').click(function(){
        jQuery('html, body').animate({scrollTop:youTopPosition}, 'slow');
        return false;
    });
});