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
	console.log($(window).width())
	if($(window).width() > 550 && $(window).width() < 900){
		$("#indvButtonDiv").css("margin-left","25%")
		$("#profButtonDiv").css("margin-left","25%")	
	}
});