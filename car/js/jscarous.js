var main=function(){
	$('.carousel').carousel({
  interval: false
});
}
$(document).ready(main);

var menu=function(){
	$('nav').find('li').click(function(){
		$('nav').find('li').removeClass('active');
		$(this).addClass('active');
	});
}
$(document).ready(menu);









