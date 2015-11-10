function changePhoto(src,id){
	if(id==1){
		$(".active.parent.1 img").attr('src',src);
	}else if(id==2){
		$(".active.parent.2 img").attr('src',src);
	}
}

function proffesionalSection(){
	$("#centerBox").html('<div class="container" id="carouselDiv"><div class="col-md-8"><div class="big-carousel slide article-slide" id="article-photo-carousel">'+
		'<!-- Wrapper for slides --><div class="carousel-inner cont-slider">'+
		'<div class="item parent active" id="itemActive0"><img alt="" title="" src="images/profesionales/1.jpg"></div>'+
		'<div class="item parent 1"><img alt="" title="" src="images/profesionales/2.jpg"></div>'+
    	'<div class="item parent 1"><img alt="" title="" src="images/profesionales/3.jpg"></div>'+
    	'<div class="item parent 1"><img alt="" title="" src="images/profesionales/4.jpg"></div>'+
    	'<div class="item parent 1"><img alt="" title="" src="images/profesionales/5.jpg"></div>'+
    	'<div class="item parent 1"><img alt="" title="" src="images/profesionales/6.jpg"></div>'+
    	'<div class="item parent 1"><img alt="" title="" src="images/profesionales/7.jpg"></div>'+
    	'<div class="item parent 1"><img alt="" title="" src="images/profesionales/8.jpg"></div>'+
    	'<div class="item parent 1"><img alt="" title="" src="images/profesionales/9.jpg"></div>'+
    	'<div class="item parent 1"><img alt="" title="" src="images/profesionales/10.jpg"></div>'+
    	'<div class="item parent 1"><img alt="" title="" src="images/profesionales/11.jpg"></div>'+
    	'<div class="item parent 1"><img alt="" title="" src="images/profesionales/12.jpg"></div>'+
    	'<div class="item parent 1"><img alt="" title="" src="images/profesionales/13.jpg"></div>'+
    	'<div class="item parent 1"><img alt="" title="" src="images/profesionales/14.jpg"></div>'+
    	'<div class="item parent 1"><img alt="" title="" src="images/profesionales/15.jpg"></div>'+
    	'<div class="item parent 1"><img alt="" title="" src="images/profesionales/16.jpg"></div>'+
    	'</div></div>'+

    	'<div id="Carousel1" class="carousel slide"><!-- Carousel items --><div class="carousel-inner"><div class="item active"><div class="row">'+
		'<div class="col-xs-3 img-responsive"><a class="thumbnail"><img src="images/profesionales/1.jpg" alt="Image" onclick="changePhoto(src,1)" style="max-width:100%;"></a></div>'+
		'<div class="col-xs-3 img-responsive"><a class="thumbnail"><img src="images/profesionales/2.jpg" alt="Image" onclick="changePhoto(src,1)" style="max-width:100%;"></a></div>'+
		'<div class="col-xs-3 img-responsive"><a class="thumbnail"><img src="images/profesionales/3.jpg" alt="Image" onclick="changePhoto(src,1)" style="max-width:100%;"></a></div>'+
		'<div class="col-xs-3 img-responsive"><a class="thumbnail"><img src="images/profesionales/4.jpg" alt="Image" onclick="changePhoto(src,1)" style="max-width:100%;"></a></div>'+
		'</div><!--.row--></div><!--.item-->'+
		'<div class="item"><div class="row">'+
		'<div class="col-xs-3 img-responsive"><a class="thumbnail"><img src="images/profesionales/5.jpg" alt="Image" onclick="changePhoto(src,1)" style="max-width:100%;"></a></div>'+
		'<div class="col-xs-3 img-responsive"><a class="thumbnail"><img src="images/profesionales/6.jpg" alt="Image" onclick="changePhoto(src,1)" style="max-width:100%;"></a></div>'+
		'<div class="col-xs-3 img-responsive"><a class="thumbnail"><img src="images/profesionales/7.jpg" alt="Image" onclick="changePhoto(src,1)" style="max-width:100%;"></a></div>'+
		'<div class="col-xs-3 img-responsive"><a class="thumbnail"><img src="images/profesionales/8.jpg" alt="Image" onclick="changePhoto(src,1)" style="max-width:100%;"></a></div>'+
		'</div><!--.row-->'+
		'</div><!--.item-->'+
		'<div class="item"><div class="row">'+
		'<div class="col-xs-3 img-responsive"><a class="thumbnail"><img src="images/profesionales/9.jpg" alt="Image" onclick="changePhoto(src,1)" style="max-width:100%;"></a></div>'+
		'<div class="col-xs-3 img-responsive"><a class="thumbnail"><img src="images/profesionales/10.jpg" alt="Image" onclick="changePhoto(src,1)" style="max-width:100%;"></a></div>'+
		'<div class="col-xs-3 img-responsive"><a class="thumbnail"><img src="images/profesionales/11.jpg" alt="Image" onclick="changePhoto(src,1)" style="max-width:100%;"></a></div>'+
		'<div class="col-xs-3 img-responsive"><a class="thumbnail"><img src="images/profesionales/12.jpg" alt="Image" onclick="changePhoto(src,1)" style="max-width:100%;"></a></div>'+
		'</div><!--.row-->'+
		'</div><!--.item-->'+
		'<div class="item"><div class="row">'+
		'<div class="col-xs-3 img-responsive"><a class="thumbnail"><img src="images/profesionales/13.jpg" alt="Image" onclick="changePhoto(src,1)" style="max-width:100%;"></a></div>'+
		'<div class="col-xs-3 img-responsive"><a class="thumbnail"><img src="images/profesionales/14.jpg" alt="Image" onclick="changePhoto(src,1)" style="max-width:100%;"></a></div>'+
		'<div class="col-xs-3 img-responsive"><a class="thumbnail"><img src="images/profesionales/15.jpg" alt="Image" onclick="changePhoto(src,1)" style="max-width:100%;"></a></div>'+
		'<div class="col-xs-3 img-responsive"><a class="thumbnail"><img src="images/profesionales/16.jpg" alt="Image" onclick="changePhoto(src,1)" style="max-width:100%;"></a></div>'+
		'</div><!--.row-->'+
		'</div><!--.item-->'+
		'</div><!--.carousel-inner-->'+
		'<a data-slide="prev" href="#Carousel1" class="left carousel-control">'+
		'<i class="fa fa-arrow-left"></i></a>'+
		'<a data-slide="next" href="#Carousel1" class="right carousel-control">'+
		'<i class="fa fa-arrow-right"></i></a>'+
		'<ol class="carousel-indicators">'+
		'<li data-target="#Carousel1" data-slide-to="0" class="active"></li>'+
		'<li data-target="#Carousel1" data-slide-to="1"></li>'+
		'<li data-target="#Carousel1" data-slide-to="2"></li>'+
		'<li data-target="#Carousel1" data-slide-to="3"></li>'+
		'</ol></div><!--.Carousel-->'+  
		'</div>'+
		'<div class="col-md-4">'+
		'<div class="content" id="empanadasText">'+
		'<h3>Empanadas y tartas</h3>'+
		'<p><b>Empanadas refrigeradas o congeladas</b>: Disponemos de una gran variedad de <b>tamaños y de sabores</b>. Empanada de 1/2 kg, 1 kg y 2,5 kg con sabores como: <b>atún</b>, jamon y queso,<b> bacon y queso</b>'+
		', bacon y chorizo, bacalao, pulpo, pollo y <b>pollo a la barbacoa</b>, salmón y queso philadelphia, gambas o carne picada. Pruebe tambien nuestra '+
		'<b>empanada gallega de atun </b> de 2,5 kg . O si lo prefiere empanadilla de atun de 240 gramos.'+
		'</br>'+
		'Disfrute tambien de nuestras deliciosas <b>tartas de queso y de manzana</b>, ¡Inigualables!</p>'+
		'</div>'+
		'</div>'+
		'</div>')

	$('.big-carousel').carousel({
  		interval: 3000
	});
	$('.carousel').carousel({
  		interval: false
	});
}

function individualSection(){
	$("#centerBox").html(
//Carousel2
'<div class="container" id="carouselDiv">'+
'<div class="col-md-4">'+
'<div class="content" id="pastelesText">'+
'<h3>Tartas y pasteles</h3>'+
'<p>Disponemos de pasteles surtidos y una amplia variedad de sabores y tamaños de tartas tanto para hosteleria como para celebraciones familiares.'+
'</br>'+
'Pruebe nuestra tarta de <b>queso</b> y nuestra tarta de <b>manzana</b>. Te chuparás los dedos.'+
'</br> '+
'Y en navidad fabricamos los mejores <b>roscones de reyes</b> de distintos tamaños  y sabores (Nata, trufa y crema) '+
'</p>'+
'</div>'+
'</div>'+
'<div class="col-md-8">'+
'<div class="big-carousel-2 slide article-slide" id="article-photo-carousel">'+
'<!-- Wrapper for slides -->'+
'<div class="carousel-inner cont-slider">'+
'<div class="item parent active" id="itemActive0">'+
'<img alt="" title="" src="images/particulares/tartas_y_pasteles/2.jpg">'+
'</div>'+
'<div class="item parent 1">'+
'<img alt="" title="" src="images/particulares/tartas_y_pasteles/3.jpg">'+
'</div>'+
'<div class="item parent 1">'+
'<img alt="" title="" src="images/particulares/tartas_y_pasteles/4.jpg">'+
'</div>'+
'<div class="item parent 1">'+
'<img alt="" title="" src="images/particulares/tartas_y_pasteles/5.jpg">'+
'</div>'+
'<div class="item parent 1">'+
'<img alt="" title="" src="images/particulares/tartas_y_pasteles/1.jpg">'+
'</div>'+
'<div class="item parent 1">'+
'<img alt="" title="" src="images/particulares/tartas_y_pasteles/7.jpg">'+
'</div>'+
'<div class="item parent 1">'+
'<img alt="" title="" src="images/particulares/tartas_y_pasteles/8.jpg">'+
'</div>'+
'<div class="item parent 1">'+
'<img alt="" title="" src="images/particulares/tartas_y_pasteles/9.jpg">'+
'</div>'+
'<div class="item parent 1">'+
'<img alt="" title="" src="images/particulares/tartas_y_pasteles/10.jpg">'+
'</div>'+
'<div class="item parent 1">'+
'<img alt="" title="" src="images/particulares/tartas_y_pasteles/11.jpg">'+
'</div>'+
'<div class="item parent 1">'+
'<img alt="" title="" src="images/particulares/tartas_y_pasteles/12.jpg">'+
'</div>'+
'<div class="item parent 1">'+
'<img alt="" title="" src="images/particulares/tartas_y_pasteles/13.jpg">'+
'</div>'+
'<div class="item parent 1">'+
'<img alt="" title="" src="images/particulares/tartas_y_pasteles/14.jpg">'+
'</div>'+
'<div class="item parent 1">'+
'<img alt="" title="" src="images/particulares/tartas_y_pasteles/15.jpg">'+
'</div>'+
'<div class="item parent 1">'+
'<img alt="" title="" src="images/particulares/tartas_y_pasteles/16.jpg">'+
'</div>'+
'<div class="item parent 1">'+
'<img alt="" title="" src="images/particulares/tartas_y_pasteles/17.jpg">'+
'</div>'+
'<div class="item parent 1">'+
'<img alt="" title="" src="images/particulares/tartas_y_pasteles/18.jpg">'+
'</div>'+
'<div class="item parent 1">'+
'<img alt="" title="" src="images/particulares/tartas_y_pasteles/19.jpg">'+
'</div>'+
'<div class="item parent 1">'+
'<img alt="" title="" src="images/particulares/tartas_y_pasteles/20.jpg">'+
'</div>'+
'<div class="item parent 1">'+
'<img alt="" title="" src="images/particulares/tartas_y_pasteles/21.jpg">'+
'</div>'+
'<div class="item parent 1">'+
'<img alt="" title="" src="images/particulares/tartas_y_pasteles/22.jpg">'+
'</div>'+
'<div class="item parent 1">'+
'<img alt="" title="" src="images/particulares/tartas_y_pasteles/23.jpg">'+
'</div>'+
'<div class="item parent 1">'+
'<img alt="" title="" src="images/particulares/tartas_y_pasteles/25.jpg">'+
'</div>'+
'<div class="item parent 1">'+
'<img alt="" title="" src="images/particulares/tartas_y_pasteles/26.jpg">'+
'</div>'+
'<div class="item parent 1">'+
'<img alt="" title="" src="images/particulares/tartas_y_pasteles/27.jpg">'+
'</div>'+
'<div class="item parent 1">'+
'<img alt="" title="" src="images/particulares/tartas_y_pasteles/28.jpg">'+
'</div>'+
'<div class="item parent 1">'+
'<img alt="" title="" src="images/particulares/tartas_y_pasteles/29.jpg">'+
'</div>'+
'<div class="item parent 1">'+
'<img alt="" title="" src="images/particulares/tartas_y_pasteles/30.jpg">'+
'</div>'+
'<div class="item parent 1">'+
'<img alt="" title="" src="images/particulares/tartas_y_pasteles/31.jpg">'+
'</div>'+
'<div class="item parent 1">'+
'<img alt="" title="" src="images/particulares/tartas_y_pasteles/32.jpg">'+
'</div>'+
'<div class="item parent 1">'+
'<img alt="" title="" src="images/particulares/tartas_y_pasteles/33.jpg">'+
'</div>'+
'<div class="item parent 1">'+
'<img alt="" title="" src="images/particulares/tartas_y_pasteles/34.jpg">'+
'</div>'+
'<div class="item parent 1">'+
'<img alt="" title="" src="images/particulares/tartas_y_pasteles/35.jpg">'+
'</div>'+
'<div class="item parent 1">'+
'<img alt="" title="" src="images/particulares/tartas_y_pasteles/36.jpg">'+
'</div>'+
'<div class="item parent 1">'+
'<img alt="" title="" src="images/particulares/tartas_y_pasteles/37.jpg">'+
'</div>'+
'<div class="item parent 1">'+
'<img alt="" title="" src="images/particulares/tartas_y_pasteles/38.jpg">'+
'</div>'+
'<div class="item parent 1">'+
'<img alt="" title="" src="images/particulares/tartas_y_pasteles/39.jpg">'+
'</div>'+
'</div>'+
'</div>'+
'<div id="Carousel2" class="carousel slide">'+
'<!-- Carousel items -->'+
'<div class="carousel-inner">'+
'<div class="item active">'+
'<div class="row">'+
'<div class="col-xs-3 img-responsive"><a class="thumbnail"><img src="images/particulares/tartas_y_pasteles/2.jpg" alt="Image" onclick="changePhoto(src,1)" style="max-width:100%;"></a></div>'+
'<div class="col-xs-3 img-responsive"><a class="thumbnail"><img src="images/particulares/tartas_y_pasteles/3.jpg" alt="Image" onclick="changePhoto(src,1)" style="max-width:100%;"></a></div>'+
'<div class="col-xs-3 img-responsive"><a class="thumbnail"><img src="images/particulares/tartas_y_pasteles/4.jpg" alt="Image" onclick="changePhoto(src,1)" style="max-width:100%;"></a></div>'+
'<div class="col-xs-3 img-responsive"><a class="thumbnail"><img src="images/particulares/tartas_y_pasteles/5.jpg" alt="Image" onclick="changePhoto(src,1)" style="max-width:100%;"></a></div>'+
'</div><!--.row-->'+
'</div><!--.item-->'+
''+
'<div class="item">'+
'<div class="row">'+
'<div class="col-xs-3 img-responsive"><a class="thumbnail"><img src="images/particulares/tartas_y_pasteles/1.jpg" alt="Image" onclick="changePhoto(src,1)" style="max-width:100%;"></a></div>'+
'<div class="col-xs-3 img-responsive"><a class="thumbnail"><img src="images/particulares/tartas_y_pasteles/7.jpg" alt="Image" onclick="changePhoto(src,1)" style="max-width:100%;"></a></div>'+
'<div class="col-xs-3 img-responsive"><a class="thumbnail"><img src="images/particulares/tartas_y_pasteles/8.jpg" alt="Image" onclick="changePhoto(src,1)" style="max-width:100%;"></a></div>'+
'<div class="col-xs-3 img-responsive"><a class="thumbnail"><img src="images/particulares/tartas_y_pasteles/9.jpg" alt="Image" onclick="changePhoto(src,1)" style="max-width:100%;"></a></div>'+
'</div><!--.row-->'+
'</div><!--.item-->'+
'<div class="item">'+
'<div class="row">'+
'<div class="col-xs-3 img-responsive"><a class="thumbnail"><img src="images/particulares/tartas_y_pasteles/10.jpg" alt="Image" onclick="changePhoto(src,1)" style="max-width:100%;"></a></div>'+
'<div class="col-xs-3 img-responsive"><a class="thumbnail"><img src="images/particulares/tartas_y_pasteles/11.jpg" alt="Image" onclick="changePhoto(src,1)" style="max-width:100%;"></a></div>'+
'<div class="col-xs-3 img-responsive"><a class="thumbnail"><img src="images/particulares/tartas_y_pasteles/12.jpg" alt="Image" onclick="changePhoto(src,1)" style="max-width:100%;"></a></div>'+
'<div class="col-xs-3 img-responsive"><a class="thumbnail"><img src="images/particulares/tartas_y_pasteles/13.jpg" alt="Image" onclick="changePhoto(src,1)" style="max-width:100%;"></a></div>'+
'</div><!--.row-->'+
'</div><!--.item-->'+
'<div class="item">'+
'<div class="row">'+
'<div class="col-xs-3 img-responsive"><a class="thumbnail"><img src="images/particulares/tartas_y_pasteles/14.jpg" alt="Image" onclick="changePhoto(src,1)" style="max-width:100%;"></a></div>'+
'<div class="col-xs-3 img-responsive"><a class="thumbnail"><img src="images/particulares/tartas_y_pasteles/15.jpg" alt="Image" onclick="changePhoto(src,1)" style="max-width:100%;"></a></div>'+
'<div class="col-xs-3 img-responsive"><a class="thumbnail"><img src="images/particulares/tartas_y_pasteles/16.jpg" alt="Image" onclick="changePhoto(src,1)" style="max-width:100%;"></a></div>'+
'<div class="col-xs-3 img-responsive"><a class="thumbnail"><img src="images/particulares/tartas_y_pasteles/17.jpg" alt="Image" onclick="changePhoto(src,1)" style="max-width:100%;"></a></div>'+
'</div><!--.row-->'+
'</div><!--.item-->'+
'<div class="item">'+
'<div class="row">'+
'<div class="col-xs-3 img-responsive"><a class="thumbnail"><img src="images/particulares/tartas_y_pasteles/18.jpg" alt="Image" onclick="changePhoto(src,1)" style="max-width:100%;"></a></div>'+
'<div class="col-xs-3 img-responsive"><a class="thumbnail"><img src="images/particulares/tartas_y_pasteles/19.jpg" alt="Image" onclick="changePhoto(src,1)" style="max-width:100%;"></a></div>'+
'<div class="col-xs-3 img-responsive"><a class="thumbnail"><img src="images/particulares/tartas_y_pasteles/20.jpg" alt="Image" onclick="changePhoto(src,1)" style="max-width:100%;"></a></div>'+
'<div class="col-xs-3 img-responsive"><a class="thumbnail"><img src="images/particulares/tartas_y_pasteles/21.jpg" alt="Image" onclick="changePhoto(src,1)" style="max-width:100%;"></a></div>'+
'</div><!--.row-->'+
'</div><!--.item-->'+
'<div class="item">'+
'<div class="row">'+
'<div class="col-xs-3 img-responsive"><a class="thumbnail"><img src="images/particulares/tartas_y_pasteles/22.jpg" alt="Image" onclick="changePhoto(src,1)" style="max-width:100%;"></a></div>'+
'<div class="col-xs-3 img-responsive"><a class="thumbnail"><img src="images/particulares/tartas_y_pasteles/23.jpg" alt="Image" onclick="changePhoto(src,1)" style="max-width:100%;"></a></div>'+
'<div class="col-xs-3 img-responsive"><a class="thumbnail"><img src="images/particulares/tartas_y_pasteles/25.jpg" alt="Image" onclick="changePhoto(src,1)" style="max-width:100%;"></a></div>'+
'<div class="col-xs-3 img-responsive"><a class="thumbnail"><img src="images/particulares/tartas_y_pasteles/26.jpg" alt="Image" onclick="changePhoto(src,1)" style="max-width:100%;"></a></div>'+
'</div><!--.row-->'+
'</div><!--.item-->'+
'<div class="item">'+
'<div class="row">'+
'<div class="col-xs-3 img-responsive"><a class="thumbnail"><img src="images/particulares/tartas_y_pasteles/27.jpg" alt="Image" onclick="changePhoto(src,1)" style="max-width:100%;"></a></div>'+
'<div class="col-xs-3 img-responsive"><a class="thumbnail"><img src="images/particulares/tartas_y_pasteles/28.jpg" alt="Image" onclick="changePhoto(src,1)" style="max-width:100%;"></a></div>'+
'<div class="col-xs-3 img-responsive"><a class="thumbnail"><img src="images/particulares/tartas_y_pasteles/29.jpg" alt="Image" onclick="changePhoto(src,1)" style="max-width:100%;"></a></div>'+
'<div class="col-xs-3 img-responsive"><a class="thumbnail"><img src="images/particulares/tartas_y_pasteles/30.jpg" alt="Image" onclick="changePhoto(src,1)" style="max-width:100%;"></a></div>'+
'</div><!--.row-->'+
'</div><!--.item-->'+
'<div class="item">'+
'<div class="row">'+
'<div class="col-xs-3 img-responsive"><a class="thumbnail"><img src="images/particulares/tartas_y_pasteles/31.jpg" alt="Image" onclick="changePhoto(src,1)" style="max-width:100%;"></a></div>'+
'<div class="col-xs-3 img-responsive"><a class="thumbnail"><img src="images/particulares/tartas_y_pasteles/32.jpg" alt="Image" onclick="changePhoto(src,1)" style="max-width:100%;"></a></div>'+
'<div class="col-xs-3 img-responsive"><a class="thumbnail"><img src="images/particulares/tartas_y_pasteles/33.jpg" alt="Image" onclick="changePhoto(src,1)" style="max-width:100%;"></a></div>'+
'<div class="col-xs-3 img-responsive"><a class="thumbnail"><img src="images/particulares/tartas_y_pasteles/34.jpg" alt="Image" onclick="changePhoto(src,1)" style="max-width:100%;"></a></div>'+
'</div><!--.row-->'+
'</div><!--.item-->'+
'<div class="item">'+
'<div class="row">'+
'<div class="col-xs-3 img-responsive"><a class="thumbnail"><img src="images/particulares/tartas_y_pasteles/35.jpg" alt="Image" onclick="changePhoto(src,1)" style="max-width:100%;"></a></div>'+
'<div class="col-xs-3 img-responsive"><a class="thumbnail"><img src="images/particulares/tartas_y_pasteles/36.jpg" alt="Image" onclick="changePhoto(src,1)" style="max-width:100%;"></a></div>'+
'<div class="col-xs-3 img-responsive"><a class="thumbnail"><img src="images/particulares/tartas_y_pasteles/37.jpg" alt="Image" onclick="changePhoto(src,1)" style="max-width:100%;"></a></div>'+
'<div class="col-xs-3 img-responsive"><a class="thumbnail"><img src="images/particulares/tartas_y_pasteles/38.jpg" alt="Image" onclick="changePhoto(src,1)" style="max-width:100%;"></a></div>'+
'</div><!--.row-->'+
'</div><!--.item-->'+
'<div class="item">'+
'<div class="row">'+
'<div class="col-xs-3 img-responsive"><a class="thumbnail"><img src="images/particulares/tartas_y_pasteles/39.jpg" alt="Image" onclick="changePhoto(src,1)" style="max-width:100%;"></a></div>'+
'</div><!--.row-->'+
'</div><!--.item-->'+
'</div><!--.carousel-inner-->'+
'<a data-slide="prev" href="#Carousel2" class="left carousel-control">'+
'<i class="fa fa-arrow-left"></i></a>'+
'<a data-slide="next" href="#Carousel2" class="right carousel-control">'+
'<i class="fa fa-arrow-right"></i></a>'+
'<ol class="carousel-indicators">'+
'<li data-target="#Carousel2" data-slide-to="0" class="active"></li>'+
'<li data-target="#Carousel2" data-slide-to="1"></li>'+
'<li data-target="#Carousel2" data-slide-to="2"></li>'+
'<li data-target="#Carousel2" data-slide-to="3"></li>'+
'<li data-target="#Carousel2" data-slide-to="4"></li>'+
'<li data-target="#Carousel2" data-slide-to="5"></li>'+
'<li data-target="#Carousel2" data-slide-to="6"></li>'+
'<li data-target="#Carousel2" data-slide-to="7"></li>'+
'<li data-target="#Carousel2" data-slide-to="8"></li>'+
'<li data-target="#Carousel2" data-slide-to="9"></li>'+
'<li data-target="#Carousel2" data-slide-to="10"></li>'+
'</ol>'+
'</div><!--.Carousel-->    '+
'</div>'+
'</div>'+


//Carousel3

'<div class="container" id="carouselDiv">'+
'<div class="col-md-8">'+
'<div class="big-carousel-2 slide article-slide" id="article-photo-carousel">'+
'<!-- Wrapper for slides -->'+
'<div class="carousel-inner cont-slider">'+
'<div class="item parent active" id="itemActive0">'+
'<img alt="" title="" src="images/particulares/tartas_especiales/2.jpg">'+
'</div>'+
'<div class="item parent 2">'+
'<img alt="" title="" src="images/particulares/tartas_especiales/1.jpg">'+
'</div>'+
'<div class="item parent 2">'+
'<img alt="" title="" src="images/particulares/tartas_especiales/3.jpg">'+
'</div>'+
'<div class="item parent 2">'+
'<img alt="" title="" src="images/particulares/tartas_especiales/4.jpg">'+
'</div>'+
'<div class="item parent 2">'+
'<img alt="" title="" src="images/particulares/tartas_especiales/5.jpg">'+
'</div>'+
'<div class="item parent 2">'+
'<img alt="" title="" src="images/particulares/tartas_especiales/6.jpg">'+
'</div>'+
'<div class="item parent 2">'+
'<img alt="" title="" src="images/particulares/tartas_especiales/7.jpg">'+
'</div>'+
'<div class="item parent 2">'+
'<img alt="" title="" src="images/particulares/tartas_especiales/8.jpg">'+
'</div>'+
'<div class="item parent 2">'+
'<img alt="" title="" src="images/particulares/tartas_especiales/9.jpg">'+
'</div>'+
'<div class="item parent 2">'+
'<img alt="" title="" src="images/particulares/tartas_especiales/10.jpg">'+
'</div>'+
'<div class="item parent 2">'+
'<img alt="" title="" src="images/particulares/tartas_especiales/11.jpg">'+
'</div>'+
'<div class="item parent 2">'+
'<img alt="" title="" src="images/particulares/tartas_especiales/12.jpg">'+
'</div>'+
'<div class="item parent 2">'+
'<img alt="" title="" src="images/particulares/tartas_especiales/13.jpg">'+
'</div>'+
'<div class="item parent 2">'+
'<img alt="" title="" src="images/particulares/tartas_especiales/14.jpg">'+
'</div>'+
'<div class="item parent 2">'+
'<img alt="" title="" src="images/particulares/tartas_especiales/15.jpg">'+
'</div>'+
'<div class="item parent 2">'+
'<img alt="" title="" src="images/particulares/tartas_especiales/16.jpg">'+
'</div>'+
'<div class="item parent 2">'+
'<img alt="" title="" src="images/particulares/tartas_especiales/17.jpg">'+
'</div>'+
'<div class="item parent 2">'+
'<img alt="" title="" src="images/particulares/tartas_especiales/18.jpg">'+
'</div>'+
'<div class="item parent 2">'+
'<img alt="" title="" src="images/particulares/tartas_especiales/19.jpg">'+
'</div>'+
'<div class="item parent 2">'+
'<img alt="" title="" src="images/particulares/tartas_especiales/20.jpg">'+
'</div>'+
'</div>'+
'</div>'+
'<div id="Carousel3" class="carousel slide">'+
'<!-- Carousel items -->'+
'<div class="carousel-inner">'+
'<div class="item active">'+
'<div class="row">'+
'<div class="col-xs-3 img-responsive"><a class="thumbnail"><img src="images/particulares/tartas_especiales/2.jpg" alt="Image" onclick="changePhoto(src,2)" style="max-width:100%;"></a></div>'+
'<div class="col-xs-3 img-responsive"><a class="thumbnail"><img src="images/particulares/tartas_especiales/1.jpg" alt="Image" onclick="changePhoto(src,2)" style="max-width:100%;"></a></div>'+
'<div class="col-xs-3 img-responsive"><a class="thumbnail"><img src="images/particulares/tartas_especiales/3.jpg" alt="Image" onclick="changePhoto(src,2)" style="max-width:100%;"></a></div>'+
'<div class="col-xs-3 img-responsive"><a class="thumbnail"><img src="images/particulares/tartas_especiales/4.jpg" alt="Image" onclick="changePhoto(src,2)" style="max-width:100%;"></a></div>'+
'</div><!--.row-->'+
'</div><!--.item-->'+
''+
'<div class="item">'+
'<div class="row">'+
'<div class="col-xs-3 img-responsive"><a class="thumbnail"><img src="images/particulares/tartas_especiales/5.jpg" alt="Image" onclick="changePhoto(src,2)" style="max-width:100%;"></a></div>'+
'<div class="col-xs-3 img-responsive"><a class="thumbnail"><img src="images/particulares/tartas_especiales/6.jpg" alt="Image" onclick="changePhoto(src,2)" style="max-width:100%;"></a></div>'+
'<div class="col-xs-3 img-responsive"><a class="thumbnail"><img src="images/particulares/tartas_especiales/7.jpg" alt="Image" onclick="changePhoto(src,2)" style="max-width:100%;"></a></div>'+
'<div class="col-xs-3 img-responsive"><a class="thumbnail"><img src="images/particulares/tartas_especiales/8.jpg" alt="Image" onclick="changePhoto(src,2)" style="max-width:100%;"></a></div>'+
'</div><!--.row-->'+
'</div><!--.item-->'+
'<div class="item">'+
'<div class="row">'+
'<div class="col-xs-3 img-responsive"><a class="thumbnail"><img src="images/particulares/tartas_especiales/9.jpg" alt="Image" onclick="changePhoto(src,2)" style="max-width:100%;"></a></div>'+
'<div class="col-xs-3 img-responsive"><a class="thumbnail"><img src="images/particulares/tartas_especiales/10.jpg" alt="Image" onclick="changePhoto(src,2)" style="max-width:100%;"></a></div>'+
'<div class="col-xs-3 img-responsive"><a class="thumbnail"><img src="images/particulares/tartas_especiales/11.jpg" alt="Image" onclick="changePhoto(src,2)" style="max-width:100%;"></a></div>'+
'<div class="col-xs-3 img-responsive"><a class="thumbnail"><img src="images/particulares/tartas_especiales/12.jpg" alt="Image" onclick="changePhoto(src,2)" style="max-width:100%;"></a></div>'+
'</div><!--.row-->'+
'</div><!--.item-->'+
'<div class="item">'+
'<div class="row">'+
'<div class="col-xs-3 img-responsive"><a class="thumbnail"><img src="images/particulares/tartas_especiales/13.jpg" alt="Image" onclick="changePhoto(src,2)" style="max-width:100%;"></a></div>'+
'<div class="col-xs-3 img-responsive"><a class="thumbnail"><img src="images/particulares/tartas_especiales/14.jpg" alt="Image" onclick="changePhoto(src,2)" style="max-width:100%;"></a></div>'+
'<div class="col-xs-3 img-responsive"><a class="thumbnail"><img src="images/particulares/tartas_especiales/15.jpg" alt="Image" onclick="changePhoto(src,2)" style="max-width:100%;"></a></div>'+
'<div class="col-xs-3 img-responsive"><a class="thumbnail"><img src="images/particulares/tartas_especiales/16.jpg" alt="Image" onclick="changePhoto(src,2)" style="max-width:100%;"></a></div>'+
'</div><!--.row-->'+
'</div><!--.item-->'+
'<div class="item">'+
'<div class="row">'+
'<div class="col-xs-3 img-responsive"><a class="thumbnail"><img src="images/particulares/tartas_especiales/17.jpg" alt="Image" onclick="changePhoto(src,2)" style="max-width:100%;"></a></div>'+
'<div class="col-xs-3 img-responsive"><a class="thumbnail"><img src="images/particulares/tartas_especiales/18.jpg" alt="Image" onclick="changePhoto(src,2)" style="max-width:100%;"></a></div>'+
'<div class="col-xs-3 img-responsive"><a class="thumbnail"><img src="images/particulares/tartas_especiales/19.jpg" alt="Image" onclick="changePhoto(src,2)" style="max-width:100%;"></a></div>'+
'<div class="col-xs-3 img-responsive"><a class="thumbnail"><img src="images/particulares/tartas_especiales/20.jpg" alt="Image" onclick="changePhoto(src,2)" style="max-width:100%;"></a></div>'+
'</div><!--.row-->'+
'</div><!--.item-->'+
'</div><!--.carousel-inner-->'+
'<a data-slide="prev" href="#Carousel3" class="left carousel-control">'+
'<i class="fa fa-arrow-left"></i></a>'+
'<a data-slide="next" href="#Carousel3" class="right carousel-control">'+
'<i class="fa fa-arrow-right"></i></a>'+
'<ol class="carousel-indicators">'+
'<li data-target="#Carousel3" data-slide-to="0" class="active"></li>'+
'<li data-target="#Carousel3" data-slide-to="1"></li>'+
'<li data-target="#Carousel3" data-slide-to="2"></li>'+
'<li data-target="#Carousel3" data-slide-to="3"></li>'+
'<li data-target="#Carousel3" data-slide-to="4"></li>'+
'</ol>'+
'</div><!--.Carousel-->    '+
'</div>'+
'<div class="col-md-4">'+
'<div class="content" id="pastelesText">'+
'<h3>Tartas personalizadas</h3>'+
'<p>Si quieres <b>sorprender</b> a tus familiares en su dia más especial, contacta con nosotros'+
' y envianos la imagen que quieres que plasmemos en su tarta. <b>¡Le encantará!</b>'+
'</p>'+
'</div>'+
'</div>'+
'</div>')


	$('.big-carousel-2').carousel({
  		interval: 3000
	});
	$('.carousel').carousel({
  		interval: false
	});
}



function resetCenterBox(){
	$('#centerBox').html('<div class="box container" id="mayoristas">'+
'<header>'+
'<h2>Productos para profesionales</h2>'+
'<p>Que estar lejos de nosotros no le impida disfrutar de nuestros productos.</p>'+
'</header>'+
'<section>'+
'<p style="text-align: justify;">Ponemos a su disposición una gran variedad de nuestros mejores productos enfocados especialmente a la hosteleria. Contamos con una importante red de distribuidores que operan en gran parte de la Península.</p>'+
'<div class="row">'+
'<div class="col-md-4 col-md-offset-4 col-xs-12">'+
'<input type="button" value="Descubre más" onclick="location.href='+"'"+'#centerBox'+"'"+';proffesionalSection();"/>'+
'</div>'+
'</div>'+
'</section>'+
'</div>'+
'<div class="box container" id="particulares">'+
'<header>'+
'<h2>Productos para particulares</h2>'+
'<p>Si quieres ofrecer las mejores empanadas y tartas a tus familiares y amigos, esta es tu sección</p>'+
'</header>'+
'<section>'+
'<p style="text-align: justify;">Hacemos empanadas, pasteles y tartas para celebraciones por encargo. Contamos con una amplia variedad de sabores y tamaños. Si quieres podemos hacerte tu tarta con la foto que quieras, o si la quieres más dulce ¡te la hacemos de chuches!</p>'+
'<div class="row">'+
'<div class="col-md-4 col-md-offset-4 col-xs-12">'+
'<input type="button" value="Descubre más" onclick="location.href='+"'"+'#centerBox'+"'"+';individualSection();"/>'+
'</div>'+
'</div>'+
'</section>'+
'</div>')
}