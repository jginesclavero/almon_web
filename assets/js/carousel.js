$(document).ready(function() {
	$('.big-carousel').carousel({
  		interval: 10000
	});
	$('.big-carousel-2').carousel({
  		interval: 3000
	});

	$('.carousel').carousel({
  		interval: false
	});
});

function changePhoto(src,id){
	if(id==1){
		$(".active.parent.1 img").attr('src',src);
	}else if(id==2){
		$(".active.parent.2 img").attr('src',src);
	}

}
