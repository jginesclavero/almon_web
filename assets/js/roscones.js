$(document).ready(function() {

	$('.big-carousel-4').carousel({
  		interval: 3000
	});
	$('.carousel').carousel({
  		interval: false
	});

	if($(window).width() < 680){
		$('.c').css("margin-left","5%")
	}
});