$(document).ready(function() {
  $(window).scroll(function () {
     // console.log($(window).scrollTop())
    if ($(window).scrollTop() > 500) {
      $('#nav_bar').addClass('navbar-fixed-top');
      $('#nav_bar').html('<div class="container"><!-- Brand and toggle get grouped for better mobile display -->'+
'<div class="navbar-header">'+
'<button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#carouselDivRoscones">'+
'<span class="sr-only">Toggle navigation</span>'+
'<span class="icon-bar"></span>'+
'<span class="icon-bar"></span>'+
'<span class="icon-bar"></span>'+
'</button>'+
'<a class="navbar navbar-brand" href="#header" style="border-style: none;" onclick="resetCenterBox()" id="logoDiv">'+
'<img id="logo" src="assets/css/images/almon-sl.png">'+
'</a>'+
'</div>'+
'<!-- Collect the nav links, forms, and other content for toggling -->'+
'<div class="collapse navbar-collapse" id="navbar-collapse-1">'+
'<ul class="nav navbar-nav navbar-right">'+
'<li><input type="button" value="Especial Navidad" id="especialNavidad" onclick="buttonScroll(carouselDivRoscones)"/></li>'+
'<li><a class="navbar nounderline" onclick="resetCenterBox()" href="#mayoristas">Mayoristas</a></li>'+
'<li><a class="navbar nounderline" onclick="resetCenterBox()" href="#particulares">Particulares</a></li>'+
'<li><a class="navbar nounderline" href="#empresa">Empresa</a></li>'+
'<li><a class="navbar nounderline" href="#contacto">Contacto</a></li>'+
'<li><a href="https://www.facebook.com/productosa2" class="icon fa-facebook"><span class="label">Facebook</span></a></li>'+
'</ul>'+
'</div><!-- /.navbar-collapse -->'+
'</div><!-- /.container -->');

    if($(window).width() > 1100){
        $("#logoDiv").css("margin-left","-60%");
      }
    }
    if ($(window).scrollTop() < 501) {
      $('#nav_bar').html('');
      $('#nav_bar').removeClass('navbar-fixed-top');
    }

    $('a.navbar[href*=#]').click(function() {
      if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'')
      && location.hostname == this.hostname) {
             var $target = $(this.hash);
             $target = $target.length && $target || $('[name=' + this.hash.slice(1) +']');
             if ($target.length) {
                 var targetOffset = $target.offset().top;
                 $('html,body').animate({scrollTop: targetOffset}, 1000);
                 return false;
            }
       }
   });
  });
});

function buttonScroll(id){
  var $target = $(id);
  $target = $target.length && $target || $('[name=' + this.hash.slice(1) +']');
  if ($target.length) {
    var targetOffset = $target.offset().top;
    $('html,body').animate({scrollTop: targetOffset}, 1000);
    return false;
        }
       
}