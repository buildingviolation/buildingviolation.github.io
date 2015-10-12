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


	$('#search-box-button').click(function(e){
		e.preventDefault();

		var address=$('#box-address').val();
		var city=$('#box-city').val();
		var url='http://buildingviolation.softelos.com/report-violation?address='+address+'&city='+city;
		window.location.href=url;
	});

});