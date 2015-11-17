$(document).ready(function() {
	var is_chrome = navigator.userAgent.toLowerCase().indexOf('chrome') > -1;
	if(is_chrome){
		$('#map').css({"width":"100%","height":"800px"});
	}
});