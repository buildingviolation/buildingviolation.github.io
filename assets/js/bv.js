$(document).ready(function($) {

	$(window).scroll(function () {
		var scrollAmount = $(window).scrollTop();

		if(scrollAmount>1000){
			$('div#brand').addClass('collapsed');
			$('div#brand').removeClass('expanded');
		}else{
			$('div#brand').addClass('expanded');
			$('div#brand').removeClass('collapsed');			
		}
	});
});