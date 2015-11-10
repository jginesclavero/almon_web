$(document).ready(function() {
  $(window).scroll(function () {
     // console.log($(window).scrollTop())
    if ($(window).scrollTop() > 500) {
      $('#nav_bar').addClass('navbar-fixed-top');
      $('#nav_bar').html('<div class="container"><!-- Brand and toggle get grouped for better mobile display -->'+
'<div class="navbar-header">'+
'<button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar-collapse-1">'+
'<span class="sr-only">Toggle navigation</span>'+
'<span class="icon-bar"></span>'+
'<span class="icon-bar"></span>'+
'<span class="icon-bar"></span>'+
'</button>'+
'<a class="navbar-brand" href="#">Brand</a>'+
'</div>'+
'<!-- Collect the nav links, forms, and other content for toggling -->'+
'<div class="collapse navbar-collapse" id="navbar-collapse-1">'+
'<ul class="nav navbar-nav navbar-right">'+
'<li><a class="nounderline" onclick="resetCenterBox()" href="#">Home</a></li>'+
'<li><a class="nounderline" onclick="resetCenterBox()" href="#mayoristas">Mayoristas</a></li>'+
'<li><a class="nounderline" onclick="resetCenterBox()" href="#particulares">Particulares</a></li>'+
'<li><a class="nounderline" href="#empresa">Sobre Nosotros</a></li>'+
'<li><a class="nounderline" href="#contacto">Contacto</a></li>'+
'</ul>'+
'</div><!-- /.navbar-collapse -->'+
'</div><!-- /.container -->');
    }
    if ($(window).scrollTop() < 501) {
      $('#nav_bar').html('');
      $('#nav_bar').removeClass('navbar-fixed-top');
    }
  });
});