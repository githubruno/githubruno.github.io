var main=function(){
	$('nav').find('li').click(function(){
		$('nav').find('li').removeClass('active');
		$(this).addClass('active');
	});
}
$(document).ready(main)
