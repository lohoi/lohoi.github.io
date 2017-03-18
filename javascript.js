$(document).ready(function(){
	// hide .navbar first
    $(".navbar").hide();

    
	$(".greetings").fadeIn(2000);

    // fade in .navbar
    $(function () {
        $(window).scroll(function () {

                 // set distance user needs to scroll before we start fadeIn
            if ($(this).scrollTop() > 100) {
                $('.navbar').fadeIn();
            } else {
                $('.navbar').fadeOut();
            }
        });
    });
});