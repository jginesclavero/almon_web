function changePhoto(src,id){
	if(id==1){
		$(".active.parent.1 img").attr('src',src);
	}else if(id==2){
		$(".active.parent.2 img").attr('src',src);
	}
}

function proffesionalSection(){
	$("#centerBox").html('<div class="container" id="carouselDiv"><div class="col-md-8"><div class="big-carousel slide article-slide" id="article-photo-carousel">'+
		'<!-- Wrapper for slides --><div class="carousel-inner cont-slider"><div class="item parent active" id="itemActive0"><img alt="" title="" src="images/refrigerados/1.jpg">'+
    	'</div><div class="item parent 1"><img alt="" title="" src="images/refrigerados/2.jpg"></div><div class="item parent 1"><img alt="" title="" src="images/refrigerados/3.jpg">'+
    	'</div><div class="item parent 1"><img alt="" title="" src="images/refrigerados/4.jpg"></div><div class="item parent 1"><img alt="" title="" src="images/refrigerados/5.jpg">'+
    	'</div><div class="item parent 1"><img alt="" title="" src="images/refrigerados/6.jpg"></div><div class="item parent 1"><img alt="" title="" src="images/refrigerados/7.jpg">'+
    	'</div></div></div><div id="Carousel1" class="carousel slide"><!-- Carousel items --><div class="carousel-inner"><div class="item active"><div class="row">'+
		'<div class="col-xs-3 img-responsive"><a class="thumbnail"><img src="images/refrigerados/1.jpg" alt="Image" onclick="changePhoto(src,1)" style="max-width:100%;"></a></div>'+
		'<div class="col-xs-3 img-responsive"><a class="thumbnail"><img src="images/refrigerados/2.jpg" alt="Image" onclick="changePhoto(src,1)" style="max-width:100%;"></a></div>'+
		'<div class="col-xs-3 img-responsive"><a class="thumbnail"><img src="images/refrigerados/3.jpg" alt="Image" onclick="changePhoto(src,1)" style="max-width:100%;"></a></div>'+
		'<div class="col-xs-3 img-responsive"><a class="thumbnail"><img src="images/refrigerados/4.jpg" alt="Image" onclick="changePhoto(src,1)" style="max-width:100%;"></a></div>'+
		'</div><!--.row--></div><!--.item--><div class="item"><div class="row">'+
		'<div class="col-xs-3 img-responsive"><a class="thumbnail"><img src="images/refrigerados/5.jpg" alt="Image" onclick="changePhoto(src,1)" style="max-width:100%;"></a></div>'+
		'<div class="col-xs-3 img-responsive"><a class="thumbnail"><img src="images/refrigerados/6.jpg" alt="Image" onclick="changePhoto(src,1)" style="max-width:100%;"></a></div>'+
		'<div class="col-xs-3 img-responsive"><a class="thumbnail"><img src="images/refrigerados/7.jpg" alt="Image" onclick="changePhoto(src,1)" style="max-width:100%;"></a></div>'+
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
		'</ol></div><!--.Carousel-->'+  
		'</div>'+
		'<div class="col-md-4">'+
		'<div class="content" id="empanadasText">'+
		'<h3>Empanadas Refrigeradas</h3>'+
		'<p>Disponemos de una gran variedad de <b>tamaños y de sabores</b>. Empanada de 1/2 kg, 1 kg y 2,5 kg con sabores como: <b>atún</b>, jamon y queso, <b>bacon y queso</b>, chorizo o carne picada. Pruebe tambien nuestra'+
		'<b>empanada gallega de atun </b> de 2,5 kg . O si lo prefiere empanadilla de atun de 240 gramos.</p>'+
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
	$("#centerBox").html('<div class="container" id="carouselDiv">'+
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
'<img alt="" title="" src="images/tartas_y_pasteles/2.jpg">'+
'</div>'+
'<div class="item parent 2">'+
'<img alt="" title="" src="images/tartas_y_pasteles/3.jpg">'+
'</div>'+
'<div class="item parent 2">'+
'<img alt="" title="" src="images/tartas_y_pasteles/4.jpg">'+
'</div>'+
'<div class="item parent 2">'+
'<img alt="" title="" src="images/tartas_y_pasteles/5.jpg">'+
'</div>'+
'<div class="item parent 2">'+
'<img alt="" title="" src="images/tartas_y_pasteles/6.jpg">'+
'</div>'+
'<div class="item parent 2">'+
'<img alt="" title="" src="images/tartas_y_pasteles/7.jpg">'+
'</div>'+
'<div class="item parent 2">'+
'<img alt="" title="" src="images/tartas_y_pasteles/8.jpg">'+
'</div>'+
'<div class="item parent 2">'+
'<img alt="" title="" src="images/tartas_y_pasteles/9.jpg">'+
'</div>'+
'<div class="item parent 2">'+
'<img alt="" title="" src="images/tartas_y_pasteles/10.jpg">'+
'</div>'+
'<div class="item parent 2">'+
'<img alt="" title="" src="images/tartas_y_pasteles/11.jpg">'+
'</div>'+
'<div class="item parent 2">'+
'<img alt="" title="" src="images/tartas_y_pasteles/12.jpg">'+
'</div>'+
'<div class="item parent 2">'+
'<img alt="" title="" src="images/tartas_y_pasteles/13.jpg">'+
'</div>'+
'<div class="item parent 2">'+
'<img alt="" title="" src="images/tartas_y_pasteles/14.jpg">'+
'</div>'+
'<div class="item parent 2">'+
'<img alt="" title="" src="images/tartas_y_pasteles/15.jpg">'+
'</div>'+
'<div class="item parent 2">'+
'<img alt="" title="" src="images/tartas_y_pasteles/16.jpg">'+
'</div>'+
'<div class="item parent 2">'+
'<img alt="" title="" src="images/tartas_y_pasteles/17.jpg">'+
'</div>'+
'<div class="item parent 2">'+
'<img alt="" title="" src="images/tartas_y_pasteles/18.jpg">'+
'</div>'+
'<div class="item parent 2">'+
'<img alt="" title="" src="images/tartas_y_pasteles/19.jpg">'+
'</div>'+
'<div class="item parent 2">'+
'<img alt="" title="" src="images/tartas_y_pasteles/20.jpg">'+
'</div>'+
'<div class="item parent 2">'+
'<img alt="" title="" src="images/tartas_y_pasteles/21.jpg">'+
'</div>'+
'<div class="item parent 2">'+
'<img alt="" title="" src="images/tartas_y_pasteles/22.jpg">'+
'</div>'+
'<div class="item parent 2">'+
'<img alt="" title="" src="images/tartas_y_pasteles/23.jpg">'+
'</div>'+
'<div class="item parent 2">'+
'<img alt="" title="" src="images/tartas_y_pasteles/24.jpg">'+
'</div>'+
'</div>'+
'</div>'+
'<div id="Carousel2" class="carousel slide">'+
'<!-- Carousel items -->'+
'<div class="carousel-inner">'+
'<div class="item active">'+
'<div class="row">'+
'<div class="col-xs-3 img-responsive"><a class="thumbnail"><img src="images/tartas_y_pasteles/2.jpg" alt="Image" onclick="changePhoto(src,2)" style="max-width:100%;"></a></div>'+
'<div class="col-xs-3 img-responsive"><a class="thumbnail"><img src="images/tartas_y_pasteles/3.jpg" alt="Image" onclick="changePhoto(src,2)" style="max-width:100%;"></a></div>'+
'<div class="col-xs-3 img-responsive"><a class="thumbnail"><img src="images/tartas_y_pasteles/4.jpg" alt="Image" onclick="changePhoto(src,2)" style="max-width:100%;"></a></div>'+
'<div class="col-xs-3 img-responsive"><a class="thumbnail"><img src="images/tartas_y_pasteles/5.jpg" alt="Image" onclick="changePhoto(src,2)" style="max-width:100%;"></a></div>'+
'</div><!--.row-->'+
'</div><!--.item-->'+
''+
'<div class="item">'+
'<div class="row">'+
'<div class="col-xs-3 img-responsive"><a class="thumbnail"><img src="images/tartas_y_pasteles/6.jpg" alt="Image" onclick="changePhoto(src,2)" style="max-width:100%;"></a></div>'+
'<div class="col-xs-3 img-responsive"><a class="thumbnail"><img src="images/tartas_y_pasteles/7.jpg" alt="Image" onclick="changePhoto(src,2)" style="max-width:100%;"></a></div>'+
'<div class="col-xs-3 img-responsive"><a class="thumbnail"><img src="images/tartas_y_pasteles/8.jpg" alt="Image" onclick="changePhoto(src,2)" style="max-width:100%;"></a></div>'+
'<div class="col-xs-3 img-responsive"><a class="thumbnail"><img src="images/tartas_y_pasteles/9.jpg" alt="Image" onclick="changePhoto(src,2)" style="max-width:100%;"></a></div>'+
'</div><!--.row-->'+
'</div><!--.item-->'+
'<div class="item">'+
'<div class="row">'+
'<div class="col-xs-3 img-responsive"><a class="thumbnail"><img src="images/tartas_y_pasteles/10.jpg" alt="Image" onclick="changePhoto(src,2)" style="max-width:100%;"></a></div>'+
'<div class="col-xs-3 img-responsive"><a class="thumbnail"><img src="images/tartas_y_pasteles/11.jpg" alt="Image" onclick="changePhoto(src,2)" style="max-width:100%;"></a></div>'+
'<div class="col-xs-3 img-responsive"><a class="thumbnail"><img src="images/tartas_y_pasteles/12.jpg" alt="Image" onclick="changePhoto(src,2)" style="max-width:100%;"></a></div>'+
'<div class="col-xs-3 img-responsive"><a class="thumbnail"><img src="images/tartas_y_pasteles/13.jpg" alt="Image" onclick="changePhoto(src,2)" style="max-width:100%;"></a></div>'+
'</div><!--.row-->'+
'</div><!--.item-->'+
'<div class="item">'+
'<div class="row">'+
'<div class="col-xs-3 img-responsive"><a class="thumbnail"><img src="images/tartas_y_pasteles/14.jpg" alt="Image" onclick="changePhoto(src,2)" style="max-width:100%;"></a></div>'+
'<div class="col-xs-3 img-responsive"><a class="thumbnail"><img src="images/tartas_y_pasteles/15.jpg" alt="Image" onclick="changePhoto(src,2)" style="max-width:100%;"></a></div>'+
'<div class="col-xs-3 img-responsive"><a class="thumbnail"><img src="images/tartas_y_pasteles/16.jpg" alt="Image" onclick="changePhoto(src,2)" style="max-width:100%;"></a></div>'+
'<div class="col-xs-3 img-responsive"><a class="thumbnail"><img src="images/tartas_y_pasteles/17.jpg" alt="Image" onclick="changePhoto(src,2)" style="max-width:100%;"></a></div>'+
'</div><!--.row-->'+
'</div><!--.item-->'+
'<div class="item">'+
'<div class="row">'+
'<div class="col-xs-3 img-responsive"><a class="thumbnail"><img src="images/tartas_y_pasteles/18.jpg" alt="Image" onclick="changePhoto(src,2)" style="max-width:100%;"></a></div>'+
'<div class="col-xs-3 img-responsive"><a class="thumbnail"><img src="images/tartas_y_pasteles/19.jpg" alt="Image" onclick="changePhoto(src,2)" style="max-width:100%;"></a></div>'+
'<div class="col-xs-3 img-responsive"><a class="thumbnail"><img src="images/tartas_y_pasteles/20.jpg" alt="Image" onclick="changePhoto(src,2)" style="max-width:100%;"></a></div>'+
'<div class="col-xs-3 img-responsive"><a class="thumbnail"><img src="images/tartas_y_pasteles/21.jpg" alt="Image" onclick="changePhoto(src,2)" style="max-width:100%;"></a></div>'+
'</div><!--.row-->'+
'</div><!--.item-->'+
'<div class="item">'+
'<div class="row">'+
'<div class="col-xs-3 img-responsive"><a class="thumbnail"><img src="images/tartas_y_pasteles/22.jpg" alt="Image" onclick="changePhoto(src,2)" style="max-width:100%;"></a></div>'+
'<div class="col-xs-3 img-responsive"><a class="thumbnail"><img src="images/tartas_y_pasteles/23.jpg" alt="Image" onclick="changePhoto(src,2)" style="max-width:100%;"></a></div>'+
'<div class="col-xs-3 img-responsive"><a class="thumbnail"><img src="images/tartas_y_pasteles/24.jpg" alt="Image" onclick="changePhoto(src,2)" style="max-width:100%;"></a></div>'+
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
'</ol>'+
'</div><!--.Carousel-->    '+
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